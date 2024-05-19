import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/eye"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-start small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-6xl leading-10 text-ui-fg-base font-extrabold  mb-6 text-blue-700"
          >
            Medusa Store
          </Heading>
          <Heading
            level="h2"
            className="text-2xl leading-10 text-ui-fg-subtle font-normal"
          >
            a plataforma de vendas online mais utilizada do Brasil
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <LocalizedClientLink
            href="/store"
            className="text-2xl leading-10 hover:text-blue-600"
          >
            ver produtos
          </LocalizedClientLink>
        </a>
      </div>
    </div>
  )
}

export default Hero
