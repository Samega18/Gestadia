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

userAccountTop: {
    width: "100%",
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
    //backgroundColor: 'red',
},

userAccountScroll: {
    marginHorizontal: 12,
    width: '100%',
},

userAccountTitleContainer: {
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

userAccountForms: {
    width: "100%",
    height: "auto",
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    //backgroundColor: 'blue',
},

userAccountLine: {
    width: '90%',
    height: 1,
    backgroundColor: '#A78BFA',
    marginTop: 16,
},

});