import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:'#e0e0e0',
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:5,
        flexDirection:'row',
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain',
        backgroundColor:'white',
    },
    body_container:{
        flex:1,
        padding:5,
        justifyContent:'space-between',
    },
    title:{
        fontWeight:'bold',
        fontSize:20
    },
    price:{
        marginEnd:5,
        textAlign:'right',
        fontSize:18,
        fontStyle:'italic',
    },
    rate:{
        fontStyle:'italic',
        color:'green',
        fontSize:15,
    },
    count:{

    },
});