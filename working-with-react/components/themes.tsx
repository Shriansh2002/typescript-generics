"use client";
import React, { useState } from "react";

const themeOptions = ["light", "dark", "system"];

const Themes = () => {
	const [selectedTheme, setSelectedTheme] = useState("light");

	return (
		<section className="min-h-screen flex flex-col items-center justify-center">
			<h1 className="text-4xl mb-5 font-semibold">Themes</h1>

			<ul className="list-disc">
				{themeOptions.map((theme, index: number) => (
					<li key={index}>
						<button
							onClick={() => setSelectedTheme(theme)}
							className={
								theme === selectedTheme
									? "font-bold"
									: ""
							}
						>
							{theme}
						</button>
					</li>
				))}
			</ul>

			<p className="mt-10">
				Selected Theme: <strong>{selectedTheme}</strong>
			</p>
		</section>
	);
};

export default Themes;
