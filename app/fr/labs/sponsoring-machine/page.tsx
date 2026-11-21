import SponsoringMachine, { sponsoringMachineMetadata } from "../../../components/SponsoringMachine";

export const metadata = sponsoringMachineMetadata("fr");

export default function Page() {
  return <SponsoringMachine locale="fr" />;
}
