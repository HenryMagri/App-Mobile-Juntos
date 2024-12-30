import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container1: {
    height: '91%',
    width: '100%',
    backgroundColor: 'white'
  },

  container2: {
    backgroundColor: 'white',
    height: 'auto',
    width: '100%',
    padding: '3%',
    flexDirection: 'row',
    elevation: 10,
    shadowOpacity: 1,
    shadowColor: "black",
    shadowRadius: 20,
    shadowOffset: { width: 2, height: 2 },
    borderBottomColor: "#c6c6c6",
    borderBottomWidth: 1
  },

  starContainer: {
    flexDirection: 'row',
  },

  textSelect: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: '2%'
  },


  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: '2%',
    right: '2%',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#ffff',
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#f15a24',
    fontSize: 16,
    fontWeight: 'bold'
  },

  imageContainerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    width: '90%'
  },

  imageIcon: {
    width: 25,
    height: 25,
    marginRight: '2%'
  },

  cardIconText: {
    fontSize: 15,
    textAlign: 'left',
  },

  scroll: {
    height: '92%',
    width: '100%',
    backgroundColor: 'e2e2e2',
  },

  cardsContainer: {
    borderColor: 'white',
    paddingBottom: '0%',
    marginLeft: '-1%',
    marginTop: '-1%',
    width: '102%',
    borderWidth: 0,
    height: 'auto'
  },

  logo: {
    width: 200,
    height: 200,
  },

  cardTitle: {
    fontSize: 20,
    color: '#1b1464',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: '3%'
  },

  cardSubTitle: {
    fontSize: 20,
    color: '#1b1464',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: '3%',
    marginTop: '3%'
  },

  cardSlogan: {
    fontSize: 15,
    color: 'black',
    textAlign: 'justify',
    fontWeight: 'regular',
    paddingBottom: '5%'
  },

  cardIcon: {
    height: 24,
    width: 24,
    marginRight: '4%'
  },

  cardTextContainer1: {
    height: 'auto',
    width: '71%',
    color: 'white',
    padding: "2%"
  },

  flatComentarios: {
    width: '100%',
  },

  cardTextContainer2: {
    height: 'auto',
    width: '65%',
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '2%'
  },

  card: {
    borderRadius: 20,
    width: '95%',
    marginBottom: '4%',
    backgroundColor: "white",
    alignContent: "space-between",
    flexDirection: 'column',
    height: 250,
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    padding: '5%'
  },

  touch: {
    paddingTop: '2%'
  },

  cardBack: {
    position: 'absolute',
    top: 0,
  },

  container4: {
    padding: 10,
    alignItems: 'center',
    width: '100%'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: '5%',
    borderRadius: 5,
    marginTop: '5%',
    width: '100%'
  },
  comment: {
    padding: '5%',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: '2%'
  },

  comentario: {
    fontSize: 15,
    paddingTop: '2%'
  },

  buttonInfo: {
    width: '70%',
    height: '7%',
    backgroundColor: '#e2e2e2',
    borderRadius: 5,
    marginBottom: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButtonInfo: {
    color: '#ef5b1e',
    fontSize: 15,
    fontWeight: 'bold'
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginTop: '-1%',
    fontSize: 18,
    color: '#ef5b1e',
    fontWeight: "bold",
  },
  inputAndroid: {
    marginTop: '-1%',
    fontSize: 18,
    color: '#ef5b1e',
    fontWeight: "bold",
  },
  iconContainer: {
    marginTop: '-3%',
    top: 0,
    right: 0,
  },
  placeholder: {
    marginTop: '-3%',
    color: '#1b1464',
    fontSize: 18,
  },
});