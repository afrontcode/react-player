/* eslint-disable prettier/prettier */
/** @jsx jsx */
import React, {useState} from 'react'
import { css, jsx } from '@emotion/core'
import logo from '../../img/foxbel-music.png'

const Sidebar = () => {
  
  const [state, setState] = useState({
    currentPlaylist: 'Recientes',
    playlists: {
      Recientes: null,
      Artistas: null,
      Álbums: null,
      Canciones: null,
      Estaciones: null,
    }
  })

  const playlists = Object.keys(state.playlists)

  return(
    <ul className="Sidebar" css={CSS}>
    <div className="image" css={CSS}>
      <img src={logo} height={50} />
    </div>
    <li className="library">Mi Librería</li>
    {
      playlists.map(list => <li key={list} className={list === state.currentPlaylist ? 'active' : ''}
      onClick={() => {
        setState({...state, currentPlaylist: list})
      }}
      > 
      {list}</li>)
     }
    </ul>
  )
}

const CSS = css`
background: #662323;
padding: 20px  0px;

.image{
  text-align: center;
  padding: 25px 30px 25px 10px;
}

 li {
  padding-left: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px
  font-weight: 400;
}

li.active {
  border-left: 2px solid #E86060;
  color: #E86060;
  padding-left: 18px;
  font-weight: 700;
}

li.library {
  cursor: unset;
  color: #FFFFFFF;
  font-weight: 700;
  font-size: 22px;
}

li.new-playlist {
  position: absolute;
  bottom: 80px;
  i {
    margin-right: 5px;
    transform: translateY(1px);
    &:before {
      font-size: 20px;
    }
  }
  span {
    color: #999;
    font-weight: 300;
  }
  }
`

export default Sidebar
