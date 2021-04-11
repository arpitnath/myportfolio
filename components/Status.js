import { Button, OverlayTrigger, Popover } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const Status = ({ resume }) => {
  const popover = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Scan for Resume</Popover.Title>
      <Popover.Content>
        Download{' '}
        <strong>
          <a target='_blank' href={`${resume.resumeUrl}`}>
            resume
          </a>
        </strong>
        <img className={styles.qrcode} src={resume.resumeQRCode} />
      </Popover.Content>
    </Popover>
  )
  return (
    <>
      <OverlayTrigger trigger='click' placement='right' overlay={popover}>
        <Button className={`${styles.btn} ${styles.resumeBtn}`}>
          ☞ &nbsp; Open for Offers!
        </Button>
      </OverlayTrigger>
    </>
  )
}

export default Status
