import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col className={`text-center py-3 ${styles.footerContent}`}>
              © 2021 - All rights reserved. Made with{' '}
              <span className={styles.heartSymb}>❤</span> by Arpit
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
