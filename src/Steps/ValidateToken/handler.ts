import { IValidateTokenEvent } from "../../Interfaces/validateToken.interface";

export const handler = async (event: IValidateTokenEvent) => {
  const { Token } = event;

  if (Token !== "tokenTest") {
    throw new Error(`Invalid token: ${Token}`);
  }

  const Username = "wander";

  return { ...event, Username };
};
