import React from 'react';
import { PASSWORD_RESET } from '../../Api';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const LoginResetPassword = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { request, loading, error } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const login = params.get('login');
    const key = params.get('key');

    if (login) setLogin(login);
    if (key) setKey(key);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);

      if (response.ok) navigate('/login');
    }
  };

  return (
    <section className='animeLeft'>
      <Head title='Redefina a Senha'/>
      <h1 className="title">Redefina a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Redefinindo...</Button>
        ) : (
          <Button>Redefinir</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginResetPassword;
