import { useDeleteTodo, usePostUser, useUpdateTodo } from '../services/index'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormLabel, MenuItem } from '@mui/material';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { useState } from 'react'


const genderList = [
    {
        value: 'male',
        label: 'Male',
    },
    {
        value: 'female',
        label: 'Female',
    },

];



const CrudUser = () => {

    // const {
    //     isUpdating,
    //     isErrorUpdating,
    //     errorUpdating,
    //     UpdateTodo
    // } = useUpdateTodo()

    // const {
    //     isDeleting,
    //     isErrorDeleting,
    //     errorDeleting,
    //     DeleteTodo
    // } = useDeleteTodo()

    // const handleUpdateTodo = (id, isComplete) => {
    //     const data = { isComplete: !isComplete }
    //     UpdateTodo({ id, data })
    // }

    const {
        isCreating,
        isSuccessCreating,
        isErrorCreating,
        errorCreateing,
        CreateUser
    } = usePostUser()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [gender, setGender] = useState('')
    const [birthDay, setBirthday] = useState('')
    const [job, setJob] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')


    const handleAddUser = () => {
        const data = {
            last_name: lastName,
            email: email,
            id: 1001,
            phone: phone,
            street: street,
            state: state,
            zipcode: zipCode,
            latitude: latitude,
            gender: gender,
            first_name: firstName,
            date_of_birth: birthDay,
            job: job,
            city: city,
            country: country,
            longitude: longitude
        }

        CreateUser(JSON.stringify(data))

        // console.log(data);
    }




    return (
        <>
            {isErrorCreating && <p>{errorCreateing.message}</p>}
            {isCreating && <p>Loading..</p>}
            {isSuccessCreating && <p>User added successfull</p>}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                personal Information:
                <TextField
                    id="outlined-multiline-flexible"
                    label="First Name"
                    multiline
                    maxRows={4}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Last Name"
                    multiline
                    maxRows={4}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Phone"
                    multiline
                    maxRows={4}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    multiline
                    maxRows={4}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Stack spacing={1.5} sx={{ maxWidth: 200 }}>
                    <FormLabel
                        sx={(theme) => ({
                            '--FormLabel-color': 'black',
                        })}
                    >
                        Birth Date
                        <Input
                            type="date"
                            slotProps={{
                                input: {
                                    min: '1985-06-07T00:00',
                                    max: '2018-06-14T00:00',
                                },
                            }}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </FormLabel>

                </Stack>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Gender"
                    defaultValue="male"
                    helperText="Please select your gender"

                >
                    {genderList.map((option) => (
                        <MenuItem key={option.value} value={option.value} onClick={(e) => setGender(e.currentTarget.innerText)} >
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Job"
                    multiline
                    maxRows={4}
                    onChange={(e) => setJob(e.target.value)}
                />

            </Box>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                Address:
                <TextField
                    id="outlined-multiline-flexible"
                    label="Country"
                    multiline
                    maxRows={4}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="City"
                    multiline
                    maxRows={4}
                    onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Street"
                    multiline
                    maxRows={4}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="State"
                    multiline
                    maxRows={4}
                    onChange={(e) => setState(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Zip Code"
                    multiline
                    maxRows={4}
                    onChange={(e) => setZipCode(e.target.value)}
                />
                <Stack spacing={1.5} sx={{ maxWidth: 200 }}>
                    <FormLabel
                        sx={(theme) => ({
                            '--FormLabel-color': 'black',
                        })}
                    >
                        Longitude
                        <Input
                            type="number"
                            defaultValue={2.5}
                            slotProps={{
                                input: {

                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                            onChange={(e) => setLongitude(e.target.value)}
                        />
                    </FormLabel>
                    <FormLabel
                        sx={(theme) => ({
                            '--FormLabel-color': 'black',
                        })}
                    >
                        Latitude
                        <Input
                            type="number"
                            defaultValue={2.5}
                            slotProps={{
                                input: {

                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                            onChange={(e) => setLatitude(e.target.value)}
                        />
                    </FormLabel>
                </Stack>
            </Box>


            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    display: 'flex',
                    justifyContent: 'center'
                }}
                noValidate
                autoComplete="off"
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddUser}
                >
                    Submit
                </Button>
            </Box>

        </>
    )
}

export default CrudUser
