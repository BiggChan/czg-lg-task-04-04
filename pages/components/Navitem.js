import React from 'react'
import { Box , Text , Image  } from "@chakra-ui/react"
import styled from '@emotion/styled'


export default function Navitem({data}) {
    // console.log(data.url)
    return (
        <Box m="10px"  w="108px" h="108px">
            <Box as="a" href={data.url}  w="108px" h="108px" target="_blank" display="block" border="1px solid #ddd" >
                <Image mb="10px" w="100%"  alt={data.name} />
                <Text textAlign="center" fontSize="xl">{data.name}</Text>
            </Box>
        </Box>
    )
}
