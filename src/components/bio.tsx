import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import 'twin.macro'

const Bio: React.FC<unknown> = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 50
            height: 50
            placeholder: BLURRED
            layout: FIXED
          )
        }
      }
      site {
        siteMetadata {
          author {
            name
            introduction
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div tw="flex">
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author.name}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
      <div tw="block ml-5">
        <strong>{author.name}</strong>
        <br />
        <p>{author.introduction}</p>
      </div>
    </div>
  )
}

export default Bio
