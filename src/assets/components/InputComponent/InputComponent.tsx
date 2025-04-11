import { Search, Visibility, VisibilityOff } from "@mui/icons-material";
import { Container, TextField,  } from "@mui/material";
import React, { useState } from "react";

interface TextInputProps{
    // altera conforme os 3 tipos de input do sistema
    type: 'text' | 'password' | 'search'
    title: string;
    required?: boolean;
    value: string;
    placeholder?: string;
    action: () => void;
    width: number
}


const TextInput = ({title, value, placeholder, required = false, action , type, width }: TextInputProps)=> {
    const [passwordVisible, setPasswordVisible] =useState(false);
    return(
            <Container style={{display: "flex", flexDirection:'column', alignItems:'flex-start', gap:'10px', marginTop:'15px'}}>
            <p style={{margin:'0'}}> {title} <span style={{color:'red'}}> {required && '*'} </span></p>
            <div
            style={{
                display:'flex',
                width:width,
                alignItems:'center',
                border:'1px #D9D9D9 solid',
                borderRadius:'5px'
            }}
            >
            <TextField
                placeholder={placeholder}
                fullWidth
                onChange={action}
                type={type === 'password'? (passwordVisible? 'text':'password'):'text'}
                className="text-input"
                sx={{
                    // remove cor da label ao focar
                    '& label.Mui-focused': {
                        color: '#D9D9D9',
                    },
                    // remove borda azul no foco
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                    borderColor:"transparent",

                    },
                    '&:hover fieldset': {
                    borderColor: 'transparent',
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                    },
                    '& .MuiInputBase-input': {
                    padding: '5px',
                    },
                },
                }}
            />
            {type === 'search' &&
            <Search
            style={{
                backgroundColor:'#0050B3',
                color:'#FFFFFF',
                borderRadius:' 0 5px 5px 0',
                padding:'5px'
            }}
            onClick={action}
            />
            }

            {type === 'password' &&(
                passwordVisible? (
                    <>
                        <VisibilityOff
                        style={{
                            color:'#00000040',
                            width:'30px',
                            height:'20px'
                        }}
                        onClick={()=> setPasswordVisible((prev) => !prev)}
                        />
                    </>
                )
                :(
                    <>
                        <Visibility
                        style={{
                            color:'#00000040',
                            width:'30px',
                            height:'20px'
                        }}
                        onClick={()=> setPasswordVisible((prev) => !prev)}
                        />
                    </>
                )
            )}
            </div>
        </Container>
    )
};

export default TextInput;
