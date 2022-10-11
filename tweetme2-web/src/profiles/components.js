import React from 'react'



export function UserLink (props) {
  const {username} = props
  const handleUserLink = (event) => {
    window.location.href= `/profiles/${username}`
  }
  return <span className='pointer' onClick={handleUserLink}>
      {props.children}
  </span>
}


export  function UserDisplay(props){
  const {user, includeFullName, hideLink} = props
  const nameDisplay = includeFullName === true ? `${user.first_name} ${user.last_name} ` : null
  return <React.Fragment>
    {nameDisplay}
    {hideLink === true ? `@${user.username}` : <UserLink username={user.username}>@{user.username}</UserLink>}
  </React.Fragment>
}

export  function UserPicture (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.image} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}


export  function UserPicture2 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.Formula1} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}

export  function UserPicture3 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.Afcon} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}
export  function UserPicture4 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.Baseball} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}
export  function UserPicture5 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.Bundesliga} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}
export  function UserPicture6 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.Champions} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}
export  function UserPicture7 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.Europa} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}
export  function UserPicture8 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.Formula1} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}
export  function UserPicture9 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.Laliga} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}

export  function UserPicture10 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.NBA} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}
export  function UserPicture11 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.NFL} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}



export  function UserPicture12 (props) {
  const {user, hideLink} = props
  const userIdSpan = <span className='mx-1 px-3 py-2 rounded-circle bg-white'>
  <img src = {user.Worldcup} width="50" height="50" className="d-inline-block align-top" alt="" />


</span>
  return  hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}