import { StyleSheet, View } from "react-native-web";
import theme from "../theme";
import StyledText from "./StyledText";

const RepositoryItemHeader = ({ description, language, name, url }) => {
  return (
    <View>
      <StyledText fontWeight="bold" fontSize="subheading">
        {name}
      </StyledText>
      <StyledText>{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
      <StyledText>{url}</StyledText>
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
  },
});

export default RepositoryItemHeader;
