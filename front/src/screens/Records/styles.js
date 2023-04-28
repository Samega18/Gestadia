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

containerTop: {
    flex: 8,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
},

recordsTop: {
    flex: 3,
    width: "100%",
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: 'red',
},

topInfoContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: '#351F4D',
    borderRadius: 16,
},

recordsMid: {
    flex: 6,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'blue',
},

itemContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '90%',
    height: 'auto',
    padding: 8,
    paddingTop: 28,
    paddingBottom: 28,
    borderBottomColor: '#A78BFA',
    borderBottomWidth: 1,
    gap: 12,
},

itemElipse: {
    width: 10,
    height: 10,
    backgroundColor: '#A78BFA',
    borderColor: '#A78BFA',
    borderWidth: 1,
    borderRadius: 100,
},

itemText: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: 'black',
},

recordsBottom: {
    flex: 2,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
},

bottomBalls: {
    width: '50%',
    height: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: '40%',
    paddingBottom: 28,
    flexDirection: 'row',

},

itemElipse2: {
    width: 53,
    height: 10,
    backgroundColor: '#A78BFA',
    borderColor: '#A78BFA',
    borderWidth: 1,
    borderRadius: 100,
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