import React from 'react';

import styled from 'styled-components/native';

export const StyledViewheader = styled.View`
    flexDirection: row;
    justifyContent: space-between;
`;

export const StyledMenuIcon = styled.Image`
  flex:1;
  width: 25;
  marginTop: 10;
  resizeMode: contain;
  paddingRight:0;
`;

export const StyledLogo = styled.Image`
  flex:5;
  width: 25;
  marginTop: 10;
  resizeMode: contain;
`;

export const StyledButton = styled.TouchableHighlight`
    marginRight:10;
    borderRadius:5;
    borderWidth: 1;
    borderColor: #fff;
`;

export const ButtonText = styled.Text`
    marginTop:3;
    marginBottom:3;
	fontSize: 17px;
	color: #fff;
	textAlign: center;
	marginRight:3;
	marginLeft:3;
`;


export const StyledViewDropDown = styled.View`
    flexDirection: column;
    backgroundColor: #303331;
    justifyContent: center;
`;

export const DropDownButton = styled.TouchableOpacity`
    marginBottom:10;
    marginLeft:10;
    marginRight:10;
    borderBottomWidth: 0.5;
    borderBottomColor: grey;
`;

export const DropDownText = styled.Text`
    fontSize:22;
    marginLeft:20;
    marginBottom:5;
    color:#fff;
`;