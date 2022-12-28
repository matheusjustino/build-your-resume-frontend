import { FaTrash } from "react-icons/fa";

// CONTEXTS
import { useCv } from "../../contexts/cv.context";

// DTOS
import { EducationFormDTO } from "../../dtos/education.dto";

// INTERFACES
import { CVInterface } from "../../interfaces/cv.interface";

// COMPONENTS
import { EducationForm } from "./education-form/education-form";

const Education: React.FC = () => {
	const {
		cv: { educations },
		onCvChange,
	} = useCv();

	const handleAddNewEducation = () => {
		onCvChange(({ educations, ...prev }) => {
			return {
				...prev,
				educations: educations.concat(new EducationFormDTO()),
			};
		});
	};

	const handleDeleteEducation = (educationId: string) => {
		onCvChange(({ educations, ...prev }) => {
			return {
				...prev,
				educations: educations.filter((e) => e.id !== educationId),
			};
		});
	};

	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				<h1 className="uppercase mb-1">Educação</h1>
				{educations?.map((education, index) => (
					<div key={education.id + index} className="mt-4">
						<EducationForm educationFormData={educations[index]} />

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
