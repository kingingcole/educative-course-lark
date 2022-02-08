import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { graphql } from 'gatsby'


const PostDetail = ({ pageContext, data }) => {
    const { id } = pageContext
    const { post } = data;

    return (
        <>
            <Seo title={post.frontmatter.title}/>
            <div>
                <p style={styles.title}>{post.frontmatter.title} <span style={styles.id}>(id: {id})</span></p>
                <span style={styles.date}>{post.frontmatter.date}</span>
                <p style={styles.description}>{post.frontmatter.description}</p>
                <div style={styles.imageWrapper}>
                    <GatsbyImage image={getImage(data.post.frontmatter.featuredImage)} alt={post.frontmatter.altText}/>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    style={styles.html}
                />
            </div>
        </>
    )
}

const styles = {
    title: {
        fontSize: '35px',
        marginBottom: '15px'
    },
    id: {opacity: 0.5},
    date: {
        fontSize: '17px',
        color: 'gray'
    },
    description: {
        fontSize: '17px',
        margin: '30px 0'
    },
    imageWrapper: {
        textAlign: 'center',
    },
    html: {
        maxWidth: "700px",
        margin: "20px 0",
        textAlign: "justify",
        lineHeight: "1.5em",
        fontSize: "1rem",
    }
}

export default PostDetail

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        altText
        featuredImage {
          childImageSharp {
            gatsbyImageData(height:500, width: 800, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`