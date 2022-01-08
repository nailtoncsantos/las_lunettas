import React from 'react';
import { FlatList, Text, View } from "react-native";

import { useRoute } from '@react-navigation/native';

import styles from './styles/';

export default function ModelAvaliations() {
    const route = useRoute();

    const avaliations = route.params.avaliations;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Avaliações</Text>
            
            <FlatList
                data={avaliations}
                keyExtractor={(avaliation, i) => i}
                showsVerticalScrollIndicator={false} 
                renderItem={({ item: avaliation }) => (
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