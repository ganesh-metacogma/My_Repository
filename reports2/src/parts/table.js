import React, { Component } from 'react';
import { Table, Typography, DatePicker } from 'antd';

const { Text } = Typography;

const fixedColumns = [
  {
    title: 'Study ID',
    dataIndex: 'study',
    fixed: true,
    sorter:(a, b) => a.study.length - b.study.length
  },
  {
    title: 'Document Type',
    dataIndex: 'document',
    sorter: (a, b) => a.document.length - b.document.length
  },
  {
    title: 'Document Creation Date',
    dataIndex: 'date',
  },
  {
    title: 'Authoring Period(in days)',
    dataIndex: 'period',
  },
  {
    title: 'Authors',
    dataIndex: 'author',
    sorter: (a, b) => a.author.length - b.author.length
  },
  {
    title: 'Review Submission Date',
    dataIndex: 'review',
  },
  {
    title: 'Total Number Of Review Cycles',
    dataIndex: 'cycle',
  },
  {
    title: 'Review Period (in days)',
    dataIndex: 'reviewperiod',
  },
  {
    title: 'Reviewers',
    dataIndex: 'reviewers',
    sorter: (a, b) => a.reviewers.length - b.reviewers.length
  },
  {
    title: 'Approval Date',
    dataIndex: 'approval',
  }
];


const fixedData = [
  {
    key: '1',
    study: 'RAN23012',
    document: "Protocol",
    date : "mm/dd/yy",
    period: "60",
    author:"Sam Dhalke",
    review: "mm/dd/yy",
    cycle: "2",
    reviewperiod: "10",
    reviewers: "Stieve Michael, Chris job, Tony Stark",
    approval: "mm/dd/yy"
  },
  {
    key: '2',
    study: 'SAM2331',
    document: "Study level",
    date : "mm/dd/yy",
    period: "80",
    author:"Sam",
    review: "mm/dd/yy",
    cycle: "5",
    reviewperiod: "15",
    reviewers: "Steve, Iron Man, Tony Stark",
    approval: "mm/dd/yy"
  },
];

class Etable extends Component
{
    render(){
        return (
          <>
            <Table
            columns={fixedColumns}
            dataSource={fixedData}
            pagination={false}
            scroll={{ x: 1000 }}
            bordered
            />
          </>
      )
    }
}

export default Etable;