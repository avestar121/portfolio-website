'use client'

import React, {useState} from 'react'
import {FormControl,FormErrorMessage,FormLabel,Heading, Input, Textarea, Button, Text, useToast, Flex} from "@chakra-ui/react"
import sendContactForm from '../lib/api'

const initValues = {
  name: "",
  email: "",
  message: ""
}

const initState = {values: initValues}

const Contact = () => {
  const toast = useToast()
  const [state, setState] = useState(initState);
  const[touched,setTouched] = useState({})

  const {values, isLoading, error} = state;

  const handleBlur = ({target}) => {
    setTouched((prev) => ({...prev, [target.name]: true}))
  }

  const handleSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading:true
    }))
    try{
      await sendContactForm(values)
      setTouched({})
      setState(initState)
      toast({
        title: "Message Sent",
        status: "success",
        duration: 2000,
        position: "top"
      })
      console.log("messagesent")
    }catch(error){
      setState((prev) => ({
        ...prev,
        isLoading:false,
        error:error.message
      }))
    }
  }

  const handleChange = ({target}) => 
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      }
    }))

  return (
    <div className='contact' id='contact'>
      <p className="contactHeading" color="white">Contact</p>
      {error && (
        <Text color="red.500" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <Flex direction="column" alignItems="center" width="70%">
      <FormControl isRequired isInvalid={touched.name && !values.name}>
        <FormLabel>Name</FormLabel>
        <Input 
          type='text' 
          name="name" 
          placeholder="Name" 
          value={values.name} 
          onChange={handleChange} 
          onBlur={handleBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email}>
        <FormLabel marginTop="10px">Email</FormLabel>
        <Input 
          type='email' 
          name="email" 
          placeholder="Email" 
          value={values.email} 
          onChange={handleChange}
          onBlur={handleBlur}/>
          <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.message && !values.message}>
        <FormLabel marginTop="10px">Message</FormLabel>
        <Textarea 
          type='text' 
          rows={5} 
          name="message" 
          placeholder="Message"  
          value={values.message} 
          onChange={handleChange}
          onBlur={handleBlur}/>
          <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button 
        variant="outline"
        colorchema="blue"
        isLoading={isLoading}
        disabled={!values.name || !values.email || !values.message}
        onClick={() => handleSubmit()}
        _hover={{ backgroundColor: "transparent" , color:"white"}}
        marginTop='10px'
        color='black'
        background='white'
        >
        Submit
      </Button>
      </Flex>
    </div>
  )
}

export default Contact