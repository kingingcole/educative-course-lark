import React from 'react'
import Seo from "../components/seo"
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby';

const Me = () => {

    const imageQuery = graphql`
        query {
            image: file(relativePath: {eq: "flower-vase.jpg"}) {
                childImageSharp {
                    gatsbyImageData(width: 400, placeholder: DOMINANT_COLOR)
                }
            }
        }
    `
    const data = useStaticQuery(imageQuery);

    return (
        <>
            <Seo title="Me" description="This page talks about who I am."/>
            <p>Hey, look at me! I'm super cool!</p>

            <h2>Static Image</h2>
            <div>
                <h3>Using local file</h3>
                <StaticImage src="../images/spiderman.jpg" width={400} height={400} alt='Spiderman'/>
            </div>
            <br />

            <div>
                <h3>Using remote file</h3>
                <StaticImage src="https://placedog.net/500/280" alt='A dog' placeholder='dominantColor'/>
            </div>
            <br />

            <h2>Gatsby Image</h2>
            <div>
                <GatsbyImage image={getImage(data.image)} alt="A flower in a vase"/>
            </div>
        </>
    )
}

export default Me;