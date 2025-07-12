export interface INavBarButton {
	path: string;
	title: string;
	iconLeft?: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & {
			title?: string;
			titleId?: string;
			desc?: string;
			descId?: string;
		}
	>;
	iconRight?: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & {
			title?: string;
			titleId?: string;
			desc?: string;
			descId?: string;
		}
	>;
	dataSource: { path: string; title: string }[];
}