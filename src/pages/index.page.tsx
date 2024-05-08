import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";
import { createClient } from "~/shared/supabase/client";

const Home: NextPage<any> = (props) => {
  //get query params
  const { isSuccess } = props;
  return (
    <Flex flexDir="column" flex={1}>
      <Flex flex={1} alignItems="center" justifyContent="center">
        <Text data-cy="title" fontSize="2xl" fontWeight="bold">
          {isSuccess ? "Success to Validate" : "Your link expired"}
        </Text>
      </Flex>
    </Flex>
  );
};

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { code } = query;
  let isSuccess = false;
  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.verifyOtp({
      type: "email",
      token_hash: code,
    });
    console.log("error", error);
    if (!error) {
      isSuccess = true;
    }
  }
  return {
    props: {
      isSuccess,
    },
  };
}

export default Home;
