import { useLoaderData } from "react-router-dom";
import StudentCard from "./StudentCard";

const TotalStudent = () => {
  const students = useLoaderData();
  console.log(students);
  return (
    <div>
      <h2 className="text-center text-3xl text-red-600 my-6">Information of Students : {students.length}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {
            students.map((student) => <StudentCard
            key={student._id}
            student={student}
            ></StudentCard>)
        }
      </div>
    </div>
  );
};

export default TotalStudent;
