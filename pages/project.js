import { CardDeck, Jumbotron } from 'react-bootstrap'
import Cards from '../components/Cards'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { projectData, api_config } from '../utils'

export const getStaticProps = async () => {
  var projectArr = []
  const repositories = ['myportfolio', 'cogs_of_life_project', 'spacex']
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
  return (
    <>
      <Layout>
        <Jumbotron className={styles.jumboHeader}>
          <h1>Side Projects !</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </Jumbotron>
        <div className={styles.Cards}>
          <CardDeck className={styles.Wrapper}>
            {projectArr.map(card => (
              <Cards key={card.id} data={card} />
            ))}
          </CardDeck>
        </div>
      </Layout>
    </>
  )
}

export default project
