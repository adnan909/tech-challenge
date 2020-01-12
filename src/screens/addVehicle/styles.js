import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 15
    },
    input: {
        flex: 1,
        borderWidth: 0.5,
        fontSize: 26,
        borderRadius: 5
    },
    buttonContainer: {
        backgroundColor: '#4DBFFC',
        alignSelf: 'center',
        borderRadius: 5,
        alignItems: 'center',
        elevation: 5,
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        shadowColor: '#010101',
        shadowOffset: { height: 0, width: 0 },
    },
    message: {
        marginVertical: 15,
        alignItems: 'center'
    },
    buttonText: { marginHorizontal: 15, fontSize: 24 }
})

export default styles;