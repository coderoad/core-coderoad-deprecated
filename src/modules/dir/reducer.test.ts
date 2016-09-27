/// <reference path="../../typings/common/global.d.ts" />
/// <reference path="../../typings/globals/jest/index.d.ts" />
/// <reference path="../../typings/globals/node/index.d.ts" />

jest.setMock('../../index', require('../../__mocks__/editor/index.js'));
import dir from './index';

describe('dir reducer', () => {

  it('should return the project directory from the editor', () => {
    const directory = './path/to/dir';
    // directory() => './path/to/dir' is default
    expect(dir('')).toBe(directory);
  });

});
