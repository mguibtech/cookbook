import { Text, StyleSheet } from 'react-native'
import { View } from 'moti'

export function Logo() {
    return (
        <View
            from={{
                opacity: 0,
                translateX: -70
            }}
            animate={{
                opacity: 1,
                translateX: 0
            }}
            transition={{
                type: 'spring',
                duration: 850
            }}
            style={styles.container}>
            <Text style={styles.logo}>Receita Fácil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4cbe6c',
        alignSelf: "flex-start",
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8
    },
    logo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})