const size = {
  desktopHD: '1200px',
  desktop: '992px',
  mobile: '768px',
  tablet: '768px',
  phone: '576px',
}

export const media = {
  desktopHD: `@media screen and (max-width: ${size.desktopHD})`,
  desktop: `@media screen and (max-width: ${size.desktop})`,
  mobile: `@media screen and (max-width: ${size.mobile})`,
  tablet: `@media screen and (max-width: ${size.tablet})`,
  phone: `@media screen and (max-width: ${size.phone})`,
}
