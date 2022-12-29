import "./cv-preview.module.scss";
import { forwardRef, Fragment } from "react";

// CONTEXTS
import { useCv } from "../../contexts/cv.context";

const CVPreview = forwardRef((props, ref) => {
	const { cv } = useCv();

	const hasPersonalInformation =
		cv.personalInformation.name ||
		cv.personalInformation.email ||
		cv.personalInformation.phone ||
		cv.personalInformation.website;

	const hasAboutMe = cv.personalInformation.about;

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
		</div>
	);
});

CVPreview.displayName = "CVPreview";

export { CVPreview };
