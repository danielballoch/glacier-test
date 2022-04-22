import React, {useState, useEffect} from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import LimitedWhite from "../images/tundra/limited/white.png"
import LimitedBlack from "../images/tundra/limited/black.png"
import LimitedBlue from "../images/tundra/limited/blue.png"

import CapstoneBlue from "../images/tundra/capstone/blue.png"
import CapstoneWhite from "../images/tundra/capstone/white.png"
import CapstoneBlack from "../images/tundra/capstone/black.png"

import SRBlue from "../images/tundra/sr/blue.png"
import SRBlack from "../images/tundra/sr/black.png"
import SRWhite from "../images/tundra/sr/white.png"




const pageStyles = {
    padding: 0,
    margin: "100px 0",
  }

const Main = styled.div`
padding: 0;
font-family: 'visby',sans-serif;
color: white;
h1 {
    /* margin-top: 100px; */
    text-align: center;
    color: white;
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

const Center = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
.red {
background-color: red;
}
.blue {
background-color: blue;
}
.green {
background-color: green;
}
`
const CenterLeft = styled.div`
margin-left: 20px;
p {

}
display: flex;
justify-content: center;
flex-direction: column;
align-items: left;
.active {
    background-color: blue;
}
`

const Row = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
`

const Truck = styled.div`
width: 400px;
height: 400px;
background-color: red;

`


const IndexPage = () => {
    const [price, setPrice] = useState(0);

    const [model, setModel] = useState(["TRD PRO",32000])
    const [lift, setLift] = useState(0)

    const [colour, setColour] = useState(["red",100])

    const [accessory1, setAccessory1] = useState(false)
    const [accessory2, setAccessory2] = useState(false)
    const [accessory3, setAccessory3] = useState(false)
    const [accessory4, setAccessory4] = useState(false)

    useEffect(() => {
        if (price !== (model[1] + colour[1] + lift)){setPrice(model[1] + colour[1])}
    });
  return (
      <Layout>
        <Main style={pageStyles}>
        <title>Home Page</title>
        <Row>
            <Center>
                <h1>Build My Tundra</h1>
                <p>Price: ${price} (NZD)</p>
                <img src={(
                model[0] === "CrewMax Limited" && colour[0] === "white" ? LimitedWhite : 
                model[0] === "CrewMax Limited" && colour[0] === "black" ? LimitedBlack :
                model[0] === "CrewMax Limited" ? LimitedBlue : 
                model[0] === "CrewMax Capstone" && colour[0] === "white" ? CapstoneWhite :
                model[0] === "CrewMax Capstone" && colour[0] === "black" ? CapstoneBlack :
                model[0] === "CrewMax Capstone" ? CapstoneBlue : 
                model[0] === "DOUBLE CAB SR" && colour[0] === "white" ? SRWhite :
                model[0] === "DOUBLE CAB SR" && colour[0] === "black" ? SRBlack :
                SRBlue
                )}/>
            </Center>
            <CenterLeft>
                <p>Base Model:</p>
                <button className={(model[0] === "DOUBLE CAB SR" ? 'active' : '') } onClick={() => setModel(["DOUBLE CAB SR",32000])}>DOUBLE CAB SR</button>
                <button className={(model[0] === "CrewMax Capstone" ? 'active' : '') } onClick={() => setModel(["CrewMax Capstone",42000])}>CrewMax SR</button>
                <button className={(model[0] === "CrewMax Limited" ? 'active' : '') } onClick={() => setModel(["CrewMax Limited",47000])}>CrewMax Limited</button>
                <p>Colour:</p>
                <button className={(colour[0] === "white" ? 'active' : '') } onClick={() => setColour(["white",100])}>White</button>
                <button className={(colour[0] === "blue" ? 'active' : '') } onClick={() => setColour(["blue",200])}>Blue</button>
                <button className={(colour[0] === "black" ? 'active' : '') } onClick={() => setColour(["black",500])}>black</button>
            </CenterLeft>
        </Row>
        
        
        

        </Main>
    </Layout>
  )
}

export default IndexPage