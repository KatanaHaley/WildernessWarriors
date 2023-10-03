import React from 'react'

export const ReviewStringInput = (props) => {
  return (
  <div>Value: 
    <input placeholder="Add your review"></input>
    {/* {props.value} */}
    {console.log(props.value)}
  </div>
  )
}