import {StyleSheet} from 'react-native'
import { Block, Text, Icon } from 'galio-framework';
import React from 'react';


const LeaderboardHeader = () => {
  return (
    <Block style={styles.header}>
      <Text style={{color: 'black', fontSize: 28}}>

        Leaderboard <Icon name='star' family='AntDesign' style={styles.starIcon}/>
      </Text >
    </Block>
  );
};


const styles = StyleSheet.create({  
  header: {
    flex: 1,
    backgroundColor: '#14A38B',

    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#e94560',
    borderBottomWidth: 1,
  },
  starIcon: {
    fontSize: 45,
    color: 'orange',
  },
});
export default LeaderboardHeader;
