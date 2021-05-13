import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Footer from "./footer"
import * as layoutStyles from "./layout.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

// StaticQuery is a API that allows non-page components
// to retrieve data via GraphQL queries
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className={layoutStyles.site}>
      <header className={layoutStyles.siteHeader}>
        <Link to="/">
          <h1 class={layoutStyles.siteHeaderText} style={{float:`left`}}>{data.site.siteMetadata.title}</h1>
        </Link>
        <ul className={layoutStyles.siteNavigation}> 
          <ListLink to="/">Home</ListLink>
          <ListLink to="/apps/">Apps</ListLink>
          <ListLink to="/about-css-modules/">About css modules</ListLink>
        </ul>
      </header>
      <div className={layoutStyles.siteContent}>{children}</div>
      <Footer/>
    </div>
  )
}
