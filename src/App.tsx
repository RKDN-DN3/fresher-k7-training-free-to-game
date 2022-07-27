import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RouteType } from './types';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import { publicRoute } from 'router';
import NotFound from 'components/notFound';
import GlobalStyle from 'components/layout/globalStyle';
import DefaultLayout from 'components/layout/defaultLayout';

const App = () => {
  const { isLight } = useSelector((state: RootState) => state.actionHeader);

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
                    <DefaultLayout
                      noneBanner={route.noneBanner && true}
                      backGroundImg={route.backGroundImg && true}
                    >
                      <Component />
                    </DefaultLayout>
                  }
                />
              );
            })}
            <Route
              path="*"
              element={
                <DefaultLayout noneBanner={true}>
                  <NotFound />
                </DefaultLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </GlobalStyle>
    </ThemeProvider>
  );
};

export default App;
