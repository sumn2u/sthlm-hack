import React from 'react'
import {StyleSheet} from 'react-native'
import {Block, Text} from 'galio-framework'
import lodash from 'lodash'

import data from '../mockupData'
import RankingBlock from './RankingBlock'

const RankingContainer = () => {
  const rankingList = lodash.orderBy(data, ['co2Reduced'], ['desc']).map((item, index) => (<RankingBlock username={item.username} co2Reduced={item.co2Reduced} key={item.key} rank={index + 1}/>))
  return (
    <Block style={styles.rankingContainer}>
      {rankingList}
    </Block>
  )
}

const styles = StyleSheet.create({
  rankingContainer: {
    flex: 9,
    backgroundColor: '#1a1a2e',
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
