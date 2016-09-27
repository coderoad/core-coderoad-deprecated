/// <reference path="../../typings/globals/jest/index.d.ts" />

let mock = jest.setMock('../../index', require('../../__mocks__/editor/index.js'));
import reducer from './reducer';
import * as type from './types';

describe('editor reducer', () => {

  it('does nothing if action types do not match', () => {
    const action = { type: 'unknown' };
    // name: 'editorName' is default
    expect(reducer(undefined, action)).toBe('editorName');
  });

  xit('it toggles editor devtools', () => {
    const action = { type: type.EDITOR_DEVTOOLS_TOGGLE };
    reducer(undefined, action);
    expect(mock).toBeCalled();
  });

});