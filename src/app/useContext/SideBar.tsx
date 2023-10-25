import React from 'react'
import { useUserContext } from './context'

const SideBar = () => {
  const user=useUserContext();
  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription Status: {`${user.isSuscribed}`}</div>
    </div>
  )
}

export default SideBar