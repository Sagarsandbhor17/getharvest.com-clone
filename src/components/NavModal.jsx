import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Image,
  } from '@chakra-ui/react'
import {navData } from './Navbar';
import { NavLink } from './NavbarElements';
export const NavModal=({show,setShow})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <div>
         <Button mt="1rem" ml="2rem" background='#FA5D00' colorScheme="none" onClick={onOpen}>Menu</Button>

<Modal isOpen={isOpen} onClose={()=>{onClose();setShow(false)}}>
  <ModalOverlay />
  <ModalContent bg="aquamarine">
    <ModalHeader>
    <NavLink to="/">
        <div style={{display:"flex"}}>
        <Image style={{width:"30px",marginLeft:"4rem"}} src="https://logosandtypes.com/wp-content/uploads/2022/03/harvest.svg" alt="harvest-logo"/>
        <Text textDecoration="none" color="orangered" fontWeight="bold" fontSize="3xl">  
        harvest
          </Text></div>
        </NavLink>
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      {navData.map((n,i)=><Text padding='1rem' fontWeight='medium' ml='3rem' key={i+2}>
        <NavLink to={n.to}>
        {n.title}
        </NavLink>
      </Text>)}
    </ModalBody>
  </ModalContent>
</Modal>

    </div>
}