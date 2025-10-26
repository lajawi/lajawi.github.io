import { ImageResponse } from "next/og";

const colors = {
	yellow: "#ffba0c",
	blue: "#0097e0",
	foreground: "#ededed",
	background: "#0a0a0a",
	line: "#464646",
};

export const dynamic = "force-static";

export const size = {
	width: 1200,
	height: 630,
};

export default async function Image() {
	return new ImageResponse((
		<div
			style={{
				display: 'flex',
				width: size.width,
				height: size.height,
				backgroundColor: colors.background
			}}
		>

			<p
				style={{
					fontFamily: "monospace",
					position: "absolute",
					transform: `translate(${size.width / 5}px, ${size.height / 1.9}px)`,
					color: colors.line,
					fontSize: "8rem",
					textAlign: "end",
				}}
			>
				{(new Date(Date.now())).getUTCFullYear()}
			</p>

			<p
				style={{
					position: "absolute",
					color: colors.foreground,
					fontSize: "4rem",
					transform: `translate(${size.width / 5.5}px, ${size.height / 3.5}px)`,
				}}
			>
				Laurin&apos;s
			</p>

			<p
				style={{
					position: "absolute",
					color: colors.foreground,
					fontSize: "4rem",
					transform: `translate(${size.width / 1.55}px, ${size.height / 3.3}px)`,
				}}
			>
				Timeline
			</p>

			<svg
				width={"100%"}
				height={"100%"}
				viewBox={`0 0 ${size.width} ${size.height}`}
			>
				<line
					x1={size.width / 2 - 50}
					x2={size.width / 2 + 50}
					y1={size.height / 1.3}
					y2={size.height / 1.3}

					strokeWidth={7}
					stroke={colors.line}
					strokeLinecap="round"
				/>

				<line
					x1={size.width / 2}
					x2={size.width / 2}
					y1={size.height / 3}
					y2={size.height}

					strokeWidth={25}
					stroke={colors.yellow}
					strokeLinecap="round"
				/>
				<line
					x1={size.width / 2 + 50}
					x2={size.width / 2 + 50}
					y1={size.height / 1.2}
					y2={size.height / 1.5}

					strokeWidth={25}
					stroke={colors.blue}
					strokeLinecap="round"
				/>

				<path
					d={`
						M ${size.width / 2 + 75} ${size.height / 1.5 - 25}
						l 100 -100
						h 250
					`}

					strokeWidth={7}
					stroke={colors.blue}
					strokeLinecap="round"
					strokeLinejoin="round"
					fill="none"
				/>
				<path
					d={`
						M ${size.width / 2 - 25} ${size.height / 3 - 25}
						l -100 100
						h -250
					`}

					strokeWidth={7}
					stroke={colors.yellow}
					strokeLinecap="round"
					strokeLinejoin="round"
					fill="none"
				/>
			</svg>
		</div>
	), {
		...size,
	});
}
