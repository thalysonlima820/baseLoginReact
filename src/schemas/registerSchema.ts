import { z } from 'zod';

export const registerSchema = z.object({
    name: z
        .string()
        .min(3, "Minimo São 3 Letras"),
    email: z
        .string()
        .email("E-mail Invalido"),
    password: z
        .string()
        .min(6, "Senha Muito Custa"),
    confirmpassword: z
        .string()
        .min(6, "Senha Muito Custa"),
}).refine((data) => data.password === data.confirmpassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmpassword"],
});

export type RegisterSchema = z.infer<typeof registerSchema>;