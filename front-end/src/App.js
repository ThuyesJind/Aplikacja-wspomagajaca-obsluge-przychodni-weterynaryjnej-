import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import KlientForm from './KlientForm';
import KlientLoginForm from './KlientLoginForm';
import WeterynarzForm from './WeterynarzForm';
import WeterynarzLoginForm from './WeterynarzLoginForm';
import WizytaForm from './WizytaForm';
import LekForm from './LekForm';
import Kalendarz from './Kalendarz';
import Raport from './Raport';
import Historia from './Historia';

export default class App extends Component {
  state = {
    czyZalogowany: null,
    czyWeterynarz: null
  }
  componentDidMount() {
    
    if (localStorage.getItem('daneUzytkownika')) {
        this.setState({
            czyZalogowany: true
        })
        let czyWeterynarz = localStorage.getItem('daneUzytkownika');
        let czyWeterynarzParsed = JSON.parse(czyWeterynarz);
    if (czyWeterynarzParsed.telefon)
    {
      this.setState({czyWeterynarz: false})
    }
    else 
    {
      this.setState({czyWeterynarz: true})
    }
    }
    else {
        this.setState({
            czyZalogowany: false
        })
    }
}
  handleCzyZalogowanyChange = (czyZalogowanyNew) => {
    console.log(czyZalogowanyNew);

    this.setState({
      czyZalogowany: czyZalogowanyNew
    })
  }
  
  render() {
    // const KlientLoginFormProps = {
    //   czyZalogowany: this.state.czyZalogowany,
    //   onCzyZalogowanyChange: this.handleCzyZalogowanyChange
    // }
    
    return (
      <div className="App">
        <Router>
        <Header czyZalogowany={this.state.czyZalogowany} onCzyZalogowanyChange={this.handleCzyZalogowanyChange}  czyWeterynarz={this.state.czyWeterynarz} />
            <div className="container-fluid" id="main-container" >

              <Route exact path ="/" component={Home} />
              <Route exact path ="/weterynarz" component={WeterynarzForm} />
              <Route exact path ="/klient" component={KlientForm} />
              <Route exact path ="/historia" component={Historia} />
              <Route exact path ="/klientlogin" render={
                (props) => <KlientLoginForm 
                  {...props}
                  onCzyZalogowanyChange={this.handleCzyZalogowanyChange}
                />
              }/>
              <Route exact path ="/weterynarzlogin" render={
                (props) => <WeterynarzLoginForm 
                  {...props}
                  onCzyZalogowanyChange={this.handleCzyZalogowanyChange}
                />
              }/> 
              <Route exact path ="/wizyta" component={WizytaForm} />
              <Route exact path ="/lek" component={LekForm} />
              <Route exact path ="/kalendarz" component={Kalendarz} />
              <Route exact path ="/raport" component={Raport} />
            </div>
          </Router>   
      </div>
    );
  }
}