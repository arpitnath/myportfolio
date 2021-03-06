import styles from '../styles/Home.module.css'

const SocialIcons = ({ data }) => {
  return (
    <div className={styles.SocialIcons}>
      {data.map(ac => (
        <div className={styles.sectionContent} key={ac.id}>
          <a target='_blank' href={ac.url}>
            <img src={ac.icon} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default SocialIcons
