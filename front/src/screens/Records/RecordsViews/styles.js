import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    flex: 1,
    width: "100%",
    height: 'auto',
    justifyContent:'center',
    alignItems: 'center',
    gap: 18,
},

scrollContainer: {
    flex: 1,
    paddingLeft: 16,
    rowGap: 12,
},

scrollContainer2: {
    flex: 1,
    flexDirection: 'row',
    width: "100%",
    height: "auto",
    columnGap: 18,
    paddingRight: 32,
},

FisiView: {
    width: 100,
    height: 63,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
},

buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 10,
    width: 245,
    height: 46,
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

containerInsu: {
    flex: 1,
    width: "100%",
    height: 'auto',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 24,
},

buttonContainerInsu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 10,
    width: 100,
    height: 46,
    backgroundColor: '#A78BFA',
    borderRadius: 8,
},

ContainerGlice:{
    flex: 1,
    width: "100%",
    height: 'auto',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 24,
}

});