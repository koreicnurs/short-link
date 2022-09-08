import React, {useState} from 'react';
import {Button, Grid, Link, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {createLink} from "../../store/actions/linkActions";

const ShortLink = () => {
    const dispatch = useDispatch();
    const link = useSelector(state => state.linkCombine.link);

    const [state, setState] = useState({
        originalUrl: "",
    });

    const submitFormHandler = async e => {
        e.preventDefault();
        await dispatch(createLink(state));
    };

    const inputChangeHandler = e => {
        const {name, value} = e.target;

        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return (
        <>
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
                            name="originalUrl"
                            value={state.originalUrl}
                            onChange={inputChangeHandler}
                        />
                    </Grid>

                    <Grid item>
                        <Button type="submit" color="primary" variant="contained">Create</Button>
                    </Grid>
                </Grid>
            </form>
            {link ? <Link href={`${link.originalUrl}`}>{`http://localhost:8000/${link.shortUrl}`}</Link> : null}
        </>

    );
};

export default ShortLink;