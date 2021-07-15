import Head from 'next/head';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Tab, Tabs } from 'react-bootstrap';
import { ProvideAuth, useAuth } from '../utils/auth/useAuth';

export default function Home() {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const signIn = ({ Email, password }) => {
    auth
      .signup(Email, password)
      .then(() => {
        console.log('success');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class='flex bg-blue-300 w-screen h-screen justify-center items-center'>
      <div class='flex flex-col bg-gray-700 w-9/12 h-1/2 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-3/4'>
        <form
          class='flex flex-col w-full h-full items-center justify-center'
          onSubmit={handleSubmit((data) => signIn(data))}
        >
          <input
            class='w-3/4 m-2 p-2'
            placeholder='Email'
            name='email'
            {...register('Email', { required: true })}
          />

          <input
            class='w-3/4 m-2 p-2'
            placeholder='Password'
            name='pass'
            {...register('password', { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <input class='w-3/4 m-2 p-2' type='submit' />
        </form>
      </div>
    </div>
  );
}
