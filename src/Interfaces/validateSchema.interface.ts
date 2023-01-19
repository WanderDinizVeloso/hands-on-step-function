import { IValidateTokenEvent } from "./validateToken.interface";

export interface IValidateSchemaEvent extends IValidateTokenEvent {
  Username: string;
}
