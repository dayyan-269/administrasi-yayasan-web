import Table from "@/components/Tables/Table";
import Card from "@/components/Cards/Card";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import LinkButton from "@/components/Buttons/LinkButton";
import DashboardContainer from "@/components/Containers/DashboardContainer";

function Page() {
  return (
    <DashboardContainer>
      <LinkButton href="/management/inventoris/insert" className="w-fit btn-sm">
        Tambah Data
      </LinkButton>
      <Card title={"Data Inventoris Anak Asuhan"}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Barang</th>
              <th>Pemilik</th>
              <th>Kuantitas</th>
              <th>Keterangan</th>
              <th>Tanggal Masuk</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td className="flex flex-row gap-1">
                <LinkButton
                  href="/management/master/barang-anak-asuhan/edit"
                  className="btn-info"
                >
                  Edit
                </LinkButton>
                <PrimaryButton className="btn-accent">Delete</PrimaryButton>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
}

export default Page;
