import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'

import ColorList from '../../components/ColorList'

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginVertical: 25 }}>
      <StatusBar translucent barStyle={'dark-content'} />
      <ScrollView>
        <View style={{
          flex: 1,
        }}>
          <ColorList color='#0891b2' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search