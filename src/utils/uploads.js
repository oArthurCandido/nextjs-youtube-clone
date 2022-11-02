import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import crypto from 'crypto';

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID_ART,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ART,
  region: process.env.AWS_REGION_ART
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME_ART,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, fileName);
      });
    }
  })
});

export default upload;
