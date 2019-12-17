import React,{Component} from 'react';
import Commentbox from './homeComponents/CommentBox';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./blog/Header";
import HeaderEnter from "./HeaderEnter";
import MainFeaturedPostEnter from "./MainFeaturedPostEnter";
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

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
   
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    }
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
                <HeaderEnter title="RevieWall" sections={sections} />
                <main>
                    <MainFeaturedPostEnter post={mainFeaturedPost} />
                
                </main>
            </Container>
            <Footer title="Welcome" description="" />
        </React.Fragment>)
    }

}

export default Home;