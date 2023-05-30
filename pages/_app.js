import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
