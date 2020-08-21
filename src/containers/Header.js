import React, {useState} from 'react';

import {Header} from 'react-native-elements';

import {
  HeaderIconsComponent,
  HeaderButtonsComponent,
  HeaderSearchComponent,
  HeaderDropdown,
} from '../components/HeaderStyleComponents';
import {style} from '../style/HeaderCss';
import {View} from 'react-native';

export default function HeaderContainer({navigation}) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const onShowHeader = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  return (
    <>
      <Header containerStyle={style.headerContainer}>
        <View>
          <HeaderIconsComponent
            navigation={navigation}
            onShowHeader={onShowHeader}
          />
          <HeaderButtonsComponent />
          <HeaderSearchComponent />
        </View>
      </Header>
      {isHeaderVisible ? <HeaderDropdown /> : null}
    </>
  );
}
