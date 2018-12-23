import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)


class Header extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled:true })
    } else {
      this.setState({ hasScrolled:false })
    } 
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <div className="InternalLink">
            <Link to="/"><img className={this.state.hasScrolled ? 'shrink' : 'imgExpand'} src={require('../images/logo.svg')} /></Link>
            <Link to="/">Works</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="Network">
            <a href="https://dribbble.com/huiyuy"><FontAwesomeIcon icon={['fab', 'dribbble']} size="16px" /></a>
            <a href="https://twitter.com/hazelyuyang"><FontAwesomeIcon icon={['fab', 'twitter']}  size="16px" /></a>
            <a href="https://www.linkedin.com/in/hazelyang/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="16px" /></a>
            <a href="https://www.instagram.com/hazelyuyang/"><FontAwesomeIcon icon={['fab', 'instagram']} size="16px" /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header


