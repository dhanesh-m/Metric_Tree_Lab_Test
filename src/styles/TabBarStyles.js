import { StyleSheet } from 'react-native'
import CustomColor from '../../assets/Color'

export const styles = StyleSheet.create({
    safearea: {
        backgroundColor: CustomColor.WhiteColor
    },
    tabContainer: {
        flexDirection: 'row',
        height: 65,
        backgroundColor: CustomColor.WhiteColor,
        elevation: 10,
        shadowColor: CustomColor.BlackColor,
        shadowOffset: { height: -2, width: 0 },
        shadowRadius: 1,
        shadowOpacity: .1,
    },
    tab: {
        flex: 1,
        alignItems: 'center'
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})