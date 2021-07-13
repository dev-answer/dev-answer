import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import authResolver from './auth/authResolver';
import userResolver from './user/userResolver';
import questionCategoryResolver from './questionCategory/questionCategoryResolver';
import questionResolver from './question/questionResolver';
import commentResolver from './comment/commentResolver';

import questionCategoryType from './questionCategory/questionCategoryType';
import questionType from './question/questionType';
import userType from './user/userType';
import authType from './auth/authType';
import commentType from './comment/commentType';

export const typeDefs = mergeTypeDefs([
  questionCategoryType,
  questionType,
  userType,
  authType,
  commentType,
]);

export const resolvers = mergeResolvers([
  authResolver,
  userResolver,
  questionCategoryResolver,
  questionResolver,
  commentResolver,
]);
