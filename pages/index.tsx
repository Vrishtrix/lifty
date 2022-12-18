import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

//@ts-ignore
import TOPOLOGY from 'vanta/dist/vanta.topology.min';

const Home = () => {
	const [vantaEffect, setVantaEffect] = useState(null);
	const backgroundRef = useRef(null);

	useEffect(() => {
		const p5 = require('p5');

		setVantaEffect(
			TOPOLOGY({
				el: backgroundRef.current,
				p5: p5,
				backgroundColor: 0x2a2a2a,
				color: 0x6e6e6e,
			})
		);
	}, []);

	return (
		<div
			className="min-h:100vh min-w:100vw flex ai:center jc:center flex:col gap:20"
			ref={backgroundRef}
		>
			<h1 className="font:#fcfafa"> Lifty </h1>
			<p className="font:#fcfafa">
				A private image uploader, for uploading pictures, gifs and more!{' '}
			</p>

			<div className="flex gap:20">
				<button className="py:10 px:20 b:2|solid|#4f6df5 bg:#4f6df5 f:#fcfafa rounded">
					Login with Discord
				</button>

				<Link href="https://discord.gg/BWQ76cVz">
					<button className="py:10 px:20 b:2|solid|#fcfafa f:#fcfafa f:#2a2a2a:hover bg:#fcfafa:hover rounded">
						Discord Server
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
