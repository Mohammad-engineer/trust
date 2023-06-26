import { usePostUser, useUpdateUser } from '../services/index'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormLabel, MenuItem } from '@mui/material';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

const genderList = [
    {
        value: 'male',
        label: 'male',
    },
    {
        value: 'female',
        label: 'female',
    },

];

const CrudUser = () => {
    const location = useLocation();

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

    useEffect(() => {
        if (location.state) {
            setFirstName(location.state.first_name);
            setLastName(location.state.last_name);
            setEmail(location.state.email);
            setPhone(location.state.phone);
            setStreet(location.state.street);
            setCountry(location.state.country);
            setCity(location.state.city);
            setState(location.state.state);
            setZipCode(location.state.zipcode);
            setGender(location.state.gender);
            setBirthday(location.state.date_of_birth);
            setJob(location.state.job);
            setLatitude(location.state.latitude);
            setLongitude(location.state.longitude);
        }

    }, [location.state])

    const {
        isUpdating,
        isErrorUpdating,
        errorUpdating,
        UpdateUser
    } = useUpdateUser()

    const {
        isCreating,
        isSuccessCreating,
        isErrorCreating,
        errorCreateing,
        CreateUser
    } = usePostUser()

    const handlerUser = () => {
        const data = {
            last_name: lastName,
            email: email,
            id: location.state ? location.state.id : 1001,
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

        location.state ? UpdateUser(data.id, data) : CreateUser(JSON.stringify(data))

    }

    return (

        <>
            {isErrorCreating && <p>{errorCreateing.message}</p>}
            {isErrorUpdating && <p>{errorUpdating.message}</p>}

            {isCreating && <p>Loading..</p>}
            {isUpdating && <p>Loading..</p>}

            {isSuccessCreating && <p>User added successfull</p>}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '65ch' },
                    display: 'flex',
                    flexFlow: 'row'

                }}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                        display: 'flex',
                        flexFlow: 'column'
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
                        value={firstName}
                    />

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Last Name"
                        multiline
                        maxRows={4}
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Phone"
                        multiline
                        maxRows={4}
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Email"
                        multiline
                        maxRows={4}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                                value={birthDay}
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
                            <MenuItem key={option.value} value={gender ? gender : option.value} onClick={(e) => setGender(e.currentTarget.innerText)}>
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
                        value={job}
                    />

                </Box>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                        display: 'flex',
                        flexFlow: 'column'
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
                        value={country}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="City"
                        multiline
                        maxRows={4}
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Street"
                        multiline
                        maxRows={4}
                        onChange={(e) => setStreet(e.target.value)}
                        value={street}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="State"
                        multiline
                        maxRows={4}
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Zip Code"
                        multiline
                        maxRows={4}
                        onChange={(e) => setZipCode(e.target.value)}
                        value={zipCode}
                    />
                    <Stack spacing={1.5} sx={{ maxWidth: 200 }}>
                        <FormLabel
                            sx={() => ({
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
                                value={+longitude}
                            />
                        </FormLabel>
                        <FormLabel
                            sx={() => ({
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
                                value={+latitude}
                            />
                        </FormLabel>
                    </Stack>
                </Box>
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
                    onClick={handlerUser}
                >
                    Submit
                </Button>
            </Box>
        </>
    )
}

export default CrudUser
