import React from 'react'
import faker from 'faker';

import {StyleSheet,  Text, Image} from 'react-native'
import {Block, Icon} from 'galio-framework'

// import userImage from '../assets/images/user.jpg'
//const userImage = faker.image.avatar;
const RankingBlock = ({username, co2Reduced, rank}) => {
  const size = 28;
  const gold = '#fcba03';
  const silver = '#ada489';
  const bronze = '#cf4915';
  let crown;
  switch (rank) {
    case 1:
      crown = <Icon name="crown" family='Foundation' size={size} color={gold} />;
      break;
    case 2:
      crown = <Icon name="crown" family='Foundation' size={size} color={silver} />;
      break;
    case 3:
      crown = <Icon name="crown" family='Foundation' size={size} color={bronze} />;
      break;
    default:
      crown = null;
      break;
  }
  
  return (
    <Block style={styles.rankingBlock}>
      <Block style={styles.floatLeft}>
        <Block>
          <Image style={styles.image} source={{uri: faker.image.imageUrl()}}/>
          </Block> 
        <Text>{faker.name.findName()} {crown}</Text>
      </Block>

      <Block style={styles.floatRight}>
        <Text>saved {' '}
          <Text style={{color: '#14A38B', fontSize: 24}}>
            {co2Reduced} 
          </Text>
          {' '}kg today
        </Text>
      </Block>

    </Block>
  )
}

const styles = StyleSheet.create({
  rankingBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
    alignItems: 'center',
    margin: 3,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
  }, 
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'grey',
    marginRight: 10
  },
  floatLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  floatRight: {

  }

});
export default RankingBlock
