import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { repositories } from "../../data/repositories";
import { FlatList } from "react-native-web";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={()=> <Text> </Text>}
      renderItem={({ item: repo }) => (
        <View key={repo.url}>
          <Text>{repo.name}</Text>
          <Text>{repo.description}</Text>
          <Text>{repo.language}</Text>
          <Text>{repo.stars}</Text>
          <Text>{repo.url}</Text>
        </View>
      )}
    ></FlatList>
  );
};

export default RepositoryList;

const styles = StyleSheet.create({});
