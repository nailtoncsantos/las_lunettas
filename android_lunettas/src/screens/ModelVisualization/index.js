import React, {useEffect, useState, Fragment} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles/';
import {api} from '../../config/axios';

export default function ModelVisualization() {
  const navigation = useNavigation();
  const route = useRoute();
  const {id, name} = route.params.model;

  const [glass, setGlass] = useState();
  useEffect(() => {
    api.get(`/detail/${id}`).then(response => setGlass(response.data));
  }, []);
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  function navigateToAvaliations(glass) {
    navigation.navigate('ModelAvaliations', {glass});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.fieldText}>Formas de Pagamento:</Text>

      {glass && (
        <Fragment>
          {glass.payment_forms.map(function (payment_form, index) {
            return (
              <Text key={index} style={styles.simpleText}>
                {payment_form}
              </Text>
            );
          })}

          <Text style={styles.fieldText}>Cores Disponíveis:</Text>
          {glass.available_colors.map(function (color, index) {
            return (
              <Text key={index} style={styles.simpleText}>
                {color}
              </Text>
            );
          })}
        </Fragment>
      )}
      <TouchableOpacity
        style={styles.seeAvaliationsButton}
        onPress={() => navigateToAvaliations({id: glass.id, name: glass.name})}>
        <Text style={styles.seeAvaliationsButtonText}>
          Avaliações de Clientes
        </Text>
      </TouchableOpacity>
    </View>
  );
}
