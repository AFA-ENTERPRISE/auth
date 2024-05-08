import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex justifyContent="center">
      <Text data-cy="footer-text" mr={1} fontWeight="medium">
        Powered by
      </Text>
      <Link data-cy="author-link" href="#" target="_blank" rel="noreferrer">
        <Text data-cy="author-name" color="orange.300" fontWeight="semibold">
          AFA
        </Text>
      </Link>
    </Flex>
  );
}
