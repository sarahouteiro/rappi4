import { DivInput, Label, Input } from './styled'

const Inputs = () => {
    return(
        <>
            <DivInput>
                <Label htmlFor='Name'>Nome do Input</Label>
                <Input
                    id='Name'
                    placeholder='Conteúdo do Input'
                />
            </DivInput>
        </>
    )
}

export default Inputs