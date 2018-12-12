import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Quill extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.value };
  }
  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value) {
      this.setState({ text: newProps.value });
    }
  }
  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['image']
    ]
  };
  formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'image'
  ];
  handleChange = value => {
    this.setState({ text: value });
    this.props.onChange(this.state.text);
  };

  render() {
    return (
      <ReactQuill
        value={this.state.text}
        onChange={this.handleChange}
        modules={this.modules}
        formats={this.formats}
      />
    );
  }
}

export default Quill;
