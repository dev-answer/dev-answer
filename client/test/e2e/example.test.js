Feature('Example');

Scenario('test example page', ({ I }) => {
  I.amOnPage('/');
  I.see('Example Component');
});
