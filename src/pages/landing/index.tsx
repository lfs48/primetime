import Clock from '@/components/clock';
import FactorInput from '@/components/factor-input';
import Input from '@/components/input';
import TimeNumeral from '@/components/time-numeral';
import * as S from './styled';

export default function Landing() {

    return(
        <S.Root>
            <Clock />
            <TimeNumeral />
            <FactorInput />
        </S.Root>
    )
}