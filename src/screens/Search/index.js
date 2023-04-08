import {View, Text, StyleSheet, FlatList} from 'react-native'
import { useRoute } from '@react-navigation/native'
import {useState, useEffect} from 'react'
import api from '../../services/api'
import { FoodList } from '../../components/foodList'

export function Search(){
    const route = useRoute();
    const [receipes, setReceipes] = useState([])

    useEffect(()=>{
        async function fethReceipes(){
            const response = await api.get(`/foods?name_like=${route.params?.name}`)
            setReceipes(response.data)
        }
        fethReceipes();
    },[route.params?.name])

    return(
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={receipes}
                key={(item) => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/>}
                ListEmptyComponent={()=> <Text style={styles.text}>Não encontramos o que está procurando</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingStart: 14, paddingEnd: 14, paddingTop: 16,
    },
    text:{
        fontSize: 16,
        fontWeight: '400',
        
    }
})