import { StyleSheet, Dimensions } from "react-native";

const deeviceSize=Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
    },
    body_container:{

    },

    image:{
        width: deeviceSize.width,
        height: deeviceSize.height / 3,
        resizeMode:'contain',
        backgroundColor:'white',
        marginTop:1,
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:5,
    },
    desc:{
        fontStyle:'italic',
        marginVertical:5,
        marginStart:5,
    },
    price:{
        fontWeight:'bold',
        fontSize:22,
        textAlign:'right',
        marginEnd:4,
    },
});