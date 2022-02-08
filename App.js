import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AddTodo from './src/AddTodo/AddTodo';
import Navbar from './src/Navbar/Navbar';
import Todo from './src/Todo/Todo';


export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title: title
    }])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id != id))
  }

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
