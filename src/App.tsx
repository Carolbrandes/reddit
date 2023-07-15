import { ThemeProvider, DefaultTheme } from "styled-components";
import usePeristedState from "./hooks/usePersistedState";

import GlobalStyle from "./styles/global";
import { Header } from "./components/Header";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { FilterBar } from "./components/FilterBar";
import { PostList } from "./components/PostList";

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />

        <Header toggleTheme={toggleTheme} />

        <FilterBar />

        <PostList />
      </div>
    </ThemeProvider>
  );
}

export default App;
