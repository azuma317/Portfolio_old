import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import 'twin.macro'

const Bio: React.FC<unknown> = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            base64
            width
            height
            src
            srcSet
          }
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
      <Image
        fixed={data.avatar.childImageSharp.fixed}
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
