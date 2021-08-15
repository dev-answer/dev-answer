import fs from 'fs';
import path from 'path';

export const readJSON = (JSONPath: string) => JSON.parse(fs.readFileSync(path.join(__dirname, JSONPath), 'utf-8'));

export const writeJSON = (JSONPath: string, data: any) => {
  fs.writeFileSync(path.join(__dirname, JSONPath), JSON.stringify(data), 'utf-8');
};
