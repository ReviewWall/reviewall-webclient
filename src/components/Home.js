import React,{Component} from 'react';
import Categories from './homeComponents/Categories';
import Commentbox from './homeComponents/CommentBox';


class Home extends Component{

    render() {
        return <div>
            <Categories />
            <Commentbox />
        </div>
    }

}

export default Home;