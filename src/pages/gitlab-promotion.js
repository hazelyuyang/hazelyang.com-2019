import React from 'react'
import Link from 'gatsby-link'
import '../layouts/About.css'
import ContentImage from '../components/ContentImage'
import Card from '../components/card'

const SecondPage = () => (
    <div className="about">
        <div className="aboutContent">
            <h2>Promote Paid Features on GitLab.com</h2>
            <p className="description">UI/UX Design, Strategy</p>
            <ContentImage 
                image={require('../images/gitlab-promotion/meta-issue.png')}
                // description="Description"
            />
            <p>There are a bunch of useful and powerful features on GitLab Enterprise Edition. We wanted to promote those paid features to the unlicensed customers and encouraged them to pay for the plans.</p>
            <p>Since it was a large project, we divided it into several small projects. In that way, it was easy to develop the features and manage the big plan.</p>
            <h3>Goals</h3>
            <ul className="ListLink">
                <li>Promote the paid features to unlicensed users.</li>
                <li>Navigate users to GitLab.com plan page without friction.</li>
            </ul>
            <h3>Target Cusotmers</h3>
            <ul className="ListLink">
                <li>A person who is an owner of an organization on GitLab.com.</li>
                <li>A person who is a member of an organization on GitLab.com.</li>
            </ul>
            <h3>Approach</h3>
            <p>There are four different available plans users can choose: Free, Bronze, Silver and Gold. And the various plans contain different features.</p>
            <ul className="ListLink">
                <li>The 1st step was figuring out the features the plans include.</li>
                <li>The 2nd step was finding a way to encourage users to pay for a license instead of forcing them.</li>
                <li>The last step was creating the design based on <a href="https://docs.gitlab.com/ee/user/permissions.html">users' permission levels</a>.</li>
            </ul>
            <h3>Example</h3>
            <h4><a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/2899">Promote issue boards</a></h4>
            <p>On the issue boards page, you can see a promotion simulated as a typical board. It introduces the advanced features of issue boards and details in GitLab EE. It works as a trigger point to encourage people to pay for a license.</p>
            <p>However, what kind of the promotion content will show in the board depends on users' permission level. There are five user permission levels on GitLab.com:</p>
            <ul className="ListLink">
                <li>Guest</li>
                <li>Reporter</li>
                <li>Developer</li>
                <li>Maintainer</li>
                <li>Owner (Admin)</li>
            </ul>
            <p>If you are an owner, you will see "Start GitLab Enterprise Edition" button. Otherwise, you will only see the message "Contact your administrator to upgrade license" and "Don't show me again" button. Only owners can purchase a license for an organization.</p>
            <ContentImage 
                image={require('../images/gitlab-promotion/issueboard-admin.png')}
                description="The screen owner will see.'Start GitLab Enterprise Edition' button is CTA in the context."
            />
            <ContentImage 
                image={require('../images/gitlab-promotion/issueboard-member.png')}
                description="The screen members will see. Since members cannot purchase a license, we give them a clue to contact the owner if they want to use the advanced features."
            />
            <h4><a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/2946">Promote issue weight</a></h4>
            <p>Promoting issue weight is similar to promoting issue board. What kind of promotion content will show, it depends on the user's permission level.</p>
            <p>The difference was there is no extra place to show the promotion content of Issue weight on the screen. Issue weight is a feature in the right sidebar.</p>
            <p>In the case, we utilized the dropdown to display the message. The advantages were the promotion message only shows up when a user has self-motivation to use issue weight and avoiding disrupting the interaction.</p>
            <ContentImage 
                image={require('../images/gitlab-promotion/issue-weight-admin.png')}
                description="The promotion message shows in a dropdown only when a user click edit to set up the weight of an issue."
            />
            <h4>Related Links</h4>
            <ul className="ListLink">
                <li><a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/2624">Promote features to unlicensed users</a></li>
                <li><a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/2899">Promote issue board features</a></li>
                <li><a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/2946">Promote issue weight in an issue</a></li>
            </ul>
            <h3>Who Else was Involved in the Project</h3>
            <p>Product Mamager, Frontend Developer</p>
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

export default SecondPage