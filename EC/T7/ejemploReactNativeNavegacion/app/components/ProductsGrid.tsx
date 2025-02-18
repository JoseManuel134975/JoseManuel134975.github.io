import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import products from "../data/products.json";

type ItemProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const Item = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: ItemProps) => (
  <View style={styles.item}>
    <img src={image} alt={description} width='200px'/>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Products = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
          />
        )}
        // keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
  },
});

export default Products;
