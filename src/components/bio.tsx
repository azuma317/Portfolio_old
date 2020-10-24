import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import type { WindowLocation } from '@reach/router'

type Props = {
  location: WindowLocation
}

const Bio: React.FC<Props> = ({ location }) => {

  const isRoot = location.pathname === "/"
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
            introduction
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  if (isRoot) {
    return (
      <div css={styles.bio}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={styles.bio_image}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div css={styles.bio_description}>
          <strong>{author.name}</strong>
          <br />
          <p>{author.introduction}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div css={styles.bio}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={styles.bio_image}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div css={styles.bio_description}>
          <strong>{author.name}</strong>
          <br />
          <p>{author.introduction}</p>
        </div>
      </div>
    )
  }
}

export default Bio

const styles = {
  bio: css`
    display: flex;
  `,
  bio_description: css`
    display: block;
    margin-left: 1.25rem;
  `,
  bio_image: css`
    margin-right: rhythm(1 / 2);
    margin-bottom: 0;
    min-width: 50;
    border-radius: 100%;
  `,
}
