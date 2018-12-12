import React from 'react';
import 'braft-editor/dist/index.css';
import BraftEditor from 'braft-editor';

export default class Braft extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: BraftEditor.createEditorState(props.value) };
  }
  handleChange = editorStste => {
    this.setState({ editorStste });
    this.props.onChange(editorStste.toHTML());
  };
  render() {
    return (
      <BraftEditor
        value={this.state.editorStste}
        onChange={this.handleChange}
      />
    );
  }
}
