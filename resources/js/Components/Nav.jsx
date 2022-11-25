import { useState, useContext } from "react";
import { Link } from '@inertiajs/inertia-react'
import { makeStyles } from "@mui/styles";
import menuBtn from '../../images/menu.png';
import LangContext from "@/context/langContext/LangContext";

const useStyle = makeStyles((theme) => ({
    topmenu: {
        position: 'fixed',
        width: '100%',
        height: '53px',
        maxWidth: '1200px',
        zIndex: '1',
        backgroundColor: theme.palette.secondary.main,
        '& ul': {
            backgroundColor: '#edeeee',
            boxSizing: 'border-box',
            position: 'absolute',
            width: '100%',
            top: '100%',
            borderTop: '1px solid white',
            fontSize: props => props.dir === 'rtl' ? '18px' : '18px',
            fontWeight: props => props.dir === 'rtl' ? '700' : '400',
            display: props => props.displayRightMenu,
            lineHeight: '52px',
            '& a': {
                color: theme.palette.primary.main,
                display: 'block',
                borderBottom: '1px solid gray',
                paddingRight: '15px',
                paddingLeft: '15px',
                cursor: 'pointer',
                '&:hover': {
                    color: 'black',
                    padding: '0 25px',
                    transition: '0.3s'
                }
            },
            [theme.breakpoints.up('sm')]: {
                backgroundColor: 'transparent',
                border: 'none',
                display: 'flex !important',
                position: 'static',
                lineHeight: '53px',
                '& :nth-last-child(3)': {
                    marginRight: props => props.dir === 'rtl' ? 'auto !important' : '0',
                    marginLeft: props => props.dir === 'ltr' ? 'auto !important' : '0',
                },
                '& a': {
                    border: 'none !important',
                    padding: '0 12px !important'
                }
            }
        },
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'transparent'
        }
    },
    rightMenuBtn: {
        [theme.breakpoints.down('sm')]: {
            display: 'block !important',
            position: 'fixed',
            right: '20px',
            top: '10px',
            border: '1px solid white',
            borderRadius: '2px',
            zIndex: '2',
            cursor: 'pointer',
            width: '30px',
            height: '30px',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    leftMenuBtn: {
        position: 'fixed',
        left: '20px',
        top: '10px',
        border: '1px solid white',
        borderRadius: '2px',
        zIndex: '2',
        cursor: 'pointer',
        width: '30px',
        height: '30px',
    },
}))
const Nav = (props) => {
    const myLang = useContext(LangContext)
    const [displayRightMenu, setDisplayRightMenu] = useState('none');

    const dir = myLang.userLanguage.lang.dir
    const classes = useStyle({ displayRightMenu, dir: dir })

    const toggleRightMenu = () => {
        setDisplayRightMenu(displayRightMenu === 'none' ? 'block' : 'none')
    }

    const changeLanuage = () => {
        myLang.Change_User_Lang()
    }
    return (
        <div className={classes.topmenu}>
            <nav>
                <ul>
                    <li><Link href="/">{myLang.dictionary.home}</Link></li>
                    <li><Link href="/about">{myLang.dictionary.about}</Link></li>
                    <li><Link href="/contact">{myLang.dictionary.contact}</Link></li>
                    <li><Link href='/dashboard'>{myLang.dictionary.dashboard}</Link></li>
                    {props.userName === 'Guest' ?
                        <>
                            <li><a
                                style={{ fontFamily: dir === 'rtl' ? 'roboto' : 'roya', fontWeight: '500' }}
                                onClick={changeLanuage}>{myLang.dictionary.lang}</a></li>
                            <li><Link href={route('login')}>{myLang.dictionary.login}</Link></li>
                            <li><Link href={route('register')}>{myLang.dictionary.register}</Link></li>
                        </>
                        :
                        <>
                            <li><a
                                style={{ fontFamily: dir === 'rtl' ? 'roboto' : 'roya', fontWeight: '500' }}
                                onClick={changeLanuage}>{myLang.dictionary.lang}</a></li>
                            <li><Link href={route('logout')} method='post'>{myLang.dictionary.exit}</Link></li>
                            <li></li>
                        </>
                    }
                </ul >
                {/* <img src={menuBtn} className={classes.leftMenuBtn}></img> */}
                <img src={menuBtn} className={classes.rightMenuBtn} onClick={toggleRightMenu}></img>
            </nav >
        </div >
    );
}

export default Nav;