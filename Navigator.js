import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import { StackNavigator } from "react-navigation";
import { Fab, Icon } from "native-base";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Post from "./components/posts/Post";
import NewPost from "./components/posts/NewPost";
import Posts from "./components/posts/Posts";
import navStyles from "./styles/navStyles";

import Login from "./components/user/Login";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  goToPost = () => {
    this.props.navigation.navigate("Post");
  };

  newPost = () => {
    this.props.navigation.navigate("NewPost");
  };

  render() {
    return (
      <View style={styles.container}>
        <Posts {...this.props} />
        <Fab style={styles.newPost} onPress={this.newPost}>
          <Icon name="add" />
        </Fab>
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
    backgroundColor: "#82D8D8"
  }
});

const Navigator = StackNavigator({
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

const NavWrapper = ({ loading, user }) => {
  if (loading) return <ActivityIndicator size="large" />;
  if (!user) return <Login />;
  return <Navigator screenProps={{ user}}/>;
};

const userQuery = gql`
  query userQuery {
    user {
      id
      email
    }
  }
`;

export default graphql(userQuery, {
  props: ({ data }) => ({ ...data })
})(NavWrapper);
