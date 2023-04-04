import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Logo } from '../../components/Logo'
import { useState } from 'react'

export function Home(){

    const [inputValue, setInputValue] = useState("");

    function handleSearch(){
        console.log('Vc clicou')
        console.log(inputValue)

    }

    return(
        <SafeAreaView style={styles.container}>
            <Logo/>

            <Text style={styles.title}>Econtre a receita</Text>
            <Text style={styles.title}>que combina com você!</Text>

            <View style={styles.form}>
                <TextInput
                    placeholder='Digite o nome da comida...'
                    style={styles.input}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <MaterialIcons name='search' size={28} color='#4cbe6c'/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e0e0e',

    },
    form:{
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
        borderBottomColor: '#f3f9ff',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input:{
        width: '90%',
        height: 54,
        maxWidth: '90%'
    }
})