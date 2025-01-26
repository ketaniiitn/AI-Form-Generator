"use client";
import React, { useActionState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'
import { Sparkle } from 'lucide-react';
import { generateForm } from '@/action/generateForm';

type InitialState ={
  message:string;
  success:boolean;
  data?:any
}
const initialState : InitialState ={
  message:"",
  success:false
}
const GenerateFormInput = () => {
  const [ state,formAction]=useActionState(generateForm,initialState)
  return (
    <form action ={formAction} className='flex items-center gap-4 my-8'>
      <Input type="text" placeholder='Write a promt to generate form..'/>
      <SubmitButton/>
    </form>
  )
}

export default GenerateFormInput
const SubmitButton= ()=>{
  const {pending}=useFormStatus();
  return ( <Button className='h-12 bg-gradient-to-r from-blue-500 to bg-purple-800'><Sparkle className='mr-2'/>{pending?(<span>Generating Form....</span>):("Generate Form")}</Button>)
}