import React, { useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Error from '../../components/error/error';
import Spinner from '../../components/spinner/spinner';
import VehicleCard from '../../components/vehicle/card';
import { fetchVehicles, fetchMoreVehicles } from "../../redux/actions/vehicleActions";
import styles from './styles';

function Vehicles(props) {

    useEffect(() => {
        props.fetchVehicles()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                ListEmptyComponent={props.data.errorMessage ? <Error error={props.data.errorMessage} /> : null}
                ListFooterComponent={props.data.isFetchingMore ? <Spinner /> : null}
                refreshing={props.data.isFetching}
                onRefresh={props.fetchVehicles}
                data={props.data.vehicles}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <VehicleCard vehicle={item} navigation={props.navigation} />}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (!props.data.isFetchingMore && props.data.next)
                        props.fetchMoreVehicles(props.data.next);
                }}
            />
        </SafeAreaView>
    )
}

const mapStateToProps = state => {
    return {
        data: state
    }
}

export default connect(mapStateToProps, { fetchVehicles, fetchMoreVehicles })(Vehicles)