import * as React from 'react';

interface IStyles {
  editor: React.CSSProperties;
};

const styles: IStyles = {
  editor: {
    textAlign: 'left',
  },
};

export default class TextEditor extends React.Component<{
  name: string, text?: string, lang: string, onSave?: () => any,
  placeholder?: string,
}, {}> {

  // create a new TextEditor
  public ed = atom.workspace.buildTextEditor();
  public get(): string {
    return this.ed.getText();
  }
  public render() {
    return <div id={this.props.name} style={styles.editor} />;
  }
  private componentDidMount() {
    const {name, text, lang, placeholder} = this.props;
    // specify language
    this.ed.setGrammar(
      atom.grammars.grammarForScopeName(`source.${lang}`)
    );
    if (text) {
      this.ed.setText(text || '');
    }
    if (placeholder) {
      this.ed.setPlaceholderText(placeholder);
    }
    // append editor to rendered div
    const div = document.querySelector(`#${name}`);
    if (div) {
      div.appendChild(this.ed.getElement());
    }
  }
}
