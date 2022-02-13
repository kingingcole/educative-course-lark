import * as React from "react"
import { graphql } from "gatsby"
import PostCard from "../components/postCard"
import Seo from "../components/seo"
import slugify from "slugify"


const DraftsPage = ({ data }) => {

  return (
    <>
      <Seo title="Internal Drafts" />
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const { title, date, altText, featuredImage } = node.frontmatter
          const url = '/post/' + slugify(title, { lower: true })

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
query DraftBlogPosts {
  allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {status: {eq: "draft"}}}
  ) {
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

export default DraftsPage
