import { DivInput, Label, Input, Button } from './styled'

const AdressFormPage = () => {
    return(
        <>
            <form>
                <DivInput>
                    <Label htmlFor='street'>Logradouro*</Label>
                    <Input
                        id='street'
                        placeholder='Rua/ Av.'
                        required
                    />
                </DivInput>
                <DivInput>
                    <Label htmlFor='number'>Número*</Label>
                    <Input
                        id='number'
                        placeholder='Número'
                        required
                    />
                </DivInput>
                <DivInput>
                    <Label htmlFor='complemet'>Complemento</Label>
                    <Input
                        id='complemet'
                        placeholder='Apto./ Bloco'
                    />
                </DivInput>
                <DivInput>
                    <Label htmlFor='bairro'>Bairro*</Label>
                    <Input
                        id='bairro'
                        placeholder='Bairro'
                        required
                    />
                </DivInput>
                <DivInput>
                    <Label htmlFor='city'>Cidade*</Label>
                    <Input
                        id='city'
                        placeholder='Cidade'
                        required
                    />
                </DivInput>
                <DivInput>
                    <Label htmlFor='state'>Estado*</Label>
                    <Input
                        id='state'
                        placeholder='Estado'
                        required
                    />
                </DivInput>
                <Button>Salvar</Button>
            </form>
        </>
    )
}

export default AdressFormPage