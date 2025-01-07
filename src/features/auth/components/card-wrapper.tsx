import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Social } from "./social";

type Props = {
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
    children: React.ReactNode;
};

export const CardWrapper = ({
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial = true,
    children,
}: Props) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    );
};
