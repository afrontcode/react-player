import axios from 'axios'

const API_KEY = '4459a8522fmsh14d2d54f971f957p11f02ajsn29a09ec2fb7c';

const request = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
  timeout: 3000,
  headers: { 'X-RapidAPI-Key': API_KEY }
})

export function getAlbums(search = 'eminem'){
  const albums = request
    .get(`search?q=${search}`)
    .then(response => response.data.data)
    .catch(error => console.log(error))
  return albums
}

export function getAlbum(id){
  const album = request
    .get(`album/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error))

  return album
}
