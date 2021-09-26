import React, { useEffect, Suspense } from 'react';
import {
  graphql, PreloadedQuery, usePreloadedQuery, useQueryLoader,
} from 'react-relay';

import { UserInfoQuery } from '__generated__/UserInfoQuery.graphql';

interface Props {
  userQueryRef: PreloadedQuery<UserInfoQuery>;
}

const userInfoQuery = graphql`
  query UserInfoQuery($userId: String!) {
    userInfo(userId: $userId) {
      name
      gitHubURL
      profileImageURL
    }
  }
`;

function UserInfoContainer({ userQueryRef }: Props) {
  const { userInfo } = usePreloadedQuery(userInfoQuery, userQueryRef);

  if (!userInfo) {
    return (
      <p>
        유저정보를 불러오지 못 했습니다
      </p>
    );
  }

  const {
    name, profileImageURL, gitHubURL,
  } = userInfo;

  return (
    <>
      <a href={gitHubURL}>
        {/* TODO: 추후 emotion 적용 */}
        <img
          src={profileImageURL}
          style={{
            width: '50px',
            borderRadius: '20%',
          }}
          alt="깃허브프로필이미지"
        />
        <p
          style={{
            display: 'inline-block',
            marginLeft: '10px',
            paddingTop: '17px',
          }}
        >
          {name}
        </p>
      </a>
    </>
  );
}

export default function UserInfo({ uid }: { uid: string }) {
  const [
    userQueryRef,
    loadQuery,
    disposeQuery,
  ] = useQueryLoader<UserInfoQuery>(userInfoQuery);

  useEffect(() => {
    loadQuery({ userId: uid });
    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery]);

  if (!userQueryRef) {
    return <>볼러올 수 없습니다</>;
  }

  return (
    <Suspense fallback="로딩중..">
      <UserInfoContainer userQueryRef={userQueryRef} />
    </Suspense>
  );
}
