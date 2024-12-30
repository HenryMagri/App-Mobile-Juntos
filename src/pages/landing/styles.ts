import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#1b1464",
    padding: '5%',
  },

  container2: {
    flex: 1,
    backgroundColor: "#e2e2e2",
    padding: '5%',
    alignItems: 'center'
  },

  container3: {
    flex: 1,
    backgroundColor: "#e2e2e2",
    padding: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:'80%'
  },

  scroll: {
    height: '91%',
    width: '100%'
  },

  text: {
    color: 'white',
    textAlign: 'justify',
    paddingBottom: '5%',
    fontSize: 15,
    fontWeight: 'regular'
  },

  title1: {
    color: '#ef5b1e',
    textAlign: 'center',
    paddingBottom: '5%',
    fontSize: 24,
    fontWeight: '600'
  },

  title2: {
    color: '#1b1464',
    textAlign: 'center',
    paddingBottom: '5%',
    fontSize: 20,
    fontWeight: '600'
  },

  juntos: {
    color: '#ef5b1e',
    textAlign: 'center',
    paddingBottom: '5%',
    fontSize: 15,
    fontWeight: '600'
  },

  button: {
    width: 50,
    height: 50,
  }
});