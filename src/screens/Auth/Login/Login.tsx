import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Scale from '@utils/constants/scale';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {navigate} from '@services/navigation/NavigationHelpers';
import RouteName from '@navigators/RouteName';
import {Colors} from '@styles';

// type Props = {
//   // product: number;
// };

const Login: FC = () => {
  const navRegister = () => {
    navigate(RouteName.Register);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: Scale.FONT_SIZE_SMALL}}>Login Screen</Text>
      </View>

      <TouchableOpacity
        style={{
          padding: Scale.PADDING_MEDIUM,
          borderRadius: Scale.BORDER_RADIUS_LARGE,
        }}
        onPress={navRegister}>
        <Text style={{color: Colors.red700}}>Navigation Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
