// @ts-nocheck
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import localStorage from 'react-native-universal-localstorage';

export default function App() {
  const [items, setItems] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    localStorage.init().then(() => {
      updateItems();
      setLoaded(true);
    });
  }, []);

  const updateItems = () => {
    const keys = localStorage.getAllKeys().sort();
    const newItems = keys.map((key) => ({
      key,
      value: localStorage.getItem(key),
    }));
    setItems(newItems);
  };

  const addItem = () => {
    const key = `key${items.length + 1}`;
    const value = `value${items.length + 1}`;
    localStorage.setItem(key, value).then(() => updateItems());
  };

  const removeItem = () => {
    if (items.length > 0) {
      localStorage
        .removeItem(items[items.length - 1].key)
        .then(() => updateItems());
    }
  };

  const clearAll = () => {
    localStorage.clear().then(() => updateItems());
  };

  if (!loaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LocalStorage Demo</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={removeItem}>
          <Text style={styles.buttonText}>Remove Last Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={clearAll}>
          <Text style={styles.buttonText}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Stored Items:</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.key}: {item.value}
          </Text>
        )}
        ListEmptyComponent={<Text>No items stored.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});
