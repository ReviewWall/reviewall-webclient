import React, {Component} from 'react';
import axios from 'axios'

class Login extends Component{
    //bu örneği dene
    // anasayfa gelince login e tıkla
    // fakat gerçek server localhost adresi yazman lazım yoksa error connection hatası alırsın

    state = {termAd:'' , termSoyad:'' , values:['']};

    //POST*********************************************************
    onFormSubmit = event => {
        event.preventDefault();

        const adVeSoyad = {
            ad: this.state.termAd,
            soyad:this.state.termSoyad
        }

        axios.post('http://localhost:8080', adVeSoyad ).then((response) => {
            console.log(response.data);
        });
    }


    //GET*************************************************************
    componentDidMount() {//bu fonksiyon sayfa yüklenmeden çalışır yani sayfa yüklenmeden verilerimi values arrayine atacağım
        axios.get("http://localhost:8080").then((result) => {
            console.log(result.data)
            let newValues = {values: result.data};
            this.setState(newValues);
            //veya direkt
            // this.setState({values : result.data}); yapabilirsin bu çalışmazsa üsttekini yap
        });
    //values un değerlerini çağırırsan değerler gelir ben çağırmadım render ın içinde

    }


    //Once kullanıcıdan ad ve soyad aldım formda
    render() {
       return (
           <div id="mainDiv">
               <h1 id="header"> AD VE SOYAD ICIN POST VE GET ISTEGI </h1>
               <br/>
               <form id="formId" onSubmit={event=>this.onFormSubmit(event)}>
                   <div>
                       <ul>
                           <li><label>AD</label></li>
                           <li>
                               <input
                                   placeholder='Adınızı giriniz..'
                                   type="text"
                                   value={this.state.termAd}
                                   onChange={e => this.setState({termAd: e.target.value})}/>
                           </li>
                       </ul>

                       <ul>
                           <li><label>SOYAD</label></li>
                           <li>
                               <input
                                   placeholder='Soyadınızı giriniz..'
                                   type="text"
                                   value={this.state.termSoyad}
                                   onChange={e => this.setState({termSoyad: e.target.value})}/>
                           </li>
                       </ul>

                       <button id='kaydetButton'>
                           kaydet
                       </button>
                   </div>
               </form>
           </div>
       );
    }

}

export default Login;