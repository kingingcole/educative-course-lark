import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const PostCard = ({ title, image, date, url, altText }) => {
  return (
    <div style={styles.wrapper}>
      <Link to={url} style={{color: 'white'}}>
        <BackgroundImage style={styles.bgImage} Tag="div" fluid={image} alt={altText}>
          <div style={styles.innerWrapper}>
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
    height: "400px",
    width: "100%",
    border: "1px solid #00baba",
    marginBottom: "15px",
    background: 'black'
  },
  bgImage: {
    height: "100%",
    backgroundPosition: "center",
    backgrounSize: "cover",
  },
  innerWrapper: {
    background: 'rgba(4, 53, 53, 0.56)', 
    height: '100%', 
    width:'100%',
    padding: '10px'
  }
}

export default PostCard
