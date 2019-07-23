import React, { Component } from 'react'
import Header from '../components/Header'
import background from '../images/homeBcg.jpeg';
import {Link} from 'react-router-dom';

const styles = {
    home:{
        background : `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: "91.5vh",
    }
}
export default class Home extends Component {
    render() {
        return (
            <Header title="Amazing Recipes" styleClass={styles.home}>
                <Link to="/Recipes" className="text-uppercase btn btn-secondary btn-lg mt-3">Search Recipes</Link>
            </Header>
        )
    }
}
