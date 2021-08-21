import { graphql, commitMutation } from 'react-relay';

const mutation = graphql`
  mutation RemoveBookmarkMutation($bookmarkId: Int!) {
    removeBookmark(bookmarkId: $bookmarkId) {
      id @deleteRecord
    }
  }
`;

const commitRemoveBookmarkMutation = (
  environment: Environment,
  bookmarkId: number,
) => {
  commitMutation(environment, {
    mutation,
    variables: {
      bookmarkId,
    },
    optimisticResponse: {
      removeBookmark: {
        id: bookmarkId.toString(),
      },
    },
  });
};

export default commitRemoveBookmarkMutation;
