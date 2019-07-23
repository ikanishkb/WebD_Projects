import React, { Component } from 'react'
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import defaultbg from '../images/defaultBcg.jpeg'

const styles = {
    default:{
        background : `url(${defaultbg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: "91.5vh",
    }
}

export default class Default extends Component {
    render() {
        return (
            <Header title="404" styleClass={styles.default}>
                <h1 className="text-uppercase text-light">The given page does not exist</h1>
                <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">Return Home</Link>
            </Header>
        )
    }
}
