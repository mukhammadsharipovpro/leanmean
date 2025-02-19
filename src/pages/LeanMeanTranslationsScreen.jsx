import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import LeanMeanHeader from '../components/LeanMeanHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <LeanMeanHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('ATP Tour', '02.07 12:30', 'Novak Djokovic \n' + 'Carlos Alcaraz')}
        {renderBroadcast('WTA Tour', '04.07 15:00', 'Iga Swiatek \n' + 'Aryna Sabalenka')}
        {renderBroadcast('Wimbledon', '06.07 16:45', 'Men’s Final')}
        {renderBroadcast('US Open', '08.07 20:00', 'Women’s Final')}
        {renderBroadcast('Aus Open', '10.07 18:15', 'Daniil Medvedev \n' + 'Jannik Sinner')}
        {renderBroadcast('French Open', '12.07 14:30', 'Rafael Nadal \n' + 'Stefanos Tsitsipas')}
        {renderBroadcast('Laver Cup', '14.07 17:45', 'Team Europe \n' + 'Team World')}
        {renderBroadcast('Davis Cup', '16.07 13:00', 'Italy \n' + 'USA')}
        {renderBroadcast('Billie Jean', '18.07 19:15', 'Spain \n' + 'Germany')}
        {renderBroadcast('Next Gen', '20.07 21:30', 'Finals')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
  },
  league: {
    fontSize: 25,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '60%',
    marginLeft: 15,
    opacity: 0.8,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
