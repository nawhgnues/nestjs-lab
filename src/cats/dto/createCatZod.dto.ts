import z, { string } from 'zod';

export const CreateCatSchema = z
  .object({
    name: string(),
    description: string().min(5),
    area: z.number().positive(),
  })
  .required();

export type CreateCatZodDto = z.infer<typeof CreateCatSchema>;
