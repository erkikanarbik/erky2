
import React, { Component } from 'react';
import './App.css';
import {makeStyles} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url('https://i.imgur.com/qQTslhF.gif')`,
        backgroundRepeat: 'repeat-y-',
        backgroundSize: 'cover',

    },
}));

export default function App() {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <CssBaseline></CssBaseline>
                <Header></Header>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                >
                <ImageCard />
                </Box>
            </div>
        );
}
