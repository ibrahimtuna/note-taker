import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contextContainer: {
    paddingHorizontal: 30,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  deleteButton: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFCACA',
    backgroundColor: '#FFE3E3',
    paddingVertical: 20,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#D35E5E',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    fontFamily: 'Roboto',
  },
});

export default styles;
