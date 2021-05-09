import { Plugins } from '@capacitor/core';
import { LANGUAGES } from '../models';

const { Device, Storage } = Plugins;

const STORAGE_KEY = 'lang';
const LANGUAGE_VALUES: any = {
  de: {
    article: {
      more: 'Mehr...',
      photo: 'Foto'
    },
    issues: {
      all: 'Alle Ausgaben',
      previous: 'Vorherige Ausgabe',
      favorites: 'Favoriten',
      noMoreIssue: 'Keine weiteren Ausgaben vorhanden.'
    },
    lang: {
      switch: 'Englische Version'
    },
    links: {
      instagram: 'https://www.instagram.com/squirrelnews.de/',
      twitter: 'https://twitter.com/squirrelnews_de',
      facebook: 'https://www.facebook.com/squirrelnews.de'
    },
    privacyPolicy: {
      name: 'Datenschutz',
      url: 'https://squirrel-news.net/de/datenschutz/',
      path: 'privacy-de'
    },
    imprint: {
      name: 'Impressum',
      url: 'https://squirrel-news.net/de/impressum/',
      path: 'imprint-de'
    },
    contact: {
      name: 'Kontakt',
      url: 'https://squirrel-news.net/de/kontakt/'
    },
    support: {
      name: 'Unterstützen',
      url: 'https://squirrel-news.net/de/unterstuetzen/'
    },
    about: {
      name: 'Über uns',
      url: 'https://squirrel-news.net/de/ueber-uns/',
      path: 'about-de'
    },
    share: {
      title: 'News teilen!',
      text: 'Schau dir das mal an...',
      noSharingOptionAvailable: 'Keine Funktion zum Teilen verfügbar'
    },
    app: {
      loading: 'Lade...'
    },
    donate: {
      ownCase: 'in eigener Sache',
      title: 'Würdest Du uns unterstützen?',
      text: 'Squirrel News finanziert sich ausschließlich aus kleinen und mittleren Spenden. Dafür brauchen wir auch dich! Bitte unterstütze uns mit einem monatlichen oder jährlichen Betrag in Höhe deiner Wahl!'
    }
  },

  en: {
    article: {
      more: 'More...',
      photo: 'Photo'
    },
    issues: {
      all: 'All Issues',
      previous: 'Previous Issue',
      favorites: 'Favourites',
      noMoreIssue: 'No more issues available.'
    },
    lang: {
      switch: 'German Version'
    },
    links: {
      instagram: 'https://www.instagram.com/squirrelnews/',
      twitter: 'https://twitter.com/squirrelnews_en',
      facebook: 'https://www.facebook.com/squirrelnews'
    },
    privacyPolicy: {
      name: 'Privacy Policy',
      url: 'https://squirrel-news.net/privacy-policy/',
      path: 'privacy-en'
    },
    imprint: {
      name: 'Imprint',
      url: 'https://squirrel-news.net/imprint/',
      path: 'imprint-en'
    },
    contact: {
      name: 'Contact',
      url: 'https://squirrel-news.net/contact/'
    },
    support: {
      name: 'Support Us',
      url: 'https://squirrel-news.net/support-us/'
    },
    about: {
      name: 'About Us',
      url: 'https://squirrel-news.net/about-us/',
      path: 'about-en'
    },
    share: {
      title: 'share the news!',
      text: 'Have a look...',
      noSharingOptionAvailable: 'No functionality to share available'
    },
    app: {
      loading: 'Loading...'
    },
    donate: {
      ownCase: 'in own case',
      title: 'Would you support us?',
      text: 'Squirrel News finanziert sich ausschließlich aus kleinen und mittleren Spenden. Dafür brauchen wir auch dich! Bitte unterstütze uns mit einem monatlichen oder jährlichen Betrag in Höhe deiner Wahl!'
    }
  }
};



export async function getDeviceLang(): Promise<LANGUAGES> {
  const deviceLang = await Device.getLanguageCode();
  
  if (deviceLang.value === 'de-de') {
    return LANGUAGES.DE;
  } else {
    return LANGUAGES.EN;
  } 
}

export async function getStoredLang(): Promise<LANGUAGES> {
  const storedLang = await Storage.get({ key: STORAGE_KEY});
  if (!storedLang.value) {
    return await getDeviceLang();
  }
  return storedLang.value as LANGUAGES;
}

export async function storeLang(code: LANGUAGES): Promise<void> {
  return Storage.set({ key: STORAGE_KEY, value: code})
}

export function valFor(lang: string, key: string): string {
  const split = key.split('.');
  if (split.length == 1) {
    return LANGUAGE_VALUES[lang][key];
  }
  else {
    return LANGUAGE_VALUES[lang][split[0]][split[1]];
  }
}