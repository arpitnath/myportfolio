import Head from 'next/head'
import { Card, CardDeck, Col, Jumbotron, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const project = () => {
  const cardData = [
    {
      id: 0,
      title: 'Card Title',
      demo: 'https://github.com/',
      repo: 'https://github.com/repo',
      image: 'nextjs.svg',
      description:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer',
      tech: [
        {
          id: 0,
          title: 'javascript',
          icon: 'js.svg'
        },
        {
          id: 1,
          title: 'python',
          icon: 'python.svg'
        },
        {
          id: 2,
          title: 'PostGreSql',
          icon: 'psql.svg'
        }
      ],
      updated: 'Last updated 3 mins ago',
      lastCommit: 'merge staging to prod'
    },
    {
      id: 1,
      title: 'Card Title',
      demo: 'https://github.com/',
      repo: 'https://github.com/repo',
      image: 'nextjs.svg',
      description:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer',
      tech: [
        {
          id: 0,
          title: 'javascript',
          icon: 'js.svg'
        },
        {
          id: 1,
          title: 'python',
          icon: 'python.svg'
        },
        {
          id: 2,
          title: 'PostGreSql',
          icon: 'psql.svg'
        }
      ],
      updated: 'Last updated 3 mins ago',
      lastCommit: 'merge staging to prod'
    },
    {
      id: 2,
      title: 'Card Title',
      demo: 'https://github.com/',
      repo: 'https://github.com/repo',
      image: 'nextjs.svg',
      description:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer',
      tech: [
        {
          id: 0,
          title: 'javascript',
          icon: 'js.svg'
        },
        {
          id: 1,
          title: 'python',
          icon: 'python.svg'
        },
        {
          id: 2,
          title: 'PostGreSql',
          icon: 'psql.svg'
        }
      ],
      updated: 'Last updated 3 mins ago',
      lastCommit: 'merge staging to prod'
    }
  ]
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
        {/*@Fonts */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
        </style>
      </Head>

      <div className={styles.main}>
        <Jumbotron style={{ marginTop: '-10%' }}>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </Jumbotron>
        <div>
          <CardDeck className={styles.Wrapper}>
            {cardData.map(card => (
              <Card key={card.id}>
                <Card.Img
                  style={{ padding: '20px' }}
                  variant='top'
                  src={card.image}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <div className={styles.sectionWrapper}>
                    <Row>
                      <Col md={6}>
                        <a href={card.demo}>Live Demo</a>
                      </Col>
                      <Col className={styles.cardlink} md={6}>
                        <a href={card.repo}>GitHub</a>
                      </Col>
                    </Row>
                    <Card.Text>{card.description}</Card.Text>
                    {card.tech.map(t => (
                      <div
                        style={{
                          padding: '0px',
                          textAlign: 'center',
                          marginLeft: '-10%'
                        }}
                        className={styles.sectionContent}
                      >
                        <img src={t.icon} />
                        <p className={styles.skillTitle}>{t.title}</p>
                      </div>
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col md={6}>
                      <img className={styles.icon} src='git.svg' />
                      <small className='text-muted'>{card.updated}</small>
                    </Col>
                    <Col md={6}>
                      <img className={styles.icon} src='git.svg' />
                      <small className='text-muted'>{card.lastCommit}</small>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            ))}
          </CardDeck>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default project
