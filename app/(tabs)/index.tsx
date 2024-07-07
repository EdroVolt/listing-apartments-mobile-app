import ApartmentCard from "@/components/ApartmentCard/ApartmentCard";
import { Apartment } from "@/models/Apartment";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Index() {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL}/apartments/`
        );
        const result = await response.json();

        setApartments(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!apartments.length) {
    return <Text>No apartments found :(</Text>;
  }

  return (
    <FlatList
      data={apartments}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Link href={`/apartment-details/${item._id}`}>
          <ApartmentCard
            name={item.name}
            bathrooms={item.bathrooms}
            bedRooms={item.bedRooms}
            image={item.images[0]}
          />
        </Link>
      )}
    />
  );
}
