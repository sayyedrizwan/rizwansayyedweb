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
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		document.getElementById('androidslider').scrollLeft = 0;
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
					onClick={(e) => sliderAppItem(e)}
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
					Android Development
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

function sliderAppItem(e) {
	e.preventDefault();
	document.getElementById('androidslider').scrollLeft += 150;
}

function appredirect(e, where) {
	e.preventDefault();
	window.open(where, '_blank');
}

export default App;
