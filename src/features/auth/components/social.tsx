import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const Social = () => {
    return (
        <div className="flex w-full items-center gap-x-2">
            <Button variant="outline" size="lg" className="w-full">
                <Icons.google className="!size-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full">
                <Icons.gitHub className="!size-5" />
            </Button>
        </div>
    );
};
