import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import EditModal from "../components/EditModal/EditModal";
import AppCard from "../components/ui/AppCard";
import THEME from "../theme";

const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    const [modal, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModal(false);
    }

    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title="Edit" onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Back" color={THEME.GREY_COLOR} onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Delet"
                        color={THEME.DANGER_COLOR}
                        onPress={() => onRemove(todo.id)}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    card: {
        marginBottom: 20,
        padding: 15,
    },
    button: {
        width: "40%",
    },
    title: {
        fontSize: 20,
    },
});

export default TodoScreen;
