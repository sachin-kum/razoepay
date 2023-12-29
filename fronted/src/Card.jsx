import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ amount, img, checkoutHanlder }) => {
  return (
    <Box>
      <VStack>
        <Image src={img} boxSize={"64"} objectFit={"cover"} />
        <Text>{amount}</Text>
        <Button
          onClick={() => {
            checkoutHanlder(amount);
          }}
        >
          Buy Now
        </Button>
      </VStack>
    </Box>
  );
};

export default Card;
