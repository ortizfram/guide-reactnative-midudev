import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { repositories } from "../../data/repositories";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <View key={repo.url} style={styles.ViewRenderItem}>
          <RepositoryItemHeader
            description={repo.description}
            language={repo.language}
            url={repo.url}
            name={repo.name}
            ownerAvatarUrl={repo.ownerAvatarUrl}
          />
          <RepositoryStats
            stars={repo.stars}
            forks={repo.forks}
            reviews={repo.reviews}
            rating={repo.rating}
          />
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
