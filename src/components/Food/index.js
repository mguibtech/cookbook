import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

export function Food({ data }){
    <TouchableOpacity style={styles.container}>
        <Image 
            source={{uri: data.cover}}
            style={styles.cover}
        />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 14,
    },
    cover:{
        width: '100%',
        height: 200
    }
})