import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import DashboardContainer from "@/components/Containers/DashboardContainer";
import PrimaryAlert from "@/components/Alerts/PrimaryAlert";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextInput from "@/components/Inputs/TextInput";
import LinkButton from "@/components/Buttons/LinkButton";
import Select from "@/components/Inputs/Select";
import Card from "@/components/Cards/Card";
import TextArea from "@/components/Inputs/TextArea";

const Page = () => {
  return (
    <DashboardContainer>
      <Card>
        <h1 className="prose prose-xl">Tambah Jurnal Aktivitas</h1>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-row gap-x-3">
            <Select label="Nama Anak Asuh"></Select>
            <TextInput label="Tanggal Ditambahkan" type="date" />
          </div>
          <div className="flex flex-row gap-x-3">
            <TextInput label="Jenis Aktivitas" type="text" />
          </div>
          <TextArea label="Deskripsi"></TextArea>
          <div className="flex flex-row gap-x-3">
            <LinkButton className="w-fit btn-accent" href="/management/jurnal">
              <AiFillCloseCircle />
              Cancel
            </LinkButton>
            <PrimaryButton className="w-fit btn-primary">
              <AiFillCheckCircle />
              Submit
            </PrimaryButton>
          </div>
        </div>
      </Card>
    </DashboardContainer>
  );
};

export default Page;
