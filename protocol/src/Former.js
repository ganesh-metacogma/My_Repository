import React, { Component, Fragment } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 8,
  },
};

class Formd extends Component {
  constructor(props){
    super(props);
    this.state={
      selectName: "",
      selectValue: "",
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
}

handleDropdownChange(e) {
  this.setState({ selectValue: e});
}

handleInputChange = (event) =>{
     event.preventDefault()
    this.setState({
      selectName : event.target.value
    })
}

  render(){
  return (
    <Fragment>
      <h1>Input is : {this.state.selectName}</h1>
      <h1>Selected Value is : {this.state.selectValue}</h1>
      <Form {...layout}>
        <Form.Item label="Protocol Id">
          <Input name="protocolid" onChange={this.handleInputChange}/>
        </Form.Item>

        <div id="hell">
        <Form.Item label="Therapeutic Area">
          <Select id="therapeuticarea"  onChange={this.handleDropdownChange}>
            <Select.Option value="ta1">Metabolic</Select.Option>
            <Select.Option value="ta21">Vaccines</Select.Option>
            <Select.Option value="ta3">Inflammation</Select.Option>
            <Select.Option value="ta4">Dermatalogy</Select.Option>
            <Select.Option value="ta5">Orthopedics</Select.Option>
          </Select>
        </Form.Item>
        </div>
        
        <Form.Item label="Indication">
          <Select name="indication"  defaultValue="Diabetes Mellitus" onChange={this.handleDropdownChange}> 
            <Select.Option value="i1">Diabetes Mellitus</Select.Option>
            <Select.Option value="i2">Influenza</Select.Option>
            <Select.Option value="i3">Malaria</Select.Option>
            <Select.Option value="i4">Tuberculosis</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Study Type">
          <Select name="studytype" defaultValue="Observational" onChange={this.handleDropdownChange}>
            <Select.Option value="st1">Interventional</Select.Option>
            <Select.Option value="st2">Observational</Select.Option>
            <Select.Option value="st3">Expand Access</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Study Phase">
          <Select name="studyphase" defaultValue="phase | Trial" onChange={this.handleDropdownChange}>
            <Select.Option value="sp1">phase | Trial</Select.Option>
            <Select.Option value="sp2">phase || Trial</Select.Option>
            <Select.Option value="sp3">phase ||| Trial</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Acronym">
          <Input name="acronym" onChange={this.handleInputChange} />
        </Form.Item>

        <Form.Item label="Arm Name">
          <Input name="armname" onChange={this.handleInputChange} />
        </Form.Item>

        <Form.Item label="Arm Type">
          <Select name="armtype" onChange={this.handleDropdownChange}>
            <Select.Option value="at1">Experimental</Select.Option>
            <Select.Option value="at2">other</Select.Option>
            <Select.Option value="at3">placebo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Arm Description">
          <Input name="armdescription" onChange={this.handleInputChange} />
        </Form.Item>

        <Form.Item label="Intervention Model">
          <Select name="interventionmodel" onChange={this.handleDropdownChange}>
            <Select.Option value="im1">parallel</Select.Option>
            <Select.Option value="im2">other</Select.Option>
            <Select.Option value="im3">sequential</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Intervention Name">
          <Input name="interventionname" onChange={this.handleInputChange}/>
        </Form.Item>

        <Form.Item label="Intervention Description">
          <Input name="interventiondescription" onChange={this.handleInputChange}/>
        </Form.Item>

        <Form.Item label="Intervention Type">
          <Select name="interventiontype" onChange={this.handleDropdownChange}>
            <Select.Option value="it1">Biology</Select.Option>
            <Select.Option value="it2">other</Select.Option>
            <Select.Option value="it3">Device</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Masking">
          <Select name="masking" onChange={this.handleDropdownChange}>
            <Select.Option value="m1">Double blind</Select.Option>
            <Select.Option value="m2">Single blind</Select.Option>
            <Select.Option value="m3">open label</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Protocol Short Title">
          <Input name="protocolshorttitle" onChange={this.handleInputChange} />
        </Form.Item>

        <Form.Item label="Protocol Title">
          <Input name="protocoltitle" onChange={this.handleInputChange} />
        </Form.Item>
       
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
          <Button type="primary">Submit</Button> &nbsp;
          <Button type="primary" danger>Reset</Button>  
        </Form.Item>

      </Form>
    </Fragment>
  );
  }
};

export default Formd;