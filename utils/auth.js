import axios from "axios";

const API_KEY = "AIzaSyBXHkkgsgBZTFtQb1hcV2HByU6EKeZ5Qf0";

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
