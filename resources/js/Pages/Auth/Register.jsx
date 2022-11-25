import React, { useEffect, useContext } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { makeStyles } from '@mui/styles';
import LangContext from '@/context/langContext/LangContext';
import { Grid } from '@mui/material';

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
export default function Register() {
    const myLang = useContext(LangContext)
    const dir = myLang.userLanguage.lang.dir
    const classes = useStyle({ dir: dir })
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest>
            <Head title="Register" />
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
                    <Label forInput="name" value={myLang.dictionary.name + ' :'} />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className={classes.Input}
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div style={{ marginTop: '0.8em' }}>
                    <Label forInput="email" value={myLang.dictionary.email + ' :'} />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className={classes.Input}
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div style={{ marginTop: '0.8em' }}>
                    <Label forInput="password" value={myLang.dictionary.password + ' :'} />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className={classes.Input}
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div style={{ marginTop: '0.8em' }}>
                    <Label forInput="password_confirmation" value={myLang.dictionary.confirm_password + ' :'} />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className={classes.Input}
                        handleChange={onHandleChange}
                        required
                    />
                </div>
                <div>
                    <Label forInput="name" value={myLang.dictionary.name + ' :'} />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className={classes.Input}
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div style={{ marginTop: '0.8em' }}>
                    <Label forInput="email" value={myLang.dictionary.email + ' :'} />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className={classes.Input}
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div style={{ marginTop: '0.8em' }}>
                    <Label forInput="password" value={myLang.dictionary.password + ' :'} />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className={classes.Input}
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div style={{ marginTop: '0.8em' }}>
                    <Label forInput="password_confirmation" value={myLang.dictionary.confirm_password + ' :'} />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className={classes.Input}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '1em' }} >
                    <Link href={route('login')} style={{
                        textDecoration: 'underline', color: 'rgb(75 85 99)',
                        fontSize: '1em', lineHeight: "1.25em"
                    }}>
                        {myLang.dictionary.has_your_email}
                    </Link>

                    <Button className={classes.Button} processing={processing}>
                        {myLang.dictionary.register}
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
