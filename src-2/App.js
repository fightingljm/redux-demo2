import React from 'react';
import { connect } from 'react-redux';
import fetch from './actions/action';

class App extends React.Component{
  componentDidMount(){
    let dispatch = this.props.dispatch;
    dispatch(fetch('newming'))
  }
  render(){
    // console.log(this.props);
    // console.log(Object.keys(this.props.state).length);
    return(
      <div>
        app
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    state
  }
}
export default connect(mapStateToProps)(App);
