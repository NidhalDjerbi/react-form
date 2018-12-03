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
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom:
          <input type="text" ref="nom"  />
        </label>
        <label>
          Email:
          <input type="email" ref="email"  />
        </label>
        <label>
          Sujet:
          <input type="text" ref="subject"  />
        </label>
        <label>
          Message:
          <textarea  ref="message" />  
        </label>
        <input type="submit" value="Contact" />
      </form>
    );
  }
}
export default App;