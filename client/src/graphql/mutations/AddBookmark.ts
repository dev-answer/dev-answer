import { graphql, commitMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';

// addBookmark(userId: Int, questionId: Int): Bookmark
// removeBookmark(bookmarkId: Int!): Bookmark

const mutation = graphql`
  mutation AddBookmarkMutation($userId: Int, $questionId: Int) {
    addBookmark(userId: $userId, questionId: $questionId) {
      user {
        id
      }
      question {
        id
      }
    }
  }
`;

const commitAddBookmarkMutation = (
  environment: Environment,
  questionId: number,
  userId: number,
) => {
  commitMutation(environment, {
    mutation,
    variables: {
      questionId,
      userId,
    },
    optimisticUpdater: (store: RecordSourceSelectorProxy) => {
      const userBookmarksRecords = `bookmarks(userId:${userId})`;
      const rootStore = store.get('client:root');
      const bookmarks = rootStore?.getLinkedRecords(userBookmarksRecords);

      const newBookmarks = store.getRootField('addBookmark');

      rootStore?.setLinkedRecords([...bookmarks, newBookmarks], userBookmarksRecords);
    },
  });
};

export default commitAddBookmarkMutation;
