import { Box, Button, Flex } from "@radix-ui/themes"
import { ContentComponents, InputComponent, TitlePage } from "../../../components"
import { useState } from "react";

export const Register = () => {
    const [valueEmail, setValueEmail] = useState("");
    const [valuePassword, setValuePassword] = useState("");
    const [valueConfirmPassword, setValueConfirmPassword] = useState("");

    return (
        <ContentComponents>
            <TitlePage title="Faça seu login" />
            <Box>
                <form>
                    <Flex direction='column' gap='3'>
                        <InputComponent required name="Email" type="email" placeholder="Digite seu email" value={valueEmail} onChange={setValueEmail} />
                        <InputComponent required name="Senha" type="password" placeholder="Digite sua senha" value={valuePassword} onChange={setValuePassword} />
                        <InputComponent required name="Confirma Senha" type="password" placeholder="Confirme sua senha" value={valueConfirmPassword} onChange={setValueConfirmPassword} />
                    </Flex>
                    <Button type="submit" style={{ marginTop: '1rem' }}>Criar conta</Button>
                </form>
            </Box>
        </ContentComponents>
    )
}