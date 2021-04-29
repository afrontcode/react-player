/* eslint-disable prettier/prettier */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Component } from 'react'
import * as actions from '../../../actions/index'

import image from '../../../img/adele.png'
import imagebg from '../../../img/adele_bg.png'

class firtsong extends Component {


    state= {
        albums:[]
      }

    componentDidMount(){
        actions.getAlbums().then(items => this.setState(
          {
            albums: items[1]
          }));
         
      }

     
    
     

  render(){
      
        console.log(this.state);
        return(
          <div className="firtsong" css={CSS}>
             <div className="firtsong_container">
             <div className="firtsong_image">
             <img  src={image} />
             </div> 
             <div className="firtsong_info">
             <h3 className=''> {this.state.albums.title_short}</h3>
             <p className='description'>Lo mejor de Adele </p>
           <div className="firtsong_buttons">
           <button type="text" className="full_button">Reproducir</button>
            <button type="text" className="outline_button">Seguir</button>
           </div>
             </div>
             </div>
     </div>
    )
  }
}

const CSS = css`

padding: 20px 42px;

.firtsong_container{
    display:flex;

}
.firtsong{
    width: 100%
    
    
}

.firtsong_info{
  background-image: url("../../../img/adele_bg.png");
}

.firtsong_image{
    width: 250px;
    height: 250px;
    background: blue;
}

.firtsong_info{
    width: 78%;
    background: rgba(167, 0, 0, 0.7);
    padding: 40px;
}

.description{
    margin-bottom: 3rem;
}

.full_button{
    background: #E86060;
mix-blend-mode: normal;
border-radius: 100px;
padding: 8px 24px; 
border: none;
color:#FFFFFF;
cursor:pointer;
margin-right: 12px;
}

.outline_button{
    color:#FFFFFF;
    border: 1px solid #ffffff;
    mix-blend-mode: normal;
    border-radius: 100px;
    padding: 8px 24px; 
    background: transparent;
    cursor:pointer;
}



`

export default firtsong
