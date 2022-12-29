// DTOS
import { ProjectDTO } from "../../../../dtos/project.dto";

// CONTEXTS
import { useCv } from "../../../../contexts/cv.context";

interface ProjectFormProps {
	projectFormData: ProjectDTO;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ projectFormData }) => {
	const { onCvChange } = useCv();

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		onCvChange((prev) => {
			const projectIndex = prev.projects.findIndex(
				(e) => e.id === projectFormData.id
			);

			if (projectIndex > -1) {
				const prevCopy = { ...prev };
				const project = prevCopy.projects[projectIndex];
				prevCopy.projects[projectIndex] = {
					...project,
					[e.target.name]: e.target.value,
				};
				return prevCopy;
			}

			return prev;
		});
	};

	return (
		<div className="flex flex-col w-full gap-2 border p-2">
			<div className="grid grid-cols-2 gap-2">
				<input
					type="text"
					name="name"
					placeholder="Nome do projeto"
					value={projectFormData.name}
					onChange={handleOnChange}
				/>
				<input
					type="text"
					name="link"
					placeholder="Link"
					value={projectFormData.link}
					onChange={handleOnChange}
				/>
			</div>
			<textarea
				className="w-full"
				name="description"
				rows={4}
				placeholder="Descreva o projeto"
				value={projectFormData.description}
				onChange={handleOnChange}
			/>
		</div>
	);
};

export { ProjectForm };
