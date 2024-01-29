import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header1: {
    fontSize: 48,
    color: '#000',
    lineHeight: 58,
    textAlign: 'center',
    fontFamily: 'Otama.ep',
  },
  paragraph: {
    color: '#686868',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Roboto',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 25,
    paddingTop: 30,
  },
});

export default commonStyles;
