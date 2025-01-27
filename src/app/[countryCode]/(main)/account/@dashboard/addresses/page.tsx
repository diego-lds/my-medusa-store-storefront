import { Metadata } from "next"
import { notFound } from "next/navigation"

import AddressBook from "@modules/account/components/address-book"

import { getCustomer, getRegion } from "@lib/data"

import { headers } from "next/headers"

export const metadata: Metadata = {
  title: "Endereços",
  description: "Ver todos endereços",
}

export default async function Addresses() {
  const nextHeaders = headers()
  const countryCode = nextHeaders.get("next-url")?.split("/")[1] || ""
  const customer = await getCustomer()
  const region = await getRegion(countryCode)

  if (!customer || !region) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="addresses-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Endereços de entrega</h1>
        <p className="text-base-regular">
          Atualize seus endereços de entrega, você pode adicionar quantos
          quiser. Salvando seus endereços eles estarão disponíveis no momento do
          checkout.
        </p>
      </div>
      <AddressBook customer={customer} region={region} />
    </div>
  )
}
