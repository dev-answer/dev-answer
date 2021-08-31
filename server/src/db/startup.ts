import mongoose from 'mongoose';

export default async function () {
  try {
    await mongoose.connect(process.env.DB_URL!);
  } catch (err) {
    console.warn(err);
    return null;
  }
};
