import React from 'react'
// import Link from 'gatsby-link'
import '../layouts/About.css'
import ContentImage from '../components/ContentImage'
import Card from '../components/card'


const GitLab = props => (
        <div className="about">
            <div className="aboutContent">
                <h2>GitLab Geo</h2>
                <p className="description">UX/UI Design, Illustration, Design System</p>
                <ContentImage 
                    image={require('../images/gitlab-geo/geo-dashboard.png')}
                    // description="Description"
                />
                <h3>Intro</h3>
                <p>Geo is a premium feature on GitLab Enterprise Edition. It allows a widely distributed team to work efficiently as Geo reduces the time it takes to clone and fetch large repos. It is very useful on GitLab EE.</p>
                <p>Our Geo team found more and more problems in Geo as more new features were added. Since we don't ship a feature with dramatic changes, we prefer to ship small segments of a big change in the monthly milestone so that we are flexible to receive feedback and iterate quickly.</p>
                {/* Issue 01 */}
                <h3>The First Iteration</h3>
                <h4>Problems</h4>
                <p>There are a few problems we were going to address:</p>
                <ul className="ListLink">
                    <li>Difficult to get the crucial information</li>
                    <p>As you can see in the screenshot of the old Geo page below, there was a lot of information on Geo page, such as “Repositories synced”, “Health Status”, “LFS” etc., so users were hard to browse the info quickly and effortlessly.</p>
                    <li>Inconsistent UI: Applying uppercase and lowercase text in a mixed way</li>
                    <p>You can also notice the way it displayed the names of each item were inconsistent. Some of them were in Uppercase for the first letter of the word, but some of them were shown in a way mixed uppercase and lowercase.</p>
                    <li>Unexpected interaction: Editable form and Geo Nodes list display on the same page.</li>
                    <p>The editable form should not always show on the Geo dashboard page. It should show on a separate page when users need to edit. So that it would be consistent with other features' interaction.</p>
                    <li>Doesn’t provide any help for users to configure Geo when there is no data.</li>
                </ul>
                <ContentImage 
                    image={require('../images/gitlab-geo/geo-dashboard-old.png')}
                    description="A bunch of information in a single page, and it relied on plain text heavily to show the info."
                />
                <h4>Goals</h4>
                <ul className="ListLink">
                    <li>Users are able to interpret the info easily.</li>
                    <li>The UI and interaction are consistent with the other pages on GitLab.com.</li>
                    <li>Improve the user experience when users are new to GitLab Geo.</li>
                    <li>Optimize the user experience on mobile.</li>
                </ul>
                <h4>Approach</h4>
                <ul className="ListLink">
                    <li>Clean up the user interface.</li>
                    <li>Separate the editable form from the Geo dashboard page.</li>
                    <li>Show the error message correctly in a noticeable way.</li>
                    <li>Adjust the layout with good responsive design on mobile.</li>
                </ul>
                <ContentImage 
                    image={require('../images/gitlab-geo/geo-error.png')}
                    description="Display the data with progress bars instead of plain text so it would be intuitive to learn."
                />
                <ContentImage 
                    image={require('../images/gitlab-geo/geo-edit.png')}
                    description="The editable form is on a separate page."
                />
                <ContentImage 
                    image={require('../images/gitlab-geo/geo-blank.png')}
                    description="Friendly illustration and useful copy improve onboarding experience for the new users 🎨"
                />
                <ContentImage 
                    image={require('../images/gitlab-geo/geo-dashboard--mobile.png')}
                    description="Display the items in a way which is easy to read on mobile."
                />
                <h3>The Second Iteration</h3>
                <h4>Problems</h4>
                <p>In the second iteration, we were going to address: </p>
                <ul className="ListLink">
                    <li>The Geo Dashboard were getting more complex as many new features were added.</li>
                    <p>It was getting harder to interpret the data and status. Also, it was also difficult to read a long list of items.</p>
                </ul>
                <ContentImage 
                    image={require('../images/gitlab-geo/geo-dashboard-old-2.png')}
                    description="There were more than eleven items display at once in the Geo table 😱"
                />
                <h4>Goals</h4>
                <ul className="ListLink">
                    <li>Users are able to absorb the data and status easily.</li>
                    <li>Dashboard displays data and info in a clear way even when it has more than three nodes.</li>
                </ul>
                <h4>Approach</h4>
                <ul className="ListLink">
                    <li>Redesign the information structure.</li>
                    <p>So that the data with low priority can be hidden. Categorize the data can have the layout clean and let users find it effortlessly.</p>
                    <li>Redesign the UI completely based on the new information structure.</li>
                    <p>In the new designs, most of the items are collapsible as default so it can prevent the page from becoming very long when there is a lot of information.</p>
                </ul>
                <ContentImage 
                    image={require('../images/gitlab-geo/structure.png')}
                    description="Categorized the items so they could be hidden if they are not the information users need to check all the time."
                />
                <ContentImage 
                    image={require('../images/gitlab-geo/geo-dashboard-new-collapse.png')}
                    description="Based on the new structure, most of the information could be collapsed as default. It prevents users from the distraction."
                />
                <ContentImage 
                    image={require('../images/gitlab-geo/geo-dashboard-new-expand.png')}
                    description="If a user wants to get more details, you can expand the section to see more info."
                />
                <h3>Document Geo Table Components</h3>
                <p>During the time, Design team were working on our own Design System. Geo table design was added to GitLab Design System("Pajamas"). The documentation of Geo table is <a href="https://gitlab.com/gitlab-org/gitlab-design/issues/86">here</a>.</p>
                <ul className="ListLink">
                    <li>Created reusable components based on Atomic Design in Sketch.</li>
                    <li>Wrote down the usage and context of the components.</li>
                </ul>
                <h3>Related Links</h3>
                <p>If you are interested in getting more details about GitLab Geo and how we envolved the designs, the links below could provide you more context:</p>
                <ul className="ListLink">
                    <li><a href="https://about.gitlab.com/solutions/geo/">GitLab Geo</a></li>
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/3195">Improve Geo Nodes admin screen</a></li>
                    <li><a href="Improve geo nodes dashboard">Improve geo nodes dashboard</a></li>
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/4880">Expose Geo project/file registry details in the UI: Design artifact</a></li>
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/4909">Geo: Timeout reaching the secondary may cause the primary to display stale data</a></li>
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/6851">Add Geo project/file registry details in the UI</a></li>
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/1363">Add a blank state for the GitLab Geo feature in the Administration panel</a></li>
                    <li><a href="https://gitlab.com/gitlab-org/gitlab-design/issues/86">Design Pattern Library - Add Geo table</a></li>
                </ul>
                <h3>Who Else was Involved in the Project</h3>
                <p>Product Manager, Frontend Developer, Backend Developer</p>
                <h3>More Projects</h3>
                <div className="ProjectSection">
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