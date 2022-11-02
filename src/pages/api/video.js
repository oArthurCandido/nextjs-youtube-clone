import nc from 'next-connect';
import upload from 'src/utils/uploads';

const handler = nc()
  .use(upload.single('file'))
  .post((req, res) => {
    const { title, authorName, authorAvatar, videoUrl } = req.body;
    res.json({ hello: 'world' });
  })
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

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
