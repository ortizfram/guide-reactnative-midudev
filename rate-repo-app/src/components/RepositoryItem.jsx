import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { repositories } from "../../data/repositories";
import StyledText from "./StyledText";

const RepositoryItem = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <View key={repo.url} style={styles.ViewRenderItem}>
          <StyledText fontWeight="bold" fontSize="subheading">
            {repo.name}
          </StyledText>
          <StyledText>{repo.description}</StyledText>
          <StyledText>{repo.language}</StyledText>
          <StyledText>{repo.stars}</StyledText>
          <StyledText>{repo.url}</StyledText>
        </View>
      )}
      keyExtractor={(item) => item.url}
    />
  );
};

const styles = StyleSheet.create({
  ViewRenderItem: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;
