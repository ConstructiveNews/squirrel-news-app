import { Plugins } from '@capacitor/core';
import { LANGUAGES } from '../models';

const { Device } = Plugins;

export async function getDeviceLang(): Promise<LANGUAGES> {
  const deviceLang = await Device.getLanguageCode();
  
  if (deviceLang.value === 'de-de') {
    return LANGUAGES.DE;
  } else {
    return LANGUAGES.EN;
  } 
}
