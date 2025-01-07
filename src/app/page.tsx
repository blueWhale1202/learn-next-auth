import { Button } from "@/components/ui/button";
import { LoginButton } from "@/features/auth/components/login-button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export default function Home() {
    return (
        <main className="bg-primary-gradient flex h-full flex-col items-center justify-center">
            <div className="space-y-6 text-center">
                <h1
                    className={cn(
                        "text-6xl font-semibold text-white drop-shadow-md",
                        poppins.className,
                    )}
                >
                    🔐 Auth
                </h1>
                <p className="text-lg text-white">
                    A simple authentication service
                </p>
                <div>
                    <LoginButton>
                        <Button variant="secondary" size="lg">
                            Sign In
                        </Button>
                    </LoginButton>
                </div>
            </div>
        </main>
    );
}
