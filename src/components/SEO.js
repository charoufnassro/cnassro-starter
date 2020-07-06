import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        SiteDescription: description
        image
        siteUrl
        SiteTitle: title
        twitterUsername
      }
    }
  }
`
const SEO = ({title, description}) => {
  const {site} = useStaticQuery(query)
  const { SiteDescription, SiteTitle, author, image, siteUrl, twitterUsername } = site.siteMetadata
  return <Helmet htmlAttributes={{lang: "en"}} title={`${title} | ${SiteTitle}`} >
    <meta name="description" content={description || SiteDescription} />
    <meta name="image" content={image} />
    <meta name="twitter:card" content="" />
    <meta name="twitter:creator" content={twitterUsername} />
    <meta name="twitter:title" content={SiteTitle} />
    <meta name="twitter:description" content={SiteDescription} />
    <meta name="twitter:image" content={`${siteUrl}${image}`} />
  </Helmet>
}

export default SEO
