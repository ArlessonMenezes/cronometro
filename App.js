import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity , Image } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      botao: 'Go!',
      ultimo: null
    }
    this.timer = null
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar() {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null

      this.setState({ botao: 'Go!' })
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100)

      this.setState({ botao: 'Stop' })
    }
  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
    }

    this.setState({
      ultimo: this.state.numero,
      numero: 0, 
    })
  }

  render() {
    return(
      <View style={ styles.container }> 

        <Image 
          source={ require('./img/cronometro.png') }
          style={ styles.cronometro } 
        />

        <Text style={ styles.timer }>{ this.state.numero.toFixed(1) }</Text>

       <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={ styles.btn } onPress={ this.iniciar }>
            <Text style={ styles.btnText }>{ this.state.botao }</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ styles.btn } onPress={ this.limpar }>
            <Text style={ styles.btnText }>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={ styles.areaUltimo }>
          <Text style={ styles.textoUltimo }>
           {this.state.ultimo > 0 ? 'Ultimo tempo: ' +  this.state.ultimo.toFixed(1) + 's' : ''}
          </Text>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'
  },
  cronometro: {
    marginBottom: -190,
  },
  timer: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
  btn: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 17,
    marginTop: 110,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltimo: {
    marginTop: 40,
  },
  textoUltimo: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }
})

export default App;