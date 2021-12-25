import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const PostCard = ({ title, image, date, url }) => {
  return (
    <div style={styles.wrapper}>
      <Link to={url}>
        <BackgroundImage style={styles.bgImage} Tag="div" fluid={image}>
          <div>
            <h1>{title}</h1>
            <p>{date}</p>
          </div>
        </BackgroundImage>
      </Link>
    </div>
  )
}

const styles = {
  wrapper: {
    height: "300px",
    width: "100%",
    border: "1px solid #00baba",
    marginBottom: "15px",
  },
  bgImage: {
    height: "100%",
    backgroundPosition: "center",
    backgrounSize: "cover",
    padding: "10px",
  },
}

export default PostCard
