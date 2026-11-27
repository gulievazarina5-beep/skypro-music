import { UserType, TokenType } from "../types/user";

const BASE_URL = "https://webdev-music-003b5b991590.herokuapp.com";

export async function registerUser({
  email,
  password,
  username,
}: {
  email: string;
  password: string;
  username: string;
}): Promise<UserType> {
  const res = await fetch(`${BASE_URL}/user/signup/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, username }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Ошибка при регистрации");
  }

  return data.result;
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserType> {
  const res = await fetch(`${BASE_URL}/user/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Ошибка при входе");
  }

  return data;
}

export async function getTokens({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<TokenType> {
  const res = await fetch(`${BASE_URL}/user/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Ошибка получения токена");
  }

  return data;
}
