# 📚 REACT-NATIVE GUIDE

### < View>
- es lo mas parecido a un div con `flexbox`

### < TextInput>
### < Touchable>
Hay varios lo unico que cambia es que hacen al interactuar
- componentes que el usuario puede tocar **boton**
- siempre van con un `onPress()`
- **NO** se puede usar con vista ni text
### < Alert>
```jsx
<TouchableWithoutFeedback 
 onPress={()=> Alert.alert("Hemos tocado Holass")}>
  <Text >Holass</Text>
</TouchableWithoutFeedback>
```
### < FlatList> < ScrollView>
- flat esta pensado para rendimiento cuando es una vista de elementos
- scroll cuando el texto no entra 
```jsx
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
```