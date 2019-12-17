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
    handleClick = event => {
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


            <div className="container">
                        <div className="card bg-light">
                            <article className="card-body mx-auto" >
                                <h4 className="card-title mt-3 text-center">Create Account</h4>
                                <p className="text-center">Get started with your free account</p>

                                <form>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Ad" type="text" onChange={e => this.setState({termAd: e.target.value})}/>
                                    </div>

                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Soyad" type="text" onChange={e => this.setState({termSoyad: e.target.value})}/>
                                    </div>

                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Kullanıcı Adı" type="text" onChange={e => this.setState({termKullaniciAdi: e.target.value})}/>
                                    </div>

                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Email" onChange={e => this.setState({termEmail: e.target.value})}
                                               type="email"/>
                                    </div>

                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                                        </div>

                                        <input name="" className="form-control" placeholder="Telefon Numarası" type="text" onChange={e => this.setState({termTelNo: e.target.value})}/>
                                    </div>

                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input className="form-control" placeholder="Create password" type="password"/>
                                    </div>

                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input className="form-control" placeholder="Repeat password" type="password" onChange={e => this.setState({termParola: e.target.value})}/>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block" onClick={this.handleClick}> Create Account
                                        </button>
                                    </div>

                                    <p className="text-center">Have an account? <a href="/login">Sign In</a></p>
                                </form>
                            </article>
                        </div>
            </div>
    );
    }

}

export default Register;