import Head from 'next/head'
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

export default function Home() {
  const profile = {
    name: 'Arpit Nath',
    role: 'Frontend Developer',
    social: [
      'http://github.ac',
      'http://linkedIn.ac',
      'http://arpitnath42@gmail.com'
    ],
    organization: 'Innoloft Gmbh',
    imgUrl: '/vercel.svg'
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
    <>
      <Head>
        <title>Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossOrigin='anonymous'
        />
      </Head>

      <div className={styles.main}>
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Enim, nisi.
                </Col>
              </div>
              <Col>
                <Link href='/projects'>
                  <Button>Projects</Button>
                </Link>
                <OverlayTrigger
                  trigger='click'
                  placement='right'
                  overlay={popover}
                >
                  <Button variant='success'>Click me to see</Button>
                </OverlayTrigger>
              </Col>
            </Col>
            <Col md={6}>
              <img src={profile.imgUrl} />
            </Col>
          </Row>
        </Container>
      </div>

      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col className={`text-center py-3 ${styles.footerContent}`}>
              © 2021 - All rights reserved. Made with ❤ by Arpit
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
