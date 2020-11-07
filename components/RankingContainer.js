import React, { useEffect, useState } from 'react'
import {StyleSheet} from 'react-native'
import {Block, Text} from 'galio-framework'
import lodash from 'lodash'

import RankingBlock from './RankingBlock'


const RankingContainer = () => {
  const [data, setData] = useState([])
  const [rankingList, setRankingList] = useState([])
  
  

  
  useEffect(() => {
    const fetchData = async (
      ) => {
        const url = 'http://katiparxa.com:8080/api/facets/'
        const requestUrl = `${url}`
        const response = await fetch(requestUrl)
        const result = await response.json()
        setData(result)
      }
  fetchData()
  }, [])


  useEffect(()=> {
    const orderList = data.length > 0 ? lodash.orderBy(data, ['co2Reduced'], ['desc']).map((item, index) => (<RankingBlock username={item.username} co2Reduced={item.co2reduced} key={item.id} rank={index + 1}/>)) : []
    setRankingList(orderList)
  }, [data])
  useEffect(()=> {
    console.log('data:', data)
  })
  return (
    <Block style={styles.rankingContainer}>
      {rankingList  ? rankingList : <Text>No data</Text>}
      <Text>{Array.isArray(rankingList)}</Text>
    </Block>
  )
}

const styles = StyleSheet.create({
  rankingContainer: {
    flex: 9,
    justifyContent: 'center',
    padding: 4,
  },
  test: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default RankingContainer
