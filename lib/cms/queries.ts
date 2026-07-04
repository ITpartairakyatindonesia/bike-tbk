export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  _id,
  _type,
  companyName,
  companyLegalName,
  tagline,
  description,
  logo{
    asset->
  },
  favicon{
    asset->
  },
  defaultSeoTitle,
  defaultSeoDescription,
  defaultOgImage{
    asset->
  },
  copyright
}`

export const HERO_QUERY = `*[_type == "hero"][0]{
  _id,
  _type,
  title,
  subtitle,
  backgroundImage{
    asset->
  }
}`
