import { v4 as uuidv4 } from "uuid";

export class EducationFormDTO {
	id: string = uuidv4();
	school: string = "";
	schoolStartDate: string = "";
	schoolEndDate: string = "";
	areaOfStudy: string = "";
	grade: string = "";
}
