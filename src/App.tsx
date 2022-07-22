import Home from 'app/page/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'components/layout/globalStyle';
import { publicRoute } from 'router';
import { RouteType } from './types';
import DefaultLayout from 'components/layout/defaultLayout';

const App = () => {
  return (
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
  );
};

export default App;
