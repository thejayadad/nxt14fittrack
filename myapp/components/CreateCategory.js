'use client'
import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import CreateCategoryForm from './Forms/CreateCategoryForm';


const CreateCategory = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <Button onPress={onOpen}>Create Category</Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">New Category</ModalHeader>
            <ModalBody>
                <CreateCategoryForm />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </>
  )
}

export default CreateCategory