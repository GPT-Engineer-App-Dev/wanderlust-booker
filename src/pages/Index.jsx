import { Container, Text, VStack, Box, Heading, Button, Image, HStack } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Travel Booking</Heading>
        <Text fontSize="lg" textAlign="center">Book flights, hotels, and car rentals all in one place.</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaPlane />} colorScheme="teal" size="lg">Book a Flight</Button>
          <Button leftIcon={<FaHotel />} colorScheme="teal" size="lg">Book a Hotel</Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" size="lg">Rent a Car</Button>
        </HStack>
        <Box boxSize="lg">
          <Image src="/images/travel.jpg" alt="Travel" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;