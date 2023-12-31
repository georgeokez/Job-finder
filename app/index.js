import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';

import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import NearByJobs from '../components/home/nearby/Nearbyjobs';
import PopularJobs from '../components/home/popular/Popularjobs';
import Welcome from '../components/home/welcome/Welcome';

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleBtnClick = () => {
    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: true,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.location} dimension='100%' />
          ),
          headerTitle: 'Job Finder',
          headerTitleAlign: 'center',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={handleBtnClick}
          />
          <PopularJobs />
          <NearByJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
