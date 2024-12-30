import Reac from 'react';
import { Text, View, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { Image } from 'expo-image';
import { styles } from './styles';

import Wallpaper from '../../icons/wallpaper.png'
import Instagram from '../../icons/instagram.png'
import Facebook from '../../icons/facebook.png'
import Youtube from '../../icons/youtube.png'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Landing = () => {

  return (
    <View style={styles.scroll}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
      >
        <Image source={Wallpaper} style={{ width: screenWidth, height: 1.6 * screenWidth }} contentFit="cover" />
        <View style={styles.container1}>
          <Text style={styles.title1}>APRESENTAÇÃO</Text>
          <Text style={styles.text}>    O Projeto <Text style={styles.juntos}>JUNTOS</Text> é um Ministério da Igreja Adventista do Sétimo Dia – IASD.</Text>
          <Text style={styles.text}>    É formado por um grupo de voluntários, membros da Associação Sul-Matogrossense da IASD, com foco em treinamento, capacitação, relacionamento, missão, evangelismo e empreendedorismo cristão. Amigos e parceiros dos Associados do Projeto podem eventualmente participar das atividades, como forma de se relacionar, e conhecer melhor esse ministério.</Text>
          <Text style={styles.text}>    É destinado à empreendedores, empresários, estudantes universitários e profissionais da iniciativa pública e privada.</Text>
          <Text style={styles.text}>    O foco do projeto é a educação contínua de seus associados, nos princípios cristãos de empreendedorismo e carreira. O <Text style={styles.juntos}>JUNTOS</Text> acredita que cristãos precisam ser os melhores empresários, profissionais e estudantes da sociedade, por que isso, é um meio extremamente eficaz de pregação do Evangelho, através do meio mais poderoso de pregação: O Exemplo.</Text>
          <Text style={styles.text}>    O <Text style={styles.juntos}>JUNTOS</Text> também crê que ser um “mordomo fiel” passa pelo aspecto do que fazemos com os nossos dons e recursos que temos. Logo, questões como ética, profissionalismo, honestidade, competência e a busca pela excelência profissional é a melhor forma de administrar nossos bens e talentos profissionais que Deus nos concedeu.</Text>
          <Text style={styles.text}>    Por fim, o <Text style={styles.juntos}>JUNTOS</Text> acredita no valor da colaboração, do apoio mútuo, do cooperativismo e da união para amenizar os problemas da sociedade. Cremos que <Text style={styles.juntos}>JUNTOS</Text>, podemos já entre nós associados, amenizar as crises econômicas, desemprego, a falta de oportunidades, e a capacitação profissional. Cremos, como ministério cristão, de que somos responsáveis por estender a mão e ajudar empresários, empreendedores, profissionais e universitários à encontrar um lugar de acolhimento, e de apoio.</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.title2}>REDES SOCIAIS</Text>
          <View style={styles.container3}>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/portaljuntos/') }} style={styles.button}>
              <Image source={Instagram} style={{ width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/portaljuntos') }} style={styles.button}>
              <Image source={Facebook} style={{ width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCRHJH9qJPGKL3r5WzFDsRuA') }} style={styles.button}>
              <Image source={Youtube} style={{ width: '100%', height: '100%' }} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Landing;