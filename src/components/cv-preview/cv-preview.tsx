import { forwardRef, Fragment } from "react";
import dayjs from "dayjs";

// CONTEXTS
import { useCv } from "../../contexts/cv.context";

const CVPreview = forwardRef<any>((props, ref) => {
	const {
		cv,
		hasPersonalInformation,
		hasAboutMe,
		hasEducations,
		hasCareer,
		hasProjects,
		hasSkills,
	} = useCv();

	return (
		<div
			id="printCV"
			ref={ref}
			className="flex flex-col w-full bg-white gap-4 my-8"
		>
			{hasPersonalInformation && (
				<Fragment>
					<div className="flex justify-between w-full min-h-[150px] p-2 bg-orange-200">
						<div className="flex flex-col gap-2 max-w-[60%] flex-wrap">
							<h1 className="break-words text-2xl font-semibold uppercase">
								{cv.personalInformation.name}
							</h1>
							<span className="break-words text-xs font-semibold">
								{cv.personalInformation.phone
									.split(" ")
									.join("")
									.replace(
										/(\d{2})(\d{1})(\d{4})(\d{4})/,
										"+55 ($1) $2$3-$4"
									)}
							</span>
						</div>

						<div className="flex flex-col items-end gap-2 max-w-[35%]">
							<span className="break-words text-xs font-semibold">
								{cv.personalInformation.email}
							</span>
							<a
								href={cv.personalInformation.website}
								className="break-words text-xs font-semibold"
							>
								{cv.personalInformation.website}
							</a>
						</div>
					</div>
				</Fragment>
			)}

			{hasAboutMe && (
				<div className="flex flex-col gap-2 p-2">
					<h1 className="text-2xl font-semibold uppercase">
						Sobre mim
					</h1>
					<span className="break-all">
						{cv.personalInformation.about}
					</span>
				</div>
			)}

			{hasEducations && (
				<div className="flex flex-col gap-4 p-2">
					<h1 className="text-2xl font-semibold uppercase">
						Formação
					</h1>

					{cv.educations.map((education, index) => (
						<div
							key={education.id + index}
							className="flex flex-col gap-2 text-sm"
						>
							<div className="flex items-center justify-between text-sm">
								<span>
									{[
										education.school,
										education.areaOfStudy,
										education.grade,
									]
										.filter(Boolean)
										.join(" - ")}
								</span>
								<span className="italic text-sm">
									{dayjs(education.schoolStartDate).format(
										"DD MMM YYYY"
									)}{" "}
									-{" "}
									{education.schoolEndDate.length > 0
										? dayjs(education.schoolEndDate).format(
												"DD MMM YYYY"
										  )
										: "Presente"}
								</span>
							</div>
						</div>
					))}
				</div>
			)}

			{hasCareer && (
				<div className="flex flex-col gap-4 p-2">
					<h1 className="text-2xl font-semibold uppercase">
						Experiência
					</h1>

					{cv.career.map((career, index) => (
						<div
							key={career.id + index}
							className="flex flex-col gap-2 text-sm"
						>
							<div className="flex items-center justify-between text-sm">
								<span>
									{[career.company, career.jobTitle]
										.filter(Boolean)
										.join(" - ")}
								</span>

								{career.startDate.length > 0 && (
									<span className="italic text-sm">
										{dayjs(career.startDate).format(
											"DD MMM YYYY"
										)}{" "}
										-{" "}
										{career.endDate.length > 0
											? dayjs(career.endDate).format(
													"DD MMM YYYY"
											  )
											: "Presente"}
									</span>
								)}
							</div>

							{career.overview?.length > 0 && (
								<span>{career.overview}</span>
							)}
						</div>
					))}
				</div>
			)}

			{hasProjects && (
				<div className="flex flex-col gap-4 p-2">
					<h1 className="text-2xl font-semibold uppercase">
						Projetos
					</h1>

					{cv.projects.map((project, index) => (
						<div
							key={project.id + index}
							className="flex flex-col gap-2 text-sm"
						>
							<div className="flex items-center justify-between text-sm">
								<span>
									{[project.name, project.link]
										.filter(Boolean)
										.join(" - ")}
								</span>
							</div>

							{project.description.length > 0 && (
								<span>{project.description}</span>
							)}
						</div>
					))}
				</div>
			)}

			{hasSkills && (
				<div className="flex flex-col gap-4 p-2">
					<h1 className="text-2xl font-semibold uppercase">
						Projetos
					</h1>

					<div className="flex flex-wrap gap-4">
						{cv.skills.map((skill, index) => (
							<span
								key={skill.id + index}
								className="py-1 px-2 bg-blue-300 rounded-full"
							>
								{skill.name}
							</span>
						))}
					</div>
				</div>
			)}
		</div>
	);
});

CVPreview.displayName = "CVPreview";

export { CVPreview };
