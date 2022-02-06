import * as React from "react"
import { graphql } from "gatsby"
import PostCard from "../components/postCard"
import Seo from "../components/seo"


const IndexPage = ({ data }) => {

  return (
    <>
      <Seo title="Home" />
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const { title, date, altText, featuredImage } = node.frontmatter
          const url = `/${title}`

          return (
            <PostCard
              title={title}
              url={url}
              image={featuredImage.childImageSharp.fluid}
              date={date}
              altText={altText}
            />            
          )
        })}
      </div>
    </>
  )
}

export const blogPostsQuery = graphql`
  query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            altText
            title
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }  
`

export default IndexPage
