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
        fontWeight: '500',
        fontSize: 16, margin: 5
    },
    modelContainer: {
        backgroundColor: '#a6E099',
        alignItems: 'center',
        fontSize: 12
    },
    detailsContainer: {
        alignItems: 'center'
    },
    detailsSubContainer: {
        flexDirection: 'row',
        marginBottom:15
    },
    details: {
        fontWeight: '500',
        marginLeft:15
    },
    dateContainer: {
        alignSelf: 'flex-end'
    }
})

export default styles