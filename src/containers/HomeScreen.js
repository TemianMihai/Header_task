import React from 'react';

import HeaderContainer from './Header';
import {HomeScreenComponent} from '../components/HomeScreenStyleComponents';

export default function HomeScreen({navigation}) {
  return (
    <>
      <HeaderContainer navigation={navigation} />
      <HomeScreenComponent />
    </>
  );
}
