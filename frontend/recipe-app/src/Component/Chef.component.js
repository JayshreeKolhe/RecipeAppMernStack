import React, { Component } from 'react';
import './Chef.css';
//import axios from 'axios';

export default class Cheff extends Component {
constructor(props) {
    super(props);
    this.state = {
        rec_title: '',
        rec_prepTime: '',
        rec_cookTime: '',
        rec_intructions:'',
        rec_chefName:''
    }
}
render() {
    return (
        <div style={{marginTop: 10}}>
                <h3>Add New Recipe</h3>

                <form onSubmit={this.onSubmit}>
                    
                
                <div className="form-group w-50"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rec_title}
                                onChange={this.onChangeRecTitle}
                                />
                    </div>

                   
                    <div className="md-form form-group w-50"> 
                        <label>Preparation Time: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rec_prepTime}
                                onChange={this.onChangeRecPreparationTime}
                                />
                    </div>
                   

                  
                    <div className="form-group w-50"> 
                        <label>Cooking Time: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rec_cookTime}
                                onChange={this.onChangeRecCookTime}
                                />
                    </div>
                   
                    <div className="form-group w-50 h-"> 
                        <label>Instructions: </label>
                        <input  type="text" 
                                className="form-control"
                                value={this.state.rec_intructions}
                                onChange={this.onChangeRecIntructions}
                                />
                    </div>
                    <div className="form-group w-50"> 
                        <label>Chef Name: </label>
                        <input  type="text" 
                                className="form-control"
                                value={this.state.rec_chefName}
                                onChange={this.onChangeRecChefName}
                                />
                    </div>
                    

                     <div class="form-group w-50">
                        <input type="submit" value="Add Recipe" className="btn btn-primary" />
                    </div>

                </form>
        </div>
    )
}
   
}
