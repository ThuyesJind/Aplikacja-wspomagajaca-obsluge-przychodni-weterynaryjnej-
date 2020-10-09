import React, { Component } from 'react';
import '../node_modules/@fullcalendar/core/main.css';
import axios from 'axios';
import moment from 'moment';

export default class Historia extends Component {
    state = {
        idZalogowanego: "",
        wizytyData: [],
        Weterynarz: "",
        Opis: "",
        wizyty: [],
        renderedWizyty: [],
    }
    async componentDidMount() {

        let daneZalogowanegoKlienta = JSON.parse(localStorage.getItem('daneUzytkownika'));
        if (daneZalogowanegoKlienta) {
            console.log(daneZalogowanegoKlienta);
            this.setState({
                idZalogowanego: daneZalogowanegoKlienta._id
            });
           
        }
        axios.get("http://localhost:3000/api/wszystkiewizyty")
            .then((res) => {
                this.setState({
                    wizytyData: res.data
                })
                //console.log(this.state.wizytyData);
                var MyPromise = new Promise((resolve, reject) => {
                    this.state.wizytyData.forEach(async (wizyta, index, array) => {
                        if(wizyta.idKlienta == daneZalogowanegoKlienta._id)
                        {
                        let data1 = await axios.get("http://localhost:3000/api/weterynarz/" + wizyta.idWeterynarza);
                        console.log(data1);
                        let weterynarz = data1.data[0].imie + " " + data1.data[0].nazwisko;
    

                        this.state.wizyty.push(

                             weterynarz + " " + moment(parseInt(wizyta.godzina)).format('MM/DD/YYYY, hh:mm:ss a') + " " + wizyta.opis
                        )
                        
                        console.log(this.state.wizyty);
                        if (index === array.length - 1) resolve();
                        }
                    });
                });

                MyPromise.then(() => {
                    //console.log(this.state.wizyty);
                    const wizyty = this.state.wizyty.map(wizyta => (
                        <li className="list-group-item list-group-item-primary">
                            {wizyta}
                        </li>
                    ))
                    console.log(wizyty);

                    this.setState({
                        renderedWizyty: wizyty
                    })
                });
            })
    }

    render() {
        const wizyty = this.state.wizyty.map(wizyta => (
            <li className="list-group-item list-group-item-primary">
                {wizyta}
            </li>
        ))
        console.log(wizyty);

        return (
            <React.Fragment>
                <ul className="list-group">
                    {this.state.renderedWizyty}
                </ul>
            </React.Fragment>
        );
    }
}