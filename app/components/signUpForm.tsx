"use client";

import React from "react";
import { useState } from "react";
import { app } from "../config";
import { getFirestore, setDoc, doc } from "firebase/firestore";
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

  // Function that handles error Messages in the UI
  function errorMessage(field: string, message: string) {
    if (field == "confirmPassword") {
      setEmailError(false);
      setEmailErrorMessage(message);
      setPasswordError(false);
      setPasswordErrorMessage(message);
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage(message);

      setUsernameError(false);
      setUsernameErrorMessage(message);

      setFirstNameError(false);
      setFirstNameErrorMessage(message);
      setLastNameError(false);
      setLastNameErrorMessage(message);
    } else if (field == "missingPassword") {
      setEmailError(false);
      setEmailErrorMessage(message);
      setPasswordError(true);
      setPasswordErrorMessage(message);
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage(message);

      setUsernameError(false);
      setUsernameErrorMessage(message);

      setFirstNameError(false);
      setFirstNameErrorMessage(message);
      setLastNameError(false);
      setLastNameErrorMessage(message);
    } else if (field == "emailInUse") {
      setEmailError(true);
      setEmailErrorMessage(message);
      setPasswordError(false);
      setPasswordErrorMessage(message);
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage(message);

      setUsernameError(false);
      setUsernameErrorMessage(message);

      setFirstNameError(false);
      setFirstNameErrorMessage(message);
      setLastNameError(false);
      setLastNameErrorMessage(message);
    } else if (field == "weakPassword") {
      setEmailError(false);
      setEmailErrorMessage(message);
      setPasswordError(true);
      setPasswordErrorMessage(message);
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage(message);

      setUsernameError(false);
      setUsernameErrorMessage(message);

      setFirstNameError(false);
      setFirstNameErrorMessage(message);
      setLastNameError(false);
      setLastNameErrorMessage(message);
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

  // Creates and login a new user
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

    // Check if fields are empty
    if (
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      username == "" ||
      firstName == "" ||
      lastName == ""
    ) {
      errorMessage("all", "");
    } else {
      if (password == confirmPassword) {
        // Creates a user with Email and password.
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;

            const data = {
              email: email,
              username: username,
              firstName: firstName,
              lastName: lastName,
            };

            // Creates a user document
            try {
              await setDoc(doc(db, "users", user.uid), data);
              console.log("created document for:", user.uid);
            } catch (e) {
              console.error("Error adding document: ", e);
            }

            router.push("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if (errorCode == "auth/missing-password") {
              errorMessage("missingPassword", "Enter password.");
            } else if (errorCode == "auth/email-already-in-use") {
              errorMessage("emailInUse", "This email is already in use.");
            } else if (errorCode == "auth/weak-password") {
              errorMessage("weakPassword", "This password is too weak.");
            }
          });
      } else {
        errorMessage("confirmPassword", "Password don't match.");
      }
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
      </Stack>
    </>
  );
}
