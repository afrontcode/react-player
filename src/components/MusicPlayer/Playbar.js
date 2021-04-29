/* eslint-disable prettier/prettier */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Component } from 'react'
import * as actions from '../../actions/index'

class Playbar extends Component {

//  state = {
//    album : '',
//    tracks : []
//  }
  
//  componentDidMount(){
//    actions.getAlbum(this.props.match.params.id).then(album => {
//      this.setState({
//        album,
//        tracks : album.tracks.data
//      })
//    })
//  }

  // dataPlaybar(){
  //   const {title, album, image} = this.props.dataAlbum();
  //   console.log(title);
  // }

  render(){
    const {title, album, image, artist, tracklist} = this.props.dataAlbum();

        return(
          <div className="playbar" css={CSS}>
             <img src={image}></img>
           <div className="playbar_info">
           <div>{title}</div>
             <div>{album}</div>
            
             <div>{artist}</div>
           </div>
     </div>
    )
  }
}

const CSS = css`

padding: 20px 42px;
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 100px;
background: rgba(235, 87, 87, 1);
display:flex;
z-index: 99;

img{
  margin-right: 12px;
}


`

export default Playbar
