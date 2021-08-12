import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';
import './alluser.css';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
            
        }
        
    }
})


const Allusers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    };

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    };

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Notes</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <div className="f">
                {users.map((user) => (
                    <div className="note" key={user._id}>
                        <div className="sub">
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                        </div>
                        
                        <div className="button">
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                        </div>
                        </div>
                ))}
                </div>
            </TableBody>
        </Table>
    )
}

export default Allusers;