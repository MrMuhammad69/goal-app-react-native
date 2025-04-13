import { View, Text, Button } from "react-native";

const GoalItem = (props) => {
  console.log(props);
  return (
    <View style={props.styles.goalItem} key={props.item.id}>
      <Text style={props.styles.goalText}>{props.item.text}</Text>
      <View style={props.styles.deleteBtn}>
        <Button
          color="red"
          title="Delete"
          onPress={() => props.deleteGoal(props.item.id)}
        />
      </View>
    </View>
  );
};

export default GoalItem;
