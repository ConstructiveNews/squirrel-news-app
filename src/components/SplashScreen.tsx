import { ReactComponent as SqIconLogo } from '../assets/icon/sn-logo.svg'; 
import React, { FC } from 'react';

export const SplashScreen: FC = () => {

  return (
    <div className="flex splash-screen bg-white w-screen h-screen">
      <div className="inline-flex m-auto">
        <SqIconLogo className="_icon_logo"/>
      </div>
  </div>
  );
}

