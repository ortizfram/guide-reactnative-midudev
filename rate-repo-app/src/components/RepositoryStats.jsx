import { View } from "react-native";
import React from "react";
import StyledText from "./StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100 / 10)}k` : String(value);
};

const RepositoryStats = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText>⭐ {parseThousands(stars)}</StyledText>
      </View>
      <View>
        <StyledText>🍴 {parseThousands(forks)}</StyledText>
      </View>
      <View>
        <StyledText>💬 {reviews}</StyledText>
      </View>
      <View>
        <StyledText>💠{rating}</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
