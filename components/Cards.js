import { Card, Col, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const Cards = ({ data }) => {
  return (
    <>
      <Card className={styles.sharedCard} key={data.id}>
        <Card.Img style={{ padding: '20px' }} variant='top' src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <div className={styles.sectionWrapper}>
            <Row>
              <Col md={6}>
                <a href={data.demo}>Live Demo</a>
              </Col>
              <Col className={styles.cardlink} md={6}>
                <a href={data.repo}>GitHub</a>
              </Col>
            </Row>
            <Card.Text>{data.description}</Card.Text>
            {data.tech.map(t => (
              <div
                key={t.id}
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
              <small className='text-muted'>
                Last updated on <strong>{data.updated}</strong>
              </small>
            </Col>
            <Col md={6}>
              <img className={styles.icon} src='git.svg' />
              <small className='text-muted'>
                <a target='_blank' href={data.repo}>
                  <strong>Source Code</strong>
                </a>
              </small>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Cards
