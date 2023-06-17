import { useGetUsers, useDeleteUser } from '../services/index'

import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

import { useNavigate } from "react-router-dom";


function UserList() {
    const { users, isLoading, isError, error } = useGetUsers()

    const navigate = new useNavigate();
    const routeChange = (cellValues) => {
        navigate(`/crud-user`, { state: cellValues.row });
    }

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
        // {
        //     field: 'zipcode',
        //     headerName: 'Zipcode',
        //     width: 80,
        //     editable: true,
        // },
        // {
        //     field: 'latitude',
        //     headerName: 'Latitude',
        //     width: 80,
        //     editable: true,
        //     type: 'number'
        // },
        // {
        //     field: 'longitude',
        //     headerName: 'longitude',
        //     width: 80,
        //     editable: true,
        //     type: 'number'
        // },
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
        },
        {
            field: "Update",
            width: 100,
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            routeChange(cellValues)
                        }}
                    >
                        Update
                    </Button>
                );
            }
        }

    ];
    const {
        isDeleting,
        isErrorDeleting,
        errorDeleting,
        DeleteUser
    } = useDeleteUser()

    return (
        <div className='App'>
            <h2>USERS APP</h2>

            {isLoading && <p>Loading...</p>}
            {isError && <p>{error.message}</p>}
            {isDeleting && <p>Loading...</p>}
            {isErrorDeleting && <p>{errorDeleting.message}</p>}
            {users ?
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
                : null}

        </div>
    );
}

export default UserList;
