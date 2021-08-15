import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const Auth = class {
  private signature = 'DEV_ANSWER_SIGNATURE'

  generateAccessToken = () => {
    const randomNumber = Math.floor(Math.random() * 1_000_000);
    const accessToken = jwt.sign({
      randomNumber,
      signature: this.signature,
    }, process.env.JWT_SECRET!);

    return accessToken;
  }
};

export default new Auth();
