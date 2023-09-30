import { NativeBaseProvider,Image, VStack, FormControl, Input, Button, Box, HStack, Link, Text } from 'native-base';
import Logo from './assets/Logo.png';
import { TouchableOpacity } from 'react-native';

export default function Login() {
  return (

    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" mt={5}/>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
        mt={5}
      >
        Faça Login em sua conta
      </Text>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>Email</FormControl.Label>
          <Input 
            placeholder='Digite seu email'
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>Senha</FormControl.Label>
          <Input 
            placeholder='Digite sua senha'
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
          />
        </FormControl>
      </Box>
      <Button
        w="100%"
        bg="blue.800"
        mt={10}
        borderRadius="lg"
      >Entrar</Button> 
      <Link mt={2} href="https://www.google.com">
        Esqueceu sua senha?
      </Link> 
      <Box mt={5} w="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
        <Text ml={2} color="blue.500">Faça seu cadastro</Text>
        </TouchableOpacity>  

      </Box>

    </VStack> 
    
  );
}

