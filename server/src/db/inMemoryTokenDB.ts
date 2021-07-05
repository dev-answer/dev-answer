import jwt from 'jsonwebtoken';

type Token = string
interface Profile {
  name: string
  profileImageURL: string
  githubPageURL: string
}

const InMemoryTokenDB = class {
  private tokenDB = new Map<Token, Profile>()

  private signature = 'DEV_ANSWER_SIGNATURE'

  hasToken = (token: Token) => Boolean(this.tokenDB.get(token))

  getProfile = (token: Token) => {
    const profile = this.tokenDB.get(token);

    if (!profile) {
      return null;
    }

    return profile;
  }

  setToken = (token: Token, profile: Profile) => {
    this.tokenDB.set(token, profile);
  }

  generateToken = () => {
    const randomNumber = Math.floor(Math.random() * 1_000_000);
    const token = jwt.sign({
      randomNumber,
      signature: this.signature,
    }, 'jwt secret here');

    return token;
  }
};

export default new InMemoryTokenDB();
