import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#64b5f6',
        flex:1,
    },

    logo:{
        width:Dimensions.get("window").width * 0.7,
        height:Dimensions.get("window").height/3,
        resizeMode:'contain',
        alignSelf:'center',
        tintColor:'white',
    },

    logo_container:{
        justifyContent:'center',
        flex:1,
    },
    
    body_container:{
        flex:1,
    },
})