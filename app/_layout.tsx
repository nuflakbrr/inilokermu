import React from 'react'
import { Tabs } from 'expo-router'

import TabBar from '@/components/TabBar'

const _layout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name='index' options={{ headerShown: false, title: 'Beranda' }} />
      <Tabs.Screen name='search/index' options={{ headerShown: false, title: 'Eksplor' }} />
      <Tabs.Screen name='app-info' options={{ headerShown: false, title: 'App Info' }} />
    </Tabs>
  )
}

export default _layout