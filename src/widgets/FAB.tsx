import React, { FC } from 'react';

import { ReactComponent as Heart } from '../assets/icon/heart.svg';
import { ReactComponent as Share } from '../assets/icon/paper-plane.svg';

export const FAB: FC<{ icon: 'heart' | 'share', onClick: (event: any) => void }> = ({ icon, onClick }) => {
  return (
    <button 
      onClick={ onClick }
      className="inset-x-0 bottom-0 p-1 w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
      { icon === 'heart' ? <Heart /> : <Share /> }
    </button>
  );
}