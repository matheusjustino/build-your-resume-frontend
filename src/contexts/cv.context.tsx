import {
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction,
} from "react";

// DTOS
import { PersonalInformationDTO } from "../dtos/personal-information.dto";
import { EducationFormDTO } from "../dtos/education.dto";
import { CareerDTO } from "../dtos/career.dto";
import { ProjectDTO } from "../dtos/project.dto";
import { SkillDTO } from "../dtos/skill.dto";

// INTERFACES
import { CVInterface } from "../interfaces/cv.interface";

interface CVContextData {
	cv: CVInterface;
	onCvChange: Dispatch<SetStateAction<CVInterface>>;
}

interface CVProviderProps {
	children: React.ReactNode;
}

export const CVContext = createContext<CVContextData>({} as CVContextData);

export const CVProvider: React.FC<CVProviderProps> = ({ children }) => {
	const [cvForm, setCvForm] = useState<CVInterface>({
		personalInformation: new PersonalInformationDTO(),
		educations: [new EducationFormDTO()],
		career: [new CareerDTO()],
		projects: [new ProjectDTO()],
		skills: [],
	});

	const cvContextData: CVContextData = {
		cv: cvForm,
		onCvChange: setCvForm,
	};

	console.log({ cvForm });

	return (
		<CVContext.Provider value={cvContextData}>
			{children}
		</CVContext.Provider>
	);
};

export const useCv = () => useContext(CVContext);
