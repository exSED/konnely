import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

export function PanelData({ stadics }) {
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
	let labels = stadics.Labels;
	let lives = stadics.Lives;
	let deaths = stadics.Deaths;
	let homogen = stadics.Homogen;
	const options = {
		responsive: false,
		scales: {
			xAxes: [
				{
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false,
					},
				},
			],
			yAxes: [
				{
					ticks: { display: false },
					stacked: true,
					ticks: {
						beginAtZero: true,
					},
					gridLines: {
						display: false,
						drawBorder: false,
					},
				},
			],
		},
		color: "white",
		zise: 10,
	};
	const data = {
		datasets: [
			{
				label: "Vivos",
				data: lives,
				borderColor: "#FBE122",
				backgroundColor: "#FBE122",
				tension: 0.4,
			},
			{
				label: "Homogenizados",
				data: homogen,
				borderColor: "white",
				backgroundColor: "white",
				tension: 0.4,
			},
			{
				label: "Muertos",
				data: deaths,
				borderColor: "red",
				backgroundColor: "red",
				tension: 0.4,
			},
		],
		labels,
	};
	const cm = <Line data={data} options={options} />;

	return cm;
}
