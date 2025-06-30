import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { LOST_PASSWORD } from '../../Api';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginLostPassword = () => {
  const login = useForm();
  const { request, data, loading, error } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = LOST_PASSWORD({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
    }
  };

  return (
    <section className='animeLeft'>
      <Head title="Perdeu a Senha" />
      <h1 className="title">Esqueceu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginLostPassword;
