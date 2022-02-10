import { StyleSheet, View, FlatList } from "react-native";
import AddTodo from "../components/AddTodo/AddTodo";
import Todo from "../components/Todo/Todo";

const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => 
            (<Todo todo={item}
            onRemove={removeTodo} 
            onOpen={openTodo}
            />)}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default MainScreen;