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
        marginTop: 20,
        marginBottom: 30,
        textDecorationLine: 'underline',
    },

    fieldContainer: {
        backgroundColor: '#41414d',
        margin: 5,
        padding: 15,
        borderRadius: 8,
    },

    fieldText: {
        fontSize: 20,
        color: '#CCC',
        fontWeight: 'bold',
    },

    commentText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        marginStart: 20,
        marginBottom: 10,
    },
});
