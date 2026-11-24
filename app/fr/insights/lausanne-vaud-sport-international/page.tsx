import LausanneVaudArticle, { lausanneVaudMetadata } from "../../../components/article/LausanneVaudArticle";

export const metadata = lausanneVaudMetadata("fr");

export default function Page() {
  return <LausanneVaudArticle locale="fr" />;
}
