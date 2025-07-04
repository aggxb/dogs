import React from 'react';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <Head title='Login' />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <Error error={error} />}
      </form>
      <Link className={styles.forgot} to="/login/perdeu">
        Esqueceu a senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastro</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
