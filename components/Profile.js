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
        <Col md={6}>
          <Col>
            <h4>{profile.name}</h4>
            {profile.social.map((p, i) => (
              <span key={i}>{p}</span>
            ))}
            <h5>{profile.role}</h5>
          </Col>
          <div className={styles.bio}>
            <Col>working for: {profile.organization}</Col>
            <Col>Skills:</Col>
            <Col>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
              nisi.
            </Col>
          </div>
          <Col>
            <Link href='/projects'>
              <Button>Projects</Button>
            </Link>
            <OverlayTrigger trigger='click' placement='right' overlay={popover}>
              <Button variant='success'>Click me to see</Button>
            </OverlayTrigger>
          </Col>
        </Col>
        <Col md={6}>
          <img src={profile.imgUrl} />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
