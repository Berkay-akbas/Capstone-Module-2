/**
 * @jest-environment jsdom
 */

import { countComments } from '../modules/comments.js';

describe('Testing Number of comments', () => {
  test('Test 3 comment in list', () => {
    const comments = [
      {
        creation_date: '2022-07-26',
        comment: 'I love this red car',
        username: 'Jane',
      },
      {
        creation_date: '2022-07-26',
        comment: 'This car is awesome for long drive',
        username: 'John',
      },
      {
        comment: 'What a lovely car',
        username: 'Brad',
        creation_date: '2022-07-27',
      },
    ];

    const numberOfComment = countComments(comments);
    expect(numberOfComment).toBe(3);
  });

  test('Test 0 comment', () => {
    const comments = [];
    const numberOfComment = countComments(comments);
    expect(numberOfComment).toBe(0);
  });
});
