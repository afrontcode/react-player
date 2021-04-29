/* eslint-disable prettier/prettier */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Component } from 'react'
import * as actions from '../../../actions/index'


class Search extends Component {
  
  state = {
    term: ''
  }
  handleInputChange = (event) =>{
    this.setState({term : event.target.value})
  }
  submitSearch = (event) => {
        event.preventDefault();
        let {term} = this.state;
        this.props.searchAlbums(term);
  }
  render(){
    console.log(this.state);
    return(
      <div css={CSS} className='search'>
        <form onSubmit={(event) => this.submitSearch(event)} >
        <input className='filter' type="text" placeholder="Search.." 
        name="search"
         value={this.state.term}  
         onChange={(event) => this.handleInputChange(event) } />
         
        </form>
      </div>
      
    )
  }
}



const CSS = css`
padding: 20px 42px;
color: #000000;
font-family: "Font Awesome";

.filter{
  background: #FFFFFF;
border: 1px solid #828282;
box-sizing: border-box;
border-radius: 100px;
padding: 10px 12px;
width: 60%;
cursor: pointer
}

`


export default Search;
