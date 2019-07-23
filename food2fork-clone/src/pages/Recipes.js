import React, { Component, Fragment } from 'react'
import Recipelist from '../components/Recipelist';
import Search from '../components/Search';
import {recipeData} from '../data/tempList';

export default class Recipes extends Component {
    constructor(props){
        super(props)
        this.getRecipes = this.getRecipes.bind(this);
    }

    state={
        recipes:recipeData,
        search:"",
        url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_YOUR_API_KEY}`,
        base_url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_YOUR_API_KEY}`,
        query:'&q=',
        error:''
    }

    async getRecipes(){
        try {
            const data = await fetch(this.state.url);
            console.log(data);
            const jsonData = await data.json();
            console.log(jsonData)
            if(jsonData.recipes.length === 0){
                this.setState({
                    error:"Sorry but your search does not exist"
                })
            }
            else{
                this.setState({
                    recipes:jsonData.recipes,
                    error:""
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount(){
        this.getRecipes();
    }

    handleChange = (e) =>{
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const{base_url,query,search} = this.state;
        this.setState({
            url:`${base_url}${query}${search}`,
            search:''
        },()=>this.getRecipes());
    }

    render() {
        return (
            <Fragment>
                <Search search={this.state.search} handleChange={this.handleChange}  handleSubmit={this.handleSubmit}/>
                {this.state.error?(<section>
                    <div className="col">
                        <h2 className="text-orange text-center text-uppercase mt-5">
                            {this.state.error}
                        </h2>
                    </div>
                </section>):(<Recipelist recipes={this.state.recipes}/>)}
            </Fragment>
        )
    }
}
