import React,{Component} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./blog/Header";
import MainFeaturedPost from "./blog/MainFeaturedPost";
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
    title: 'Most Popular 10 Products of This Month',
    description:
        "See the most interesting and useful products of this month!",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'See products…',
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
            <Footer title="Reviewall™" description="if you want to review, you must log in" />
        </React.Fragment>)
    }

}

export default Home;