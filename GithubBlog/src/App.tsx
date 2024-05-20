import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { RepoProvider } from "./contexts/repoContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RepoProvider>
        <Home />
      </RepoProvider>
    </ThemeProvider>

  )
}
