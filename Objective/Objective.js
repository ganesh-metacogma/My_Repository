import React, { Fragment } from "react";
import axios from "axios";
import {
  Modal,
  Layout,
  Button,
  Tabs,
  Drawer,
  Row,
  Col,
  Space,
  Input,
  Table,
} from "antd";

import { P2_URL, P3_URL } from "./../endpoint";

import From_Existing from "./tables/From_Existing";

import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Tabber from "./Objective/Tabber";
const { Content } = Layout;
const { TabPane } = Tabs;
const { TextArea } = Input;

//pop-up to add objective
function PopObjective(props) {
  let {
    body,
    existing_selectedRowKeys,
    existing_onSelectChange,
    existing_columns,
    existing_data,
    save_Objective,
    addNewObjective,
    objective_text,
    onClose,

    ...rest
  } = props;
  return (
    <Drawer
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...rest}
      onClose={() => {
        onClose("m_objective");
      }}
      width={"50vw"}
      footer={
        <Fragment>
          <Button
            onClick={() => {
              onClose("m_objective");
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              save_Objective();
            }}
          >
            Save
          </Button>
        </Fragment>
      }
    >
      <Tabs defaultActiveKey="3">
        <TabPane tab="Predefined" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="From Existing Study" key="2">
          {/* calling the table */}
          <From_Existing
            selectedRowKeys={existing_selectedRowKeys}
            onSelectChange={existing_onSelectChange}
            data={existing_data}
            columns={existing_columns}
          />
        </TabPane>
        <TabPane tab="Create New" key="3">
          <TextArea
            value={objective_text}
            onChange={(e) => {
              addNewObjective(e);
            }}
          />
        </TabPane>
      </Tabs>
    </Drawer>
  );
}

function PopEndpoint(props) {
  let {
    endpoint_id,
    selectedData,
    endpoint_text,
    existing_id,
    handleEndpointSave,
    handleEndpointUpdate,
    onClose,
    addEndpoint,
    endpoint_adder,
    addNewEndpoint,
    modalOpen,
    // assessmentChecker,
    removeAssessment,
    endpoint_columns,
    endpoint_data,
    endpoint_onSelectChange,
    endpoint_selectedRowKeys,

    assessment_selectedData,

    ...rest
  } = props;
  return (
    <Drawer
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...rest}
      onClose={() => {
        onClose("m_endpoint");
      }}
      width={"50vw"}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button
            onClick={() => {
              onClose("m_endpoint");
            }}
            style={{ marginRight: 8 }}
          >
            <b>Cancel</b>
          </Button>
          {!endpoint_adder ? (
            <Fragment>
              <Button
                className="ml-3"
                onClick={handleEndpointSave}
                disabled={!endpoint_text ? true : false}
              >
                <b>Save</b>
              </Button>
              &nbsp; &nbsp; &nbsp;
              <Button
                onClick={() => {
                  modalOpen("m_assessment");
                  // assessmentChecker();
                }}
              >
                Link Assessment
              </Button>
            </Fragment>
          ) : (
            <Button
              onClick={addEndpoint}
              type="primary"
              disabled={
                !endpoint_text && !endpoint_selectedRowKeys ? true : false
              }
            >
              <b>Add</b>
            </Button>
          )}
        </div>
      }
    >
      {endpoint_adder ? null : (
        <Button
          className="float-right mb-3"
          onClick={() => {
            addNewEndpoint(existing_id);
          }}
        >
          Add New Endpoint
        </Button>
      )}

      <Tabs defaultActiveKey="2">
        {endpoint_adder && (
          <TabPane tab="Existing Endpoint" key="1">
            {/* calling the table */}
            <From_Existing
              selectedRowKeys={endpoint_selectedRowKeys}
              onSelectChange={endpoint_onSelectChange}
              data={endpoint_data}
              columns={endpoint_columns}
            />
          </TabPane>
        )}
        <TabPane tab="Create Endpoint" key="2">
          <TextArea
            onChange={(e) => {
              handleEndpointUpdate(e);
            }}
            value={endpoint_text}
          />
          <h5 className="my-4">Assessments</h5>
          {selectedData &&
          selectedData[existing_id] &&
          selectedData[existing_id].endpoint &&
          selectedData[existing_id].endpoint[endpoint_id] &&
          selectedData[existing_id].endpoint[endpoint_id].assessment ? (
            selectedData[existing_id].endpoint[endpoint_id].assessment.map(
              (elem, index) => {
                return (
                  <div className="d-flex  pl-3 pt-2">
                    <Button
                      onClick={() => {
                        removeAssessment(index);
                      }}
                    >
                      X
                    </Button>
                    <span className="ml-3">{elem.assess_value}</span>
                  </div>
                );
              }
            )
          ) : (
            <span className=" pl-3 pt-2"> No Assessments linked yet </span>
          )}
        </TabPane>
      </Tabs>
    </Drawer>
  );
}

