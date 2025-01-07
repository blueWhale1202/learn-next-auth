type Props = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
    return (
        <div className="bg-primary-gradient flex h-full items-center justify-center">
            {children}
        </div>
    );
}
