import Link from 'next/link'
import {
  Button,
  Row,
  Col,
  Container,
  OverlayTrigger,
  Popover
} from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const Profile = ({ profile }) => {
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
            {profile.social.map((p, i) => (
              <span key={i}>{p}</span>
            ))}
          </Col>
          <div className={styles.bio}>
            <Col className={styles.bioInfo}>
              🛠 &nbsp; working for:{' '}
              <span className={styles.org}>{profile.organization}</span>
              &nbsp;{`${'(' + profile.location + ')'}`}
            </Col>
            <Col className={styles.bioInfo}>
              🦾 &nbsp; Skills:
              <div className={styles.skillSection}>
                {profile.skills.map((skill, ind) => (
                  <div className={styles.skills} key={ind}>
                    <img src={skill.icon} />
                    <p className={styles.skillTitle}>{skill.title}</p>
                  </div>
                ))}
              </div>
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
