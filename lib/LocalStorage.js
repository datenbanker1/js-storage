export default {
  set(key, value) {
    window.localStorage.setItem(key, value);
  },
  get(key) {
    return window.localStorage.getItem(key);
  },
  delete(key) {
    return window.localStorage.removeItem(key);
  }
};
