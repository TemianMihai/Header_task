import React from 'react';

import {TouchableHighlight} from 'react-native';

import {Searchbar} from 'react-native-paper';

import {
  StyledViewDropDown,
  StyledViewheader,
  StyledMenuIcon,
  StyledLogo,
  StyledButton,
  ButtonText,
  DropDownButton,
  DropDownText,
} from '../style/HeaderStyleCss';

import {style} from '../style/HeaderCss';

export function HeaderIconsComponent({navigation, onShowHeader}) {
  const menusource = require('../assets/menu_icon.png');
  const profilesource = require('../assets/menu_icon.png');
  const logosource = require('../assets/menu_icon.png');

  return (
    <StyledViewheader>
      <TouchableHighlight onPress={onShowHeader}>
        <StyledMenuIcon source={menusource} />
      </TouchableHighlight>
      <StyledLogo source={logosource} />
      <TouchableHighlight
        style={{justifyContent: 'flex-end'}}
        onPress={() => navigation.navigate('ProfilePage')}>
        <StyledMenuIcon source={profilesource} />
      </TouchableHighlight>
    </StyledViewheader>
  );
}

export function HeaderButtonsComponent() {
  return (
    <StyledViewheader style={{marginTop: 10, marginBottom: 10}}>
      <StyledButton underlayColor="#f0f">
        <ButtonText>Distribuidor</ButtonText>
      </StyledButton>
      <StyledButton>
        <ButtonText>SubDistribuidor</ButtonText>
      </StyledButton>
      <StyledButton>
        <ButtonText>Mayoreo</ButtonText>
      </StyledButton>
      <StyledButton style={{marginRight: 0}}>
        <ButtonText>Publico</ButtonText>
      </StyledButton>
    </StyledViewheader>
  );
}

export function HeaderSearchComponent() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <StyledViewheader>
      <Searchbar
        placeholder="Codigo, Clave a Descripcion..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={style.searchBar}
      />
    </StyledViewheader>
  );
}

export function HeaderDropdown() {
  return (
    <StyledViewDropDown style={{marginTop: -1}}>
      <DropDownButton style={{marginTop: 10}}>
        <DropDownText>Descarca de precios</DropDownText>
      </DropDownButton>
      <DropDownButton>
        <DropDownText>Promociones del mes</DropDownText>
      </DropDownButton>
      <DropDownButton style={{borderBottomWidth: 0}}>
        <DropDownText>Productos de alta volatilidad</DropDownText>
      </DropDownButton>
    </StyledViewDropDown>
  );
}
