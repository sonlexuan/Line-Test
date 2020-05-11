import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Divider, Button, Radio, DatePicker } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Config CKEditor5
const configCKEditor5 = {
  toolbar: ['link', 'imageUpload']
}

const Home = (props) => {
  return (
    <div className="home-page">
      <h2>Timeline Post</h2>

      <Divider />
      <Row justify="space-between">
        <Col span={4}>
          <Button type="ghost" size="large" shape="round">Save</Button>
        </Col>
        <Col span={4}>
          <Button type="primary" size="large" shape="round">Publish</Button>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col span={6} className="publish-date">
          <label>Publish Date</label>
        </Col>
        <Col className="publish-type">
          <Radio.Group className="d-flex flex-column">
            <Radio value={1}>
              Option A
            </Radio>
            <Radio value={2}>
              <DatePicker picker="date" placeholder="Select Date" size="middle" />
              <DatePicker picker="date" mode="time" placeholder="Select Time" size="middle" />
            </Radio>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  )
}

const Editor = props => (
  <CKEditor
    editor={ClassicEditor}
    data="<p>Hello from CKEditor 5!</p>"
    config={configCKEditor5}
    onInit={editor => {
      // You can store the "editor" and use when it is needed.
      console.log('Editor is ready to use!', editor);
    }}
    onChange={(event, editor) => {
      const data = editor.getData();
      console.log({ event, editor, data });
    }}
    onBlur={(event, editor) => {
      console.log('Blur.', editor);
    }}
    onFocus={(event, editor) => {
      console.log('Focus.', editor);
    }}
  />
)

const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);