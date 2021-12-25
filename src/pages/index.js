import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "../components/postCard"

import Layout from "../components/layout"
import Seo from "../components/seo"

const dummyPosts = [
  {
    title: 'Go to "Using TypeScript"',
    date: "November 24, 2020",
    url: "/using-typescript/",
  },
  {
    title: 'Go to "Using SSR"',
    date: "November 20, 2020",
    url: "/using-ssr/",
  },
  {
    title: 'Go to "Using DSG"',
    date: "November 15, 2020",
    url: "/using-dsg/",
  },
]

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const dummyImageData = data.file.childImageSharp.fluid

  return (
    <Layout>
      <Seo title="Home" />
      <div>
        {dummyPosts.map(post => {
          const { title, date, url } = post
          return (
            <PostCard
              title={title}
              url={url}
              image={dummyImageData}
              date={date}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
