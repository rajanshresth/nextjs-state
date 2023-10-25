import React from 'react'
import { useUserContext } from './context'

const ProfilePage = () => {
  const user = useUserContext();
  return (
    <>
      <div>ProfilePage</div>
      <br />
      <div className='flex flex-col'>
        <p>Username: {`${user.name}`}</p>
        <p>Suscribed: {`${user.isSuscribed}`}</p>
      </div>
    </>
  )
}

export default ProfilePage