import LausanneVaudArticle, { lausanneVaudMetadata } from "../../components/article/LausanneVaudArticle";

export const metadata = lausanneVaudMetadata("en");

export default function Page() {
  return <LausanneVaudArticle locale="en" />;
}
