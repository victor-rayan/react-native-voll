import { NativeBaseProvider,Image, VStack, FormControl, Input, Button, Box, HStack, Link, Text } from 'native-base';
import Logo from './assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Title } from './components/Title';
import { CustomInput } from './components/Inputs';

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" mt={5} />
      <Title>Faça Login em sua conta</Title>
      <Box>
        <CustomInput placeholder="Digite seu email">Email</CustomInput>
        <CustomInput placeholder="Digite sua senha">Senha</CustomInput>
      </Box>
      <Button w="100%" bg="blue.800" mt={10} borderRadius="lg">
        Entrar
      </Button>
      <Link mt={2} href="https://www.google.com">
        Esqueceu sua senha?
      </Link>
      <Box mt={5} w="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text ml={2} color="blue.500">
            Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

