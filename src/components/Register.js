import React, {Component} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";


class Register extends Component{

    state = {termAd:'' , termSoyad:'' , termKullaniciAdi:'' , termParola:'' , termEmail:'' , termTelNo:'' , values:['']};
    styles = {
        text:{
            fontSize:20,
        },
        button:{
            fontSize:22,
            marginLeft:40,
            marginBottom:30
        },
        header:{
            color:'black',
            marginLeft:45
        }


    };

    //POST*************************************************************************************************
    onFormSubmit = event => {
        event.preventDefault();

        const registerData = {
            isim: this.state.termAd,
            soyisim:this.state.termSoyad,
            kullaniciAdi:this.state.termKullaniciAdi,
            parola:this.state.termParola,
            email:this.state.termEmail,
            telefonNumarasi:this.state.termTelNo
        }

        axios.post('http://localhost:8080/kullanicilar', registerData ).then((response) => {
            console.log(response.data);
        });
    }


    render() {
        return (
            <div className="Register">
                <form className="register-form" onSubmit={event => this.onFormSubmit(event)}>
                    <div>
                        <ul><input type="text" placeholder="Ad"
                                   onChange={e => this.setState({termAd: e.target.value})}/></ul>
                        <ul><input type="text" placeholder="Soyad"
                                   onChange={e => this.setState({termSoyad: e.target.value})}/></ul>
                        <ul><input type="text" placeholder="KullanıcıAdı"
                                   onChange={e => this.setState({termKullaniciAdi: e.target.value})}/></ul>
                        <ul><input type="password" placeholder="Parola"
                                   onChange={e => this.setState({termParola: e.target.value})}/></ul>
                        <ul><input type="email" placeholder="Email"
                                   onChange={e => this.setState({termEmail: e.target.value})}/></ul>
                        <ul><input type="text" placeholder="TelNo"
                                   onChange={e => this.setState({termTelNo: e.target.value})}/></ul>
                        <ul>
                            <button>Register</button>
                        </ul>
                        <ul>
                            <button><Link to={{pathname: '/login'}}>Login Page</Link></button>
                        </ul>
                    </div>
                </form>
            </div>
        );
    }

}

export default Register;