import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/inertia-react";

const About = (props) => {
    return (
        <Layout userName={props.auth.user.name}>
            <Head title="درباره ما" />

            About
        </Layout>
    );
}

export default About;