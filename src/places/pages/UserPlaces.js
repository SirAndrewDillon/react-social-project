import React from 'react'
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'The Space Needle',
    description: 'Tallest building in Seattle',
    imageUrl: 'https://i.redd.it/5zwbee2874z21.jpg',
    address: '400 Broad St, Seattle, WA 98109',
    location: {
      lat: 47.620422,
      lng: -122.349358
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'The Space Needle',
    description: 'Tallest building in Seattle',
    imageUrl: 'https://i.redd.it/5zwbee2874z21.jpg',
    address: '400 Broad St, Seattle, WA 98109',
    location: {
      lat: 47.620422,
      lng: -122.349358
    },
    creator: 'u2'
  }
]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces