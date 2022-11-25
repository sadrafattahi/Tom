import React, { useContext } from 'react';
// import '../../css/guest.css'
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import { makeStyles } from '@mui/styles';
import LangContext from '@/context/langContext/LangContext';

const useStyle = makeStyles((theme) => ({
    root: {
        direction: props => props.dir === 'rtl' ? 'rtl' : 'ltr',
        fontFamily: props => props.dir === 'rtl' ? 'roya' : 'roboto',
        fontSize: '18px',
        backgroundColor: theme.palette.body.main,
        paddingTop: '20%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '0',
            justifyContent: 'center'
        }
    },
    logo: {
        width: '4.5em',
        height: '5em',
        color: 'rgb(107 114 128)',
        fill: 'currentColor'
    },
    content: {
        width: '90%',
        boxShadow: '0 0 #000',
        padding: '1em 1.5em',
        backgroundColor: 'rgb(255 255 255)',
        overflow: 'hidden',
        marginTop: '1em',
        borderRadius: '0.3em',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '28em'
        }

    }
}))

export default function Guest({ children }) {
    const myLang = useContext(LangContext)

    const classes = useStyle({ dir: myLang.userLanguage.lang.dir })
    return (
        <>
            <div className={classes.root}>
                <div >
                    <Link href="/">
                        <ApplicationLogo className={classes.logo} />
                    </Link>
                </div>

                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </>
    );
}
