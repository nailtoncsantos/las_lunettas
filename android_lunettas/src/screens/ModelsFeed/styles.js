import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: '#4169e1',
    },

    title: {
        fontSize: 26,
        color: '#FFF',
        textAlign: "center",
        fontWeight: 'bold',
    },

    modelList: {
        marginTop: 32,
    },

    model: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    
    modelProperty: {
        fontSize: 18,
        color: '#41414d',
        fontWeight: 'bold',
    },

    modelValue: {
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
        color: '#737380',
    },
    
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC',
        padding: 5,
        borderRadius: 8
    },
    
    detailsButtonText: {
        color: '#41414d',
        fontSize: 15,
        fontWeight: 'bold',
    }
});
