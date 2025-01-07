import { registerSchema } from "@/features/auth/schemas/register";

export async function POST(request: Request) {
    const body = await request.json();

    const result = registerSchema.safeParse(body);

    if (!result.success) {
        return Response.json({ message: "Invalid data" }, { status: 400 });
    }

    const { email, password, name } = result.data;

    return Response.json({ email, password, name });
}
