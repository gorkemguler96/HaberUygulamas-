import {Dimensions, StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        borderRadius:10,

    },
    image:{
        height:Dimensions.get('window').height /4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    title:{
        padding:5,
        fontWeight:"bold",
        fontSize:18
    },
    description:{
        padding:5,
    },
    author:{
        fontStyle:"italic",
        textAlign:"right",
        paddingRight:5,
        paddingBottom:5,
    }
})
