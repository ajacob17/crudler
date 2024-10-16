import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";

import initialModules from "../../data/modules.js";

 const ModuleListScreen = () => {
  //Initialization
  const modules = initialModules;

  //State
  //Handlers
  const handleSelect = () => alert('item selected');

  //View

  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return (
            <Pressable onPress = {handleSelect}>
              <View key={module.ModuleCode} style={styles.item}>
                <Text style={styles.text}>
                  {module.ModuleCode} {module.ModuleName}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  text: {
    fontSize: 16,
  },
});

export default ModuleListScreen;
