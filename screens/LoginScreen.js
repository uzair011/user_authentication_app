import { useContext, useState } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import { loginUser } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const AuthCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await loginUser(email, password);
      AuthCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, Check your credentials or try again later..."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
  // just nothing.
}

export default LoginScreen;
