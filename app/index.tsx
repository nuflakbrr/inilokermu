import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import { useRouter } from 'expo-router'

import Welcome from '@/components/Home/Welcome'
import PopularJob from '@/components/Home/PopularJob/PopularJob'
import NearbyJob from '@/components/Home/NearbyJob/NearbyJob'

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 25, marginBottom: 95 }}>
      <StatusBar translucent barStyle={'dark-content'} />
      <ScrollView>
        <View style={{
          flex: 1,
        }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <PopularJob />
          <NearbyJob />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home