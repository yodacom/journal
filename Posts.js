import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Posts extends Component {
  render() {
    const { loading, allPosts } = this.props;
    if (loading) return null;
    return (
      <View>
        <FlatList
          data={allPosts}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id}
        />
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

export default graphql(postsQuery, {
  props: ({ data }) => ({ ...data })
})(Posts);
