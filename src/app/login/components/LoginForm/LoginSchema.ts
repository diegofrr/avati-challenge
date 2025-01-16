import { z } from 'zod';

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'O e-mail é obrigatório!' })
    .email({ message: 'E-mail inválido!' }),
  password: z
    .string()
    .trim()
    .min(1, { message: 'A senha é obrigatória!' })
    .min(6, { message: 'A senha deve ter pelo menos 6 caracteres!' }),
});

const defaultValues = {
  email: '',
  password: '',
};

export { loginSchema, defaultValues };
export type LoginSchema = z.infer<typeof loginSchema>;
