import React from 'react'

import config from '../config/blog-config'

const Footer: React.FC<Props> = () => {
  return <footer>© 2020 {config.blogAuthor}. All Right Reserved.</footer>
}

export default Footer
