import React, {Component} from 'react';
import Commentbox from "./CommentBox";
import NewHeader from "./blog/NewHeader";
import CssBaseline from "@material-ui/core/CssBaseline";

const sections = [
    { title: 'Home', url: '/' }
];

class Review extends Component{

    render() {
        return (
            <div className='container '>
                <NewHeader title="RevieWall" sections={sections} />
                <CssBaseline />
                <Commentbox/>
            </div>
        );
    }

}

export default Review;