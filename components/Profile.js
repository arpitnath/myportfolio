import Link from 'next/link'
import { useState } from 'react'
import {
  Button,
  Row,
  Col,
  Container,
  OverlayTrigger,
  Popover
} from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Skills from './Skills'

const Profile = ({ profile }) => {
  const [skills2, setSkills2] = useState(false)

  const showSkills2 = () => {
    setSkills2(!skills2)
  }

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  )
  return (
    <Container>
      <Row>
        <Col className={styles.content} md={6}>
          <Col className={styles.role}>
            <span>Hi there 😁 &nbsp;I'm</span>
            <h1>{profile.name}</h1>
            <h5>{profile.role}</h5>
            <div
              style={{ marginLeft: '-60px', marginBottom: '-60px' }}
              className={styles.sectionWrapper}
            >
              {profile.social.map(ac => (
                <div className={styles.sectionContent} key={ac.id}>
                  <a target='_blank' href={ac.url}>
                    <img src={ac.icon} />
                  </a>
                </div>
              ))}
            </div>
          </Col>
          <div className={styles.bio}>
            <Col className={styles.bioInfo}>
              🛠 &nbsp; working for:{' '}
              <span className={styles.org}>{profile.organization}</span>
              &nbsp;{`${'(' + profile.location + ')'}`}
            </Col>
            {/*@Skills */}
            {!skills2 && (
              <Col className={styles.bioInfo}>
                🦾 &nbsp; Skills:
                <Skills skills={profile.skills} />
              </Col>
            )}
            {/*@Familiar tools & Skills */}

            <Col className={styles.bioInfo}>
              🦾 &nbsp; Familiar with:{' '}
              <Button
                className={styles.showSkills}
                variant='light'
                onClick={showSkills2}
              >
                <img src='/tool.svg' />
                View
              </Button>
              {skills2 && <Skills skills={profile.skills2} />}
            </Col>

            <Col className={styles.bioInfo}>
              🧑🏻‍💻 &nbsp; Bio: <span>{profile.bio}</span>
            </Col>
          </div>
          <Col className={`${styles.btnLinks} ${styles.bioInfo}`}>
            <Link href='/projects'>
              <Button className={styles.btn}>Projects</Button>
            </Link>
            <OverlayTrigger trigger='click' placement='right' overlay={popover}>
              <Button className={`${styles.btn} ${styles.resumeBtn}`}>
                Click me to see
              </Button>
            </OverlayTrigger>
          </Col>
        </Col>
        <Col className={styles.displayPicture} md={6}>
          <img src={profile.imgUrl} />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
