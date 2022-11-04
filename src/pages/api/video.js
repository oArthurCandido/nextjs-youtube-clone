import { ObjectId } from 'mongodb';
import nc from 'next-connect';
import connectToDatabase from 'src/utils/mogodb';
import upload from 'src/utils/uploads';
import jwt from 'next-auth/jwt';
import { getToken } from 'next-auth/jwt';

const secret = process.env.JWT_SECRET;

const handler = nc()
  .use(upload.single('file'))
  .post(async (req, res) => {
    const { title, authorId, authorName, authorAvatar, videoUrl } = req.body;

    const token = await getToken({ req, secret });

    if (token) {
      const { db } = await connectToDatabase();
      const collection = db.collection('courseObjects');

      await collection.insertOne({
        title,
        authorId: ObjectId(authorId),
        authorName,
        authorAvatar,
        views: 0,
        thumb: req.file.location,
        videoUrl,
        updatedAt: new Date()
      });
      if (req.file) {
        return res
          .status(200)
          .json({ message: 'Video uploaded successfully!' });
      } else {
        return res.status(500).json({ message: 'Error uploading video!' });
      }
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // return res.status(200).json({ ok: true });
  })
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;

// export default function userHandler(req, res) {
//   const { method } = req;

//   switch (method) {
//     case 'POST':
//       // Get data from your database
//       res.status(200).json({ msg: ` ${method}` });
//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'PUT']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
