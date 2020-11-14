import React,{useState} from 'react';
import { StyleSheet, Alert, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/addTodo'

export default function App() {
  const [todos, setTodos] = useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play on the switch',key:'3'},
    {text:'Learn making app',key:'4'}
  ])

  const pressHandler =(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(item=>item.key!=key)
    })
  }

  const submitHandler =(text)=>{
    if(text.length>3){
      setTodos((prevTodos)=>{
        return [
          ...prevTodos,
          {text:text,key:Math.random().toString()}
        ]
      })
    } else{
      console.log('less than 3')
      Alert.alert('OOPS','Todos must be greater than 3 letters',[
        {text:'CLOSE',onPress:()=>console.log('alert closed')}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('Dismiss Keyboard')
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>  
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex:1,
    padding :40,
  },
  list: { 
    flex: 1,
    marginTop:20,
  }
});
