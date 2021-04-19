import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Navitem from './Navitem'
import Navadd from './Navadd'
import { Container, Flex,Stack } from "@chakra-ui/react"

export default function Navbar() {
    
    const state = useSelector(state => state.navReducer)
    return (
        <>
            <Container  m="0 auto" pt="50px">
                <Flex w="600px" justify="left" alignItems="center" flexWrap="wrap">
                    {state.map((data)=>{
                        return <Navitem key={data.url} data={data} />
                    })}
                    <Navadd  float="right" w="108px" h="108px" />
                </Flex>
            </Container>
        </>
    )
}
