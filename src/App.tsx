import { ThemeProvider, DefaultTheme } from "styled-components";
import usePeristedState from "./hooks/usePersistedState";
import { ErrorBoundary } from "react-error-boundary";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { FilterBar } from "./components/FilterBar";
import { PostList } from "./components/PostList";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorFallback } from "./components/ErrorFalback";
import { UserStorage } from "./context/globalContext";

const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <UserStorage>
        <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyle />

            <Header toggleTheme={toggleTheme} />

            <FilterBar />

            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <PostList />
            </ErrorBoundary>
          </div>
        </ThemeProvider>
      </UserStorage>
    </QueryClientProvider>
  );
}

export default App;
