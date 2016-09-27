/** 
 * Pass in a configuration object to the mock
 */
export const editor = {
  name: 'editorName',
  directory: () => './path/to/dir',
  action: {
    toggleDevTools: () => true,
    save: () => true,
    open: (file: string) => true,
    insert: (text: string) => true,
    set: (text: string) => true,
    scroll: (text: string) => true,
    writeFileFromFile: (options: Object) => true,
    writeFileFromContent: (options: Object) => true,
  }
};
