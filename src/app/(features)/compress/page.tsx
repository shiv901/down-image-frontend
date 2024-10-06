'use client';

import FileDropper from '@/components/FileDropper';

export default function Page() {
  // const fileAction = async (formData: FormData) => {
  //   'use server';
  //   const file = formData.get('file') as File;

  //   console.log(file);
  // };

  // const fileAction = async (e: ChangeEvent<HTMLFormElement>) => {
  //   const file = e.target.files;
  // };

  return (
    <>
      <h1>Please select file to compress</h1>
      {/* <form onSubmit={(e) => fileAction(e)} className='flex gap-4'>
        <Input type='file' name='file' className='w-fit' onChange={(e) => fileAction(e)} />
        <Button type='submit'>Submit</Button>
      </form> */}
      <FileDropper onSubmit={(file) => console.log(file)} />
    </>
  );
}
