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

addressAddTop: {
    width: "100%",
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    //backgroundColor: 'red',
},

addressAddScroll: {
    marginHorizontal: 12,
    width: '100%',
},

addressAddTitleContainer: {
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

addressAddForms: {
    width: "100%",
    height: "auto",
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    marginBottom: 32,
    //backgroundColor: 'blue',
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