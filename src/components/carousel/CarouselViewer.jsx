import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, ImageData } from "../../Data/data";
import "./carouselviewer.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import React, { useState } from 'react'
import Home from "../home/Home";
import {Button} from "@mui/material";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2
    }
  };

export default function CarouselViewer() {


    const [uid,setUid] = useState(1)
    const [title,setTitle] = useState("Nahalgarh Fort")
    const [inf,setInf] = useState("Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical.")
    const [img,setImg] = useState('https://images.pexels.com/photos/5621421/pexels-photo-5621421.jpeg?auto=compress&cs=tinysrgb&w=400')
    const [play,setPlay] = useState(true)
    

    var lookup = {};
    for (var i = 0, len = ImageData.length; i < len; i++) {
      lookup[ImageData[i].id] = ImageData[i];
    }

    const handleClick = (e) => {
        const Key = e.currentTarget.id;
        setUid(Key)
        setTitle(lookup[uid].title)
        setInf(lookup[uid].info)
        setImg(lookup[uid].image)

    }

    const handleButton = () => {
      setPlay(true)
    }

    const handlePause = () => {
      setPlay(false)
    }
  return (

    <>
    <Home title={title} inf={inf} img={img} />
    <div className="Cal-container">
      <div className="Cal-container-left">
        <Carousel responsive={responsive} infinite={true} centerMode={true} containerClass="carousel-container" autoPlay={play}
              autoPlaySpeed={1000} >
                {Image.map((img) => {
                    const {id,image} = img;
                    return (
                        <div className={"cal-img-container"} key={id}  id={id} onClick={handleClick}>
                            <img src={image} className="cal-img"/>
                        </div>
                        )
                })}
        </Carousel>
      </div>
      <div className="Cal-container-right">
        <Button onClick={handleButton} style={!play ? {"display":"inline-block"} : {"display":"none"}}><PlayCircleIcon  color="primary" style={{ fontSize: 50 }} /></Button>
        <Button onClick={handlePause} style={play ? {"display":"inline-block"} : {"display":"none"}}><PauseIcon color="primary" fontSize="large" style={{ fontSize: 50 }}  /></Button>
      </div>
    </div>
    </>
  )
}
