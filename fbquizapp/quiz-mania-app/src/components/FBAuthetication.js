import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom'

const imgdata =  'ok'

class FbAuth extends Component {


  state = {
    redirect: false
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/result/'/>
    }
  }
  
  responseFacebook = (response) => {
    var tempRes = response;
    console.log(tempRes.picture.data.url);
    this.setState({
      redirect: true,
      imgdata: tempRes.picture.data.url
    })
    console.log('Clicked');
    document.getElementById('image').src = tempRes.picture.data.url;
    }


  render() {
    return (
        <div className="container">
        {this.renderRedirect()}
          <FacebookLogin appId="377304522681577" fields="name,email,picture" scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook} size="small"/>
        </div>
    );
  }
}

export default FbAuth;