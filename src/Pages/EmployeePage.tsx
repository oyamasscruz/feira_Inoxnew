import ProfileCard from "../components/ProfileCard";
import { employees } from "../data/employees";
import { useParams } from "react-router-dom";

export default function EmployeePage() {
  const { slug } = useParams();

  const employee = employees.find((emp) => emp.slug === slug);

  if (!employee) {
    return <h1>Funcionário Não encontrado</h1>;
  }
  return (
    <>
      <ProfileCard name={employee.name} whatsapp={employee.whatsapp} />
    </>
  );
}
