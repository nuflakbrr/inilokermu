import React, { useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router';

import useFetch from '@/hooks/useFetch';
import PopularJobCard from './PopularJobCard';

const PopularJob = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("list", {
    query: "Web Developer",
    location: 'Indonesia',
    language: 'id-ID',
    datePosted: 'month',
    employmentTypes: 'fulltime;parttime;intern;contractor',
    index: 0
  });

  const [selectedJob, setSelectedJob] = useState<string | undefined>();

  const handleCardPress = (item: { id: string }) => {
    router.push(`/job-details/${item.id}`);
    setSelectedJob(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lowongan Populer</Text>
        <TouchableOpacity onPress={() => router.push('/search')}>
          <Text style={styles.headerBtn}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color='#0891b2' />
        ) : error ? (
          <Text style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginHorizontal: 'auto' }}>Oops! Terjadi Kesalahan. SIlahkan coba kembali!</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }: any) => (
              <PopularJobCard data={item} selectedJob={selectedJob} handleCardPress={handleCardPress} />
            )}
            keyExtractor={(item: any) => item.id}
            contentContainerStyle={{ columnGap: 16 }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  headerBtn: {
    fontSize: 14,
    fontWeight: '400',
    color: '#0891b2'
  },
  cardsContainer: {
    marginTop: 16,
  },
});

export default PopularJob