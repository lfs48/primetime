import tw from 'tailwind-styled-components';

export const Root = tw.div`
    bg-smoke
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    space-y-2
`

export const Number = tw.div`
    text-orange-neon
    text-[12rem]
    font-semibold
    select-none
    font-digital
`

export const Time = tw.div`
    fixed
    top-4
    right-4
    text-lg
    text-orange-neon
    font-digital
`