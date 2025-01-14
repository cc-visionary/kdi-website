import { BRANDS } from "./brands";

export const NAVBAR = {
  logo: {
    src: "/logos/KDI Official Logo Files_KDI Official Logo.png",
    alt: "Kassi Distributors Inc. Logo Mark",
    link: "/",
  },
  links: [
    {
      label: "Brands",
      link: "/brands",
      subcategories: BRANDS.map(({ slug, name, logo }) => ({
        label: name,
        logo,
        link: `/brands/${slug}`,
      })),
    },
    {
      label: "Showroom",
      link: "/showroom",
    },
    { label: "Blogs", link: "/blogs" },
    { label: "About Us", link: "/about" },
  ],
};
