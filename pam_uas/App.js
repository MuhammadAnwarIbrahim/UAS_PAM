import { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, ScrollView, StyleSheet } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: '',
      dataHero: []
    };
  }

  fetchData = async () => {
    fetch('https://indonesia-public-static-api.vercel.app/api/heroes?q=' + this.state.searchData)
      .then((response) => response.json())
      .then((json) => this.setState({ dataHero: json }, () => console.log(json)))
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#128', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>Pahlawan Nasional</Text>

        </View>
        <View style={{ flex: 5 }}>
          <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: 10 }}>
            <View >
              <TextInput

                placeholder='Input Kata Kunci'
                onChangeText={(value) => this.setState({ searchData: value })}
                style={{
                  marginHorizontal: 20, paddingHorizontal: 10,
                  borderBottomColor: '#000', borderBottomWidth: 2, width: 230
                }}
              />
            </View>
            <View >
              <TouchableOpacity style={{
                backgroundColor: '#000',
                paddingHorizontal: 20,
                paddingVertical: 7,
                borderRadius: 10,
                elevation: 5
              }}
                onPress={() => this.fetchData()}
              >
                <Text style={{ color: '#fff' }}>Cari</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <FlatList
          data={this.state.dataHero}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => (
            <View style={{
              flexDirection: 'column',
              borderWidth: 1,
              borderColor: '#DDD',
              alignItems: 'flex-start'
            }}>
              <Text>Nama             :{item.name}</Text>
              <Text>Tahun Lahir      :{item.birth_year}</Text>
              <Text>Tahun Meninggal  :{item.death_year}</Text>
              <Text>Tahun Di Angkat  :{item.ascension_year}</Text>
              <Text>Deskripsi        :{item.description}</Text>


            </View>
          )}
        />

      </View>
    )
  }
}

export default App;
