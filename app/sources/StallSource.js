var StallActions = require('../actions/StallActions');

var mockData = [
  { id: 0, name: 'Stall 1', color: 'red'},
  { id: 1, name: 'Stall 2', color: 'green'}
];

var StallSource = {
  fetchStalls() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          resolve(mockData);
          // setTimeout(function () {
          //
          //   // change this to `false` to see the error action being handled.
          //   if (true) {
          //     // resolve with some mock data
          //     resolve(mockData);
          //   } else {
          //     reject('Things have broken');
          //   }
          // }, 250);
        });
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: StallActions.updateStalls,
      error: StallActions.locationsFailed,
      loading: StallActions.fetchStalls
    }
  }
};

module.exports = StallSource;
