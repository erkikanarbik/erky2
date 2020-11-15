import { makeStyles } from "@material-ui/core/styles";
import {AppBar, Toolbar, IconButton} from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme)=> ({
    appbar: {
        background:"none",
        fontFamily: "Nunito",
    },
    icon: {
        color: '#fff',
        fontSize: "2rem",
    },
    appbarTitle: {
        flexGrow: "1",
    },
    appbarWrapper: {
        width: "1%",
        margin: "0 auto"
    },
    colorTitle: {
        color: '#ff00d5',
    },
}));
export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>erky<span className={classes.colorTitle}>.</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon}></SortIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}