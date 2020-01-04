import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'dice-1'
    }
  }

  startGame = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    if (randomNum === 1) {
      this.setState({ name: 'dice-1' });
    } else if (randomNum === 2) {
      this.setState({ name: 'dice-2' });
    } else if (randomNum === 3) {
      this.setState({ name: 'dice-3' });
    } else if (randomNum === 4) {
      this.setState({ name: 'dice-4' });
    } else if (randomNum === 5) {
      this.setState({ name: 'dice-5' });
    } else if (randomNum === 6) {
      this.setState({ name: 'dice-6' });
    } else {
      this.setState({ name: 'dice-1' });
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <MaterialCommunityIcons name={this.state.name} size={350} color='#26ae60' />
          <TouchableOpacity
            onPress={this.startGame}
          >
            <Text style={styles.btn}>Roll</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C3335',
  },
  btn: {
    fontSize: 30,
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: '#26ae60',
    fontWeight: 'bold',
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#26ae60'
  }
});
