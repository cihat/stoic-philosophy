import React from 'react';
import { View, Image, DimensionValue, Text } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const Brand = ({ height, width, mode }: Props) => {
  const { Layout, Images } = useTheme();

  return (
    <View testID={'brand-img-wrapper'} style={{ height, width }}>
      <Image
        testID={'brand-img'}
        style={[Layout.fullSize, {
          borderRadius: 20,
        }]}
        source={Images.settings.cardImage}
        resizeMode={mode}
      />
      <Text 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 10,
          borderRadius: 20,
        }}
      >
        Stoic Quotes
      </Text>
    </View>
  );
};

Brand.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain',
};

export default Brand;
