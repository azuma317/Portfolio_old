import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
            github
          }
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { group: { eq: "Portfolio" } } }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  const portfolio = data.allMarkdownRemark.edges[0].node
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author.name}</strong>
        <br />
        <Link style={{ boxShadow: `none` }} to={portfolio.fields.slug}>
          {portfolio.frontmatter.title}
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          style={{ boxShadow: `none` }}
          to={`https://github.com/${social.github}`}
        ></Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          style={{ boxShadow: `none` }}
          to={`https://twitter.com/${social.twitter}`}
        ></Link>
        <p
          dangerouslySetInnerHTML={{
            __html: portfolio.frontmatter.description || portfolio.excerpt,
          }}
        />
      </p>
    </div>
  )
}

export default Bio
