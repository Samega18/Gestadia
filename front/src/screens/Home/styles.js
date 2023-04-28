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

homeTop: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
},

homeMid: {
    flex: 4,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue',
},

homeBottom: {
    flex: 5.3,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    //backgroundColor: 'red',
},

bottomContainer2: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: 12,
    paddingLeft: 12,
},

buttonBottomContainer: {
    width: 170,
    height: 170,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DDD6FE',
    borderRadius: 8,
    padding: 14,
    borderColor: '#A78BFA',
    borderWidth: 2,
},

buttonText: {
    textAlign: 'center',
    color: '#1E1E1E',
    fontSize: 16,
    fontWeight: 600,
},

});