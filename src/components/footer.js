import React from "react"
import * as footerStyles from "./footer.module.css"

const SocialIcon = props => (
  <div className={footerStyles.socialIcon}>
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      title={props.title}
    >
      {props.title}
    </a>
  </div>
)

export default function Footer(props) {
  return (
    <div className={footerStyles.footer}>
      <section>
        <p className={footerStyles.footerText}>Let's get in touch</p>
        <div className={footerStyles.footerIcons}>
          <SocialIcon title="Twitter" href="https://twitter.com/thehrlein" />
          <SocialIcon title="Github" href="https://github.com/thehrlein" />
          <SocialIcon
            title="Linkedin"
            href="https://www.linkedin.com/in/tobias-hehrlein/"
          />
          <SocialIcon
            title="Xing"
            href="https://www.xing.com/profile/Tobias_Hehrlein/cv"
          />
        </div>
        <p className={footerStyles.footerText}>&copy; Tobias Hehrlein</p>
      </section>
    </div>
  )
}
