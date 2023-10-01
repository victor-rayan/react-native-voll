import { Input, FormControl, IInputProps } from 'native-base';
import { ReactNode } from 'react';

interface CustomInputProps extends IInputProps  {
    children: ReactNode;
}

export function CustomInput({children, ...rest}: CustomInputProps){
    return (
      <FormControl mt={3}>
      <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>{children}</FormControl.Label>
      <Input 
        placeholder='Digite seu email'
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
        {...rest}
      />
    </FormControl>
    )
}
