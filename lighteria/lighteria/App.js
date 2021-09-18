import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* cabecalho */}
        <View style={{ color: '#464545' }}>
          <Text style={{ fontSize: 15, margin: 10, color: '#464545' }} >ListaProdutos</Text>
        </View>
        {/* secao de imagens */}
        <View style={styles.sectionImages}>
          {/* categorias */}
          <View style={styles.category}>

            {/* title images*/}
            <View style={styles.titleImages}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', flexWrap: 'wrap',  flexWrap: 'wrap',flex: 1,
          flexBasis: 0,
          flexShrink: 0, }}>Lighteria</Text>
              <View style={styles.boxIcon}>
                <Image style={{ width: 35, height: 35 }} source={require('./assets/images/icone-sacola.png')} />
              </View>
            </View>

            {/* linha das categorias */}
            <View style={styles.category}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#a4a4a5' }} />
              <View>
                <Text style={{ width: 80, textAlign: 'center', fontSize: 15, color: '#a4a4a5' }}>Categorias</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: '#a4a4a5' }} />
            </View>

          </View>

          {/* imagens */}
          <View style={styles.box}>
            <Image style={[styles.image, {}]} source={require('./assets/images/01-tablelamps.png')} />
            <Text style={{ color: '#a4a4a5' }}>Abajur</Text>
          </View>
          <View style={styles.box}>
            <Image style={[styles.image, {}]} source={require('./assets/images/02-ceilinglamps.png')} />
            <Text style={{ color: '#a4a4a5' }}>Lâmpada de teto</Text>
          </View>
          <View style={styles.box}>
            <Image style={[styles.image, {}]} source={require('./assets/images/03-sconces.png')} />
          <Text style={{ color: '#a4a4a5' }}>Arandela</Text>
          </View>
          <View style={styles.box}>
            <Image style={[styles.image, {}]} source={require('./assets/images/04-floorlamps.png')} />
            <Text style={{ color: '#a4a4a5' }}>Luminária de chão</Text>
          </View>
          <View style={styles.box}>
            <Image style={[styles.image, {}]} source={require('./assets/images/05-lightdecor.png')} />
          <Text style={{ color: '#a4a4a5' }}>Pendant light</Text>
          </View>
          <View style={styles.box}>
            <Image style={[styles.image, {}]} source={require('./assets/images/06-garlands.png')} />
          <Text style={{ color: '#a4a4a5' }}>Garlands</Text>
          </View>
          <View style={styles.box}>
            <Image style={[styles.image, {}]} source={require('./assets/images/bgimage.png')} />
          <Text style={{ color: '#a4a4a5' }}>Desk lamp</Text>
          </View>
          <View style={styles.box}>
            <Image style={[styles.image, {}]} source={require('./assets/images/detalhes-table-lamp.png')} />
          <Text style={{ color: '#a4a4a5' }}>Luminária</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  sectionImages: {
    flex: 1,
    backgroundColor: '#f3e3f5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: "wrap"
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 80,
    margin: 10
  },
  boxIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleImages: {
    backgroundColor: '#f3e3f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 12,
    marginRight: 12,
  },
  category: {
    backgroundColor: '#f3e3f5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 15,

  }

});
export default App;

