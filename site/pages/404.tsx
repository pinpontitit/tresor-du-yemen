import type { GetStaticPropsContext } from 'next'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Text } from '@components/ui'
import Link from 'next/link'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const { pages } = await commerce.getAllPages({ config, preview })
  const { categories, brands } = await commerce.getSiteInfo({ config, preview })
  return {
    props: {
      pages,
      categories,
      brands,
    },
    revalidate: 200,
  }
}

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
      <Text variant="heading">Oups !</Text>
      <Text className="">
        La page saisie n'existe pas ou vous n'y avez pas accès.
      </Text>
      <Link href="/">
        <a className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150 text-sky-400">
          Revenir à la page d'accueil
        </a>
      </Link>
    </div>
  )
}

NotFound.Layout = Layout
