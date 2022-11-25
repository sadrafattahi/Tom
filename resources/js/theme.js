import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#427aa9",
            light: "#d8d6f4"
        },
        secondary: {
            main: "#a62441",
            light: "#ffd6e4"
        },
        body: {
            main: '#e3f0ee'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 620,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    shape: {
        borderRadius: "4px"
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
            }
        }
    },
    props: {
        MuiTextField: {
            size: "medium"
        }
    }
})

export default theme