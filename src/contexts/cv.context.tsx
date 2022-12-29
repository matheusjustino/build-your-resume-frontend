import {
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction,
	useMemo,
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
	hasPersonalInformation: boolean;
	hasAboutMe: boolean;
	hasEducations: boolean;
	hasCareer: boolean;
	hasProjects: boolean;
	hasSkills: boolean;
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

	const [
		hasPersonalInformation,
		hasAboutMe,
		hasEducations,
		hasCareer,
		hasProjects,
		hasSkills,
	] = useMemo(() => {
		const personalInformation =
			cvForm.personalInformation.name.length > 0 ||
			cvForm.personalInformation.email.length > 0 ||
			cvForm.personalInformation.phone.length > 0 ||
			cvForm.personalInformation.website.length > 0;

		const aboutMe = cvForm.personalInformation.about.length > 0;

		const educations =
			cvForm.educations[0].areaOfStudy.length > 0 ||
			cvForm.educations[0].grade.length > 0 ||
			cvForm.educations[0].school.length > 0 ||
			cvForm.educations[0].schoolEndDate.length > 0 ||
			cvForm.educations[0].schoolStartDate.length > 0;

		const career =
			cvForm.career[0].company.length > 0 ||
			cvForm.career[0].endDate.length > 0 ||
			cvForm.career[0].jobTitle.length > 0 ||
			(cvForm.career[0].overview &&
				cvForm.career[0].overview.length > 0) ||
			cvForm.career[0].startDate.length > 0;

		const projects =
			cvForm.projects[0].description.length > 0 ||
			cvForm.projects[0].link.length > 0 ||
			cvForm.projects[0].name.length > 0;

		const skills = cvForm.skills.length > 0;

		return [
			personalInformation,
			aboutMe,
			educations,
			career,
			projects,
			skills,
		];
	}, [cvForm]);

	const cvContextData: CVContextData = {
		cv: cvForm,
		onCvChange: setCvForm,
		hasPersonalInformation,
		hasAboutMe,
		hasEducations,
		hasCareer,
		hasProjects,
		hasSkills,
	};

	return (
		<CVContext.Provider value={cvContextData}>
			{children}
		</CVContext.Provider>
	);
};

export const useCv = () => useContext(CVContext);
