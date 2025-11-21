import { Box, Button, Flex, Link } from "@radix-ui/themes"
import { ContentComponents, InputComponent, TitlePage } from "../../components"
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export const LoginPage = () => {
    const [valueEmail, setValueEmail] = useState("");
    const [valuePassword, setValuePassword] = useState("");

    const {login, isPending, error} = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({ email: valueEmail, password: valuePassword });
    }

    return (
        <ContentComponents>
            <TitlePage title="Faça seu login" />
            <Box>
                <form onSubmit={handleSubmit}>
                <Flex direction='column' gap='3'>
                    <InputComponent required name="Email" type="email" placeholder="Digite seu email" value={valueEmail} onChange={setValueEmail} />
                    <InputComponent required name="Senha" type="password" placeholder="Digite sua senha" value={valuePassword} onChange={setValuePassword} />
                </Flex>
                <Flex direction='row' gap='9' justify='center' align='center' style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                    <Link href='/forgot-password'>Esqueci minha senha</Link>
                    <Link href='/register'>Criar uma conta</Link>
                </Flex>
                <Button type="submit">Entrar</Button>
                </form>
                {isPending && <p>Carregando...</p>}
                {error && <p style={{ color: 'red' }}>{error.message}</p>}
            </Box>
        </ContentComponents>
    )
}