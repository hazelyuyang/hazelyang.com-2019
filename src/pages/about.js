import React from 'react'
import Link from 'gatsby-link'
import '../layouts/About.css'
import List from '../components/List';
import ContentImage from '../components/ContentImage';

const aboutPage = () => (
    <div>
        <div className="about">
            <div className="aboutContent">
                <h2>About 👋🏼 </h2>
                <p>
                Hello, I am Hazel 😊 I am a Taiwan-based Product Designer who grew up in a beautiful island in the Pacific Ocean. I usually work on things in Interaction Design such as User Flows, Wireframing and Prototyping. Creating <a href="https://dribbble.com/huiyuy">Product Illustrations</a> and playing with HTML/CSS are also my hobbies 💻.
                </p>

                <p>Reading, learning new things, and physical training are also my passion. One of my latest read is <a href="https://www.amazon.com/Book-Joy-Lasting-Happiness-Changing/dp/0399185046">The Book of Joy: Lasting Happiness in a Changing World</a>. A skill I've recently aquired is <a href="https://reactjs.org/">React</a>. Most importantly, I owe my life to two tuxedo cats 😻.</p>
                <ContentImage 
                    image={require('../images/cats.jpg')}
                    description="My two bosses: Gua(Left) and Dai(Right)."
                />
                <h3>Career 💼</h3>
                <p>I started my design journey 6 years ago. The way I became a Designer is a unique story.</p>
                <p>
I graduated from Japanese Literature Department at college, and I didn't have practical design experience until I got an intern job in my second year of graduate school. At graduate school, I concentrated on User Interface "Research". It meant I was only able to write essays and do research at the time. It was insufficient if I wanted to be a Product Designer instead of a UX Researcher. I decided to join a start-up to increment my experience and explore what I was most interested in Design. That was the beginning of my career.
                </p>
                <p>I previously contributed to some startups in Taiwan and China like POP (aquired by Marvel) and Wiredcraft. I also ran my freelancing business and worked with many startups to help them create their products. Afterward, I joined <a href="https://about.gitlab.com/">GitLab</a> as a UX Designer and worked remotely. Working at GitLab was a fantastic journey. My colleagues and boss are talented, supportive, and creative. I've learned lots of things from them and appreciated their support.</p>
                <div className="CareerJourney">
                    <List 
                        company="Status"
                        jobtitle="Web Designer"
                        date="Aug 2018 - Nov 2018"
                        link="https://status.im/"
                    />
                    <List 
                        company="GitLab"
                        jobtitle="UX Designer"
                        date="Jun 2016 - Aug 2018"
                        link="https://about.gitlab.com/"
                    />
                    <List 
                        company="Wiredcraft"
                        jobtitle="Lead Product Designer"
                        date="Nov 2015 - Jun 2016"
                        link="https://wiredcraft.com/"
                    />
                    <List 
                        company="Freelance Designer"
                        jobtitle="Freelance Product Designer"
                        date="Aug 2014 - Nov 2015"
                    />
                    <List 
                        company="Woomoo Inc."
                        jobtitle="Junior Product Designer"
                        date="Mar 2014 - Aug 2014"
                        link="https://marvelapp.com/pop/"
                    />
                    <List 
                        company="Patisco.com"
                        jobtitle="Intern - UI/UX Designer"
                        date="Feb 2013 - Feb 2014"
                        link="https://www.patisco.com/"
                    />
                </div>                
                <h3>Articles 📝</h3>
                <p>I shared my thoughts and experience by writing blog.</p>
                <div className="ListLink">
                    <ul>
                        <li><a href="https://wiredcraft.com/blog/how-i-design-kickass-illustrations?platform=hootsuite">How I design kickass illustrations</a></li>
                        <li><a href="https://about.gitlab.com/2018/03/15/working-at-gitlab-affects-my-life/">How working at GitLab has changed my view on work and life</a></li>
                        <li><a href="https://about.gitlab.com/2017/12/04/illustrations-and-icons-on-gitlab-com/">Inside GitLab: Illustrations and icons on GitLab.com</a></li>
                    </ul>
                </div>
                <h3>Contact 📬</h3>
                <div className="ListLink">
                    <p>
                    If you want to work with me or just chat, you can send me an email or drop me a message on Twitter. I will get you back as soon as possible.
                    </p>
                    <ul>
                        <li><a href="mailto:hazelyuyang@gmail.com">hazelyuyang@gmail.com</a></li>
                        <li><a href="https://twitter.com/hazelyuyang">Twitter (@hazelyuyang)</a></li>
                        <li><a href="https://dribbble.com/huiyuy">Dribbble</a></li>                        
                        <li><a href="https://www.linkedin.com/in/hazelyang/">LinkedIn</a></li>
                        <li><a href="https://gitlab.com/hazelyang">GitLab(@hazelyang)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )

export default aboutPage