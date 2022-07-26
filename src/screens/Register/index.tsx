import { VStack } from 'native-base';
import { Button } from '../../components/button';
import { Header } from '../../components/Header';
import { Input } from '../../components/input/Input';

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
<Header title='Nova solicitacao'/>
<Input
placeholder='Numero do patrimonio'
mt={4}
/>
<Input
placeholder='Descricao do problema'
flex={1}
mt={5}
multiline
textAlignVertical='top'
/>
<Button title='Cadastrar' mt={5}/>
    </VStack>
  );
}