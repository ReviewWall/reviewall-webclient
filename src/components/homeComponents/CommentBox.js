import React,{Component} from 'react';
import Select from 'react-select';

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
    render() {
        return (
            <div id="mainHomeDiv">
                <label className="whiteText">New Review</label>
                <textarea type="textArea" className="form-control" id="postText" placeholder="..."></textarea>
                <br/>
                <div>
                    <label>Product Name</label>
                    <input type="text" className="form-control" placeholder="..."/>
                    <br/>
                    <label>Company Name</label>
                    <Select
                        options={firmalar}
                        placeholder='Choose Company...'
                    />
                    <br/>
                    <label>Category</label>
                    <Select
                        options={options}
                        placeholder='Choose Category...'
                    />
                </div>
                <br/>
                <button className="btn btn-warning form-control" id="postButton">Post Review</button>
            </div>
        );
    }
}

export default Commentbox;