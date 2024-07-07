import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)/index" options={{ title: 'Apartments'}} />
      <Stack.Screen name="(tabs)/apartment-details/[id]" options={{ title: 'Apartment Details'}} />
    </Stack>
  );
}
