import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
const GoalInput = (props) => {
  return (
    <Modal visible={props.modal} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')}/>
      <TextInput
      placeholderTextColor={'white'}
        style={styles.textInput}
        onChangeText={props.goalInputHandler}
        value={props.value}
        placeholder="Your course goal"
      />
      <View style={styles.buttonsView}>
      <Button title="Add Goal" color={'#a3e635'} onPress={props.addGoalHandler} />
      <Button title="Cancel" color={'#f87171'} onPress={props.cancel} />
      </View>
    </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: '#5e0acc',
    marginTop: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 16,
    color: 'white',
    borderRadius: 15,
    backgroundColor: '#5e0acc'

  },
  buttonsView: {
    gap: 10,
    margin: 20,
    width: '100%',
    flexDirection: 'row',
    alignContent:'center',
    justifyContent: 'center'
    
  },
  button: {
    width: "100%"
  },
  image: {
    width: 100,
    height: 100
  }
});