function PopAssessment(props) {
  let {
    assessment_columns,
    assessment_data,
    assessment_onSelectChange,
    assessment_selectedRowKeys,
    save_assessment,
    assessment_selectedData,

    onClose,
    ...rest
  } = props;
  return (
    <Drawer
      {...rest}
      onClose={() => {
        onClose("m_assessment");
        assessment_selectedData = [];
      }}
      width={"50vw"}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button
            onClick={() => {
              onClose("m_assessment");
            }}
            style={{ marginRight: 8 }}
          >
            <b>Cancel</b>
          </Button>
          <Button
            disabled={!assessment_selectedData ? true : false}
            onClick={() => {
              save_assessment();
            }}
          >
            Link
          </Button>
        </div>
      }
    >
      <From_Existing
        selectedRowKeys={assessment_selectedRowKeys}
        onSelectChange={assessment_onSelectChange}
        data={assessment_data}
        columns={assessment_columns}
      />
    </Drawer>
  );
}

class Objective extends React.Component {
  state = {
    searchText: "",
    searchedColumn: "",
    existing_id: "",
    endpoint_id: "",
    endpoint_text: "",
    endpoint_adder: false,
    existing_text: "",
    m_assessment: false,
    m_endpoint: false,
    m_objective: false,
    existing_selectedRowKeys: [],
    objective_text: "",
    predefined_obj_temp: [],
    existing_obj_temp: [],
    create_obj_temp: "",
    primary_data: [],
    // existing_columns: [
    //   {
    //     title: "Study ID",
    //     dataIndex: "protocol_id",
    //     key: "protocol_id",
    //     ...this.getColumnSearchProps("protocol_id"),
    //   },
    //   {
    //     title: "Date",
    //     dataIndex: "created_at",
    //     key: "created_at",

    //     ...this.getColumnSearchProps("created_at"),
    //   },
    //   {
    //     title: "Type",
    //     dataIndex: "obj_level",
    //     key: "obj_level",

    //     ...this.getColumnSearchProps("obj_level"),
    //   },
    //   {
    //     title: "Content",
    //     dataIndex: "obj_text",
    //     key: "obj_text",

    //     ...this.getColumnSearchProps("obj_text"),
    //   },
    // ],
    existing_data: [],
    assessment_data: [],
    assessment_selectedRowKeys: [],
    assessment_selectedData: [],

    existing_endpoint_temp: [],
    endpoint_data: [],
    endpoint_selectedRowKeys: [],
    endpoint_selectedData: [],
  };

