import { z } from 'zod';

export const createHumanSchema = z
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

export type CreateHumanDto = z.infer<typeof createHumanSchema>;