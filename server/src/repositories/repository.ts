export default class Repository {
  collection;

  constructor({ Model }: any) {
    this.collection = Model;
  }

  async findAll() {
    const result = await this.collection.findMany();
    return result;
  }
}
