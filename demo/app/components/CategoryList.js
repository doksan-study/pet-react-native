import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../constants/color';

export default () => {
  const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <View style={styles.categoryListContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity key={index} activeOpacity={0.8}>
          <View>
            <Text
              style={{
                ...styles.categoryListText,
                color:
                  setSelectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.grey,
              }}>
              {item}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
