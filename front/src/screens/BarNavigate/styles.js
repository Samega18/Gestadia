import {StyleSheet} from 'react-native'

export default StyleSheet.create({

iconContainer: {
    position: 'relative',
    width: "30%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

iconLabel: {
    fontSize: 12,
},

container: {
    flex: 1,
    position: 'relative',
    width: "100%",
    height: "100%",
},

screen: {
    flex: 1,
    position: 'relative',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

barNavigateContainer: {
    position: 'absolute',
    flexDirection: 'row',
    left: "0%",
    bottom: "0%",
    width: "100%",
    height: 60,
    borderRadius: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopWidth: .5,
},

});