import React, { FC } from 'react';

export const LoadingScreen: FC = () => {

  return (
    <div className="splash-screen">
    Wait a moment while we load your app.
    <div className="loading-dot">.</div>
  </div>
  );
}

