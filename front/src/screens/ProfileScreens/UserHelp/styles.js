import {StyleSheet} from 'react-native'

export default StyleSheet.create({

optionContainer: {
    position: 'relative',
    width: '90%',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#A78BFA',
    borderBottomWidth: 1,

},

optionITContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
},

optionText: {
    fontSize: 16,
    fontWeight: 600,
    color: 'black',
},

container: {
    flex: 1,
    position: 'relative',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

userHelpTop: {
    width: "100%",
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

userHelpOptionsContainer: {
    flex: 9,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
}

});