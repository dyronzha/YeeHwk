import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


const LiveHeader = () =>{
    const {bk,top,top_btn,top_text,nav,nav_btn} = styles;
    return (
        <View >
            
            <View style={top}>

                <View style={[top_btn]}>
                    <Image source={require('../img/btn_back.png')} 
                    style={[{tintColor:'white'},{width:25},{height:25}]}
                    />
                </View>
            

                <Text style={top_text}>Heartstone</Text>
                
                 <View style={[top_btn]}>
                    <Image source={require('../img/btn_following.png')}
                    style={[{tintColor:'white'},{width:30},{height:30}]}
                    />
                </View>
            </View>

            <View style={nav}>
                <View style={nav_btn}>
                    <Text style={styles.nav_btn_text}>
                        LIVE
                    </Text>
                    <View style={styles.nav_btn_bottom}>
                    </View>
                    
                </View>
                <View style={nav_btn}>
                    <Text style={styles.nav_btn_text}>
                        RECENT
                    </Text>
                    <View style={[styles.nav_btn_bottom,{backgroundColor:'white'}]}>
                    </View>
                    
                </View>
            </View>

        </View>     
    )
};

const styles = StyleSheet.create({
    bk:{
        flex:1,
        backgroundColor:'rgb(241, 241, 241)',
        //justifyContent:'center',
        alignItems:'center',
    },
    top:{
        width:375,
        height:64,
        backgroundColor:'rgb(100,65,165)',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:20,
        paddingLeft:8.5,
        paddingRight:8.5,
       
    },
    top_btn:{
        width:33,
        height:33,
        justifyContent:'center',
        alignItems:'center',
    },
    top_text:{
        fontSize:18,
        color:'white',
    },
    nav:{
        backgroundColor:'black',
        width:375,
        height:44,
        flexDirection:'row',
        zIndex:5
    },
    nav_btn:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    nav_btn_text:{
        
        color:'rgb(100,65,165)',
        fontSize:13,
        textAlign:'center',
        marginTop:15,
        marginBottom:8.5,
        
    },
    nav_btn_bottom:{
        height:5,
        width:187.5,
        backgroundColor:'rgb(100,65,165)',
        
    },

    
});

export default LiveHeader;