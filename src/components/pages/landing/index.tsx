import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import * as S from './styled';
import { useInterval } from '@/hooks/useInterval.hook';

export default function Landing() {

    const [time, setTime] = useState( DateTime.now() )

    useInterval( () => {
        setTime( DateTime.now() );
    }, 100);

    return(
        <S.Root>
            <S.Time>{time.toFormat('HH:mm:ss')}</S.Time>
            <S.Number>{time.toFormat('HHmm')}</S.Number>
        </S.Root>
    )
}