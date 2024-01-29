import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import commonStyles from '../../commonStyles';
import styles from './stylesheet';
import ButtonLeft from '../../assets/svg/buttonLeft';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import Delete from '../../assets/svg/delete';
import {useDispatch} from 'react-redux';
import {deleteNote} from '../../store/slices/notes';
import {SCREENS} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const DeleteScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const handleDeleteNote = () => {
    dispatch(deleteNote());
    navigation.navigate(SCREENS.HOME);
  };

  return (
    <SafeAreaView style={[commonStyles.container, styles.container]}>
      <View style={commonStyles.headerContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateBack}>
          <ButtonLeft />
        </TouchableOpacity>
      </View>
      <Delete />
      <View style={styles.contextContainer}>
        <Text style={commonStyles.header1}>You sure about this?</Text>
        <Text style={[commonStyles.paragraph, {marginTop: 20}]}>
          If you delete this note, threat not, you can still find it in the bin.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.deleteButton}
          onPress={handleDeleteNote}>
          <Text style={styles.deleteButtonText}>Delete this note</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DeleteScreen;
