import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import 'twin.macro'

const Bio: React.FC<unknown> = function() {
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
          }
        }
      }
    }
  `)

  return (
    <div tw="flex flex-col-reverse items-center mt-12 lg:flex-row lg:justify-between lg:space-x-6">
      <p tw="max-w-3xl font-semibold lg:mt-0 sm:text-4xl sm:text-left md:text-center lg:text-left">
        Hi, I'm Azuma. I'm an infrastructure engineer with deep interest in modern web development.
      </p>
      <div tw="relative">
        <div tw="absolute top-0 flex items-center justify-center w-full h-full">
          <div tw="w-32 h-32 overflow-hidden rounded-full md:h-40 md:w-40 lg:h-48 lg:w-48">
            <GatsbyImage
              image={data.avatar.childImageSharp.gatsbyImageData}
              alt={data.site.siteMetadata.author.name}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
