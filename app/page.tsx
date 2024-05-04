import { LinkTree } from "@/components/linktree";
import { linkTreeConfigurations } from "@/data/linktree-data";

export default function Home() {
	return (
		<section className="flex flex-col items-start justify-start gap-4 py-8 md:py-10 h-full">
			<div className="flex flex-wrap justify-center w-full gap-4">
				{linkTreeConfigurations.map((config, index) => (
					<LinkTree key={index} {...config} />
				))}
			</div>
		</section>
	);
}