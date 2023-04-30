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

addressContainer: {
    width: '90%',
    height: 160,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECECEC',

    borderRadius: 8,
    borderColor: '#A78BFA',
    borderWidth: 1,
    elevation: 4, 
    shadowColor: 'rgba(0, 0, 0, 0.25)', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 1, 
    shadowRadius: 4 

},

addressTextsContainer: {
    width: '100%',
    height: '75%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 12,
},

addressText: {
    fontSize: 15,
    fontWeight: 600,
    color: 'black',
},

addressButtonsContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'row',
},

buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,
    width: '30%',
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

container: {
    flex: 1,
    position: 'relative',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

userAddressTop: {
    width: "100%",
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

userAddressScroll: {
    marginHorizontal: 12,
    width: '100%',
},

userAddressAddContainer: {
    width: "100%",
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
},

userAddressForms: {
    width: "100%",
    height: "auto",
    marginTop: 12,
    marginBottom: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    //backgroundColor: 'blue',
},

userAddressLine: {
    width: '90%',
    height: 1,
    backgroundColor: '#A78BFA',
    marginTop: 16,
},

});