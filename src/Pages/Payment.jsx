import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Input, useToast } from "@chakra-ui/react";
import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import {AlertSuccess} from "../Context/Action"

const Payment = () => {
  const {dispatch} = useContext(AuthContext);
  const toast = useToast();
  const [payData, setPayData] = useState({
    number : "",
    expiry : "",
    cvv : "",
  })
  const handleChange =(e)=> {
    const {name,value} = e.target

    setPayData({
        ...payData,
        [name] : value,
    })
  }

  console.log(payData)
  const navigate = useNavigate();

  const click = () => {
   (payData.cvv === "")? failAlert() : successAlert();
    
  };

  const successAlert=()=> {
    dispatch(AlertSuccess(true));
    toast({
        title: "Congrats..!",
        description: "Payment Sucessfull.",
        status: "success",
        duration: 3000,
        position: ["top"],
        isClosable: true,
      });
      navigate("/");
  }
  const failAlert=()=> {
    toast({
        title: "Oops..!",
        description: "Please enter Correct CVV .",
        status: "error",
        duration: 3000,
        position: ["bottom"],
        isClosable: true,
      });
  }

  return (
    <Box>
      <Box w="90%">
        <Flex justify="right">
          <NavLink to="/">
            <CloseIcon color="white" />
          </NavLink>
        </Flex>
      </Box>
      <Box 
                  style={{
                      width: "400px",
                      height: "562px",
                      margin: "auto",
                      marginTop: "30px",
                      borderRadius: '10px',
                      paddingTop: '10px',
                  }}>
        <Box 
                  style={{
                        textAlign: "left",
                        fontWeight: "bold",
                        fontSize: "xx-large",
                        marginBottom: "20px",
                        color: "white",
                  }}>
          <h1> Make Payment</h1>
        </Box>
        <Box
                  style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        textAlign: "left",
                        color: "white",
                  }}>
          <Box>
            <label> Enter Card Number</label>
            <Input
              variant="flushed"
              placeholder="Enter Card No"
              type="number"
              name="number"
              value = {payData.number}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <label> Enter Expiry </label>
            <Input
              min="2018-03"
              variant="flushed"
              placeholder="Enter dd/mm/yy"
              type="month"
              name="expiry"
              value = {payData.expiry}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <label> Enter CVV</label>
            <Input type="password" variant="flushed" placeholder="Enter CVV" name="cvv"
              value = {payData.cvv}
              onChange={handleChange} />
          </Box>
          <Center>
            <Button onClick={click} colorScheme="purple" w="70%" size="md">
              Proceed to pay
            </Button>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
