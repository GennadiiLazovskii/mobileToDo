import React from "react";
import { View, Text, StyleSheet } from "react-native";
import THEME from "../../theme";

const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
})

export default Navbar;
