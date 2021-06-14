import { CardDeck, Jumbotron } from 'react-bootstrap'
import Link from 'next/link'
import Cards from '../components/Cards'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { projectData, api_config } from '../utils'

export const getStaticProps = async () => {
  var projectArr = []
  const repositories = ['myportfolio', 'cogs_of_life_project', 'spacex']
  await Promise.all(
    repositories.map(async (query) => {
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
    <div className={styles.Project}>
      {/* <Link href='/'>
        <a href='/'>Go Back</a>
      </Link> */}
      <Layout>
        <Jumbotron className={styles.jumboHeader}>
          <h1>Side Projects !</h1>
        </Jumbotron>

        <CardDeck className={styles.Wrapper}>
          {projectArr.map((card) => (
            <Cards key={card.id} data={card} />
          ))}
        </CardDeck>
      </Layout>
    </div>
  )
}

export default project
