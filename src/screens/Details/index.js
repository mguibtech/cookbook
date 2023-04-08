import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons'

import { Ingredientes } from '../../components/ingredientes'
import { Instructions } from '../../components/instructions'

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
        <ScrollView contentContainerStyle={{paddingBottom:14}} style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable>
                <View style={styles.playIcon}>
                    <AntDesign name='playcircleo' size={60} color='#fafafa'/>
                </View>
                <Image source={{uri: route.params?.data.cover}} style={styles.cover} />
            </Pressable>
            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <Text style={styles.ingredientesText}>Ingredientes ({route.params?.data.total_ingredients})</Text>
                </View>
                <Pressable>
                    <Feather name='share-2' size={24} color='#121212'/>
                </Pressable>
            </View>

            {route.params?.data.ingredients.map((item)=> (
                <Ingredientes key={item.id} data={item}/>
            ))}

            <View style={styles.structionsArea}>
                <Text style={styles.structionsText}>Modo de Preparo</Text>
                <Feather
                    name='arrow-down'
                    size={24}
                    color='#fff'
                />
            </View>

            {route.params?.data.instructions.map((item, index) => (
                <Instructions key={item.id} data={item} index={index}/>
            ))}
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
        top:0, left:0, bottom:0, right:0,
        alignItems: 'center',
        justifyContent:'center'
    },
    headerDetails:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:14
    },
    title:{
        fontSize: 18,
        marginTop: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    ingredientesText:{
        marginBottom: 14,
        fontSize: 16,

    },
    structionsArea:{
        backgroundColor: '#4cbe6c',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 4,
        marginBottom: 14,
    },
    structionsText:{
        fontSize: 18,
        fontWeight: 500,
        color: '#fff',
        marginRight: 16
    }
})