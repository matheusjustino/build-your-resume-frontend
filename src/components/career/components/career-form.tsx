import { ChangeEvent } from "react";

// CONTEXTS
import { useCv } from "../../../contexts/cv.context";

// DTOS
import { CareerDTO } from "../../../dtos/career.dto";

interface CareerFormProps {
	careerFormData: CareerDTO;
}

const CareerForm: React.FC<CareerFormProps> = ({ careerFormData }) => {
	const { onCvChange } = useCv();

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		onCvChange((prev) => {
			const careerIndex = prev.career.findIndex(
				(c) => c.id === careerFormData.id
			);

			if (careerIndex > -1) {
				const prevCopy = { ...prev };
				const career = prevCopy.career[careerIndex];
				prevCopy.career[careerIndex] = {
					...career,
					[e.target.name]: e.target.value,
				};
				return prevCopy;
			}

			return prev;
		});
	};

	return (
		<div className="flex flex-col w-full gap-2 border p-2">
			<div className="flex flex-col gap-2">
				<div className="grid grid-cols-3 gap-2">
					<input
						type="text"
						name="jobTitle"
						placeholder="Título do cargo"
						value={careerFormData.jobTitle}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="company"
						placeholder="Empresa"
						value={careerFormData.company}
						onChange={handleChange}
					/>
					<input
						type="date"
						name="startDate"
						placeholder="Início"
						value={careerFormData.startDate}
						onChange={handleChange}
					/>
					<input
						type="date"
						name="endDate"
						placeholder="Fim"
						value={careerFormData.endDate}
						onChange={handleChange}
					/>
				</div>
				<textarea
					name="about"
					rows={4}
					placeholder="Descreva sua atuação"
					value={careerFormData.overview}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export { CareerForm };
