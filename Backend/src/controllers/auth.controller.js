import { asyncHandler } from "../utils/AsyncHandler";

export const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body();
});
