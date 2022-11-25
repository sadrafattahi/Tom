import React, { useContext } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import LangContext from '@/context/langContext/LangContext';
import { makeStyles } from '@mui/styles';

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
    }
}))

export default function ForgotPassword({ status }) {
    const myLang = useContext(LangContext)

    const signLang = myLang.userLanguage.lang.sign
    const dir = myLang.userLanguage.lang.dir

    const classes = useStyle({ dir: dir })
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Guest>
            <Head title="Forgot Password" />

            <div
                style={{
                    marginBottom: '0.8em',
                    fontSize: signLang === 'fa' ? '1em' : '0.8em',
                    lineHeight: '1.2em', color: 'rgb(107 114 128)'
                }}
            >
                {myLang.dictionary.forget_password}
            </div>

            {status && <div
                style={{
                    marginBottom: '0.8em', fontSize: '0.8em',
                    color: 'green'
                }}>{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className={classes.Input}
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div
                    style={{
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'flex-end', marginTop: '0.8em'
                    }}>
                    <Button className={classes.Button} processing={processing}>
                        {myLang.dictionary.email_reset_button}
                    </Button>
                </div>
            </form>
        </Guest >
    );
}
