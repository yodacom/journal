import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export default class PostForm extends Component {

  state = {
    title: "",
    body: ""
  }

  submitForm = () => {
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body,
    });
  };

  render() {
    return (
      <View>
        <TextInput
          onChangeText={title => this.setState({ title })}
          value={this.state.title} />
        <TextInput
          onChangeText={body => this.setState({ body })}
          value={this.state.body} />

        <Button title="Save Post" onPress={this.submitForm} />
      </View>
    );
  }
}
