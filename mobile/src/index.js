import React, { useEffect, useState } from 'react'
import { View,ScrollView,FlatList, Text,SafeAreaView ,StyleSheet, StatusBar,TouchableOpacity } from 'react-native'
import api from './services/api'

// todos os componentes por padrão possuem display: flex
// nao existe herança de estilos 

export default function App() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('/')            
            .then(res => setProjects(res.data))


    }, [])

    async function addProject(){
        const response = await api.post('/',{
            title:`novo projeto ${Date.now()}`,
            owner:'joao victor'
        })
        setProjects([ ...projects, response.data])
    }

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor="#7159c1" />
            <SafeAreaView style={styles.container}>
                <FlatList            
                data={projects} // precisa ser um array
                keyExtractor={project => project.id}
                renderItem={({ item: project })=>(
                    <Text style={styles.text}>{project.title}</Text>
                )}
                /> 
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={addProject}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </SafeAreaView>

            {/* <View style={styles.container}>
                {projects.map(project => <Text key={project.id} style={styles.text}>{project.title}</Text>)}
                <Text style={styles.text}> oi </Text>
            </View> */}
            {/* <ScrollView style={styles.container}>
                {projects.map(project => <Text key={project.id} style={styles.text}>{project.title}</Text>)}
                <Text style={styles.text}>Hello</Text>
            </ScrollView> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        // justifyContent: 'center',
        // alignItems: 'center'

    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    button:{
        backgroundColor:'#fff',
        margin:20,
        height:50,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:16
        
    }
    
})