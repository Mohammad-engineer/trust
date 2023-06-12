import React, { useState, useEffect } from 'react';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import axios from 'axios';
import DataGrid, {
    Column,
    Pager,
    Paging,
    FilterRow,
    Lookup
} from 'devextreme-react/data-grid';

export default function Users() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))

    }, [])

    const dataSource = new DataSource({
        store: new ArrayStore({
            key: 'id',
            data: data as any,

        }),

    });

    return (
        <React.Fragment>
            <h2 className={'content-block'}>Users</h2>

            <DataGrid
                className={'dx-card wide-card'}
                dataSource={dataSource as any}
                showBorders={false}
                focusedRowEnabled={true}
                defaultFocusedRowIndex={0}
                columnAutoWidth={true}
                columnHidingEnabled={true}
            >
                <Paging defaultPageSize={10} />
                <Pager showPageSizeSelector={true} showInfo={true} />
                <FilterRow visible={true} />

                <Column dataField={'id'} width={90} hidingPriority={2} />
                <Column
                    dataField={'name'}
                    width={190}
                    caption={'Name'}
                    hidingPriority={8}
                />
                <Column
                    dataField={'email'}
                    caption={'Email'}
                    hidingPriority={6}
                />

            </DataGrid>
        </React.Fragment>
    )
}

