import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';

import { version } from '../../package.json';
import Accordion from './Accordion'

const Info = () => {
  return (
    <>
      <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Text style={{ color: '#000000', fontSize: 24, fontWeight: '600', paddingHorizontal: 20, paddingTop: 10 }}>IniLokerMu</Text>
      </View>

      <View style={styles.container}>
        <View
          style={[styles.color, { backgroundColor: '#0891b2' }]}
        >
          <Text style={styles.profilePict}>ILM</Text>
          <Text style={styles.infoText}>Tentang Aplikasi</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View
          style={[styles.wrapperInfo, { backgroundColor: '#FFF' }]}
        >
          <Accordion icon={<AntDesign name="questioncircleo" size={16} />} title='Tentang Aplikasi'>
            <Text style={{ fontSize: 14 }}>IniLokerMu adalah sebuah platform aplikasi penyedia lowongan pekerjaan gratis dan terbuka untuk publik.</Text>
          </Accordion>

          <View style={styles.seperator}></View>

          <View style={styles.authorContainer}>
            <View style={styles.wrapper}>
              <Feather name="user" size={18} />
              <Text style={styles.versionTitle}>Author</Text>
            </View>
            <Text onPress={() => router.push('https://github.com/nuflakbrr')} style={{ color: '#0891b2', fontSize: 14, textDecorationLine: 'underline' }}>Naufal Akbar Nugroho</Text>
          </View>

          <View style={styles.seperator}></View>

          <View style={styles.bugContainer}>
            <View style={styles.wrapper}>
              <Ionicons name="bug-outline" size={18} />
              <Text style={styles.versionTitle}>Laporkan Bug</Text>
            </View>
            <Text onPress={() => router.push('mailto:naufalakbar378@gmail.com')} style={{ color: '#0891b2', fontSize: 14, textDecorationLine: 'underline' }}>naufalakbar378@gmail.com</Text>
          </View>
          
          <View style={styles.seperator}></View>

          <View style={styles.versionContainer}>
            <View style={styles.wrapper}>
              <Feather name="info" size={18} />
              <Text style={styles.versionTitle}>Versi Aplikasi</Text>
            </View>
            <Text style={{ color: '#0891b2' }}>{version}</Text>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: -20
  },
  color: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 140,
    borderRadius: 20,
    borderCurve: 'continuous',
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  wrapperInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    borderRadius: 15,
    borderCurve: 'continuous',
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  profilePict: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 5,
    backgroundColor: '#aaaaaa',
    borderRadius: 100,
    fontSize: 30,
    color: '#FFF'
  },
  infoText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    color: '#ffffff',
    // marginTop: 5
  },
  tabsContainer: {
    width: "100%",
    marginTop: 16,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
  },
  tabText: {},
  seperator: {
    height: 10,
    backgroundColor: '#101010'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  authorContainer: {
    paddingVertical: 4,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  bugContainer: {
    paddingBottom: 4,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  versionContainer: {
    paddingBottom: 4,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  versionTitle: {
    fontSize: 16,
  },
})

export default Info;