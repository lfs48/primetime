import tw from 'tailwind-styled-components';

export const Root = tw.div`
    flex
    space-x-2
`

export const Left = tw.div`
    w-16
`

export const Right = tw.div`
    flex
    flex-col
    justify-between
    w-8
`

export const BaseInput = tw.input`
    w-16 
    h-12 
    text-2xl
    p-1
    text-right
`

export const ExpInput = tw.input`
    p-0.5
    w-6
    h-6
    text-right
`

export const RemoveButton = tw.button`
    text-red-500
    font-semibold
    text-[0.5rem]
`