import InteractiveLink from "@modules/common/components/interactive-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
  description: "Algo de errado",
}

export default async function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Página não encontrada</h1>
      <p className="text-small-regular text-ui-fg-base">A página não existe.</p>
      <InteractiveLink href="/">Ir para página principal</InteractiveLink>
    </div>
  )
}
