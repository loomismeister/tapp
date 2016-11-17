import React from 'react';
import StallStore from '../stores/StallStore';
import StallActions from '../actions/StallActions';
import AltContainer from 'alt/AltContainer';

class AllStalls extends React.Component {
  render() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }

    if(StallStore.isLoading()) {
      return (
        <div>
          <img src="img/ajax-loader.gif" />
        </div>
      );
    }

    return (
      <div>
        {this.props.stalls.map((stall, i) => {

            if(stall.color === "red"){
              return (
                <button className="ui red button">
                    {stall.name}
                </button>
              );
            } else {
              return (
                <button className="ui green button">
                    {stall.name}
                </button>
              );
            }
        })}
      </div>
    );
  }
}

class Stalls extends React.Component {

  componentDidMount() {
    StallStore.fetchStalls();
  }

  render() {
    return (
      <div className='ui segment'>
        <AltContainer store={StallStore}>
          <AllStalls />
        </AltContainer>
      </div>
    );
  }
}

export default Stalls;
