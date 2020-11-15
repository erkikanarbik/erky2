
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FetchWeather from "../api/FetchWeather";
import FetchCovid from "../api/FetchCovid";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        background: 'rgba(0,0,0,0.3)',
        margin: '20px',
        overflow: 'visible',
        minWidth: 345,

    },
    media: {
        height: 140,

    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'lighter',
        fontSize: '1.2rem',
        color: '#fff',
    },
    desc: {
        fontFamily: 'Nunito',
        fontSize: '0.75rem',
        color: '#ddd',
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
            console.log(res.data)
            console.log(res.data.length)
            let today = new Date().toISOString().slice(0, 10)
            let yesterday = new Date(new Date().setDate(new Date().getDate()-1)).toISOString().slice(0, 10);
            console.log(today)
            let filtr = res.data.filter(lastdate => lastdate.StatisticsDate === today);
            console.log(filtr)
            if (filtr.length === 0){
                console.log(yesterday)
                filtr = res.data.filter(lastdate => lastdate.StatisticsDate === yesterday);
                console.log(filtr)
                console.log(filtr[0].DailyCases)
            }
            console.log(filtr.DailyCases)
            setCovid(filtr)
        })
    }, [])


    return (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="https://i.imgur.com/xxgGyya.jpg"
                    title="Race 1"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classes.title}
                    >
                        {data.main && (
                            <div>
                                <span>{data.name}</span>
                                <sup>{data.sys.country}</sup>
                            </div>
                        )}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.desc}
                    >
                        {data.main && (
                                <div>
                                    <p>{Math.round(data.main.temp)}
                                    <sup>&deg;C</sup></p>
                                    <p>{data.weather[0].description}</p>
                                    <p>Total COVID: {covid[0].TotalCases}</p>
                                    <p>Daily Cases: {covid[0].DailyCases}</p>
                                    <p>Statistics Date: {covid[0].StatisticsDate}</p>
                                </div>
                        )}
                    </Typography>
                </CardContent>
            </Card>
    );
}