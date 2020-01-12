import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addVehicle } from '../../redux/actions/vehicleActions'
import styles from './styles'


function AddVehicle(props) {
    const [name, setName] = useState('')
    const [model, setModel] = useState('')
    const [message, setMessage] = useState('')
    function onSave() {
        try {
            if (name.trim().length && model.trim().length) {
                props.addVehicle({
                    name,
                    model
                })
                setMessage('Vehicle Added')
                setName('')
                setModel('')
            }
            else {
                setMessage('Required Fields')
            }
        } catch (error) {
            setMessage(error.message)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Vehicle Name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Vehicle Model"
                    value={model}
                    onChangeText={setModel}
                    style={styles.input} />
            </View>

            <TouchableOpacity
                onPress={onSave}
                style={styles.buttonContainer} >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

            {!!message && <View style={styles.message}>
                <Text>{message}</Text>
            </View>}

            <View style={styles.message}>
                <Text>All other values will be set to default values</Text>
            </View>
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addVehicle: addVehicle }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddVehicle)