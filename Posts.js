import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { graphql } from 'react-apollo';
import gql from "graphql-tag";

class Posts extends Component {
  render() {
    console.log(this.props.data);
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const postsQuery = gql`
  {
    allPosts {
      id
      title
    }
  }
`;

export default graphql(postsQuery)(Posts);

