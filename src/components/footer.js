import React from "react"
import * as footerStyles from "./footer.module.css"
import { useStaticQuery, graphql } from "gatsby"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const SocialIcon = props => (
  <div className={footerStyles.socialIcon}>
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      title={props.title}
    >
      <FontAwesomeIcon icon={props.icon} color="white" size="lg" />
    </a>
  </div>
)

export default function Footer(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
  return (
    <div className={footerStyles.footer}>
      <section>
        <p className={footerStyles.footerText}>Let's get in touch</p>
        <div className={footerStyles.footerIcons}>
          <SocialIcon
            title="Linkedin"
            href="https://www.linkedin.com/in/tobias-hehrlein/"
            icon={faLinkedin}
          />
          <SocialIcon
            title="Xing"
            href="https://www.xing.com/profile/Tobias_Hehrlein/cv"
            icon={faXing}
          />
          <SocialIcon
            title="Twitter"
            href="https://twitter.com/thehrlein"
            icon={faTwitter}
          />
          <SocialIcon
            title="Github"
            href="https://github.com/thehrlein"
            icon={faGithub}
          />
          <SocialIcon
            title="Mail"
            href="mailto:tobiashehrlein@gmail.com"
            icon={faEnvelope}
          />
        </div>
        <p className={footerStyles.footerText}>&copy; {data.site.siteMetadata.author}</p>
      </section>
    </div>
  )
}
