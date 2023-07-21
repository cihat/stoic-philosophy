import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
// import { useLazyFetchOneQuery, type Quote } from '../../services/modules/quotes';
// import quoteapi
import { Quote, useFetchOneQuery } from '../../services/modules/quoteApi';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';

const Home = () => {
  const { t } = useTranslation(['example', 'welcome']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();
  const [quote, setQuote] = useState<Quote>({
    text: '',
    author: '',
  });

  const { data, error, isLoading, isFetching, isSuccess, refetch } = useFetchOneQuery();

  useEffect(() => {
    if (data?.text) {
      console.log('data', data)
      setQuote({
        text: data.text,
        author: data.author,
      });
    }
  }, [data]);

  return (
    <ImageBackground
      blurRadius={3.8}
      source={Images.settings.cardImage}
      style={[
        Layout.fill,
        Layout.colCenter,
        Layout.justifyContentEnd,
        Layout.alignItemsCenter,
        Gutters.regularHPadding,
      ]}
    >
      <View style={[
        Layout.fill,
        Layout.colCenter,
        Layout.justifyContentCenter,
        Layout.alignItemsCenter,
        Gutters.regularHPadding],
      {
        backgroundColor: "rgba(252, 233, 211, 0.6)",
        blurRadius: 3.8,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
      }
      }>
        <Text style={[
          Fonts.textRegular,
          Fonts.textItalic,
          Gutters.regularBMargin,
          Fonts.textCenter,
          Fonts.textBlack,
          Fonts.textSemiBold,
          Layout.fullMinWidth,
          // gutters margin horizontal
          {
            marginHorizontal: 20,
          }

        ]}>
          {quote.text}
        </Text>
        <Text style={
          [
            Fonts.textRegular,
            Gutters.regularBMargin,
            Fonts.textCenter,
            Fonts.textBold,
            Fonts.textBlack,
          ]
        }>
          {quote.author}
        </Text>
      </View>
      <TouchableOpacity
        style={[Common.button.circle, Gutters.regularBMargin, Gutters.regularTMargin]}
        onPress={() => refetch()}
      >
        {isFetching || isLoading ? (
          <ActivityIndicator />
        ) : (
          <Image
            source={Images.icons.send}
            style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
          />
        )}
      </TouchableOpacity>
      {/* <View
        style={[
          Layout.fill,
          Layout.relative,
          Layout.fullWidth,
          Layout.justifyContentCenter,
          Layout.alignItemsCenter,
        ]}
      >
        <View
          style={[
            Layout.absolute,
            {
              height: 250,
              width: 250,
              backgroundColor: isDark ? '#000000' : '#DFDFDF',
              borderRadius: 140,
            },
          ]}
        />
        <Image
          style={[
            Layout.absolute,
            {
              bottom: '-30%',
              left: 0,
            },
          ]}
          source={Images.sparkles.bottomLeft}
          resizeMode={'contain'}
        />
        <View
          style={[
            Layout.absolute,
            {
              height: 300,
              width: 300,
              transform: [{ translateY: 40 }],
            },
          ]}
        >
          <Brand height={300} width={300} />
        </View>
        <Image
          style={[
            Layout.absolute,
            Layout.fill,
            {
              top: 0,
              left: 0,
            },
          ]}
          source={Images.sparkles.topLeft}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              top: '-5%',
              right: 0,
            },
          ]}
          source={Images.sparkles.top}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              top: '15%',
              right: 20,
            },
          ]}
          source={Images.sparkles.topRight}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              bottom: '-10%',
              right: 0,
            },
          ]}
          source={Images.sparkles.right}
          resizeMode={'contain'}
        />

        <Image
          style={[
            Layout.absolute,
            {
              top: '75%',
              right: 0,
            },
          ]}
          source={Images.sparkles.bottom}
          resizeMode={'contain'}
        />
        <Image
          style={[
            Layout.absolute,
            {
              top: '60%',
              right: 0,
            },
          ]}
          source={Images.sparkles.bottomRight}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={[
          Layout.fill,
          Layout.justifyContentBetween,
          Layout.alignItemsStart,
          Layout.fullWidth,
          Gutters.regularHPadding,
        ]}
      >
        <View>
          <Text style={[Fonts.titleRegular]}>{t('welcome:title')}</Text>
          <Text
            style={[Fonts.textBold, Fonts.textRegular, Gutters.regularBMargin]}
          >
            {t('welcome:subtitle')}
          </Text>
          <Text style={[Fonts.textSmall, Fonts.textLight]}>
            {t('welcome:description')}
          </Text>
        </View>

        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Layout.fullWidth,
            Gutters.smallTMargin,
          ]}
        >
          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => fetchOne(`${Math.ceil(Math.random() * 10 + 1)}`)}
          >
            {isFetching || isLoading ? (
              <ActivityIndicator />
            ) : (
              <Image
                source={Images.icons.send}
                style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => onChangeTheme({ darkMode: !isDark })}
          >
            <Image
              source={Images.icons.colors}
              style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() =>
              onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
            }
          >
            <Image
              source={Images.icons.translate}
              style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
            />
          </TouchableOpacity>
        </View>
      </View> */}
    </ImageBackground>
  );
};

export default Home;
