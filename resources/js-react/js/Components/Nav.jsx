import { Link } from 'react-router-dom'
import { Link as InertiaLink } from '@inertiajs/inertia-react'
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
    root: {
        '& ul': {
            display: 'flex',
            '& li': {
                borderRight: '1px solid #666',
                margin: '5px',
                '& a': {
                    padding: '8px 20px 8px 12px'
                }
            }

        }
    }
}))
const Nav = () => {
    const classes = useStyle()
    return (
        <nav className={classes.root}>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><InertiaLink href='/dashboard'>dashboard</InertiaLink></li>
            </ul>
        </nav >
    );
}

export default Nav;