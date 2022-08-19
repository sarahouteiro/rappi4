import { DivInput, Label, Input, Button } from './styled'

const LoginFormPage = () => {
    return(
        <>
            <form>
                <DivInput>
                    <Label htmlFor='email'>E-mail*</Label>
                    <Input
                        id='email'
                        placeholder='email@email.com'
                        required
                    />
                </DivInput>
                <DivInput>
                    <Label htmlFor='senha'>Senha*</Label>
                    <Input
                        id='senha'
                        placeholder='Mínimo 6 caracteres'
                        required
                    />
                </DivInput>
                <Button>Entrar</Button>
          </form>
        </>
    )
}

export default LoginFormPage