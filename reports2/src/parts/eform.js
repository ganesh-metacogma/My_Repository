import { Form, Card, Button, Select, DatePicker } from "antd";
import React, { Component } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import moment from "moment";
import { Typography } from "antd";

const { Title } = Typography;

const val = [
  "Cardiometabolic",
  "GlobalHealth",
  "Neuroscience",
  "Oncology",
  "Ophthalmology",
  "Respiratory",
];
const options = [];
for (let i = 0; i < val.length; i++) {
  const value = val[i];
  options.push({
    value,
  });
}

const Cardiometabolic = [
  "Hypertension",
  "Heart Failure (HF)",
  "Cirrhosis",
  "Pulmonary arterial hypertension",
  "Cirrhosis",
  "Myocardial infarction, acute",
  "Chronic Heart Failure (CHF)",
];

const GlobalHealth = ["Hypertension", "Malaria", "Cystic fibrosis"];

const { Option } = Select;
const dateFormat = "MM/DD/YY";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 10,
  },
};

class TrackerForm extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.inputRef = React.createRef();

    this.state = {
      therapeutic: "",
      indication: "",
      studytype: "",
      reportfromtime: "",
      reporttotime: "",
    };
  }

  componentDidMount = () => {
    this.inputRef.current.focus();
  };

  onFinish = (values) => {
    console.log(values);
  };

  //   handleDropdownChange = (e) => {
  //     this.setState({ selectValue: e });
  //   }

  handleTpChange = (value) => {
    console.log(`selected Therapeutic fields: ${value}`);
  };

  handleInChange = (value) => {
    console.log(`selected Indication fields: ${value}`);
  };

  handleTypeChange = (value) => {
    console.log(`selected Study type fields: ${value}`);
  };

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    // const [size]=this.state;

    return (
      <>
        {/* <h1>{this.state.therapeutic}</h1> */}
        <h1>EFFICIENCY TRACKER</h1>
        <Button type="primary">
          Export Report <LogoutOutlined />
        </Button>{" "}
        <br />
        <br />
        <Card style={{ width: 500 }}>
          <Form
            {...layout}
            ref={this.formRef}
            name="control-ref"
            onFinish={this.onFinish}
          >
            <Form.Item
              name="ta"
              label="Therapeutic Area"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select
                value={this.state.therapeutic}
                ref={this.inputRef}
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select"
                onChange={this.handleTpChange}
                options={options}
              />
            </Form.Item>

            <Form.Item
              name="in"
              label="Indication"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select
                value={this.state.indication}
                placeholder="Select a Type"
                mode="multiple"
                onChange={this.handleInChange}
                allowClear
              >
                <Option value="i1">Double blind</Option>
                <Option value="i2">Single blind</Option>
                <Option value="i3">open label</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="st"
              label="Study Type"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select
                value={this.state.therapeutic}
                placeholder="Select a Type"
                onChange={this.handleTypeChange}
                allowClear
              >
                <Option value="i1">Double blind</Option>
                <Option value="i2">Single blind</Option>
                <Option value="i3">open label</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="rtp"
              label="Report Time period"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              from &nbsp;
              <DatePicker
                onChange={this.onChange}
                value={this.state.reportfromtime}
                format={dateFormat}
              />{" "}
              to{" "}
              <DatePicker
                onChange={this.onChange}
                value={this.state.reporttotime}
                format={dateFormat}
              />
            </Form.Item>

            <Form.Item
              name="red"
              label="Report Extraction Date"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <DatePicker
                onChange={this.onChange}
                value={this.state.reportextraction}
                defaultValue={moment()}
                format={dateFormat}
                disabled
              />
            </Form.Item>
          </Form>
        </Card>
        <br /> <br />
      </>
    );
  }
}

export default TrackerForm;
