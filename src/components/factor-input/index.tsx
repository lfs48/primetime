import Input from '../input';
import * as S from './styled';

export default function FactorInput() {
    return(
        <S.Root>
            <S.Left>
                <S.BaseInput
                    maxLength={4}
                />
            </S.Left>
            <S.Right>
                <S.ExpInput
                    defaultValue={1}
                    maxLength={2}
                />
                <S.RemoveButton>REMOVE</S.RemoveButton>
            </S.Right>
        </S.Root>
    )
}