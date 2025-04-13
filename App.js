import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalInput from './components/goal-input';
import GoalItem from './components/goal-item';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false)

  function goalInputHandler(enteredText) {
    console.log(enteredText)
    setEnteredGoalText(enteredText);
  }
  function cancel() {
    setEnteredGoalText('')
    setModal(false)
  }

  function addGoalHandler() {
    if (!enteredGoalText.trim()) return; // prevent empty goals

    setGoals(currentGoals => [
      ...currentGoals,
      { id: Date.now().toString(), text: enteredGoalText }
    ]);
    setEnteredGoalText('');
    setModal(false)
  }

  function deleteGoal(id) {
    setGoals(prevItems => prevItems.filter(item => item.id !== id));
  }
  function startAddGoalHandler() {
    setModal(true)
  }

  return (
    <View style={styles.container}>
      <Button title='add new goal' color={'#5e0acc'} onPress={startAddGoalHandler}>
      </Button>
      {modal && <GoalInput modal={modal} cancel={cancel} goalInputHandler={goalInputHandler} value={enteredGoalText} addGoalHandler={addGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={true}
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GoalItem styles={styles} deleteGoal={deleteGoal} item={item} />
          )}
        />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  goalText: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    fontSize: 15,
    color: 'white',
  },
  deleteBtn: {
    marginLeft: 10,
  },
});
