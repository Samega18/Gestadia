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

containerTop: {
    flex: 8,
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
},

topImage: {
    width: 50,
    height: 50,
    borderRadius: 200,
    resizeMode: 'contain',
    borderWidth: 1,
},

homeMid: {
    flex: 7,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

homeBottom: {
    flex: 2,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

containerBottom: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
}

});