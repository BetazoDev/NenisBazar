import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native'
import { Content, Left, Body, ListItem, Thumbnail, Text } from 'native-base';

var { width } = Dimensions.get("window")

const SearchedProduct = (props) => {
    const { productsFiltered } = props;
    return(
        <Content style={{ width: width }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem
                        onPress={() => {
                            props.navigation.navigate("Product Detail", {item: item})
                        }}
                        key={item._id}
                        avatar
                    >
                        <Left>
                            <Thumbnail 
                                source={{uri: item.image ? 
                                    item.image : 'https://t2.ea.ltmcdn.com/es/images/6/1/6/por_que_mi_gato_tiene_la_panza_hinchada_y_dura_23616_600.jpg'
                                        }}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                ))
            ) : (
                <View style={styles.center}>
                    <Text style={{ alignSelf:  'center' }}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </Content>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    }
})

export default SearchedProduct;