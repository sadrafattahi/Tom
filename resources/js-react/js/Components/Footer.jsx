import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
    root: {
        backgroundColor: '#c0c1c3'
    }
}))
const Footer = () => {
    const classes = useStyle()
    return (
        <footer className={classes.root}>
            <div className="wrapper">
                footer
            </div>
        </footer>
    );
}

export default Footer;