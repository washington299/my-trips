import { render, screen } from "@testing-library/react";

import Map from ".";

describe("<Map />", () => {
	it("should render without any marker", () => {
		render(<Map places={[]} />);

		expect(
			screen.getByRole("link", {
				name: /a js library for interactive maps/i,
			}),
		).toBeInTheDocument();
	});

	it("should render with the marker in correct place", () => {
		const firstPlace = {
			id: "1",
			name: "Diadema",
			slug: "Diadema",
			location: {
				latitude: 0,
				longitude: 0,
			},
		};

		const secondPlace = {
			id: "2",
			name: "São Bernardo do Campo",
			slug: "sao-bernardo-do-campo",
			location: {
				latitude: 50,
				longitude: 50,
			},
		};

		render(<Map places={[firstPlace, secondPlace]} />);

		expect(screen.getByTitle(/Diadema/i)).toBeInTheDocument();
		expect(screen.getByTitle(/São Bernardo do Campo/i)).toBeInTheDocument();
	});
});
