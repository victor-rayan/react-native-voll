import {
    NativeBaseProvider,
    Image,
    VStack,
    ScrollView,
    Input,
    Button,
    Box,
    Checkbox,
    Link,
    Text,
  } from "native-base";
import Logo from "./assets/Logo.png";
import { Title } from "./components/Title";
import { CustomInput } from "./components/Inputs";
import { useState } from "react";
import { sections } from "./utils/registerText";
  
export default function Register({ navigation}) {
    const [numSections, setNumSections] = useState(1);

    function handleNextSection() {
        if (numSections < sections.length - 1) {
            setNumSections(numSections + 1);
        }
    }

    function handleReturnSection() {
        if (numSections > 0) {
            setNumSections(numSections - 1);
        }
    }

    return (
        <ScrollView flex={1} p={5}>
        <Image alignSelf={"center"} source={Logo} alt="Logo Voll" mt={5} />
        <Title>{sections[numSections].title}</Title>
        <Box>
            {sections[numSections]?.inputText?.map((section) => {
            return (
                <CustomInput key={section.id} placeholder={section.placeholder}>
                {section.label}
                </CustomInput>
            );
            })}
        </Box>

        {numSections == 2 && (
            <Text
            fontWeight={"bold"}
            color={"blue.800"}
            fontSize={"md"}
            mt={4}
            mb={4}
            >
            Selecione seu plano:
            </Text>
        )}

        <Box>
            {sections[numSections]?.checkbox?.map((checkbox) => {
            return (
                <Checkbox key={checkbox.id} value={checkbox.value}>
                {checkbox.value}
                </Checkbox>
            );
            })}
        </Box>
        {numSections > 0 && (
            <Button
            onPress={() => handleReturnSection()}
            w="100%"
            bg="gray.400"
            mt={10}
            borderRadius="lg"
            >
            Voltar
            </Button>
        )}
        <Button
            onPress={() => handleNextSection()}
            w="100%"
            bg="blue.800"
            mt={4}
            borderRadius="lg"
        >
            Avançar
        </Button>
        <Link alignSelf={"center"} mt={2} onPress={() => navigation.navigate('Login')}>
            Já possui conta?
        </Link>
        </ScrollView>
    );
}
  