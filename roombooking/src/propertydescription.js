import React,{Component, Fragment} from 'react';
import Nav from "./components/common/navbar";
import Grid from "@material-ui/core/Grid"
import Content from "./content"

const styles={
    imgStyle : {
        width:'35%',
        height:'45%',
        marginTop:'3%'
    },
    about:{
        margin:'10px',
        fontSize:'15px'
    }
}
class propertyDescription extends Component{
    constructor(props){
        super(props);
        this.state={
            description:{}
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id
        let filteredArray = Content.properties.filter((data,index)=>{
            return data.id === id 
        })
        this.setState({
            description:filteredArray[0]
        })

    }
    
    render(){
        return(
            <Fragment>
                <Nav />
                <Grid container justify="center" >
                    <img src={this.state.description.imgURL} style ={styles.imgStyle} />
                </Grid>
                <Grid container justify="center">
                    {Object.keys(this.state.description).length>0? <h1>{this.state.description.name}</h1>: null}
                </Grid>
                <Grid container justify="center">
                    <h2>Price : INR {this.state.description.price}</h2>
                </Grid>
                <Grid container justify="center">
                    <h2>Location : {this.state.description.location}</h2>
                </Grid>
                <Grid container justify="center">
                    <h3>About The Property : </h3>
                    <br/>
                    <Grid item md={6}>
                        <p style={styles.about}>{this.state.description.about}</p>
                    </Grid>
                </Grid>
            </Fragment>
        )


    }
}
export default propertyDescription;
