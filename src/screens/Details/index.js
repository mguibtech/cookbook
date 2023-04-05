import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

export function Details() {
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : 'Detalhes da Receita',
            headerRight: () => (
                <Pressable onPress={() => console.log("tEEESTE")}>
                    <MaterialCommunityIcons name='heart' size={28} color="#ff4141" />
                </Pressable>
            )
        })
    }, [navigation, route.params?.data])

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable>
                <View style={styles.playIcon}>
                    <AntDesign name='playcircleo' size={60} color='#fafafa'/>
                </View>
                <Image source={{uri: route.params?.data.cover}} style={styles.cover} />
            </Pressable>
            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <Text style={styles.title_text}>Ingredientes ({route.params?.data.total_ingredients})</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f9ff',
        paddingTop: 14,
        paddingEnd:14,
        paddingStart:14,
    },
    cover:{
        height:200,
        borderRadius: 14,
        width:'100%'
    },
    playIcon:{
        position:'absolute',
        zIndex:9,
        top:0,
        left:0,
        bottom:0,
        right:0,
        alignItems: 'center',
        justifyContent:'center'
    }
})