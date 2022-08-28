import "./Calculator.css";

const calculate = () => {
	let B2 = document.getElementById("asset-input").value;
	let B3 = document.getElementById("contract-input").value;
	let B4 = document.getElementById("years-input").value;
	let B5 = document.getElementById("rent-input").value;
	let B6 = document.getElementById("usage-input").value;
	let B7 = document.getElementById("maintenance-input").value;
	let B8 = document.getElementById("stakers-input").value;

	if (
		B2 === "" ||
		B3 === "" ||
		B4 === "" ||
		B5 === "" ||
		B6 === "" ||
		B7 === "" ||
		B8 === ""
	) {
		alert("All field are mandatory!");
	} else {
		let E4 = B2 / 10;
		let E10 = Math.ceil(((E4 * (B5 * B6 * B3)) / (E4 * 3.5)) * 0.7);
		let F10 = (B5 * B6 - B7) * 0.35;
		let G10 = ((E10 / B3 + F10) / B2) * 100;
		let H10 = F10 * B3;
		let I10 = E10 + H10;

		document.getElementById("sale-results").innerHTML = "$" + E10;
		document.getElementById("passive-results").innerHTML = "$" + F10;
		document.getElementById("apy-results").innerHTML = G10 + "%";
		document.getElementById("total-results").innerHTML = "$" + H10;
		document.getElementById("roi-results").innerHTML = "$" + I10;
		document.getElementById("nfts-results").innerHTML = E4;
	}
};

const reset = () => {
	for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
		document.getElementsByTagName("input")[i].value = "";
	}

	for (
		let i = 0;
		i < document.getElementsByClassName("calculated-values").length;
		i++
	) {
		document.getElementsByClassName("calculated-values")[i].innerHTML = "";
	}
};

export const Calculator = () => {
	return (
		<div className="container">
			<div className="top">
				<div className="top-heading heading">Calculator</div>
				<button className="reset-btn" onClick={reset}>
					Reset
				</button>
			</div>
			<div className="instructions">
				* This calculator provides return estimates based on the formula
				for the Physical Digits system.
				<br />
				Actual returns may vary based on the number of F-NFTs sold for
				this asset.
			</div>
			<div className="values">
				<div className="asset value-inputs">
					<label className="asset-label" for="asset-input">
						Asset Value:
					</label>
					<input type="number" id="asset-input" />
				</div>
				<div className="usage value-inputs">
					<label className="usage-label" for="usage-input">
						Usage Days Per Year:
					</label>
					<input type="number" id="usage-input" />
				</div>
				<div className="contract value-inputs">
					<label className="contract-label" for="contract-input">
						Contract Years:
					</label>
					<input type="number" id="contract-input" />
				</div>
				<div className="maintenance value-inputs">
					<label
						className="maintenance-label"
						for="maintenance-input"
					>
						Yearly Maintenance:
					</label>
					<input type="number" id="maintenance-input" />
				</div>
				<div className="years value-inputs">
					<label className="years-label" for="years-input">
						Years Remaining:
					</label>
					<input type="number" id="years-input" />
				</div>
				<div className="stakers value-inputs">
					<label className="stakers-label" for="stakers-input">
						Number of Stakers:
					</label>
					<input type="number" id="stakers-input" />
				</div>
				<div className="rent value-inputs">
					<label className="rent-label" for="rent-input">
						Daily Rent of Asset:
					</label>
					<input type="number" id="rent-input" />
				</div>
				<div className="calculate">
					<button className="calculate-btn" onClick={calculate}>
						Calculate
					</button>
				</div>
			</div>
			<div className="bottom">
				<div className="bottom-heading heading">
					ROI for Asset Owner
				</div>
				<div className="results">
					<div className="sale results-values">
						<div className="sale-heading">From F-NFT Sale</div>
						<div
							className="calculated-values"
							id="sale-results"
						></div>
					</div>
					<div className="passive results-values">
						<div className="passive-heading">Passive Yearly</div>
						<div
							className="calculated-values"
							id="passive-results"
						></div>
					</div>
					<div className="apy results-values">
						<div className="apy-heading">APY</div>
						<div
							className="calculated-values"
							id="apy-results"
						></div>
					</div>
					<div className="total results-values">
						<div className="total-heading">Passive Total</div>
						<div
							className="calculated-values"
							id="total-results"
						></div>
					</div>
					<div className="roi results-values">
						<div className="roi-heading">Total ROI</div>
						<div
							className="calculated-values"
							id="roi-results"
						></div>
					</div>
					<div className="nfts results-values">
						<div className="nfts-heading">Total NFTs</div>
						<div
							className="calculated-values"
							id="nfts-results"
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};
