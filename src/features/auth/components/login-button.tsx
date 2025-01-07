"use client";

import Link from "next/link";

type Props = {
    mode?: "modal" | "redirect";
    asChild?: boolean;
    children: React.ReactNode;
};

export const LoginButton = ({
    mode = "redirect",
    asChild = false,
    children,
}: Props) => {
    return <Link href="/login">{children}</Link>;
};
