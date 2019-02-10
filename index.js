import localStorage from "./lib/LocalStorage";
export default class Storage {
  constructor() {
    if (window.localStorage) {
      return localStorage;
    } else {
      throw "Local Storage not supported!";
    }
  }
}
