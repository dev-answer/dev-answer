Feature('BookmarksPage');
const bookmarksPage = '/bookmarks';

const bookmarks = [ // TODO : 현재 userId : 4를 기준으로 임시 데이터 사용, 배포 작업 완성 후 수정 필요
  {
    question: {
      content: '클로저는 무엇일까요?',
    },
  },
  {
    question: {
      content: 'ES6는 무엇인가요?',
    },
  },
  {
    question: {
      content: 'ES6 문법을 아는대로 설명하세요',
    },
  },
];

Scenario('북마크 목록을 볼 수 있다.', ({ I }) => {
  I.amOnPage(bookmarksPage);

  bookmarks.forEach((bookmark) => {
    I.see(bookmark.question.content);
  });
});

Scenario('특정 페이지의 북마크 목록를 볼 수 있다', ({ I }) => {
  I.amOnPage(bookmarksPage);

  // 특정 페이지를 클릭하면

  // 해당 페이지의 북마크 목록을 볼 수 있다
});

Scenario('북마크를 취소할 수 있다.', ({ I }) => {
  I.amOnPage(bookmarksPage);

  // 북마크 취소 버튼을 클릭하면

  // 북마크 취소가 표시된다.
});
