/** @format */

import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { Login } from '../screens/Login';
import { Dashboard } from '../screens/Dashboard';
import { ROUTE_LOGIN, ROUTE_DASHBOARD } from '../constants/routes';
import {
  FOOTER_COPYRIGHT_TEXT,
  LABEL_GO_BACK_TO_DASHBOARD,
  LABEL_PAGE_NOT_DETAILS,
  LABEL_PAGE_NOT_FOUND,
} from '../constants/Comman';
import { Typography } from '@progress/kendo-react-common';
import { AppBar } from '../components/AppBar';
import { AppBarSection } from '@progress/kendo-react-layout';
// import { store } from '../store/reducers';
const isAuthenticated = () => {
  return localStorage.getItem('authToken') ? true : false;
};

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <Typography.h1>{LABEL_PAGE_NOT_FOUND}</Typography.h1>
    <Typography.p>{LABEL_PAGE_NOT_DETAILS}</Typography.p>
    <a href={ROUTE_DASHBOARD}>{LABEL_GO_BACK_TO_DASHBOARD}</a>
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return isAuthenticated() ? (
    <>{children}</>
  ) : (
    <Navigate to={ROUTE_LOGIN} state={{ from: location }} replace />
  );
};

const RedirectLoggedIn = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? (
    <Navigate to={ROUTE_DASHBOARD} replace />
  ) : (
    <>{children}</>
  );
};

const routes = [
  {
    id: 1,
    path: ROUTE_LOGIN,
    component: <Login />,
    isProtected: false,
    redirectIfLoggedIn: true,
  },
  {
    id: 2,
    path: ROUTE_DASHBOARD,
    component: <Dashboard />,
    isProtected: true,
  },
];

const AppRouter = () => {
  const RenderRoutes = () => (
    <div className='app-container'>
      <div className='content'>
        <Routes>
          {routes.map((route: any) => {
            if (route.isProtected) {
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  element={
                    <ProtectedRoute>
                      <AppBar />
                      <div style={{ marginTop: '60px' }}>{route.component}</div>
                    </ProtectedRoute>
                  }
                />
              );
            }
            if (route.redirectIfLoggedIn) {
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  element={
                    <RedirectLoggedIn>{route.component}</RedirectLoggedIn>
                  }
                />
              );
            }
            return (
              <Route
                key={route.id}
                path={route.path}
                element={route.component}
              />
            );
          })}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <div className='screen-footer'>
        <AppBarSection>{FOOTER_COPYRIGHT_TEXT}</AppBarSection>
      </div>
    </div>
  );

  return (
    <Provider store={undefined as any}>
      <BrowserRouter>
        <RenderRoutes />
        <ToastContainer
          style={{ zIndex: '999999' }}
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </BrowserRouter>
    </Provider>
  );
};

export { AppRouter };
