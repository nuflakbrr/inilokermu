import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'

import Info from '@/components/AppInfo/Info'

const AppInfo = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 25, marginBottom: 95 }}>
      <StatusBar translucent barStyle={'dark-content'} />
      <ScrollView>
        <View style={{
          flex: 1,
        }}>
          <Info />
          {/* <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <PopularJob />
          <NearbyJob /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AppInfo