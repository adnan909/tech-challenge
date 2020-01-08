import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flex: 1,
        height: Dimensions.get('window').height / 4,
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        shadowColor: '#010101',
        shadowOffset: { height: 0, width: 0 },
        borderRadius: 5,
    },
    titleContainer: {
        backgroundColor: '#4DBF8C',
        alignItems: 'center'
    },
    title: {
        fontWeight: '500',
        fontSize: 16, margin: 5
    },
    modelContainer: {
        backgroundColor: '#a6E099',
        alignItems: 'center',
        fontSize: 12
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    detailsSubContainer: {
        flexDirection: 'row',
        marginLeft: 5
    },
    details: {
        fontWeight: '500',
        marginLeft: 5
    },
    dateContainer: {
        alignSelf: 'flex-end',
        marginRight: 5
    }
})

export default styles