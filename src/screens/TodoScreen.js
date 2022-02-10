import { StyleSheet, View, Text, Button } from "react-native";

const TodoScreen = ({goBack, todo}) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <Button title="Back" onPress={goBack}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default TodoScreen;