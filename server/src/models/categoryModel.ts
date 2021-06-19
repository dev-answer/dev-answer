import fs from 'fs';
import path from 'path';

export default class CategoryModel {
  categoriesFile;

  categories;

  constructor() {
    this.categoriesFile = fs.readFileSync(path.join(__dirname, '../db/category.json'), 'utf-8');
    this.categories = JSON.parse(this.categoriesFile);
  }

  async findMany() {
    return this.categories;
  }
}
