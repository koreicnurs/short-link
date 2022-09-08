import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {createLink} from "../../store/actions/linkActions";

const ShortLink = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        link: "",
    });

    const submitFormHandler = e => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        dispatch(createLink(formData));
    };

    const inputChangeHandler = e => {
        const {name, value} = e.target;

        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    // const fileChangeHandler = e => {
    //     const name = e.target.name;
    //     const file = e.target.files[0];
    //
    //     setState(prevState => ({...prevState, [name]: file}));
    // };

    return (
        <form
            autoComplete="off"
            onSubmit={submitFormHandler}
            style={{marginBottom: '50px'}}
        >
            <Grid
                container
                maxWidth="md"
                textAlign="center"
                marginX="auto"
                direction="column"
                rowSpacing={2}
            >
                <Grid item>
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Link"
                        name="link"
                        value={state.link}
                        onChange={inputChangeHandler}
                    />
                </Grid>

                <Grid item>
                    <Button type="submit" color="primary" variant="contained">Create</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ShortLink;