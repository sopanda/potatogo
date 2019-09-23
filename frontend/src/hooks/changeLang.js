import { useTranslation } from 'react-i18next';

export const useNewLanguage = lng => {
  const { i18n } = useTranslation();
  const setNewLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return setNewLanguage;
};
