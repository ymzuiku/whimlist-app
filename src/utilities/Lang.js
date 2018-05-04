import locales from '../resources/locales';

class Lang {
  constructor() {
    this.language = 'zh-Hans';
  }

  /**
   * Use Language
   *
   * @param {*} language - Language
   */
  useLanguage(language) {
    this.language = language;
  }

  get(key) {
    return `${locales[key]}`;
    // return _.get(locales, `${this.lang}.${key}`);
  }
}

export default new Lang();
