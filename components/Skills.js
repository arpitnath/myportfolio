import React from 'react'
import styles from '../styles/Home.module.css'

const Skills = ({ skills }) => {
  return (
    <>
      <div className={styles.skillSection}>
        {skills.map((skill, ind) => (
          <div className={styles.skills} key={ind}>
            <img src={skill.icon} />
            <p className={styles.skillTitle}>{skill.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills
