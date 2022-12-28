import { FaTrash } from "react-icons/fa";

// CONTEXTS
import { useCv } from "../../contexts/cv.context";

// DTOS
import { CareerDTO } from "../../dtos/career.dto";

// COMPONENTS
import { CareerForm } from "./components/career-form";

const Career: React.FC = () => {
	const {
		cv: { career },
		onCvChange,
	} = useCv();

	const handleAddNewCareer = () => {
		onCvChange(({ career, ...prev }) => {
			return {
				...prev,
				career: career.concat(new CareerDTO()),
			};
		});
	};

	const handleDeleteCareer = (careerId: string) => {
		onCvChange(({ career, ...prev }) => {
			return {
				...prev,
				career: career.filter((c) => c.id !== careerId),
			};
		});
	};

	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				<h1 className="uppercase mb-1">Experiência</h1>
				{career?.map((c, index) => (
					<div key={c.id + index} className="mt-4">
						<CareerForm careerFormData={c} />

						{index > 0 && (
							<FaTrash
								className="-mt-6 flex ml-auto cursor-pointer pr-2"
								color="red"
								size={24}
								onClick={() => handleDeleteCareer(c.id)}
							/>
						)}
					</div>
				))}
			</div>
			<button
				onClick={handleAddNewCareer}
				className="mt-2 max-w-[250px] w-full bg-green-500 hover:bg-green-600"
			>
				Adicionar
			</button>
		</div>
	);
};

export { Career };
