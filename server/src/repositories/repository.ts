export default class Repository {
  collection;

  constructor({ Model }: any) {
    this.collection = Model;
  }

  async findAll() {
    const result = await this.collection.findMany();
    return result;
  }

  async findOneById(id: number) {
    const result = await this.collection.findOneById(id);
    return result;
  }

  async findAllById(id: number) {
    const result = await this.collection.findAllById(id);
    return result;
  }
}
