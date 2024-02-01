import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import EmployeeCard from "./EmployeeCard";

export default function AbsenceEmployees() {
  const [reason, setReason] = useState("전체");
  const { employees } = useContext(DataContext);

  if (!employees) {
    return <div>Loading...</div>;
  }

  const absenceEmployees = employees.filter(
    (employee) => employee.isWorking === false
  );

  function getFilteredEmployees() {
    switch (reason) {
      case "전체":
        return absenceEmployees;

      case "미기입":
        return absenceEmployees.filter(
          (employees) => !employees.reasonForAbsence
        );

      default:
        return absenceEmployees.filter(
          (employees) => employees.reasonForAbsence === reason
        );
    }
  }

  const filteredEmployees = getFilteredEmployees();

  function handleChange(e) {
    setReason(e.target.value);
  }

  return (
    <div className="bg-red-100 p-4 rounded-md">
      <p className="mb-4 text-center uppercase text-red-400 font-bold text-[20px]">
        not working now !
      </p>
      <div className="flex justify-end mb-3">
        <select className="px-2 py-1 rounded-md" onChange={handleChange}>
          <option>전체</option>
          <option>연차</option>
          <option>반차</option>
          <option>미기입</option>
        </select>
      </div>
      <ul className="grid grid-cols-4 gap-4">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </ul>
    </div>
  );
}
