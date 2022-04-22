import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

export default function ModalForm({initialRef,isOpen,onClose,onChange,onSubmit}) {
    return(
        <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Create your playlist</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>Playlist Name</FormLabel>
                <Input ref={initialRef} id="name" onChange={onChange} minLength={10} />
                </FormControl>
                <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input id="description" onChange={onChange} />
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='green' mr={3} onClick={onSubmit}>
                Create Playlist
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
    
};
