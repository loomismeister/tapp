var React = require('react');
import Navbar from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
