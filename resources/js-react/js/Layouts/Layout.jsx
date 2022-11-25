
const Layout = ({ children, user }) => {
    if (typeof user !== 'undefined') {
        console.log(user)
    }
    return (
        <div>
            {children}
        </div >
    );
}

export default Layout;