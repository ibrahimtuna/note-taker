import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  noteContainer: {
    paddingHorizontal: 25,
    marginTop: 35,
  },
  noteHeader: {
    color: '#000',
    fontSize: 38,
    lineHeight: 48,
    fontFamily: 'Otama.ep',
  },
  noteDate: {
    color: '#686868',
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Roboto',
    marginTop: 5,
  },
  noteText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 26,
    marginTop: 30,
    fontFamily: 'Roboto',
    height: windowHeight * 0.3,
    textAlignVertical: 'top',
  },
});

export default styles;
