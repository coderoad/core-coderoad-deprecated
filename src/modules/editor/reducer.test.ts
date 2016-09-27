/// <reference path="../../typings/globals/jest/index.d.ts" />

jest.setMock('../../index', require('../../__mocks__/editor/index.js'));
import reducer from './reducer';
import * as types from './types';

describe('editor reducer', () => {

  it('does nothing if action types do not match', () => {
    const action = { type: 'unknown' };
    // name: 'editorName' is default
    expect(reducer(undefined, action)).toBe('editorName');
  });

});