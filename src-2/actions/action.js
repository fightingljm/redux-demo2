import axios from 'axios';

export default function fetch(name) {
  return (dispatch,getState) => {
    // console.log(getState());
    return axios.get(`https://api.github.com/users/${name}`)
            .then(res => dispatch({type:'RECEIVE_INFO',info:res.data}) )

  }
}
