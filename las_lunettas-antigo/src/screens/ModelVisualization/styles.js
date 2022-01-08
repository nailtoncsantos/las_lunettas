import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: '#4169e1',
        alignItems: 'center',
    },

    title: {
        fontSize: 26,
        color: '#FFF',
        textAlign: "center",
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30,
        textDecorationLine: 'underline',
    },

    simpleText: {
        fontSize: 18,
        color: '#FFF',
    },
    
    fieldText: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: 35,
        marginBottom: 15,
    },
    
    seeAvaliationsButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC',
        padding: 5,
        borderRadius: 8,
        marginTop: 25,
        padding: 20,
    },

    seeAvaliationsButtonText: {
        color: '#41414d',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
