import React from 'react'
import {StyleSheet,  Text} from 'react-native'
import {Block, Icon} from 'galio-framework'

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
      <Text style={{ color: '#fceef5', fontSize: 17 }}>
  {rank}. {username}{'  '}{crown}
      </Text>
      <Text style={{ fontSize: 14, color: '#fceef5' }}>
        <Text style={{ color: '#e94560', fontStyle: 'italic', fontSize: 28 }}>
          {co2Reduced}
        </Text>
        {'  '}
        tons of CO2
      </Text>
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
    borderColor: '#215591',
    backgroundColor: '#0f3460',
  },
});
export default RankingBlock
