/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Content from './Content/Content'
import Playbar from './Playbar'

const MusicPlayer = () => {

  const [infocard, setInfoCard] = useState({});
 
  const dataCardAlbum = (data) => { // {title, album, image}
    setInfoCard(data)
  }

   const dataAlbum = () => {
     
    return{
      title: infocard.title,
      album: infocard.album && infocard.album.title,
      image: infocard.album && infocard.album.cover_small,
      artist: infocard.artist && infocard.artist.name,
      tracklist: infocard.album && infocard.album.tracklist, 
  
    }
  }

return ( 
    <>
    <div css={CSS}>
    <Sidebar />
    <Topbar />
    <Content dataCardAlbum={dataCardAlbum} />
    <Playbar dataAlbum={dataAlbum} />
      </div>
    </>
   )
} 

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  color: white;
`

export default MusicPlayer
