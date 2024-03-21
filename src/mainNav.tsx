import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home';
import BookRide from './screens/bookRide';
import ConfirmRide from './screens/confirmRide';
import BookSubs from './screens/bookSub';
import Trips from './screens/trips';
import Reservations from './screens/subscriptions';
import Settings from './screens/settings';
import Messages from './screens/messages';

const Stack = createNativeStackNavigator();

function MainNav(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BookRide" component={BookRide} />
      <Stack.Screen name="ConfirmRide" component={ConfirmRide} />
      <Stack.Screen name="BookSubs" component={BookSubs} />
      <Stack.Screen name="Trips" component={Trips} />
      <Stack.Screen name="Reservations" component={Reservations} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
}

export default MainNav;
