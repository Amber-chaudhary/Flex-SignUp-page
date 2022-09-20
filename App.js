import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, RadioButton} from 'react-native';


//main view ko hamesha flex 1 dena ha
export default function App() {
  return (
    <View style={{flex:1, backgroundColor:'#42e9f5', alignItems:'center', justifyContent:'center' }}> 

      <View style={{alignItems:'center', justifyContent:'center', backgroundColor: 'white', flex: 0.80, borderRadius: 30, width: 400}}> 

        <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
          <Text style={{color:'#42e9f5', fontSize: 50, fontWeight: 'bold'}}>Sign Up</Text> 
        </View>
      
        <View style={{flex:0.40, alignItems:'center', justifyContent:'center'}}>

          <TextInput style={{backgroundColor:'lightgrey', borderRadius: 15, marginBottom:10, width:250, height:30}}
          placeholder='   e-mail'
          />

          <TextInput style={{backgroundColor:'lightgrey', borderRadius: 15, marginBottom:10, width:250, height:30}}
          placeholder='   Password'
          />

          <TextInput style={{backgroundColor:'lightgrey', borderRadius: 15, marginBottom:10, width:250, height:30}}
          placeholder='   Re-Password'
          />

        </View>

        <View style={{flex:0.10, alignItems:'center',justifyContent:'center'}}>
          <Text style={{color: 'grey', fontWeight:'600'}}>Sign Up with social Acount</Text>
        </View>

      
        <View style={{flex:0.20, alignItems:'center',justifyContent:'center', flexDirection:'row'}}>
        
          <Image style={{width:60, height:60, borderRadius: 50, marginRight: 10}}
            source={require('./assets/gmail icon.jpg')}/>

            <Image style={{width:60, height:60, borderRadius: 50, marginRight: 10}}
            source={require('./assets/twitter icon.jpg')}/>

            <Image style={{width:60, height:60, borderRadius: 50}}
            source={require('./assets/facebook icon.jpg')}/>

          </View>
      
          <View style={{flex:0.20, alignItems:'center',justifyContent:'center'}}>

            <TouchableOpacity style={{width:250, height:30, borderRadius: 15,  backgroundColor: 'blue', alignItems:'center',justifyContent:'center', marginBottom:20,}}>
              <Text style={{fontSize:20, color:'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <text style={{color: 'blue', fontWeight: 'bold'}}>Read User License Agreement</text>
          </View>
      </View>
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'  },
});
