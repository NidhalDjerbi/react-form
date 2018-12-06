import React,{Component} from "react";
import { MDBContainer, MDBInput , MDBIcon , MDBBtn,Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import "./index.css";

class App extends Component {

  state = {
    nom: '',
    email : '',
    subject :'',
    message :'',
    modal: false
  }
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
    const response = await fetch('api/contact');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }


  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    const response = await fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: this.state.nom,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    this.setState({
      modal: !this.state.modal
    });
  };
   
  

  render() {
    
    return (
   

     <MDBContainer>
          <form onSubmit={this.handleSubmit} >
            <p className="h5 text-center mb-4">N'hésitez pas à nous contacter</p>
            <div className="grey-text">
              <MDBInput
                label="Nom"
                icon="user"
                group
                type="text"
                validate
                required
                error="wrong"
                success="right"
                ref="nom"
                onChange={e => this.setState({ nom: e.target.value })}
              />
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                required
                error="wrong"
                success="right"
                ref="email"

                onChange={e => this.setState({ email: e.target.value })}
              />
              <MDBInput
                label="Sujet"
                icon="tag"
                group
                type="text"
                validate
                required
                error="wrong"
                success="right"
                ref="subject"
                onChange={e => this.setState({ subject: e.target.value })}
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Message"
                icon="pencil"
                required
                ref="message"
                onChange={e => this.setState({ message: e.target.value })}
              />
            </div>
            <div className="text-center">
              <MDBBtn type ="submit" outline color="primary" >
                Contact <MDBIcon icon="paper-plane-o" className="ml-1" />
              </MDBBtn>
            </div>
            
          </form>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="bg" toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <p>Message reçu!</p> 
            <p> Nous revenons vers vous dans les plus brefs délais </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
    </MDBContainer>
   

    );
  }
}

export default App;
