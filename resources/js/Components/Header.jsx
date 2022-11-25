import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
    root: {
        backgroundColor: '#dadbdd',
        position: 'relative'
    }
}))
const Header = () => {
    const classes = useStyle()
    return (
        <header className={classes.root}>
            <div className="wrapper">
                <h3>Header</h3>
            </div>
        </header>
    );
}

export default Header;