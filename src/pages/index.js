import React, {useState} from "react"
import Video from "../components/video"
import GlacierVideo from "../images/glacierBGVideo.mp4"
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

// import Terms from "../components/termsPopup"





const pageStyles = {
    padding: 0,
    margin: 0,
  }

const Main = styled.div`
padding: 0;
margin: 0;
color: white;
h1 {
    color: white;
    font-family: sans-serif;
    font-size: 50px;
}
body {
    margin: 0;
    padding: 0;
}

video {
    gridArea: 1/1;
    position: relative;
    placeItems: center;
    display: grid;
    object-fit: cover;
    object-position: 32%; 
    height: 100vh;
    @media(maxWidth){
        /* object-fit: cover;
        object-position: 32%; 
        height: 100vw;
        */
    }
}
`

const CenterContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-content: center; */
    /* background-color: rgba(0,0,0,0.5); */
div {
    max-width: 797px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
p {
    margin: 40px;
    text-align: center;
    font-family: visby,sans-serif;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1.4px;
    font-size: 13px;
    opacity: 1;
}
a {
    margin: auto;
}
button {
    margin: auto;
    border: 1px solid white;
    color: white;
    background: rgba(0,0,0,0);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 1.5;
    font-family: sans-serif;
    font-size: 14px;
    padding: 12px 60px;
    transition: .3s;
    :hover {
        cursor: pointer;
        background: rgba(255,255,255,1);
        color: black;
    }
}
`

const YoutubeEmbed = styled.div`
color: white;
margin: 100px auto;
height: 1000px;
div {
    width: 65%;
    margin: 100px auto;
    /* width: 560px;
    height: 325px; */
    /*  */
    /* width: 840px;
    height: 472px;
    margin: 50px auto; */
} 
@media(max-width:1000px){
    div {
        width: 100%;
    }
}
`

const Youtube2 = styled.div`
img {
    object-position: top;
}
button {

    width: 150px;
    height: 150px;
    font-size: 2rem;
    font-weight: 100;
    border-radius: 50%;
    border: 1px solid #fff;
    color: #fff;
    background-color: rgba(0,0,0,0);
    transition: .3s;
    :hover {
        cursor: pointer ;
        background-color: rgba(355, 355, 355, 0.4)
    }
}
`

const YoutubePopup = styled.div`
position: absolute
`
const popupStyles = ({videoOpen}) => css`
display: none;
position:fixed;
.dim {
    position: fixed;
    z-index: -100;
    top: 0;
    left: 0;
    ${'' /* transition: .3s; */}
    transition-delay: .3s;
    transition: background-color .3s, z-index .4s;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255,0);
}

${videoOpen === true &&`
display: block;

.dim {
    z-index: 50;
    transition: background-color .3s, z-index .1s;
    background-color: rgba(0,0,0,.3);
}
.overlay {
    z-index: 100;
    position: fixed;
    max-width: 900px;
    width: 100%;
    height: 100%; 
    top:15%;
    left: 50%;
    transform: translate(-50%, 0);
}

button {
    background-color: rgba(0,0,0,0);
    border: none;
    color: white;
    :hover {
        cursor: pointer;
    }
    top: -4%;
    right: -2%;
}
.hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
    background-color: rgba(0,0,0,0);
}
.hamburger-inner-active {
        display: block;
        width: 20px;
        height: 3px;
        background-color: white;
        border-radius: 4px;
        position: absolute;
        top: 50%;
        transform: rotate(45deg);
        transition: top 0.075s ease,
        transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      } 
    .hamburger-inner-active::after {
        width: 20px;
        height: 3px;
        background-color: white;
        border-radius: 4px;
        position: absolute;
        content: "";
        right: 0%;
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease,
        transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
`}
`

const Spacer = styled.div`
height: 500px;
`


const IndexPage = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  console.log(videoOpen)
  return (
      <Layout>
        <Main style={pageStyles}>
        <title>Home Page</title>
        <div style={{ display: "grid", maxHeight: 900}} id="homeSection">
            <Video
                className="videoClass"
                videoSrcURL={GlacierVideo}
                videoTitle="Glacier Hero Video"
            />
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    }}
                >
                <CenterContent>
                    <div>
                    <StaticImage
                        src={`../images/glacierLogo.png`}
                        alt="Glacier International Logo"
                         style={{
                             gridArea: "1/1",
                             position: "relative",
                             margin: "0 10px",
                             placeItems: "center",
                             display: "grid",
                             opacity: "1",
                             mixBlendMode: "overlay",
                            }}
                    />    
                    <p>Glacier International is a one-stop shop for importing, right hand drive re-manufacturing, and customising your Toyota Tundra. With cutting edge technology, the 2022 Toyota Tundra is a half-ton, meticulously engineered heavy metal machine, and our goal is to deliver it to Kiwis who value reliability, performance and class over anything else.</p>
                    <a href="mailto:sales@glacier.nz"><button >Enquire</button></a>
                    </div>
                </CenterContent>
                
            
            </div>
        </div>
        </Main>

        //second style to remove toyota logo
        <Youtube2 style={{ display: "grid", maxHeight: 640}} id="homeSection">
            <StaticImage
                src={`../images/Platinum.JPG`}
                alt="Sold Tundra Image"
                style={{
                        maxHeight: "640px",
                        gridArea: "1/1",
                        position: "relative",
                        placeItems: "center",
                        display: "grid",
                        filter: "brightness(40%)"
                    }}
            />   
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    }}
                >
                <button onClick={() => {setVideoOpen(!videoOpen)}}>PLAY</button>
            </div>
        </Youtube2>


        
        <div css={popupStyles({ videoOpen })} >
            <div class="dim"/>
            <div class="overlay">
                {/* <button onClick={() => {setVideoOpen(!videoOpen)}}>close</button> */}
                <button css={popupStyles({ videoOpen })} onClick={() => setVideoOpen(!videoOpen)} aria-label="Navigation menu toggle">
                        <span className="hamburger-box">
                            <span className="hamburger-inner-active"></span>
                        </span>
                </button>
                <iframe width="100%" height="600px" src={(videoOpen ? "https://www.youtube.com/embed/videoseries?list=PLuYwryiueK-4mtYgDOpM9ZEWnhqUsrHgB&autoplay=1" : "https://www.youtube.com/embed/videoseries?list=PLuYwryiueK-4mtYgDOpM9ZEWnhqUsrHgB")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
            </div>
        </div>  
        <Spacer></Spacer>


        {/* //first implementation
        <YoutubeEmbed>
        <div>
            <iframe width="100%" height="600px" src="https://www.youtube.com/embed/videoseries?list=PLuYwryiueK-4mtYgDOpM9ZEWnhqUsrHgB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
        </div>
        </YoutubeEmbed> */}
        
        
                
    </Layout>
  )
}

export default IndexPage
