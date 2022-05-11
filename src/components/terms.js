import React, {useState} from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const sidebarStyles = ({menuOpen}) => css`
${'' /* display: none; */}
${'' /* overflow-x: scroll; */}
${'' /* white-space: nowrap; */}
font-family: visby,sans-serif;
transition: .5s;
transition-delay: 0;
position: fixed;
color: white;
justify-content: center;
align-items: center;
top: 0;
right:0;
opacity: 0;
z-index: -400;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
transform: translateY(-3%);
div {
    width: 800px;
    
}
button {
    padding: 10px 40px;
}
button:hover {
    cursor: pointer;
}
${menuOpen === true &&`
z-index: 100;
display: flex;
transition-delay: .2s;
transition: opacity .8s, transform .5s;
transition-timing-function: ease-out;
opacity: 1;
transform: translateX(0%);
`}
`
const backdropStyle = ({menuOpen}) => css`
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

${menuOpen === true &&`
z-index: 50;
transition: background-color .3s, z-index .1s;
background-color: rgba(0,0,0,.8);
`}
`




export default function Terms(){

    const [menuOpen, setMenuOpen] = useState(true);
    let DrawerLinks = (
        <div css={sidebarStyles({ menuOpen })}>
            <div>
                <h1>Terms & Conditions</h1>
                <p>
                Glacier International is an independent vehicle importer & trader, and is not affiliated in any way with Toyota Motor Corporation.  All logos, images, products and company names and trademarks including TOYOTA, TUNDRA and TRD are and remain the property of their respective owners. 
                </p>
                <p>
                All goods and services offered by Glacier International are not provided by or with the authorisation of Toyota Motor Corporation and Glacier International is not affiliated or endorsed by Toyota Motor Corporation in any way. 
                </p>
                <p>
                "TOYOTA" and "TUNDRA" are registered trademarks of Toyota Motor Corporation. TUNDRA is used in the title of this website solely to identify the subject of interest to the website. Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. and their affiliated companies are not responsible in any way for the contents of the site, which are solely the responsibility of the publisher. The contents of the website do not reflect the policy or opinions of Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. or any of Toyota's affiliated companies. This website is not affiliated with, endorsed, sponsored, or supported by Toyota Motor Corporation, Toyota Motor Sales, U.S.A., Inc. or any of Toyota's affiliated companies.
                </p>
                <button onClick={() => {setMenuOpen(false)}}>Accept Terms & Enter Website</button>
            </div>
            
        </div> 
    )
    console.log(menuOpen)
    return (
    <div>    

    {DrawerLinks}
    <div css={backdropStyle({ menuOpen })}/>
    </div>
    )
}