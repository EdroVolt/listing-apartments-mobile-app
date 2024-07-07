import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type ApartmentCardProps = {
  name: string;
  bedRooms: number;
  bathrooms: number;
  image: string;
};

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  name,
  bathrooms,
  bedRooms,
  image,
}) => {
  const fallBackImage = { uri: "./assets/images/apartment-placeholder.png" };

  return (
    <View style={styles.card}>
      <Image
        source={image ? { uri: image } : fallBackImage}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text>Bedrooms: {bedRooms}</Text>
        <Text>Bathrooms: {bathrooms}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    margin: 10,
    width: '95%'
  },
  image: {
    width: "100%",
    height: 150,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ApartmentCard;
