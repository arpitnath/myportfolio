import Head from 'next/head'
import { Card, CardDeck, Col, Jumbotron, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { projectData, api_config } from '../utils'

export const getStaticProps = async () => {
  var projectArr = []
  const repositories = [
    'myportfolio',
    'cogs_of_life_project',
    'Imgur_Clone_React_PixabayApi'
  ]
  await Promise.all(
    repositories.map(async query => {
      const response = await fetch(
        `https://api.github.com/repos/arpitnath/${query}`,
        api_config
      )
      const data = await response.json()

      projectData(data, projectArr)
    })
  )

  return {
    props: {
      projectArr
    },
    revalidate: 3600
  }
}

const project = ({ projectArr }) => {
  //   console.log(projectArr)

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
            {projectArr.map(card => (
              <Card className={styles.sharedCard} key={card.id}>
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
                          padding: '0 35px',
                          textAlign: 'center',
                          marginLeft: '-18%'
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
