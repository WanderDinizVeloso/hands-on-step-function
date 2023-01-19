import { handler as ValidateToken } from "./src/Steps/ValidateToken/handler";
import { handler as ValidateSchema } from "./src/Steps/ValidateSchema/handler";
import { handler as DBSave } from "./src/Steps/DBSave/handler";

(async () => {
  const ValidateTokenResponse = await ValidateToken({
    Token: "tokenTest",
    Data: { id: 1, document: "any-document" },
  });
  console.log(["ValidateToken response", ValidateTokenResponse]);

  const ValidateSchemaResponse = await ValidateSchema(ValidateTokenResponse);
  console.log(["ValidateSchema response", ValidateSchemaResponse]);

  const DBSaveResponse = await DBSave(ValidateSchemaResponse);
  console.log(["DBSave response", DBSaveResponse]);
})();
