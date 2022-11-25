import { makeStyles } from "@mui/styles";
import Nav from "./Nav";

const useStyle = makeStyles(() => ({
    root: {
        backgroundColor: '#dadbdd'
    }
}))
const Header = () => {
    const classes = useStyle()
    return (
        <header className={classes.root}>
            <div className="wrapper">
                <Nav />
            </div>
        </header>
    );
}

export default Header;