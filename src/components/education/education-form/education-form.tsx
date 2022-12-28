import { ChangeEvent } from "react";

// CONTEXTS
import { useCv } from "../../../contexts/cv.context";

// DTOS
import { EducationFormDTO } from "../../../dtos/education.dto";

interface EducationFormProps {
	educationFormData: EducationFormDTO;
}

const EducationForm: React.FC<EducationFormProps> = ({ educationFormData }) => {
	const { onCvChange } = useCv();

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		onCvChange((prev) => {
			const educationIndex = prev.educations.findIndex(
				(e) => e.id === educationFormData.id
			);

			if (educationIndex > -1) {
				const prevCopy = { ...prev };
				const education = prevCopy.educations[educationIndex];
				prevCopy.educations[educationIndex] = {
					...education,
					[e.target.name]: e.target.value,
				};
				return prevCopy;
			}

			return prev;
		});
	};

	return (
		<div className="flex flex-col w-full gap-2 border p-2">
			<div className="grid grid-cols-3 gap-2">
				<input
					type="text"
					name="school"
					placeholder="Escola/Universidade"
					value={educationFormData.school}
					onChange={handleOnChange}
				/>
				<input
					type="date"
					name="schoolStartDate"
					placeholder="Início"
					value={educationFormData.schoolStartDate}
					onChange={handleOnChange}
				/>
				<input
					type="date"
					name="schoolEndDate"
					placeholder="Fim"
					value={educationFormData.schoolEndDate}
					onChange={handleOnChange}
				/>
				<input
					type="text"
					name="areaOfStudy"
					placeholder="Área de estudo"
					value={educationFormData.areaOfStudy}
					onChange={handleOnChange}
				/>
				<input
					type="text"
					name="grade"
					placeholder="Nível"
					value={educationFormData.grade}
					onChange={handleOnChange}
				/>
			</div>
		</div>
	);
};

export { EducationForm };
