import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Header />
        <Profile />
    </ThemeProvider>
  )
}
