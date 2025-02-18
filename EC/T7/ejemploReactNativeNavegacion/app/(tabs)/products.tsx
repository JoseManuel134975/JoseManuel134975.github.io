import { Text, View, StyleSheet } from 'react-native';
import Products from '../components/ProductsGrid';

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products screen</Text>
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
