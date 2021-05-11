import React, { FC, useEffect, useState } from 'react';
import { getIssue } from './api/firebase';
import { BaseLayout } from './layouts/BaseLayout';
import { LANGUAGES } from './models';
import { addFav, removeFav} from './api/favorites';
import { LoadingScreen } from './components/SplashScreen';
import { getStoredLang, storeLang } from './api/language';
import { LanguageCtx } from './lang-context';

export const App: FC<{}> = () => {
  
  const [loading, setLoading] = useState(false)
  const [lang, setLang] = useState(LANGUAGES.EN);

  useEffect( () => {
      const fetchLang = async () => { 
        setLang(await getStoredLang());
      };
      fetchLang();
    // setTimeout(() => setLoading(false), 5000);
  })

  return (
    <LanguageCtx.Provider value={ { language: lang }}>

    <div>
      { loading ? <LoadingScreen />
                : null }
      <BaseLayout /> 
    </div>  
    </LanguageCtx.Provider>
  );
}

export default App;
