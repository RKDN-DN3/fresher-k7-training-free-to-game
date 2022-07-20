import en from './en.json';
import vi from './vi.json';

export const translate = (key: string, language: string): string => {
  let langData: { [key: string]: string } = {};

  if (language === 'EN') {
    langData = en;
  } else if (language === 'VI') {
    langData = vi;
  }

  return langData[key];
};
