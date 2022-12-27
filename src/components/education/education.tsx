import { useState } from "react";
import { FaTrash } from "react-icons/fa";

// DTOS
import { EducationFormDTO } from "../../dtos/education.dto";

// COMPONENTS
import { EducationForm } from "../education-form/education-form";

const Education: React.FC = () => {
	const [educations, setEducations] = useState<EducationFormDTO[]>([
		new EducationFormDTO(),
	]);

	const handleAddNewEducation = () => {
		setEducations((prev) => prev.concat(new EducationFormDTO()));
	};

	const handleDeleteEducation = (educationId: string) => {
		setEducations((prev) => prev.filter((e) => e.id !== educationId));
	};

	console.log({ educations });

	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				<h1 className="uppercase mb-1">Educação</h1>
				{educations?.map((education, index) => (
					<div key={education.id + index} className="mt-4">
						<EducationForm
							educationFormData={educations[index]}
							onChange={setEducations}
						/>

						{index > 0 && (
							<FaTrash
								className="-mt-6 flex ml-auto cursor-pointer pr-2"
								color="red"
								size={24}
								onClick={() =>
									handleDeleteEducation(education.id)
								}
							/>
						)}
					</div>
				))}
			</div>
			<button
				onClick={handleAddNewEducation}
				className="mt-2 max-w-[250px] w-full bg-green-500 hover:bg-green-600"
			>
				Adicionar
			</button>
		</div>
	);
};

export { Education };
