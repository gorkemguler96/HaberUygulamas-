import {Text, View, FlatList, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import news_data from './src/news_data.json'
import news_banner_data from './src/news_banner_data.json'
import NewsCard from "./src/components/NewsCard";

export default function App() {

    const renderNews = ({item})=> <NewsCard news={item} />

  return (
    <View style={styles.container}>
          <Text style={styles.text}>News</Text>
          <FlatList ListHeaderComponent={()=>(
              <ScrollView style={styles.scrollWiev} showsHorizontalScrollIndicator={false} horizontal>
                  {news_banner_data.map((bannerNews)=> (
                      <Image style={styles.banner_image} source={{uri:bannerNews.imageUrl}}/>
                  ))}
              </ScrollView>
          )} data={news_data} renderItem={renderNews}/>
    </View>
  );
}

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#eceff1',
        flex:1,
        marginTop:30,
        marginBottom:20,
    },
    text:{
        paddingLeft:10,
        fontWeight:"bold",
        fontSize:50
    },
    banner_image:{
        height:Dimensions.get('window').height / 5,
        width:Dimensions.get('window').width/1.5,
    },
    scrollWiev:{
        padding:10,
    }
})
