import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/inertia-react";

const Home = (props) => {
    return (
        <>
            <Layout userName={props.auth.user != null ? props.auth.user.name : 'Guest'}>
                <Head title="صفحه اصلی" />
                <span>Home</span>
            </Layout>
        </>
    );
}

export default Home;