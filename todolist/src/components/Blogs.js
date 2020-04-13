import React from 'react'

const Blogs = (props) => {
  return (
    <>
      I'm a blogs
      <br/>
      <br/>
      {props.match.params.blog}
      <br/>
      <br/>
      {props.location.pathname}
    </>
  )
}

export default Blogs
