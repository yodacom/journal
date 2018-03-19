import React, { Component } from 'react';
import { View, Text } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import navStyles from "../../styles/navStyles";

class Post extends Component {
  static navigationOptions = {
    title: "Post",
    ...navStyles

  };

  render() {
    const { Post, loading } = this.props;
    if (loading) return null;
    return (
      <View>
        <Text>{this.props.navigation.state.params.id}</Text>
      </View>
    );
  }
}

export default Post;
