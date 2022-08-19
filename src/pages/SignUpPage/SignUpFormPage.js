import { DivInput, Label, Input, Button } from './styled'

const SignUpFormPage = () => {
    return(
        <>
            <form>
                <DivInput>
                    <Label htmlFor='Name'>Nome*</Label>
                    <Input
                        id='Name'
                        placeholder='Nome e sobrenome'
                        required
                    />
                </DivInput>
                <DivInput>
                    <Label htmlFor='email'>E-mail*</Label>
                    <Input
                        id='email'
                        placeholder='email@email.com'
                        required
                    />
                </DivInput>
                <DivInput>
                    <Label htmlFor='cpf'>CPF*</Label>
                    <Input
                        id='cpf'
                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        placeholder='000.000.000-00'
                    />
                </DivInput>
                <DivInput>
                    <Label htmlFor='senha'>Senha*</Label>
                    <Input
                        id='senha'
                        placeholder='Mínimo 6 caracteres'
                        required
                        type='password'
                    />
                </DivInput>
                <DivInput>
                    <Label htmlFor='senhaconfirma'>Confirmar*</Label>
                    <Input
                        id='senhaconfirma'
                        placeholder='Confirme a senha anterior'
                        required
                        type='password'
                    />
                </DivInput>
                <Button>Criar</Button>
            </form>
        </>
    )
}

export default SignUpFormPage