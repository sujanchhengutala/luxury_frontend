import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Home from './pages/Home';
import Header from './component.js/Header';
import Footer from './component.js/Footer';
import Curosel from './component.js/Curosel';
function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "#202020",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F3F3F3",
      footer_bg: "#D9C9B9",
      btn: "#B9C2D9",
      btn_: "",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
<ThemeProvider theme={theme}>
  <GlobalStyle />
<BrowserRouter>
<Header />
<Routes>
<Route path='/' element = {<Home />} />
</Routes>
<Footer />
</BrowserRouter>
</ThemeProvider>
  );
}

export default App;
