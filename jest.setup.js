// See why: https://github.com/zeit/next.js/issues/10328#issuecomment-582239682
Object.defineProperty(window, 'location', {
  value: {
    pathname: '',
  },
  writable: true,
});
