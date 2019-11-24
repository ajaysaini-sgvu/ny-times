import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 16,
  },
  image: {
    width: '10%',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
    flexDirection: 'column',
  },
  icon: {
    width: '10%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  byline: {
    marginTop: 8,
    color: 'gray',
  },
  bylineContainer: {
    flexDirection: 'row',
  },
  publishedDate: {
    color: 'gray',
    textAlign: 'right',
  },
})
