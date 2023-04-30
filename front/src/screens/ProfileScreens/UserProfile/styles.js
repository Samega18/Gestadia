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

userProfileTop: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

userProfileTop2: {
    flex: .5,
    width: "100%",
    height: "100%",
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

userProfileMid: {
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
    width: '90%',
    height: 36,
    backgroundColor: '#A78BFA',
    borderRadius: 4,
},

buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 17,
},

userProfileBottom: {
    flex: 6,
    width: "100%",
    height: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    //backgroundColor: 'red',
},

});