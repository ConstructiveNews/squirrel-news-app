import React, { FC } from 'react';
import { getIssue } from './api/firebase';
import { BaseLayout } from './layouts/BaseLayout';
import { LANGUAGES } from './models';
import { addFav, removeFav} from './api/favorites';

import { Plugins } from '@capacitor/core';

const { Device } = Plugins;

export const App: FC<{}> = () => {

  // const [articles, setArticles] =  useState <any>();
  
  // getArticle("HVG0cAArZe6bMj4QJPag", "bvMDfEYH7xZ3iRv5YsXr", (result) => {
  //   console.log('fav', result);
  // });
  
  // getFavorites().then( (data) => console.log('favs', data))
  
  console.log('lang', Device.getLanguageCode())
  

  return (
    <div>
      {/* <FAB></FAB> */}
      <BaseLayout />
    </div>  
  );
}

export default App;
