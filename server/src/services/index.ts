import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import userResolver from './user/userResolver';
import questionCategoryResolver from './questionCategory/questionCategoryResolver';
import questionResolver from './question/questionResolver';

import questionCategoryType from './questionCategory/questionCategoryType';
import questionType from './question/questionType';
import userType from './user/userType';

export const typeDefs = mergeTypeDefs([
  questionCategoryType,
  questionType,
  userType,
]);

export const resolvers = mergeResolvers([
  userResolver,
  questionCategoryResolver,
  questionResolver,
]);
