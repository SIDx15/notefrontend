import { AppBar, Toolbar, makeStyles ,Typography} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const Navbar = () => {
    const classes = useStyle();
    return (
        <div>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>Introduction</NavLink>
                <NavLink className={classes.tabs} to="all" exact>All Notes</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add Note</NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;