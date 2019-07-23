import React, { Component, Fragment } from 'react'
import Recipe from './Recipe';

export default class Recipelist extends Component {
    render(props) {
        return (
            <Fragment>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">Recipe list</h1>
                        </div>
                    </div>
                    <div className="row">
                        {this.props.recipes.map(recipe => {
                            return(
                                <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }
}
