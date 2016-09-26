export {default as reducer} from './reducer';

export {editorDevToolsToggle, editorOpen, editorInsert,
editorSave, editorSet, editorScroll} from './actions';

import { editor } from '../../index';

export const {save, open, openFolder, scroll, set, insert, writeFileFromContent,
  writeFileFromFile, openDevTools, toggleDevTools, clearConsole,
  // quit, closeAllPanels, openTerminal
} = editor.action;

// export function mkdir(name: string) {}

// export function select() { }

// export function decorate() { }
