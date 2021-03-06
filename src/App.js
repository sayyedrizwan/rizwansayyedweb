import './App.css';
import './bootstrap.css';
import Typing from 'react-typing-animation';
import myPic from './mypic.png';
import GitHub from './imgs/github.svg';
import Linkedin from './imgs/linkedin.svg';
import Instagram from './imgs/instagram.svg';
import Gmail from './imgs/gmail.svg';
import RightArrow from './imgs/rightarrow.svg';
import InstaIcon from './imgs/instagramicons.svg';
import LikeIcon from './imgs/heart.svg';
import CommentIcon from './imgs/commenticon.svg';
import LocationIcon from './imgs/locations.svg';
import InstagramJson from './json/instagram.json';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [ gitRepo, setgitRepo ] = useState([]);
	const [ instaPostsCount, setinstaPostsCount ] = useState('');
	const [ instaPosts, setinstaPosts ] = useState([]);

	useEffect(
		() => {
			document.getElementById('androidslider').scrollLeft = 0;

			document.getElementById('otherdevslider').scrollLeft = 0;
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
			
			axios
				.get('https://www.instagram.com/rizwansayyeddev/?__a=1')
				.then((res) => {
					setinstaPosts(res.data.graphql.user.edge_owner_to_timeline_media.edges);
					setinstaPostsCount(res.data.graphql.user.edge_owner_to_timeline_media.count);

				})
				.catch((err) => {
					console.log(err);
					setinstaPosts(InstagramJson.graphql.user.edge_owner_to_timeline_media.edges);
					setinstaPostsCount(InstagramJson.graphql.user.edge_owner_to_timeline_media.count);
		
				});
		},
		[ gitRepo.length ]
	);
	return (
		<div className="App">
			<div className="desktopview">
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
						<p className="submainsmallText">I love to discover and build something new.</p>
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
							<img
								src={RightArrow}
								alt="arrow"
								style={{ width: '25px', margin: '10px', rotate: '180deg' }}
							/>
						</div>
						<div className="horizantal_slider animsBottom" id="opensourcerepo">
							<div className="slider_container">
								{gitRepo.map((repo) => (
									<div className="slideritem" key={repo.id} style={{ marginLeft: '62px' }}>
										<div className="githubRepoCard" style={{ position: 'relative' }}>
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
											<div style={{ position: 'absolute', right: '9px', bottom: '6px' }}>
												<svg
													style={{ transform: 'translate(-0px, -2px)' }}
													aria-label="star"
													className="octicon octicon-star"
													viewBox="0 0 16 16"
													version="1.1"
													width="16"
													height="16"
													role="img"
												>
													<path
														fillRule="evenodd"
														d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
													/>
												</svg>
												<span className="submainsmallText">{repo.watchers_count}</span>
												<svg
													style={{ marginLeft: '25px', transform: 'translate(-0px, -2px)' }}
													aria-label="fork"
													className="octicon octicon-repo-forked"
													viewBox="0 0 16 16"
													version="1.1"
													width="16"
													height="16"
													role="img"
												>
													<path
														fillRule="evenodd"
														d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
													/>
												</svg>
												<span className="submainsmallText">{repo.forks}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
											alt="Rizwan Sayyed Portfolio"
										/>
										<br />
										<div className="showData">
											<br />
											<p>
												rizwansayyedweb is <br /> &nbsp; a portfolio web app. &nbsp;
											</p>

											<br />
											<br />
											<br />
											<br />
											<br />

											<button
												type="button"
												className="btn btn-danger"
												onClick={(e) =>
													appredirect(e, 'https://sayyedrizwan.github.io/rizwansayyedweb/')}
											>
												This Website
											</button>
											<br />
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; Rizwan Portfolio Web <br /> &nbsp; (ReactJS)
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
												className="btn btn-danger"
												onClick={(e) => appredirect(e, 'https://thewallpo.com')}
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
												&nbsp; &nbsp; Toofan Khabre is a &nbsp;<br /> news website. <br />
												<br />Similar: USA TODAY, <br />The New York Times. <br />
											</p>

											<br />
											<br />
											<button
												type="button"
												className="btn btn-danger"
												onClick={(e) => appredirect(e, 'https://www.toofankhabre.com/')}
											>
												View Website
											</button>
											<br />
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; Toofan Khabre <br /> &nbsp; (PHP)
								</h6>
							</div>

							<div className="slideritem itemtrans" style={{ marginLeft: '42px' }}>
								<div className="androiddev">
									<center>
										<br />
										<br />
										<br />
										<img
											src="https://play-lh.googleusercontent.com/F7bPJ8Py8SDaZ4pQ9xEwaTLQYjRJWoWd4wB-npUEo2QQgrw308PId_EKqR1PMACXd6Cz=s180"
											style={{ width: '80px', alignItems: 'center', borderRadius: '5px' }}
											alt="Toofan Khabre"
										/>
										<br />
										<div className="showData">
											<br />
											<p>
												&nbsp; &nbsp; FashionsMega is a &nbsp;<br /> e-commerce website. <br />
												<br />Similar: Amazon, <br />Flipkart. <br />
											</p>

											<br />
											<br />
											<button
												type="button"
												className="btn btn-danger"
												onClick={(e) =>
													appredirect(e, 'https://dissoluble-cleats.000webhostapp.com/')}
											>
												View Website
											</button>
											<br />
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; Fashions Mega(Closed) <br /> &nbsp; (PHP)
								</h6>
							</div>
						</div>
					</div>

					<br />
					<br />
				</div>

				<div style={{ position: 'relative' }}>
					<h5 className="submainText" style={{ marginLeft: '15px', transform: 'translate(-0px, -6px)' }}>
						Other Development
					</h5>
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
						onClick={(e) => sliderAppItem(e, 'otherdeve')}
					>
						<img src={RightArrow} alt="arrow" style={{ width: '25px', margin: '10px' }} />
					</div>

					<div className="horizantal_slider animsBottom" id="otherdevslider">
						<div className="slider_container">
							<div className="slideritem itemtrans" style={{ marginLeft: '55px' }}>
								<div className="androiddev">
									<center>
										<br />
										<br />
										<br />
										<img
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAz1BMVEX///8lLz7/mQD/lwD/kwD/lQD/kgAAFywNHTAfKjrb3N4iLDwaJjcAFCoGGS2sr7MTITMADifIys3w8fK1t7tyd387Q1Cgo6jBw8b6+vsACiXZ2twAACL29vcpM0Lo6epYXmj/9+u6vMCKjpRKUVxiaHH/nBt7gIeXm6CUl504QE2nqq//0J7/8eD/+vL/1Kb/4L7/pjP/qj9pb3f/smH/ypD/5sn/7Nb/0aAAABxPVWBeZG7/v3X/r0//xIX/u2r/slj/w37/27H/pSj/rkcPWhMOAAAU5ElEQVR4nO1d6ULiSBAWEkJCDgLILTeCopwO6Hqh4Ps/0ybh6q4+gyKOw/dndodcXV1VXfVVdc/Z2QlfhGKmXEjmu93s3eXlZbaVTxYSmWN/U3hk0jetbL2d6/Wqucenbv7LBlErtOo93XZ01/JhWJar607KzWVvyl/zhu9AptnNObY3BsMwfRiG5Q1Cz11ep4uffXCv5LiGGSHhvSMV6abZN9eSW5ynpearmG5u7mhKfnmtsH0JZ8aST7ZjGZRBmIYbjz/d1KTeRXl7vn3hWDTp7N5g2Ua+Qr+9/J++hWP/1xW/8OrC09XtHRdX4jsy7Yv47i3/0e/IXMcdizcKQy/lkuFtrnLejrs0uRNS0o089QktF7vOpl+FoHmBP7l0LvzKR+wdZpV2TV7XxaMwdL3FmGoGMq2IIyOf1Zc5OZqKX+Miijiil+bAG+kjRpG28Rt6lEt6juQwdJPjNCAyXdvl2heEkaKoSCGOXxQv8N+aKMHHpkTLQRa3HytLXNFNSc90xLxoykqoecG1XCps8utqQL8pA8BwQ9iDK7LNFH69ngS/Z3ISNobIyJF02+kL8cNI6JfEg9r4BIrs5o6YGOtO8KW4nUV0MMJaNeRc6xIrBP1TpeC04IPywBmlErzXFnuEbZtV/sJ/hb/AyEEJyRvZChY5z1S0wz54jRJU8wScZHgBPiCbfCRfqGd1/EtdXAcqRuiBGHU5EeVCeWpUBNCSwRLFn6NzitvgC7UC7gACfWRagx9dU3/4jIhMw886dMeP7FxWNGm0wZNAZMS3myxlRHwPn8aXTBO3syvaYm+4up3Sq9VqxEsN/JwKzxv2FZEXouvVx1b+5rxZaJ4n862nnhunzhBc1qE7tXl2Q7oiYtQAIPByMWcI11N/II7Vbp2na5mKh0ym5mXmrXrV0Xdj2UdEpuWkctcFaEG1dEunhJYGCN2KILfTb9hvpQzJA3cVBk7TxiK/SziJht0+pyUZifM7ezPjoUVkuKlqt8DKXZptEBr6XwnUCBiPwXFGBWoQ7HCCuQwwYwv9ESpwxO1xYud0N677o5Zd0VYiMt1U+5q/oNw40DbgK5r4uE2D/TDgtzYDIyKJHUD0bmF58hNQIkcQt1byVdsyUhw1R/Ho6a8Rr7b48vFRJhy3jRtGBUShcXZGARO0tVA5zggI1UE1uAY03BVIyEOx0G1LsBEB8v/FU/WmFFuTgNYBV2kYuTAzigolKgoeyOYogH+/QL84iXs2MyIzmhBIp6VpgRswWzBlAHkX2xmlSccWIM70IDV8eown9EeQIfBc2sFB5GG4dME4IinWc9AFHH2ke826A/g5ByOXcA9gmp/jXj+HcyADGPoAa7BZzghxrwa6DrKX4S6uKFhoX8F5Fd5KengUQSjvAKYQhHc6yxkhdqY3HxE9YupdFY+Lsci+jHs2VzKBPxDAZELDAB/Lmk/0sngNzeBZelfDFQWXPfBsvJD1G1DgeU2S4nDpXgFx62YVGyFL74CF49FG4UeJKAPMHgYyQMsYSoGsQJ6ioXEzi1bDnwsyaKBFRza0M5AGwAgETCg9MkJ1zZ9yJI5k0QO4dgL7BukHVO3vBogOLRDrVQAzWKc9o4aQ0L6eoYEznVar4bQ1KAQAMs+0wtV/vhrQX8PcHE+5TZP2tQidZkYqeMxDp9Xw8BnS4kWQ+BzZGYFUiaAeQS5g08JlJBKyfKNAI046rYaHzxZMriD5pB9VjQCJ70C7qOEzSnWdCEW1+h11RrRMFiyURJoCVJskRL8VIA2LE64Dz1GMR/IRKJ220jJ0iDRaDTgbIr5swvzaau/b2fAFSIpEBEo5FNeJDsgOFjA06qHloPi8kLYImX+/j0XcIXAonItEVMaXfYozQtzZWsnQBYtGq11imkkRIlksMO3HY7VDCUV0FsFDGNIZIZ5nIw/E19CcEZ7JuySpVKbwT4ZdF7QVHAhiEbV4gbCHDGJVG8eLagFJq+GKadUpnwWZ2dW745aAbD4IxCICse4FDJfRdOFi7alQD0fSannsndTICZaC1zDdeO/q66VUrDVvWpf1x3b7sf50l71OFmqIyxWLqIJbGuGMEMJkGwMmUGdE0GpPuCuiLlYtVlOIL6XWJxscMZSv6mbKCdooA/jNoPGU2767LqyEIRYRiPOIEdeRwHHrmhHNIpMWLPughRE+euySvhmUv/aWCYp0V7fp9WnDch071W6d1yREhBMXxJAQk9itTahYS+AG3Bez6JKazWtOMK24fdf8ZFNxMWnS69LIaF0HFmVpIsrgy34Kj4zQAe/SlzyHVsMjLWb7SJorIw+W49T3aAPd4qZKVBJlQBMRYAOA+0WEgTQrljm0GvY4gqHaoSCSUVDnvwvR4oii1o7v10NDFRG+AoFYEDEpJEwuIgoMaLUK72kYyq5EO5ll91h90TwkL/bsw6KLCO/0xJ1REeHp0eUb4fgBT4cHEcyiio8MpfGAhKk7zFoUC1lGbXRfEUGOELV/dHlHGegrJq2GVVVMlz+UvC6hSN7kGOGqkfVQfaYyIsJJJawPCaXTeki0guoKHhyiNSSSKoKoZW0ZIZn2XQhra1ObND4lIpxvx9wHSqehPieDOqMs4wdeRXuLxJ0tMyK3Ks2XXDKe5zfzubrrwbKo+2Y4IsKLANgiBJj9HR4ZtBpeMGBUnXDUWrpEs73hSFIBLVovlOW9IneZbV3nb27yrezlY89JOS5tbw5DRDg5gRDcKJ2Gk/Soy4kjE4wZrag1e4t0q5cS7WkxdansjWjv8kek15Nl3FKLlUQhn21bti4ROp5BGhBxRsgPpoVpBKotKCOEdSKF6fkoX+cEO3+Mqow/Itu5DbvLNNJM+QZnt1giwh0I4oxQOg2vZmds6g14UySFKuIhkW87cFKxx0k0SOQJM3PqfC8G2rAYIsIjYiSKJpj9HRDSG/FeWIVctn8TQS35VGLvsksJtbKoE615oqBKUkQ425zaTH6GYPZ3QKm4nbZgBB2/d52FSjNrMdJP8QavPIyI4sJyuKSI8P0L28ZEjE4DtzQpbCRomkntW9coFu5cQh2CLxMJHe7/kOiylRQR/uitb0GWLYKxRftjtiQT1jTzqfJYLU9L1DlZcYAy2OBlwgo97R48C2KKCEsbth+CuCiSXEQUZpvXYUvjZ1s+khYZAwr2CYKSF7upDAGoNTBFhF9XWssemRMyTu5SaDWszirYaSRGsQuUgs8cnBFdHlJLalpSi86wlr+1M0LlRr4MJTQ3CT2aEIt9qxjnkArgWxrg4eXaKCWI2RWw+V9nnwidRvk01M2tFRpzRYIJlwPsiybafzDAXXMydgaNky0iPKBZOVqETqONF0kF15kGNiESKawE4C5OLgEF+8OlPgE0YbBFVMSZMH+5Ruk0WiqBfL1pBn+D5nr4xpi9Abq5+DkN6GDg7x/bICeVgPh4IpIrlE6jVcPQeDNwzVjTjJAqkgTwwNx+LbgNXCYwK4Ld9Q5b87AZCMaHmA3VSyYgrYbVWEUb/2VxJdkb7gPG1qnwCxovJcAS0CBNy1KZ/R1QQwwuQKVsGl/Uegb6ormnA8CwSEaLYD8YT02xANsvmSE5rE5t/7kEtBraOCm7v04I2ILM1SIgIq5vXyEDkzpewItNgScTtKWRPh15QKuhUQldqHsA9vrzngt9kSM2dmIzIi9WwTyJ54xQOo0eBZbxYjaW7MS/6hwuGNnx1vEmEJHwzA5yzx6fKcVCYxOVL2O7OVpw9ISPKtUeVBEDMGzhuRfY2mUJu97J7ZrcpADTOTuToxcZUaCbsHJYX9XX9VLje5L4pwkQG8FFif4dpVhS4rwBI8bdPCovRjiF8gMWStVGSl/VAlsItRuC6OjmW1qWVizhmjI2B1VURIwbUFfqYlsfBbyOPHIhIkdy/z9/88QltWjLjXlZp9owE2YYme7kxaOK0vU76W69LlzG+dpJnLLEiT0SPXpJEpR6cMB9ohuw1fWRUa/g7Gc/qziW5ZbqUkluF3yRqDBHHpCjMza4F6/irFoL3PuJIkMwWKIB04844G8rX7k8w+7lRf6qRrQvpESCJedMf6K47MpNld0ZwSWUGYcjsQ2aflAGnyraODBTt+u8Ixsz10T/kZgNb5LtOJYF/FftPGujxQPCvVA3C60BA3jhh2XoDUK8d6A+3j+ysZssU2y/UshSuiFK4oSiStYETD2VbSZqmWIlUysnu9UU3rHjEHsJqK3ia5Cxpg+e76Ud2iMIXvCMwrB0u1TNtvLn6UStlqnVEon0TSuXoh2HqUvwK01q85XlOK5R9abE1mEd0+miTcEr8NZ96oh5N1CdUaiznwKZ+kdUxeP+Obm6Y3t/Ug1erujEPkmNeriW787T0Afz3kQfMSdEJfZN+eBTRazTNUQwiS2ZVNRC9cmujnOEhZPIBXvIhDwjgsmDZ2oEcLlUEa27RQYXklx4kxWsUVBaVQcT8CTI/9giKlK8Hb+SQTFNAVXECi34MC+kWcy87AvM7TGFwGNzW1Aox8rxSRfKDaJuB/ZhfGwYbgietyWnp5ax1csM1kHg1HlmAI+ejfg5P+9zKKcZlgTpdSLEybJruNVQG/quSmJ/ZKbQmPJ8p3nGBT/3LZJ7Mhn7XNaARRx+VLFCOUJt+2DCKGVDbi0qWAJNNZ0qXm3apjpOTrQqEGuaI2B+iJDflujey7u8bjQwmngufNEyc8dTVVOPEJpSDwZuSLTBZ2xwPoToFK/0BTiaRYoHKSZzckdSG051P3au/Mjq6LbivRvS2RTrtmHY1LPBIRI5x3Y2sHWh2p3deCHrFvE4LWukj+G6x+1sjAT793J7dbqtXpC9gA2mXoxq21mGUibrj7Ivq6ULG5RlorVK+Xz7jxAQ53Bykbi5THkpAf24P0tPmdef3HadbtXdUtwJ+tG9uL3Uu8v/Rf+uxQZeYvnoDWO3M9PwT8yNlyJ3e//LDThq6fNk/urqKlkoH/f8ls/BG8ZVN9jg62/xvWvdyP2zGyeccMIJJ5xwwgknnHDCCSeccMIJJ5xwwgmh0Z+Nbt/nfwLMn1+Ho/vBsT/p56A/ev2IapqqqrFYTPHh/amqmhZbvi8ax/66o6M//BP1RKMoURoUT1Lj239Zmxq3E188VOnsxKQqt8f+0GNh9KKpAvGshaRNV3cM/imrG0yjmpR8Ahl1gnveVfXj/sjf/X2YxuQUaA3VV5+Z5lvd/N/QpFFHDSEfX0Qz765FcFMsNj325x8ejRd5E9uIaOHft1Y8NTo89hAOjHs1FlJAaxGdjdYyUtTO6NijOCQGWAi0jhODUFENYkeFFiKtRHR2vwkQFHUyO/I4DoiRthKNJxR/ze+MP96eX6e3w+FwsRgOp/OXcZQMldS11vSjGw1UtJdfu7g1ol6mEet8vN8u7vsNWuA8uJ92wHqnbnRmMNk6ekV7+7VCur8Xr9ujKCYjrb/95Y+2/duY+nuFJIEG7rIQob7uZPSPC+kWWfeUDmqQQ9QKY9pbn/mMX44+El0qH9hPM1zDtJdfvLrx0EC8UewZ/DbGQitFHf/qOImFQWcnIpUIp//gGYyiLh/+PVZpgGiRRvrkW5DEKGr09d9IcHdooOOn/D5TQB6jeJ77V9vbbDHDlQBx18oL7Q4kikRU6faXqlJj6ofcGsa/jnYCYNEfryTnpKjK/BdGSrM/a34NkxESF2msRZ0wtkCg2i8rCAwexto2NY0iQ5vvRq+y76ZST4qq/fk1Xmk2V1Fj0RBHslvQYnPOE4YxKvsU8xa4XxB196dRnF1Dtaixc0UqVyMaH3SSV4mpk+Ff7bsHiw+CFlLfd7+j3lrgWW5ZlQJFVV/+WimN3igVEBXNxN63+qW8iZ7Wn2jwWTspaR9/oZRGc1qFSNHe0It2rkiT8LwPHD7c06W/yuIaC2+Fpw1HiS3Q6+63eoEtc0z0X3h1OUWNTYZ/hffuDz8UxnSrY3wEu6go9s54GsCCFiNhujR+/+Gkyex1rLL96iu4+mVnZ7KzP5gLynNeEhd7+6nK1FjMFY3dAaIuYc6wW/IBm8bFbCysgnvK1Hkf/TDPNJi9LrkdMopKpmDDrYiYyQcVD3xrWyuTqoynox+Sowxm04nCbyBS1A+K6n9sblHG4d7YEFnbVkyxyfG1aXb7EtVY7WcbqNEF5dbGVhf4kTX1tUvJjgFPTFrneXEkXqAxm77FhOLxk3Lopld42NhZWCUKMIxKN+b4jYLq8n34rZ2njfuHeVTcnRd8n/bG0PTl5m51r2V6MJVwSbicouPn4ezgcho0Rrd/lpLiCcoWrPFvCcfY277f8hyy/UTxzU7tvL0fyvAas+HzS2fV1yH5SXQntMJ0Mzx1/yCm8ayF79EJBKV1Xp6nI4miuuSH3I+mzxNFY7cFMwTEbYLd5GeUaCDMt833aGRaC8p3UbHlfPow6tNbM8Rv79+PbqfzsaKG0ZydgKLcLuHZOj9bN4Huj/4znW+T/c6VpKKdztjTq+Fidt8Y+KC+K/ilfz8bLYav849xx1uKAtns9WJPQPx52VCy6ufdQuNZ0jNyv1hZ65UWNEF3luPJ5OPl5eVtBe+/JuNlx1+fgx0Iqzay/d8q0iB/PjYS+pK2z0bI3lzhADDE0P/5mudrEp2c6+QjRi2e7YOHTuj202Mhpn2wV7EdxsF48H6ZT2L09gX2dnB4qZpcDfA+UCIl9rWkRf9VPuQ+DjwXNJUMNJ4DVxQuwZfCYsLhY44MRdLCAgQ9x4oMXx0e/fcQ+06+D558lrIK5MPfxaCEz+9lMXr52gXu84ip0edw0c17zJPqITnmxgObIP52ePP1JzS5t9DU5aHp5f7t+Ce4JUXV3vYiP/vfwnH1byeS+wUPJJ6YGvsj7aCPhf7Di4A0Ppx8tM78p5DnAgxGz51vdky++iynf9f++v7Dm79f5zvk5LNR0eMXFfbC/e1bVDuo0flknfoDai6fwv1wvgzJDMpLR4t+/JjK3efQGE0/vFhlTyaMJh5Pd5Tl87D/K8SzRX80fV5q2h50KqY5/okesY/XxS+TDgJPUPNJcJBJGBJRCXyOpkUn81fYSP5LMbgfDV/nL5NlQEUHx77EFALrrb3eutiZvL0PF4cvyP1EDBr92WJ4e/v6PH/7mIyXy84ay+XE39x76wmm39ivWHLC9+F/8WW//HTAV+EAAAAASUVORK5CYII="
											style={{ width: '110px', alignItems: 'center', borderRadius: '8px' }}
											alt="MySQL"
										/>
										<br />
										<div className="showData">
											<br />
											<p>
												Setup mySQL DB, <br />MongoDB, npm, nginx<br /> &nbsp;pm2, etc.
												<br /> So, User can enjoy<br /> Wallpo platform <br />services.
											</p>
											<br />
											&nbsp;&nbsp;
											<br />
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; CentOS server (Wallpo)
								</h6>
							</div>

							<div className="slideritem itemtrans" style={{ marginLeft: '55px' }}>
								<div className="androiddev">
									<center>
										<br />
										<br />
										<br />
										<img
											src="data:image/png;base64,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"
											style={{ width: '110px', alignItems: 'center', borderRadius: '2px' }}
											alt="MySQL"
										/>
										<br />
										<div className="showData">
											<br />
											<p>
												Managing more than <br />20K+ users data<br /> &nbsp;on Wallpo Web and
												&nbsp;&nbsp;<br /> app
											</p>
											<br />
											<br />
											<br />
											&nbsp;&nbsp;
											<br />
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; MySQL (Wallpo)
								</h6>
							</div>

							<div className="slideritem itemtrans" style={{ marginLeft: '55px' }}>
								<div className="androiddev">
									<center>
										<br />
										<br />
										<br />
										<img
											src="data:image/png;base64,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"
											style={{ width: '110px', alignItems: 'center', borderRadius: '8px' }}
											alt="Mongodb"
										/>
										<br />
										<div className="showData">
											<br />
											<p>
												Managing and data <br /> mining the users data<br /> &nbsp;on Wallpo Web
												and &nbsp;&nbsp;<br /> app
											</p>
											<br />
											<br />
											<br />
											&nbsp;&nbsp;
											<br />
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; Mongodb (Wallpo)
								</h6>
							</div>

							<div className="slideritem itemtrans" style={{ marginLeft: '55px' }}>
								<div className="androiddev">
									<center>
										<br />
										<br />
										<br />
										<img
											src="data:image/png;base64,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"
											style={{ width: '130px', alignItems: 'center', borderRadius: '5px' }}
											alt="Shared Hosting"
										/>
										<br />
										<div className="showData">
											<br />
											<p>
												Managing share <br />hosting and more than <br />30K+ users data<br />{' '}
												and User experience<br /> &nbsp;on only ToofanKhabre <br /> Web.
											</p>
											<br />
											&nbsp;&nbsp;
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; Shared Hosting (Toofan Khabre)
								</h6>
							</div>

							<div className="slideritem itemtrans" style={{ marginLeft: '50px' }}>
								<div className="androiddev">
									<center>
										<br />
										<br />
										<br />
										<img
											src="data:image/png;base64,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"
											style={{ width: '110px', alignItems: 'center', borderRadius: '5px' }}
											alt="Shared Hosting"
										/>
										<br />
										<div className="showData">
											<br />
											<p>
												Setup mail server with<br />zoho for better<br /> mail delivery and{' '}
												<br /> experience
											</p>
											<br />
											<br />
											<br />
											&nbsp;&nbsp;
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; Mail Server (Multiple)
								</h6>
							</div>

							<div className="slideritem itemtrans" style={{ marginLeft: '50px' }}>
								<div className="androiddev">
									<center>
										<br />
										<br />
										<br />
										<img
											src="data:image/png;base64,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"
											style={{ width: '110px', alignItems: 'center', borderRadius: '5px' }}
											alt="Google Ads"
										/>
										<br />
										<div className="showData">
											<br />
											<p>
												&nbsp;&nbsp;Run and worked on &nbsp;<br />more than ₹35000 <br />worth
												campaigns for <br /> Web and App traffic.
											</p>
											<br />
											<br />
											<br />
											&nbsp;&nbsp;
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; Google Ads
								</h6>
							</div>

							<div className="slideritem itemtrans" style={{ marginLeft: '50px' }}>
								<div className="androiddev">
									<center>
										<br />
										<br />
										<br />
										<img
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAwFBMVEUAHjYwqP////8xq/8AABUyrv8ADiIxqv8lhMoAFSoyr/8AGzIbZ58AGjEAFy0aYpgACR0AAB0AEiYAACcABhoACSoAFjEAACEuofUjgMQAEi8AACQAGTIAACgWVoYFKESRl54AABpqc340QlNIVGKhp63Z3N8njNUecK0OP2UrmekKNFX09fYAABB+ho8XWYoSS3aytrvEx8vf4uQTKj+3u8BLV2UjNEhcZnJ6gosNO18hd7c8SVgSSHIHK0kAAAcbq2RqAAAKOElEQVR4nO2dC3eiOBSAeQVERBBR8TFQrYqio7a2dVer+///1Qa0FSUgiuF1+M6ZndlzipPPG5Kb5MIQ1A3Gby+Dr80HkUo2w8HibTy/oUAE+r18t2rdRqfZS1rGj16nUW/1N4v3xxzXi16t3kxaIhS9Rqs78Nf0c3z/ZhqpjR6KTu1jdJfj56aWjQi66XUbaEuU4/i1lqkQ/tLrNj/DOS6Y7MXwh17/yzvKehzHxJ+kGxqJTu3tluOIyWY3ddEfBDsOakm38An8eZ0HOA7rSbfvKXR6a1/H10bSrXsSzfraxzE3inB8dUu6HIf5UYSSzTnCcdBNul1PpbPxOo7yMKK6afxz7TjuJ92mp1MbXTkSmZ/6vfxdXzgu8jExXtJ8dTvmsKfatEYux+/srjQCac1/Hd/zGUY4ti5+HTc5HHCO9Ocnx/e8TY1nnEDajsOc3o023aPjmkm6IRjpvjmOL3nKxa+x50ginynOmf4aOo7zO+LY1EfQ8SWPadyZ5hA65nlUtWlBx3wtjb20xkTOb0f7hiQ+8x7Hzr9ErmdHm94XMegk3QjcfBBfOR9WbfK7rjqT0oqNgoKCgoKCgoKCgoKCgoJsIDiIolg9wruoVkUh6fZFQxFtA8M4HGaz7XS/X+m6vlxKkIpUgUjSUp/OCEVllWpGVWWLIzkagHIZXEL/YP9Pmdas0kQ/MGw16QY/AMNxZBg4zrbV2rooZ06TCWX4a0oD2tR5Nlud9j5HxxOQO0POkuX9jk402wabdMvD84gjhKYnsph028PyoCNJAm2blVA+7Ajvy0pGamQed4ShNLMxwEZxJGlLzMJNGckRSgoZiGQ0RyiZgYEnoiNJm2rSCjeJ6kiCSeojGdmRLE/TnqRHd+Q0OWmJG0R3hL1VSdoiGKQjZy+LbeylsvOfoEUmxxHpnkBQjpy5384MgxAEUYCT/GEv7SwA/DXplAcS5UiXVFE4T+6CyCsqsTRp2jeQWXT0TgcCrxo7v1gCiU+g6aEJ6wgR5JmFDiVnpToRuMORIETWBOhAGjdGHdjdWVllVFZRWPibLLMKH9tW5l2O8MdNZCQDO6uoyPxU2pUsjeRoOERzpGaZ7Z20MhRZiSN/uNPR2Y+96wpe3U4sGs4/HPezzWn/yd64LZPWblXFv5d5r6M4Q/VWTkPfkAIrVjTgO7tCVcCVVgzmTnuvIyG3Ub21jEwDFGMXnD44okA74JW821GYlRGXgJW3x4nyhPObUi8vxjz13O1IMKg7kvY2U5lZ6EHYe3ElbY7KBBEcened6sh6QPaXdsfqChEeun11iVpBdemsOAoHhCNnXl4i36GYQkeCQPRBzrxYKCv6HYppdBQQl1w6irNQ42maHW/GEZ0MZchRMG7dj0ol5KSRXkdUNuceVwUi5Pl7eh2rOsrRNT8iJ9BsOaJzAFczGdI3jBwywulzROZyQP/NV5E5gnPADgCpwR89bvS5PiR1jj45+fb3kE5BLkyA1l7OBF5ReNHYrqSdSYLfNVfqHNUSSoE+X6FqqDhXGPZnb0MQq7wiqzOpdFpaps2xOkWuka3f6VEgEN8BkLxraIFn2emOhJl7yhxFAhUl97AqIr4ETvvP5+MUdWmBcqocRRG9++haIqOmFs+qxAWv6jvj2VaX3OWoHDSfDdZzWQAvIRx3gRMu7l32OxyrjOSzOUOXztkqL3m/Bt++Gg9hHUWFWfnuXbh3c1COcMxJ8owyhKMg8qy8nWi+exec5ipGqi5R3wRYJlivhHb8T2ZPyCpD7CulgE3Sq301cY+MNmjziR1uIc8fNcs0S+YRi7x5xqq5W49cetlfHFlRErJEnyO7CbA7hWh5Mb3JyBnUqXutVBMpPoteD0Cbl7cai0z2Tpa7gxr/UWVkR467OpdDri9/fpgum0uRjbnILrJjWb8ODBvYvznAtadMrCU9UR3BxJNtK7sb+wB02VrKMXbZiI6g5J33BOPmOMUBTWJjs4zmCEqoc8cw+3K2pRpTj43kCNro7EUNs78KLVdqLFNJBEeu7L0Xj8DeGmb3kQOmEUda8LgjTa58E21+H+5gjqYrMYTyUUeubBoBg4ayCnn6CEz8JemPOcJ7SQ8OALu6WQhwhNYM3JIPPYtkj/y3xkR+5rNn4Pk07JJ3O3L2DB5mbhP5djlUKDkNc8XVXY72Xrc1OYSd19S9FuoA6zqrT8bx+IQnsNpLQ+XDf+lVZeJbEOoGVLBOIej14+kR3Z+nduGiubSTplWZvbdXsUYbhLCkb9UURgK5D1CqGsZstt1Op9vtdmaIqmrXKT40MgjyrHTbMmgDNjro/Rz59CS9TdSnjQT5sONuzZYA5zNNj9R13IvAKpIVtOmF+VgnDkfC3vGfBWxeYq5kjskRBlNRV6b/ncllvK/+UFXh+ONXdr/Hl+zE6WiXe858KtIRhZNPI15H2GX/LpGDD87nYOJ2hGkB8rCAbmfJUVBuDB8ysvgFYxbwdEdhtiOCQyIQYQpgn8jTHflK2T69CYrlf0jHDPVVXqLt0xvCf8MfebKVqTHHOUfmaK49/evzEI6Kuh9xPhuAx9H+EKDt9lXZ84IokUGe+YBphnKAcz2A/RCONVkdGHthxjtvAlNYZlpCl9Nh3DPH6HjyBCRcYFeW+krXpYmpoVPWq3r054LZ0Wn/77bCZbmjG6yP6sTgGAYa5/FOOhyT2OuI2xFgfXIuFY4gsJ4uMmlwvCzweT5pcHQVamMhBY5lHfNBa/KOZew1kUk7cmCJvewzYUea3ON/jdLTHat3PPp448D9WTx/P0cJ8bz80RBoOu5XAzgwnJeI+3KsMdHKNzXpsiYp8ZRasSXE369Hy5AFhZnuNOf1FT4RPL7eIbZiMpbx8IQaL1FRD8u2RZad9dTJ9fieDugez2s6YkDgFVk56JVdybI00n57tP2+Ffs8WozndStxIVSdF+eosHM4vx4+jy4oKCgoKCgoKCgoKCgoKCgoKCgowM9H0g2IgU0v6Rbg56uZdAvwM+gk3QLcfBAvjaTbgJneF/HZTboRmOn8S4xrSTcCM/URQeU9jq0xQQ1zPrC2KIJ6qSfdCqw0h9Ax5zdkfQQdKSLXmU5/bTvmeoZsvlK24zoj/07qQ3TfHMdcj6xd6uj4nt9Rp7E4OVL5XV/15z+O7/2k24IJJ4xHR+o7p3dka352HOczkK0RdXakFn+Sbg8G7LnR5ZjLZOfv+tIxh721NqIuHalR3ibJxj/UtSM1yNcaq7OhvI7UME+5ea85RzlSr/mR7NXXFNIxP5JNt+KlIzXMxz3Z6bkVrxypQR5G1z+vcyrAkRoxmU8G+oMrp2tHakxkO63r1N6ulTyOMHdlsrsK6fW/5h4hhCM1fq1ls8P2us1PhA/KkaI+N7XsxbLXbYyQNmhHinr/ZhqZCman9oE29HekqPWiV6tnI5q9Rqs7ePc18XeEjF++W7Vuo9NMbUR7nUa91d8s/AVvOTqeby+Dr01Kqz82w8HibewdSS/5H6/swUlVPvCxAAAAAElFTkSuQmCC"
											style={{ width: '110px', alignItems: 'center', borderRadius: '5px' }}
											alt="Photoshop"
										/>
										<br />
										<div className="showData">
											<br />
											<p>
												Designed logo's <br /> banners and cover <br /> designs using <br />Photoshop,
												Adobe XD,<br /> Premiere pro.
											</p>
											<br />
											<br />
											&nbsp;&nbsp;
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; Photoshop
								</h6>
							</div>

							<div className="slideritem itemtrans" style={{ marginLeft: '50px', visibility: 'hidden' }}>
								<div className="androiddev">
									<center>
										<br />
										<br />
										<br />
										<img
											src="data:image/png;base64,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"
											style={{ width: '110px', alignItems: 'center', borderRadius: '5px' }}
											alt="Photoshop"
										/>
										<br />
										<div className="showData">
											<br />
											<p>
												Designed logo's <br /> banners and cover <br /> designs using <br />Photoshop,
												Adobe XD,<br /> Premiere pro.
											</p>
											<br />
											<br />
											&nbsp;&nbsp;
										</div>
									</center>
								</div>

								<h6 className="submainText" style={{ marginTop: '5px' }}>
									&nbsp; Photoshop
								</h6>
							</div>
						</div>
					</div>

					<br />
					<br />
				</div>

				<br />
				<br />
				<center>
					<div className="cardInstagram" style={{ position: 'relative' }}>
						<div className="containerInstagram">
							<div style={{ position: 'absolute', top: '0px', left: '5px' }}>
								<img src={InstaIcon} alt="insgtarmicon" style={{ width: '145px' }} />
								<span className="mainText"> Instagram Posts</span>
							</div>
							<div style={{ position: 'absolute', top: '0px', right: '12px' }}>
								<br />
								<span className="mainText"> Posts: {instaPostsCount}</span>
							</div>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />

							<div className="gridcards">
								{instaPosts.map((instagram) => (
									<div
										key={instagram.node.id}
										className="gridcard"
										style={{ position: 'relative' }}
										onClick={(e) =>
											appredirect(e, 'https://www.instagram.com/p/' + instagram.node.shortcode)}
									>
										<div>
											<img
												className="centerCrop"
												src={instagram.node.display_url}
												style={{ height: '340px', width: '350px' }}
												alt={instagram.node.owner.username}
											/>
											{/*<p className="aboutText" style={{ color: 'whitesmoke' }}>
												{ instagram.node.edge_media_to_caption.edges[0].node.text !==
												null ? instagram.node.edge_media_to_caption.edges[0].node.text.length >
												41 ? (
													instagram.node.edge_media_to_caption.edges[0].node.text.substring(
														0,
														40
													) + '...'
												) : (
													instagram.node.edge_media_to_caption.edges[0].node.text
												) : null}
												</p>*/}
											<br />
											<br />

											<p
												className="aboutText"
												style={{
													color: 'whitesmoke',
													position: 'absolute',
													bottom: '4px',
													right: '10px'
												}}
											>
												&nbsp;&nbsp;<img
													src={CommentIcon}
													alt="commenticon"
													style={{ width: '18px' }}
												/>
												&nbsp;{instagram.node.edge_media_to_comment.count}
											</p>
											<p
												className="aboutText"
												style={{
													color: 'whitesmoke',
													position: 'absolute',
													bottom: '4px',
													left: '10px'
												}}
											>
												<img src={LikeIcon} alt="likeicon" style={{ width: '18px' }} />
												&nbsp;{instagram.node.edge_liked_by.count}&nbsp;&nbsp;
											</p>
										</div>
									</div>
								))}
							</div>
							<center>
								<br />
								<div
									className="profilered"
									onClick={(e) => appredirect(e, 'https://www.instagram.com/rizwansayyeddev/')}
								>
									<p>View Instagram Profile</p>
								</div>
							</center>
						</div>
					</div>
				</center>
				<br />
				<br />

				<div id="snackbar"> Email Address copied successfully. 😊</div>

				<div className="footer">
					<br />
					<center style={{ marginTop: '20px' }}>
						<img
							src={LocationIcon}
							alt="gpsicon"
							style={{ width: '21px', transform: 'translate(0px, -4px)', cursor: 'pointer' }}
							onClick={(e) => appredirect(e, 'https://www.google.com/maps/@18.9068624,72.8160861,14z')}
						/>
						Colaba, India
						<p style={{ marginTop: '20px' }}>
							Made by Love with <a href="https://reactjs.org/">ReactJS</a>.{' '}
						</p>
						<p className="mainTextWhite" style={{ marginTop: '40px' }}>
							&#169; {new Date().getFullYear()} Rizwan Sayyed | rizwansayyed.ml
						</p>
					</center>
					<br />
				</div>
			</div>

			{/*------------------------------------Mobile View --- --------------------------------------*/}
			<div className="mobileview">
				<div className="topheader">
					<div className="container-fluid">
						<div className="row">
							<center>
								<br />
								<br />
								<h1 className="maintoptxt" style={{ fontSize: '9.5vw' }}>
									Hey, I'm Rizwan Sayyed
								</h1>
								<h1 className="maintoptxt" id="softtext" style={{ fontSize: '7.5vw' }}>
									<Typing speed={90}>
										<span>A Software Engineer;</span>
									</Typing>
								</h1>
							</center>

							<center>
								<br />
								<img
									src={myPic}
									className="topsTitleImgPhone shadow"
									alt="Rizwan Sayyed"
									style={{ width: '29vh', marginTop: '18px', borderRadius: '10px' }}
								/>

								<br />
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
							</center>
						</div>
					</div>
				</div>
				<div>
					<center>
						<br />
						<h5 className="mainText">ABOUT ME</h5>
						<p className="submainsmallText">I love to discover and build something new.</p>
					</center>
				</div>

				{gitRepo.length > 0 ? (
					<div style={{ position: 'relative', marginTop: '1px' }}>
						<br />
						<h5 className="mainText" style={{ marginTop: '15px' }}>
							Open Source Project
						</h5>

						<div className="horizantal_slider" id="opensourcerepo">
							<div className="slider_container">
								{gitRepo.map((repo) => (
									<div className="slideritem" key={repo.id} style={{ marginLeft: '2px' }}>
										<div className="githubRepoCardMobile" style={{ position: 'relative' }}>
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
												{repo.description !== null ? repo.description.length > 41 ? (
													repo.description.substring(0, 41) + '....'
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
											<div
												style={{
													position: 'absolute',
													right: '9px',
													bottom: '6px'
												}}
											>
												<svg
													style={{ transform: 'translate(-0px, -2px)' }}
													aria-label="star"
													className="octicon octicon-star"
													viewBox="0 0 16 16"
													version="1.1"
													width="16"
													height="16"
													role="img"
												>
													<path
														fillRule="evenodd"
														d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
													/>
												</svg>
												<span className="submainsmallText">{repo.watchers_count}</span>
												<svg
													style={{
														marginLeft: '25px',
														transform: 'translate(-0px, -2px)'
													}}
													aria-label="fork"
													className="octicon octicon-repo-forked"
													viewBox="0 0 16 16"
													version="1.1"
													width="16"
													height="16"
													role="img"
												>
													<path
														fillRule="evenodd"
														d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
													/>
												</svg>
												<span className="submainsmallText">{repo.forks}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				) : null}

				<div style={{ position: 'relative' }}>
					<h3 className="mainText" style={{ margin: '15px' }}>
						Experience
					</h3>
					<h5 className="submainText" style={{ marginLeft: '15px', transform: 'translate(-0px, -6px)' }}>
						Android Development
					</h5>

					<div className="horizantal_slider animsBottom">
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
												className="btn btn-danger"
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
						</div>
					</div>

					<br />
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
												alt="Rizwan Sayyed Portfolio"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													rizwansayyedweb is <br /> &nbsp; a portfolio web app. &nbsp;
												</p>

												<br />
												<br />
												<br />
												<br />
												<br />

												<button
													type="button"
													className="btn btn-danger"
													onClick={(e) =>
														appredirect(
															e,
															'https://sayyedrizwan.github.io/rizwansayyedweb/'
														)}
												>
													This Website
												</button>
												<br />
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; Rizwan Portfolio Web <br /> &nbsp; (ReactJS)
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
													Wallpo is a wallpaper <br /> social networking web <br /> app.{' '}
													<br />
													<br />Similar: Instagram, <br />facebook. <br />
												</p>

												<br />
												<button
													type="button"
													className="btn btn-danger"
													onClick={(e) => appredirect(e, 'https://thewallpo.com')}
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
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACkCAMAAAAuTiJaAAAA9lBMVEX///83NDTxJI4vLCx5d3dmZWXzGoz6a7IlISG7uronJCQqJyfU09OCgoLn5+fxD4n5p8+ysLD8z+b94fCqqqrLy8tfXF0vNDLTJ3/c29vBwMD3I5H39/eioaH6tdf6udl9L1X3ir88OTn+9vv0VqXyNpn81elJRkb1d7WKiIiWlZX+8fj93u7+6vT0S6B2dHRPTU35pM4YEhJXVFT7w971Xqn4mcf2f7r4kMPzPpr6t9gUDw/btcj/0ej2crPk4+QxHyfjC4EfJyIhKSQnNS0+MDaKQGWBYXCOdYGXUXLGlq1zF0epfJHSvMeti5u/sLiOLV2mK2km+D1YAAAPMUlEQVR4nO2dC3fiuBXHMQLH2IBCAsxCDGl4hEDCK0ASZtqkndlu290+v/+XqZ/YunrYZm1gGP3PnD0zNjb2D0n3oSttLiclJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUldWi1SpNK4Uw0rx6CmNkuIsNA5yK9dQBm5aaBlDMSOgC0jn5WyA4CbXxmyA4Bbawd+x1TV+bQOsaxXzF9ZQ2tfIbMsoZmrs5uQFMyh3aOnTNraNXRsd8vE2ULrX6WDS1jaGc5omUMjTSdx44Y01Hm0AgzsCiehXpZQyuGeqdRz/CLDidzkTE0M2w7zwXaKGNoLUVCS6wGktASqy2hJVfNOENoWRsCAhoat8oCgamKquiopQ/wKqJbWzLJj39EfJxzmf0CjYO2NAXpAn3pkJd2nu2jzzXy6OSL9/HnCnmi/UVwb+vjDfLj82fhxz1pGmCz0nTdyNq5rcWPPHUIzbnUANA6ut/Xx+SJti64t/VxAK0QL7qDbJqIcyJNpQ/NvyFiQUOG5oqax9kTmnJS0AwdzoFqyVoaBU1DutIc10vtRqNd6lQWBvHV339LQ8Zi0m61Pgi1wJibFNqXYokwGq1JL/TlEdCQYbXNHi0FmJvjQTMWJTP60oTds1Gi7lAdBxPUQmhIt3/EKkvglgG0P/7pKrmeHqPfmw1Nr8RAlrilMdUY+S8pgqYXG+zLae2gffrpRlUxVrHq/rH+6v6NPBT80/43xvnN8jrySxjQtEm850vY0tj68KnxoSGlxr6WpTC0/D5S1ZuHp4gvoaEZlYhLfKXR0qyRrRcBDY2SjE4haHsxc7jdLPvCL6GgoVWsvplLqaVZT6ALoaFFopqpNKDl8/hCOLZR0Ix23Ofbo6V9NKAJ3r0nt6Uls4LpQMvjgYgahMZqaKbpGqp4Lge/pZkFpBkL6kdxQwUONIO2uUKlBC2PN4IeCqEZlBWoTpojRz2QA0na0syiXWaDqKZs9vjQUBE+TrtDCnTetKDl8WsCaNC4lxQ/4okZEXBbWsHHCfzR3BxxocGjFnhxwJ4atDzuxoYG3yiU2U0YsENoZb+cC0byuYnBhbYAQ8KEqgnLDFp+OI0LrUc2d3MUCQ102rr/WnTs6d9oBJ6hzoUG3Z8PiCxLaPhuT2il0C/LgQYGwRavQQWpIQO05hIXmg6acZ0uPswOWv6GFxtQ1pN8iHHoNBsamoM7FrwX0wGFAJpeZjwDGxo46D+O4QhlDA2/xYSmk7atEo4AmdCUHrijWdAQQgY13xBqaeBFO7GheX7IaOzImefOEFp+yHE7KOtJdqpKZEuj2o2FZz4azemjQeYWjO4VrvVktzTfDynpGUNTr+JBA/ZqEspRc6AhRqxqMkKxHTToezmTR/HGtIbT9f2MgmN1xdDUsGgo9CFCvP5JQSP7ZzvSENDPzdEOGhgBvLoltvWE3slYQ4rhG6t5ZPecDUKaYZIRtk4PsbClDdivQgfszfDpavSYxvDamfKh6ZTlEMSeVFDXWfSaHqdqj/GLEdDwbfhU/2oQRoQfnvq56VLY1DiuGp0a0okRfB7lp9knYiXgXGhIK5qs4xxocFCztLvc9T/iQ7N0F1Dzu96VCNrNPfNVGElIwlVrBOe50KiowBUwBe5s1KIDJ4W9sqW4sedO7lCYDFru3aemXviHLgU9VF0zv5oBzSD6T1C/xoemGOCUrQmcLLagrT5gd6suxJlbfpbD89mSQXvceuOaumtD/RnfHHDiT+YcQbi7leNAswYq4OW3is+MiGAFv77sM+Pn0yjfxXtwz0Qlg5ZbY2qIX/KbGr5kfzdrNoqw9LsYWQRNMZRJgM1sFCz3lgFtBFNySuRsFBrBpIj73JwcZRS03IWDKBxXXqUDTdHDnaJoxIBmhzarca3dbtcmxZ7lGDBn2HthaGZpEXJo+HMECsMYBNmOpNCuXRrL0BFB90wCTUEhX8ofdiKgORO6dsGBN5fJhBbYmI/OiihNEMxGoQlooOVi4HOLoKnLe0sgFnIG/kygET3UW9MSCQ0gZGU5bGhmtVwarxCo5hDOe47qAW2n7wfnhM6tM5W5BX7DQM2meyqENTDTg1acF1cjxdDopd/isgRdKXZKjUajXS+MNOJMdOypDslJknuVNAQv6UFTtILfKTzjngY0f2kEragCGKvvG4auU9VGMQJ2mO5/w+FYXOhyJIWmGCP3PRrxDEEsaHylXWoVznJgMlthY1I3/r8EHsce0PwR2H+O7xeauiWNge2s+aPamo9sL2hWF100dl4kBS1i+V7SSkjgxMaFxiu1IvJpMMfzalN7v+/3py/C7NBe0KyRZL5b0oKK9dATtupz8WuhYq0eVsSGDGhMfLrejAltQl628I+DJCRpQR83ThHRdpsXpob2hKYELruizcNdwSzPI7ZYQBqhqC8yyI/HXVAJLtsdJ6HBzFi/+z4T4vp90HYIenQ9Qe+El4qCloZfqFcXWM20oPUY+dmP0elSo+YIqPm47KEhZi1iK/rCYwlCCxJo2UJDoYpYTrFZgor6A4tqaVRuLANoSNcWnZZvIf2pyg9YkLLgXH500VN4IJpKHZoVTTc7Nid/Nsorv2hpX0CKf3KyTY2Cpl6QLm6q0HbEcsHuMIuGIysKBWuhBC4rcDkOrD//BVMahI1Bf+seTAfajpgtP/B0n8SgRjf+PkVo3C4dU12GbsM9dO0cWoraW1xocGYJVoQBaA1uS9MTFn4eSVNRU4sLDRXAJyoktWeSRe17h3adBjQFwemfSTikgYXM/AD0x4JG1wYvdtgMsBKixQ8JfihoikatZDdrRSsu1nVNL4DqUkEu4seCpiDG6360O5NJDcafBYGX9oNBY1JjyJyL8opGfbe8ENYimB/MVYghgSvMqM+zVjFek6KXoEyto9OrNFwOt4fCmUaW2qOIaMBfkmwo4HbmXBNvS6UBE156jt7KygDT99dYJUv6ZnDq+CmPWaV++0JTjGZUpV6rkGA7YR0EX+aCuja0ixddXcmIO5Du+tvBU1DQAAEVP4B3WIvztokDdoQqImyNgpEo6NTghAHY2cLorYrzebE5UpxJuihoht4rTmptK7ArTYo9d08JChrdhqilOxdR9aNJU0MGKjTYnbTVWemJ43RyAsRchZAZzfpucV61XG8aSAzNUCrhJzMb454eC1oeg3qz24imtk8+TR9VSsRaQ7NartEVBXEES453CxSQRhWCl5twpUoYGjIqVB1RtW6NrzGgBbOd3mfEzPbM3FrumbKajycdy+EYz5sjFD1BwrkR6J/+xKA/I00y0vjQEOsC27ZQhoDZ9cgiWtHs+v7QnMdEdj2AvULkd8wIwJDWWz9kFFnrhud8aMaKs9C4EAsaXBmwyQpaKmK3tKBeJKwqtZAsWIPAY2bdLw40OKidNjQ4pjkrHNGcaWlqGtcQ9JhlkdYwqMQyBKFS2+8BmgJaiG0IEKwm9VTkWk+NKiNvlW1L5SSY4xgCUNSR3ZiWhqi9PuyiccYiAVtlg+enUSv+LIfxWRu1c+O4LgeYkZoOhcyOC41acWGvNqERtOfN4rg84UJjUa7YXp1joWI4t3CtkzDwFECLiAKT61Mgbw87TR/Dflj7+unTVzgdWPn67du3r9+sC79BaF+d+4HF2c6ytWrP+vinn3/++a+/kF0PQlPxkFoV8Lafc9uopK2//WGnv08c1enR+x/W2V8AyV9/C678J3nqX86p3/4NLvjV/u9/7HP//d9PcHUmCW243SypPEd/K2bGg5a+Lm98QfseqItvbtR38tj0JhA89xk79yPTFFPXFlqDuXMNE5q6fpy6Yq13Fa3wOTC03S/MheaMv+GqdFvhMk4V5CO8GPEJHFRnNgq/OpsJjb0izNVjhBk4LWhOcgGujHgPdSdYGOVCA3UFL9j73CveD9prVEM7JWjuw4qccxVsxuVCA06WU6RtQ/Ech6TQBKXwJwdt6i0fhGdDuS2YjHChuZ0xkP3S6sA+5o5NCaFFDminA+2x66+Aht0z9MNTFzKhdXfrdfoDla4QFUPr38VgdhrQuu/BonFoCAIXgd4bidk9750LnJ5s/xV+mwha/3Ybh9kxoKmva+AahS0khcZvanhGOVSeIWAlw1Rnz65XTN3OdzmgrzGdXr3APQBOCFoe4y0/6UdvRbBUrXdR8YBebe9Cg83G/QmcF5vmHyAcv+WCHYOuh/aembGQHRBaN/xE8Pcn5n+o0uH7u8F2wNqP0YUGw+3Hobq7D1yguIOmwh0PIrJBx4H2mXwoQOYBC5+oz96oxoMGe6D7E2CqBNmR39Ig6m6s0ezA0MjMAXzRx0Ew5M3Ee3yG5EUEW3jBbd7ZoZbp2vjQoP8SHQccAdoTub8szMpPh2ryR7plu3YWmZeL9xe6azqn/O+BnnJUauMY0MAvSbWnp5C157qewH560Oi1AALtoMGYLCrzeAxocKSlFtg8XvjWSx1yqF2BTn3LcYgJrTmpIZjjzn2O3dQOBw362nSnutw6Vt8ajdgP1YWpIR+auuVvP/vEzadRD+BF6lGbWh0SGiwrUfPUXtj924fZcDh7ZTa06QOGpSq78gF8wTMe0y0XGkw02Tbcdgjf3qOoHQ4aZZ7ULWNzqP4j5as7un6xIi1OPs1+DcqJdXW/xfzMLbU5Vf9yNtzc5u5Pp6Xl7uAPiGfc3U9dLbtX90/X1/frl42KGW0jVKiCN6x7XVrtmQ+NsW7R1Z5zBFnoidrUXoV7Y5BaYuxW4PkBjgBaHg+7sLGtN/Z50RwBZx/RPafwMtE79QOqee58AWu/AhE0u+FehlrbtDtwUQugqbyduLviUe2Q0OimZocGHMP3yMg6i6FZY3h+8PDSvb3tvjzM8r4DI2ppvKFwfTrQmJlkvGU6WVczxmcjoOW9DXFshYZ70RQe+/8wINxf4tDQcgPGL6jiWRc++dUFM00TDY0hITRrKPwMH/Lx7XRcDluhCJPANrxb74ajx/vlgJPZygCa9eUbIic6XUZnbw8LzfLP2Tgwzs8uXu/uXt8HQ5WfDJy93YX0FlVQ7OqO0Ct13vrN3i/X99fXT1e3b5t8jFTkgaFZcTnvmRzXAkfEMOTq1pjJ6ehr1GS3PDS03HSTINt3ojo4NMtNH8ZOxp+ojgDNGmtnN2CxzfclOM14IN1f3r1ffLfaiPJ3UlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlKp6f9M9dUguOUpXwAAAABJRU5ErkJggg=="
												style={{ width: '140px', alignItems: 'center', borderRadius: '5px' }}
												alt="Toofan Khabre"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													&nbsp; &nbsp; Toofan Khabre is a &nbsp;<br /> news website. <br />
													<br />Similar: USA TODAY, <br />The New York Times. <br />
												</p>

												<br />
												<br />
												<button
													type="button"
													className="btn btn-danger"
													onClick={(e) => appredirect(e, 'https://www.toofankhabre.com/')}
												>
													View Website
												</button>
												<br />
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; Toofan Khabre <br /> &nbsp; (PHP)
									</h6>
								</div>

								<div className="slideritem itemtrans" style={{ marginLeft: '42px' }}>
									<div className="androiddev">
										<center>
											<br />
											<br />
											<br />
											<img
												src="https://play-lh.googleusercontent.com/F7bPJ8Py8SDaZ4pQ9xEwaTLQYjRJWoWd4wB-npUEo2QQgrw308PId_EKqR1PMACXd6Cz=s180"
												style={{ width: '80px', alignItems: 'center', borderRadius: '5px' }}
												alt="Toofan Khabre"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													&nbsp; &nbsp; FashionsMega is a &nbsp;<br /> e-commerce website.{' '}
													<br />
													<br />Similar: Amazon, <br />Flipkart. <br />
												</p>

												<br />
												<br />
												<button
													type="button"
													className="btn btn-danger"
													onClick={(e) =>
														appredirect(e, 'https://dissoluble-cleats.000webhostapp.com/')}
												>
													View Website
												</button>
												<br />
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; Fashions Mega(Closed) <br /> &nbsp; (PHP)
									</h6>
								</div>
							</div>
						</div>

						<br />
						<br />
					</div>

					<div style={{ position: 'relative' }}>
						<h5 className="submainText" style={{ marginLeft: '15px', transform: 'translate(-0px, -6px)' }}>
							Other Development
						</h5>
						<div className="horizantal_slider animsBottom">
							<div className="slider_container">
								<div className="slideritem itemtrans" style={{ marginLeft: '55px' }}>
									<div className="androiddev">
										<center>
											<br />
											<br />
											<br />
											<img
												src="data:image/png;base64,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"
												style={{ width: '110px', alignItems: 'center', borderRadius: '8px' }}
												alt="MySQL"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													Setup mySQL DB, <br />MongoDB, npm, nginx<br /> &nbsp;pm2, etc.
													<br /> So, User can enjoy<br /> Wallpo platform <br />services.
												</p>
												<br />
												&nbsp;&nbsp;
												<br />
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; CentOS server (Wallpo)
									</h6>
								</div>

								<div className="slideritem itemtrans" style={{ marginLeft: '55px' }}>
									<div className="androiddev">
										<center>
											<br />
											<br />
											<br />
											<img
												src="data:image/png;base64,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"
												style={{ width: '110px', alignItems: 'center', borderRadius: '2px' }}
												alt="MySQL"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													Managing more than <br />20K+ users data<br /> &nbsp;on Wallpo Web
													and &nbsp;&nbsp;<br /> app
												</p>
												<br />
												<br />
												<br />
												&nbsp;&nbsp;
												<br />
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; MySQL (Wallpo)
									</h6>
								</div>

								<div className="slideritem itemtrans" style={{ marginLeft: '55px' }}>
									<div className="androiddev">
										<center>
											<br />
											<br />
											<br />
											<img
												src="data:image/png;base64,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"
												style={{ width: '110px', alignItems: 'center', borderRadius: '8px' }}
												alt="Mongodb"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													Managing and data <br /> mining the users data<br /> &nbsp;on Wallpo
													Web and &nbsp;&nbsp;<br /> app
												</p>
												<br />
												<br />
												<br />
												&nbsp;&nbsp;
												<br />
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; Mongodb (Wallpo)
									</h6>
								</div>

								<div className="slideritem itemtrans" style={{ marginLeft: '55px' }}>
									<div className="androiddev">
										<center>
											<br />
											<br />
											<br />
											<img
												src="data:image/png;base64,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"
												style={{ width: '130px', alignItems: 'center', borderRadius: '5px' }}
												alt="Shared Hosting"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													Managing share <br />hosting and more than <br />30K+ users data<br />{' '}
													and User experience<br /> &nbsp;on only ToofanKhabre <br /> Web.
												</p>
												<br />
												&nbsp;&nbsp;
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; Shared Hosting (Toofan Khabre)
									</h6>
								</div>

								<div className="slideritem itemtrans" style={{ marginLeft: '50px' }}>
									<div className="androiddev">
										<center>
											<br />
											<br />
											<br />
											<img
												src="data:image/png;base64,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"
												style={{ width: '110px', alignItems: 'center', borderRadius: '5px' }}
												alt="Shared Hosting"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													Setup mail server with<br />zoho for better<br /> mail delivery and{' '}
													<br /> experience
												</p>
												<br />
												<br />
												<br />
												&nbsp;&nbsp;
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; Mail Server (Multiple)
									</h6>
								</div>

								<div className="slideritem itemtrans" style={{ marginLeft: '50px' }}>
									<div className="androiddev">
										<center>
											<br />
											<br />
											<br />
											<img
												src="data:image/png;base64,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"
												style={{ width: '110px', alignItems: 'center', borderRadius: '5px' }}
												alt="Google Ads"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													&nbsp;&nbsp;Run and worked on &nbsp;<br />more than ₹35000 <br />worth
													campaigns for <br /> Web and App traffic.
												</p>
												<br />
												<br />
												<br />
												&nbsp;&nbsp;
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; Google Ads
									</h6>
								</div>

								<div className="slideritem itemtrans" style={{ marginLeft: '50px' }}>
									<div className="androiddev">
										<center>
											<br />
											<br />
											<br />
											<img
												src="data:image/png;base64,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"
												style={{ width: '110px', alignItems: 'center', borderRadius: '5px' }}
												alt="Photoshop"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													Designed logo's <br /> banners and cover <br /> designs using <br />Photoshop,
													Adobe XD,<br /> Premiere pro.
												</p>
												<br />
												<br />
												&nbsp;&nbsp;
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; Photoshop
									</h6>
								</div>

								<div
									className="slideritem itemtrans"
									style={{ marginLeft: '50px', visibility: 'hidden' }}
								>
									<div className="androiddev">
										<center>
											<br />
											<br />
											<br />
											<img
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAwFBMVEUAHjYwqP////8xq/8AABUyrv8ADiIxqv8lhMoAFSoyr/8AGzIbZ58AGjEAFy0aYpgACR0AAB0AEiYAACcABhoACSoAFjEAACEuofUjgMQAEi8AACQAGTIAACgWVoYFKESRl54AABpqc340QlNIVGKhp63Z3N8njNUecK0OP2UrmekKNFX09fYAABB+ho8XWYoSS3aytrvEx8vf4uQTKj+3u8BLV2UjNEhcZnJ6gosNO18hd7c8SVgSSHIHK0kAAAcbq2RqAAAKOElEQVR4nO2dC3eiOBSAeQVERBBR8TFQrYqio7a2dVer+///1Qa0FSUgiuF1+M6ZndlzipPPG5Kb5MIQ1A3Gby+Dr80HkUo2w8HibTy/oUAE+r18t2rdRqfZS1rGj16nUW/1N4v3xxzXi16t3kxaIhS9Rqs78Nf0c3z/ZhqpjR6KTu1jdJfj56aWjQi66XUbaEuU4/i1lqkQ/tLrNj/DOS6Y7MXwh17/yzvKehzHxJ+kGxqJTu3tluOIyWY3ddEfBDsOakm38An8eZ0HOA7rSbfvKXR6a1/H10bSrXsSzfraxzE3inB8dUu6HIf5UYSSzTnCcdBNul1PpbPxOo7yMKK6afxz7TjuJ92mp1MbXTkSmZ/6vfxdXzgu8jExXtJ8dTvmsKfatEYux+/srjQCac1/Hd/zGUY4ti5+HTc5HHCO9Ocnx/e8TY1nnEDajsOc3o023aPjmkm6IRjpvjmOL3nKxa+x50ginynOmf4aOo7zO+LY1EfQ8SWPadyZ5hA65nlUtWlBx3wtjb20xkTOb0f7hiQ+8x7Hzr9ErmdHm94XMegk3QjcfBBfOR9WbfK7rjqT0oqNgoKCgoKCgoKCgoKCgoJsIDiIolg9wruoVkUh6fZFQxFtA8M4HGaz7XS/X+m6vlxKkIpUgUjSUp/OCEVllWpGVWWLIzkagHIZXEL/YP9Pmdas0kQ/MGw16QY/AMNxZBg4zrbV2rooZ06TCWX4a0oD2tR5Nlud9j5HxxOQO0POkuX9jk402wabdMvD84gjhKYnsph028PyoCNJAm2blVA+7Ajvy0pGamQed4ShNLMxwEZxJGlLzMJNGckRSgoZiGQ0RyiZgYEnoiNJm2rSCjeJ6kiCSeojGdmRLE/TnqRHd+Q0OWmJG0R3hL1VSdoiGKQjZy+LbeylsvOfoEUmxxHpnkBQjpy5384MgxAEUYCT/GEv7SwA/DXplAcS5UiXVFE4T+6CyCsqsTRp2jeQWXT0TgcCrxo7v1gCiU+g6aEJ6wgR5JmFDiVnpToRuMORIETWBOhAGjdGHdjdWVllVFZRWPibLLMKH9tW5l2O8MdNZCQDO6uoyPxU2pUsjeRoOERzpGaZ7Z20MhRZiSN/uNPR2Y+96wpe3U4sGs4/HPezzWn/yd64LZPWblXFv5d5r6M4Q/VWTkPfkAIrVjTgO7tCVcCVVgzmTnuvIyG3Ub21jEwDFGMXnD44okA74JW821GYlRGXgJW3x4nyhPObUi8vxjz13O1IMKg7kvY2U5lZ6EHYe3ElbY7KBBEcened6sh6QPaXdsfqChEeun11iVpBdemsOAoHhCNnXl4i36GYQkeCQPRBzrxYKCv6HYppdBQQl1w6irNQ42maHW/GEZ0MZchRMG7dj0ol5KSRXkdUNuceVwUi5Pl7eh2rOsrRNT8iJ9BsOaJzAFczGdI3jBwywulzROZyQP/NV5E5gnPADgCpwR89bvS5PiR1jj45+fb3kE5BLkyA1l7OBF5ReNHYrqSdSYLfNVfqHNUSSoE+X6FqqDhXGPZnb0MQq7wiqzOpdFpaps2xOkWuka3f6VEgEN8BkLxraIFn2emOhJl7yhxFAhUl97AqIr4ETvvP5+MUdWmBcqocRRG9++haIqOmFs+qxAWv6jvj2VaX3OWoHDSfDdZzWQAvIRx3gRMu7l32OxyrjOSzOUOXztkqL3m/Bt++Gg9hHUWFWfnuXbh3c1COcMxJ8owyhKMg8qy8nWi+exec5ipGqi5R3wRYJlivhHb8T2ZPyCpD7CulgE3Sq301cY+MNmjziR1uIc8fNcs0S+YRi7x5xqq5W49cetlfHFlRErJEnyO7CbA7hWh5Mb3JyBnUqXutVBMpPoteD0Cbl7cai0z2Tpa7gxr/UWVkR467OpdDri9/fpgum0uRjbnILrJjWb8ODBvYvznAtadMrCU9UR3BxJNtK7sb+wB02VrKMXbZiI6g5J33BOPmOMUBTWJjs4zmCEqoc8cw+3K2pRpTj43kCNro7EUNs78KLVdqLFNJBEeu7L0Xj8DeGmb3kQOmEUda8LgjTa58E21+H+5gjqYrMYTyUUeubBoBg4ayCnn6CEz8JemPOcJ7SQ8OALu6WQhwhNYM3JIPPYtkj/y3xkR+5rNn4Pk07JJ3O3L2DB5mbhP5djlUKDkNc8XVXY72Xrc1OYSd19S9FuoA6zqrT8bx+IQnsNpLQ+XDf+lVZeJbEOoGVLBOIej14+kR3Z+nduGiubSTplWZvbdXsUYbhLCkb9UURgK5D1CqGsZstt1Op9vtdmaIqmrXKT40MgjyrHTbMmgDNjro/Rz59CS9TdSnjQT5sONuzZYA5zNNj9R13IvAKpIVtOmF+VgnDkfC3vGfBWxeYq5kjskRBlNRV6b/ncllvK/+UFXh+ONXdr/Hl+zE6WiXe858KtIRhZNPI15H2GX/LpGDD87nYOJ2hGkB8rCAbmfJUVBuDB8ysvgFYxbwdEdhtiOCQyIQYQpgn8jTHflK2T69CYrlf0jHDPVVXqLt0xvCf8MfebKVqTHHOUfmaK49/evzEI6Kuh9xPhuAx9H+EKDt9lXZ84IokUGe+YBphnKAcz2A/RCONVkdGHthxjtvAlNYZlpCl9Nh3DPH6HjyBCRcYFeW+krXpYmpoVPWq3r054LZ0Wn/77bCZbmjG6yP6sTgGAYa5/FOOhyT2OuI2xFgfXIuFY4gsJ4uMmlwvCzweT5pcHQVamMhBY5lHfNBa/KOZew1kUk7cmCJvewzYUea3ON/jdLTHat3PPp448D9WTx/P0cJ8bz80RBoOu5XAzgwnJeI+3KsMdHKNzXpsiYp8ZRasSXE369Hy5AFhZnuNOf1FT4RPL7eIbZiMpbx8IQaL1FRD8u2RZad9dTJ9fieDugez2s6YkDgFVk56JVdybI00n57tP2+Ffs8WozndStxIVSdF+eosHM4vx4+jy4oKCgoKCgoKCgoKCgoKCgoKCgowM9H0g2IgU0v6Rbg56uZdAvwM+gk3QLcfBAvjaTbgJneF/HZTboRmOn8S4xrSTcCM/URQeU9jq0xQQ1zPrC2KIJ6qSfdCqw0h9Ax5zdkfQQdKSLXmU5/bTvmeoZsvlK24zoj/07qQ3TfHMdcj6xd6uj4nt9Rp7E4OVL5XV/15z+O7/2k24IJJ4xHR+o7p3dka352HOczkK0RdXakFn+Sbg8G7LnR5ZjLZOfv+tIxh721NqIuHalR3ibJxj/UtSM1yNcaq7OhvI7UME+5ea85RzlSr/mR7NXXFNIxP5JNt+KlIzXMxz3Z6bkVrxypQR5G1z+vcyrAkRoxmU8G+oMrp2tHakxkO63r1N6ulTyOMHdlsrsK6fW/5h4hhCM1fq1ls8P2us1PhA/KkaI+N7XsxbLXbYyQNmhHinr/ZhqZCman9oE29HekqPWiV6tnI5q9Rqs7ePc18XeEjF++W7Vuo9NMbUR7nUa91d8s/AVvOTqeby+Dr01Kqz82w8HibewdSS/5H6/swUlVPvCxAAAAAElFTkSuQmCC"
												style={{ width: '110px', alignItems: 'center', borderRadius: '5px' }}
												alt="Photoshop"
											/>
											<br />
											<div className="showData">
												<br />
												<p>
													Designed logo's <br /> banners and cover <br /> designs using <br />Photoshop,
													Adobe XD,<br /> Premiere pro.
												</p>
												<br />
												<br />
												&nbsp;&nbsp;
											</div>
										</center>
									</div>

									<h6 className="submainText" style={{ marginTop: '5px' }}>
										&nbsp; Photoshop
									</h6>
								</div>
							</div>
						</div>

						<br />
						<br />
					</div>
				</div>
				<br />
				<br />
				<center>
					<div className="cardInstagram" style={{ position: 'relative' }}>
						<div className="containerInstagram">
							<div style={{ position: 'absolute', top: '0px', left: '5px' }}>
								<img src={InstaIcon} alt="insgtarmicon" style={{ width: '145px' }} />
								<span className="mainText"> Instagram Posts</span>
							</div>
							<div style={{ position: 'absolute', top: '0px', right: '12px' }}>
								<br />
								<span className="mainText"> Posts: {instaPostsCount}</span>
							</div>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />

							<div className="gridcards">
								{instaPosts.map((instagram) => (
									<div
										key={instagram.node.id}
										className="gridcard"
										style={{ position: 'relative' }}
										onClick={(e) =>
											appredirect(e, 'https://www.instagram.com/p/' + instagram.node.shortcode)}
									>
										<div>
											<img
												className="centerCrop"
												src={instagram.node.display_url}
												style={{ height: '340px', width: '315px' }}
												alt={instagram.node.owner.username}
											/>
											{/*<p className="aboutText" style={{ color: 'whitesmoke' }}>
												{instagram.node.edge_media_to_caption.edges[0].node.text !==
												null ? instagram.node.edge_media_to_caption.edges[0].node.text.length >
												41 ? (
													instagram.node.edge_media_to_caption.edges[0].node.text.substring(
														0,
														40
													) + '...'
												) : (
													instagram.node.edge_media_to_caption.edges[0].node.text
												) : null}
												</p>*/}
												<br/>
											<br />
											<p
												className="aboutText"
												style={{
													color: 'whitesmoke',
													position: 'absolute',
													bottom: '4px',
													right: '10px'
												}}
											>
												&nbsp;&nbsp;<img
													src={CommentIcon}
													alt="commenticon"
													style={{ width: '18px' }}
												/>
												&nbsp;{instagram.node.edge_media_to_comment.count}
											</p>
											<p
												className="aboutText"
												style={{
													color: 'whitesmoke',
													position: 'absolute',
													bottom: '4px',
													left: '10px'
												}}
											>
												<img src={LikeIcon} alt="likeicon" style={{ width: '18px' }} />
												&nbsp;{instagram.node.edge_liked_by.count}&nbsp;&nbsp;
											</p>
										</div>
									</div>
								))}
							</div>
							<center>
								<br />
								<div
									className="profilered"
									onClick={(e) => appredirect(e, 'https://www.instagram.com/rizwansayyeddev/')}
								>
									<p>View Instagram Profile</p>
								</div>
							</center>
						</div>
					</div>
				</center>

				<br />
				<br />
				<br />

				<div className="footer">
					<br />
					<center style={{ marginTop: '20px' }}>
						<img
							src={LocationIcon}
							alt="gpsicon"
							style={{ width: '21px', transform: 'translate(0px, -4px)', cursor: 'pointer' }}
							onClick={(e) => appredirect(e, 'https://www.google.com/maps/@18.9068624,72.8160861,14z')}
						/>
						Colaba, India
						<p style={{ marginTop: '20px' }}>
							Made by Love with <a href="https://reactjs.org/">ReactJS</a>.{' '}
						</p>
						<p className="mainTextWhite" style={{ marginTop: '40px' }}>
							&#169; {new Date().getFullYear()} Rizwan Sayyed | rizwansayyed.ml
						</p>
					</center>
					<br />
				</div>
			</div>
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
	} else if (type === 'otherdeve') {
		document.getElementById('otherdevslider').scrollLeft += 250;
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
