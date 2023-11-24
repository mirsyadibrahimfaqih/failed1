import React, { useEffect, useState } from 'react';
import GetDetailMovie from '../../utils/constants/networks/GetDetailMovie';
import { useParams } from 'react-router-dom';
import { Box, Flex, Heading, Image, Text, Button, Link } from '@chakra-ui/react';
import { css } from '@emotion/react';

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  const backdropImageUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  const tmdbUrl = `https://www.themoviedb.org/movie/${id}`;

  const getDetail = async (id) => {
    try {
      const data = await GetDetailMovie(id);
      setMovie(data);
      setGenres(data.genres);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  const linearGradientStyle = css`
    background: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);
    color: white;
  `;

  return (
    <Box
      as="section"
      bg={`url(${backdropImageUrl})`}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      borderRadius="0 0 25px 25px"
      py={{ base: '4', md: '8' }}
      position="relative"
    >
      <Flex maxW="container.xl" mx="auto" px={{ base: '4', md: '8' }} direction={{ base: 'column', lg: 'row' }} alignItems="start">
        <Image
          src={url_image}
          alt=""
          borderRadius="25px"
          maxW={{ base: '100%', md: '300px' }}
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: 'scale(1.1)' }}
          order={{ base: 2, lg: 1 }}
        />
        <Box
          flexBasis={{ base: '100%', md: '60%' }}
          p={{ base: '4', md: '6' }}
          bg="rgba(0, 0, 0, 0.7)"
          borderRadius={{ base: '0 0 25px 25px', md: '25px' }}
          color="white"
          mb={{ base: '4', md: '0' }}
          order={{ base: 1, lg: 2 }}
        >
          <Heading
            as="h1"
            color="#fff"
            fontSize={{ base: '2rem', md: '2.5rem', lg: '3rem' }}
            mb={{ base: '2', md: '4' }}
            fontWeight="bold"
          >
            {movie.title}
          </Heading>
          <Flex direction="row" wrap="wrap" justify="start">
            {genres.map((item) => (
              <Text
                key={item.id}
                colorScheme="blue"
                m="1"
                fontSize={{ base: '1rem', md: '1.25rem', lg: '1.5rem' }}
                fontWeight="bold"
                textDecoration="underline" 
              >
                {item.name}
              </Text>
            ))}
          </Flex>
          <Text fontSize={{ base: '1rem', md: '1.25rem', lg: '1.5rem' }} mb="2" fontWeight="semibold">
            {movie.overview}
          </Text>
          <Button as={Link} href={tmdbUrl} target="_blank" rel="noopener noreferrer" css={linearGradientStyle} mt="4">
            View on TMDb
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Detail;
