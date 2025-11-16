import { Flex } from "@radix-ui/themes"

interface ContentComponentsProps {
    children?: React.ReactNode
}
export const ContentComponents = ({ children }: ContentComponentsProps) => {

    return (
        <Flex direction="column" gap="4" align="center" justify="center" style={{ minHeight: '100vh' }}>
            {children}
        </Flex>
    )
}