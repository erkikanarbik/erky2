
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import FetchWeather from "../api/FetchWeather";
import FetchCovid from "../api/FetchCovid";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        background: 'rgba(0,0,0,0.3)',
        margin: '20px',
        overflow: 'visible',
        minWidth: 345,

    },
    gridgrow: {
        flexGrow: 1,
    },
    media: {
        height: 140,

    },
    content: {
        padding: 10,
        "&:last-child": {
            paddingBottom: 10,
        }
    },

    title: {
        fontFamily: 'Nunito',
        fontSize: '1rem',
        textTransform: 'uppercase',
        color: '#fff',
    },
    desc: {
        fontFamily: 'Nunito',
        fontSize: '0.75rem',
        color: '#ddd',
        textTransform: 'uppercase',
    },
});

export default function ImageCard() {
    const classes = useStyles();
    const [data, setData] = useState({});
    const [covid, setCovid] = useState({});

    useEffect(() => {
        FetchWeather().then(res => {
            console.log(res.data)
            setData(res.data)
        })
        FetchCovid().then(res => {
            let today = new Date().toISOString().slice(0, 10)
            let yesterday = new Date(new Date().setDate(new Date().getDate()-1)).toISOString().slice(0, 10); // REMEMBER TO CHANGE -2 BACK TO -1
            console.log(today)
            let filtr = res.data.filter(lastdate => lastdate.StatisticsDate === today);
            console.log(filtr)
            if (filtr.length === 0){
                console.log(yesterday)
                filtr = res.data.filter(lastdate => lastdate.StatisticsDate === yesterday);
                console.log(filtr)
            }
            setCovid(filtr)
        })
    }, [])


    return (
        <div>
            {data.main && (
                    <div>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="https://i.imgur.com/xxgGyya.jpg"
                        title="Race 1"
                    />
                    <CardContent className={classes.content}>

                        <Typography
                            variant="caption"
                            color="textSecondary"
                            className={classes.desc}
                        >

                                        <Grid container spacing={2}>
                                            <Grid item xs ={12} sm container>
                                                <Grid item xs>
                                                    <Box textAlign="left" m={1}>
                                                        Total COVID: {covid[0].TotalCases}
                                                        <br />
                                                        Daily Cases: {covid[0].DailyCases}
                                                        <br />
                                                        Statistics Date:
                                                        <br />
                                                        {covid[0].StatisticsDate}
                                                    </Box>
                                                </Grid>
                                                <Grid item xs>
                                                    <Grid item placement="top">
                                                        <Box textAlign="right" m={1}>
                                                            {Math.round(data.main.temp)} <sup>&deg;C</sup>
                                                            <br />
                                                            {data.weather[0].description}
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                        </Typography>

                        <Typography
                            gutterBottom
                            variant="subtitle1"
                            className={classes.title}
                        >
                                    <Box textAlign="right" m={1}>
                                        <span>{data.name}</span>
                                    </Box>


                        </Typography>
                    </CardContent>
                </Card>
                    </div>
)}
        </div>
    );
}