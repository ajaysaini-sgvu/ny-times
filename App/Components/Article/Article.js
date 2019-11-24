import React from 'react'
import { Text, View, Image } from 'react-native'
import Style from './ArticleStyle'
import ArrowIcon from 'App/Assets/Images/rightarrow.png'

const Article = (article) => {
  const {
    article: { title, byline, published_date },
  } = article
  return (
    <>
      <View style={Style.container}>
        <View style={Style.image} />
        <View style={Style.content}>
          <Text style={Style.title} numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={Style.byline}>{byline}</Text>
          <Text style={Style.publishedDate}>{published_date}</Text>
        </View>
        <View style={Style.icon}>
          <Image style={{ width: 25, height: 25 }} source={ArrowIcon} />
        </View>
      </View>
    </>
  )
}

export default Article
