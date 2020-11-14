import React,{useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

export default function AddTodo({submitHandler}){
    const [text, setText] = useState("")
    const changeHandler=(newText)=>{
        setText(newText)
    }
    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button color="coral" title = "ADD TODO" onPress={()=>submitHandler(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal :8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#bbb'
    },
})