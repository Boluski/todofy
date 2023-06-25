"use client";

import React from "react";
import { useState } from "react";
import { app } from "../config";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  //Input field state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error states
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const router = useRouter();
  function toDashboard() {
    router.push("/dashboard");
  }
  // Function that handles error Messages in the UI
  function errorMessage(field: string, message: string) {
    setLoading(false);
    if (field == "userNotFound") {
      setEmailError(true);
      setEmailErrorMessage(message);
      setPasswordError(false);
    } else if (field == "wrongPassword") {
      setEmailError(false);
      setEmailErrorMessage(message);
      setPasswordError(true);
      setPasswordErrorMessage(message);
    } else if (field == "all") {
      setEmailError(true);
      setEmailErrorMessage(message);
      setPasswordError(true);
      setPasswordErrorMessage(message);
    }
  }

  // Creates and login a new user
  async function loginUser(email: string, password: string) {
    const auth = getAuth(app);
    setLoading(true);

    // Check if fields are empty
    if (email == "" || password == "") {
      errorMessage("all", "");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.uid);
          toDashboard();
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);

          if (errorCode == "auth/wrong-password") {
            errorMessage("wrongPassword", "Password is not correct.");
          } else if (errorCode == "auth/user-not-found") {
            errorMessage("userNotFound", "This email is not registered.");
          }
        });
    }
  }

  return (
    <>
      <Stack
        width={"50%"}
        bgColor={"#F5F5F5"}
        justify={"center"}
        align={"center"}
      >
        <FormControl
          isRequired
          width={"lg"}
          bgColor={"#fff"}
          rounded={"2xl"}
          shadow={"2xl"}
        >
          <Stack spacing={4} p={4}>
            <FormControl isInvalid={emailError} isRequired>
              <FormLabel>Email Address:</FormLabel>
              <Input
                type="email"
                variant={"filled"}
                focusBorderColor="brand.600"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <FormErrorMessage>{emailErrorMessage}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={passwordError} isRequired>
              <FormLabel>Password:</FormLabel>
              <Input
                type="password"
                variant={"filled"}
                focusBorderColor="brand.600"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormErrorMessage>{passwordErrorMessage}</FormErrorMessage>
            </FormControl>

            <Button
              colorScheme="brand"
              onClick={() => loginUser(email, password)}
              isLoading={loading}
            >
              Login
            </Button>
          </Stack>
        </FormControl>
      </Stack>
    </>
  );
}
