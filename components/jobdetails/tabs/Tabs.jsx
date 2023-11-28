import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import TabButton from './TabButton';

import styles from './tabs.style';
import { SIZES } from '../../../constants';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
