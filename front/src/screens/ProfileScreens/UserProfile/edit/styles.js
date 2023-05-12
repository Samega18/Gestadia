import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    flex: 1,
    width: "100%",
},

userEditProfileTop: {
    flex: 1,
    width: "100%",
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

userEditProfileTop2: {
    flex: .5,
    width: "100%",
    height: 30,
    justifyContent: 'center',
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

userEditProfileMid: {
    flex: 3,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 0,
    gap: 4,
    //backgroundColor: 'blue',
},

midContainer2: {
    width: '47%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 18,
},

imageMid: {
    width: '98%',
    height: '80%',
    borderRadius: 12,
    resizeMode: 'stretch',
},

buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,
    width: '60%',
    height: 42,
    backgroundColor: '#A78BFA',
    borderRadius: 4,
    marginTop: 24,
},

buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 17,
},

userEditProfileBottom: {
    flex: 6,
    width: "100%",
    height: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    marginTop: 24,
    marginBottom: 12,
    //backgroundColor: 'red',
},

});