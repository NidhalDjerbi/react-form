import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput,MDBIcon, MDBBtn, Card, col} from 'mdbreact';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Routes from "./Routes";

class App extends Component {
componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/contact');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };


  handleSubmit = async e => {
    e.preventDefault();
    let nom = ReactDOM.findDOMNode(this.refs.nom).value;
    let email = ReactDOM.findDOMNode(this.refs.email).value;
    let subject = ReactDOM.findDOMNode(this.refs.subject).value;
    let message = ReactDOM.findDOMNode(this.refs.message).value;
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nom,
        email: email,
        subject: subject,
        message: message
      }),
    });
    console.log(body);
    const body = await response.text();
    this.setState({ responseToPost: body });
    alert("votre message a été transféré");
    
  };

  render() {
    
    return (
   
     <Card>
     <MDBContainer  >
      <MDBRow >
        <MDBCol md="6" >
          <form onSubmit={this.handleSubmit} >
            <p className="h5 text-center mb-4">N'hésitez pas à nous contacter</p>
            <div className="grey-text">
              <MDBInput
                label="Nom"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                ref="nom"
              />
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                ref="email"
              />
              <MDBInput
                label="Sujet"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                ref="subject"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Message"
                icon="pencil"
                ref="message"
              />
            </div>
            <div className="text-center">
              <MDBBtn type ="submit" outline color="secondary">
                Contact <MDBIcon icon="paper-plane-o" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Card>

    );
  }
}

export default App;
