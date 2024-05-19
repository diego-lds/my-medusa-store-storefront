import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Login",
  description: "Entre na sua conta",
}

export default function Login() {
  return <LoginTemplate />
}
