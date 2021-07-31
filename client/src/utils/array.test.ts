import { groupArray, findIndexInGroupedArray, makeGroupElementOneself } from './array';

test('groupArray', () => {
  expect(groupArray([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
  expect(groupArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  expect(groupArray([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
  expect(groupArray([1, 2, 3, 4], 4)).toEqual([[1, 2, 3, 4]]);
  expect(groupArray([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);

  expect(groupArray([1, 2, 3, 4], 1, true)).toEqual([[1], [2], [3], [4]]);
  expect(groupArray([1, 2, 3, 4], 2, true)).toEqual([[1, 2], [3, 4]]);
  expect(groupArray([1, 2, 3, 4], 3, true)).toEqual([[1], [2, 3, 4]]);
  expect(groupArray([1, 2, 3, 4], 4, true)).toEqual([[1, 2, 3, 4]]);
  expect(groupArray([1, 2, 3, 4], 5, true)).toEqual([[1, 2, 3, 4]]);
});

test('findIndexInGroupedArray', () => {
  expect(findIndexInGroupedArray([
    [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
    ],
    [
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
    [
      { id: 5, value: 5 },
    ],
  ], (element) => element.id === 2)).toEqual([0, 1]);
  expect(findIndexInGroupedArray([
    [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
    ],
    [
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
    [
      { id: 5, value: 5 },
    ],
  ], (v) => v.id === 3)).toEqual([1, 0]);
});

test('makeGroupElementOneself', () => {
  const groupedArray = [
    [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
    ],
    [
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
    [
      { id: 5, value: 5 },
      { id: 6, value: 6 },
    ],
    [
      { id: 7, value: 7 },
    ],
  ];

  expect(makeGroupElementOneself(groupedArray, (v) => v.id === 3)).toEqual(
    {
      groupedArray: [
        [
          { id: 1, value: 1 },
          { id: 2, value: 2 },
        ],
        [
          { id: 3, value: 3 },
        ],
        [
          { id: 4, value: 4 },
          { id: 5, value: 5 },
        ],
        [
          { id: 6, value: 6 },
          { id: 7, value: 7 },
        ],
      ],
      oneselfIndex: 1,
    },
  );

  expect(makeGroupElementOneself(groupedArray, (v) => v.id === 4)).toEqual(
    {
      groupedArray: [
        [
          { id: 1, value: 1 },
        ],
        [
          { id: 2, value: 2 },
          { id: 3, value: 3 },
        ],
        [
          { id: 4, value: 4 },
        ],
        [
          { id: 5, value: 5 },
          { id: 6, value: 6 },
        ],
        [
          { id: 7, value: 7 },
        ],
      ],
      oneselfIndex: 2,
    },
  );
});
