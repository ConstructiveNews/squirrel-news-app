import React, { FC, useEffect, useState } from 'react';
import { BaseLayout } from './layouts/BaseLayout';
import { LANGUAGES } from './models';
import { SplashScreen } from './components/SplashScreen';
import { getStoredLang } from './api/language';
import { AppContext } from './contexts';

export const App: FC<{}> = () => {
  
  const [loading, setLoading] = useState(true)
  const [lang, setLang] = useState(LANGUAGES.EN);

  useEffect( () => {
      const fetchLang = async () => { 
        setLang(await getStoredLang());
        
      };
      fetchLang();
  })

  return (
    <AppContext.Provider value={ { language: lang, setLoading: setLoading }}>
    <div>
      { loading ? <SplashScreen />
                : null }
      <BaseLayout /> 
    </div>  
    </AppContext.Provider>
  );
}

export default App;
