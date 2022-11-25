import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Main from "@/Components/Main";
import { makeStyles } from "@mui/styles";
import { BrowserRouter } from 'react-router-dom'

const useStyle = makeStyles(() => ({

    root: {

    }
}))
const App = (props) => {
    const classes = useStyle()

    return (
        <>
            <div className={classes.root}>
                <BrowserRouter>
                    <Header />
                    <Main user={props.auth.user} />
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;