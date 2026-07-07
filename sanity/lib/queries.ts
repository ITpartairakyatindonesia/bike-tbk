export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  _id,
  _type,
  companyName,
  companyLegalName,
  companyInitials,
  tagline,
  footerDescription,
  logo{
    asset->
  },
  favicon,
  contactInfo,
  socialLinks,
  defaultSeoTitle,
  defaultSeoDescription,
  defaultOgImage
}`
