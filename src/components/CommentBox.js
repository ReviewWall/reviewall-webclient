import React,{Component} from 'react';
import Select from 'react-select';
import axios from 'axios';

const options = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'school', label: 'School' },
    { value: 'food', label: 'Food' },
    { value: 'clothes', label: 'Clothes' },
    { value: 'immovables', label: 'Immovables' },
];

const firmalar = [
    { value: 'Lenovo', label: 'Lenovo' },
    { value: 'Dell', label: 'Dell' },
    { value: 'Asus', label: 'Asus' },
    { value: 'HP', label: 'HP' },
    { value: 'Samsung', label: 'Samsung' },
];

class Commentbox extends Component {

    state = {termReview: '' , termProductName: '', termCompanyName: '', termCategory: ''};

    handleClick = event => {
        event.preventDefault();
        
        const reviewData = {
            yorum: this.state.termReview,
            urun:this.state.termProductName,
            kategori:this.state.termCategory
        };

        axios.post('http://localhost:8080/yorumlar/bilge/dell', reviewData ).then((response) => {
            console.log(response.data);
        });
    };
    

    render() {
        return (
            <div id="mainHomeDiv" >
                <label className="whiteText">New Review</label>
                <textarea 
                    type="textArea" 
                    className="form-control" 
                    id="postText" 
                    placeholder="..."
                    value={this.state.termReview}
                    onChange={event => this.setState({termReview: event.target.value})}
                    ></textarea>
                <br/>
                <div>
                    <label>Product Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="..."
                        value={this.state.termProductName}
                        onChange={event => this.setState({termProductName: event.target.value})}
                        />
                    <br/>
                    <label>Company Name</label>
                    <Select
                        options={firmalar}
                        type="text"
                        placeholder='Choose Company...'
                        onChange={event => this.setState({termCompanyName: event.value})}
                    />
                    <br/>
                    <label>Category</label>
                    <Select
                        options={options}
                        type="text"
                        placeholder='Choose Category...'
                        onChange={event => this.setState({termCategory: event.value})}
                    />
                </div>
                <br/>
                <button 
                    className="btn btn-warning form-control" 
                    id="postButton"
                    onClickCapture={event => this.handleClick(event)}
                    >Post Review</button>
            </div>
        );
    }
}

export default Commentbox;