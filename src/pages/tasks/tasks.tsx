import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup
} from 'devextreme-react/data-grid';

export default function Task() {

  const [todo,todoSet] = useState();

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{ todoSet(res.data) })
  },[]);

  console.log(todo);

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Tasks</h2>

      <DataGrid
        className={'dx-card wide-card'}
        dataSource={todo as any}
        showBorders={false}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={true}
      >
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />

        <Column 
        dataField={'userId'} 
        width={90} 
        caption={'userId'}
        hidingPriority={2} 
        />
        <Column
          dataField={'id'}
          width={190}
          caption={'id'}
          hidingPriority={8}
        />
        <Column
          dataField={'title'}
          
          caption={'title'}
          hidingPriority={6}
        />
        <Column
          dataField={'completed'}
          width={190}
          caption={'completed'}
          hidingPriority={3}
        />
         
    
      </DataGrid>
    </React.Fragment>
)}

const priorities = [
  { name: 'High', value: 4 },
  { name: 'Urgent', value: 3 },
  { name: 'Normal', value: 2 },
  { name: 'Low', value: 1 }
];
