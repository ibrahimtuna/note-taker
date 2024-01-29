import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Hero from '../../assets/svg/hero';
import styles from './stylesheet';
import ButtonRight from '../../assets/svg/buttonRight';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../types';
import commonStyles from '../../commonStyles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNavigateNoteScreen = () => {
    navigation.navigate(SCREENS.NOTE);
  };

  return (
    <SafeAreaView style={[commonStyles.container, styles.container]}>
      <Hero />
      <View style={styles.contextContainer}>
        <View>
          <Text style={commonStyles.header1}>All thoughts.</Text>
          <Text style={commonStyles.header1}>One place.</Text>
        </View>
        <View style={styles.descTextContainer}>
          <Text style={commonStyles.paragraph}>
            Dive right in and clear that mind of yours by writing your thoughts
            down.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateNoteScreen}
        activeOpacity={0.7}>
        <ButtonRight />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
