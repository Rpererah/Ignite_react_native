import { VStack,Heading,Icon,useTheme } from 'native-base';
import {Envelope,Key} from 'phosphor-react-native'
import React,{useState} from 'react';
import Logo from '../../assets/logo_primary.svg';
import { Button } from '../../components/button';
import { Input } from '../../components/input/Input';


export function SignIn() {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');

    function handleSignIn(){
        console.log(name, password);
    }

    const {colors}=useTheme();
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24} >
        <Logo/>
        <Heading color="gray.100" fontSize={'2xl'} mt={20} mb={6}>
            Acesse sua conta {name}
        </Heading>
        <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon ml={4} as={<Envelope color={colors.gray[300]} />}/>}
        onChangeText={setName}
        />
        <Input
        mb={8}
        secureTextEntry
        placeholder="Senha"
        InputLeftElement={<Icon ml={4} as={<Key  color={colors.gray[300]}/>} />}
        onChangeText={setPassword}
        />
        <Button title='Entrar' w='full' onPress={handleSignIn}/>
    </VStack>
  );
}