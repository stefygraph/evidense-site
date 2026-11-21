import SponsoringMachine, { sponsoringMachineMetadata } from "../../../components/SponsoringMachine";

export const metadata = sponsoringMachineMetadata("de");

export default function Page() {
  return <SponsoringMachine locale="de" />;
}
