import React from 'react'
import UsersList from '../components/UsersList'


const Users = () => {
  const USERS = [{
    id: 'u1',
    name: 'Andy Dillon',
    image: 'https://www.tickethalifax.com/imager/b/big/97681187/da83/Some_Guy_from_the_Internet.jpg',
    places: 3
  }]
  return <UsersList items={USERS} />
}


export default Users