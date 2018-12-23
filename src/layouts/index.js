import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer';
import './index.css'

import favicon16 from '../images/favicon16.png'
import favicon32 from '../images/favicon32.png'
import favicon96 from '../images/favicon96.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'Hazel Yang - Product Designer', content: 'I am passionate about solving complex problems.' },
        { name: 'Product Design', content: 'Interaction Design, Visual Design, Illustration' },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon96}` },
      ]}
    />
    <Header/>
    <div>
      {children()}
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
