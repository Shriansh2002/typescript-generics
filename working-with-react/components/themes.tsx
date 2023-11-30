"use client";
import React, { useState } from "react";
import ThemeOptions from "./ThemeOptions";

const Themes = () => {
	const [selectedTheme, setSelectedTheme] = useState("light");
	const themeOptions = ["light", "dark", "system"];

	return (
		<section className="min-h-screen flex flex-col items-center justify-center">
			<h1 className="text-4xl mb-5 font-semibold">Themes</h1>

			<ThemeOptions
				themeOptions={themeOptions}
				selectedTheme={selectedTheme}
				onThemeClick={(theme) => setSelectedTheme(theme)}
			/>

			<p className="mt-10">
				Selected Theme: <strong>{selectedTheme}</strong>
			</p>
		</section>
	);
};

export default Themes;
