// DTOS
import { BaseDTO } from "./base.dto";

export class EducationFormDTO extends BaseDTO {
	school: string = "";
	schoolStartDate: string = "";
	schoolEndDate: string = "";
	areaOfStudy: string = "";
	grade: string = "";
}
