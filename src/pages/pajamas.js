import React from 'react'
import Link from 'gatsby-link'
import '../layouts/About.css'
import ContentImage from '../components/ContentImage'
import Card from '../components/card'

const pajamas = props => (
    <div className="about">
        <div className="aboutContent">
            <h2>Pajamas' Logo</h2>
            <p className="description">Logo Design</p>
            <h3>Stroy</h3>
            <p>I am working with GitLab Design team to create the logo for GitLab Design System. The logo will be revealved soon. I am so glad to have the opportunity to work with UX team again after leaving GitLab.</p>
            <h3>Design</h3>
            <p>Coming soon...</p>
            <p>If you can't wait for the update, you can check out the <a href="https://gitlab.com/gitlab-org/design.gitlab.com/issues/88#what-does-success-look-like-and-how-can-we-measure-that">issue</a>.</p>
            <h3>Who else was involved in the project</h3>
                <p>UX Design Team, Product People</p>
                <h3>More projects</h3>
                <div className="ProjectSection">
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
                    title="FLUX: 3D Printer OS App"
                    text="UX Research, UI/UX Design, Visual Design"
                    label="OS App"
                    image={require('../images/bg-jade.jpg')}
                    link="/flux"
                />
                <Card 
                    title="Work with Hazel"
                    text="UI/UX Design, Tuxedo Cats, Reading, HTML/CSS"
                    label="Design"
                    image={require('../images/bg-rose.jpg')}
                    link="/about"
                />
                </div>
        </div>
    </div>

)

export default pajamas