import { FaTrash } from "react-icons/fa";

// CONTEXTS
import { useCv } from "../../contexts/cv.context";

// DTOS
import { ProjectDTO } from "../../dtos/project.dto";

// COMPONENTS
import { ProjectForm } from "./components/project-form/project-form";

const Project: React.FC = () => {
	const {
		cv: { projects },
		onCvChange,
	} = useCv();

	const handleAddNewProject = () => {
		onCvChange(({ projects, ...prev }) => {
			return {
				...prev,
				projects: projects.concat(new ProjectDTO()),
			};
		});
	};

	const handleDeleteProject = (projectId: string) => {
		onCvChange(({ projects, ...prev }) => {
			return {
				...prev,
				projects: projects.filter((e) => e.id !== projectId),
			};
		});
	};

	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				<h1 className="uppercase mb-1">Projetos</h1>
				{projects?.map((project, index) => (
					<div key={project.id + index} className="mt-4">
						<ProjectForm projectFormData={project} />

						{index > 0 && (
							<FaTrash
								className="-mt-6 flex ml-auto cursor-pointer pr-2"
								color="red"
								size={24}
								onClick={() => handleDeleteProject(project.id)}
							/>
						)}
					</div>
				))}
			</div>
			<button
				onClick={handleAddNewProject}
				className="mt-2 max-w-[250px] w-full bg-green-500 hover:bg-green-600"
			>
				Adicionar
			</button>
		</div>
	);
};

export { Project };
