import Clock from '@/components/clock';
import TimeNumeral from '@/components/time-numeral';
import * as S from './styled';

export default function Landing() {

    return(
        <S.Root>
            <Clock />
            <TimeNumeral />
        </S.Root>
    )
}