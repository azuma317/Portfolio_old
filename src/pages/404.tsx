import React from 'react'
import 'twin.macro'

const NotFoundPage: React.FC<unknown> = function() {
  return <div tw="text-center">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
}

export default NotFoundPage
