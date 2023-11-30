import React from "react";

type ThemeOptionsProps<T> = {
	themeOptions: T[];
	selectedTheme: T;
	onThemeClick: (theme: T) => void;
};

const ThemeOptions = <T extends React.ReactNode>({
	themeOptions,
	selectedTheme,
	onThemeClick,
}: ThemeOptionsProps<T>) => {
	return (
		<ul className="list-disc">
			{themeOptions.map((theme, index: number) => (
				<li key={index}>
					<button
						onClick={() => onThemeClick(theme)}
						className={
							theme === selectedTheme ? "font-bold" : ""
						}
					>
						{theme}
					</button>
				</li>
			))}
		</ul>
	);
};

export default ThemeOptions;
