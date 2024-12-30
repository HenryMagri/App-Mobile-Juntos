import { Text, View, ScrollView, TouchableOpacity, Animated, Modal, FlatList, TextInput } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import RNPickerSelect from 'react-native-picker-select'
import { styles, pickerSelectStyles } from './styles'
import { Image } from 'expo-image'
import { FontAwesome } from '@expo/vector-icons';

import Whatsapp from '../../icons/whatsapp.png'
import Instagram from '../../icons/instagram.png'
import Mapa from '../../icons/mapa.png'
import Email from '../../icons/email.png'

const CardComponent = ({ u }) => {
  const [flipped, setFlipped] = useState(false);
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    fetch(`https://api.jun7os.com/avaliacoes/${u.id}`)
      .then((response) => response.json())
      .then((data) => {
        setAvaliacoes(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  const flipAnim = useRef(new Animated.Value(0)).current;

  const ratings = avaliacoes.map((item) => item.nota);
  const totalRatings = ratings.reduce((sum, rating) => sum + rating, 0);
  const averageRating = totalRatings / ratings.length || 0;

  const flipCard = () => {
    if (flipped) {
      Animated.timing(flipAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(flipAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
    setFlipped(!flipped);
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <TouchableOpacity onPress={flipCard} activeOpacity={1} style={styles.touch}>
      <View>
        <Animated.View style={[styles.card, frontAnimatedStyle, { backgroundColor: u.cor }]}>
          <Image source={{ uri: `https://api.jun7os.com/images/${u.logo}.png` }} style={styles.logo} />
        </Animated.View>

        <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
          <Text style={styles.cardTitle}>{u.nome}</Text>
          <Text style={styles.cardSlogan}>{u.slogan}</Text>
          <View style={styles.imageContainerCard}>
            <Image source={Instagram} style={styles.imageIcon} />
            <Text style={styles.cardIconText}>{u.instagram}</Text>
          </View>
          <View style={styles.imageContainerCard}>
            <Image source={Whatsapp} style={styles.imageIcon} />
            <Text style={styles.cardIconText}>{u.whatsapp}</Text>
          </View>
          <StarRating rating={averageRating} />
          <InfoModalButton nome={u.nome} logo={{ uri: `https://api.jun7os.com/images/${u.logo}.png` }} color={u.cor} instagram={u.instagram} whatsapp={u.whatsapp} slogan={u.slogan} endereco={u.endereco} email={u.email} id={u.id} />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push(
        <FontAwesome key={i} name="star" size={24} color="gold" />
      );
    } else if (i - rating < 1) {
      stars.push(
        <FontAwesome key={i} name="star-half" size={24} color="gold" />
      );
    } else {
      stars.push(
        <FontAwesome key={i} name="star-o" size={24} color="gold" />
      );
    }
  }

  return <View style={styles.starContainer}>{stars}</View>;
};

const InfoModalButton = ({ nome, logo, color, instagram, whatsapp, slogan, endereco, email, id }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <FontAwesome name="info" size={25} color="#f15a24" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
              <Text style={styles.cardTitle}>{nome}</Text>
              <View style={{ backgroundColor: color, borderRadius: 15, alignItems: 'center', marginBottom: '5%' }}>
                <Image source={logo} style={styles.logo} />
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.cardSlogan}>{slogan}</Text>
                <View style={styles.imageContainerCard}>
                  <Image source={Instagram} style={styles.imageIcon} />
                  <Text style={styles.cardIconText}>{instagram}</Text>
                </View>
                <View style={styles.imageContainerCard}>
                  <Image source={Whatsapp} style={styles.imageIcon} />
                  <Text style={styles.cardIconText}>{whatsapp}</Text>
                </View>
                <View style={styles.imageContainerCard}>
                  <Image source={Email} style={styles.imageIcon} />
                  <Text style={styles.cardIconText}>{email}</Text>
                </View>
                <View style={styles.imageContainerCard}>
                  <Image source={Mapa} style={styles.imageIcon} />
                  <Text style={styles.cardIconText}>{endereco}</Text>
                </View>
                <Text style={styles.cardSubTitle}>Deixe sua avaliação</Text>
                <View style={{ width: '100%' }}>
                  <CommentScreen empreendedorName={nome} u={id} />
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};



const CommentScreen = ({ empreendedorName, u }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [empreendedor, setEmpreendedor] = useState(empreendedorName);
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    fetch(`https://api.jun7os.com/avaliacoes/${u}`)
      .then((response) => response.json())
      .then((data) => {
        setAvaliacoes(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);


  const submitComment = () => {
    if (name && rating && comment) {

      const formData = new FormData();

      formData.append('nome', name);
      formData.append('nota', parseFloat(rating));
      formData.append('comentario', comment);
      formData.append('empreendedor_id', u);

      fetch('https://api.jun7os.com/avaliacoes', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Comentário enviado com sucesso:', data);
          setAvaliacoes([data, ...avaliacoes]);
          setName('');
          setRating('');
          setComment('');
          setEmpreendedor(empreendedorName);
        })
        .catch((error) => {
          console.error('Erro ao enviar comentário:', error);
        });
    } else {
      alert('Preencha todos os campos!');
    }
  };


  return (
    <View style={styles.container4}>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nota (0 a 5)"
        value={rating}
        keyboardType="numeric"
        onChangeText={(text) => setRating(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Comentário"
        value={comment}
        onChangeText={(text) => setComment(text)}
      />
      <TouchableOpacity style={styles.buttonInfo} onPress={submitComment}>
        <Text style={styles.textButtonInfo}>Envia Comentário</Text>
      </TouchableOpacity>
      <Text style={styles.cardSubTitle}>Avaliações do Empreendedor</Text>
      <FlatList
        style={styles.flatComentarios}
        data={avaliacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.name}>{item.nome}</Text>
            <StarRating rating={item.nota} />
            <Text style={styles.comentario}>{item.comentario}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhuma avaliação ainda.</Text>}
      />
    </View>
  );
};

export default function Cards() {

  const [categoria, setCategoria] = useState('Todos');

  const [empreendedores, setEmpreendedores] = useState([]);

  const fetchData = async () => {
    try {
      console.log('Iniciando requisição para a API...');

      const response = await fetch('https://api.jun7os.com/empreendedores', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('Resposta recebida com sucesso');

      const data = await response.json();

      setEmpreendedores(data);

      console.log('Dados recebidos:', data);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filter = empreendedores.filter((empreendedores) => (empreendedores.categoria) == categoria)

  if (categoria == 'Todos') {
    return (
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.textSelect}>Categorias:</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => setCategoria(value)}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: "Todos", value: "Todos" }}
            items={[
              { "label": "Alimentação", "value": "Alimentação" },
              { "label": "Imóveis", "value": "Imóveis" },
              { "label": "Planos de Saúde", "value": "Planos de Saúde" },
              { "label": "Odontologia", "value": "Odontologia" },
              { "label": "Marketing Digital", "value": "Marketing Digital" },
              { "label": "Automotivo", "value": "Automotivo" },
              { "label": "Seguros", "value": "Seguros" },
              { "label": "Moda", "value": "Moda" },
              { "label": "Desenvolvimento Pessoal", "value": "Desenvolvimento Pessoal" }
            ]}
          />
        </View>
        <View style={styles.scroll}>
          <ScrollView
            style={{ backgroundColor: '#e2e2e2', paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}
            contentContainerStyle={{ flexGrow: 1 }}
            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
          >
            {empreendedores.map((u) => (
              <CardComponent key={u.id} u={u} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  } else {

    return (
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.textSelect}>Categorias:</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => setCategoria(value)}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: "Todos", value: "Todos" }}
            items={[
              { "label": "Alimentação", "value": "Alimentação" },
              { "label": "Imóveis", "value": "Imóveis" },
              { "label": "Planos de Saúde", "value": "Planos de Saúde" },
              { "label": "Odontologia", "value": "Odontologia" },
              { "label": "Marketing Digital", "value": "Marketing Digital" },
              { "label": "Automotivo", "value": "Automotivo" },
              { "label": "Seguros", "value": "Seguros" },
              { "label": "Moda", "value": "Moda" },
              { "label": "Desenvolvimento Pessoal", "value": "Desenvolvimento Pessoal" }
            ]}
          />
        </View>
        <View style={styles.scroll}>
          <ScrollView
            style={{ backgroundColor: '#e2e2e2', paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}
            contentContainerStyle={{ flexGrow: 1 }}
            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
          >
            {filter.map((u, i) => (
              <CardComponent key={i} u={u} />
            ))}
          </ScrollView>
        </View>
      </View>
    );

  }
}