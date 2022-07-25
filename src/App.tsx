import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'components/layout/globalStyle';
import { publicRoute } from 'router';
import { RouteType } from './types';
import DefaultLayout from 'components/layout/defaultLayout';

import { ThemeProvider } from 'styled-components';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';

const App = () => {
  const { isLight } = useSelector((state: RootState) => state.lightOfDark);
  return (
    <ThemeProvider theme={{ theme: isLight ? 'light' : 'dark' }}>
      <GlobalStyle>
        <BrowserRouter>
          <Routes>
            {publicRoute?.map((route: RouteType, index: number) => {
              const Component = route.component;
              return (
                <Route
                  key={index}
                  path={route.patch}
                  element={
                    <DefaultLayout noneBanner={route.noneBanner && true}>
                      <Component />
                    </DefaultLayout>
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </GlobalStyle>
    </ThemeProvider>
  );
};

export default App;
