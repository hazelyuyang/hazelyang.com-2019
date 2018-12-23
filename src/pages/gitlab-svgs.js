import React from 'react'
import Link from 'gatsby-link'
import '../layouts/About.css'
import ContentImage from '../components/ContentImage'
import Card from '../components/card'


const GitLab = props => (
        <div className="about">
            <div className="aboutContent">
                <h2>GitLab SVGs</h2>
                <p className="description">Illustration, Icon Design</p>
                <ContentImage 
                    image={require('../images/gitlab-svgs/gitlab-svgs-previewer.png')}
                    // description="Description"
                />
                <h3>Intro</h3>
                <p><a href="https://gitlab.com/gitlab-org/gitlab-svgs">GitLab SVGs</a> is an open source projects, and you can use the illustrations and icons we created for free. You can preview all of the illustrations and icons on the <a href="https://gitlab-org.gitlab.io/gitlab-svgs/">online viewer.</a></p>
                <p>I was one of the maintainers who take care of GitLab SVGs. I defined the visual style of illustrations and icons used on GitLab.com so that the brand impression would be emphasized.</p>
                <h3>Icon System</h3>
                <ContentImage 
                    image={require('../images/gitlab-svgs/icons-overview.png')}
                    description="GitLab icons"
                />
                <h4>Why we create our own icon system</h4>
                <p>GitLab was using <a href="https://fontawesome.com/">Font Awesome</a> for the products at the early stage. However, we sometimes were not able to find an adequate icon in Font Awesome for a specific case. We had to create the icons ourselves.  It caused inconsistent visual language on GitLab.com.</p>
                <p>To unify visual language, we decided to create our own icon system.</p>
                <h4>Outcome</h4>
                <p>We have <a href="https://gitlab.com/gitlab-org/gitlab-ce/issues/33503">a consistent icon set</a> for system notes on Issue and Merge Request pages now.</p>
                <ContentImage 
                    image={require('../images/gitlab-svgs/system-notes.png')}
                    description="Icons for system notes."
                />
                <p>We have the icons for the uniqe cases in GitLab's contextual navigation bar.</p>
                <ContentImage 
                    image={require('../images/gitlab-svgs/contextual-nav.png')}
                    description="The contextual navigation bar."
                />
                <h3>Illustrations</h3>
                <h4>Why we implement illustrations</h4>
                <p>We would like to improve the onboarding experience in those scenarios:</p>
                <ul className="ListLink">
                    <li>A new user uses a feature in the first time.</li>
                    <li>A feature is without any data to show on the page.</li>
                    <li>Encourage people to use the premium features.</li>
                </ul>
                <h4>Outcome</h4>
                <ul className="ListLink">
                    <li>It makes GitLab.com more friendly and interesting.</li>
                    <li>We have <a href="https://gitlab.com/gitlab-org/gitlab-design/issues/47">the specific usage and guidelines</a> for illustrations.</li>
                </ul>
                <ContentImage 
                    image={require('../images/gitlab-svgs/welcome-page.png')}
                    description="The new welcome page helps users start their journey on GitLab.com."
                />
                <ContentImage 
                    image={require('../images/gitlab-geo/geo-blank.png')}
                    description="Friendly illustration and useful copy improve onboarding experience of Geo for the new users 🎨"
                />
                <ContentImage 
                    image={require('../images/gitlab-svgs/error-404.png')}
                    description="Showing the error 404 page with an playful illustration would optimize the experience."
                />
                <ContentImage 
                    image={require('../images/gitlab-svgs/prometheus-graphs-empty.png')}
                    description="Great empty state would improve the experience when there is nothing to show."
                />
                <h3>Related Links</h3>
                <p>If you are interested in knowing more details about GitLab SVGs, illustrations, and icons, the links below could provide you more context:</p>
                <h4>GitLab SVGs and document</h4>
                <ul className="ListLink">
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-svgs">GitLab SVGs</a></li>
                    <li><a href="https://gitlab-org.gitlab.io/gitlab-svgs/">GitLab SVGs Previewer</a></li>
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-design/issues/47">Design Pattern Library - Illustration elements</a></li>
                </ul>
                <h4>Illustrations</h4>
                <ul className="ListLink">
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-ce/issues/25955">GitLab 404 could be more user friendly and contextual</a></li>
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-ce/issues/42558">Prometheus graphs have no empty state when no data is present</a></li>
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-ce/issues/38919">Wiki empty states</a></li>
                </ul>
                <h4>Icons</h4>
                <ul className="ListLink">
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-ce/issues/32894">[Meta] Create Uniquely 'GitLab' Icons</a></li>
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-ce/issues/33503">New icons for system notes</a></li>
                </ul>
                <h3>Who Else was Involved in the Project</h3>
                <p>UX Design Team, Product Manager, Frontend Developer</p>
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
                    title="FLUX: 3D Printer OS App"
                    text="UX Research, UI/UX Design, Visual Design"
                    label="OS App"
                    image={require('../images/bg-jade.jpg')}
                    link="/flux"
                />
                <Card 
                    title="Promote paid features on GitLab"
                    text="UI/UX Design, Strategy"
                    label="web app"
                    image={require('../images/bg-navy.jpg')}
                    link="/gitlab-promotion"
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

export default GitLab