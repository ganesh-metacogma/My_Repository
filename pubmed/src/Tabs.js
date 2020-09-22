import { Tabs, Form, Col, Row, Input, Select, Button } from "antd";
import React from "react";
const { Option } = Select;
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      search: "",
      pubmed: "",
      source: "",
      title: "",
      authors: "",
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handlePubmedChange = (event) => {
    this.setState({ pubmed: event.target.value });
  };
  handleSourceChange = (event) => {
    this.setState({ source: event.target.value });
  };
  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleAuthorChange = (event) => {
    this.setState({ authors: event.target.value });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onReset = () => {
    this.formRef.current.resetFields();
    this.setState({
      search: "",
      pubmed: "",
      source: "",
      title: "",
      authors: "",
    });
  };

  onFinish = (values) => {
    console.log(values);
  };
  // callback=(key)=> {
  //   console.log(key);
  // }

  render() {
    const { TabPane } = Tabs;
    const { Search } = Input;

    return (
      <>
        {/* <h1>Hello:{this.state.search} {this.state.source}</h1> */}
        {/* onChange={this.state.callback} */}
        <Tabs defaultActiveKey="1">
          <TabPane tab="From PubMed" key="1">
            <Form
              layout="vertical"
              ref={this.formRef}
              name="control-ref"
              onFinish={this.onFinish}
            >
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="search"
                    label="Search"
                    rules={[
                      { required: false, message: "Please enter Pubmed Id" },
                    ]}
                  >
                    <Search
                      name="search"
                      value={this.state.search}
                      placeholder="Search by PubMed ID or Title"
                      onChange={this.handleChange}
                      enterButton
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="pubmed"
                    label="Pubmed Id"
                    rules={[
                      { required: false, message: "Please enter Pubmed Id" },
                    ]}
                  >
                    <Input
                      name="pubmed"
                      value={this.state.pubmed}
                      placeholder="Please enter Pubmed Id"
                      onChange={this.handleChange}
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="source"
                    label="Source"
                    rules={[
                      { required: false, message: "Please enter Source" },
                    ]}
                  >
                    <Input
                      name="source"
                      value={this.state.source}
                      placeholder="Please enter Source"
                      onChange={this.handleChange}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                      {
                        required: false,
                        message: "please enter Title",
                      },
                    ]}
                  >
                    <Input
                      name="title"
                      value={this.state.title}
                      placeholder="please enter Title"
                      onChange={this.handleChange}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="authors"
                    label="Authors"
                    rules={[
                      {
                        required: false,
                        message: "please enter authors",
                      },
                    ]}
                  >
                    <Input
                      name="authors"
                      value={this.state.authors}
                      placeholder="please enter Authors"
                      onChange={this.handleChange}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item className="bottom-buttons">
                <Button htmlType="button" onClick={this.onReset} danger>
                  Cancel
                </Button>
                &nbsp;
                {/* disabled={!isEnabled} */}
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </>
    );
  }
}
export default Demo;
