import React from 'react'
import Link from 'gatsby-link'
import '../layouts/About.css'
import ContentImage from '../components/ContentImage'
import Card from '../components/card'


const flux = props => (
    <div className="about">
            <div className="aboutContent">
                <h2>Flux: 3D Printer Operation app</h2>
                <p className="description">UX Research, UI/UX Design, Visual Design</p>
                <ContentImage 
                    image={require('../images/flux/flux-cover.png')}
                    // description="Description"
                />
                <h3>Intro</h3>
                <p>FLUX is a 3D printer allows people to print out and scan 3D models. The time I worked with FLUX team was after their successful <a href="https://www.kickstarter.com/projects/2117384013/flux-all-in-one-3d-printer-unlimited-elegant-simpl">Kickstarter campaign</a>. They were going to produce the machine and create their 3D printer operation app.</p>
                <p>Their target customers were both professional players and general people who were new to 3D printing.</p>
                <h3>Problems</h3>
                <p>Before jumping into doing design, I did <a href="https://docs.google.com/spreadsheets/d/173v_jgmkGFJyzR4a3eKukJ5luSWx2kUiDXRmuPNWeoY/edit?usp=sharing">competitors analysis, interviewed the users, and conducted the heuristic evaluation</a> (The note was in Chinese) to understand the problems users encountered. The following were the problems of the competitors' apps I noticed:</p>
                <ContentImage 
                    image={require('../images/flux/flux-research.png')}
                    description="The problems I noticed after research."
                />
                <ul className="ListLink">
                    <li>The apps were hard to use for newbies. Instead, they only aimed for professional users.</li>
                    <li>Unclear instruction on configuring the machine and the app.</li>
                    <li>Unuseful error messages while the machine didn't work out.</li>
                    <li>Users didn't know where to start to use the apps.</li>
                </ul>
                <p>Those problems could be where we start to design the app.</p>
                {/* Persona */}
                <h3>Persona</h3>
                <p>Based on the research I did, I figured out two target customers: </p>
                <ul className="ListLink">
                    <li>Professional player who already have many 3D printers. He is very familiar with the operation apps and the 3D printing materials.</li>
                    <li>Entry-level player who is interested in new technology and just spends some time on 3D printer in free time.</li>
                </ul>
                <p>The profiles includes the persona's career, age, frustrations, description and expectations.</p>
                <ContentImage 
                    image={require('../images/flux/persona-professional.jpg')}
                    description="Professional player profile."
                />
                <ContentImage 
                    image={require('../images/flux/persona-entry.jpg')}
                    description="Entry-level player profile."
                />
                {/* Goals */}
                <h3>Goals</h3>
                <ul className="ListLink">
                    <li>Both professional and newbie players were able to operate the app without effort.</li>
                    <li>Users could set up the machine and the app easily.</li>
                    <li>Users were able to fix the simple errors themselves.</li>
                    <li>Improved the onboarding experience.</li>
                </ul>
                <h3>Assumptions</h3>
                <p>I assumed that we should have two modes in the app: Advanced mode and quick-print mode. My assumptions were going to be validated after user testing.</p>
                <h3>Approach</h3>
                <h4>User Flows</h4>
                <p>Creating user flows by text is the way I prefer since it is very easy to adjust the flows by copying and pasting. Creating user flows by text is the way I prefer since it is straightforward to adjust the flows by copying and pasting. The user flows would work as the reference while designing the real screen.</p>
                <ContentImage 
                    image={require('../images/flux/flux-userflows.png')}
                    description="Creating user flows by plain text."
                />
                
                <h4>Wireframing</h4>
                <p>I created the wireframes for the user flows we had concern for and put them on the prototyping tool to test. There were two modes of the app. One is the advanced mode, and the other one is quick-print mode.</p>
                <p>In advanced mode, users were able to configure the complex parameters like quality, fill, temperature, etc. In the quick-print mode, users were only able to change the basic settings like speed and material.</p>
                <ContentImage 
                    image={require('../images/flux/flux-wf.png')}
                    description="Wireframes for testing."
                />
                
                <h4>User Testing</h4>
                <p>Based on the assumption I made, we were going to conduct the testing with two groups to validate it - professional users and newbies. And, Both of the groups were going to play with these two modes.</p>
                <h4>Result</h4>
                <p>We observed that the professional users felt bored while using the quick-print mode since they wanted more control over operating the 3D printer. Professional users had in-depth knowledge of 3D printing, and they were very familiar with the parameters. Otherwise, when they were playing with the advanced mode, they felt satisfied and fun.</p>
                <p>However, when newbies were playing with the advanced mode, they didn't know how to use it although we had provided the support. The advanced mode scared them. They felt more comfortable while playing with the quick-print mode than the advanced mode.</p>
                <p>The result validated that if we would like to create an app which works for both professions and newbies, we should provide two different modes to satisfy the diverse needs.</p>
                
                <h3>Visual Design</h3>
                <p>The visual language inherited from the brand style while FLUX team were working on the Kickstarter campaign.  Its colors were black, grey, and white. It is sharp and modern.</p>
                <ContentImage 
                    image={require('../images/flux/flux-configureation.png')}
                    description="Improved the configuration process between the machine and the app."
                />
                <ContentImage 
                    image={require('../images/flux/flux-quick-print.png')}
                    description="In quick mode, users were able to set up the basic parameters."
                />
                <ContentImage 
                    image={require('../images/flux/flux-advanced.png')}
                    description="In advanced mode, users were able to customize a lot of parameters in an advanced way."
                />
                <ContentImage 
                    image={require('../images/flux/flux-monitor.png')}
                    description="When the printer was working, users could monitor the temperature and the progress."
                />
                <h3>Who Else was Involved in the Project</h3>
                <p>Product People, Frontend Developer, Hadrware Developer</p>
                <h3>More Projects</h3>
                <div className="ProjectSection">
                    <Card 
                        title="GitLab Geo"
                        text="UI/UX Design, Illustration, Design System"
                        label="web app"
                        image={require('../images/bg-violet.jpg')}
                        link="/gitlab"
                    />
                    <Card 
                        title="Promote paid features on GitLab"
                        text="UI/UX Design, Strategy"
                        label="web app"
                        image={require('../images/bg-navy.jpg')}
                        link="/gitlab-promotion"
                    />
                    <Card 
                        title="GitLab SVGs"
                        text="Illustration, Iconography, SVG"
                        label="SVG"
                        image={require('../images/bg-blue.jpg')}
                        link="/gitlab-svgs"
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

export default flux