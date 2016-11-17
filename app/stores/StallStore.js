var alt = require('../alt');
var StallActions = require('../actions/StallActions');
var StallSource = require('../sources/StallSource');

class StallStore {
  constructor() {
    this.stalls = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateStalls: StallActions.UPDATE_STALLS,
      handleFetchStalls: StallActions.FETCH_STALLS,
      handleStallsFailed: StallActions.STALLS_FAILED
    });

    this.exportPublicMethods({
      getStall: this.getStall
    });

    this.exportAsync(StallSource);
  }

  handleUpdateStalls(stalls) {
    this.stalls = stalls;
    this.errorMessage = null;
  }

  handleFetchStalls() {
    this.stalls = [];
  }

  handleStallsFailed() {
    this.errorMessage = errorMessage;
  }

  getStall(id) {
    var { stalls } = this.getState();
    for (var i = 0; i < stalls.length; i += 1) {
      if (stalls[i].id === id) {
        return stalls[i];
      }
    }

    return null;
  }
}

module.exports = alt.createStore(StallStore, 'StallStore');
