

module.exports = {
  get headers() {
    return this.req.headers;
  },
  set headers(val) {
    this.req.headers = val;
  }
};