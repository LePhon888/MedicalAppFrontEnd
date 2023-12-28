import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import COLORS from "../constants/colors";
import Entypo from "react-native-vector-icons/Entypo";

/**
 *
 * 
 * @param title is the title of header
 * @param navigation can be not empty. This is the navigation of current screen, must be belong to stack
 * @param isCustomEvent can be empty. This is the flag if the user want to handle on back instead of back to previous screen
 * @param OnBack can be empty. Incase you use the isCustomEvent then you can pass the function into this one
 * @returns 
 */
const HeaderWithBackButton = ({ title, navigation, isCustomEvent, OnBack, customIcons }) => {
    const OnBackPressed = () => {
        if (isCustomEvent) {
            return OnBack()
        }
        return navigation.goBack()
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => OnBackPressed()}>
                <Entypo name="chevron-thin-left" size={19} />
            </TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text>
            <View style={{ position: 'absolute', right: 6, flexDirection: 'row' }}>
                {customIcons && customIcons.map((icon, index) => (
                    <TouchableOpacity key={index} style={{ marginHorizontal: 12 }}>
                        {icon}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 12,
        paddingHorizontal: 10,
        position: 'relative'
    },
    titleText: {
        color: COLORS.black,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 18,
    },
});

export default HeaderWithBackButton