import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'

const iconSearch = require('../../assets/icons/search.png');

type Props = {
  searchTerm: string;
  setSearchTerm: (search: string) => void;
  handleClick: () => void;
}

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: Props) => {
  const [activeJobType, setActiveJobType] = useState("fulltime");

  const router = useRouter();

  const jobTypes = ["fulltime", "parttime", "intern", "contractor"];

  const tab = (active: string, item: any) => ({
    ...styles.tab,
    borderColor: active === item ? '' : '#c3c3c3',
  });

  const tabTextStyle = (active: string, item: any) => ({
    ...styles.tabText,
    color: active === item ? '' : '#cecece',
  });

  const formatJobTypes = (type: string) => {
    switch (type) {
      case 'fulltime':
        return 'Penuh Waktu'
      case 'parttime':
        return 'Paruh Waktu'
      case 'intern':
        return 'Magang'
      default:
        return 'Kontrak'
    }
  }

  return (
    <>
      <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Text style={{ color: '#000000', fontSize: 24, fontWeight: '600', paddingHorizontal: 20, paddingTop: 10 }}>IniLokerMu</Text>
      </View>
      <View style={styles.container}>
        <View
          style={[styles.color, { backgroundColor: '#0891b2' }]}
        >
          <Text style={styles.welcomeText}>Cari Lowongan Kerja Sesuai Passion Kamu!</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
              placeholder='Lowongan Kerja apa yang Anda cari?'
            />
          </View>

          <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
            <Image
              source={iconSearch}
              resizeMode='contain'
              style={{ ...styles.searchBtnImage, overflow: 'hidden' }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tabsContainer}>
          <FlatList
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`);
                }}
              >
                <Text style={tabTextStyle(activeJobType, item)}>{formatJobTypes(item)}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            contentContainerStyle={{ columnGap: 12 }}
            horizontal
          />
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
    marginBottom: -5
  },
  color: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 80,
    borderRadius: 20,
    borderCurve: 'continuous',
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginTop: 5
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: '#0891b2CC',
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: '#ffffff',
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
})

export default Welcome;