import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

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
    const body = await response.text();
    this.setState({ responseToPost: body });
    alert("votre message a été transféré");
    
  };

  render() {
    
    return (
     
      <form className="custom-card form" onSubmit={this.handleSubmit}>
        <h2 className="h2">N'hésitez pas à nous contacter</h2>
        <div className="fields ">
          <input type="text" ref="nom" placeholder="Nom" className="fields"/>
        </div>
       
        <div className="fields">
          <input type="email" ref="email" placeholder="Email" className="fields" />
        </div>
        <div className="fields">
          <input type="text" ref="subject" placeholder="Sujet" className="fields" />
        </div>

        <div className="fields">
          <textarea  ref="message" placeholder="Message" className="fields"/>  
        </div>
        
        <div className="btn" >
          <input type="submit" value="Contact" className="button" />
        </div>
      </form>

    
    );
  }
}

export default App;