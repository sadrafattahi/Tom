import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles'
import Nav from '@/Components/Nav'
import { useContext } from "react";
import LangContext from "@/context/langContext/LangContext";

const useStyles = makeStyles((theme) => ({
    root: {
        direction: props => props.direction,
        fontFamily: props => props.direction === 'rtl' ? 'roya' : 'roboto',
    },
    outerDiv: {
        minHeight: '100vh',
        backgroundColor: theme.palette.body.main,
    }
}))

const Item = styled('div')(({ theme }) => ({
    backgroundColor: 'blue',
}));

const Layout = ({ children, userName }) => {
    const myLang = useContext(LangContext)

    console.log({ layout: myLang.userLanguage.lang.dir })


    const classes = useStyles({ direction: myLang.userLanguage.lang.dir })

    return (
        <div className={classes.outerDiv}>
            <Grid container className={classes.root}>
                <Grid item xs={12} sx={{ marginBottom: '120px' }}>
                    <Item className="wrapper">
                        <Nav
                            userName={userName}
                        />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Grid container sx={{}} className='wrapper'>
                        <Grid item xs={12} sm={3} sx={{ backgroundColor: '#b5e0eb', p: 2 }}>
                            منوی سمت راست
                        </Grid>
                        <Grid item xs={12} sm={9} sx={{ backgroundColor: '#ebe3b5', p: 2 }}>
                            <Grid>
                                {/* <MyBox /><MyBox /><MyBox /><MyBox /><MyBox /><MyBox /> */}
                                {children}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </div>
    );
}

export default Layout;