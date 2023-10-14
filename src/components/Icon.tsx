import { IconProps as RNVIIconProps } from 'react-native-vector-icons/Icon';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import type AntDesignGlyphMap from 'react-native-vector-icons/glyphmaps/AntDesign.json';
import type EntypoGlyphMap from 'react-native-vector-icons/glyphmaps/Entypo.json';
import type EvilIconsGlyphMap from 'react-native-vector-icons/glyphmaps/EvilIcons.json';
import type FeatherGlyphMap from 'react-native-vector-icons/glyphmaps/Feather.json';
import type FontAwesomeGlyphMap from 'react-native-vector-icons/glyphmaps/FontAwesome.json';
import type FontAwesome5GlyphMap from 'react-native-vector-icons/glyphmaps/FontAwesome5Free.json';
import type FontistoGlyphMap from 'react-native-vector-icons/glyphmaps/Fontisto.json';
import type FoundationGlyphMap from 'react-native-vector-icons/glyphmaps/Foundation.json';
import type IoniconsGlyphMap from 'react-native-vector-icons/glyphmaps/Ionicons.json';
import type MaterialCommunityIconsGlyphMap from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';
import type MaterialIconsGlyphMap from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';
import type OcticonsGlyphMap from 'react-native-vector-icons/glyphmaps/Octicons.json';
import type SimpleLineIconsGlyphMap from 'react-native-vector-icons/glyphmaps/SimpleLineIcons.json';
import type ZocialGlyphMap from 'react-native-vector-icons/glyphmaps/Zocial.json';

export interface Glyphs {
  AntDesign: keyof typeof AntDesignGlyphMap;
  Entypo: keyof typeof EntypoGlyphMap;
  EvilIcons: keyof typeof EvilIconsGlyphMap;
  Feather: keyof typeof FeatherGlyphMap;
  FontAwesome: keyof typeof FontAwesomeGlyphMap;
  FontAwesome5: keyof typeof FontAwesome5GlyphMap;
  Fontisto: keyof typeof FontistoGlyphMap;
  Foundation: keyof typeof FoundationGlyphMap;
  Ionicons: keyof typeof IoniconsGlyphMap;
  MaterialCommunityIcons: keyof typeof MaterialCommunityIconsGlyphMap;
  MaterialIcons: keyof typeof MaterialIconsGlyphMap;
  Octicons: keyof typeof OcticonsGlyphMap;
  SimpleLineIcons: keyof typeof SimpleLineIconsGlyphMap;
  Zocial: keyof typeof ZocialGlyphMap;
}

export type IconLibName = keyof typeof IconLibs;

export const IconLibs = {
  AntDesign: { Component: AntDesign },
  Entypo: { Component: Entypo },
  EvilIcons: { Component: EvilIcons },
  Feather: { Component: Feather },
  FontAwesome: { Component: FontAwesome },
  FontAwesome5: { Component: FontAwesome5 },
  Fontisto: { Component: Fontisto },
  Foundation: { Component: Foundation },
  Ionicons: { Component: Ionicons },
  MaterialCommunityIcons: { Component: MaterialCommunityIcons },
  MaterialIcons: { Component: MaterialIcons },
  Octicons: { Component: Octicons },
  SimpleLineIcons: { Component: SimpleLineIcons },
  Zocial: { Component: Zocial },
};

export interface IconProps<T extends IconLibName> extends RNVIIconProps {
  lib: T;
  name: Glyphs[T];
}

// eslint-disable-next-line react/function-component-definition
export function Icon<T extends IconLibName>(props: IconProps<T>) {
  const { name, lib, ...rest } = props;

  const { Component } = IconLibs[lib];

  return <Component name={name} {...rest} />;
}
