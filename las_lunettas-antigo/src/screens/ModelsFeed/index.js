import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styles from './styles/';

export default function ModelsFeed() {
    const navigation = useNavigation();

    const models = [
        {
            id: 1,
            name: 'Modelo 1',
            bar: 'Aluminio',
            lens: 'Simples',
            price: '450,00',
            payment_forms: [
                'À vista', 'À Prazo - 2x sem juros', 'À Prazo - 3x sem juros', 'À Prazo - 4x juros com 1% de juros'
            ],
            available_colors: [
                'Azul', 'Verde', 'Branco'
            ],
            avaliations: [
                ['José Augusto', 'Ótimo'],
                ['Antônio', 'Não gostei das lentes'],
                ['Maria', 'Adorei a armação!'],
            ]
        },
        {
            id: 2,
            name: 'Modelo 2',
            bar: 'Madeira',
            lens: 'Bifocais',
            price: '500,00',
            payment_forms: [
                'À vista', 'À Prazo - 2x sem juros'
            ],
            available_colors: [
                'Branco'
            ],
            avaliations: [
                ['Pedro', 'Poderia ter mais opções de cores...'],
            ]
        },
        {
            id: 3,
            name: 'Modelo 3',
            bar: 'Madeira',
            lens: 'Bifocais',
            price: '690,00',
            payment_forms: [
                'À vista'
            ],
            available_colors: [
                'Preto', 'Branco'
            ],
            avaliations: [
                ['Carlos', 'Muito Bom'],
                ['Ana', 'Maravilhoso.'],
                ['Brenda', 'Gostei muito!'],
            ]
        },
        {
            id: 4,
            name: 'Modelo 4',
            bar: 'Aluminio',
            lens: 'Simples',
            price: '750,00',
            payment_forms: [
                'À vista', 
                'À Prazo - 2x sem juros', 
                'À Prazo - 3x sem juros', 
                'À Prazo - 4x sem juros', 
                'À Prazo - 5x sem juros', 
                'À Prazo - 6x juros com 3% de juros'
            ],
            available_colors: [
                'Azul', 'Verde', 'Vermelho', 'Preto', 'Branco'
            ],
            avaliations: [
                ['Sem depoimentos de clientes', ''],
            ]
        }
    ]

    function navigateToVisualization(model) {
        navigation.navigate('ModelVisualization', { model });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modelos de Óculos</Text>
            <FlatList
                data={models}
                style={styles.modelList}
                keyExtractor={model => String(model.id)}
                showsVerticalScrollIndicator={false} 
                onEndReachedThreshold={0.2}
                renderItem={({ item: model }) => (
                  <View style={styles.model}>
                    <Text style={styles.modelProperty}>Modelo:</Text>
                    <Text style={styles.modelValue}>{model.name}</Text>
        
                    <Text style={styles.modelProperty}>Haste:</Text>
                    <Text style={styles.modelValue}>{model.bar}</Text>
        
                    <Text style={styles.modelProperty}>Lente:</Text>
                    <Text style={styles.modelValue}>{model.lens}</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={() => navigateToVisualization(model)} >
        
                      <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
        
                    </TouchableOpacity> 
                    
                  </View>
                )}
            />
        </View>
    );
};
