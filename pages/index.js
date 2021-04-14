import Profile from '../components/Profile'
import { profileData, api_config } from '../utils'
import Layout from '../components/Layout'

export const getStaticProps = async () => {
  const reqData = await fetch(
    `https://api.github.com/users/arpitnath`,
    api_config
  )
  const resp = await reqData.json()
  const data = profileData(resp)
  return {
    props: {
      data
    },
    revalidate: 3600
  }
}

const Home = ({ data }) => {
  return (
    <>
      <Layout>
        <Profile profile={data} />
      </Layout>
    </>
  )
}

export default Home
