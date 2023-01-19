import { IDBSaveEvent } from "../../Interfaces/dbSave.interface";

export const handler = async (event: IDBSaveEvent) => {
  // salva no banco e returna o evento
  return event;
};
