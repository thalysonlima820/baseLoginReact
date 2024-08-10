import { z } from 'zod';

export const loginSchema = z.object({
    name: z
        .string()
        .min(3, "Minimo São 3 Letras"),
    password: z
        .string()
        .min(1, "Senha Muito Custa")
}).refine((data) => data.password !== "12345678", {
    message: "Por Favor ne? 12345678 ? Serio isso?, qual é, pensa mais",
    path: ["password"],
})

export type LoginSchema = z.infer<typeof loginSchema>;