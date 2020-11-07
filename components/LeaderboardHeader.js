import {StyleSheet} from 'react-native'
import { Block, Text, Icon } from 'galio-framework';
import React from 'react';


const LeaderboardHeader = () => {
  return (
    <Block style={styles.header}>
      <Text style={{color: 'white', fontSize: 32}}>
        Leaderboard <Icon name='star' family='AntDesign' style={styles.starIcon}/>
      </Text >
    </Block>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#e94560',
    borderBottomWidth: 1,
  },
  starIcon: {
    fontSize: 45,
    color: 'yellow',
  },
});
export default LeaderboardHeader;
