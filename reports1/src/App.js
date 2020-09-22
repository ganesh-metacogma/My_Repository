import React from "react";

import { Button, DatePicker, Space, Form, Card, Table } from "antd";

import { LogoutOutlined } from "@ant-design/icons";

class App extends React.Component {
  state = {
    reportfrom: "",
    reportto: "",
    reportextract: "",
  };

  columns = [
    {
      title: "Study Id",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id.length - b.id.length,
      },
    },
    {
      title: "Therapeutic Area",
      dataIndex: "therapeutic",
      sorter: {
        compare: (a, b) => a.therapeutic.length - b.therapeutic.length,
      },
    },
    {
      title: "Indication",
      dataIndex: "indication",
      sorter: {
        compare: (a, b) => a.indication.length - b.indication.length,
      },
    },
    {
      title: "Study Type",
      dataIndex: "studytype",
      sorter: {
        compare: (a, b) => a.studytype.length - b.studytype.length,
      },
    },
    {
      title: "Document Type",
      dataIndex: "doctype",
      sorter: {
        compare: (a, b) => a.doctype.length - b.doctype.length,
      },
    },
    {
      title: "Document Status",
      dataIndex: "docstatus",
      sorter: {
        compare: (a, b) => a.docstatus.length - b.docstatus.length,
      },
    },
    {
      title: "Approval Date",
      dataIndex: "approvaldate",
      sorter: {
        compare: (a, b) => a.approvaldate.length - b.approvaldate.length,
      },
    },
  ];

  data = [
    {
      key: "1",
      therapeutic: "Oncology",
      id: "SEL2301",
      indication: "indication1",
      studytype: "II",
      doctype: "Protocol Amendment",
      docstatus: "Approved",
      approvaldate: "01 July 2020",
    },
    {
      key: "2",
      therapeutic: "Oncology",
      id: "SEL2302",
      indication: "indication2",
      studytype: "II",
      doctype: "Protocol",
      docstatus: "Review",
      approvaldate: "NA",
    },
    {
      key: "3",
      therapeutic: "Oncology",
      id: "SEL2303",
      indication: "indication3",
      studytype: "II",
      doctype: "Protocol Amendment",
      docstatus: "Draft",
      approvaldate: "NA",
    },
    {
      key: "4",
      therapeutic: "Cardiovascular",
      id: "SEL2304",
      indication: "indication4",
      studytype: "I",
      doctype: "CSR",
      docstatus: "Approved",
      approvaldate: "01 July 2020",
    },
  ];

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  onFromChange = (value, dateString) => {
    this.setState({
      reportfrom: value,
    });
    console.log("Report From time: ", dateString);
    // console.log('from:',value)
  };
  onToChange = (value, dateString) => {
    this.setState({
      reportto: value,
    });
    console.log("Report To time: ", dateString);
  };
  onExtractChange = (value, dateString) => {
    this.setState({
      reportextract: value,
    });
    console.log("Report Extract time: ", dateString);
  };

  render() {
    return (
      <div className="App">
        <h1>METRICS REPORTS</h1>
        <Button type="primary">
          Export Report <LogoutOutlined />{" "}
        </Button>
        <br />
        <br />

        <>
          <Card title="Metrics Report" style={{ width: 600 }}>
            <Space direction="vertical" size={12}>
              <Form>
                <Form.Item name="reporttime" label="Report Time Period">
                  From{" "}
                  <DatePicker
                    value={this.state.reportfrom}
                    format="DD-MM-YYYY"
                    onChange={this.onFromChange}
                  />
                  &nbsp; To{" "}
                  <DatePicker
                    value={this.state.reportto}
                    format="DD-MM-YYYY"
                    onChange={this.onToChange}
                  />
                </Form.Item>

                <Form.Item name="extraction" label="Report Extraction Date">
                  <DatePicker
                    value={this.state.reportextract}
                    format="DD-MM-YYYY"
                    onChange={this.onExtractChange}
                  />
                </Form.Item>
              </Form>
            </Space>
          </Card>
        </>
        <br />
        <br />
        <Table
          columns={this.columns}
          dataSource={this.data}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
