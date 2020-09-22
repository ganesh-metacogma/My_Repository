import React from 'react';

import './App.css';

import { Table, Tag, Space } from 'antd';
import Demo from './tables';

class App extends React.Component{
  render(){
  return (
    
     <div>
       <h1>Glossary</h1>
       <p>The following glossary will appear in the protocols glossary</p>
       
       <Demo />
     </div>


    
  );
}
}

export default App;
