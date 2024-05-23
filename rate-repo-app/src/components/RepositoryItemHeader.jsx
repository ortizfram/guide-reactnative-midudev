import { Image, StyleSheet, View } from "react-native"; // Ensure this import is correct
import theme from "../theme";
import StyledText from "./StyledText";

const RepositoryItemHeader = ({
  description,
  language,
  name,
  ownerAvatarUrl,
}) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold" fontSize="subheading">
          {name}
        </StyledText>
        <StyledText color="secondary">{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 4,
    marginBottom: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    overflow: "hidden",
  },
});

export default RepositoryItemHeader;
