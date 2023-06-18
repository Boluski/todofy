"use client";
import React from "react";
import { useState } from "react";
import { app } from "../app/config";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function SignUpForm() {
  //Input field state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  // Error states
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");

  function errorMessage(field: string, message: string) {
    if (field == "confirmPassword") {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage(message);
    } else if (field == "all") {
      setEmailError(true);
      setEmailErrorMessage(message);
      setPasswordError(true);
      setPasswordErrorMessage(message);
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage(message);

      setUsernameError(true);
      setUsernameErrorMessage(message);

      setFirstNameError(true);
      setFirstNameErrorMessage(message);
      setLastNameError(true);
      setLastNameErrorMessage(message);
    }
  }

  async function newUser(
    email: string,
    password: string,
    confirmPassword: string,
    username: string,
    firstName: string,
    lastName: string
  ) {
    const db = getFirestore(app);
    const auth = getAuth(app);

    if (
      email == "" &&
      password == "" &&
      confirmPassword == "" &&
      username == "" &&
      firstName == "" &&
      lastName == ""
    ) {
      errorMessage("all", "");
    }

    if (password == confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log(user);

          // try {
          //   const docRef = await addDoc(collection(db, "users"), {
          //     email: email,
          //     password: password,
          //     username: username,
          //     firstName: firstName,
          //     lastName: lastName,
          //   });
          //   console.log("Document written with ID: ", docRef.id);
          // } catch (e) {
          //   console.error("Error adding document: ", e);
          // }

          router.push("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          console.log(errorCode);
        });
    } else {
      errorMessage("confirmPassword", "Password don't match.");
    }
  }

  return (
    <>
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

          <FormControl isInvalid={confirmPasswordError} isRequired>
            <FormLabel>Confirm password:</FormLabel>
            <Input
              type="password"
              variant={"filled"}
              focusBorderColor="brand.600"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <FormErrorMessage>{confirmPasswordErrorMessage}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={usernameError} isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              variant={"filled"}
              focusBorderColor="brand.600"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <FormErrorMessage>{usernameErrorMessage}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={firstNameError} isRequired>
            <FormLabel>First Name:</FormLabel>
            <Input
              type="text"
              variant={"filled"}
              focusBorderColor="brand.600"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <FormErrorMessage>{firstNameErrorMessage}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={lastNameError} isRequired>
            <FormLabel>Last Name:</FormLabel>
            <Input
              type="text"
              variant={"filled"}
              focusBorderColor="brand.600"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <FormErrorMessage>{lastNameErrorMessage}</FormErrorMessage>
          </FormControl>
          <Button
            colorScheme="brand"
            onClick={() =>
              newUser(
                email,
                password,
                confirmPassword,
                username,
                firstName,
                lastName
              )
            }
          >
            Sign Up
          </Button>
        </Stack>
      </FormControl>
    </>
  );
}
