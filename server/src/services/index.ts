import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import authResolver from './auth/authResolver';
import userResolver from './user/userResolver';
import userResolverDB from './user/userResolver.db';
import questionCategoryResolver from './questionCategory/questionCategoryResolver';
import questionCategoryResolverDB from './questionCategory/questionCategoryResolver.db';
import questionResolver from './question/questionResolver';
import questionResolverDB from './question/questionResolver.db';
import commentResolver from './comment/commentResolver';
import commentResolverDB from './comment/commentResolver.db';
import bookmarkResolver from './bookmark/bookmarkResolver';
import bookmarkResolverDB from './bookmark/bookmarkResolver.db';

import questionCategoryType from './questionCategory/questionCategoryType';
import questionCategoryTypeDB from './questionCategory/questionCategoryType.db';
import questionType from './question/questionType';
import questionTypeDB from './question/questionType.db';
import userType from './user/userType';
import userTypeDB from './user/userType.db';
import authType from './auth/authType';
import commentType from './comment/commentType';
import commentTypeDB from './comment/commentType.db';
import bookmarkType from './bookmark/bookmarkType';
import bookmarkTypeDB from './bookmark/bookmarkType.db';

export const typeDefs = mergeTypeDefs([
  questionCategoryType,
  questionCategoryTypeDB,
  questionType,
  questionTypeDB,
  userType,
  userTypeDB,
  authType,
  commentType,
  commentTypeDB,
  bookmarkType,
  bookmarkTypeDB,
]);

export const resolvers = mergeResolvers([
  authResolver,
  userResolver,
  userResolverDB,
  questionCategoryResolver,
  questionCategoryResolverDB,
  questionResolver,
  questionResolverDB,
  commentResolver,
  commentResolverDB,
  bookmarkResolver,
  bookmarkResolverDB,
]);
