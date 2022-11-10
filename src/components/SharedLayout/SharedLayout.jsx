import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppMenu from 'components/AppMenu/AppMenu';
import {Loader} from 'components/Loader/Loader';


export default function SharedLayout() {
  return (
    <>
      <AppMenu />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
