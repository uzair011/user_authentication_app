import axios from "axios";

const API_KEY = "AIzaSyBXHkkgsgBZTFtQb1hcV2HByU6EKeZ5Qf0";

export async function authenticateUser(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticateUser("signUp", email, password);
}

export function loginUser(email, password) {
  return authenticateUser("signInWithPassword", email, password);
}
