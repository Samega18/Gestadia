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

homeTop: {
    flex: 3,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
},

topInfoContainer: {
    width: '85%',
    height: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#A78BFA',
},

topInfoContainer2: {
    flexDirection: 'row',
    width: '100%',
    height: '46%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 4,
    paddingLeft: 4,
},

infoItem: {
    width: '49%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD6FE',
    padding: 12,
},

infoItemText: {
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    color: 'black',
},

homeMid: {
    flex: 5,
    width: "100%",
    height: "100%",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 0,
    gap: 4,
    //backgroundColor: 'blue',
},

midTextContainer: {
    width: '90%',
    height: '8%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: 12,
    paddingLeft: 12,
},

midText: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: 'black',
},

midContainer2: {
    flexDirection: 'row',
    width: '100%',
    height: '44%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: 12,
    paddingLeft: 12,
},

buttonMidContainer: {
    width: 170,
    height: 170,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DDD6FE',
    borderRadius: 8,
    padding: 14,
    borderColor: '#A78BFA',
    borderWidth: 2,
},

buttonText: {
    textAlign: 'center',
    color: '#1E1E1E',
    fontSize: 16,
    fontWeight: 600,
},

homeBottom: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    //backgroundColor: 'red',
},

buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignÍtems: 'center',
    padding: 16,
    gap: 10,
    width: 265,
    height: 50,
    backgroundColor: '#A78BFA',
    borderRadius: 8,
},

buttonText: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: 'black',
},

});