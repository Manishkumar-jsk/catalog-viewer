import "./home.css"
import React, {Component} from 'react'


export default function Home({title,inf,img}) {
  return (
    <div className="homeContainer">
      <div className="homeContainerLeft">
        <div className="homeContainerLeftImg">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="homeContainerRight">
        <h1>{title}</h1>
        <p>{inf}</p>
      </div>
    </div>
  )
}

