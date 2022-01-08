import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

import {useRoute, useNavigation} from '@react-navigation/native';
import {api} from '../../config/axios';


import styles from './styles/';

export default function ModelAviations() {
  const route = useRoute();
  const navigation = useNavigation();

  const {id, name} = route.params.glass;

  const [aviations, setAviations] = useState();
  useEffect(() => {
    api.get(`/avaliations/${id}`).then(response => setAviations(response.data));
  }, []);
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={aviations}
        keyExtractor={(avaliation, i) => i}
        showsVerticalScrollIndicator={false}
        renderItem={({item: avaliation}) => (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldText}>Cliente:</Text>
            <Text style={styles.commentText}>{avaliation[0]}</Text>
            <Text style={styles.fieldText}>Avaliação:</Text>
            <Text style={styles.commentText}>{avaliation[1]}</Text>
          </View>
        )}
      />
    </View>
  );
}
