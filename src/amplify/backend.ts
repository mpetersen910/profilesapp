import { defineBackend } from "@aws-amplify/backend";
import { postConfirmation } from "./auth/post-confirmation/resource";

defineBackend({
    postConfirmation,
});