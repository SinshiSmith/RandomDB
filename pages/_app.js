import { ThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";
import createPersistedState from "use-persisted-state";
import { useEffect } from "react";
import breakpoints from "../data/breakpoints";

const useCurrentTheme = createPersistedState("theme");

const darkTheme = {
  colors: {
    primary: "#E2E2E2"
  },
  backgroundsColors: {
    primary: "#282A2E",
    secondary: "#303236"
  }
};

const lightTheme = {
  colors: {
    primary: "#000000"
  },
  backgroundsColors: {
    primary: "#FFFFFF"
  }
};

const App = ({ Component, pageProps }) => {
  const [isDarkMode, setIsDarkMode] = useCurrentTheme(true);
  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  return (
    <ThemeProvider
      theme={{
        colors: {
          danger: "#d3514d",
          ...(isDarkMode ? darkTheme.colors : lightTheme.colors)
        },
        backgroundsColors: {
          green: "#438f62",
          ...(isDarkMode
            ? darkTheme.backgroundsColors
            : lightTheme.backgroundsColors)
        }
      }}
    >
      <Global
        styles={({ colors, backgroundsColors }) =>
          breakpoints({
            html: {
              fontSize: "62.5%"
            },
            body: {
              fontSize: "1.6rem",
              margin: ["0 10px", "0px 30px"],
              color: colors.primary,
              background: backgroundsColors.primary
            }
          })
        }
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
