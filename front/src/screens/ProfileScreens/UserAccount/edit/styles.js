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

userEditAccountTop: {
    width: "100%",
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

userEditAccountScroll: {
    marginHorizontal: 12,
    width: '100%',
},

userEditAccountTitleContainer: {
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

userEditAccountForms: {
    width: "100%",
    height: "auto",
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 32,
    //backgroundColor: 'blue',
},

userEditAccountLine: {
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

    gap: 10,
    width: '60%',
    height: 42,
    backgroundColor: '#A78BFA',
    borderRadius: 4,
    marginTop: 16,
},

buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 17,
},

});