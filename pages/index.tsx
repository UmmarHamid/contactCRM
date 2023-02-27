import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import TextArea from '@/components/TextArea/TextArea';
import Head from 'next/head';
import { supabase } from '../lib/subabaseClient';

export default function Home({ poets }: any) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Hello Next</main>
      {poets &&
        poets.map((poet: any) => {
          return (
            <h1 className="text-4xl" key={poet.id}>
              {poet.name}
            </h1>
          );
        })}
      <div className="inline-flex flex-col space-y-2">
        <TextArea variant="default" placeholder="input" name="textarea" />
        <Input variant="default" placeholder="input" name="input" />
        <Button variant="primary-rounded" text="Primary" />
        <Button variant="secondary-rounded" text="Secondary" />
        <Button variant="tertiary-rounded" text="Tertiary" />
        <Button variant="tertiary-outline" text="Button" />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('poets').select();
  return {
    props: {
      poets: data,
    },
  };
}
