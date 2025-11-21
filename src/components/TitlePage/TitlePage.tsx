import { Text } from "@radix-ui/themes"

interface TitlePageProps {
    title: string
}

export const TitlePage = ({ title }: TitlePageProps) => {
    return (
        <Text size="9" weight="bold">
            {title}
        </Text>
    )
}