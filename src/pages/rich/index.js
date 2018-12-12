import React from 'react';
import { Card, Button, Modal, Form } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Quill from './components/quill';
import Braft from './components/braft';
import './index.less';

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
        <Card title="react-draft-wysiwyg">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
          />
        </Card>
        <Card title="react-quill">
          <FormQuill />
        </Card>
        <Card title="braft-editor">
          <FormBraft />
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

class QuillForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('detail', { initialValue: '' })(<Quill />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.onSubmit}>
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const FormQuill = Form.create()(QuillForm);

class BraftForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('detail', { initialValue: '' })(<Braft />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.onSubmit}>
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const FormBraft = Form.create()(BraftForm);
