import './App.css';
import './bootstrap.css';
import Typing from 'react-typing-animation';
import myPic from './mypic.png';
import GitHub from './imgs/github.svg';
import Linkedin from './imgs/linkedin.svg';
import Instagram from './imgs/instagram.svg';
import Gmail from './imgs/gmail.svg';
import RightArrow from './imgs/rightarrow.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [ gitRepo, setgitRepo ] = useState([]);
	useEffect(() => {
		document.getElementById('androidslider').scrollLeft = 0;

		axios
			.get('https://api.github.com/users/sayyedrizwan/repos?sort=created_at&order=asc')
			.then((res) => {
				setgitRepo(res.data);

				var opensorce = document.getElementById('opensourcerepo');

				var gitreparrow = document.getElementById('gitreparrow');
				opensorce.scrollLeft = 0;

				if (opensorce.scrollLeft > 0) {
					gitreparrow.style.display = 'block';
				}

				if (gitRepo.length > 0) {
					opensorce.scrollLeft = 0;
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="App">
			<div className="topheader">
				<div className="container-fluid desktopview">
					<div className="row">
						<div className="col-sm-8">
							<center>
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<h1 className="maintoptxt">Hey, I'm Rizwan Sayyed</h1>
								<h1 className="maintoptxt" id="softtext" style={{ fontSize: '3.8vw' }}>
									<Typing speed={90}>
										<span>A Software Engineer;</span>
									</Typing>
								</h1>
							</center>
						</div>

						<div className="col-sm-4">
							<center>
								<br />
								<br />
								<br />
								<img
									src={myPic}
									className="topsTitleImg shadow"
									alt="Rizwan Sayyed"
									style={{ width: '45vh', marginTop: '18px', borderRadius: '10px' }}
								/>
							</center>
						</div>
					</div>
				</div>

				<div className="icondiv animsBottom">
					<div className="profilediv shadow">
						<img src={GitHub} className="iconSize" alt="GitHub" />
					</div>
					<div className="profilediv shadow">
						<img src={Linkedin} className="iconSize one" alt="Linkedin" />
					</div>
					<div className="profilediv shadow">
						<img src={Instagram} className="iconSize" alt="Instagram" />
					</div>
					<CopyToClipboard text="sayyedrizwanahmed@gmail.com">
						<div className="profilediv shadow" onClick={(e) => copiedToast(e)}>
							<img src={Gmail} className="iconSize" alt="Gmail" />
						</div>
					</CopyToClipboard>
				</div>
			</div>
			<br />

			<div>
				<center>
					<h3 className="mainText">ABOUT ME</h3>
					<p className="submainsmallText">I'm more of a love to create something new.</p>
				</center>
			</div>
			<br />
			{gitRepo.length > 0 ? (
				<div style={{ position: 'relative' }}>
					<h3 className="mainText" style={{ margin: '15px' }}>
						Open Source Project
					</h3>
					<div
						className="shadow"
						style={{
							position: 'absolute',
							right: '5px',
							zIndex: '10',
							top: '32%',
							backgroundColor: 'black',
							borderRadius: '50%',
							cursor: 'pointer'
						}}
						onClick={(e) => sliderAppItem(e, 'gitRepo')}
					>
						<img src={RightArrow} alt="arrow" style={{ width: '25px', margin: '10px' }} />
					</div>

					<div
						id="gitreparrow"
						className="shadow"
						style={{
							position: 'absolute',
							left: '5px',
							zIndex: '10',
							display: 'none',
							top: '32%',
							backgroundColor: 'black',
							borderRadius: '50%',
							cursor: 'pointer'
						}}
						onClick={(e) => sliderAppItemLeft(e, 'gitRepo')}
					>
						<img src={RightArrow} alt="arrow" style={{ width: '25px', margin: '10px', rotate: '180deg' }} />
					</div>
					<div className="horizantal_slider animsBottom" id="opensourcerepo">
						<div className="slider_container">
							{gitRepo.map((repo) => (
								<div className="slideritem" style={{ marginLeft: '62px' }}>
									<div className="githubRepoCard">
										<h6
											className="aboutText"
											style={{ cursor: 'pointer', color: 'blue' }}
											onClick={(e) => appredirect(e, repo.html_url)}
										>
											<strong>{repo.name}</strong>
										</h6>
										<p
											className="aboutText"
											style={{
												fontSize: '14px'
											}}
										>
											{repo.description !== null ? repo.description.length > 81 ? (
												repo.description.substring(0, 81) + '....'
											) : (
												repo.description
											) : (
												repo.name
											)}
										</p>

										<p
											className="aboutText"
											style={{
												color:
													repo.language === 'Java'
														? '#b07219'
														: repo.language === 'CSS'
															? '#563d7c'
															: repo.language === 'Kotlin'
																? '#F18E33'
																: repo.language === 'JavaScript'
																	? 'red'
																	: repo.language === 'Python' ? '#3572A5' : 'black',
												fontSize: '14px'
											}}
										>
											{repo.language !== null ? repo.language : 'GitHub'}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			) : null}

			<div style={{ position: 'relative' }}>
				<h3 className="mainText" style={{ margin: '15px' }}>
					Experience
				</h3>
				<h5 className="submainText" style={{ marginLeft: '15px', transform: 'translate(-0px, -6px)' }}>
					Android Development
				</h5>
				<div
					className="shadow"
					style={{
						position: 'absolute',
						right: '5px',
						zIndex: '10',
						top: '45%',
						backgroundColor: 'black',
						borderRadius: '50%',
						cursor: 'pointer'
					}}
					onClick={(e) => sliderAppItem(e, 'androidrepos')}
				>
					<img src={RightArrow} alt="arrow" style={{ width: '25px', margin: '10px' }} />
				</div>
				<div className="horizantal_slider animsBottom" id="androidslider">
					<div className="slider_container">
						<div className="slideritem itemtrans" style={{ marginLeft: '42px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="https://thewallpo.com/static/media/logonew.ed8abe51.png"
										style={{ width: '80px', alignItems: 'center' }}
										alt="Wallpo"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											Wallpo is a wallpaper <br /> social networking app. <br />
											<br />Similar: Instagram, <br />Zedge. <br />
										</p>

										<br />
										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://play.google.com/store/apps/details?id=com.wallpo.android'
												)}
										>
											View on Play Store
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; Wallpo (Java)
							</h6>
						</div>

						<div className="slideritem" style={{ marginLeft: '52px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="https://thewallpo.com/static/media/wallpoads.7ba7a8c9.png"
										style={{ width: '80px', alignItems: 'center' }}
										alt="Wallpo Ads"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											Wallpo Ads is a Ad <br /> manager console <br />of wallpo. <br />
											<br />Similar: Instagram, <br />Zedge. <br />
										</p>

										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://play.google.com/store/apps/details?id=com.wallpo.adsconsole'
												)}
										>
											View on Play Store
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; Wallpo Ads (Java)
							</h6>
						</div>

						<div className="slideritem" style={{ marginLeft: '52px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="https://play-lh.googleusercontent.com/qXkLsvup_oBE1D4RmJw5PwO3OicYBLybQaJcqQl-wv1QWtuYAb_NNNjIV-2mStxgseSz=s180"
										style={{ width: '80px', alignItems: 'center' }}
										alt="Digital Tag"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											Digital Tag is a find<br />my phone app.<br />
											<br />Similar: Google Find <br />my phone, <br />Apple FMP. <br />
										</p>

										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://play.google.com/store/apps/details?id=com.digitaltag.tag8.digitaltag'
												)}
										>
											View on Play Store
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; Digital Tag (Java)
							</h6>
						</div>

						<div className="slideritem" style={{ marginLeft: '52px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="https://play-lh.googleusercontent.com/6OMqLuqEuuf5nSmrK2olKQivLCZj1PF4dJ5UAKESnHApWR9S-aZJKQFNWvdqtcjng9JH=s180"
										style={{ width: '80px', alignItems: 'center', borderRadius: '7px' }}
										alt="Wallpo Ads"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											Tag8 Tracker is a BLE<br />connector app.<br />
											<br />Similar: Tile. <br />
											<br />
										</p>

										<br />
										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://play.google.com/store/apps/details?id=com.digitaltag.tag8.tracker'
												)}
										>
											View on Play Store
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; Tag8 Tracker (Kotlin)
							</h6>
						</div>
						<div className="slideritem" style={{ marginLeft: '52px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="https://play-lh.googleusercontent.com/xfTKZKzXR8B-IZwGbGZXlH-hdiEjZ0BnIIuZ3o3gdNw5amfV7ccdfdevy9aWenbiVQ=s180"
										style={{ width: '80px', alignItems: 'center', borderRadius: '7px' }}
										alt="Toofan Khabre"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											Toofan Khabre is a <br />news app.<br />
											<br />Similar: USA TODAY, <br /> The New York Times.
											<br />
										</p>

										<br />
										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://play.google.com/store/apps/details?id=com.toofankhabre.android'
												)}
										>
											View on Play Store
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; Toofan Khabre (Java)
							</h6>
						</div>

						<div className="slideritem" style={{ marginLeft: '52px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="https://play-lh.googleusercontent.com/z5CFTc9OvU9ic6-mEI0XT2bUyqac7FkZQfIsyqkLnHNPOPY2oB57i6Fkabb9prWfp3Q=s180"
										style={{ width: '80px', alignItems: 'center', borderRadius: '7px' }}
										alt="Fashions Mega"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											Fashions Mega <br />Business is a <br />online business app.<br />
											<br />Similar: Amazon Seller, <br /> AmazonDistribution.
											<br />
										</p>

										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://play.google.com/store/apps/details?id=com.fashionsmegabusiness.android'
												)}
										>
											View on Play Store
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; FashionsMega Business (Java)
							</h6>
						</div>
						<div className="slideritem" style={{ marginLeft: '52px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="https://play-lh.googleusercontent.com/F7bPJ8Py8SDaZ4pQ9xEwaTLQYjRJWoWd4wB-npUEo2QQgrw308PId_EKqR1PMACXd6Cz=s180"
										style={{ width: '80px', alignItems: 'center', borderRadius: '7px' }}
										alt="Fashions Mega"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											Fashions Mega is a <br />e-commerce app.<br />
											<br />Similar: Amazon, <br /> Flipkart.
											<br />
										</p>

										<br />
										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://play.google.com/store/apps/details?id=com.fashionsmega.android'
												)}
										>
											View on Play Store
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; Fashions Mega (Java)
							</h6>
						</div>
						<div className="slideritem invisible" style={{ marginLeft: '52px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="https://play-lh.googleusercontent.com/z5CFTc9OvU9ic6-mEI0XT2bUyqac7FkZQfIsyqkLnHNPOPY2oB57i6Fkabb9prWfp3Q=s180"
										style={{ width: '80px', alignItems: 'center', borderRadius: '7px' }}
										alt="Fashions Mega"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											Fashions Mega <br />Business is a <br />online business app.<br />
											<br />Similar: Amazon Seller, <br /> AmazonDistribution.
											<br />
										</p>

										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://play.google.com/store/apps/details?id=com.fashionsmegabusiness.android'
												)}
										>
											View on Play Store
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; FashionsMega Business (Java)
							</h6>
						</div>
					</div>
				</div>

				<br />
				<br />
			</div>

			<div>
				<h5 className="submainText" style={{ marginLeft: '15px', transform: 'translate(-0px, -6px)' }}>
					Web Development
				</h5>

				<div className="horizantal_slider animsBottom" id="androidslider">
					<div className="slider_container">
					<div className="slideritem itemtrans" style={{ marginLeft: '42px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="https://thewallpo.com/static/media/logonew.ed8abe51.png"
										style={{ width: '80px', alignItems: 'center' }}
										alt="Wallpo"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											RizwanSayyed <br /> social networking web <br /> app. <br />
											<br />Similar: Instagram, <br />facebook. <br />
										</p>

										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://thewallpo.com'
												)}
										>
											View Website
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; Wallpo Web <br /> &nbsp; (ReactJS, NodeJS)
							</h6>
						</div>

						<div className="slideritem itemtrans" style={{ marginLeft: '42px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="https://thewallpo.com/static/media/logonew.ed8abe51.png"
										style={{ width: '80px', alignItems: 'center' }}
										alt="Wallpo"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											Wallpo is a wallpaper <br /> social networking web <br /> app. <br />
											<br />Similar: Instagram, <br />facebook. <br />
										</p>

										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://thewallpo.com'
												)}
										>
											View Website
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; Wallpo Web <br /> &nbsp; (ReactJS, NodeJS)
							</h6>
						</div>

						<div className="slideritem itemtrans" style={{ marginLeft: '42px' }}>
							<div className="androiddev">
								<center>
									<br />
									<br />
									<br />
									<img
										src="data:image/png;base64,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"
										style={{ width: '140px', alignItems: 'center', borderRadius: '5px' }}
										alt="Toofan Khabre"
									/>
									<br />
									<div className="showData">
										<br />
										<p>
											Wallpo is a wallpaper <br /> social networking app. <br />
											<br />Similar: Instagram, <br />Zedge. <br />
										</p>

										<br />
										<br />
										<button
											type="button"
											class="btn btn-danger"
											onClick={(e) =>
												appredirect(
													e,
													'https://play.google.com/store/apps/details?id=com.wallpo.android'
												)}
										>
											View Website
										</button>
										<br />
									</div>
								</center>
							</div>

							<h6 className="submainText" style={{ marginTop: '5px' }}>
								&nbsp; Wallpo Web <br /> &nbsp; (ReactJS, NodeJS)
							</h6>
						</div>
					</div>
				</div>

				<br />
				<br />
				<br />
				<br />
				<br />
			</div>

			<div id="snackbar"> Email Address copied successfully. 😊</div>
		</div>
	);
}

function copiedToast(e) {
	e.preventDefault();
	var x = document.getElementById('snackbar');
	x.className = 'show';
	setTimeout(function() {
		x.className = x.className.replace('show', '');
	}, 4000);
}

function sliderAppItem(e, type) {
	e.preventDefault();
	if (type === 'gitRepo') {
		document.getElementById('opensourcerepo').scrollLeft += 250;
		var gitreparrow = document.getElementById('gitreparrow');
		gitreparrow.style.display = 'block';
		gitreparrow.style.transition = 'all 2s';
	} else if (type === 'androidrepos') {
		document.getElementById('androidslider').scrollLeft += 150;
	}
}

function sliderAppItemLeft(e, type) {
	e.preventDefault();
	if (type === 'gitRepo') {
		document.getElementById('opensourcerepo').scrollLeft -= 250;

		var gitreparrow = document.getElementById('gitreparrow');
		var opensorce = document.getElementById('opensourcerepo');
		if (opensorce.scrollLeft < 50) {
			gitreparrow.style.transition = 'all 2s';
			gitreparrow.style.display = 'none';
		}
	} else if (type === 'androidrepos') {
		document.getElementById('androidslider').scrollLeft -= 150;
	}
}

function appredirect(e, where) {
	e.preventDefault();
	window.open(where, '_blank');
}

export default App;
