import React,{Component} from 'react';

class Commentbox extends Component {
    render() {
        return (
            <div id="mainHomeDiv">
                <label className="whiteText">New Post</label>
                <textarea type="textArea" className="form-control" id="postText" placeholder="..."></textarea>
                <button className="btn btn-warning form-control" id="postButton">Post</button>
            </div>
        );
    }
}

export default Commentbox;