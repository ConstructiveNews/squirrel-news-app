import React, { FC, useEffect, useState } from 'react';
import { getIssue } from './api/firebase';
import { BaseLayout } from './layouts/BaseLayout';
import { LANGUAGES } from './models';
import { addFav, removeFav} from './api/favorites';
import { LoadingScreen } from './components/SplashScreen';

export const App: FC<{}> = () => {
  
  const [loading, setLoading] = useState(true)
  
  useEffect( () => {

    setTimeout(() => setLoading(false), 5000);

  })

  return (
    <div>
      { loading ? <LoadingScreen />
                : null }
      <BaseLayout /> 
    </div>  
  );
}

export default App;
