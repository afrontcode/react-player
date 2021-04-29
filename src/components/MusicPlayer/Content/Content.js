/* eslint-disable prettier/prettier */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Component } from 'react'
import * as actions from '../../../actions/index'

import Firtsong from './firtsong'
import Search from './searchbar'
import Card from './Card'

class Content extends Component {
 
  state= {
    albums:[]
  }
 

  clickTest(event){
    console.log('Hizo click');
    console.log(event);
    //actions.getAlbum(this.props).then
  }

  componentDidMount(){
    actions.getAlbums().then(item => this.setState(
      {
        albums: item
      }));
  }

  

  searchAlbums = (term) => {
    actions.getAlbums(term).then(item=> this.setState({
      albums : item
    }))
  }

  currentSong = (info) => {
    this.props.dataCardAlbum(info);
  }

 
  renderAlbums= () => {
    const {albums} = this.state;
    return albums && albums.length ?
         albums.map((item,index) => (
          <Card item={item} key={index} index={index} info={this.currentSong} />
         )) 
    : null
  }

  render(){


    return(
      
      <div css={CSS} className='wrapper'>
        < Search  searchAlbums={this.searchAlbums} />
        < Firtsong />
         <div  >
           <div className="Content">
           {this.renderAlbums()}
           </div>
        
       </div>
      </div>
      
    )
  }
}



const CSS = css`
height: 100%;
  width: 100%;
  overflow: scroll;

  
.Content{
  
  display: flex;
  color:#555555 ;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  
  padding-bottom: 7rem;
}

 
    .Content::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}
    .Content::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
  .album_image{
    width: 160px;
  }

  .album_card{
    margin-left: 22px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .albums_info{
    width: 157px;
  }
`


export default Content;
