import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

type AccessToken = string
interface Profile {
  name: string
  profileImageURL: string
  githubPageURL: string
}

const InMemoryTokenDB = class {
  private tokenDB = new Map<AccessToken, Profile>()

  private signature = 'DEV_ANSWER_SIGNATURE'

  hasAccessToken = (accessToken: AccessToken) => Boolean(this.tokenDB.get(accessToken))

  getProfile = (accessToken: AccessToken) => {
    const profile = this.tokenDB.get(accessToken);

    if (!profile) {
      return null;
    }

    return profile;
  }

  setAccessToken = (accessToken: AccessToken, profile: Profile) => {
    this.tokenDB.set(accessToken, profile);
  }

  generateAccessToken = () => {
    const randomNumber = Math.floor(Math.random() * 1_000_000);
    const accessToken = jwt.sign({
      randomNumber,
      signature: this.signature,
    }, process.env.JWT_SECRET!);

    return accessToken;
  }
};

export default new InMemoryTokenDB();
