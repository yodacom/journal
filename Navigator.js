import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Post from "./components/posts/Post";
import Posts from "./components/posts/Posts";
import NewPost from "./components/posts/NewPost";
import { navStyles } from './styles/navStyles';

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  goToPost = () => {
    this.props.navigation.navigate('Post');
  };

  newPost = () => {
    this.props.navigation.navigate('NewPost');
  };

  render() {
    return (

      <View style={styles.container}>
        <Posts {...this.props} />
        <TouchableHighlight onPress={this.newPost} style={styles.newPost} >
          <Text style={styles.newPostText}>New Post +</Text>
        </TouchableHighlight>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  newPost: {
    backgroundColor: "#82d8d8",
    padding: 20
  },
  newPostTextr: {
    fontSize: 20,
    textAlign: "center"
  }
});

export default StackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post
  },
  NewPost: {
    screen: NewPost
  }
});
