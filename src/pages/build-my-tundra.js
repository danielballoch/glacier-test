import * as React from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"





const pageStyles = {
    padding: 0,
    margin: "100px 0",
  }

const Main = styled.div`
padding: 0;

color: white;
h1 {
    /* margin-top: 100px; */
    text-align: center;
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
    padding: 12px 60px;\
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

const IndexPage = () => {
  return (
      <Layout>
        <Main style={pageStyles}>
        <title>Home Page</title>
        <h1>Build My Tundra</h1>
        </Main>
    </Layout>
  )
}

export default IndexPage