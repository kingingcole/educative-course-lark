import React from "react"
import FeatherIcon from "feather-icons-react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const query = graphql`
    query Socials {
      site {
        siteMetadata {
          socials {
            email
            github
            linkedin
            twitter
          }
        }
      }
    }
  `

  const { site } = useStaticQuery(query)
  const { socials } = site.siteMetadata

  return (
    <footer style={styles.wrapper}>
      <div style={styles.iconsContainer}>
        <div>
          <a target="_blank" href={`https://twitter.com/${socials.twitter}`}>
            <FeatherIcon icon="twitter" size="20" color={styles.color} />
          </a>
        </div>
        <div>
          <a target="_blank" href={`https://github.com/${socials.github}`}>
            <FeatherIcon icon="github" size="20" color={styles.color} />
          </a>
        </div>
        <div>
          <a target="_blank" href={`mailto:${socials.email}`}>
            <FeatherIcon icon="mail" size="20" color={styles.color} />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href={`https://linkedin.com/in/${socials.linkedin}`}
          >
            <FeatherIcon icon="linkedin" size="20" color={styles.color} />
          </a>
        </div>
      </div>
      <p style={styles.copy}>© {new Date().getFullYear()}</p>
    </footer>
  )
}

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderTop: "1px solid #00baba",
    padding: "15px",
  },
  iconsContainer: {
    maxWidth: "250px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
  },
  copy: {
    fontSize: "15px",
    color: "#444",
    margin: 0,
  },
  color: "#00baba",
}

export default Footer
