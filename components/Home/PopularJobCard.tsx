import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  data: any;
  selectedJob: string | undefined;
  handleCardPress: (item: { id: string }) => void;
}

const PopularJobCard = ({data, selectedJob, handleCardPress}: Props) => {
  const container = (selectedJob: string | undefined, data: any) => ({
    ...styles.container,
    backgroundColor: selectedJob === data.id ? '#0891b2' : "#FFF",
  });
  
  const logoContainer = (selectedJob: string | undefined, data: any) => ({
    ...styles.logoContainer,
    backgroundColor: selectedJob === data.id ? "#0891b2" : '#FFF',
  });
  
  const jobName = (selectedJob: string | undefined, data: any) => ({
    ...styles.jobName,
    color: selectedJob === data.id ? '#FFF' : '#0891b2',
  });

  return (
    <TouchableOpacity
      style={container(selectedJob, data)}
      onPress={() => handleCardPress(data)}
    >
      <TouchableOpacity style={logoContainer(selectedJob, data)}>
        <Image
          source={{
            uri: data?.image
              ? data.image
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='cover'
          style={{...styles.logoImage, overflow: 'hidden'}}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {data.company}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={jobName(selectedJob, data)} numberOfLines={1}>
          {data.title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.location}>{data.datePosted}</Text>
          <Text style={styles.location}> - {data.location.length >= 15 ? data.location.substring(0, 15) + '...' : data.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: 24,
    borderRadius: 15,
    justifyContent: "space-between",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  companyName: {
    fontSize: 16,
    color: "#B3AEC6",
    marginTop: 12 / 1.5,
  },
  infoContainer: {
    marginTop: 5,
  },
  jobName: {
    fontSize: 20, 
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: 16 - 2,
    color: "#B3AEC6",
  },
})

export default PopularJobCard