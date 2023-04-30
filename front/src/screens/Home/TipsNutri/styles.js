import {StyleSheet} from 'react-native'

export default StyleSheet.create({

optionContainer: {
    position: 'relative',
    width: '95%',
    padding: 12,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#A78BFA',
    borderWidth: 1,
    gap: 12,
    borderRadius: 8,

},

optionITContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 24,
},

optionText: {
    fontSize: 15,
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

tipsNutriTop: {
    width: "100%",
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

scrollContainer: {
    flex: 1,
    width: '100%',
},

tipsNutriMid: {
    width: "100%",
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 18,
    //backgroundColor: 'red',
},

midText: {
    fontSize: 32,
    fontWeight: 400,
    color: 'black',
    textAlign: 'center',
},

tipsNutriOptionsContainer: {
    flex: 9,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 18,
    marginBottom: 24,
}

});