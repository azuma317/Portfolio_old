import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { rhythm } from '../utils/typography'

library.add(faTwitter, faGithub)

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
        filter: { frontmatter: { group: { eq: "introduction" } } }
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
  const introduction = data.allMarkdownRemark.edges[0].node
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
        <Link style={{ boxShadow: `none` }} to={introduction.fields.slug}>
          {introduction.frontmatter.title}
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          style={{ boxShadow: `none` }}
          to={`https://github.com/${social.github}`}
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          style={{ boxShadow: `none` }}
          to={`https://twitter.com/${social.twitter}`}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <p
          dangerouslySetInnerHTML={{
            __html:
              introduction.frontmatter.description || introduction.excerpt,
          }}
        />
      </p>
    </div>
  )
}

export default Bio
