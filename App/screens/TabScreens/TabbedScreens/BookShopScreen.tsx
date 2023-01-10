import { FlatList, StyleSheet, View, TouchableOpacity, ViewToken } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { ListItem } from '../../../components/ListItem';
import { COLORS } from '../../../constants';

const data = new Array(10).fill(0).map((_, index) => ({ id: index }));
// [{id: 0}, {id: 1}, {id: 2}, ..., {id: 49}]

export default function App() {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 2
                }}
                onPress={() => console.log("Sign Up")}
            >
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.white
                    }}
                />

                <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>Sign Up</Text>
            </TouchableOpacity>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => {
          return <ListItem item={item} viewableItems={viewableItems} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});