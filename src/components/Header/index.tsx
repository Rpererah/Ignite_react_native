import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, IconButton, StyledProps, useTheme, VStack } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';


type Props=StyledProps & {
title:string;
}

export function Header({title,...rest}:Props) {
  function handleBack(){
    navigation.goBack();
  }
const navigation=useNavigation();

    const {colors}=useTheme()
  return (
    <HStack
    w='full'
    justifyContent='space-between'
    alignItems='center'
    bg='gray.600'
    pb={6}
    pt={12}
    {...rest}
    >
        <IconButton
        onPress={handleBack}
        icon={
        <CaretLeft color={colors.gray[200] } size={24}
      
        />
    }
        />
        <Heading color='gray.100' textAlign='center' fontSize='lg' flex={1}
        ml={-6}
         >
{title}
        </Heading>

    </HStack>
  );
}