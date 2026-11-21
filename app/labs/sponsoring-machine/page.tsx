import SponsoringMachine, { sponsoringMachineMetadata } from "../../components/SponsoringMachine";

export const metadata = sponsoringMachineMetadata("en");

export default function Page() {
  return <SponsoringMachine locale="en" />;
}
