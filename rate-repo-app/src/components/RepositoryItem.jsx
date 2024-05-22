import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { repositories } from "../../data/repositories";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
import { Image } from "react-native-web";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <View key={repo.url} style={styles.ViewRenderItem}>
          <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
          <RepositoryItemHeader
            description={repo.description}
            language={repo.language}
            url={repo.url}
            name={repo.name}
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

  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    overflow: "hidden",
  },
});

export default RepositoryItem;
