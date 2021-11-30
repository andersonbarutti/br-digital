const size = {
  desktopHD: '1200px',
  desktop: '992px',
  tablet: '768px',
  phone: '576px',
}

export const media = {
  desktopHD: `@media screen and (max-width: ${size.desktopHD})`,
  desktop: `@media screen and (max-width: ${size.desktop})`,
  tablet: `@media screen and (max-width: ${size.tablet})`,
  phone: `@media screen and (max-width: ${size.phone})`,
}
