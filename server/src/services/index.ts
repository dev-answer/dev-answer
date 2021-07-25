import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import authResolver from './auth/authResolver';
import userResolver from './user/userResolver';
import questionCategoryResolver from './questionCategory/questionCategoryResolver';
import questionResolver from './question/questionResolver';
import bookmarkResolver from './bookmark/bookmarkResolver';

import questionCategoryType from './questionCategory/questionCategoryType';
import questionType from './question/questionType';
import userType from './user/userType';
import authType from './auth/authType';
import bookmarkType from './bookmark/bookmarkType';

export const typeDefs = mergeTypeDefs([
  questionCategoryType,
  questionType,
  userType,
  authType,
  bookmarkType,
]);

export const resolvers = mergeResolvers([
  authResolver,
  userResolver,
  questionCategoryResolver,
  questionResolver,
  bookmarkResolver,
]);
