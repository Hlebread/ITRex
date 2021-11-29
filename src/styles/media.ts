const customMediaQuery = (width: number, minmax: string) =>
  `@media (${minmax}-width: ${width}px)`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1800, "min"),
  tablet: customMediaQuery(768, "min"),
  phone: customMediaQuery(767, "max"),
};

export default media;
