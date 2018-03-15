import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { navStyles } from './styles/navStyles';
import Post from "./Post";
import Posts from "./Posts";

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjerv4iuw5puv0141b32u0tw2'
  }),
  cache: new InMemoryCache()
});

class App extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  goToPost = () => {
    this.props.navigation.navigate('Post');
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Posts />
          <Button
            onPress={this.goToPost}
            title="goToPostPage"
          />

        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StackNavigator({
  Home: {
    screen: App
  },
  Post: {
    screen: Post
  }
});
