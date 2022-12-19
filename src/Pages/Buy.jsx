import { Box, Button, Checkbox, Flex, Image } from "@chakra-ui/react";
import React,{ useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CloseIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { BsCheckCircle, BsCheckLg } from "react-icons/bs";
import { AuthContext } from "../Context/AuthContext";
import Login from "./Login"

const Buy = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate("/Payment");
  };

  
  const {state} = useContext(AuthContext);

  if(state.auth === false){
    return(
      <Login />
    )
  }

  // style={{
  //   width: " 80%"
  // }}

  return (
    <Box>
      <Box w="90%">
        <Flex justify="right">
          <NavLink to="/">
            <CloseIcon color="white"/>
          </NavLink>
        </Flex>
      </Box>
      <Box style={{ paddingTop: "10px", paddingBottom: "1rem" }}>
        <Box 
        style={{
              width: "900px",
              height: "560px",
              margin: "auto",
              marginTop: "60px",
              marginBottom: "100px",
              background: "white",
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "10px",
              paddingTop: "3rem",
        }}>
          <Box 
                
                style={{
                      width: "49%",
                      height: "100%",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                }}
          >
            <h1 style={{
                  marginTop: "20px",
                  fontSize: "x-large",
                  fontWeight: "bold",
              }}
              >Watch Ad-Free with Premium!</h1>
            <Box  
                  style={{
                        display: "flex",
                        textAlign: "left",
                        width: "80%",
                        margin: 'auto',
                        marginTop: '30px',
                        color: "black",
                        justifyContent: 'space-between',
                    }}
            >
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <Box>
                <p 
                  style={{
                    color: "black",
                    fontWeight: "100",
                    fontSize: '16px',
                  }}
                  >2800+ Blockbuster Movies</p>
              </Box>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
            <Box 
                  style={{
                        display: "flex",
                        textAlign: "left",
                        width: "80%",
                        margin: 'auto',
                        marginTop: '30px',
                        color: "black",
                        justifyContent: 'space-between',
                    }}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <p
                  style={{
                    color: "black",
                    fontWeight: "100",
                    fontSize: '16px',
                  }}>250+ Web Series</p>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
            <Box 
                  style={{
                        display: "flex",
                        textAlign: "left",
                        width: "80%",
                        margin: 'auto',
                        marginTop: '30px',
                        color: "black",
                        justifyContent: 'space-between',
                    }}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <p
                  style={{
                    color: "black",
                    fontWeight: "100",
                    fontSize: '16px',
                  }}>Live TV, Before TV</p>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
            <Box 
                  style={{
                        display: "flex",
                        textAlign: "left",
                        width: "80%",
                        margin: 'auto',
                        marginTop: '30px',
                        color: "black",
                        justifyContent: 'space-between',
                    }}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <p
                  style={{
                    color: "black",
                    fontWeight: "100",
                    fontSize: '16px',
                  }}>Offer: Extra 10% OFF on Cards</p>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
            <Box 
                  style={{
                        display: "flex",
                        textAlign: "left",
                        width: "80%",
                        margin: 'auto',
                        marginTop: '30px',
                        color: "black",
                        justifyContent: 'space-between',
                    }}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <p
                  style={{
                    color: "black",
                    fontWeight: "100",
                    fontSize: '16px',
                  }}>Watch on Mobile, TV, Laptop</p>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
            <Box 
                  style={{
                        display: "flex",
                        textAlign: "left",
                        width: "80%",
                        margin: 'auto',
                        marginTop: '30px',
                        color: "black",
                        justifyContent: 'space-between',
                    }}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <p
                  style={{
                    color: "black",
                    fontWeight: "100",
                    fontSize: '16px',
                  }}>Eduaurra Competitive Exams Learning</p>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
          </Box>
          <Box 
                  style={{
                  width: "49%",
                  height: "100%",
                  color: "black",
                }}>
            <Box  
            
            style={{
                    width: "95%",
                    height: "30%",
                    border: "1px dashed black",
                    margin: "auto",
                    marginTop: "10px",
                    padding: '10px',
                    borderRadius: "10px",
                    background: "rgb(241, 238, 238)",
                  }}>
              <Box style={{borderBottom: "1px dashed black"}}>
                <Box 
                  style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                  <Box 
                  style={{
                          background: "rgb(84, 159, 230)",
                          padding: "4px",
                          borderRadius:" 3px",
                          margin: "auto",
                          marginTop: "10px",
                          marginLeft: "10px",
                        }}>
                    <p>LIMITED PERIOD OFFER</p>
                  </Box>
                  <Box 
                  style={{
                            border: "1px solid rgb(226, 61, 89)",
                            color: "rgb(226, 61, 89)",
                            background: "transparent",
                            padding: "4px",
                            borderRadius: "3px",
                            marginTop: "10px",
                            marginRight: "10px",
                        }}>
                        SAVE 30%</Box>
                </Box>

                <Box 
                  style={{
                        display: "flex",
                        // textAlign: "left",
                        width: "95%",
                        margin: 'auto',
                        marginTop: '10px',
                        // color: "black",
                        justifyContent: 'space-between',
                        flexDirection: "row",
                    }}>
                  <Box 
                              style={{
                              display: "flex",
                              flexDirection: "column",
                            }}>
                    <h1>12 months plan</h1>
                    <p
                              style={{
                                color: "black",
                                fontWeight: "100",
                            }}>
                            Effective price ₹58/month</p>
                  </Box>
                  <Box 
                              style={{
                              display: "flex",
                              flexDirection: "row",
                            }}>
                    <s>999</s>
                    <h1
                      style={{
                        fontSize: "19px",
                        fontWeight: "bold",
                        marginRight: "5px",
                      }}
                    >
                      699
                    </h1>
                    <Box>
                      <BsCheckCircle
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: "1rem",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box 
              >
                <Image
                  width="30px"
                  height="30px"
                  src="https://cdn-icons-png.flaticon.com/512/482/482478.png"
                  alt=""
                />
                <p
                      style={{
                        color: 'black',
                        margin: 'auto',
                        marginTop: "-25px",
                      }}>Watch on 3 Screens at the same time</p>
              </Box>
            </Box>

            <Box 
            style={{
                    width: "95%",
                    height: "18%",
                    border: "1px dashed black",
                    margin: "auto",
                    marginTop: "30px",
                    padding: '10px',
                    borderRadius: "10px",
                    background: "rgb(241, 238, 238)",
                  }}>
              <Box  style={{borderBottom: "1px dashed black"}}
                >
                <Box 
                  style={{
                        display: "flex",
                        // textAlign: "left",
                        width: "95%",
                        margin: 'auto',
                        marginTop: '10px',
                        // color: "black",
                        justifyContent: 'space-between',
                        flexDirection: "row",
                    }}>
                  <Box 
                              style={{
                              display: "flex",
                              flexDirection: "column",
                            }}>
                    <h1 
                        color=" black" 
                        >3 months plan</h1>
                  </Box>
                  <Box 
                              style={{
                              display: "flex",
                              flexDirection: "row",
                            }}>
                    <h1
                      style={{
                          fontWeight: "bold",
                          fontsize: "large",
                      }}
                    >
                      499
                    </h1>
                    <Checkbox borderColor={"black"} defaultChecked></Checkbox>
                  </Box>
                </Box>
              </Box>
              <Box
                      style={{
                        width: "100%",
                        height: "10%",
                      }} >
                <Image
                  width="30px"
                  height="30px"
                  src="https://cdn-icons-png.flaticon.com/512/482/482478.png"
                  alt=""
                />
                <p
                      style={{
                        color: 'black',
                        margin: 'auto',
                        marginTop: "-25px",
                      }}
                    >
                    Watch on 2 Screens at the same time</p>
              </Box>
            </Box>
            <Box>
              <br />
              <br />
              <Button onClick={click} colorScheme="purple" w="90%" size="md">
                Continue with 699
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Buy;
