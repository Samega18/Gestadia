import {StyleSheet} from 'react-native'

export default StyleSheet.create({

optionContainer: {
    position: 'relative',
    width: '90%',
    padding: 16,
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
    textAlign: 'left',
},

container: {
    flex: 1,
    position: 'relative',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

remindersTop: {
    width: "100%",
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

remindersMid: {
    width: "100%",
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},

midText: {
    fontSize: 32,
    fontWeight: 400,
    color: 'black',
},

remindersOptionsContainer: {
    flex: 9,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
}

});