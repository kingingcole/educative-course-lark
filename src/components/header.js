import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header style={styles.wrapper} >
    <Link to='/' style={styles.siteTitle}>{siteTitle}</Link>
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <Link activeStyle={styles.activeLink} to='/' style={styles.navListItem}>Blog</Link>
        <Link activeStyle={styles.activeLink} to='/me' style={styles.navListItem}>Me</Link>
        <Link activeStyle={styles.activeLink} to='/works' style={styles.navListItem}>Works</Link>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 50px',
    borderBottom: '1.7px solid #00baba',
    marginBottom: '50px',
    backgroundColor: '#00baba',
  },
  siteTitle: {
    margin: 0,
    padding: 0,
    color: '#fff',
    fontWeight: 600,
    textDecoration: 'none'
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '30%',
  },
  navList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '20px 0',
    margin: 0,
  },
  navListItem: {
    listStyle: 'none',
    margin: 0,
    color: '#fff',
    fontWeight: 500,
    textDecoration: 'none',
  },
  activeLink: {
    color: 'black'
  }
}

export default Header
