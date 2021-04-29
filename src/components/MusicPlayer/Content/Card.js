/* eslint-disable prettier/prettier */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Component } from 'react'
import * as actions from '../../../actions/index'

class Card extends Component {
 
  
  myInfo = () => {
    this.props.info(this.props.item)
  }
 
  render(){
    const item = this.props.item;
    return(
      <div  className='album_card'  identificador={item.id}
    onClick={this.myInfo}>
        <img src={item.album.cover_big} className='album_image' / >
       <div className="albums_info">
       <div className=''> {item.title_short}</div>
       <div className=''> {item.artist.name}</div>
       </div>
   </div>
    )
  }
}



const CSS = css`
height: 100%;
  width: 100%;
  overflow: scroll;
  cursor:pointer;

  
.Content{
  
  display: flex;
  color:#555555 ;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  
  padding-bottom: 7rem;
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


export default Card;
