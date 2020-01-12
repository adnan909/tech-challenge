import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    titleContainer: {
        backgroundColor: '#4DBF8C',
        alignItems: 'center'
    },
    title: {
        fontWeight: '400',
        fontSize: 22,
        margin: 5
    },
    modelContainer: {
        backgroundColor: '#a6E099',
        alignItems: 'center',
    },
    model: {
        fontSize: 18
    },
    detailsContainer: {
        alignItems: 'center'
    },
    detailsSubContainer: {
        flexDirection: 'row',
        marginBottom: 15
    },
    details: {
        fontWeight: '500',
        marginLeft: 15
    },
    dateContainer: {
        alignSelf: 'flex-end'
    }
})

export default styles