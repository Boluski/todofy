"use client";

import {
  Button,
  IconButton,
  Box,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";

import { app } from "../config";
import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import { VscAdd } from "react-icons/vsc";

export default function NewProjectButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projectName, setProjectName] = useState("");

  function newProject() {
    const auth = getAuth();
    const project: object = { name: projectName, users: [] };
    const db = getFirestore(app);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(
          collection(db, "users"),
          where("email", "==", user.email)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data().username);
        });
      } else {
      }
    });

    // const docRef = addDoc(collection(db, "projects"), project);
    // console.log(docRef);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Project name:</FormLabel>
              <Input
                onChange={(e) => setProjectName(e.target.value)}
                variant={"filled"}
                focusBorderColor="brand.600"
              />
            </FormControl>
          </ModalBody>
          <ModalHeader>
            <Stack>
              <Button
                onClick={() => {
                  console.log(projectName);
                  newProject();
                }}
                colorScheme="brand"
              >
                Create Project
              </Button>
            </Stack>
          </ModalHeader>
        </ModalContent>
      </Modal>

      <IconButton
        w={"100%"}
        h={"100%"}
        aria-label="Add"
        colorScheme="brand"
        variant={"outline"}
        onClick={onOpen}
      >
        <VscAdd size={"45%"} />
      </IconButton>
    </>
  );
}
