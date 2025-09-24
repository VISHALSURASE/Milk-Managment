/** @format */

import {
  AppBar as Navbar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from '@progress/kendo-react-layout';
import React, { useEffect, useState } from 'react';
import { menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ROUTE_DASHBOARD,
  ROUTE_FARMERS,
  ROUTE_COLLECTORS,
  ROUTE_MILK_COLLECTION,
  ROUTE_PAYMENTS,
  ROUTE_REPORTS,
  ROUTE_SETTINGS,
} from '../constants/routes';
import {
  LABEL_DASHBOARD,
  LABEL_FARMERS,
  LABEL_COLLECTORS,
  LABEL_MILK_COLLECTION,
  LABEL_PAYMENTS,
  LABEL_REPORTS,
  LABEL_SETTINGS,
  LABEL_LOGOUT,
  LABEL_ADMIN_PANEL,
} from '../constants/Comman';

const kendokaAvatar =
  'https://demos.telerik.com/kendo-react-ui/assets/suite/kendoka-react.png';

const permissionViewCheck = (location: string) => {
  return location !== '/' ? true : false;
};

function AppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const permissionView = permissionViewCheck(location.pathname);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userDetails');
    window.location.reload();
  };

  const navigationItems = [
    { label: LABEL_DASHBOARD, route: ROUTE_DASHBOARD },
    { label: LABEL_FARMERS, route: ROUTE_FARMERS },
    { label: LABEL_COLLECTORS, route: ROUTE_COLLECTORS },
    { label: LABEL_MILK_COLLECTION, route: ROUTE_MILK_COLLECTION },
    { label: LABEL_PAYMENTS, route: ROUTE_PAYMENTS },
    { label: LABEL_REPORTS, route: ROUTE_REPORTS },
    { label: LABEL_SETTINGS, route: ROUTE_SETTINGS },
  ];

  return (
    <Navbar>
      <AppBarSpacer style={{ width: 4 }} />
      <AppBarSection>
        <div
          onClick={() => navigate(ROUTE_DASHBOARD)}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#1976d2',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            M
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
            {LABEL_ADMIN_PANEL}
          </span>
        </div>
      </AppBarSection>
      <AppBarSpacer />
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginRight: '25px',
        }}
      >
        {permissionView && (
          <>
            <AppBarSection>
              {navigationItems.map((item) => (
                <Button
                  key={item.route}
                  type='button'
                  size='medium'
                  fillMode='flat'
                  onClick={() => navigate(item.route)}
                  style={{
                    backgroundColor:
                      location.pathname === item.route
                        ? '#1976d2'
                        : 'transparent',
                    color:
                      location.pathname === item.route ? 'white' : '#1976d2',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </AppBarSection>
            <AppBarSection>
              <Avatar type='image'>
                <img
                  onClick={handleLogout}
                  style={{ cursor: 'pointer' }}
                  src={kendokaAvatar}
                  alt='Admin Avatar'
                />
              </Avatar>
            </AppBarSection>
          </>
        )}
      </div>
    </Navbar>
  );
}

export { AppBar };
