import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    flex: 1,
    position: 'relative',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

tipScreenTop: {
    width: "100%",
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

scrollContainer: {
    flex: 1,
    width: '100%',
},

tipScreenMid: {
    width: "100%",
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 18,
    //backgroundColor: 'red',
},

midText: {
    fontSize: 32,
    fontWeight: 400,
    color: 'black',
    textAlign: 'center',
},

tipScreenBot: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
},

botText: {
    fontSize: 18,
    fontWeight: 400,
    color: 'black',
    textAlign: 'justify',
},

});