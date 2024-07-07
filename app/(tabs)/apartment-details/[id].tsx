import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function ApartmentDetails() {
  const { id } = useLocalSearchParams();
  const [apartment, setApartment] = useState<any>(null);

  useEffect(() => {
    const fetchApartment = async () => {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL}/apartments/${id}/`
        );
        const result = await response.json();
        setApartment(result);
      } catch (error) {
        console.error("Error fetching apartment details:", error);
      }
    };
    fetchApartment();
  }, [id]);

  const fallBackImage = { uri: "../assets/images/apartment-placeholder.png" };

  if (!apartment) {
    return <Text>Loading...</Text>;
  }

  if (!apartment.name) {
    return <Text>Something went wrong :(</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Name: {apartment.name}</Text>
        <Text style={styles.detailText}>
          Description: {apartment.description}
        </Text>
        <Text style={styles.detailText}>Bedrooms: {apartment.bedRooms}</Text>
        <Text style={styles.detailText}>Bathrooms: {apartment.bathrooms}</Text>
        <Text style={styles.detailText}>Size: {apartment.size}m²</Text>
        <Text style={styles.detailText}>Price: ${apartment.price}</Text>
      </View>
      <Image
        source={
          apartment.images[0] ? { uri: apartment.images[0] } : fallBackImage
        }
        style={styles.image}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
});
