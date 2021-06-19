import CategoryModel from '../models/categoryModel';

import Repository from './repository';

export default class CategoryRepository extends Repository {
  constructor() {
    super({ Model: new CategoryModel() });
  }
}
