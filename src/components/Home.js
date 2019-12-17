import React,{Component} from 'react';
import Commentbox from './homeComponents/CommentBox';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./blog/Header";
import MainFeaturedPost from "./blog/MainFeaturedPost";
import Grid from "@material-ui/core/Grid";
import FeaturedPost from "./blog/FeaturedPost";
import Main from "./blog/Main";
import Sidebar from "./blog/Sidebar";
import Footer from "./blog/Footer";

const sections = [
    { title: 'Electronics', url: '#' },
    { title: 'Furniture', url: '#' },
    { title: 'School Stuff', url: '#' },
    { title: 'Food', url: '#' },
    { title: 'Clothes', url: '#' },
    { title: 'Immovables', url: '#' },
];



const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

class Home extends Component{

    render() {
        return (<React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="RevieWall" sections={sections} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />

                </main>
            </Container>
            <Footer title="Footer" description="if you want to comment or read, you must log in" />
        </React.Fragment>)
    }

}

export default Home;