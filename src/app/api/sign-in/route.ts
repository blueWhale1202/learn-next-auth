import { loginSchema } from "@/features/auth/schemas/login";

export async function POST(request: Request) {
    const body = await request.json();

    const result = loginSchema.safeParse(body);

    if (!result.success) {
        return Response.json({ message: "Invalid data" }, { status: 400 });
    }

    const { email, password } = result.data;

    return Response.json({ email, password });
}
