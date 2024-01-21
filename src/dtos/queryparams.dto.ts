import { z } from 'zod';

export const createQueryparamsDto = z
  .object({
    id: z.coerce.bigint().gt(5n),
    age: z.coerce.number(),
  })
  .required();

export type QueryparamsDto = z.infer<typeof createQueryparamsDto>;
