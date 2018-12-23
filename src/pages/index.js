import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi, I am Hazel Yang</h1>
        <h3>Product Design, Visual Design, Illustration</h3>
      </div>
    </div>
    <div className="Cards">
      <div className="CardsGroup">
        <Card 
          title="GitLab Geo"
          text="UI/UX Design, Illustration, Design System"
          label="web app"
          image={require('../images/bg-violet.jpg')}
          link="/gitlab"
        />
         <Card 
          title="GitLab SVGs"
          text="Illustration, Iconography, SVG"
          label="SVG"
          image={require('../images/bg-blue.jpg')}
          link="/gitlab-svgs"
        />
        <Card 
          title="Promote paid features on GitLab.com"
          text="UI/UX Design, Strategy"
          label="web app"
          image={require('../images/bg-navy.jpg')}
          link="/gitlab-promotion"
        />
        <Card 
          title="FLUX: 3D Printer OS App"
          text="UX Research, UI/UX Design, Visual Design"
          label="OS App"
          image={require('../images/bg-jade.jpg')}
          link="/flux"
        />
        <Card 
          title="Pajamas' Logo (Coming soon)"
          text="Logo Design"
          label="brand"
          image={require('../images/bg-purple.jpg')}
          link="/pajamas"
        />
        <Card 
          title="Work with Hazel"
          text="UI/UX Design, Visual Design, Illustration, Tuxedo Cats, Reading, HTML/CSS"
          label="Design"
          image={require('../images/bg-rose.jpg')}
          link="/about"
        />
        {/* <Card 
          title="Shaiwa 曬娃"
          text="UI/UX Design, Visual Design"
          label="iOS app"
          image={require('../images/bg-purple.jpg')}
          link="/shaiwa"
        /> */}
        {/* 
        <Card 
          title="UI/UX Conf Shanghai 2016"
          text="Web Design, Visual Design, Design Strategy"
          label="web"
          image={require('../images/bg-rose.jpg')}
          link="/uiuxconf"
        /> */}
      </div>
    </div>
  </div>
)

export default IndexPage
