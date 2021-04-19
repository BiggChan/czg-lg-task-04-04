import React,{useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody, FormHelperText,Text,
    ModalCloseButton, Input, FormControl, FormLabel, useDisclosure, Button,Box
} from "@chakra-ui/react"
import { useFormik } from "formik";
import { useDispatch } from "react-redux"

export default function Navadd() {
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const formik = useFormik(
        {
            initialValues: { name: '', url: '' },
            onSubmit: function (values, { setSubmitting,setValues }) {
                if(values.name && values.url){
                    dispatch({type:'add',payload:values})
                    onClose()
                }
                setValues({
                    name: '', url: ''
                })
                setSubmitting(false);
            }
        })

    return (
        <>
            <Button  m="10px"  w="108px" h="108px" fontSize="48px" onClick={onOpen}>+</Button>
            <form >
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>添加</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl isRequired>
                                <FormLabel>名称</FormLabel>
                                <Input name="name"
                                    value={formik.values.name}
                                    type="text"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>URL</FormLabel>
                                <Input  name="url" value={formik.values.url}
                                    type="text"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>取消</Button>
                            <Button onClick={formik.handleSubmit} isLoading={formik.isSubmitting } >确定</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </form>
        </>
    )
}
