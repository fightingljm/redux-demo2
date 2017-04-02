import React from 'react';
import { connect } from 'react-redux';
import { change } from './actions';

class App extends React.Component {
  handleClick(num){
    this.props.dispatch(change(num))
  }
  render () {
    console.log(this.props); // {num:0}
    return(
      <div>
        数值：{this.props.num}<br/>
        <button onClick={this.handleClick.bind(this,1)}>+1</button>
        <button onClick={this.handleClick.bind(this,-1)}>-1</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  // console.log(state);
  return {num:state}
}

export default connect(mapStateToProps)(App);
