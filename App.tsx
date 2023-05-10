import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [boxColor, setBoxColor] = useState('#F44336');
  const boxPosition = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(boxPosition, {
          toValue: -50,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(boxPosition, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [boxPosition]);

  const changeBoxColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBoxColor(randomColor);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={changeBoxColor}>
        <Text style={styles.buttonText}>Change the color</Text>
      </TouchableOpacity>
      </View>
      
      <Animated.View style={[styles.box, { backgroundColor: boxColor, transform: [{ translateY: boxPosition }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: "space-evenly",
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default App;
