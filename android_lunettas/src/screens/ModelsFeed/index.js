import React, {useState, useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles/';

import {api} from '../../config/axios';

export default function ModelsFeed() {
  const navigation = useNavigation();

  const [glasses, setGlasses] = useState([]);
  useEffect(() => {
    api.get('/list').then(response => setGlasses(response.data));
  }, []);

  function navigateToVisualization(model) {
    navigation.navigate('ModelVisualization', {model});
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={glasses}
        style={styles.modelList}
        keyExtractor={model => String(model.id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({item: model}) => (
          <View style={styles.model}>
            <Text style={styles.modelProperty}>Modelo:</Text>
            <Text style={styles.modelValue}>{model.name}</Text>

            <Text style={styles.modelProperty}>Haste:</Text>
            <Text style={styles.modelValue}>{model.bar}</Text>

            <Text style={styles.modelProperty}>Lente:</Text>
            <Text style={styles.modelValue}>{model.lens}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToVisualization(model)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
