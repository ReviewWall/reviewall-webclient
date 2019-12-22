import React,{Component} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import HeaderEnter from "./HeaderEnter";
import MainFeaturedPostEnter from "./MainFeaturedPostEnter";
import Footer from "./blog/Footer";
import Commentbox from "./homeComponents/CommentBox";

const sections = [
    { title: 'Electronics', url: '#' },
    { title: 'Furniture', url: '#' },
    { title: 'School Stuff', url: '#' },
    { title: 'Food', url: '#' },
    { title: 'Clothes', url: '#' },
    { title: 'Immovables', url: '#' },
];


const mainFeaturedPost = {
    title: 'Most Popular 10 Products of This Month',
    description:
        "See the most interesting and useful products of this month!",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'See products…',
};

class Home extends Component{

    render() {
        return (
            <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="lg" >
                        <HeaderEnter title="RevieWall" sections={sections} />
                        <main>
                            <MainFeaturedPostEnter post={mainFeaturedPost} />

                        </main>
                        <Commentbox/>
                    </Container>
                    <Footer title="Welcome" description="" />
        </React.Fragment>)
    }

}

export default Home;