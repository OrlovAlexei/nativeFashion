import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, RouteProp } from '@react-navigation/native';

export type Routes = {
  Onboarding: undefined;
  Welcome: undefined;
};

export interface StackNavigationProps<RouteName extends keyof ParamList, ParamList extends ParamListBase = Routes> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}
