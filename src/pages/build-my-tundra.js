import React, {useState, useEffect} from "react"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"





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
                <Truck className={colour[0]}/>
            </Center>
            <Center>
                Model:
                <button onClick={() => setModel(["DOUBLE CAB SR",32000])}>TRD PRO</button>
                <button onClick={() => setModel(["Double Cab SR Long Bed",36000])}>PLATINUM CREWMAX</button>
                <button onClick={() => setModel(["CrewMax Capstone",42000])}>1794 EDITION CREWMAX</button>
                <button onClick={() => setModel(["CrewMax Limited",47000])}>LIMITED</button>
                Colour:
                <button onClick={() => setColour(["red",100])}>Red</button>
                <button onClick={() => setColour(["blue",200])}>Blue</button>
                <button onClick={() => setColour(["green",500])}>Green</button>
            </Center>
        </Row>
        
        
        

        </Main>
    </Layout>
  )
}

export default IndexPage