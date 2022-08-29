import SchemeRegular from "./fonts/SchemeRg-Regular.woff2";
import SchemeBold from "./fonts/SchemeRg-Bold.woff2";

const SchemeFontRegular = {
  fontFamily: "SchemeRegular",
  fontStyle: "normal",
  fontWeight: 400,
  src: `local('SchemeRg-Regular'), 
  url(${SchemeRegular}) format('woff2')`,
};

const SchemeFontBold = {
  fontFamily: "SchemeBold",
  fontStyle: "normal",
  fontWeight: 700,
  src: `local('SchemeRg-Bold'), 
  url(${SchemeBold}) format('woff2')`,
};

export default [SchemeFontRegular, SchemeFontBold];
