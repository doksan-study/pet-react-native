/* eslint-disable */
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View style={styles.header}>
          {/* <Text>리스트</Text> */}

          <View style={styles.headerRow}>
            <View style={{width: '50%'}}>
              <Text style={styles.headerMainTitle}>Welcome~!</Text>
            </View>

            <View style={{width: '50%', alignItems: 'center'}}>
              <Text>로고 넣을 자리</Text>
            </View>
          </View>
        </View>

        <LinearGradient
          colors={['rgba(255, 153, 94,0.4)', 'transparent']}
          style={styles.searchLinear}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#FDDBC8"
              style={styles.searchBarText}
            />
            <Text>검색 아이콘</Text>
          </View>
        </LinearGradient>

        {/* TODO: Category */}
        <View style={styles.categoryView}>
          <View style={{width: '50%'}}>
            <Text style={styles.categoryMainTitle}>Recommended</Text>
            <View style={styles.categoryMainTitleUnderBar}></View>
          </View>

          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <View style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>More</Text>
            </View>
          </View>
        </View>

        {/* TODO: SCROLLVIEW */}
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          style={{height: 400}}>
          <LinearGradient
            colors={['rgba(0,164,109,0)', 'transparent']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: 100,
              marginTop: 220,
              top: 0,
            }}
          />

          {/* TODO: Card */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
            style={styles.card}>
            <Text
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              이미지 넣을 자리
            </Text>

            <View style={styles.cardTitle}>
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                제목
              </Text>
              <Text style={styles.cardDetail1}>디테일</Text>
            </View>
            <Text style={styles.cardDetail2}>디테일2</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* <Text>나와나와나와</Text> */}
        <View style={styles.categoryView}>
          <View style={{width: '50%'}}>
            <Text style={styles.categoryMainTitle}>Feature</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  // TODO: Header
  header: {
    backgroundColor: '#FF995E',
    height: '28%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    width: '100%',
  },
  headerMainTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },

  // TODO: SearchBar
  searchLinear: {
    left: 0,
    right: 0,
    height: 90,
    marginTop: -45,
  },
  searchBar: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarText: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 260,
  },

  // TODO: CATEGORY
  categoryView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  categoryMainTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#585a61',
  },
  categoryMainTitleUnderBar: {
    height: 4,
    backgroundColor: '#FDDBC8',
    width: 115,
    marginTop: -5,
  },
  categoryButton: {
    backgroundColor: '#FF995E',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
  },
  categoryButtonText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#fff',
  },

  // TODO: ScrollView

  // TODO: CategoryCard
  card: {
    height: 250,
    elevation: 2,
    backgroundColor: '#FFF',
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: 160,
  },
  cardTitle: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  cardDetail1: {
    fontWeight: 'bold',
    color: '#00a46c',
    paddingLeft: 35,
  },
  cardDetail2: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: '#b1e5d3',
    paddingTop: 3,
  },
});
