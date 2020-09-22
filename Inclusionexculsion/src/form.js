import React, { useState, Fragment } from "react";
import { Modal, Form, Input, Button, Radio } from "antd";
import { Row, Col } from "antd";
import Pop from "./pop";
const { TextArea } = Input;
class FormLayoutDemo extends React.Component {
  render() {
    return (
      <Fragment>
        <Form>
          <Row>
            <Col span={10}>
              <Form.Item label="Name">
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item label="Description">
                <TextArea />
              </Form.Item>
            </Col>
            <Col span={7}>
              <h1>Add Inclusion Criterion</h1>
              <p>abcd</p>
              <Pop title={"Add Inclusion Criterion"} />
            </Col>
            <Col span={7}>
              <h1>Add Exclusion Criterion</h1>
              <p>abcd</p>
              <Pop title={"Add Exclusion Criterion"} />
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }
}
export default FormLayoutDemo;
