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

import AntIcon from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <View style={{width: '50%'}}>
              <Text style={styles.headerMainTitle}>Welcome~!</Text>
            </View>

            <View
              style={{
                width: '50%',
                alignItems: 'center',
                alignItems: 'flex-end',
              }}>
              {/* <Text>로고 넣을 자리</Text> */}
              <Image
                source={require('../../image/Home/pet.png')}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 20,
                }}
              />
            </View>
          </View>
        </View>

        {/* TODO: Search */}
        <LinearGradient
          colors={['rgba(255, 153, 94,0.4)', 'transparent']}
          style={styles.searchLinear}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#FDDBC8"
              style={styles.searchBarText}
            />
            {/* TODO: 검색 아이콘 */}
            <AntIcon
              style={{paddingLeft: 20}}
              name="search1"
              color="#FF995E"
              size={24}
            />
          </View>
        </LinearGradient>

        {/* TODO: Category1 - 유기견 공고 */}
        <View style={styles.categoryView1}>
          <View style={{width: '50%'}}>
            <Text style={styles.categoryMainTitle}>유기견 공고</Text>
            <View style={styles.categoryMainTitleUnderBar}></View>
          </View>

          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <View style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>More</Text>
            </View>
          </View>
        </View>

        {/* TODO: SCROLLVIEW - 유기견 공고 */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            height: 380,
            // borderColor: 'grey',
            // borderWidth: 2,
          }}>
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
            <Image
              source={require('../../image/Home/pet.png')}
              style={{
                width: '100%',
              }}
            />
            <View style={styles.cardTitle}>
              <Text style={{fontWeight: 'bold'}}>제목</Text>
              <Text style={styles.cardDetail1}>디테일</Text>
            </View>
            <Text style={styles.cardDetail2}>디테일2</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* TODO: Category2 - 주변 보호소 */}
        <View style={styles.categoryView2}>
          <View style={{width: '50%'}}>
            <Text style={styles.categoryMainTitle}>주변 보호소</Text>
            <Text style={styles.categoryMainTitleUnderBar}>Feature</Text>
          </View>

          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <View style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>More</Text>
            </View>
          </View>
        </View>

        {/* TODO: SCROLLVIEW - 주변 보호소 */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
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
            <Image
              source={require('../../image/Home/pet.png')}
              style={{
                width: '100%',
              }}
            />

            <View style={styles.cardTitle}>
              <Text style={{fontWeight: 'bold'}}>제목</Text>
              <Text style={styles.cardDetail1}>디테일</Text>
            </View>
            <Text style={styles.cardDetail2}>디테일2</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  // TODO: Header
  header: {
    backgroundColor: '#FF995E',
    height: '15%',
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
    borderWidth: 3,
    borderColor: '#FDDBC8',
  },
  searchBarText: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 260,

    // borderWidth: 2,
    // borderColor: 'grey',
  },

  // TODO: CATEGORY
  categoryView1: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  categoryView2: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    // marginTop: 10,
  },
  categoryMainTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#585a61',
  },
  categoryMainTitleUnderBar: {
    height: 4,
    backgroundColor: '#FDDBC8',
    width: 100,
    marginTop: -1,
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
    // flex: 1,
    // alignItems: 'flex-end',
    // borderColor: 'grey',
    // borderWidth: 3,
  },
  cardDetail2: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: '#b1e5d3',
    paddingTop: 6,
  },
});
