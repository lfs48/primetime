import tw from 'tailwind-styled-components';

export const Root = tw.div`
    bg-black
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    space-y-2
`

export const Number = tw.div`
    text-white
    text-5xl
    font-semibold
    select-none
`

export const Time = tw.div`
    fixed
    top-4
    right-4
    text-white
`