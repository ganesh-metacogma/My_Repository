import { DatePicker, Space, Form, Card } from 'antd';
import React from 'react';

class Datepick extends React.Component {
  constructor(props){
    super(props);
    this.state={
      reportfrom:'',
      reportto:'',
      reportextract:''
    }
  }
 onFromChange=(value,dateString) => {
  this.setState(
    {
      reportfrom: value
    }
  )
  console.log('Report From time: ', dateString);
 // console.log('from:',value)
}
onToChange=(value,dateString) => {
  this.setState(
    {
      reportto: value
    }
  )
  console.log('Report To time: ', dateString);
}
onExtractChange=(value,dateString) => {
  this.setState(
    {
      reportextract: value
    }
  )
  console.log('Report Extract time: ', dateString);
}

  //onOk=(value) => {
 // console.log('onOk: ', value);
// }
        

  render(){
  return(
    <>
    
    <Card title="Metrics Report"  style={{ width: 600 }}>
      <Space direction="vertical" size={12}>
        
        <Form>
          
        <Form.Item 
            name="reporttime"
            label="Report Time Period">
       
      From <DatePicker value={this.state.reportfrom} format="DD-MM-YYYY"
           onChange={this.onFromChange}  />
      &nbsp;
        To <DatePicker value={this.state.reportto} format="DD-MM-YYYY"
           onChange={this.onToChange}  /> 
        
        </Form.Item>
        
        <Form.Item
        name="extraction"
        label="Report Extraction Date"> 
          <DatePicker value={this.state.reportextract} format="DD-MM-YYYY"
           onChange={this.onExtractChange}  /> 
        </Form.Item>
        </Form>
      </Space>
    </Card>
    </>
  );
}
}
   export default Datepick;


