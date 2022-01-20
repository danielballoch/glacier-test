import * as React from "react"
import Video from "../components/video"
import GlacierVideo from "../images/glacierTestVideo.mp4"
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const pageStyles = {
    padding: 0,
    margin: 0
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
`

const CenterContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
max-width: 797px;
p {
    margin: 40px;
    text-align: center;
    font-family: visby,sans-serif;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1.4px;
    font-size: 13px;
    opacity: 0.9;
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
    padding: 12px 60px;
    :hover {
        cursor: pointer;
    }
}
`

const IndexPage = () => {
  return (
      <Layout>
        <Main style={pageStyles}>
        <title>Home Page</title>
        <div style={{ display: "grid", maxHeight: 900}} id="homeSection">
            <Video
            
                videoSrcURL={GlacierVideo}
                videoTitle="Official Music Video on YouTube"
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
                        <StaticImage
                        src={"../images/glacierinternational.png"}
                        // style={{
                        //     maxHeight: "112px",
                        //     maxWidth: "797px",
                        //     gridArea: "1/1",
                        //     position: "relative",
                        //     placeItems: "center",
                        //     display: "grid",
                        //     }}
                        >
                    </StaticImage>
                    <p>Glacier International is a one-stop shop for importing, right hand drive re-manufacturing, and customising your Toyota Tundra. With cutting edge technology, the 2022 Toyota Tundra is a half-ton, meticulously engineered heavy metal machine, and our goal is to deliver it to Kiwis who value reliability, performance and class over anything else.</p>
                    <a href="mailto:sales@glacier.nz"><button >Enquire</button></a>
                </CenterContent>
                
            
            </div>
        </div>
        </Main>
    </Layout>
  )
}

export default IndexPage
