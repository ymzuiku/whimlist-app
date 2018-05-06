import defaultLocales from '../resources/locales';

let language = 'en';
// let language = 'zh-Hans';

const get = (object, path) => {
  if (typeof object === 'object' && path) {
    return path
      .split(/[\.\["'\]]/) // eslint-disable-line
      .filter(Boolean)
      .reduce((acc, current) => acc && acc[current], object);
  }
  return object;
};

/**
 * Use Language
 *
 * @param {*} language - Language
 */
const useLanguage = (l) => {
  language = l;
};

/**
 * t
 *
 * @param {*} key - key
 * @param {*} data - data
 */
const t = (key, args = {}) => {
  let value = get(defaultLocales, `${language}.${key}`);

  if (!value) {
    value = get(defaultLocales, `en.${key}`);
  }

  if (!value) {
    value = `Missing ${language}.${key}`;
  }

  if (args) {
    const keys = Object.keys(args);
    keys.forEach((argKey) => {
      const argValue = args[argKey];
      value = value.replace(`__${argKey}__`, argValue);
    });
  }

  return value;
};

const I18n = {
  useLanguage,
  t,
};

export {
  I18n as default,
  useLanguage,
  t,
};
