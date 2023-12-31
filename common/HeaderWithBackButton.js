import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import COLORS from "../constants/colors";
import Entypo from "react-native-vector-icons/Entypo";

/**
 * This component is used as a header with the back icon on the left.
 *
 * @param title - (mandantory) The title of the header.
 * @param navigation - (optional) If not using isCustomEvent then need to pass this one.
 * @param isCustomEvent - (optional) Flag indicating if the user wants to handle on back instead of going back to the previous screen.
 * @param OnBack - (optional) Function to be called if isCustomEvent is true.
 * @returns {JSX.Element} Header component.
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
        fontSize: 21,
        fontWeight: "bold",
        marginLeft: 18,
    },
});

export default HeaderWithBackButton