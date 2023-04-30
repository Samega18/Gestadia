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

userConfigTop: {
    width: "100%",
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

userConfigScroll: {
    marginHorizontal: 12,
    width: '100%',
},

userConfigTitleContainer: {
    width: "100%",
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
},

title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 17,
},

userConfigForms: {
    width: "100%",
    height: "auto",
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    //backgroundColor: 'blue',
},

userConfigLine: {
    width: '90%',
    height: 1,
    backgroundColor: '#A78BFA',
    marginTop: 16,
},

buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 10,
    width: 200,
    height: 46,
    backgroundColor: '#A78BFA',
    borderRadius: 8,
    marginTop: 12,
},
buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 17,
},

});