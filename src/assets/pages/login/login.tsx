import React from 'react';
import './login.css';
import { Button, Container} from '@mui/material';
import TextInput from '../../components/InputComponent/InputComponent';

const LoginPage = () =>{

    const login:string = '';
    const senha:string = '';

    const loginFunction = () =>{
        if(login === 'admin' && senha === 'admin'){
        }else{
            alert('Login: admin\n' + 'Senha:admin\n')
        }
    }


    return(
        <Container className='container' style={{display:'flex', flexDirection:'column', alignContent:'center', width:580, height:456, backgroundColor:'#ffffffff', borderRadius:'20px', boxSizing:'border-box'}}>
            <img style={{width:171, height:80, alignSelf:'center', marginTop:'20px'}} src="src\img\banestes.svg" alt="" />
            <h1 style={{fontSize:'24px', fontWeight:500,}}>Acesse o Projeto</h1>
            <div>
                <TextInput
                title={'Login'}
                placeholder='Insira seu login'
                required
                value={login}
                action={()=> console.log('hello')}
                type='text'
                width={468}
                />

                <TextInput
                title={'Login'}
                placeholder='Insira seu login'
                required
                value={login}
                action={()=> console.log('hello')}
                type='password'
                width={468}
                />
            </div>
            <Button
            style={{
                backgroundColor:'#0050B3'
            }}
            onClick={()=> loginFunction}
            >
                Entrar
            </Button>
        </Container>
    );
};

export default LoginPage;