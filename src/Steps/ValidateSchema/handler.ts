import { BadRequestException } from "../../Errors/bad-request-exception";
import { IValidateSchemaEvent } from "../../Interfaces/validateSchema.interface";
import { z } from "zod";

const schema = z.object({
  id: z.number(),
  document: z.string(),
});

export type Data = z.infer<typeof schema>;

export const handler = async (event: IValidateSchemaEvent) => {
  const { Data } = event;
  try {
    const data = schema.parse(Data);
    return { ...event, Data: data };
  } catch (err) {
    throw new BadRequestException(err);
  }
};
