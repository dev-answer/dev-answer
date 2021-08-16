import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const Auth = class {
  generateAccessToken = () => {
    const randomNumber = Math.floor(Math.random() * 1_000_000);
    const accessToken = jwt.sign({
      randomNumber,
      signature: process.env.JWT_SIGNITURE,
    }, process.env.JWT_SECRET!);

    return accessToken;
  }
};

export default new Auth();
