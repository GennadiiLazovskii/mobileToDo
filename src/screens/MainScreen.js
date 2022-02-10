import { StyleSheet, View, FlatList, Image } from "react-native";
import AddTodo from "../components/AddTodo/AddTodo";
import Todo from "../components/Todo/Todo";

const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    let content = (
        <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={todos}
            renderItem={({ item }) => (
                <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
            )}
        />
    );

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.image} source={require("../img/no-items.png")} />
            </View>
        );
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
});

export default MainScreen;
