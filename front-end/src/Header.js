import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class Header extends Component {
    wylogujUzytkownika = () => {
        console.log('powinno wylogowac')
        localStorage.clear();
        this.props.onCzyZalogowanyChange(false);
        window.location.reload();
        window.location.href = "/";
        
    }
    testuje = () => {
        console.log('powinno zalogowac')
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Wet</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                           
                            {this.props.czyZalogowany && this.props.czyWeterynarz ?
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" to="/lek">Dodanie Leku</Link>
                            </li>
                            <li className="nav-item">
                                    <Link className="nav-link" to="/wizyta">Rejestracja Wizyty</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/raport">Raport z Wizyty</Link>
                                </li>
                                <li className="nav-item">
                                        <Link className="nav-link" to="/kalendarz">Kalendarz Wizyt</Link>
                                     </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/weterynarz">Rejestracja Weterynarz</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={this.wylogujUzytkownika} >Wyloguj</Link>
                                </li>
                                </ul>
                                :
                                null
                            }
                             {this.props.czyZalogowany && !this.props.czyWeterynarz ?
                             <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/wizyta">Rejestracja Wizyty</Link>
                                </li>
                             <li className="nav-item">
                                     <Link className="nav-link" to="/kalendarz">Kalendarz Wizyt</Link>
                                  </li>
                                  <li className="nav-item">
                                     <Link className="nav-link" to="/historia">Historia Wizyt</Link>
                                  </li>
                             <li className="nav-item">
                                 <Link className="nav-link" onClick={this.wylogujUzytkownika} >Wyloguj</Link>
                             </li>
                             </ul>
                             :
                             null
                            }
                            {!this.props.czyZalogowany && !this.props.czyWeterynarz ?
                                 <ul className="navbar-nav">
                                    
                                     <li className="nav-item">
                                        <Link className="nav-link" to="/klient">Rejestracja Klienta</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" onClick={this.testuje} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Zaloguj
                                        </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link className="dropdown-item" to="/klientlogin">Logowanie Klient</Link>
                                        <Link className="dropdown-item" to="/weterynarzlogin">Logowanie Weterynarz</Link>
                                </div>
                            </li>
                                </ul>
                            :
                            null
                             }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

Header.propTypes = {
    czyZalogowany: PropTypes.bool,
    onCzyZalogowanyChange: PropTypes.func,
    czyWeterynarz: PropTypes.bool
}