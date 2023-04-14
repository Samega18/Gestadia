import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    flex: 1,
    position: 'relative',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 60,
},

containerTop: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 25,
    // backgroundColor: 'green',
},

topName: {
    fontSize: 16,
    fontWeight: 600,
},

containerMid: {
    flex: 6,
    width: "100%",
    height: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'red',
},

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

spaceOptions: {
    width: '50%',
    height: 60,
},

containerBottom: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
},

buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 10,
    width: 128,
    height: 46,
    backgroundColor: '#A78BFA',
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 17,
  },

});