import connectToDatabase from 'src/utils/mogodb';

export async function getVideos() {
  const { db } = await connectToDatabase();
  const data = await db.collection('courseObjects').find().toArray();

  return data;
}

export default getVideos;
