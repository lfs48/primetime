import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import * as S from './styled';
import { useInterval } from '@/hooks/useInterval.hook';

export default function TimeNumeral() {

    const [time, setTime] = useState( DateTime.now() )

    useInterval( () => {
        setTime( DateTime.now() );
    }, 100);

    return(
        <S.Root>
            {time.toFormat('Hmm')}
        </S.Root>
    )
}