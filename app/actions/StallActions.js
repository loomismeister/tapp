var alt = require('../alt');

class StallsActions {
  updateStalls(stalls) {
    this.dispatch(stalls);
  }

  fetchStalls() {
    this.dispatch();
  }

  stallsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

module.exports = alt.createActions(StallsActions);
