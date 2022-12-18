const Dashboard = () => {
	const files = false;

	return (
		<div className="min-h:100vh min-w:full bg:#2a2a2a flex flex:col gap:100 p:50">
			<div className="flex flex:col gap:40">
				<h1 className="f:#fcfafa"> Welcome, AnalPudding! </h1>

				<div className="grid-cols:4 gap:20">
					<div className="flex ai:center jc:center flex:col b:1|solid|#6e6e6e p:20 gap:20 r:10">
						<p> Files </p>
						<p className="f:#fcfafa">
							You have uploaded <strong>0</strong> files
						</p>
					</div>

					<div className="flex ai:center jc:center flex:col b:1|solid|#6e6e6e p:20 gap:20 r:10">
						<p> Storage used </p>
						<p className="f:#fcfafa">
							<strong>0</strong> MB
						</p>
					</div>

					<div className="flex ai:center jc:center flex:col b:1|solid|#6e6e6e p:20 gap:20 r:10">
						<p> Invites </p>
						<p className="f:#fcfafa">
							<button className="bg:#6e6e6e py:10 px:20 rounded">
								Manage Invites (0)
							</button>
						</p>
					</div>

					<div className="flex ai:center jc:center flex:col b:1|solid|#6e6e6e p:20 gap:20 r:10">
						<p> Upload Key </p>
						<p className="f:#fcfafa">
							<code>greghsrehresh</code>
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex:col gap:40">
				<div className="flex flex:col gap:20">
					<h1 className="f:#fcfafa"> Gallery </h1>
					<p className="f:#fcfafa">
						Here you can view all of your files
					</p>
				</div>

				<div className="flex ai:center jc:center">
					{files && <div> Found files </div>}

					{!files && (
						<p className="f:#6e6e6e">
							You haven&apos;t uploaded any files
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
