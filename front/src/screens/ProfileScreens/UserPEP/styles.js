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

userPEPTop: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 17,
},

userPEPMid: {
    flex: .5,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'blue',
},

userPEPBottom: {
    flex: 9,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    //backgroundColor: 'red',
},

bottomContainer2: {
    width: '90%',
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#ECECEC',
    borderColor: '#A78BFA',
    borderWidth: 1,
    borderRadius: 8,
},

});