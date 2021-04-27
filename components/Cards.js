import { Card, Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Skills from './Skills'

const Cards = ({ data }) => {
  return (
    <>
      <Card className={styles.sharedCard}>
        {(data.id === 359473391 && (
          <Card.Img
            style={{ padding: '20px', marginBottom: '-30px' }}
            variant='top'
            src='spacex.png'
          />
        )) ||
          (data.id === 356618670 && (
            <Card.Img
              style={{ padding: '20px', marginBottom: '-30px' }}
              variant='top'
              src='portfolio.png'
            />
          )) ||
          (data.id === 326847239 && (
            <Card.Img
              style={{ padding: '20px', marginBottom: '-30px' }}
              variant='top'
              src='cogs.png'
            />
          ))}

        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <div className={styles.sectionTechWrapper}>
            <Row>
              <Col md={6}>
                <a href={data.demo}>
                  <span
                    className='iconify'
                    data-icon='whh:website'
                    data-inline='false'
                  ></span>
                  Live Demo
                </a>
              </Col>
              <Col className={styles.cardlink} md={6}>
                <a href={data.repo}>
                  <span
                    className='iconify'
                    data-icon='logos:github-octocat'
                    data-inline='false'
                  ></span>
                  GitHub
                </a>
              </Col>
            </Row>
            <Card.Text className={styles.cardDescription}>
              {data.description}
            </Card.Text>
          </div>
          <div className={styles.techWrapper}>
            <Skills skills={data.tech} wrapper='sectionTechWrapper' />
          </div>
        </Card.Body>
        <Card.Footer>
          <Container>
            <Row className={styles.CardFooterContent}>
              <Col md={6}>
                <span
                  className='iconify'
                  data-icon='ant-design:field-time-outlined'
                  data-inline='false'
                ></span>
                <small className='text-muted'>
                  Last updated on <br />
                  <span>
                    <strong className={styles.updatedDate}>
                      {data.updated}
                    </strong>
                  </span>
                </small>
              </Col>
              <Col md={6} className={styles.Col2}>
                <span
                  className='iconify'
                  data-icon='logos:git'
                  data-inline='false'
                ></span>
                <br />
                <small className='text-muted'>
                  <span className={styles.updatedDate}>
                    <a target='_blank' href={data.repo}>
                      <strong>Source Code</strong>
                    </a>
                  </span>
                </small>
              </Col>
            </Row>
          </Container>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Cards
