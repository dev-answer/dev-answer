export default class Repository {
  collection;

  constructor({ Model }: any) {
    this.collection = Model;
  }

  async findAll(option?: any) {
    const result = await this.collection.findMany(option);
    return result;
  }

  async create(data: any) {
    const result = await this.collection.create(data);
    return result;
  }
}
