import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './stylesheet';
import Trash from '../../assets/svg/trash';
import ButtonLeft from '../../assets/svg/buttonLeft';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../types';
import commonStyles from '../../commonStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setBody, setTitle} from '../../store/slices/notes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import moment from 'moment';

const NoteScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const {title, body} = useSelector((state: RootState) => state.note);
  const handleNavigateBack = () => {
    navigation.goBack();
  };
  const handleNavigateDeletePage = () => {
    navigation.navigate(SCREENS.DELETE);
  };

  const handleChangeTitle = (newTitle: string) => {
    dispatch(setTitle(newTitle));
  };

  const handleChangeBody = (newBody: string) => {
    dispatch(setBody(newBody));
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={commonStyles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={commonStyles.headerContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateBack}>
            <ButtonLeft />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleNavigateDeletePage}>
            <Trash />
          </TouchableOpacity>
        </View>
        <View style={styles.noteContainer}>
          <TextInput
            style={styles.noteHeader}
            value={title}
            onChangeText={handleChangeTitle}
            placeholder="Your note header"
            maxLength={20}
          />
          <Text style={styles.noteDate}>
            {moment().format('dddd, Do of MMMM')}
          </Text>
          <TextInput
            style={styles.noteText}
            multiline
            value={body}
            onChangeText={handleChangeBody}
            placeholder="Your note details"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NoteScreen;
