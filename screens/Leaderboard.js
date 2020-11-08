import React from 'react'
import LeaderboardHeader from '../components/LeaderboardHeader'
import RankingContainer from '../components/RankingContainer'

const Leaderboard = () => {
  return (
    <>
     <LeaderboardHeader/> 

     <RankingContainer date={new Date().toISOString()} />
    </>
  )
}

export default Leaderboard
