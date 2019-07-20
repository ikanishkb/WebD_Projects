import React, { Component, Fragment } from 'react';
import Nav from './components/common/navbar';
import img from './content/images/bg.png';
import Card from './components/card';
import Grid from "@material-ui/core/Grid";
import Data from "./content/index";

const styles={
    homeFront : {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        height:'75vh',
        backgroundRepeat:'no-repeat',
        backgroundPosition:"center",
        textAlign:'center',
        position: 'relative',
        display:'flex',
    },
    heading:{
        fontSize:'8rem',
        justifyContent:'center',
        margin:'0 auto',
        color:'white',
        display:'flex',
        alignItems:'center', 
    },
    cardStyle : {
        marginTop: '1%',
        textAlign:'center',
    },
};

export default class home extends Component {
    cardClick=(id)=>{
        this.props.history.push(`/propertyDescription/${id}`)
    }

    render() {
        return (
            <Fragment>
                <Nav/>
                <div style={styles.homeFront}>
                    <h1 style={styles.heading}>Booking Site </h1>
                </div>
                <Grid container justify="space-evenly" alignItems="stretch" style={{backgroundColor:'black'}}>
                    {Data.properties.map((data)=>{
                        return(
                            <Grid item sm={3} md={5} style={styles.cardStyle}>
                                <Card data={data} cardClick={this.cardClick}/>
                            </Grid>
                        )
                    })
                }
                </Grid>
            </Fragment>
        )
    }
}