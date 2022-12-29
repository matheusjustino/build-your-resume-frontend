import { useState, Fragment } from "react";

// CONTEXTS
import { useCv } from "../../contexts/cv.context";

// DTOS
import { SkillDTO } from "../../dtos/skill.dto";

const Skill: React.FC = () => {
	const [newSkill, setNewSkill] = useState("");

	const {
		cv: { skills },
		onCvChange,
	} = useCv();

	const handleAddNewSkill = () => {
		if (!newSkill.length) {
			return;
		}

		onCvChange(({ skills, ...prev }) => {
			return {
				...prev,
				skills: skills.concat(new SkillDTO(newSkill)),
			};
		});
		setNewSkill("");
	};

	const handleDeleteSkill = (skillId: string) => {
		onCvChange(({ skills, ...prev }) => {
			return {
				...prev,
				skills: skills.filter((s) => s.id !== skillId),
			};
		});
	};

	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				<h1 className="uppercase mb-1">Habilidades</h1>

				<div className="relative flex flex-col gap-2 py-2">
					{skills.length > 0 && (
						<div className="w-full bg-blue-100 inline-flex items-center text-sm mt-2 mr-1 flex-wrap">
							{skills.map((skill, index) => (
								<div
									className="border border-blue-400 m-1"
									key={skill.id + index}
								>
									<span
										key={skill.id + index}
										className="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1"
									>
										{skill.name}
									</span>
									<button
										onClick={() =>
											handleDeleteSkill(skill.id)
										}
										className="w-6 h-8 inline-block align-middle text-white bg-red-400 hover:bg-red-500 focus:outline-none"
									>
										<svg className="w-6 h-6 fill-current mx-auto">
											<path
												fillRule="evenodd"
												d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
											/>
										</svg>
									</button>
								</div>
							))}
						</div>
					)}

					<input
						className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 py-2 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
						placeholder="Digite uma habilidade"
						value={newSkill}
						onChange={(e) => setNewSkill(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleAddNewSkill();
							}
						}}
					/>
					<div className={`${newSkill.length ? "block" : "hidden"}`}>
						<div className="absolute z-40 left-0 w-full">
							<div className="py-1 text-sm bg-white shadow-lg border border-gray-300">
								<a
									onClick={handleAddNewSkill}
									className="block py-1 px-5 cursor-pointer hover:bg-indigo-600 hover:text-white"
								>
									Add tag
									<span
										className="font-semibold"
										x-text="textInput"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Skill };
