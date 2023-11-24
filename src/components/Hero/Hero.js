import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

const Hero = () => {

    const [movie, setMovie] = useState({})

    async function getDataApi() {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"

        const response = await fetch(url)
        const data = await response.json()

        setMovie(data)
    }

    useEffect(
        function(){
            getDataApi()
        }, []
    )

        return (
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
              <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                  <Heading fontSize={{ base: '3xl', md: '5xl', lg: '5xl' }}>
                    <Text color={'blue.500'} as={'span'}>
                      {movie.Title}
                    </Text>{' '}
                  </Heading>
                  <Text fontSize={{ base: 'x-large', lg: 'lg' }} color={'red.500'}>
                    {movie.Genre}
                  </Text>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color={'grey.400'}>
                  {movie.Plot}
                  </Text>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color={'grey.300'}>
                  {movie.Writer}
                  </Text>
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <Button variant='primary'>Watch</Button>
                    <Button variant='secondary'>Trailer</Button>
                  </Stack>
                </Stack>
              </Flex>
              <Flex flex={1} justifyContent={"center"}>
                <Image
                  alt={'Login Image'}
                  height={"auto"}
                  maxW={"400px"}
                  objectFit={'contain'}
                  borderRadius={'25px'}
                  src={
                    movie.Poster
                  }
                />
              </Flex>
            </Stack>
          )
}



export default Hero;