import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import userResolver from './user/userResolver';
import categoryResolver from './category/categoryResolver';
import questionResolver from './question/questionResolver';

import categoryType from './category/categoryType';
import questionType from './question/questionType';
import userType from './user/userType';

export const typeDefs = mergeTypeDefs([
  categoryType,
  questionType,
  userType,
]);

export const resolvers = mergeResolvers([
  userResolver,
  categoryResolver,
  questionResolver,
]);
