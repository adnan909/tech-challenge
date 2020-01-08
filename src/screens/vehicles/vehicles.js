import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import Error from '../../components/error/error';
import Spinner from '../../components/spinner/spinner';
import VehicleCard from '../../components/vehicle/card';

export default function Vehicles(props) {
    const { loading, error, data, refetch, networkStatus, fetchMore } = useQuery(allVehicles, { variables: { first: 20 } })

    if (loading) return <Spinner />
    if (error) return <Error error={error} />

    return (
        <SafeAreaView>
            <FlatList
                numColumns={2}
                refreshing={networkStatus === 4}
                onRefresh={refetch}
                data={data.allVehicles.vehicles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <VehicleCard {...item} navigation={props.navigation} />}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (networkStatus === 7 && data.allVehicles.pageInfo.hasNextPage)
                        fetchMore({
                            variables: { first: 10, after: data.allVehicles.pageInfo.endCursor },
                            updateQuery: (previousResult, { fetchMoreResult }) => {
                                if (!fetchMoreResult)
                                    return previousResult
                                return {
                                    allVehicles: {
                                        ...fetchMoreResult.allVehicles,
                                        pageInfo: fetchMoreResult.allVehicles.pageInfo,
                                        totalCount: fetchMoreResult.allVehicles.totalCount,
                                        vehicles: previousResult.allVehicles.vehicles.concat(fetchMoreResult.allVehicles.vehicles),
                                    }
                                };
                            },
                        });
                }}
            />
        </SafeAreaView>
    )
}


const allVehicles = gql`query AllVehicles($first:Int,$after:String){
    allVehicles(first:$first,after:$after){
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      vehicles {
        name
        model
        vehicleClass
        manufacturers
        costInCredits
        length
        crew
        passengers
        maxAtmospheringSpeed
        cargoCapacity
        consumables
        created
        edited
        id
      }
    }
  }`