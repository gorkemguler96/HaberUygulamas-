import React from 'react';
import {Text, View, Image, Dimensions} from "react-native";
import styles from './NewsCard.style'

function NewsCard({news}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: news.imageUrl}}/>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>
            <Text style={styles.author}>{news.author}</Text>
        </View>
    );
}

export default NewsCard;
