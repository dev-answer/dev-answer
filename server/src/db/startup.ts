import mongoose from 'mongoose';

export default async () => {
  try {
    await mongoose.connect(process.env.DB_URL!);
  } catch (err) {
    return err;
  }
  return;
};
