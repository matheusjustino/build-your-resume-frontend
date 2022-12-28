// DTOS
import { PersonalInformationDTO } from "../dtos/personal-information.dto";
import { EducationFormDTO } from "../dtos/education.dto";
import { CareerDTO } from "../dtos/career.dto";
import { ProjectDTO } from "../dtos/project.dto";
import { SkillDTO } from "../dtos/skill.dto";

export interface CVInterface {
	personalInformation: PersonalInformationDTO;
	educations: EducationFormDTO[];
	career: CareerDTO[];
	projects: ProjectDTO[];
	skills: SkillDTO[];
}
