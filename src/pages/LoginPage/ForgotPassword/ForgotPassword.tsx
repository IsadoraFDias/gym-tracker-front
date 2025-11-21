import { Box, Button } from "@radix-ui/themes"
import { ContentComponents, InputComponent, TitlePage } from "../../../components"
import { useState } from "react";

export const ForgotPassword = () => {

    const [valuePassword, setValuePassword] = useState("");
    const [valueConfirmPassword, setValueConfirmPassword] = useState("");

    return (
        <ContentComponents>
            <TitlePage title="Redefinir Senha" />
            <Box>
                <form>
                    <InputComponent required name="Senha" type="password" placeholder="Digite uma senha" value={valuePassword} onChange={setValuePassword} />
                    <InputComponent required name="Confirma Senha" type="password" placeholder="Confirme sua senha" value={valueConfirmPassword} onChange={setValueConfirmPassword} />
                    <Button type="submit">Redefinir Senha</Button>
                </form>
            </Box>
        </ContentComponents>
    )
}