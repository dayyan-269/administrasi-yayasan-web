import DashboardContainer from "@/components/Containers/DashboardContainer";
import PrimaryAlert from "@/components/Alerts/PrimaryAlert";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextInput from "@/components/Inputs/TextInput";
import LinkButton from "@/components/Buttons/LinkButton";
import Select from "@/components/Inputs/Select";
import Card from "@/components/Cards/Card";

const Page = () => {
  return (
    <DashboardContainer>
      <Card>
        <h1 className="prose prose-xl">Tambah Pengobatan</h1>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-row gap-x-3">
            <TextInput label="Tanggal Dipesan" type="date" />
          </div>
          <div className="flex flex-row gap-x-3">
            <Select label="Jenis Kebutuhan Medis"></Select>
            <Select label="Jenis Penyakit"></Select>
          </div>
          <div className="flex flex-row gap-x-3">
            <LinkButton
              className="w-fit btn-accent"
              href="/management/pengobatan"
            >
              Cancel
            </LinkButton>
            <PrimaryButton className="w-fit btn-primary">Submit</PrimaryButton>
          </div>
        </div>
      </Card>
    </DashboardContainer>
  );
};

export default Page;
