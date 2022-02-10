import { useState } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Modal,
    Alert,
} from "react-native";
import THEME from "../../theme";

const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert(
                "Error!",
                `The minimum name length is 3 characters. Now ${title.trim().length} characters.`
            );
        } else {
            onSave(title)
        }
    };

    const cancelModal = () => {
        setTitle(value)
        onCancel()
    }

    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="Enter the title"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button
                        title="Cancel"
                        color={THEME.DANGER_COLOR}
                        onPress={cancelModal}
                    />
                    <Button title="Save" onPress={saveHandler} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: "80%",
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default EditModal;
