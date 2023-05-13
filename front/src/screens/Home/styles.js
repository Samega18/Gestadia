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
    flex: 1.2,
    width: "100%",
    height: "100%",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 24,
    paddingLeft: 24,
    //backgroundColor: 'red',
},

imageTop: {
    width: 60,
    height: 60,
    borderRadius: 200,
    resizeMode: 'contain',
    borderWidth: 3,
    borderColor: '#A78BFA',
},

homeMid: {
    flex: 4,
    width: "100%",
    height: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'blue',
},

textContainerMid: {
    width: '90%',
    paddingTop: 0,
    padding: 16,
},

textMid: {
    fontSize: 20,
    fontWeight: 700,
},

textMid2: {
    fontSize: 14,
    fontWeight: 700,
},

graphicContainerMid: {
    width: '80%',
    height: 'auto',
},

imageMid: {
    width: '90%',
    height: '70%',
    resizeMode: 'stretch',
},

homeBottom: {
    flex: 5,
    width: "100%",
    height: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 0,
    gap: 18,
    //backgroundColor: 'red',
},

bottomContainer2: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
    paddingRight: 12,
    paddingLeft: 12,
},

buttonBottomContainer: {
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

});