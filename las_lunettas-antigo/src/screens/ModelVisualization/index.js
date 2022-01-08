import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles/';

export default function ModelVisualization() {
    const navigation = useNavigation();
    const route = useRoute();

    const model = route.params.model;
    
    function navigateToAvaliations(avaliations) {
        navigation.navigate('ModelAvaliations', { avaliations });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modelo:</Text>
            <Text style={styles.simpleText}>{model.name}</Text>
            
            <Text style={styles.fieldText}>Formas de Pagamento:</Text>
            {model.payment_forms.map(function(payment_form) {
                return <Text style={styles.simpleText}>{payment_form}</Text>;
            })}

            <Text style={styles.fieldText}>Cores Disponíveis:</Text>
            {model.available_colors.map(function(color) {
                return <Text style={styles.simpleText}>{color}</Text>;
            })}

            <TouchableOpacity style={styles.seeAvaliationsButton} onPress={() => navigateToAvaliations(model.avaliations)}>
                <Text style={styles.seeAvaliationsButtonText}>Avaliações de Clientes</Text>
            </TouchableOpacity>
        </View>
    );
};
