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
  return (
    <div css={styles.bio}>
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
      <div css={styles.bio_description}>
        <strong>{author.name}</strong>
        <br />
        <p>{author.introduction}</p>
      </div>
    </div>
  )
}

export default Bio

const styles = {
  bio: css`
    display: flex;
  `,
  bio_description: css`
    display: block;
  `,
}
