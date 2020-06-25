import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          type="text/javascript"
          src="https://cdn.weglot.com/weglot.min.js"
        ></script>
          <script src={withPrefix("script.js")} type="text/javascript" defer/>
          {/* <script 
                type="text/javascript"
                key="newsletter-start"
                dangerouslySetInnerHTML={{
                    __html: `
                    Weglot.initialize({
                      api_key: 'wg_fe7ca09da0c30c4573b0fd2d79964daf3'
                  })
                  `}}
            /> */}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
