
import About from '../Pages/About'
import { makeStyles } from "@mui/styles";
import { Routes, Route } from "react-router-dom";
import Contact from '@/Pages/Contact';
import Dashboard from './Dashboard';
const useStyle = makeStyles(() => ({
    root: {
        '& main': {
            backgroundColor: '#c0c1c3',
            padding: '20px',
            height: '100vh'
        }
    }
}))
const Main = (props) => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <main className="wrapper">
                <p>{props.user.name}</p>
                <Routes>
                    <Route path="/" element={<h>Home</h>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </main>
        </div>
    );
}

export default Main;