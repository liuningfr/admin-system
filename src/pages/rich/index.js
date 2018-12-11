import React from 'react';
import { Card, Button, Modal } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class RichText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: null,
      contentState: '',
      showText: false
    };
  }
  onEditorStateChange = editorState => {
    this.setState({ editorState });
  };
  onContentStateChange = contentState => {
    this.setState({ contentState });
  };
  clearText = () => {
    this.setState({ editorState: null });
  };
  getText = () => {
    this.setState({ showText: true });
  };
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Card>
          <Button onClick={this.clearText}>清空内容</Button>
          <Button type="primary" onClick={this.getText}>
            获取内容
          </Button>
        </Card>
        <Card>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
          />
        </Card>
        <Modal
          title="富文本"
          visible={this.state.showText}
          onOk={() => {
            this.setState({ showText: false });
          }}
          onCancel={() => {
            this.setState({ showText: false });
          }}
        >
          {draftToHtml(this.state.contentState)}
        </Modal>
      </div>
    );
  }
}

export default RichText;
