import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />

        <title>Início | Move It</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>

    </div>
  )
}
