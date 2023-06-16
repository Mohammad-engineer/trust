import { useGetUsers, usePostUser, useDeleteUser } from '../services/index'

import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


function UserList() {

    const {
        isDeleting,
        isErrorDeleting,
        errorDeleting,
        DeleteUser
    } = useDeleteUser()

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'first_name',
            headerName: 'First Name',
            width: 80,
            editable: true,
        },
        {
            field: 'last_name',
            headerName: 'Last Name',
            width: 80,
            editable: true,
        },
        {
            field: 'date_of_birth',
            headerName: 'Birth day',
            width: 110,
            editable: true,

        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 80,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 150,
            editable: true,
        },
        {
            field: 'country',
            headerName: 'Country',
            width: 100,
            editable: true,
        },
        {
            field: 'city',
            headerName: 'City',
            width: 100,
            editable: true,
        },
        {
            field: 'state',
            headerName: 'State',
            width: 120,
            editable: true,
        },
        {
            field: 'street',
            headerName: 'Street',
            width: 200,
            editable: true,
        },
        {
            field: 'zipcode',
            headerName: 'Zipcode',
            width: 80,
            editable: true,
        },
        {
            field: 'latitude',
            headerName: 'Latitude',
            width: 80,
            editable: true,
            type: 'number'
        },
        {
            field: 'longitude',
            headerName: 'longitude',
            width: 80,
            editable: true,
            type: 'number'
        },
        {
            field: 'job',
            headerName: 'Job',
            width: 180,
            editable: true,
        },
        {
            field: "Delete",
            width: 100,
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            DeleteUser(cellValues.row.id);
                        }}
                    >
                        Delete
                    </Button>
                );
            }
        }

    ];



    const { users, isLoading, isError, error } = useGetUsers()

    return (
        <div className='App'>
            <h2>USERS APP</h2>

            {isLoading && <p>Loading...</p>}
            {isError && <p>{error.message}</p>}
            <div className='content-container'>

                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>

        </div>
    );
}

export default UserList;
