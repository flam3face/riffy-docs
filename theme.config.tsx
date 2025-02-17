import React from 'react'
import { useRouter } from "nextra/hooks"
import { Link, useConfig } from 'nextra-theme-docs';

export default {
  docsRepositoryBase: "https://github.com/riffy-team/riffy-docs/tree/main",
  color: {
    hue: 50,
  },
  banner: {
    key: 'LL-v3-deprecation-banner',
    content: (
      <Link href="https://github.com/lavalink-devs/Lavalink/discussions/1100" target="_blank">
        ⚠️ Lavalink V3 ends Nov 1, 2024. Prepare! Read more →
      </Link>
    )
  },
  logo: (
    <>
      <img src="/logo.svg" alt="logo" width="20" height="20" />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Riffy
      </span>
    </>
  ),
  head() {
    const { asPath } = useRouter();
    const { title } = useConfig()
    const { frontMatter } = useConfig()

    const url = `https://riffy.js.org${asPath}`
    const metaDescription = frontMatter.description || 'Riffy is a pro lavalink client. Designed to be simple and easy to use, with a focus on stability and more features.'
    const metaTitle = `${title} - Riffy`

    return (
      <>
        <title>{metaTitle}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={metaTitle} />
        <meta
          property="og:description"
          content={metaDescription}
        />
      </>
    )

  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="" target="_blank">
          Riffy
        </a>
        .
      </span>
    )
  }
}