  componentDidMount = async () => {
    axios({
      url: P2_URL,
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        let data = res.data;
        data.forEach(function (elem) {
          elem.key = elem.id;
          // elem.endpoint = [{ desc: "Write Endpoint here" }];
        });
        this.setState({ existing_data: data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios({
      url: P3_URL,
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        let assessment_data = await res.data.map((elem) => {
          return { id: elem.id, assess_value: elem.assess_value, key: elem.id };
        });
        let endpoint_data = await res.data.map((elem) => {
          return { id: elem.id, desc: elem.end_text, key: elem.id };
        });
        // let data = res.data.forEach((elem) => {
        //   return elem.assess_value;
        // });

        this.setState({
          assessment_data: assessment_data,
          endpoint_data: endpoint_data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  existing_onSelectChange = async (selectedRowKeys) => {
    console.log(selectedRowKeys);
    this.setState({ existing_selectedRowKeys: selectedRowKeys });
    console.log(this.state.existing_selectedRowKeys);
    //filtering selected rows from the data array
    let selected = await this.state.existing_data.filter((elem, index) => {
      if (selectedRowKeys.indexOf(elem.id) !== -1) return elem;
    });
    this.setState({ existing_obj_temp: selected });
    console.log(this.state.existing_selectedRowKeys);
  };

  endpoint_onSelectChange = async (selectedRowKeys) => {
    console.log(selectedRowKeys);
    this.setState({ endpoint_selectedRowKeys: selectedRowKeys });
    console.log(this.state.endpoint_selectedRowKeys);
    //filtering selected rows from the data array
    let selected = await this.state.endpoint_data.filter((elem, index) => {
      if (selectedRowKeys.indexOf(elem.id) !== -1) return elem;
    });
    this.setState({ existing_endpoint_temp: selected });
    console.log(this.state.endpoint_selectedRowKeys);
  };

  filter = async (data) => {
    if (!data[0]) {
      return data;
    } else {
      let newData = [];
      await data.forEach((element) => {
        newData.push({
          obj_text: element.obj_text,
          endpoint: [{ desc: "Write Endpoint here" }],
        });
      });
      return newData;
    }
  };

  save_Objective = async () => {
    let predefined_obj = await this.filter(this.state.predefined_obj_temp);
    let existing_obj = await this.filter(this.state.existing_obj_temp);
    let create_obj = await this.filter(this.state.create_obj_temp);
    this.setState({
      primary_data: [
        ...this.state.primary_data,
        ...predefined_obj,
        ...existing_obj,
        ...create_obj,
      ],
      predefined_obj_temp: [],
      existing_obj_temp: [],
      create_obj_temp: [],
      objective_text: "",
    });
    this.modalHide("m_objective");
  };

  removeAssessment = (key) => {
    console.log(key, "key");
    let data = this.state.primary_data;

    data[this.state.existing_id].endpoint[
      this.state.endpoint_id
    ].assessment.splice(key, 1);
    //filter((elem, index) => index !== key);
    this.setState({ primary_data: data });
  };

  assessment_onSelectChange = async (selectedRowKeys) => {
    console.log(selectedRowKeys);
    this.setState({ assessment_selectedRowKeys: selectedRowKeys });

    //filtering selected rows from the data array
    let selected = await this.state.assessment_data.filter((elem, index) => {
      if (selectedRowKeys.indexOf(elem.id) !== -1) return elem;
    });
    this.setState({ assessment_selectedData: selected });
  };

  save_assessment = () => {
    let data = this.state.primary_data;
    {
      data[this.state.existing_id].endpoint[this.state.endpoint_id].assessment
        ? (data[this.state.existing_id].endpoint[
            this.state.endpoint_id
          ].assessment = [
            ...data[this.state.existing_id].endpoint[this.state.endpoint_id]
              .assessment,
            ...this.state.assessment_selectedData,
          ])
        : (data[this.state.existing_id].endpoint[
            this.state.endpoint_id
          ].assessment = this.state.assessment_selectedData);
    }

    this.setState({
      primary_data: data,
      assessment_selectedData: [],
    });
    this.modalHide("m_assessment");
  };

  // assessmentChecker = () => {
  //   {
  //     this.state.existing_selectedData[this.state.existing_id].endpoint[
  //       this.state.endpoint_id
  //     ].assessment &&
  //       this.setState({
  //         assessment_selectedData: this.state.existing_selectedData[
  //           this.state.existing_id
  //         ].endpoint[this.state.endpoint_id].assessment,
  //       });
  //   }
  // };

  handleExisting = async (data, index) => {
    console.log(data);
    await this.setState({
      endpoint_adder: false,
      existing_id: index,
      existing_text: data.obj_text,
    });
  };
  handleEndpoint = (data, existing_id, index = 0) => {
    this.setState({
      existing_id: existing_id,
      endpoint_text: data.endpoint[index].desc,
      endpoint_id: index,
    });
  };

  handleExistingUpdate = (e) => {
    this.setState({ existing_text: e.target.value });
  };
  handleEndpointUpdate = (e) => {
    this.setState({ endpoint_text: e.target.value });
  };

  handleExistingSave = async () => {
    let data = this.state.primary_data;
    data[this.state.existing_id].obj_text = this.state.existing_text;

    this.setState({
      primary_data: data,
      existing_id: "",
      existing_text: "",
      endpoint_adder: false,
    });
    this.modalHide("m_endpoint");
  };

  handleEndpointSave = async () => {
    let data = await this.state.primary_data;
    data[this.state.existing_id].endpoint[
      this.state.endpoint_id
    ].desc = this.state.endpoint_text;
    await this.setState({
      primary_data: data,
      existing_id: "",
      endpoint_text: "",
      endpoint_id: "",
    });

    this.modalHide("m_endpoint");
  };

  //To add(Create) new Objective
  addNewObjective = async (e) => {
    this.setState({ objective_text: e.target.value });
    let data = [{ obj_text: this.state.objective_text }];

    await this.setState({ create_obj_temp: data }, () => {
      console.log(this.state.create_obj_temp);
    });
  };

  //To add new Enpoint
  addNewEndpoint = async (existing_id) => {
    await this.setState({
      endpoint_adder: true,
      existing_id: existing_id,
      existing_text: "",

      endpoint_id: "",
    });
  };

  filterEndpoint = async (data) => {
    if (!data[0]) {
      return data;
    } else {
      let newData = [];
      await data.forEach((element) => {
        newData.push({
          desc: element.desc,
        });
      });
      return newData;
    }
  };

  addEndpoint = async () => {
    let data = await this.state.primary_data;

    let tempEndpoint = await this.filterEndpoint(
      this.state.existing_endpoint_temp
    );

    if (this.state.endpoint_text) {
      data[this.state.existing_id].endpoint.push({
        desc: this.state.endpoint_text,
      });
    }

    if (this.state.existing_endpoint_temp[0]) {
      data[this.state.existing_id].endpoint = [
        ...data[this.state.existing_id].endpoint,
        ...tempEndpoint,
      ];
    }

    await this.setState({
      primary_data: data,
      existing_id: "",
      endpoint_text: "",
      endpoint_id: "",
      existing_endpoint_temp: [],
      endpoint_adder: false,
      endpoint_selectedData: [],
      endpoint_selectedRowKeys: [],
    });
    this.modalHide("m_endpoint");
  };

  removeEndpoint = async (existing_id, endpoint_id) => {
    let data = await this.state.primary_data;
    data[existing_id].endpoint.splice(endpoint_id, 1);
    this.setState({
      primary_data: data,
      existing_id: "",
      endpoint_text: "",
      endpoint_id: "",
    });
  };

  modalOpen = (key) => {
    this.setState({ [key]: true });
  };

  modalHide = (key) => {
    this.setState({
      [key]: false,
      existing_selectedRowKeys: [],
      assessment_selectedRowKeys: [],
      assessment_selectedData: [],
      existing_obj_temp: [],
      endpoint_adder: false,
      existing_endpoint_temp: [],

      assessment_selectedData: [],
      endpoint_selectedRowKeys: [],
    });
  };

  existing_handleDelete = async (key) => {
    console.log(key);

    this.setState({
      primary_data: this.state.primary_data.filter(
        (elem, index) => index !== key
      ),
    });
    // await this.setState({
    //   existing_selectedRowKeys: copy.filter((elem) => elem !== key),
    // });
    // await this.existing_onSelectChange(this.state.existing_selectedRowKeys);
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const assessment_columns = [
      {
        title: "Assessments",
        dataIndex: "assess_value",

        ...this.getColumnSearchProps("assess_value"),
        sorter: (a, b) => {
          return ("" + a.assess_value).localeCompare(b.assess_value);
        },
        sortDirections: ["descend", "ascend"],
      },
    ];

    const endpoint_columns = [
      {
        title: "Endpoint",
        dataIndex: "desc",
        ...this.getColumnSearchProps("desc"),
        sorter: (a, b) => {
          return ("" + a.desc).localeCompare(b.desc);
        },
        sortDirections: ["descend", "ascend"],
      },
    ];

    const existing_columns = [
      {
        title: "Study ID",
        dataIndex: "protocol_id",
        key: "protocol_id",
        ...this.getColumnSearchProps("protocol_id"),
        sorter: {
          compare: (a, b) => a.protocol_id - b.protocol_id,
        },
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Date",
        dataIndex: "created_at",
        key: "created_at",

        ...this.getColumnSearchProps("created_at"),
        sorter: (a, b) => {
          return ("" + a.created_at).localeCompare(b.created_at);
        },
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Type",
        dataIndex: "obj_level",
        key: "obj_level",

        ...this.getColumnSearchProps("obj_level"),
        sorter: (a, b) => {
          return ("" + a.obj_level).localeCompare(b.obj_level);
        },
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Content",
        dataIndex: "obj_text",
        key: "obj_text",

        ...this.getColumnSearchProps("obj_text"),
        sorter: (a, b) => {
          return ("" + a.obj_text).localeCompare(b.obj_text);
        },
        sortDirections: ["descend", "ascend"],
      },
    ];

    return (
      <Fragment>
        <Content className="site-layout-background">
          <div>
            <p className="heading">Choose Objective</p>
            <Tabs defaultActiveKey="1" type="card">
              <TabPane tab="Primary Objective" key="1">
                <br />
                <div>
                  <div className="d-flex ">
                    <Button
                      className="rounded"
                      name="m_objective"
                      onClick={() => this.modalOpen("m_objective")}
                    >
                      Add Objective
                    </Button>
                    {/* <Button
                      className="ml-3 rounded"
                      name="m_endpoint"
                      onClick={() => this.modalOpen("m_endpoint")}
                    >
                      Add Endpoint
                    </Button>
                    <Button
                      className="ml-3 rounded"
                      name="m_assessment"
                      onClick={() => this.modalOpen("m_assessment")}
                    >
                      Link Assessment
                    </Button> */}
                  </div>
                  <Tabber
                    modalOpen={this.modalOpen}
                    endpoint_id={this.state.endpoint_id}
                    selectedData={this.state.primary_data}
                    existing_handleDelete={this.existing_handleDelete}
                    existing_text={this.state.existing_text}
                    existing_id={this.state.existing_id}
                    handleExistingUpdate={this.handleExistingUpdate}
                    handleExistingSave={this.handleExistingSave}
                    handleExisting={this.handleExisting}
                    endpoint_text={this.state.endpoint_text}
                    existing_id={this.state.existing_id}
                    handleEndpointUpdate={this.handleEndpointUpdate}
                    handleEndpointSave={this.handleEndpointSave}
                    handleEndpoint={this.handleEndpoint}
                    removeEndpoint={this.removeEndpoint}
                    addNewEndpoint={this.addNewEndpoint}
                  />
                </div>
              </TabPane>
              <TabPane tab="Secondary Objective" key="2">
                <br />
                {/* <StudyMasking studyMask={() => this.changeTab("3")} /> */}
                <h1>Secondary Objective</h1>
              </TabPane>
              <TabPane tab="Exploratary Objective" key="3">
                <br />
                {/* <Intervention /> */}
                <h1>Exploratary Objective</h1>
              </TabPane>
            </Tabs>
          </div>
        </Content>
        <PopObjective
          title="Objective"
          objective_text={this.state.objective_text}
          existing_columns={existing_columns}
          addNewObjective={this.addNewObjective}
          visible={this.state.m_objective}
          onOk={this.modalHide}
          onClose={this.modalHide}
          existing_selectedRowKeys={this.state.existing_selectedRowKeys}
          existing_onSelectChange={this.existing_onSelectChange}
          existing_data={this.state.existing_data}
          save_Objective={this.save_Objective}
        />
        <PopEndpoint
          title="Endpoint"
          visible={this.state.m_endpoint}
          endpoint_id={this.state.endpoint_id}
          selectedData={this.state.primary_data}
          endpoint_text={this.state.endpoint_text}
          existing_id={this.state.existing_id}
          handleEndpointUpdate={this.handleEndpointUpdate}
          handleEndpointSave={this.handleEndpointSave}
          addEndpoint={this.addEndpoint}
          addNewEndpoint={this.addNewEndpoint}
          endpoint_adder={this.state.endpoint_adder}
          onOk={this.modalHide}
          onClose={this.modalHide}
          modalOpen={this.modalOpen}
          assessment_id={this.state.assessment_id}
          assessment_text={this.state.assessment_text}
          // assessmentChecker={this.assessmentChecker}
          removeAssessment={this.removeAssessment}
          assessment_selectedData={this.state.assessment_selectedData}
          endpoint_columns={endpoint_columns}
          existing_endpoint_temp={this.state.existing_endpoint_temp}
          endpoint_onSelectChange={this.endpoint_onSelectChange}
          endpoint_selectedData={this.state.endpoint_selectedData}
          endpoint_selectedRowKeys={this.state.endpoint_selectedRowKeys}
          endpoint_data={this.state.endpoint_data}
        />
        <PopAssessment
          title="Assessment"
          visible={this.state.m_assessment}
          onOk={this.modalHide}
          onClose={this.modalHide}
          assessment_columns={assessment_columns}
          assessment_selectedRowKeys={this.state.assessment_selectedRowKeys}
          assessment_onSelectChange={this.assessment_onSelectChange}
          assessment_data={this.state.assessment_data}
          assessment_id={this.state.assessment_id}
          assessment_text={this.state.assessment_text}
          assessment_selectedData={this.state.assessment_selectedData}
          save_assessment={this.save_assessment}
        />
      </Fragment>
    );
  }
}

export default Objective;
