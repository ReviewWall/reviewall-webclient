import React,{Component} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import HeaderEnter from "./HeaderEnter";
import MainFeaturedPostEnter from "./MainFeaturedPostEnter";
import Footer from "./blog/Footer";

const sections = [
    { title: 'Electronics', url: '/review' },
    { title: 'Furniture', url: '/review' },
    { title: 'School', url: '/review' },
    { title: 'Food', url: '/review' },
    { title: 'Clothes', url: '/review' },
    { title: 'Immovables', url: '/review' },
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
                    </Container>
                    <Footer title="Welcome" description="" />
        </React.Fragment>)
    }

}

export default Home;