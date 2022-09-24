import type { NextPage } from 'next';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

const Home: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormData>();
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  console.log(errors);
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email", {
              required: 'Email obrigatório'
            })}
          />
          <Input type="password" label="Senha" {...register("password")} />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
};

export default Home;
