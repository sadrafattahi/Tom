import React, { useContext, useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { makeStyles } from '@mui/styles';
import LangContext from '@/context/langContext/LangContext';
import { Grid } from '@mui/material'
const useStyle = makeStyles((theme) => ({
    root: {

    },
    Input: {
        width: '100%',
        display: 'block',
        marginTop: '0.25em',
        textAlign: 'left'
    },
    Button: {
        marginRight: props => props.dir === 'ltr' ? '0' : '1em',
        marginLeft: props => props.dir === 'rtl' ? '0' : '1em'
    },
    backBtn: {
        float: props => props.dir === 'rtl' ? 'left' : 'right',
        backgroundColor: 'orange',
        padding: '',
        padding: '0.5em 1em',
        borderRadius: '0.25em',
        fontSize: '1em',
        fontFamily: 'inherit'
    }
}))

export default function Login({ status, canResetPassword }) {
    const myLang = useContext(LangContext)
    const dir = myLang.userLanguage.lang.dir
    const classes = useStyle({ dir: dir })
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <button
                className={classes.backBtn}
                onClick={() => window.history.back()}
            >
                {myLang.dictionary.back}
            </button>
            <div style={{ clear: 'both' }}></div>
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value={myLang.dictionary.email + ` :`} />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className={classes.Input}
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <Label forInput="password" value={myLang.dictionary.password + ' :'} />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className={classes.Input}
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div style={{ marginTop: '1rem', display: 'block' }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span
                            style={{
                                margin: '0 0.5rem', fontSize: '1em',
                                lineHeight: '1.5em', color: 'rgb(75 85 99)'
                            }}
                        >{myLang.dictionary.remember}</span>
                    </label>
                </div>

                <div
                    style={{
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'flex-end', marginTop: '1rem'
                    }}
                >
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            style={{
                                textDecoration: 'underline', color: 'rgb(75 85 99)',
                                fontSize: '1em', lineHeight: "1.25em"
                            }}
                        >
                            {myLang.dictionary.forget}
                        </Link>
                    )}

                    <Button className={classes.Button} processing={processing}>
                        {myLang.dictionary.login}
                    </Button>
                </div>
            </form>

        </Guest>
    );
}
