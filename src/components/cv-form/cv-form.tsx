import { useState, Dispatch, SetStateAction } from "react";

// COMPONENTS
import { PersonalInformation } from "../personal-information/personal-information";
import { Education } from "../education/education";
import { Career } from "../career/career";
import { Project } from "../project/project";
import { Skill } from "../skill/skill";

const CVForm: React.FC = () => {
	return (
		<div className="flex flex-col w-full bg-slate-400 p-2 my-8 gap-6">
			<PersonalInformation />
			<Education />
			<Career />
			<Project />
			<Skill />
		</div>
	);
};

export { CVForm };
