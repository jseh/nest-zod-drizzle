import { z } from 'zod';

export const createCatSchema = z
  .object({
    guid: z.string().trim(),
    person: z.object({
      name: z.string(),
      age: z.number().optional(),
    }).optional(),
    color: z.coerce.bigint(),
    autos: z.array(z.string()).min(4)
  });
  // .required();

export type CreateCatDto = z.infer<typeof createCatSchema>;
