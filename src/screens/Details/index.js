import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Details() {
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : 'Detalhes da Receita',
            headerRight: () => (
                <Pressable onPress={()=> console.log("tEEESTE")}>
                    <MaterialCommunityIcons name='heart' size={28} color="#ff4141" />
                </Pressable>
            )
        })
    }, [navigation, route.params?.data])

    return (
        <View style={styles.container}>
            <Text style={{ color: '#000000', fontSize: 22 }}>{route.params?.data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue'
    }
})