/**************************************
TITLE: 			Canvas Tag
AUTHOR: 		Nathan Boyd
CREATE DATE: 	2012.6.18

Canvas Drawing created with assistance from
Adobe Illustrator Canvas Plugin
**************************************/

var imageStatus = "regular";

function swap(){
	if(imageStatus == "regular"	){
		init_drawIronManShadow();	
	} else {
		init_drawIronMan();
	}
}

function init_drawIronMan() {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  // Use the identity matrix while clearing the canvas
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Restore the transform
  ctx.restore();
  
  imageStatus = "regular";
  
  drawIronMan(ctx);
}

function drawIronMan(ctx) {

  // ironMan/Group
  ctx.save();

  // ironMan/Group/Clipping Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(141.8, 0.1);
  ctx.lineTo(591.8, 0.1);
  ctx.lineTo(591.8, 584.1);
  ctx.lineTo(141.8, 584.1);
  ctx.lineTo(141.8, 0.1);
  ctx.closePath();
  ctx.clip();

  // ironMan/Group/Tracing

  // ironMan/Group/Tracing/Group

  // ironMan/Group/Tracing/Group/Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(522.3, 66.0);
  ctx.bezierCurveTo(524.5, 70.5, 521.3, 74.8, 522.3, 81.0);
  ctx.bezierCurveTo(520.1, 79.5, 518.2, 85.1, 512.3, 83.0);
  ctx.bezierCurveTo(511.3, 82.1, 512.0, 79.3, 509.3, 80.0);
  ctx.bezierCurveTo(513.5, 75.2, 513.0, 65.7, 522.3, 66.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(388.3, 74.0);
  ctx.bezierCurveTo(387.9, 70.6, 391.3, 71.0, 392.3, 69.0);
  ctx.bezierCurveTo(400.7, 74.9, 401.6, 88.4, 403.3, 101.0);
  ctx.bezierCurveTo(400.9, 99.7, 399.7, 105.6, 399.3, 108.0);
  ctx.bezierCurveTo(398.4, 114.0, 400.9, 122.2, 400.3, 128.0);
  ctx.bezierCurveTo(400.6, 129.8, 399.4, 130.1, 399.3, 129.0);
  ctx.bezierCurveTo(399.3, 127.7, 399.3, 126.3, 399.3, 125.0);
  ctx.bezierCurveTo(397.7, 121.6, 396.9, 117.4, 394.3, 115.0);
  ctx.bezierCurveTo(394.3, 108.6, 395.8, 98.8, 395.3, 89.0);
  ctx.bezierCurveTo(395.3, 86.4, 396.1, 87.8, 397.3, 88.0);
  ctx.bezierCurveTo(395.7, 81.9, 391.9, 78.1, 388.3, 74.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(554.3, 75.0);
  ctx.bezierCurveTo(557.6, 81.3, 551.3, 85.7, 550.3, 91.0);
  ctx.bezierCurveTo(544.5, 92.1, 543.0, 88.9, 539.3, 88.0);
  ctx.bezierCurveTo(542.5, 81.9, 546.2, 76.3, 554.3, 75.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 78.0);
  ctx.bezierCurveTo(372.6, 84.0, 368.9, 87.9, 368.3, 95.0);
  ctx.bezierCurveTo(364.0, 95.0, 359.7, 95.0, 355.3, 95.0);
  ctx.bezierCurveTo(352.7, 89.9, 351.1, 83.9, 350.3, 77.0);
  ctx.bezierCurveTo(356.4, 76.3, 367.2, 76.7, 374.3, 78.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(509.3, 82.0);
  ctx.bezierCurveTo(510.5, 87.6, 514.2, 84.6, 520.3, 85.0);
  ctx.bezierCurveTo(520.1, 88.1, 521.0, 92.3, 519.3, 94.0);
  ctx.bezierCurveTo(514.9, 94.8, 513.3, 92.7, 509.3, 93.0);
  ctx.bezierCurveTo(509.3, 89.3, 509.3, 85.7, 509.3, 82.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(535.3, 91.0);
  ctx.bezierCurveTo(539.9, 92.1, 542.3, 94.9, 547.3, 93.0);
  ctx.bezierCurveTo(545.2, 96.2, 543.2, 99.5, 541.3, 103.0);
  ctx.bezierCurveTo(538.4, 101.9, 534.6, 101.8, 534.3, 98.0);
  ctx.bezierCurveTo(531.5, 101.2, 537.0, 104.6, 540.3, 105.0);
  ctx.bezierCurveTo(539.2, 109.9, 533.3, 113.0, 535.3, 118.0);
  ctx.bezierCurveTo(528.9, 118.1, 525.1, 115.6, 522.3, 112.0);
  ctx.bezierCurveTo(525.1, 103.4, 532.0, 99.0, 535.3, 91.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(344.3, 93.0);
  ctx.bezierCurveTo(346.1, 90.3, 345.0, 98.9, 345.3, 101.0);
  ctx.bezierCurveTo(343.5, 103.7, 344.6, 95.1, 344.3, 93.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(526.3, 99.0);
  ctx.bezierCurveTo(525.4, 101.1, 523.3, 102.0, 523.3, 105.0);
  ctx.bezierCurveTo(520.6, 103.2, 523.3, 98.4, 526.3, 99.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(345.3, 105.0);
  ctx.bezierCurveTo(345.7, 103.1, 346.6, 105.6, 346.3, 107.0);
  ctx.bezierCurveTo(345.9, 108.9, 345.0, 106.4, 345.3, 105.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(541.3, 107.0);
  ctx.bezierCurveTo(544.0, 106.3, 543.3, 109.0, 545.3, 109.0);
  ctx.bezierCurveTo(545.0, 111.1, 541.6, 109.9, 541.3, 112.0);
  ctx.bezierCurveTo(539.0, 111.7, 540.7, 107.6, 541.3, 107.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(403.3, 110.0);
  ctx.bezierCurveTo(406.2, 113.6, 401.9, 118.6, 403.3, 124.0);
  ctx.bezierCurveTo(401.8, 128.4, 401.8, 112.1, 403.3, 110.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(519.3, 111.0);
  ctx.bezierCurveTo(521.4, 111.6, 521.4, 112.6, 520.3, 114.0);
  ctx.bezierCurveTo(519.7, 114.0, 519.0, 114.0, 518.3, 114.0);
  ctx.bezierCurveTo(518.0, 112.4, 519.3, 112.3, 519.3, 111.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(393.3, 120.0);
  ctx.bezierCurveTo(385.6, 135.0, 367.7, 122.7, 352.3, 123.0);
  ctx.bezierCurveTo(353.8, 124.4, 350.1, 126.6, 347.3, 129.0);
  ctx.bezierCurveTo(344.2, 125.1, 333.4, 128.9, 333.3, 122.0);
  ctx.bezierCurveTo(334.6, 121.0, 337.0, 121.1, 337.3, 119.0);
  ctx.bezierCurveTo(345.2, 119.7, 351.0, 122.9, 361.3, 122.0);
  ctx.bezierCurveTo(373.6, 121.0, 384.2, 113.5, 393.3, 120.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(372.3, 122.0);
  ctx.bezierCurveTo(367.4, 125.8, 378.3, 122.6, 377.3, 125.0);
  ctx.bezierCurveTo(377.5, 124.6, 373.3, 125.8, 374.3, 126.0);
  ctx.bezierCurveTo(381.2, 127.4, 383.2, 124.1, 390.3, 123.0);
  ctx.bezierCurveTo(387.4, 115.0, 379.2, 122.4, 372.3, 122.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(336.3, 124.0);
  ctx.bezierCurveTo(340.6, 124.5, 347.7, 128.4, 349.3, 123.0);
  ctx.bezierCurveTo(346.4, 122.2, 337.6, 120.2, 336.3, 124.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(349.3, 123.0);
  ctx.bezierCurveTo(347.7, 128.4, 340.6, 124.5, 336.3, 124.0);
  ctx.bezierCurveTo(337.6, 120.2, 346.4, 122.2, 349.3, 123.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(387.3, 132.0);
  ctx.bezierCurveTo(388.5, 128.8, 388.5, 134.7, 388.3, 136.0);
  ctx.bezierCurveTo(387.2, 139.2, 387.2, 133.3, 387.3, 132.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(553.3, 145.0);
  ctx.bezierCurveTo(554.1, 144.0, 552.2, 136.5, 556.3, 136.0);
  ctx.bezierCurveTo(559.8, 136.8, 560.1, 140.9, 561.3, 144.0);
  ctx.bezierCurveTo(557.2, 145.6, 552.3, 146.3, 546.3, 146.0);
  ctx.bezierCurveTo(545.0, 143.1, 545.0, 138.9, 546.3, 136.0);
  ctx.bezierCurveTo(548.7, 136.0, 551.0, 136.0, 553.3, 136.0);
  ctx.bezierCurveTo(552.6, 138.4, 551.3, 142.9, 553.3, 145.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(390.3, 160.0);
  ctx.bezierCurveTo(393.1, 156.6, 398.0, 154.2, 402.3, 152.0);
  ctx.bezierCurveTo(408.8, 148.7, 413.5, 145.7, 424.3, 146.0);
  ctx.bezierCurveTo(415.5, 151.1, 404.6, 154.3, 397.3, 161.0);
  ctx.bezierCurveTo(395.0, 160.7, 393.6, 159.4, 390.3, 160.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(445.3, 151.0);
  ctx.bezierCurveTo(439.8, 153.5, 435.1, 151.2, 430.3, 152.0);
  ctx.bezierCurveTo(425.7, 152.8, 416.5, 157.4, 411.3, 160.0);
  ctx.bezierCurveTo(407.6, 161.8, 403.8, 166.5, 400.3, 163.0);
  ctx.bezierCurveTo(401.4, 158.8, 407.1, 154.8, 410.3, 156.0);
  ctx.bezierCurveTo(413.4, 149.7, 422.3, 149.4, 428.3, 146.0);
  ctx.bezierCurveTo(434.0, 147.6, 439.5, 149.5, 445.3, 151.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(399.3, 147.0);
  ctx.bezierCurveTo(399.0, 148.3, 397.6, 148.6, 397.3, 150.0);
  ctx.bezierCurveTo(394.8, 149.6, 397.3, 146.1, 399.3, 147.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(340.3, 151.0);
  ctx.bezierCurveTo(342.0, 148.1, 341.1, 156.1, 341.3, 158.0);
  ctx.bezierCurveTo(339.6, 160.9, 340.5, 152.9, 340.3, 151.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(486.3, 151.0);
  ctx.bezierCurveTo(487.0, 148.2, 487.5, 153.3, 487.3, 154.0);
  ctx.bezierCurveTo(486.9, 156.0, 485.4, 154.8, 486.3, 151.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(370.3, 169.0);
  ctx.bezierCurveTo(363.0, 166.6, 352.3, 167.9, 348.3, 172.0);
  ctx.bezierCurveTo(347.1, 168.5, 342.3, 168.7, 343.3, 163.0);
  ctx.bezierCurveTo(346.1, 162.7, 349.3, 164.9, 351.3, 160.0);
  ctx.bezierCurveTo(358.5, 160.3, 369.2, 159.5, 373.3, 160.0);
  ctx.bezierCurveTo(372.8, 163.5, 370.6, 165.3, 370.3, 169.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(339.3, 160.0);
  ctx.bezierCurveTo(341.1, 160.2, 341.6, 161.7, 341.3, 164.0);
  ctx.bezierCurveTo(340.0, 163.3, 339.5, 161.9, 339.3, 160.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(326.3, 162.0);
  ctx.bezierCurveTo(332.0, 163.8, 332.3, 174.7, 330.3, 181.0);
  ctx.bezierCurveTo(326.7, 180.3, 326.5, 183.2, 323.3, 183.0);
  ctx.bezierCurveTo(323.3, 180.3, 323.3, 177.7, 323.3, 175.0);
  ctx.bezierCurveTo(315.3, 174.3, 315.0, 181.3, 313.3, 187.0);
  ctx.bezierCurveTo(308.1, 176.9, 318.7, 165.9, 326.3, 162.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(346.3, 173.0);
  ctx.bezierCurveTo(347.9, 176.7, 351.3, 178.6, 352.3, 183.0);
  ctx.bezierCurveTo(361.2, 183.5, 364.9, 183.8, 370.3, 180.0);
  ctx.bezierCurveTo(370.0, 188.1, 351.0, 196.1, 341.3, 189.0);
  ctx.bezierCurveTo(339.4, 180.1, 346.1, 179.8, 346.3, 173.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(389.3, 173.0);
  ctx.bezierCurveTo(387.8, 176.8, 385.3, 179.6, 384.3, 184.0);
  ctx.bezierCurveTo(382.2, 180.5, 385.6, 173.9, 389.3, 173.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(483.3, 173.0);
  ctx.bezierCurveTo(485.2, 175.8, 486.1, 179.6, 487.3, 183.0);
  ctx.bezierCurveTo(483.9, 181.7, 483.7, 177.3, 483.3, 173.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(470.3, 174.0);
  ctx.bezierCurveTo(470.2, 192.2, 444.0, 193.0, 439.3, 210.0);
  ctx.bezierCurveTo(433.5, 206.1, 424.7, 205.3, 414.3, 206.0);
  ctx.bezierCurveTo(420.8, 193.8, 433.4, 179.9, 448.3, 185.0);
  ctx.bezierCurveTo(448.9, 188.9, 446.5, 189.9, 447.3, 194.0);
  ctx.bezierCurveTo(449.3, 188.0, 455.6, 186.3, 458.3, 181.0);
  ctx.bezierCurveTo(462.5, 185.8, 466.1, 175.5, 470.3, 174.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(321.3, 177.0);
  ctx.bezierCurveTo(322.1, 179.5, 319.4, 185.6, 323.3, 185.0);
  ctx.bezierCurveTo(321.2, 186.6, 318.1, 187.1, 314.3, 187.0);
  ctx.bezierCurveTo(317.7, 185.8, 319.7, 182.1, 317.3, 178.0);
  ctx.bezierCurveTo(319.1, 178.1, 319.4, 176.8, 321.3, 177.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(427.3, 186.0);
  ctx.bezierCurveTo(422.2, 188.6, 417.6, 191.6, 415.3, 197.0);
  ctx.bezierCurveTo(410.3, 196.6, 411.6, 190.0, 404.3, 192.0);
  ctx.bezierCurveTo(406.0, 185.0, 410.8, 181.1, 415.3, 177.0);
  ctx.bezierCurveTo(420.3, 179.0, 426.5, 179.8, 427.3, 186.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(311.3, 197.0);
  ctx.bezierCurveTo(312.8, 190.8, 319.3, 189.6, 325.3, 188.0);
  ctx.bezierCurveTo(325.9, 190.1, 324.1, 194.6, 326.3, 195.0);
  ctx.bezierCurveTo(326.8, 186.5, 334.0, 184.7, 338.3, 180.0);
  ctx.bezierCurveTo(340.6, 181.7, 338.7, 187.6, 339.3, 191.0);
  ctx.bezierCurveTo(342.4, 193.6, 347.9, 193.7, 352.3, 195.0);
  ctx.bezierCurveTo(336.6, 194.3, 323.1, 202.4, 311.3, 197.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(354.3, 182.0);
  ctx.bezierCurveTo(354.7, 179.8, 359.2, 181.6, 361.3, 181.0);
  ctx.bezierCurveTo(360.9, 183.2, 356.4, 181.4, 354.3, 182.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(506.3, 188.0);
  ctx.bezierCurveTo(507.3, 186.7, 507.3, 184.3, 508.3, 183.0);
  ctx.bezierCurveTo(506.6, 183.0, 505.7, 183.7, 505.3, 185.0);
  ctx.bezierCurveTo(501.8, 179.5, 509.3, 182.6, 514.3, 182.0);
  ctx.bezierCurveTo(511.3, 183.6, 510.3, 187.3, 506.3, 188.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 241.0);
  ctx.bezierCurveTo(373.2, 241.2, 372.5, 240.8, 372.3, 240.0);
  ctx.bezierCurveTo(374.1, 230.0, 382.9, 223.7, 383.3, 218.0);
  ctx.bezierCurveTo(381.9, 217.5, 376.6, 208.7, 380.3, 206.0);
  ctx.bezierCurveTo(372.3, 209.3, 364.4, 212.7, 358.3, 218.0);
  ctx.bezierCurveTo(353.4, 216.3, 349.9, 213.1, 344.3, 212.0);
  ctx.bezierCurveTo(347.4, 207.4, 352.0, 204.4, 354.3, 199.0);
  ctx.bezierCurveTo(364.1, 198.3, 374.3, 193.2, 381.3, 193.0);
  ctx.bezierCurveTo(377.1, 197.1, 371.4, 199.7, 364.3, 201.0);
  ctx.bezierCurveTo(371.6, 204.4, 377.3, 196.5, 384.3, 194.0);
  ctx.bezierCurveTo(382.3, 193.1, 383.5, 188.8, 380.3, 189.0);
  ctx.bezierCurveTo(380.6, 187.0, 383.0, 187.0, 383.3, 185.0);
  ctx.bezierCurveTo(390.1, 187.2, 394.7, 191.7, 401.3, 194.0);
  ctx.bezierCurveTo(399.6, 199.3, 399.2, 211.3, 403.3, 214.0);
  ctx.bezierCurveTo(393.1, 222.5, 381.5, 229.5, 374.3, 241.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(500.3, 196.0);
  ctx.bezierCurveTo(497.6, 199.4, 491.0, 194.7, 487.3, 194.0);
  ctx.bezierCurveTo(477.9, 192.1, 492.8, 193.8, 500.3, 196.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(409.3, 211.0);
  ctx.bezierCurveTo(407.6, 211.0, 406.7, 211.7, 406.3, 213.0);
  ctx.bezierCurveTo(401.6, 210.4, 404.5, 200.1, 402.3, 195.0);
  ctx.bezierCurveTo(407.9, 192.8, 411.0, 196.2, 414.3, 199.0);
  ctx.bezierCurveTo(409.1, 206.0, 410.6, 214.7, 415.3, 221.0);
  ctx.bezierCurveTo(400.4, 226.6, 387.2, 236.5, 375.3, 246.0);
  ctx.bezierCurveTo(374.1, 245.8, 374.5, 244.2, 374.3, 243.0);
  ctx.bezierCurveTo(383.7, 230.1, 398.4, 222.4, 409.3, 211.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(270.3, 197.0);
  ctx.bezierCurveTo(272.2, 194.8, 270.9, 204.3, 271.3, 207.0);
  ctx.bezierCurveTo(269.4, 209.2, 270.7, 199.7, 270.3, 197.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(278.3, 201.0);
  ctx.bezierCurveTo(279.0, 198.2, 279.5, 203.3, 279.3, 204.0);
  ctx.bezierCurveTo(278.9, 206.0, 277.4, 204.8, 278.3, 201.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(478.3, 201.0);
  ctx.bezierCurveTo(478.1, 198.8, 481.9, 200.5, 483.3, 200.0);
  ctx.bezierCurveTo(483.5, 202.2, 479.8, 200.5, 478.3, 201.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(319.3, 204.0);
  ctx.bezierCurveTo(320.9, 200.9, 320.2, 208.3, 320.3, 210.0);
  ctx.bezierCurveTo(318.8, 213.1, 319.4, 205.7, 319.3, 204.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(494.3, 205.0);
  ctx.bezierCurveTo(494.9, 208.9, 488.8, 206.2, 486.3, 207.0);
  ctx.bezierCurveTo(486.5, 203.9, 491.3, 205.3, 494.3, 205.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(484.3, 209.0);
  ctx.bezierCurveTo(480.3, 209.0, 476.3, 209.0, 472.3, 209.0);
  ctx.bezierCurveTo(473.1, 206.7, 483.8, 205.1, 484.3, 209.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(270.3, 210.0);
  ctx.bezierCurveTo(271.7, 206.8, 271.3, 213.5, 271.3, 215.0);
  ctx.bezierCurveTo(269.9, 218.2, 270.3, 211.5, 270.3, 210.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(292.3, 210.0);
  ctx.bezierCurveTo(294.1, 210.2, 294.6, 211.7, 294.3, 214.0);
  ctx.bezierCurveTo(293.0, 213.3, 292.5, 211.9, 292.3, 210.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(312.3, 212.0);
  ctx.bezierCurveTo(312.7, 210.1, 313.6, 212.6, 313.3, 214.0);
  ctx.bezierCurveTo(312.9, 215.9, 312.0, 213.4, 312.3, 212.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(486.3, 213.0);
  ctx.bezierCurveTo(486.7, 210.8, 491.2, 212.6, 493.3, 212.0);
  ctx.bezierCurveTo(492.9, 214.2, 488.4, 212.4, 486.3, 213.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(276.3, 218.0);
  ctx.bezierCurveTo(280.5, 217.2, 281.0, 219.9, 284.3, 220.0);
  ctx.bezierCurveTo(285.0, 223.1, 283.3, 223.6, 283.3, 226.0);
  ctx.bezierCurveTo(276.9, 227.4, 277.3, 222.0, 276.3, 218.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(344.3, 224.0);
  ctx.bezierCurveTo(346.2, 226.7, 347.5, 231.1, 346.3, 234.0);
  ctx.bezierCurveTo(344.8, 231.6, 344.8, 227.5, 344.3, 224.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(419.3, 227.0);
  ctx.bezierCurveTo(419.7, 225.1, 420.6, 227.6, 420.3, 229.0);
  ctx.bezierCurveTo(419.9, 230.9, 419.0, 228.4, 419.3, 227.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(283.3, 235.0);
  ctx.bezierCurveTo(284.5, 235.8, 286.0, 236.3, 288.3, 236.0);
  ctx.bezierCurveTo(287.3, 250.8, 286.0, 268.1, 291.3, 279.0);
  ctx.bezierCurveTo(289.5, 281.4, 287.4, 279.6, 286.3, 284.0);
  ctx.bezierCurveTo(271.9, 276.1, 276.2, 247.3, 283.3, 235.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(344.3, 243.0);
  ctx.bezierCurveTo(341.3, 242.3, 345.3, 240.9, 344.3, 239.0);
  ctx.bezierCurveTo(347.7, 239.9, 345.2, 241.2, 344.3, 243.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(372.3, 242.0);
  ctx.bezierCurveTo(372.9, 247.3, 371.4, 250.4, 367.3, 251.0);
  ctx.bezierCurveTo(369.3, 248.4, 368.6, 243.0, 372.3, 242.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(424.3, 247.0);
  ctx.bezierCurveTo(424.7, 245.1, 425.6, 247.6, 425.3, 249.0);
  ctx.bezierCurveTo(424.9, 250.9, 424.0, 248.4, 424.3, 247.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(425.3, 252.0);
  ctx.bezierCurveTo(425.7, 250.1, 426.6, 252.6, 426.3, 254.0);
  ctx.bezierCurveTo(425.9, 255.9, 425.0, 253.4, 425.3, 252.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(464.3, 252.0);
  ctx.bezierCurveTo(469.4, 248.5, 469.8, 254.6, 464.3, 252.0);
  ctx.lineTo(464.3, 252.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(440.3, 255.0);
  ctx.bezierCurveTo(442.1, 255.2, 445.3, 254.0, 444.3, 257.0);
  ctx.bezierCurveTo(443.5, 257.2, 443.4, 256.6, 443.3, 256.0);
  ctx.bezierCurveTo(442.3, 256.0, 442.5, 257.2, 442.3, 258.0);
  ctx.bezierCurveTo(441.5, 257.8, 441.3, 257.0, 440.3, 257.0);
  ctx.bezierCurveTo(440.3, 256.3, 440.3, 255.7, 440.3, 255.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(426.3, 265.0);
  ctx.bezierCurveTo(429.9, 266.4, 429.3, 272.0, 430.3, 276.0);
  ctx.bezierCurveTo(428.0, 273.4, 427.0, 269.3, 426.3, 265.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(307.3, 266.0);
  ctx.bezierCurveTo(309.1, 265.7, 309.1, 271.6, 306.3, 270.0);
  ctx.bezierCurveTo(307.1, 269.1, 307.4, 267.7, 307.3, 266.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(431.3, 268.0);
  ctx.bezierCurveTo(433.3, 269.7, 434.0, 272.7, 434.3, 276.0);
  ctx.bezierCurveTo(435.7, 275.7, 435.1, 273.5, 435.3, 272.0);
  ctx.bezierCurveTo(437.6, 272.6, 435.5, 285.3, 431.3, 286.0);
  ctx.bezierCurveTo(431.3, 283.3, 431.3, 280.7, 431.3, 278.0);
  ctx.bezierCurveTo(436.5, 282.8, 428.8, 269.8, 431.3, 268.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(398.3, 293.0);
  ctx.bezierCurveTo(395.8, 294.4, 392.0, 294.7, 390.3, 297.0);
  ctx.bezierCurveTo(385.8, 292.2, 380.9, 287.7, 378.3, 281.0);
  ctx.bezierCurveTo(381.5, 280.2, 384.2, 278.9, 386.3, 277.0);
  ctx.bezierCurveTo(383.6, 275.0, 380.0, 280.7, 375.3, 280.0);
  ctx.bezierCurveTo(375.0, 277.6, 371.8, 278.1, 372.3, 275.0);
  ctx.bezierCurveTo(375.1, 272.4, 379.6, 271.6, 382.3, 269.0);
  ctx.bezierCurveTo(388.7, 275.9, 394.8, 283.2, 398.3, 293.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(317.3, 273.0);
  ctx.bezierCurveTo(318.5, 269.8, 318.5, 275.7, 318.3, 277.0);
  ctx.bezierCurveTo(317.2, 280.2, 317.2, 274.3, 317.3, 273.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 281.0);
  ctx.bezierCurveTo(372.6, 282.6, 370.7, 284.0, 367.3, 284.0);
  ctx.bezierCurveTo(366.9, 283.1, 366.4, 282.2, 365.3, 282.0);
  ctx.bezierCurveTo(365.5, 276.1, 372.5, 278.0, 374.3, 281.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(316.3, 290.0);
  ctx.bezierCurveTo(314.4, 296.5, 310.9, 289.4, 305.3, 291.0);
  ctx.bezierCurveTo(303.4, 289.0, 313.3, 290.4, 316.3, 290.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(318.3, 290.0);
  ctx.bezierCurveTo(321.8, 288.9, 321.0, 296.1, 317.3, 294.0);
  ctx.bezierCurveTo(318.1, 293.1, 318.4, 291.7, 318.3, 290.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(367.3, 304.0);
  ctx.bezierCurveTo(370.8, 304.7, 368.0, 307.0, 367.3, 309.0);
  ctx.bezierCurveTo(365.7, 307.4, 366.9, 305.8, 367.3, 304.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(240.3, 306.0);
  ctx.bezierCurveTo(241.5, 306.4, 242.4, 307.3, 242.3, 309.0);
  ctx.bezierCurveTo(241.1, 308.6, 240.3, 307.7, 240.3, 306.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(434.3, 312.0);
  ctx.bezierCurveTo(434.1, 313.4, 431.3, 312.3, 431.3, 314.0);
  ctx.bezierCurveTo(428.1, 312.9, 432.3, 311.1, 434.3, 312.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(290.3, 313.0);
  ctx.bezierCurveTo(293.0, 314.5, 288.7, 317.3, 288.3, 319.0);
  ctx.bezierCurveTo(283.8, 317.4, 289.8, 315.4, 290.3, 313.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(379.3, 347.0);
  ctx.bezierCurveTo(378.6, 343.3, 382.1, 345.6, 383.3, 345.0);
  ctx.bezierCurveTo(386.9, 343.3, 388.3, 339.9, 391.3, 338.0);
  ctx.bezierCurveTo(391.3, 336.0, 391.3, 334.0, 391.3, 332.0);
  ctx.bezierCurveTo(399.6, 326.7, 407.7, 321.0, 417.3, 317.0);
  ctx.bezierCurveTo(416.9, 331.6, 398.3, 328.0, 392.3, 337.0);
  ctx.bezierCurveTo(391.9, 339.4, 396.9, 336.4, 395.3, 340.0);
  ctx.bezierCurveTo(392.9, 344.3, 383.1, 350.5, 379.3, 347.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(198.3, 324.0);
  ctx.bezierCurveTo(198.1, 321.8, 201.9, 323.5, 203.3, 323.0);
  ctx.bezierCurveTo(203.5, 325.2, 199.8, 323.5, 198.3, 324.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(336.3, 324.0);
  ctx.bezierCurveTo(334.1, 327.1, 329.9, 322.8, 336.3, 324.0);
  ctx.lineTo(336.3, 324.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(251.3, 328.0);
  ctx.bezierCurveTo(252.2, 326.5, 252.8, 324.8, 255.3, 325.0);
  ctx.bezierCurveTo(254.4, 326.5, 253.8, 328.2, 251.3, 328.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(397.3, 342.0);
  ctx.bezierCurveTo(397.3, 339.6, 395.6, 339.1, 396.3, 336.0);
  ctx.bezierCurveTo(401.6, 333.3, 407.3, 331.0, 413.3, 329.0);
  ctx.bezierCurveTo(411.9, 333.9, 407.8, 336.2, 407.3, 342.0);
  ctx.bezierCurveTo(400.5, 346.5, 390.7, 348.0, 389.3, 358.0);
  ctx.bezierCurveTo(386.0, 360.0, 382.3, 361.7, 379.3, 364.0);
  ctx.bezierCurveTo(377.0, 362.0, 379.0, 355.7, 378.3, 352.0);
  ctx.bezierCurveTo(386.1, 350.1, 390.5, 344.8, 397.3, 342.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(211.3, 343.0);
  ctx.bezierCurveTo(216.4, 354.6, 204.2, 361.1, 195.3, 356.0);
  ctx.bezierCurveTo(193.8, 351.1, 194.5, 344.6, 195.3, 342.0);
  ctx.bezierCurveTo(201.9, 340.0, 205.8, 340.3, 211.3, 343.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(229.3, 342.0);
  ctx.bezierCurveTo(230.9, 343.0, 231.6, 344.7, 230.3, 346.0);
  ctx.bezierCurveTo(229.0, 345.7, 229.5, 343.5, 229.3, 342.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(329.3, 343.0);
  ctx.bezierCurveTo(326.4, 346.8, 325.4, 339.4, 329.3, 343.0);
  ctx.lineTo(329.3, 343.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(428.3, 345.0);
  ctx.bezierCurveTo(428.7, 343.1, 429.6, 345.6, 429.3, 347.0);
  ctx.bezierCurveTo(428.9, 348.9, 428.0, 346.4, 428.3, 345.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 346.0);
  ctx.bezierCurveTo(375.9, 345.7, 376.0, 346.9, 377.3, 347.0);
  ctx.bezierCurveTo(375.9, 352.6, 371.1, 362.7, 375.3, 365.0);
  ctx.bezierCurveTo(367.9, 363.5, 375.4, 351.0, 374.3, 346.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(188.3, 365.0);
  ctx.bezierCurveTo(182.1, 368.9, 183.0, 356.7, 176.3, 361.0);
  ctx.bezierCurveTo(175.2, 357.3, 178.8, 358.1, 178.3, 355.0);
  ctx.bezierCurveTo(181.9, 358.1, 185.7, 361.0, 188.3, 365.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(376.3, 359.0);
  ctx.bezierCurveTo(377.0, 356.2, 377.5, 361.3, 377.3, 362.0);
  ctx.bezierCurveTo(376.9, 364.0, 375.4, 362.8, 376.3, 359.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(437.3, 382.0);
  ctx.bezierCurveTo(427.4, 386.4, 416.5, 389.8, 412.3, 400.0);
  ctx.bezierCurveTo(403.1, 398.2, 411.2, 381.7, 407.3, 373.0);
  ctx.bezierCurveTo(414.7, 370.9, 425.8, 360.4, 432.3, 367.0);
  ctx.bezierCurveTo(434.0, 366.0, 433.0, 362.4, 435.3, 362.0);
  ctx.bezierCurveTo(440.4, 367.3, 441.6, 376.2, 444.3, 386.0);
  ctx.bezierCurveTo(440.7, 386.0, 439.8, 383.2, 437.3, 382.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(197.3, 369.0);
  ctx.bezierCurveTo(193.8, 369.5, 194.9, 365.5, 191.3, 366.0);
  ctx.bezierCurveTo(192.4, 362.0, 196.8, 366.4, 197.3, 369.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(188.3, 365.0);
  ctx.bezierCurveTo(192.4, 366.3, 195.1, 368.9, 197.3, 372.0);
  ctx.bezierCurveTo(194.5, 373.8, 191.9, 368.6, 186.3, 370.0);
  ctx.bezierCurveTo(186.2, 367.5, 187.9, 366.9, 188.3, 365.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(445.3, 397.0);
  ctx.bezierCurveTo(443.0, 397.5, 435.2, 401.5, 435.3, 398.0);
  ctx.bezierCurveTo(429.5, 401.8, 422.3, 404.3, 418.3, 410.0);
  ctx.bezierCurveTo(415.9, 408.1, 414.1, 405.6, 413.3, 402.0);
  ctx.bezierCurveTo(418.8, 392.6, 429.9, 381.1, 444.3, 387.0);
  ctx.bezierCurveTo(442.6, 389.2, 442.7, 396.0, 445.3, 397.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(446.3, 392.0);
  ctx.bezierCurveTo(446.7, 390.1, 447.6, 392.6, 447.3, 394.0);
  ctx.bezierCurveTo(446.9, 395.9, 446.0, 393.4, 446.3, 392.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(321.3, 441.0);
  ctx.bezierCurveTo(315.6, 438.1, 309.2, 435.8, 301.3, 435.0);
  ctx.bezierCurveTo(303.6, 427.3, 310.1, 423.8, 315.3, 419.0);
  ctx.bezierCurveTo(316.5, 418.8, 317.1, 419.2, 317.3, 420.0);
  ctx.bezierCurveTo(316.7, 429.0, 320.7, 433.3, 321.3, 441.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(453.3, 421.0);
  ctx.bezierCurveTo(458.6, 422.6, 463.5, 429.2, 460.3, 436.0);
  ctx.bezierCurveTo(454.1, 434.1, 449.1, 427.7, 453.3, 421.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(331.3, 423.0);
  ctx.bezierCurveTo(333.3, 421.4, 331.9, 431.7, 332.3, 435.0);
  ctx.bezierCurveTo(330.3, 436.6, 331.8, 426.3, 331.3, 423.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(466.3, 434.0);
  ctx.bezierCurveTo(468.2, 431.6, 467.0, 440.6, 467.3, 443.0);
  ctx.bezierCurveTo(465.5, 445.4, 466.6, 436.4, 466.3, 434.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(404.3, 446.0);
  ctx.bezierCurveTo(405.2, 443.6, 408.3, 443.4, 411.3, 443.0);
  ctx.bezierCurveTo(410.0, 445.0, 406.9, 445.2, 404.3, 446.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(457.3, 462.0);
  ctx.bezierCurveTo(454.9, 465.3, 452.5, 459.2, 457.3, 462.0);
  ctx.lineTo(457.3, 462.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(279.3, 473.0);
  ctx.bezierCurveTo(282.0, 474.2, 279.3, 478.2, 279.3, 480.0);
  ctx.bezierCurveTo(276.3, 478.5, 280.1, 475.6, 279.3, 473.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 482.0);
  ctx.bezierCurveTo(374.7, 480.1, 375.6, 482.6, 375.3, 484.0);
  ctx.bezierCurveTo(374.9, 485.9, 374.0, 483.4, 374.3, 482.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(282.3, 483.0);
  ctx.bezierCurveTo(283.2, 482.4, 284.1, 481.8, 284.3, 483.0);
  ctx.bezierCurveTo(295.1, 481.5, 282.0, 487.4, 282.3, 483.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(286.3, 486.0);
  ctx.bezierCurveTo(286.2, 488.2, 283.8, 488.1, 281.3, 488.0);
  ctx.bezierCurveTo(281.5, 485.8, 283.8, 485.9, 286.3, 486.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(305.3, 498.0);
  ctx.bezierCurveTo(301.4, 497.8, 300.1, 500.1, 297.3, 501.0);
  ctx.bezierCurveTo(292.6, 499.4, 289.7, 495.9, 284.3, 495.0);
  ctx.bezierCurveTo(288.4, 482.9, 302.7, 488.1, 305.3, 498.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(433.3, 508.0);
  ctx.bezierCurveTo(432.3, 508.0, 432.5, 506.8, 432.3, 506.0);
  ctx.bezierCurveTo(427.2, 509.1, 430.3, 514.1, 428.3, 520.0);
  ctx.bezierCurveTo(426.8, 519.5, 425.8, 518.5, 424.3, 518.0);
  ctx.bezierCurveTo(423.8, 514.9, 427.4, 515.7, 426.3, 512.0);
  ctx.bezierCurveTo(424.4, 512.4, 425.5, 515.9, 422.3, 515.0);
  ctx.bezierCurveTo(425.4, 506.6, 433.3, 498.1, 441.3, 498.0);
  ctx.bezierCurveTo(440.2, 502.9, 435.2, 503.9, 433.3, 508.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(295.3, 510.0);
  ctx.bezierCurveTo(287.0, 519.8, 285.7, 544.0, 278.3, 558.0);
  ctx.bezierCurveTo(268.5, 550.8, 278.9, 533.2, 277.3, 519.0);
  ctx.bezierCurveTo(279.9, 527.4, 281.9, 505.0, 281.3, 498.0);
  ctx.bezierCurveTo(290.9, 497.1, 292.3, 504.4, 295.3, 510.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(355.3, 506.0);
  ctx.bezierCurveTo(356.2, 505.8, 356.3, 506.4, 356.3, 507.0);
  ctx.bezierCurveTo(354.8, 517.4, 351.2, 532.8, 347.3, 544.0);
  ctx.bezierCurveTo(343.6, 554.8, 339.8, 568.5, 328.3, 570.0);
  ctx.bezierCurveTo(329.1, 548.5, 340.6, 529.8, 343.3, 507.0);
  ctx.bezierCurveTo(347.0, 506.4, 353.3, 508.3, 355.3, 506.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(316.3, 556.0);
  ctx.bezierCurveTo(300.4, 554.4, 313.3, 524.3, 316.3, 514.0);
  ctx.bezierCurveTo(318.1, 520.4, 309.6, 534.7, 310.3, 544.0);
  ctx.bezierCurveTo(310.7, 549.5, 313.7, 551.8, 316.3, 556.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(421.3, 516.0);
  ctx.bezierCurveTo(422.0, 516.0, 422.7, 516.0, 423.3, 516.0);
  ctx.bezierCurveTo(423.3, 516.7, 423.3, 517.3, 423.3, 518.0);
  ctx.bezierCurveTo(422.7, 518.0, 422.0, 518.0, 421.3, 518.0);
  ctx.bezierCurveTo(421.3, 517.3, 421.3, 516.7, 421.3, 516.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(453.3, 543.0);
  ctx.bezierCurveTo(453.7, 541.1, 454.6, 543.6, 454.3, 545.0);
  ctx.bezierCurveTo(453.9, 546.9, 453.0, 544.4, 453.3, 543.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(477.3, 557.0);
  ctx.bezierCurveTo(481.7, 553.3, 481.1, 559.8, 477.3, 557.0);
  ctx.lineTo(477.3, 557.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(277.3, 570.0);
  ctx.bezierCurveTo(277.7, 568.1, 278.6, 570.6, 278.3, 572.0);
  ctx.bezierCurveTo(277.9, 573.9, 277.0, 571.4, 277.3, 570.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(281.3, 570.0);
  ctx.bezierCurveTo(284.4, 572.2, 280.4, 575.6, 281.3, 579.0);
  ctx.bezierCurveTo(278.8, 577.4, 280.9, 572.0, 281.3, 570.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(474.3, 574.0);
  ctx.bezierCurveTo(476.5, 574.1, 474.7, 578.2, 475.3, 580.0);
  ctx.bezierCurveTo(472.6, 580.0, 472.9, 575.3, 474.3, 574.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(334.3, 73.0);
  ctx.bezierCurveTo(343.9, 57.6, 383.1, 55.4, 396.3, 69.0);
  ctx.bezierCurveTo(397.0, 69.7, 396.9, 71.5, 396.3, 71.0);
  ctx.bezierCurveTo(397.4, 72.0, 398.6, 70.8, 399.3, 72.0);
  ctx.bezierCurveTo(407.2, 85.7, 405.7, 111.3, 405.3, 132.0);
  ctx.bezierCurveTo(400.2, 131.6, 399.0, 141.3, 403.3, 142.0);
  ctx.bezierCurveTo(400.8, 144.4, 402.4, 144.6, 402.3, 149.0);
  ctx.bezierCurveTo(406.0, 149.7, 406.2, 146.8, 409.3, 147.0);
  ctx.bezierCurveTo(409.0, 145.6, 406.8, 146.2, 405.3, 146.0);
  ctx.bezierCurveTo(408.5, 146.5, 415.3, 142.2, 420.3, 142.0);
  ctx.bezierCurveTo(424.9, 141.8, 430.2, 145.1, 435.3, 146.0);
  ctx.bezierCurveTo(441.9, 147.1, 448.2, 145.0, 452.3, 149.0);
  ctx.bezierCurveTo(450.2, 150.4, 445.0, 146.3, 440.3, 147.0);
  ctx.bezierCurveTo(444.8, 148.6, 454.7, 156.8, 456.3, 153.0);
  ctx.bezierCurveTo(460.9, 152.5, 469.5, 156.5, 476.3, 157.0);
  ctx.bezierCurveTo(478.6, 142.2, 475.3, 130.2, 466.3, 123.0);
  ctx.bezierCurveTo(465.8, 114.5, 469.3, 110.0, 476.3, 109.0);
  ctx.bezierCurveTo(473.8, 112.5, 470.8, 115.5, 469.3, 120.0);
  ctx.bezierCurveTo(469.5, 122.8, 474.1, 123.2, 471.3, 126.0);
  ctx.bezierCurveTo(477.2, 125.2, 480.2, 121.5, 482.3, 117.0);
  ctx.bezierCurveTo(482.7, 111.9, 478.3, 111.7, 477.3, 108.0);
  ctx.bezierCurveTo(484.6, 109.4, 484.0, 118.6, 489.3, 122.0);
  ctx.bezierCurveTo(496.8, 117.5, 501.3, 110.0, 506.3, 103.0);
  ctx.bezierCurveTo(503.7, 87.9, 508.2, 71.7, 516.3, 64.0);
  ctx.bezierCurveTo(518.3, 64.0, 520.3, 64.0, 522.3, 64.0);
  ctx.bezierCurveTo(528.4, 75.6, 518.4, 87.3, 523.3, 99.0);
  ctx.bezierCurveTo(529.0, 98.0, 530.3, 92.7, 535.3, 91.0);
  ctx.bezierCurveTo(535.3, 88.7, 535.3, 86.3, 535.3, 84.0);
  ctx.bezierCurveTo(541.6, 80.0, 546.6, 74.6, 554.3, 72.0);
  ctx.bezierCurveTo(565.1, 80.3, 545.9, 93.7, 544.3, 100.0);
  ctx.bezierCurveTo(543.9, 101.7, 545.1, 101.9, 546.3, 102.0);
  ctx.bezierCurveTo(546.0, 104.1, 542.6, 102.9, 542.3, 105.0);
  ctx.bezierCurveTo(542.9, 107.0, 547.4, 105.3, 546.3, 109.0);
  ctx.bezierCurveTo(552.5, 106.7, 559.2, 97.1, 567.3, 99.0);
  ctx.bezierCurveTo(568.9, 99.4, 569.4, 103.1, 572.3, 102.0);
  ctx.bezierCurveTo(570.5, 117.9, 546.8, 119.1, 550.3, 134.0);
  ctx.bezierCurveTo(557.0, 135.7, 557.8, 131.5, 562.3, 131.0);
  ctx.bezierCurveTo(562.2, 132.9, 559.0, 131.7, 559.3, 134.0);
  ctx.bezierCurveTo(565.1, 131.2, 576.9, 128.3, 577.3, 138.0);
  ctx.bezierCurveTo(575.6, 136.7, 575.3, 134.0, 573.3, 133.0);
  ctx.bezierCurveTo(565.1, 131.4, 556.5, 142.0, 569.3, 142.0);
  ctx.bezierCurveTo(571.9, 141.2, 572.8, 138.8, 572.3, 135.0);
  ctx.bezierCurveTo(578.3, 136.5, 573.4, 142.9, 571.3, 145.0);
  ctx.bezierCurveTo(566.4, 144.4, 558.2, 147.4, 551.3, 148.0);
  ctx.bezierCurveTo(548.2, 149.6, 548.4, 158.5, 544.3, 156.0);
  ctx.bezierCurveTo(544.8, 156.8, 545.4, 157.6, 545.3, 159.0);
  ctx.bezierCurveTo(538.9, 168.9, 528.3, 173.6, 519.3, 181.0);
  ctx.bezierCurveTo(518.5, 181.6, 518.2, 182.5, 518.3, 184.0);
  ctx.bezierCurveTo(516.0, 183.7, 514.5, 184.2, 513.3, 185.0);
  ctx.bezierCurveTo(514.0, 186.0, 515.6, 186.0, 515.3, 188.0);
  ctx.bezierCurveTo(513.9, 189.6, 512.5, 191.2, 511.3, 193.0);
  ctx.bezierCurveTo(508.9, 214.6, 497.3, 226.9, 489.3, 243.0);
  ctx.bezierCurveTo(483.5, 241.5, 480.3, 249.5, 474.3, 251.0);
  ctx.bezierCurveTo(471.3, 257.4, 459.7, 255.0, 458.3, 263.0);
  ctx.bezierCurveTo(459.5, 262.8, 459.2, 261.2, 459.3, 260.0);
  ctx.bezierCurveTo(459.9, 272.0, 453.2, 282.0, 451.3, 296.0);
  ctx.bezierCurveTo(448.9, 314.4, 438.3, 330.8, 437.3, 347.0);
  ctx.bezierCurveTo(435.0, 347.7, 436.6, 352.2, 432.3, 351.0);
  ctx.bezierCurveTo(431.6, 354.7, 434.0, 355.3, 433.3, 359.0);
  ctx.bezierCurveTo(447.2, 364.8, 446.0, 385.7, 452.3, 399.0);
  ctx.bezierCurveTo(450.6, 398.8, 450.0, 397.3, 450.3, 395.0);
  ctx.bezierCurveTo(446.5, 400.5, 453.7, 403.6, 452.3, 410.0);
  ctx.bezierCurveTo(456.0, 411.2, 457.5, 414.0, 460.3, 417.0);
  ctx.bezierCurveTo(459.9, 416.5, 458.8, 416.5, 458.3, 416.0);
  ctx.bezierCurveTo(461.4, 419.5, 463.2, 421.4, 466.3, 425.0);
  ctx.bezierCurveTo(467.1, 425.8, 469.8, 429.3, 470.3, 432.0);
  ctx.bezierCurveTo(471.4, 437.4, 468.6, 442.0, 469.3, 450.0);
  ctx.bezierCurveTo(469.8, 454.8, 475.2, 470.7, 478.3, 476.0);
  ctx.bezierCurveTo(480.9, 480.5, 485.9, 483.9, 489.3, 487.0);
  ctx.bezierCurveTo(489.0, 492.7, 492.3, 494.7, 492.3, 500.0);
  ctx.bezierCurveTo(491.3, 500.0, 491.5, 498.8, 491.3, 498.0);
  ctx.bezierCurveTo(493.3, 509.1, 503.0, 527.5, 502.3, 536.0);
  ctx.bezierCurveTo(503.3, 536.0, 503.1, 534.8, 503.3, 534.0);
  ctx.bezierCurveTo(502.3, 539.4, 507.7, 548.9, 503.3, 552.0);
  ctx.bezierCurveTo(505.9, 558.1, 508.1, 564.6, 510.3, 571.0);
  ctx.bezierCurveTo(509.1, 560.9, 506.2, 548.4, 504.3, 537.0);
  ctx.bezierCurveTo(510.2, 550.8, 512.6, 568.0, 516.3, 584.0);
  ctx.bezierCurveTo(514.7, 584.0, 513.0, 584.0, 511.3, 584.0);
  ctx.bezierCurveTo(507.3, 568.0, 502.4, 555.5, 497.3, 539.0);
  ctx.bezierCurveTo(497.8, 552.5, 503.2, 569.8, 506.3, 584.0);
  ctx.bezierCurveTo(499.1, 583.5, 499.0, 574.6, 496.3, 570.0);
  ctx.bezierCurveTo(493.0, 564.4, 488.7, 561.7, 485.3, 557.0);
  ctx.bezierCurveTo(488.6, 558.4, 491.1, 560.6, 493.3, 563.0);
  ctx.bezierCurveTo(494.4, 561.8, 492.1, 555.6, 490.3, 554.0);
  ctx.bezierCurveTo(487.8, 537.3, 480.7, 517.3, 473.3, 510.0);
  ctx.bezierCurveTo(471.7, 506.3, 470.3, 502.3, 468.3, 499.0);
  ctx.bezierCurveTo(464.4, 498.7, 461.0, 501.8, 460.3, 497.0);
  ctx.bezierCurveTo(464.5, 497.2, 472.4, 497.6, 470.3, 501.0);
  ctx.bezierCurveTo(471.1, 500.5, 471.9, 500.0, 473.3, 500.0);
  ctx.bezierCurveTo(474.1, 492.9, 460.7, 492.0, 458.3, 497.0);
  ctx.bezierCurveTo(457.1, 496.6, 456.3, 495.7, 456.3, 494.0);
  ctx.bezierCurveTo(455.1, 494.2, 455.5, 495.8, 455.3, 497.0);
  ctx.bezierCurveTo(451.0, 495.0, 450.3, 489.3, 448.3, 485.0);
  ctx.bezierCurveTo(451.0, 485.3, 450.1, 489.2, 452.3, 490.0);
  ctx.bezierCurveTo(452.1, 485.2, 447.0, 476.7, 444.3, 471.0);
  ctx.bezierCurveTo(440.0, 472.1, 443.5, 475.3, 439.3, 472.0);
  ctx.bezierCurveTo(439.2, 473.8, 440.5, 474.1, 440.3, 476.0);
  ctx.bezierCurveTo(439.4, 475.3, 438.8, 474.2, 438.3, 473.0);
  ctx.bezierCurveTo(435.6, 474.6, 433.1, 476.4, 431.3, 479.0);
  ctx.bezierCurveTo(431.4, 484.3, 436.7, 484.3, 437.3, 489.0);
  ctx.bezierCurveTo(433.5, 487.7, 432.8, 486.2, 429.3, 483.0);
  ctx.bezierCurveTo(421.3, 490.3, 416.0, 500.3, 409.3, 509.0);
  ctx.bezierCurveTo(414.7, 518.4, 422.7, 525.5, 427.3, 534.0);
  ctx.bezierCurveTo(428.9, 536.9, 428.0, 536.8, 428.3, 537.0);
  ctx.bezierCurveTo(431.1, 539.5, 433.3, 545.3, 436.3, 550.0);
  ctx.bezierCurveTo(439.5, 555.0, 444.6, 559.7, 444.3, 563.0);
  ctx.bezierCurveTo(445.2, 564.1, 446.6, 562.9, 448.3, 565.0);
  ctx.bezierCurveTo(444.5, 569.0, 444.7, 579.5, 444.3, 584.0);
  ctx.bezierCurveTo(438.2, 582.1, 445.2, 571.3, 444.3, 565.0);
  ctx.bezierCurveTo(441.7, 564.7, 445.3, 570.6, 441.3, 569.0);
  ctx.bezierCurveTo(440.5, 565.2, 442.5, 564.2, 442.3, 561.0);
  ctx.bezierCurveTo(431.0, 544.6, 419.3, 528.7, 409.3, 511.0);
  ctx.bezierCurveTo(405.5, 515.2, 400.6, 522.0, 404.3, 528.0);
  ctx.bezierCurveTo(403.5, 527.8, 403.3, 527.0, 402.3, 527.0);
  ctx.bezierCurveTo(414.0, 536.5, 423.5, 556.3, 433.3, 571.0);
  ctx.bezierCurveTo(433.0, 572.4, 431.6, 571.1, 431.3, 570.0);
  ctx.bezierCurveTo(429.8, 573.2, 436.2, 577.1, 435.3, 583.0);
  ctx.bezierCurveTo(433.3, 584.1, 432.0, 584.4, 430.3, 584.0);
  ctx.bezierCurveTo(425.2, 582.8, 418.0, 570.3, 413.3, 564.0);
  ctx.bezierCurveTo(405.0, 552.7, 401.0, 544.9, 392.3, 538.0);
  ctx.bezierCurveTo(387.5, 527.5, 383.2, 516.5, 377.3, 507.0);
  ctx.bezierCurveTo(378.1, 501.2, 375.1, 499.2, 372.3, 497.0);
  ctx.bezierCurveTo(362.3, 526.9, 354.7, 559.4, 339.3, 584.0);
  ctx.bezierCurveTo(338.3, 584.0, 337.3, 584.0, 336.3, 584.0);
  ctx.bezierCurveTo(334.4, 582.1, 336.2, 578.8, 338.3, 578.0);
  ctx.bezierCurveTo(340.3, 567.3, 349.1, 560.5, 352.3, 550.0);
  ctx.bezierCurveTo(356.7, 535.8, 361.6, 521.4, 366.3, 505.0);
  ctx.bezierCurveTo(365.8, 502.9, 363.3, 506.5, 365.3, 503.0);
  ctx.bezierCurveTo(364.7, 500.0, 363.2, 504.0, 361.3, 503.0);
  ctx.bezierCurveTo(360.0, 508.9, 351.6, 532.3, 348.3, 544.0);
  ctx.bezierCurveTo(344.7, 556.8, 343.0, 570.3, 334.3, 571.0);
  ctx.bezierCurveTo(332.7, 576.0, 334.4, 584.4, 327.3, 584.0);
  ctx.bezierCurveTo(327.1, 578.2, 330.9, 576.3, 332.3, 572.0);
  ctx.bezierCurveTo(332.2, 569.8, 329.8, 573.3, 327.3, 572.0);
  ctx.bezierCurveTo(325.8, 570.5, 325.5, 567.8, 323.3, 567.0);
  ctx.bezierCurveTo(331.4, 549.4, 337.6, 529.9, 341.3, 508.0);
  ctx.bezierCurveTo(335.1, 505.7, 321.0, 504.1, 316.3, 497.0);
  ctx.bezierCurveTo(313.8, 498.8, 314.1, 503.4, 312.3, 506.0);
  ctx.bezierCurveTo(312.2, 509.4, 315.3, 509.7, 317.3, 511.0);
  ctx.bezierCurveTo(319.5, 509.6, 318.7, 505.0, 320.3, 503.0);
  ctx.bezierCurveTo(322.7, 506.2, 320.0, 511.9, 320.3, 514.0);
  ctx.bezierCurveTo(317.7, 515.7, 314.8, 510.7, 311.3, 510.0);
  ctx.bezierCurveTo(304.7, 530.7, 299.6, 552.9, 296.3, 577.0);
  ctx.bezierCurveTo(292.0, 574.5, 291.6, 579.7, 291.3, 584.0);
  ctx.bezierCurveTo(286.0, 584.0, 280.7, 584.0, 275.3, 584.0);
  ctx.bezierCurveTo(273.8, 582.8, 273.8, 580.2, 272.3, 579.0);
  ctx.bezierCurveTo(269.5, 578.8, 273.5, 585.5, 269.3, 584.0);
  ctx.bezierCurveTo(263.9, 584.6, 268.4, 581.3, 268.3, 581.0);
  ctx.bezierCurveTo(267.2, 575.8, 263.0, 572.1, 262.3, 567.0);
  ctx.bezierCurveTo(261.5, 560.9, 264.9, 553.9, 263.3, 546.0);
  ctx.bezierCurveTo(269.3, 554.7, 264.1, 569.0, 274.3, 574.0);
  ctx.bezierCurveTo(274.1, 572.1, 275.4, 566.8, 276.3, 561.0);
  ctx.bezierCurveTo(274.5, 557.4, 270.9, 555.7, 269.3, 552.0);
  ctx.bezierCurveTo(274.5, 536.2, 272.9, 513.6, 276.3, 496.0);
  ctx.bezierCurveTo(272.3, 497.6, 275.7, 493.7, 270.3, 492.0);
  ctx.bezierCurveTo(265.7, 506.2, 269.1, 534.0, 265.3, 546.0);
  ctx.bezierCurveTo(265.5, 525.6, 262.1, 499.0, 270.3, 484.0);
  ctx.bezierCurveTo(271.2, 483.2, 272.6, 482.9, 274.3, 483.0);
  ctx.bezierCurveTo(277.1, 471.7, 284.2, 464.9, 283.3, 450.0);
  ctx.bezierCurveTo(287.3, 451.0, 286.3, 447.0, 290.3, 448.0);
  ctx.bezierCurveTo(289.7, 441.2, 293.6, 437.1, 290.3, 433.0);
  ctx.bezierCurveTo(291.5, 433.8, 293.0, 434.3, 295.3, 434.0);
  ctx.bezierCurveTo(295.3, 428.3, 295.3, 422.7, 295.3, 417.0);
  ctx.bezierCurveTo(302.5, 409.9, 298.1, 391.2, 307.3, 386.0);
  ctx.bezierCurveTo(307.9, 380.8, 307.0, 377.0, 305.3, 374.0);
  ctx.bezierCurveTo(307.4, 366.0, 314.9, 356.5, 310.3, 348.0);
  ctx.bezierCurveTo(314.3, 337.6, 304.5, 328.7, 308.3, 322.0);
  ctx.bezierCurveTo(305.3, 316.3, 304.6, 308.4, 302.3, 302.0);
  ctx.bezierCurveTo(295.4, 303.7, 293.4, 310.4, 292.3, 318.0);
  ctx.bezierCurveTo(283.1, 324.1, 273.0, 329.4, 263.3, 335.0);
  ctx.bezierCurveTo(264.1, 327.7, 277.3, 327.1, 283.3, 321.0);
  ctx.bezierCurveTo(285.1, 319.2, 284.4, 315.7, 287.3, 315.0);
  ctx.bezierCurveTo(283.8, 313.9, 284.3, 319.0, 281.3, 320.0);
  ctx.bezierCurveTo(280.1, 320.4, 283.9, 314.2, 286.3, 313.0);
  ctx.bezierCurveTo(286.8, 312.8, 287.7, 314.5, 288.3, 314.0);
  ctx.bezierCurveTo(291.0, 311.8, 293.1, 309.4, 293.3, 307.0);
  ctx.bezierCurveTo(286.2, 309.5, 284.6, 314.6, 280.3, 318.0);
  ctx.bezierCurveTo(281.9, 316.8, 275.7, 317.1, 277.3, 320.0);
  ctx.bezierCurveTo(275.9, 319.6, 277.4, 319.1, 277.3, 318.0);
  ctx.bezierCurveTo(273.8, 319.2, 275.1, 325.1, 270.3, 325.0);
  ctx.bezierCurveTo(272.1, 322.8, 274.5, 321.2, 275.3, 318.0);
  ctx.bezierCurveTo(265.5, 320.4, 262.0, 327.9, 256.3, 332.0);
  ctx.bezierCurveTo(256.4, 327.7, 254.6, 330.7, 251.3, 333.0);
  ctx.bezierCurveTo(250.0, 333.0, 258.4, 326.3, 260.3, 323.0);
  ctx.bezierCurveTo(253.8, 325.8, 251.3, 332.6, 246.3, 337.0);
  ctx.bezierCurveTo(250.5, 335.2, 256.0, 334.6, 261.3, 334.0);
  ctx.bezierCurveTo(248.0, 336.3, 240.3, 344.3, 231.3, 351.0);
  ctx.bezierCurveTo(232.7, 345.7, 238.5, 344.8, 242.3, 342.0);
  ctx.bezierCurveTo(228.8, 342.8, 223.6, 360.6, 212.3, 367.0);
  ctx.bezierCurveTo(215.3, 370.1, 209.6, 370.2, 210.3, 374.0);
  ctx.bezierCurveTo(210.9, 371.8, 203.7, 370.0, 208.3, 370.0);
  ctx.bezierCurveTo(208.0, 368.6, 205.8, 369.2, 204.3, 369.0);
  ctx.bezierCurveTo(202.1, 368.8, 203.9, 372.5, 203.3, 374.0);
  ctx.bezierCurveTo(203.5, 376.2, 205.8, 372.7, 208.3, 374.0);
  ctx.bezierCurveTo(206.8, 375.2, 205.6, 378.4, 203.3, 376.0);
  ctx.bezierCurveTo(203.5, 378.5, 203.5, 380.8, 202.3, 382.0);
  ctx.bezierCurveTo(204.7, 381.4, 206.9, 380.6, 210.3, 381.0);
  ctx.bezierCurveTo(210.7, 378.6, 208.5, 378.8, 209.3, 376.0);
  ctx.bezierCurveTo(211.9, 377.1, 211.3, 381.4, 211.3, 385.0);
  ctx.bezierCurveTo(208.5, 385.2, 209.0, 382.0, 206.3, 382.0);
  ctx.bezierCurveTo(202.3, 382.7, 201.9, 387.0, 202.3, 392.0);
  ctx.bezierCurveTo(207.4, 393.1, 207.4, 389.1, 209.3, 387.0);
  ctx.bezierCurveTo(210.6, 389.0, 206.8, 394.4, 201.3, 393.0);
  ctx.bezierCurveTo(200.4, 389.1, 201.9, 379.9, 201.3, 373.0);
  ctx.bezierCurveTo(189.9, 373.9, 195.7, 392.0, 182.3, 391.0);
  ctx.bezierCurveTo(175.4, 381.6, 193.4, 366.9, 178.3, 363.0);
  ctx.bezierCurveTo(173.9, 367.7, 163.9, 371.8, 167.3, 381.0);
  ctx.bezierCurveTo(172.0, 381.1, 173.0, 377.3, 175.3, 375.0);
  ctx.bezierCurveTo(175.5, 372.8, 174.5, 371.8, 172.3, 372.0);
  ctx.bezierCurveTo(173.3, 369.7, 177.3, 369.5, 177.3, 373.0);
  ctx.bezierCurveTo(182.3, 372.3, 176.6, 366.1, 178.3, 366.0);
  ctx.bezierCurveTo(185.4, 371.7, 174.1, 381.6, 167.3, 383.0);
  ctx.bezierCurveTo(166.9, 381.8, 166.0, 380.9, 164.3, 381.0);
  ctx.bezierCurveTo(161.9, 367.2, 176.2, 370.2, 174.3, 357.0);
  ctx.bezierCurveTo(169.6, 357.9, 167.6, 361.6, 162.3, 362.0);
  ctx.bezierCurveTo(160.9, 360.4, 158.8, 359.5, 159.3, 356.0);
  ctx.bezierCurveTo(162.9, 355.0, 160.2, 360.5, 163.3, 360.0);
  ctx.bezierCurveTo(166.2, 360.3, 166.4, 357.7, 169.3, 358.0);
  ctx.bezierCurveTo(169.3, 356.0, 169.3, 354.0, 169.3, 352.0);
  ctx.bezierCurveTo(172.5, 351.5, 169.7, 357.0, 173.3, 356.0);
  ctx.bezierCurveTo(174.4, 353.8, 173.1, 355.1, 176.3, 354.0);
  ctx.bezierCurveTo(176.0, 351.7, 175.1, 349.9, 174.3, 348.0);
  ctx.bezierCurveTo(165.8, 352.5, 154.8, 354.5, 152.3, 365.0);
  ctx.bezierCurveTo(154.2, 366.6, 158.1, 364.1, 159.3, 362.0);
  ctx.bezierCurveTo(162.4, 365.1, 153.7, 369.2, 150.3, 366.0);
  ctx.bezierCurveTo(149.3, 354.8, 164.0, 351.2, 173.3, 347.0);
  ctx.bezierCurveTo(173.2, 340.8, 179.2, 337.9, 179.3, 335.0);
  ctx.bezierCurveTo(177.3, 333.0, 173.1, 333.3, 172.3, 330.0);
  ctx.bezierCurveTo(173.3, 326.3, 174.6, 323.0, 179.3, 323.0);
  ctx.bezierCurveTo(178.6, 326.3, 174.7, 326.4, 174.3, 330.0);
  ctx.bezierCurveTo(177.9, 333.8, 184.9, 329.4, 182.3, 324.0);
  ctx.bezierCurveTo(187.6, 323.2, 192.2, 325.4, 184.3, 325.0);
  ctx.bezierCurveTo(184.8, 328.4, 183.9, 330.6, 183.3, 333.0);
  ctx.bezierCurveTo(183.1, 335.2, 186.9, 333.5, 188.3, 334.0);
  ctx.bezierCurveTo(187.7, 335.0, 186.0, 335.0, 186.3, 337.0);
  ctx.bezierCurveTo(189.1, 338.5, 194.1, 335.2, 193.3, 330.0);
  ctx.bezierCurveTo(191.7, 327.4, 190.6, 333.9, 187.3, 333.0);
  ctx.bezierCurveTo(189.0, 331.1, 191.4, 329.8, 190.3, 325.0);
  ctx.bezierCurveTo(191.6, 328.5, 192.9, 327.2, 195.3, 328.0);
  ctx.bezierCurveTo(196.7, 336.1, 188.1, 341.3, 183.3, 337.0);
  ctx.bezierCurveTo(175.8, 340.2, 179.4, 346.9, 178.3, 353.0);
  ctx.bezierCurveTo(182.6, 358.4, 186.8, 363.9, 196.3, 364.0);
  ctx.bezierCurveTo(196.9, 366.1, 198.8, 366.9, 198.3, 370.0);
  ctx.bezierCurveTo(202.2, 370.9, 201.9, 367.6, 204.3, 367.0);
  ctx.bezierCurveTo(204.9, 363.8, 203.6, 362.3, 203.3, 360.0);
  ctx.bezierCurveTo(206.6, 360.1, 205.5, 364.5, 206.3, 367.0);
  ctx.bezierCurveTo(217.7, 364.4, 221.3, 353.9, 227.3, 346.0);
  ctx.bezierCurveTo(226.8, 342.5, 224.6, 340.7, 224.3, 337.0);
  ctx.bezierCurveTo(221.9, 337.6, 219.8, 338.4, 216.3, 338.0);
  ctx.bezierCurveTo(215.7, 332.9, 215.9, 327.1, 211.3, 326.0);
  ctx.bezierCurveTo(216.6, 323.1, 219.3, 331.3, 223.3, 333.0);
  ctx.bezierCurveTo(224.3, 331.3, 219.0, 327.3, 217.3, 325.0);
  ctx.bezierCurveTo(220.9, 324.1, 223.6, 332.7, 227.3, 335.0);
  ctx.bezierCurveTo(228.4, 329.2, 222.8, 328.5, 218.3, 320.0);
  ctx.bezierCurveTo(223.3, 318.1, 224.0, 325.6, 227.3, 322.0);
  ctx.bezierCurveTo(225.4, 326.1, 236.7, 334.5, 233.3, 343.0);
  ctx.bezierCurveTo(242.1, 341.4, 245.3, 334.3, 249.3, 328.0);
  ctx.bezierCurveTo(242.4, 332.0, 243.8, 332.7, 237.3, 335.0);
  ctx.bezierCurveTo(236.6, 338.1, 240.8, 336.2, 239.3, 340.0);
  ctx.bezierCurveTo(237.1, 338.9, 235.7, 337.0, 235.3, 334.0);
  ctx.bezierCurveTo(247.7, 328.9, 253.0, 321.8, 266.3, 319.0);
  ctx.bezierCurveTo(263.1, 322.5, 258.9, 324.9, 256.3, 329.0);
  ctx.bezierCurveTo(264.9, 325.8, 266.7, 318.5, 273.3, 315.0);
  ctx.bezierCurveTo(272.4, 315.5, 274.9, 316.9, 278.3, 315.0);
  ctx.bezierCurveTo(283.5, 312.1, 290.4, 307.2, 294.3, 303.0);
  ctx.bezierCurveTo(291.8, 301.1, 293.9, 300.9, 291.3, 299.0);
  ctx.bezierCurveTo(291.8, 303.1, 287.0, 300.5, 289.3, 300.0);
  ctx.bezierCurveTo(284.1, 301.0, 281.8, 307.9, 275.3, 311.0);
  ctx.bezierCurveTo(273.6, 311.9, 271.5, 314.3, 273.3, 311.0);
  ctx.bezierCurveTo(279.1, 307.5, 284.4, 303.4, 288.3, 298.0);
  ctx.bezierCurveTo(287.9, 296.5, 287.0, 298.4, 285.3, 298.0);
  ctx.bezierCurveTo(287.9, 295.5, 285.1, 293.1, 283.3, 292.0);
  ctx.bezierCurveTo(283.4, 287.3, 285.6, 293.2, 287.3, 293.0);
  ctx.bezierCurveTo(286.4, 285.9, 279.1, 285.2, 277.3, 279.0);
  ctx.bezierCurveTo(265.7, 278.8, 253.8, 284.1, 253.3, 289.0);
  ctx.bezierCurveTo(251.2, 288.6, 249.5, 291.8, 246.3, 293.0);
  ctx.bezierCurveTo(247.1, 293.9, 248.1, 294.5, 249.3, 295.0);
  ctx.bezierCurveTo(244.8, 294.5, 240.6, 300.2, 233.3, 304.0);
  ctx.bezierCurveTo(235.7, 306.3, 239.1, 301.1, 243.3, 302.0);
  ctx.bezierCurveTo(242.5, 299.1, 240.1, 302.6, 238.3, 302.0);
  ctx.bezierCurveTo(238.6, 299.7, 242.7, 301.0, 243.3, 299.0);
  ctx.bezierCurveTo(245.4, 300.6, 242.8, 304.7, 238.3, 305.0);
  ctx.bezierCurveTo(233.8, 311.0, 225.4, 311.6, 222.3, 314.0);
  ctx.bezierCurveTo(221.2, 314.9, 222.3, 316.4, 221.3, 317.0);
  ctx.bezierCurveTo(220.8, 317.3, 220.1, 315.6, 219.3, 316.0);
  ctx.bezierCurveTo(216.9, 317.4, 213.8, 323.7, 209.3, 322.0);
  ctx.bezierCurveTo(209.0, 319.4, 210.7, 318.7, 213.3, 319.0);
  ctx.bezierCurveTo(217.4, 311.7, 227.0, 310.0, 230.3, 302.0);
  ctx.bezierCurveTo(240.1, 297.2, 245.6, 288.0, 255.3, 283.0);
  ctx.bezierCurveTo(256.4, 282.3, 260.5, 279.7, 258.3, 279.0);
  ctx.bezierCurveTo(261.7, 277.4, 266.3, 277.0, 271.3, 277.0);
  ctx.bezierCurveTo(277.7, 273.5, 273.9, 266.4, 274.3, 260.0);
  ctx.bezierCurveTo(274.9, 251.5, 279.5, 243.1, 281.3, 236.0);
  ctx.bezierCurveTo(281.9, 233.8, 279.4, 231.2, 282.3, 230.0);
  ctx.bezierCurveTo(281.2, 227.5, 277.9, 227.1, 274.3, 227.0);
  ctx.bezierCurveTo(271.1, 219.1, 275.9, 214.6, 273.3, 206.0);
  ctx.bezierCurveTo(275.9, 207.1, 276.2, 210.4, 276.3, 214.0);
  ctx.bezierCurveTo(279.8, 217.2, 285.1, 218.6, 289.3, 221.0);
  ctx.bezierCurveTo(288.1, 225.1, 286.4, 228.7, 284.3, 232.0);
  ctx.bezierCurveTo(285.0, 233.3, 286.5, 233.9, 288.3, 234.0);
  ctx.bezierCurveTo(289.5, 227.6, 293.3, 223.6, 293.3, 218.0);
  ctx.bezierCurveTo(293.3, 208.4, 282.5, 201.0, 288.3, 193.0);
  ctx.bezierCurveTo(291.5, 192.8, 292.5, 194.8, 296.3, 194.0);
  ctx.bezierCurveTo(299.2, 195.7, 291.2, 194.8, 289.3, 195.0);
  ctx.bezierCurveTo(285.6, 199.5, 294.4, 205.1, 292.3, 202.0);
  ctx.bezierCurveTo(293.8, 204.3, 294.4, 205.3, 294.3, 209.0);
  ctx.bezierCurveTo(294.7, 206.2, 299.6, 207.9, 300.3, 203.0);
  ctx.bezierCurveTo(301.0, 198.4, 298.8, 193.2, 295.3, 190.0);
  ctx.bezierCurveTo(296.4, 184.1, 298.6, 179.3, 300.3, 174.0);
  ctx.bezierCurveTo(293.5, 176.5, 286.8, 179.1, 280.3, 182.0);
  ctx.bezierCurveTo(279.7, 184.5, 274.6, 193.6, 275.3, 201.0);
  ctx.bezierCurveTo(275.6, 204.1, 276.4, 206.2, 279.3, 208.0);
  ctx.bezierCurveTo(283.0, 210.3, 282.2, 209.7, 282.3, 203.0);
  ctx.bezierCurveTo(284.1, 200.3, 283.0, 208.9, 283.3, 211.0);
  ctx.bezierCurveTo(284.7, 210.7, 284.1, 208.5, 284.3, 207.0);
  ctx.bezierCurveTo(285.2, 206.5, 286.0, 214.6, 288.3, 216.0);
  ctx.bezierCurveTo(280.3, 210.1, 270.0, 206.3, 271.3, 191.0);
  ctx.bezierCurveTo(273.6, 196.1, 273.6, 191.4, 272.3, 188.0);
  ctx.bezierCurveTo(273.3, 188.0, 273.1, 189.2, 273.3, 190.0);
  ctx.bezierCurveTo(275.2, 188.2, 277.0, 186.3, 276.3, 182.0);
  ctx.bezierCurveTo(279.0, 180.7, 281.1, 180.4, 279.3, 177.0);
  ctx.bezierCurveTo(287.6, 170.3, 308.0, 175.6, 315.3, 168.0);
  ctx.bezierCurveTo(315.7, 166.3, 311.6, 168.1, 311.3, 169.0);
  ctx.bezierCurveTo(313.1, 164.1, 330.2, 160.5, 333.3, 157.0);
  ctx.bezierCurveTo(337.5, 155.6, 332.0, 161.4, 328.3, 161.0);
  ctx.bezierCurveTo(328.6, 162.3, 330.3, 162.0, 330.3, 161.0);
  ctx.bezierCurveTo(332.6, 164.8, 333.9, 169.4, 334.3, 175.0);
  ctx.bezierCurveTo(336.2, 175.8, 340.3, 170.4, 343.3, 169.0);
  ctx.bezierCurveTo(334.2, 161.2, 336.0, 142.3, 330.3, 131.0);
  ctx.bezierCurveTo(330.3, 131.3, 332.3, 131.8, 332.3, 132.0);
  ctx.bezierCurveTo(329.8, 117.5, 328.6, 92.4, 331.3, 77.0);
  ctx.bezierCurveTo(334.9, 77.3, 335.0, 74.0, 338.3, 74.0);
  ctx.bezierCurveTo(338.2, 75.9, 335.0, 74.7, 335.3, 77.0);
  ctx.bezierCurveTo(336.6, 79.8, 337.4, 73.8, 340.3, 75.0);
  ctx.bezierCurveTo(333.1, 80.5, 328.8, 110.3, 332.3, 127.0);
  ctx.bezierCurveTo(332.9, 129.6, 334.0, 128.7, 335.3, 131.0);
  ctx.bezierCurveTo(340.5, 139.9, 342.6, 153.6, 346.3, 161.0);
  ctx.bezierCurveTo(351.6, 153.7, 374.8, 156.5, 379.3, 160.0);
  ctx.bezierCurveTo(382.5, 158.5, 381.9, 153.3, 383.3, 150.0);
  ctx.bezierCurveTo(380.4, 148.0, 377.8, 153.3, 376.3, 156.0);
  ctx.bezierCurveTo(375.2, 149.2, 387.0, 146.7, 387.3, 138.0);
  ctx.bezierCurveTo(388.3, 138.0, 388.1, 139.2, 388.3, 140.0);
  ctx.bezierCurveTo(397.6, 134.4, 399.3, 123.4, 392.3, 115.0);
  ctx.bezierCurveTo(392.3, 105.7, 397.0, 92.8, 394.3, 84.0);
  ctx.bezierCurveTo(392.1, 76.6, 385.1, 76.3, 379.3, 73.0);
  ctx.bezierCurveTo(374.7, 80.0, 371.6, 88.7, 369.3, 98.0);
  ctx.bezierCurveTo(365.6, 93.8, 355.4, 97.6, 351.3, 96.0);
  ctx.bezierCurveTo(354.6, 90.8, 348.3, 80.4, 347.3, 73.0);
  ctx.bezierCurveTo(343.4, 72.2, 342.1, 76.7, 339.3, 74.0);
  ctx.bezierCurveTo(341.0, 72.1, 344.5, 71.8, 348.3, 72.0);
  ctx.bezierCurveTo(348.2, 73.8, 349.5, 74.1, 349.3, 76.0);
  ctx.bezierCurveTo(354.9, 73.3, 359.7, 74.3, 365.3, 75.0);
  ctx.bezierCurveTo(370.5, 72.5, 371.3, 65.7, 376.3, 63.0);
  ctx.bezierCurveTo(376.8, 65.5, 371.1, 70.4, 369.3, 74.0);
  ctx.bezierCurveTo(369.5, 75.8, 372.7, 74.6, 373.3, 76.0);
  ctx.bezierCurveTo(378.4, 72.0, 386.0, 70.6, 392.3, 68.0);
  ctx.bezierCurveTo(376.5, 55.4, 347.4, 63.3, 334.3, 73.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(523.3, 105.0);
  ctx.bezierCurveTo(523.3, 102.0, 525.4, 101.1, 526.3, 99.0);
  ctx.bezierCurveTo(523.3, 98.4, 520.6, 103.2, 523.3, 105.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(522.3, 112.0);
  ctx.bezierCurveTo(525.1, 115.6, 528.9, 118.1, 535.3, 118.0);
  ctx.bezierCurveTo(533.3, 113.0, 539.2, 109.9, 540.3, 105.0);
  ctx.bezierCurveTo(537.0, 104.6, 531.5, 101.2, 534.3, 98.0);
  ctx.bezierCurveTo(534.6, 101.8, 538.4, 101.9, 541.3, 103.0);
  ctx.bezierCurveTo(543.2, 99.5, 545.2, 96.2, 547.3, 93.0);
  ctx.bezierCurveTo(542.3, 94.9, 539.9, 92.1, 535.3, 91.0);
  ctx.bezierCurveTo(532.0, 99.0, 525.1, 103.4, 522.3, 112.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(536.3, 125.0);
  ctx.bezierCurveTo(536.2, 116.5, 521.6, 122.4, 520.3, 115.0);
  ctx.bezierCurveTo(513.7, 114.7, 507.9, 113.4, 504.3, 110.0);
  ctx.bezierCurveTo(502.6, 113.0, 500.4, 115.4, 499.3, 119.0);
  ctx.bezierCurveTo(501.2, 120.0, 502.7, 116.0, 503.3, 119.0);
  ctx.bezierCurveTo(497.6, 118.5, 497.7, 122.3, 493.3, 125.0);
  ctx.bezierCurveTo(492.8, 127.9, 498.3, 129.9, 495.3, 132.0);
  ctx.bezierCurveTo(491.6, 130.4, 491.3, 125.4, 488.3, 123.0);
  ctx.bezierCurveTo(483.2, 124.7, 482.9, 132.7, 475.3, 129.0);
  ctx.bezierCurveTo(475.5, 133.1, 478.5, 134.5, 480.3, 137.0);
  ctx.bezierCurveTo(486.9, 137.6, 489.8, 134.5, 492.3, 131.0);
  ctx.bezierCurveTo(492.3, 132.4, 492.8, 133.2, 493.3, 134.0);
  ctx.bezierCurveTo(490.5, 138.2, 486.0, 140.7, 480.3, 142.0);
  ctx.bezierCurveTo(478.5, 151.4, 481.9, 154.8, 481.3, 165.0);
  ctx.bezierCurveTo(486.5, 172.8, 498.0, 174.4, 507.3, 178.0);
  ctx.bezierCurveTo(505.8, 178.2, 503.6, 177.6, 503.3, 179.0);
  ctx.bezierCurveTo(507.7, 178.7, 514.1, 184.0, 515.3, 178.0);
  ctx.bezierCurveTo(514.1, 177.8, 512.5, 178.2, 512.3, 177.0);
  ctx.bezierCurveTo(528.7, 173.7, 535.7, 161.1, 545.3, 151.0);
  ctx.bezierCurveTo(547.8, 152.3, 544.2, 154.7, 546.3, 155.0);
  ctx.bezierCurveTo(546.5, 153.4, 550.2, 150.3, 547.3, 149.0);
  ctx.bezierCurveTo(545.3, 148.6, 543.3, 150.8, 541.3, 153.0);
  ctx.bezierCurveTo(544.3, 149.0, 543.6, 144.9, 540.3, 144.0);
  ctx.bezierCurveTo(542.2, 140.9, 540.7, 134.4, 543.3, 132.0);
  ctx.bezierCurveTo(539.5, 127.9, 537.3, 126.2, 538.3, 123.0);
  ctx.bezierCurveTo(538.1, 124.1, 537.2, 124.6, 536.3, 125.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(566.3, 108.0);
  ctx.bezierCurveTo(565.6, 104.9, 569.1, 106.1, 568.3, 103.0);
  ctx.bezierCurveTo(567.5, 102.8, 567.2, 102.2, 567.3, 101.0);
  ctx.bezierCurveTo(560.7, 100.4, 558.1, 103.8, 554.3, 106.0);
  ctx.bezierCurveTo(554.0, 111.0, 554.1, 115.5, 557.3, 117.0);
  ctx.bezierCurveTo(552.9, 119.9, 552.9, 111.1, 551.3, 108.0);
  ctx.bezierCurveTo(546.7, 110.6, 546.1, 119.0, 547.3, 122.0);
  ctx.bezierCurveTo(544.2, 121.2, 543.3, 114.8, 545.3, 112.0);
  ctx.bezierCurveTo(540.4, 113.0, 539.0, 117.6, 535.3, 120.0);
  ctx.bezierCurveTo(542.0, 122.3, 540.1, 129.9, 546.3, 134.0);
  ctx.bezierCurveTo(549.1, 127.2, 540.5, 126.5, 542.3, 124.0);
  ctx.bezierCurveTo(544.4, 125.2, 545.2, 127.8, 548.3, 128.0);
  ctx.bezierCurveTo(554.5, 119.8, 562.2, 113.2, 566.3, 103.0);
  ctx.bezierCurveTo(567.6, 105.5, 563.4, 107.1, 566.3, 108.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(498.3, 189.0);
  ctx.bezierCurveTo(493.3, 187.4, 488.1, 185.9, 484.3, 183.0);
  ctx.bezierCurveTo(478.8, 177.3, 483.9, 166.9, 477.3, 163.0);
  ctx.bezierCurveTo(471.0, 168.2, 474.0, 183.1, 479.3, 188.0);
  ctx.bezierCurveTo(476.3, 189.0, 477.1, 193.8, 475.3, 196.0);
  ctx.bezierCurveTo(478.7, 196.6, 484.6, 194.7, 486.3, 197.0);
  ctx.bezierCurveTo(482.7, 197.0, 479.0, 197.0, 475.3, 197.0);
  ctx.bezierCurveTo(479.6, 202.4, 473.4, 200.3, 472.3, 205.0);
  ctx.bezierCurveTo(474.1, 205.6, 476.5, 202.1, 477.3, 205.0);
  ctx.bezierCurveTo(472.5, 204.9, 470.7, 207.7, 469.3, 211.0);
  ctx.bezierCurveTo(476.7, 209.7, 485.0, 209.4, 493.3, 209.0);
  ctx.bezierCurveTo(493.3, 210.0, 492.5, 210.2, 492.3, 211.0);
  ctx.bezierCurveTo(498.2, 206.2, 499.5, 196.9, 506.3, 193.0);
  ctx.bezierCurveTo(506.6, 194.8, 501.6, 196.1, 504.3, 197.0);
  ctx.bezierCurveTo(504.6, 195.5, 508.5, 192.7, 509.3, 195.0);
  ctx.bezierCurveTo(505.6, 195.7, 504.3, 199.3, 502.3, 199.0);
  ctx.bezierCurveTo(502.7, 204.1, 495.6, 210.3, 493.3, 216.0);
  ctx.bezierCurveTo(493.2, 214.4, 493.0, 214.1, 491.3, 214.0);
  ctx.bezierCurveTo(482.6, 213.3, 468.3, 216.6, 461.3, 219.0);
  ctx.bezierCurveTo(471.1, 218.7, 483.1, 215.4, 491.3, 217.0);
  ctx.bezierCurveTo(480.4, 219.0, 466.4, 218.1, 458.3, 223.0);
  ctx.bezierCurveTo(461.4, 221.7, 463.9, 226.0, 465.3, 223.0);
  ctx.bezierCurveTo(464.5, 222.8, 463.3, 223.0, 463.3, 222.0);
  ctx.bezierCurveTo(473.0, 222.4, 483.2, 217.9, 491.3, 220.0);
  ctx.bezierCurveTo(478.9, 221.6, 466.3, 223.0, 457.3, 228.0);
  ctx.bezierCurveTo(457.6, 225.3, 461.5, 226.2, 462.3, 224.0);
  ctx.bezierCurveTo(460.6, 223.4, 456.4, 225.2, 456.3, 223.0);
  ctx.bezierCurveTo(458.4, 220.8, 461.8, 221.0, 458.3, 218.0);
  ctx.bezierCurveTo(460.1, 217.1, 463.3, 217.7, 464.3, 216.0);
  ctx.bezierCurveTo(458.0, 214.3, 454.5, 217.1, 452.3, 222.0);
  ctx.bezierCurveTo(453.5, 224.5, 456.3, 225.3, 456.3, 229.0);
  ctx.bezierCurveTo(456.3, 232.4, 454.9, 234.3, 453.3, 236.0);
  ctx.bezierCurveTo(444.4, 236.9, 440.8, 227.2, 441.3, 222.0);
  ctx.bezierCurveTo(443.8, 227.2, 445.8, 232.9, 452.3, 234.0);
  ctx.bezierCurveTo(456.2, 226.3, 449.4, 222.8, 445.3, 220.0);
  ctx.bezierCurveTo(448.3, 221.5, 447.9, 214.8, 446.3, 215.0);
  ctx.bezierCurveTo(445.0, 219.6, 441.3, 215.8, 440.3, 221.0);
  ctx.bezierCurveTo(438.5, 215.1, 437.0, 209.0, 429.3, 209.0);
  ctx.bezierCurveTo(429.3, 208.0, 430.1, 207.8, 430.3, 207.0);
  ctx.bezierCurveTo(423.9, 206.2, 420.5, 208.5, 414.3, 208.0);
  ctx.bezierCurveTo(412.3, 213.0, 416.1, 212.9, 417.3, 217.0);
  ctx.bezierCurveTo(425.4, 217.2, 437.4, 218.9, 437.3, 224.0);
  ctx.bezierCurveTo(435.4, 221.5, 429.7, 219.8, 430.3, 223.0);
  ctx.bezierCurveTo(429.8, 219.2, 422.2, 217.7, 420.3, 221.0);
  ctx.bezierCurveTo(424.2, 222.2, 419.8, 228.0, 421.3, 233.0);
  ctx.bezierCurveTo(423.7, 237.9, 425.1, 239.7, 425.3, 242.0);
  ctx.bezierCurveTo(425.3, 241.5, 423.5, 239.7, 423.3, 240.0);
  ctx.bezierCurveTo(422.3, 242.2, 425.6, 247.5, 422.3, 251.0);
  ctx.bezierCurveTo(421.6, 245.3, 424.0, 236.6, 420.3, 234.0);
  ctx.bezierCurveTo(419.5, 247.4, 421.0, 253.7, 426.3, 264.0);
  ctx.bezierCurveTo(431.6, 264.2, 442.7, 266.6, 442.3, 261.0);
  ctx.bezierCurveTo(440.8, 260.1, 436.4, 253.6, 434.3, 250.0);
  ctx.bezierCurveTo(437.8, 252.9, 437.7, 253.3, 443.3, 254.0);
  ctx.bezierCurveTo(444.5, 249.0, 440.0, 245.2, 439.3, 243.0);
  ctx.bezierCurveTo(440.2, 246.2, 441.9, 240.0, 438.3, 243.0);
  ctx.bezierCurveTo(438.6, 240.9, 438.9, 241.0, 438.3, 240.0);
  ctx.bezierCurveTo(437.4, 238.4, 430.7, 229.7, 436.3, 225.0);
  ctx.bezierCurveTo(437.0, 228.1, 434.6, 227.9, 435.3, 231.0);
  ctx.bezierCurveTo(436.8, 231.0, 437.8, 231.0, 438.3, 232.0);
  ctx.bezierCurveTo(441.4, 237.9, 441.0, 243.0, 446.3, 247.0);
  ctx.bezierCurveTo(448.4, 248.5, 453.7, 250.1, 461.3, 250.0);
  ctx.bezierCurveTo(461.8, 247.1, 457.2, 244.2, 459.3, 243.0);
  ctx.bezierCurveTo(460.5, 245.1, 463.1, 245.9, 463.3, 249.0);
  ctx.bezierCurveTo(468.5, 249.1, 479.6, 248.1, 471.3, 246.0);
  ctx.bezierCurveTo(480.7, 243.2, 493.2, 238.8, 491.3, 228.0);
  ctx.bezierCurveTo(504.9, 221.6, 505.9, 202.6, 512.3, 189.0);
  ctx.bezierCurveTo(510.4, 189.3, 510.3, 187.6, 509.3, 187.0);
  ctx.bezierCurveTo(508.6, 189.0, 506.7, 189.7, 504.3, 190.0);
  ctx.bezierCurveTo(502.1, 187.2, 502.4, 184.9, 503.3, 181.0);
  ctx.bezierCurveTo(497.3, 180.0, 497.6, 178.8, 492.3, 177.0);
  ctx.bezierCurveTo(491.8, 179.9, 496.5, 182.8, 494.3, 184.0);
  ctx.bezierCurveTo(494.5, 182.2, 490.1, 178.6, 492.3, 181.0);
  ctx.bezierCurveTo(492.3, 185.7, 495.6, 187.1, 498.3, 189.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(514.3, 182.0);
  ctx.bezierCurveTo(509.3, 182.6, 501.8, 179.5, 505.3, 185.0);
  ctx.bezierCurveTo(505.7, 183.7, 506.6, 183.0, 508.3, 183.0);
  ctx.bezierCurveTo(507.3, 184.3, 507.3, 186.7, 506.3, 188.0);
  ctx.bezierCurveTo(510.3, 187.3, 511.3, 183.6, 514.3, 182.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(444.3, 213.0);
  ctx.bezierCurveTo(446.9, 209.8, 443.4, 217.1, 445.3, 216.0);
  ctx.bezierCurveTo(446.4, 215.1, 445.6, 212.3, 448.3, 213.0);
  ctx.bezierCurveTo(448.3, 215.3, 448.3, 217.7, 448.3, 220.0);
  ctx.bezierCurveTo(457.1, 219.5, 459.4, 208.2, 468.3, 211.0);
  ctx.bezierCurveTo(469.0, 206.6, 471.3, 204.0, 472.3, 200.0);
  ctx.bezierCurveTo(470.8, 199.8, 468.6, 200.4, 468.3, 199.0);
  ctx.bezierCurveTo(475.3, 200.4, 472.3, 194.4, 474.3, 191.0);
  ctx.bezierCurveTo(476.2, 187.7, 478.5, 189.9, 478.3, 187.0);
  ctx.bezierCurveTo(478.1, 183.9, 470.6, 183.3, 473.3, 179.0);
  ctx.bezierCurveTo(468.5, 182.6, 464.6, 189.9, 463.3, 194.0);
  ctx.bezierCurveTo(457.2, 195.5, 453.5, 199.5, 447.3, 201.0);
  ctx.bezierCurveTo(449.8, 206.1, 443.9, 212.4, 444.3, 213.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(475.3, 497.0);
  ctx.bezierCurveTo(475.1, 494.1, 475.6, 491.9, 477.3, 491.0);
  ctx.bezierCurveTo(478.2, 495.5, 479.4, 499.6, 482.3, 502.0);
  ctx.bezierCurveTo(480.4, 494.6, 476.6, 489.0, 475.3, 481.0);
  ctx.bezierCurveTo(477.1, 481.9, 477.0, 484.7, 479.3, 485.0);
  ctx.bezierCurveTo(478.2, 480.8, 476.9, 476.8, 475.3, 473.0);
  ctx.bezierCurveTo(467.6, 471.3, 454.8, 469.6, 446.3, 472.0);
  ctx.bezierCurveTo(449.5, 477.2, 452.8, 482.1, 454.3, 489.0);
  ctx.bezierCurveTo(462.9, 487.4, 470.4, 482.0, 476.3, 490.0);
  ctx.bezierCurveTo(468.8, 487.8, 456.3, 487.5, 458.3, 496.0);
  ctx.bezierCurveTo(461.5, 490.2, 475.6, 487.4, 475.3, 497.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(425.3, 461.0);
  ctx.bezierCurveTo(419.9, 462.9, 408.7, 471.6, 412.3, 473.0);
  ctx.bezierCurveTo(401.4, 481.5, 394.7, 494.0, 388.3, 507.0);
  ctx.bezierCurveTo(388.1, 506.2, 388.3, 505.0, 387.3, 505.0);
  ctx.bezierCurveTo(387.4, 508.1, 386.9, 510.5, 385.3, 512.0);
  ctx.bezierCurveTo(383.3, 504.8, 388.6, 498.9, 392.3, 493.0);
  ctx.bezierCurveTo(401.5, 478.4, 411.8, 465.6, 424.3, 456.0);
  ctx.bezierCurveTo(424.4, 457.1, 422.9, 457.6, 424.3, 458.0);
  ctx.bezierCurveTo(427.8, 453.5, 437.7, 459.6, 441.3, 457.0);
  ctx.bezierCurveTo(438.5, 454.4, 434.7, 447.6, 432.3, 448.0);
  ctx.bezierCurveTo(433.6, 448.0, 433.6, 450.8, 432.3, 451.0);
  ctx.bezierCurveTo(430.8, 448.0, 429.2, 443.9, 429.3, 442.0);
  ctx.bezierCurveTo(428.6, 443.2, 422.6, 436.9, 420.3, 442.0);
  ctx.bezierCurveTo(421.8, 442.3, 424.6, 446.2, 422.3, 447.0);
  ctx.bezierCurveTo(422.1, 443.8, 417.4, 439.9, 415.3, 442.0);
  ctx.bezierCurveTo(416.5, 442.8, 420.5, 448.6, 420.3, 450.0);
  ctx.bezierCurveTo(415.6, 449.2, 417.3, 447.2, 416.3, 444.0);
  ctx.bezierCurveTo(396.4, 445.3, 389.0, 467.2, 376.3, 479.0);
  ctx.bezierCurveTo(375.2, 483.2, 379.0, 490.7, 375.3, 486.0);
  ctx.bezierCurveTo(376.9, 498.4, 383.1, 506.2, 386.3, 517.0);
  ctx.bezierCurveTo(391.7, 517.7, 393.7, 521.6, 399.3, 522.0);
  ctx.bezierCurveTo(399.6, 520.0, 398.0, 520.0, 397.3, 519.0);
  ctx.bezierCurveTo(398.7, 519.0, 399.5, 519.5, 400.3, 520.0);
  ctx.bezierCurveTo(406.4, 507.8, 411.8, 495.7, 420.3, 486.0);
  ctx.bezierCurveTo(425.3, 480.4, 433.4, 477.7, 436.3, 470.0);
  ctx.bezierCurveTo(431.5, 468.2, 430.8, 462.2, 425.3, 461.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(474.3, 470.0);
  ctx.bezierCurveTo(470.5, 466.2, 469.9, 459.1, 466.3, 455.0);
  ctx.bezierCurveTo(466.1, 455.8, 466.3, 457.0, 465.3, 457.0);
  ctx.bezierCurveTo(464.9, 455.1, 466.7, 451.0, 463.3, 452.0);
  ctx.bezierCurveTo(463.4, 456.0, 465.5, 457.8, 466.3, 461.0);
  ctx.bezierCurveTo(461.4, 465.2, 458.0, 468.5, 451.3, 467.0);
  ctx.bezierCurveTo(447.9, 466.2, 446.8, 461.4, 443.3, 460.0);
  ctx.bezierCurveTo(436.9, 457.4, 430.8, 460.4, 426.3, 460.0);
  ctx.bezierCurveTo(432.4, 461.0, 434.9, 470.7, 439.3, 470.0);
  ctx.bezierCurveTo(438.0, 470.5, 445.1, 467.8, 443.3, 465.0);
  ctx.bezierCurveTo(445.5, 467.8, 455.5, 470.1, 457.3, 467.0);
  ctx.bezierCurveTo(459.1, 470.0, 471.4, 471.0, 474.3, 470.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(411.3, 443.0);
  ctx.bezierCurveTo(408.3, 443.4, 405.2, 443.6, 404.3, 446.0);
  ctx.bezierCurveTo(406.9, 445.2, 410.0, 445.0, 411.3, 443.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(410.3, 506.0);
  ctx.bezierCurveTo(410.8, 504.2, 415.6, 498.1, 413.3, 500.0);
  ctx.bezierCurveTo(412.3, 501.4, 408.4, 505.0, 410.3, 506.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(400.3, 522.0);
  ctx.bezierCurveTo(402.8, 522.4, 404.7, 517.2, 403.3, 517.0);
  ctx.bezierCurveTo(402.4, 518.8, 400.9, 519.9, 400.3, 522.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(423.3, 556.0);
  ctx.bezierCurveTo(418.8, 553.1, 416.4, 542.9, 412.3, 543.0);
  ctx.bezierCurveTo(416.1, 546.5, 419.4, 555.9, 423.3, 556.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(312.3, 310.0);
  ctx.bezierCurveTo(314.2, 310.2, 318.9, 312.6, 320.3, 310.0);
  ctx.bezierCurveTo(312.5, 309.1, 309.8, 303.2, 305.3, 299.0);
  ctx.bezierCurveTo(308.2, 305.3, 305.7, 310.9, 307.3, 318.0);
  ctx.bezierCurveTo(308.7, 318.0, 309.5, 317.5, 310.3, 317.0);
  ctx.bezierCurveTo(311.8, 322.9, 316.5, 330.8, 322.3, 329.0);
  ctx.bezierCurveTo(321.4, 327.9, 318.6, 328.7, 319.3, 326.0);
  ctx.bezierCurveTo(320.3, 326.0, 320.5, 326.8, 321.3, 327.0);
  ctx.bezierCurveTo(321.2, 317.4, 319.6, 315.3, 318.3, 312.0);
  ctx.bezierCurveTo(317.2, 314.3, 313.4, 311.0, 312.3, 310.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(336.3, 329.0);
  ctx.bezierCurveTo(330.4, 329.9, 324.7, 322.2, 322.3, 326.0);
  ctx.bezierCurveTo(336.7, 335.4, 356.4, 326.2, 365.3, 318.0);
  ctx.bezierCurveTo(361.4, 316.9, 365.2, 314.2, 362.3, 312.0);
  ctx.bezierCurveTo(362.8, 309.1, 367.6, 305.3, 365.3, 303.0);
  ctx.bezierCurveTo(363.4, 305.1, 363.7, 309.4, 361.3, 311.0);
  ctx.bezierCurveTo(358.4, 306.3, 362.9, 301.8, 361.3, 298.0);
  ctx.bezierCurveTo(359.4, 300.1, 359.7, 304.4, 357.3, 306.0);
  ctx.bezierCurveTo(356.4, 301.7, 361.7, 298.4, 359.3, 296.0);
  ctx.bezierCurveTo(358.2, 298.4, 359.8, 293.0, 356.3, 293.0);
  ctx.bezierCurveTo(352.3, 300.6, 343.0, 303.0, 335.3, 307.0);
  ctx.bezierCurveTo(342.5, 302.6, 351.1, 295.1, 355.3, 291.0);
  ctx.bezierCurveTo(338.0, 287.3, 318.4, 288.1, 303.3, 289.0);
  ctx.bezierCurveTo(305.9, 296.9, 309.6, 305.7, 319.3, 309.0);
  ctx.bezierCurveTo(319.0, 305.0, 320.6, 299.1, 317.3, 298.0);
  ctx.bezierCurveTo(319.1, 297.1, 320.2, 295.6, 322.3, 295.0);
  ctx.bezierCurveTo(319.6, 296.7, 319.6, 305.0, 321.3, 308.0);
  ctx.bezierCurveTo(325.4, 309.0, 331.0, 306.4, 332.3, 308.0);
  ctx.bezierCurveTo(329.5, 310.2, 322.7, 308.4, 321.3, 312.0);
  ctx.bezierCurveTo(326.0, 313.0, 329.7, 307.7, 333.3, 311.0);
  ctx.bezierCurveTo(329.0, 311.0, 327.7, 314.1, 322.3, 313.0);
  ctx.bezierCurveTo(321.6, 316.4, 326.0, 314.6, 326.3, 317.0);
  ctx.bezierCurveTo(323.9, 317.9, 321.2, 312.5, 321.3, 317.0);
  ctx.bezierCurveTo(323.9, 319.8, 330.2, 318.8, 333.3, 321.0);
  ctx.bezierCurveTo(329.1, 321.8, 324.0, 318.4, 322.3, 320.0);
  ctx.bezierCurveTo(323.2, 324.6, 330.8, 326.3, 336.3, 329.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(367.3, 309.0);
  ctx.bezierCurveTo(368.0, 307.0, 370.8, 304.7, 367.3, 304.0);
  ctx.bezierCurveTo(366.9, 305.8, 365.7, 307.4, 367.3, 309.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(300.3, 286.0);
  ctx.bezierCurveTo(300.3, 294.4, 303.7, 304.6, 306.3, 307.0);
  ctx.bezierCurveTo(303.9, 300.4, 303.1, 292.2, 300.3, 286.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(288.3, 319.0);
  ctx.bezierCurveTo(288.7, 317.3, 293.0, 314.5, 290.3, 313.0);
  ctx.bezierCurveTo(289.8, 315.4, 283.8, 317.4, 288.3, 319.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(294.3, 214.0);
  ctx.bezierCurveTo(294.6, 211.7, 294.1, 210.2, 292.3, 210.0);
  ctx.bezierCurveTo(292.5, 211.9, 293.0, 213.3, 294.3, 214.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(397.3, 88.0);
  ctx.bezierCurveTo(396.1, 87.8, 395.3, 86.4, 395.3, 89.0);
  ctx.bezierCurveTo(395.8, 98.8, 394.3, 108.6, 394.3, 115.0);
  ctx.bezierCurveTo(396.9, 117.4, 397.7, 121.6, 399.3, 125.0);
  ctx.bezierCurveTo(399.3, 126.3, 399.3, 127.7, 399.3, 129.0);
  ctx.bezierCurveTo(399.4, 130.1, 400.6, 129.8, 400.3, 128.0);
  ctx.bezierCurveTo(400.9, 122.2, 398.4, 114.0, 399.3, 108.0);
  ctx.bezierCurveTo(399.7, 105.6, 400.9, 99.7, 403.3, 101.0);
  ctx.bezierCurveTo(401.6, 88.4, 400.7, 74.9, 392.3, 69.0);
  ctx.bezierCurveTo(391.3, 71.0, 387.9, 70.6, 388.3, 74.0);
  ctx.bezierCurveTo(391.9, 78.1, 395.7, 81.9, 397.3, 88.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(509.3, 80.0);
  ctx.bezierCurveTo(512.0, 79.3, 511.3, 82.1, 512.3, 83.0);
  ctx.bezierCurveTo(518.2, 85.1, 520.1, 79.5, 522.3, 81.0);
  ctx.bezierCurveTo(521.3, 74.8, 524.5, 70.5, 522.3, 66.0);
  ctx.bezierCurveTo(513.0, 65.7, 513.5, 75.2, 509.3, 80.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(539.3, 88.0);
  ctx.bezierCurveTo(543.0, 88.9, 544.5, 92.1, 550.3, 91.0);
  ctx.bezierCurveTo(551.3, 85.7, 557.6, 81.3, 554.3, 75.0);
  ctx.bezierCurveTo(546.2, 76.3, 542.5, 81.9, 539.3, 88.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(350.3, 77.0);
  ctx.bezierCurveTo(351.1, 83.9, 352.7, 89.9, 355.3, 95.0);
  ctx.bezierCurveTo(359.7, 95.0, 364.0, 95.0, 368.3, 95.0);
  ctx.bezierCurveTo(368.9, 87.9, 372.6, 84.0, 374.3, 78.0);
  ctx.bezierCurveTo(367.2, 76.7, 356.4, 76.3, 350.3, 77.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(509.3, 93.0);
  ctx.bezierCurveTo(513.3, 92.7, 514.9, 94.8, 519.3, 94.0);
  ctx.bezierCurveTo(521.0, 92.3, 520.1, 88.1, 520.3, 85.0);
  ctx.bezierCurveTo(514.2, 84.6, 510.5, 87.6, 509.3, 82.0);
  ctx.bezierCurveTo(509.3, 85.7, 509.3, 89.3, 509.3, 93.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(537.3, 88.0);
  ctx.bezierCurveTo(536.4, 85.0, 541.6, 83.1, 539.3, 82.0);
  ctx.bezierCurveTo(539.0, 83.8, 534.0, 85.9, 537.3, 88.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(519.3, 96.0);
  ctx.bezierCurveTo(514.2, 96.0, 511.5, 98.0, 508.3, 95.0);
  ctx.bezierCurveTo(508.7, 100.3, 507.9, 104.6, 506.3, 108.0);
  ctx.bezierCurveTo(508.0, 113.3, 524.6, 109.7, 510.3, 110.0);
  ctx.bezierCurveTo(510.5, 107.5, 508.7, 106.9, 508.3, 105.0);
  ctx.bezierCurveTo(510.3, 109.8, 518.2, 105.5, 516.3, 109.0);
  ctx.bezierCurveTo(518.0, 109.0, 519.7, 109.0, 521.3, 109.0);
  ctx.bezierCurveTo(520.7, 105.6, 522.6, 99.7, 520.3, 98.0);
  ctx.bezierCurveTo(520.0, 98.9, 517.6, 102.4, 517.3, 100.0);
  ctx.bezierCurveTo(518.7, 99.3, 519.2, 97.9, 519.3, 96.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(541.3, 112.0);
  ctx.bezierCurveTo(541.6, 109.9, 545.0, 111.1, 545.3, 109.0);
  ctx.bezierCurveTo(543.3, 109.0, 544.0, 106.3, 541.3, 107.0);
  ctx.bezierCurveTo(540.7, 107.6, 539.0, 111.7, 541.3, 112.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(403.3, 124.0);
  ctx.bezierCurveTo(401.9, 118.6, 406.2, 113.6, 403.3, 110.0);
  ctx.bezierCurveTo(401.8, 112.1, 401.8, 128.4, 403.3, 124.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(518.3, 114.0);
  ctx.bezierCurveTo(519.0, 114.0, 519.7, 114.0, 520.3, 114.0);
  ctx.bezierCurveTo(521.4, 112.6, 521.4, 111.6, 519.3, 111.0);
  ctx.bezierCurveTo(519.3, 112.3, 518.0, 112.4, 518.3, 114.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(478.3, 127.0);
  ctx.bezierCurveTo(480.4, 128.0, 489.2, 121.6, 483.3, 118.0);
  ctx.bezierCurveTo(484.1, 122.8, 476.2, 124.1, 478.3, 127.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(379.3, 162.0);
  ctx.bezierCurveTo(377.0, 162.3, 375.5, 161.8, 374.3, 161.0);
  ctx.bezierCurveTo(373.0, 163.0, 372.4, 165.8, 371.3, 168.0);
  ctx.bezierCurveTo(372.6, 170.6, 376.2, 167.1, 376.3, 169.0);
  ctx.bezierCurveTo(375.3, 170.4, 373.7, 171.0, 372.3, 172.0);
  ctx.bezierCurveTo(368.3, 167.2, 352.2, 167.8, 350.3, 174.0);
  ctx.bezierCurveTo(354.4, 179.5, 365.1, 174.4, 372.3, 178.0);
  ctx.bezierCurveTo(376.4, 172.7, 377.6, 164.6, 384.3, 162.0);
  ctx.bezierCurveTo(380.8, 167.5, 376.9, 172.6, 374.3, 179.0);
  ctx.bezierCurveTo(376.7, 179.3, 378.1, 180.6, 381.3, 180.0);
  ctx.bezierCurveTo(383.6, 177.0, 383.5, 171.5, 388.3, 171.0);
  ctx.bezierCurveTo(389.5, 171.5, 390.6, 172.1, 391.3, 173.0);
  ctx.bezierCurveTo(389.8, 176.5, 387.2, 178.9, 387.3, 184.0);
  ctx.bezierCurveTo(393.6, 184.7, 397.2, 188.1, 402.3, 190.0);
  ctx.bezierCurveTo(403.3, 188.0, 404.4, 186.0, 405.3, 184.0);
  ctx.bezierCurveTo(402.7, 182.6, 399.7, 181.7, 399.3, 178.0);
  ctx.bezierCurveTo(400.5, 174.2, 403.1, 171.7, 402.3, 166.0);
  ctx.bezierCurveTo(398.7, 162.2, 394.8, 166.5, 393.3, 166.0);
  ctx.bezierCurveTo(393.6, 164.6, 395.0, 164.3, 395.3, 163.0);
  ctx.bezierCurveTo(391.5, 162.1, 388.7, 160.3, 383.3, 161.0);
  ctx.bezierCurveTo(388.8, 155.1, 393.6, 148.7, 399.3, 143.0);
  ctx.bezierCurveTo(397.1, 142.6, 398.9, 138.1, 398.3, 136.0);
  ctx.bezierCurveTo(390.4, 143.1, 388.2, 155.9, 379.3, 162.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(373.3, 160.0);
  ctx.bezierCurveTo(369.2, 159.5, 358.5, 160.3, 351.3, 160.0);
  ctx.bezierCurveTo(349.3, 164.9, 346.1, 162.7, 343.3, 163.0);
  ctx.bezierCurveTo(342.3, 168.7, 347.1, 168.5, 348.3, 172.0);
  ctx.bezierCurveTo(352.3, 167.9, 363.0, 166.6, 370.3, 169.0);
  ctx.bezierCurveTo(370.6, 165.3, 372.8, 163.5, 373.3, 160.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(553.3, 136.0);
  ctx.bezierCurveTo(551.0, 136.0, 548.7, 136.0, 546.3, 136.0);
  ctx.bezierCurveTo(545.0, 138.9, 545.0, 143.1, 546.3, 146.0);
  ctx.bezierCurveTo(552.3, 146.3, 557.2, 145.6, 561.3, 144.0);
  ctx.bezierCurveTo(560.1, 140.9, 559.8, 136.8, 556.3, 136.0);
  ctx.bezierCurveTo(552.2, 136.5, 554.1, 144.0, 553.3, 145.0);
  ctx.bezierCurveTo(551.3, 142.9, 552.6, 138.4, 553.3, 136.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(338.3, 146.0);
  ctx.bezierCurveTo(339.0, 141.7, 337.2, 139.8, 335.3, 138.0);
  ctx.bezierCurveTo(336.2, 140.8, 336.6, 144.1, 338.3, 146.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(428.3, 146.0);
  ctx.bezierCurveTo(422.3, 149.4, 413.4, 149.7, 410.3, 156.0);
  ctx.bezierCurveTo(407.1, 154.8, 401.4, 158.8, 400.3, 163.0);
  ctx.bezierCurveTo(403.8, 166.5, 407.6, 161.8, 411.3, 160.0);
  ctx.bezierCurveTo(416.5, 157.4, 425.7, 152.8, 430.3, 152.0);
  ctx.bezierCurveTo(435.1, 151.2, 439.8, 153.5, 445.3, 151.0);
  ctx.bezierCurveTo(439.5, 149.5, 434.0, 147.6, 428.3, 146.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(397.3, 161.0);
  ctx.bezierCurveTo(404.6, 154.3, 415.5, 151.1, 424.3, 146.0);
  ctx.bezierCurveTo(413.5, 145.7, 408.8, 148.7, 402.3, 152.0);
  ctx.bezierCurveTo(398.0, 154.2, 393.1, 156.6, 390.3, 160.0);
  ctx.bezierCurveTo(393.6, 159.4, 395.0, 160.7, 397.3, 161.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(397.3, 150.0);
  ctx.bezierCurveTo(397.6, 148.6, 399.0, 148.3, 399.3, 147.0);
  ctx.bezierCurveTo(397.3, 146.1, 394.8, 149.6, 397.3, 150.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(341.3, 158.0);
  ctx.bezierCurveTo(341.1, 156.1, 342.0, 148.1, 340.3, 151.0);
  ctx.bezierCurveTo(340.5, 152.9, 339.6, 160.9, 341.3, 158.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(466.3, 157.0);
  ctx.bezierCurveTo(455.7, 155.2, 435.7, 151.9, 428.3, 161.0);
  ctx.bezierCurveTo(427.3, 157.0, 424.4, 162.1, 423.3, 160.0);
  ctx.bezierCurveTo(424.4, 157.8, 428.2, 158.2, 429.3, 156.0);
  ctx.bezierCurveTo(423.1, 157.6, 407.6, 162.5, 406.3, 167.0);
  ctx.bezierCurveTo(406.3, 167.1, 409.9, 170.5, 404.3, 169.0);
  ctx.bezierCurveTo(403.4, 172.4, 403.0, 176.3, 402.3, 180.0);
  ctx.bezierCurveTo(405.4, 179.3, 404.2, 182.7, 407.3, 182.0);
  ctx.bezierCurveTo(408.5, 172.2, 419.1, 166.4, 424.3, 164.0);
  ctx.bezierCurveTo(421.7, 168.4, 416.1, 169.8, 414.3, 175.0);
  ctx.bezierCurveTo(418.0, 173.8, 423.8, 176.1, 428.3, 177.0);
  ctx.bezierCurveTo(438.9, 172.2, 449.4, 162.1, 463.3, 164.0);
  ctx.bezierCurveTo(454.5, 167.2, 446.5, 169.3, 439.3, 173.0);
  ctx.bezierCurveTo(435.2, 175.1, 428.8, 177.7, 429.3, 183.0);
  ctx.bezierCurveTo(437.5, 180.3, 443.7, 180.3, 453.3, 178.0);
  ctx.bezierCurveTo(454.6, 180.6, 455.0, 179.3, 455.3, 182.0);
  ctx.bezierCurveTo(459.8, 176.8, 463.9, 171.3, 472.3, 170.0);
  ctx.bezierCurveTo(473.3, 167.0, 474.4, 164.0, 475.3, 161.0);
  ctx.bezierCurveTo(470.6, 159.1, 466.7, 160.3, 466.3, 157.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(341.3, 164.0);
  ctx.bezierCurveTo(341.6, 161.7, 341.1, 160.2, 339.3, 160.0);
  ctx.bezierCurveTo(339.5, 161.9, 340.0, 163.3, 341.3, 164.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(313.3, 187.0);
  ctx.bezierCurveTo(315.0, 181.3, 315.3, 174.3, 323.3, 175.0);
  ctx.bezierCurveTo(323.3, 177.7, 323.3, 180.3, 323.3, 183.0);
  ctx.bezierCurveTo(326.5, 183.2, 326.7, 180.3, 330.3, 181.0);
  ctx.bezierCurveTo(332.3, 174.7, 332.0, 163.8, 326.3, 162.0);
  ctx.bezierCurveTo(318.7, 165.9, 308.1, 176.9, 313.3, 187.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(490.3, 181.0);
  ctx.bezierCurveTo(490.0, 180.4, 487.8, 177.2, 490.3, 177.0);
  ctx.bezierCurveTo(490.5, 177.8, 490.3, 179.0, 491.3, 179.0);
  ctx.bezierCurveTo(491.2, 177.1, 490.7, 175.7, 489.3, 175.0);
  ctx.bezierCurveTo(489.1, 175.8, 489.3, 177.0, 488.3, 177.0);
  ctx.bezierCurveTo(488.4, 173.9, 485.3, 168.8, 483.3, 171.0);
  ctx.bezierCurveTo(487.6, 171.7, 487.8, 181.8, 490.3, 181.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(302.3, 200.0);
  ctx.bezierCurveTo(303.5, 195.5, 307.8, 192.3, 309.3, 188.0);
  ctx.bezierCurveTo(309.7, 187.0, 308.1, 186.5, 308.3, 185.0);
  ctx.bezierCurveTo(309.0, 180.7, 313.7, 176.3, 312.3, 172.0);
  ctx.bezierCurveTo(309.3, 173.0, 306.8, 174.4, 303.3, 175.0);
  ctx.bezierCurveTo(298.9, 186.4, 299.4, 186.7, 302.3, 200.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(325.3, 185.0);
  ctx.bezierCurveTo(335.2, 183.6, 341.2, 176.3, 345.3, 172.0);
  ctx.bezierCurveTo(337.1, 171.8, 333.9, 182.5, 325.3, 185.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(341.3, 189.0);
  ctx.bezierCurveTo(351.0, 196.1, 370.0, 188.1, 370.3, 180.0);
  ctx.bezierCurveTo(364.9, 183.8, 361.2, 183.5, 352.3, 183.0);
  ctx.bezierCurveTo(351.3, 178.6, 347.9, 176.7, 346.3, 173.0);
  ctx.bezierCurveTo(346.1, 179.8, 339.4, 180.1, 341.3, 189.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(384.3, 184.0);
  ctx.bezierCurveTo(385.3, 179.6, 387.8, 176.8, 389.3, 173.0);
  ctx.bezierCurveTo(385.6, 173.9, 382.2, 180.5, 384.3, 184.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(487.3, 183.0);
  ctx.bezierCurveTo(486.1, 179.6, 485.2, 175.8, 483.3, 173.0);
  ctx.bezierCurveTo(483.7, 177.3, 483.9, 181.7, 487.3, 183.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(458.3, 181.0);
  ctx.bezierCurveTo(455.6, 186.3, 449.3, 188.0, 447.3, 194.0);
  ctx.bezierCurveTo(446.5, 189.9, 448.9, 188.9, 448.3, 185.0);
  ctx.bezierCurveTo(433.4, 179.9, 420.8, 193.8, 414.3, 206.0);
  ctx.bezierCurveTo(424.7, 205.3, 433.5, 206.1, 439.3, 210.0);
  ctx.bezierCurveTo(444.0, 193.0, 470.2, 192.2, 470.3, 174.0);
  ctx.bezierCurveTo(466.1, 175.5, 462.5, 185.8, 458.3, 181.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(464.3, 176.0);
  ctx.bezierCurveTo(458.0, 183.3, 466.6, 175.8, 464.3, 176.0);
  ctx.lineTo(464.3, 176.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(281.3, 179.0);
  ctx.bezierCurveTo(283.9, 178.2, 287.0, 178.0, 288.3, 176.0);
  ctx.bezierCurveTo(285.8, 176.8, 282.6, 177.0, 281.3, 179.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(317.3, 178.0);
  ctx.bezierCurveTo(319.7, 182.1, 317.7, 185.8, 314.3, 187.0);
  ctx.bezierCurveTo(318.1, 187.1, 321.2, 186.6, 323.3, 185.0);
  ctx.bezierCurveTo(319.4, 185.6, 322.1, 179.5, 321.3, 177.0);
  ctx.bezierCurveTo(319.4, 176.8, 319.1, 178.1, 317.3, 178.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(415.3, 177.0);
  ctx.bezierCurveTo(410.8, 181.1, 406.0, 185.0, 404.3, 192.0);
  ctx.bezierCurveTo(411.6, 190.0, 410.3, 196.6, 415.3, 197.0);
  ctx.bezierCurveTo(417.6, 191.6, 422.2, 188.6, 427.3, 186.0);
  ctx.bezierCurveTo(426.5, 179.8, 420.3, 179.0, 415.3, 177.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(357.3, 193.0);
  ctx.bezierCurveTo(357.7, 196.0, 353.7, 194.7, 353.3, 197.0);
  ctx.bezierCurveTo(341.8, 196.5, 331.2, 196.9, 324.3, 201.0);
  ctx.bezierCurveTo(324.3, 206.7, 324.3, 212.3, 324.3, 218.0);
  ctx.bezierCurveTo(328.1, 217.2, 332.3, 216.7, 337.3, 217.0);
  ctx.bezierCurveTo(338.0, 220.7, 341.0, 222.0, 343.3, 224.0);
  ctx.bezierCurveTo(343.9, 220.5, 339.8, 221.5, 340.3, 218.0);
  ctx.bezierCurveTo(345.3, 221.0, 348.8, 225.5, 350.3, 232.0);
  ctx.bezierCurveTo(350.3, 231.4, 351.1, 230.9, 351.3, 232.0);
  ctx.bezierCurveTo(349.1, 233.3, 349.6, 237.9, 347.3, 234.0);
  ctx.bezierCurveTo(350.0, 237.1, 344.6, 237.9, 347.3, 240.0);
  ctx.bezierCurveTo(347.9, 237.9, 349.2, 236.6, 351.3, 236.0);
  ctx.bezierCurveTo(349.0, 239.3, 345.9, 241.9, 343.3, 245.0);
  ctx.bezierCurveTo(345.8, 244.7, 357.5, 232.8, 352.3, 238.0);
  ctx.bezierCurveTo(347.7, 242.6, 341.8, 249.1, 338.3, 252.0);
  ctx.bezierCurveTo(337.1, 253.0, 333.1, 252.8, 336.3, 255.0);
  ctx.bezierCurveTo(340.3, 251.3, 341.8, 251.2, 347.3, 249.0);
  ctx.bezierCurveTo(340.5, 257.6, 319.7, 262.0, 312.3, 251.0);
  ctx.bezierCurveTo(307.3, 258.0, 312.1, 267.1, 316.3, 271.0);
  ctx.bezierCurveTo(312.8, 268.1, 309.8, 264.8, 307.3, 261.0);
  ctx.bezierCurveTo(307.1, 264.2, 306.6, 267.0, 303.3, 267.0);
  ctx.bezierCurveTo(305.4, 261.8, 307.6, 256.6, 311.3, 253.0);
  ctx.bezierCurveTo(308.5, 248.5, 310.4, 235.9, 309.3, 229.0);
  ctx.bezierCurveTo(309.4, 233.0, 305.5, 242.6, 306.3, 247.0);
  ctx.bezierCurveTo(306.5, 247.8, 308.4, 246.8, 308.3, 249.0);
  ctx.bezierCurveTo(308.3, 251.6, 305.5, 249.9, 309.3, 252.0);
  ctx.bezierCurveTo(303.1, 259.9, 296.3, 270.4, 300.3, 283.0);
  ctx.bezierCurveTo(307.5, 282.5, 316.8, 284.1, 319.3, 279.0);
  ctx.bezierCurveTo(321.0, 284.0, 336.1, 280.6, 343.3, 283.0);
  ctx.bezierCurveTo(346.5, 277.7, 349.0, 270.3, 353.3, 269.0);
  ctx.bezierCurveTo(352.9, 263.5, 343.6, 262.4, 346.3, 257.0);
  ctx.bezierCurveTo(345.1, 254.5, 342.5, 259.0, 341.3, 256.0);
  ctx.bezierCurveTo(348.4, 250.9, 349.7, 263.5, 354.3, 267.0);
  ctx.bezierCurveTo(356.7, 261.9, 363.5, 260.0, 366.3, 253.0);
  ctx.bezierCurveTo(367.3, 250.6, 366.4, 247.8, 367.3, 245.0);
  ctx.bezierCurveTo(370.3, 236.3, 375.5, 229.2, 379.3, 224.0);
  ctx.bezierCurveTo(381.1, 221.6, 378.9, 220.0, 379.3, 219.0);
  ctx.bezierCurveTo(379.4, 218.7, 382.2, 220.9, 381.3, 218.0);
  ctx.bezierCurveTo(380.7, 217.9, 380.1, 217.9, 380.3, 217.0);
  ctx.bezierCurveTo(379.8, 215.2, 379.3, 217.4, 378.3, 218.0);
  ctx.bezierCurveTo(379.6, 214.6, 379.6, 209.9, 377.3, 215.0);
  ctx.bezierCurveTo(376.7, 213.2, 378.5, 209.1, 376.3, 209.0);
  ctx.bezierCurveTo(369.2, 213.2, 363.5, 218.9, 354.3, 221.0);
  ctx.bezierCurveTo(357.2, 215.4, 346.6, 215.6, 343.3, 213.0);
  ctx.bezierCurveTo(341.8, 214.2, 342.1, 217.2, 339.3, 217.0);
  ctx.bezierCurveTo(342.2, 207.8, 350.1, 203.8, 355.3, 197.0);
  ctx.bezierCurveTo(363.1, 195.1, 369.6, 191.9, 378.3, 191.0);
  ctx.bezierCurveTo(377.5, 187.5, 379.4, 186.8, 380.3, 185.0);
  ctx.bezierCurveTo(377.8, 184.9, 376.8, 183.2, 375.3, 182.0);
  ctx.bezierCurveTo(368.0, 184.4, 367.3, 193.3, 357.3, 193.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(321.3, 220.0);
  ctx.bezierCurveTo(321.6, 213.2, 321.9, 206.6, 323.3, 201.0);
  ctx.bezierCurveTo(316.5, 201.5, 313.7, 198.0, 307.3, 198.0);
  ctx.bezierCurveTo(308.2, 195.8, 312.7, 192.1, 310.3, 190.0);
  ctx.bezierCurveTo(301.2, 202.6, 294.9, 217.9, 290.3, 235.0);
  ctx.bezierCurveTo(293.5, 234.3, 292.3, 231.7, 294.3, 232.0);
  ctx.bezierCurveTo(294.4, 224.4, 299.8, 208.1, 304.3, 205.0);
  ctx.bezierCurveTo(298.3, 214.3, 297.1, 228.4, 293.3, 240.0);
  ctx.bezierCurveTo(293.1, 238.5, 293.7, 236.3, 292.3, 236.0);
  ctx.bezierCurveTo(287.3, 245.8, 288.4, 268.0, 293.3, 277.0);
  ctx.bezierCurveTo(293.9, 272.4, 290.3, 266.7, 293.3, 263.0);
  ctx.bezierCurveTo(293.7, 267.3, 293.9, 271.7, 297.3, 273.0);
  ctx.bezierCurveTo(298.4, 264.7, 301.4, 258.4, 306.3, 254.0);
  ctx.bezierCurveTo(303.3, 248.8, 301.5, 220.1, 298.3, 229.0);
  ctx.bezierCurveTo(299.2, 226.2, 298.6, 222.0, 300.3, 220.0);
  ctx.bezierCurveTo(300.3, 221.9, 301.1, 222.1, 302.3, 221.0);
  ctx.bezierCurveTo(300.1, 226.0, 302.5, 230.8, 303.3, 235.0);
  ctx.bezierCurveTo(304.0, 238.3, 303.0, 243.5, 306.3, 244.0);
  ctx.bezierCurveTo(304.7, 230.6, 308.8, 228.4, 312.3, 217.0);
  ctx.bezierCurveTo(312.5, 218.5, 312.0, 220.7, 313.3, 221.0);
  ctx.bezierCurveTo(315.0, 219.0, 316.0, 216.4, 319.3, 216.0);
  ctx.bezierCurveTo(317.5, 220.2, 309.0, 223.0, 312.3, 229.0);
  ctx.bezierCurveTo(313.1, 226.2, 314.6, 223.9, 317.3, 223.0);
  ctx.bezierCurveTo(305.6, 232.3, 311.0, 263.3, 330.3, 256.0);
  ctx.bezierCurveTo(323.5, 255.6, 331.6, 253.4, 333.3, 252.0);
  ctx.bezierCurveTo(339.7, 247.0, 344.9, 234.8, 341.3, 224.0);
  ctx.bezierCurveTo(338.2, 221.3, 328.7, 222.3, 326.3, 222.0);
  ctx.bezierCurveTo(329.6, 219.3, 334.7, 221.5, 337.3, 220.0);
  ctx.bezierCurveTo(332.1, 217.3, 326.9, 218.4, 321.3, 220.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(367.3, 251.0);
  ctx.bezierCurveTo(371.4, 250.4, 372.9, 247.3, 372.3, 242.0);
  ctx.bezierCurveTo(368.6, 243.0, 369.3, 248.4, 367.3, 251.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(403.3, 214.0);
  ctx.bezierCurveTo(399.2, 211.3, 399.6, 199.3, 401.3, 194.0);
  ctx.bezierCurveTo(394.7, 191.7, 390.1, 187.2, 383.3, 185.0);
  ctx.bezierCurveTo(383.0, 187.0, 380.6, 187.0, 380.3, 189.0);
  ctx.bezierCurveTo(383.5, 188.8, 382.3, 193.1, 384.3, 194.0);
  ctx.bezierCurveTo(377.3, 196.5, 371.6, 204.4, 364.3, 201.0);
  ctx.bezierCurveTo(371.4, 199.7, 377.1, 197.1, 381.3, 193.0);
  ctx.bezierCurveTo(374.3, 193.2, 364.1, 198.3, 354.3, 199.0);
  ctx.bezierCurveTo(352.0, 204.4, 347.4, 207.4, 344.3, 212.0);
  ctx.bezierCurveTo(349.9, 213.1, 353.4, 216.3, 358.3, 218.0);
  ctx.bezierCurveTo(364.4, 212.7, 372.3, 209.3, 380.3, 206.0);
  ctx.bezierCurveTo(376.6, 208.7, 381.9, 217.5, 383.3, 218.0);
  ctx.bezierCurveTo(382.9, 223.7, 374.1, 230.0, 372.3, 240.0);
  ctx.bezierCurveTo(372.5, 240.8, 373.2, 241.2, 374.3, 241.0);
  ctx.bezierCurveTo(381.5, 229.5, 393.1, 222.5, 403.3, 214.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(374.3, 243.0);
  ctx.bezierCurveTo(374.5, 244.2, 374.1, 245.8, 375.3, 246.0);
  ctx.bezierCurveTo(387.2, 236.5, 400.4, 226.6, 415.3, 221.0);
  ctx.bezierCurveTo(410.6, 214.7, 409.1, 206.0, 414.3, 199.0);
  ctx.bezierCurveTo(411.0, 196.2, 407.9, 192.8, 402.3, 195.0);
  ctx.bezierCurveTo(404.5, 200.1, 401.6, 210.4, 406.3, 213.0);
  ctx.bezierCurveTo(406.7, 211.7, 407.6, 211.0, 409.3, 211.0);
  ctx.bezierCurveTo(398.4, 222.4, 383.7, 230.1, 374.3, 243.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(352.3, 195.0);
  ctx.bezierCurveTo(347.9, 193.7, 342.4, 193.6, 339.3, 191.0);
  ctx.bezierCurveTo(338.7, 187.6, 340.6, 181.7, 338.3, 180.0);
  ctx.bezierCurveTo(334.0, 184.7, 326.8, 186.5, 326.3, 195.0);
  ctx.bezierCurveTo(324.1, 194.6, 325.9, 190.1, 325.3, 188.0);
  ctx.bezierCurveTo(319.3, 189.6, 312.8, 190.8, 311.3, 197.0);
  ctx.bezierCurveTo(323.1, 202.4, 336.6, 194.3, 352.3, 195.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(361.3, 181.0);
  ctx.bezierCurveTo(359.2, 181.6, 354.7, 179.8, 354.3, 182.0);
  ctx.bezierCurveTo(356.4, 181.4, 360.9, 183.2, 361.3, 181.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(283.3, 226.0);
  ctx.bezierCurveTo(283.3, 223.6, 285.0, 223.1, 284.3, 220.0);
  ctx.bezierCurveTo(281.0, 219.9, 280.5, 217.2, 276.3, 218.0);
  ctx.bezierCurveTo(277.3, 222.0, 276.9, 227.4, 283.3, 226.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(407.3, 229.0);
  ctx.bezierCurveTo(410.6, 234.7, 414.6, 239.8, 418.3, 245.0);
  ctx.bezierCurveTo(419.5, 235.8, 414.9, 232.4, 415.3, 224.0);
  ctx.bezierCurveTo(410.5, 224.5, 407.5, 226.8, 404.3, 229.0);
  ctx.bezierCurveTo(406.9, 229.5, 410.0, 225.5, 411.3, 228.0);
  ctx.bezierCurveTo(409.4, 227.8, 409.1, 229.1, 407.3, 229.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(420.3, 229.0);
  ctx.bezierCurveTo(420.6, 227.6, 419.7, 225.1, 419.3, 227.0);
  ctx.bezierCurveTo(419.0, 228.4, 419.9, 230.9, 420.3, 229.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(404.3, 231.0);
  ctx.bezierCurveTo(395.1, 234.5, 383.2, 240.6, 380.3, 247.0);
  ctx.bezierCurveTo(380.6, 246.1, 384.0, 243.6, 384.3, 246.0);
  ctx.bezierCurveTo(379.8, 248.9, 358.9, 259.1, 359.3, 265.0);
  ctx.bezierCurveTo(359.6, 268.3, 367.5, 270.6, 370.3, 274.0);
  ctx.bezierCurveTo(372.9, 271.2, 376.3, 269.3, 380.3, 268.0);
  ctx.bezierCurveTo(380.5, 260.9, 369.6, 260.3, 371.3, 255.0);
  ctx.bezierCurveTo(375.9, 258.1, 378.7, 262.9, 383.3, 266.0);
  ctx.bezierCurveTo(387.6, 264.3, 393.4, 258.8, 398.3, 261.0);
  ctx.bezierCurveTo(393.9, 263.9, 387.7, 265.0, 384.3, 269.0);
  ctx.bezierCurveTo(390.3, 275.7, 395.9, 282.8, 399.3, 292.0);
  ctx.bezierCurveTo(410.5, 292.4, 421.3, 279.0, 430.3, 287.0);
  ctx.bezierCurveTo(425.8, 264.1, 418.5, 244.2, 404.3, 231.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(382.3, 269.0);
  ctx.bezierCurveTo(379.6, 271.6, 375.1, 272.4, 372.3, 275.0);
  ctx.bezierCurveTo(371.8, 278.1, 375.0, 277.6, 375.3, 280.0);
  ctx.bezierCurveTo(380.0, 280.7, 383.6, 275.0, 386.3, 277.0);
  ctx.bezierCurveTo(384.2, 278.9, 381.5, 280.2, 378.3, 281.0);
  ctx.bezierCurveTo(380.9, 287.7, 385.8, 292.2, 390.3, 297.0);
  ctx.bezierCurveTo(392.0, 294.7, 395.8, 294.4, 398.3, 293.0);
  ctx.bezierCurveTo(394.8, 283.2, 388.7, 275.9, 382.3, 269.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(430.3, 276.0);
  ctx.bezierCurveTo(429.3, 272.0, 429.9, 266.4, 426.3, 265.0);
  ctx.bezierCurveTo(427.0, 269.3, 428.0, 273.4, 430.3, 276.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(286.3, 284.0);
  ctx.bezierCurveTo(287.4, 279.6, 289.5, 281.4, 291.3, 279.0);
  ctx.bezierCurveTo(286.0, 268.1, 287.3, 250.8, 288.3, 236.0);
  ctx.bezierCurveTo(286.0, 236.3, 284.5, 235.8, 283.3, 235.0);
  ctx.bezierCurveTo(276.2, 247.3, 271.9, 276.1, 286.3, 284.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(445.3, 249.0);
  ctx.bezierCurveTo(444.3, 251.7, 443.8, 257.2, 447.3, 258.0);
  ctx.bezierCurveTo(447.9, 255.3, 443.2, 252.9, 446.3, 251.0);
  ctx.bezierCurveTo(446.5, 253.8, 448.2, 255.2, 448.3, 258.0);
  ctx.bezierCurveTo(450.9, 255.4, 456.4, 257.9, 461.3, 256.0);
  ctx.bezierCurveTo(461.5, 254.5, 461.0, 252.3, 462.3, 252.0);
  ctx.bezierCurveTo(462.4, 253.6, 462.2, 255.5, 464.3, 255.0);
  ctx.bezierCurveTo(467.5, 251.2, 454.1, 248.8, 452.3, 253.0);
  ctx.bezierCurveTo(452.3, 251.5, 449.5, 248.0, 448.3, 251.0);
  ctx.bezierCurveTo(449.2, 251.3, 451.7, 254.7, 449.3, 255.0);
  ctx.bezierCurveTo(449.0, 252.0, 447.6, 250.1, 445.3, 249.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(464.3, 252.0);
  ctx.bezierCurveTo(469.8, 254.6, 469.4, 248.5, 464.3, 252.0);
  ctx.lineTo(464.3, 252.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(440.3, 257.0);
  ctx.bezierCurveTo(441.3, 257.0, 441.5, 257.8, 442.3, 258.0);
  ctx.bezierCurveTo(442.5, 257.2, 442.3, 256.0, 443.3, 256.0);
  ctx.bezierCurveTo(443.4, 256.6, 443.5, 257.2, 444.3, 257.0);
  ctx.bezierCurveTo(445.3, 254.0, 442.1, 255.2, 440.3, 255.0);
  ctx.bezierCurveTo(440.3, 255.7, 440.3, 256.3, 440.3, 257.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(438.3, 269.0);
  ctx.bezierCurveTo(440.4, 281.2, 428.8, 286.6, 434.3, 296.0);
  ctx.bezierCurveTo(437.8, 296.1, 441.5, 291.2, 443.3, 293.0);
  ctx.bezierCurveTo(442.0, 298.0, 441.8, 304.2, 439.3, 308.0);
  ctx.bezierCurveTo(439.1, 303.2, 440.6, 300.0, 441.3, 296.0);
  ctx.bezierCurveTo(438.0, 296.3, 436.9, 298.9, 432.3, 298.0);
  ctx.bezierCurveTo(432.0, 303.0, 429.1, 305.5, 428.3, 310.0);
  ctx.bezierCurveTo(434.8, 310.2, 442.9, 308.8, 445.3, 313.0);
  ctx.bezierCurveTo(445.8, 310.4, 449.2, 302.4, 445.3, 307.0);
  ctx.bezierCurveTo(449.0, 292.3, 453.8, 278.8, 458.3, 265.0);
  ctx.bezierCurveTo(458.3, 263.9, 457.0, 264.2, 457.3, 266.0);
  ctx.bezierCurveTo(453.5, 277.8, 446.3, 286.4, 436.3, 292.0);
  ctx.bezierCurveTo(445.2, 283.2, 453.7, 274.1, 457.3, 260.0);
  ctx.bezierCurveTo(453.7, 261.9, 453.9, 266.7, 452.3, 270.0);
  ctx.bezierCurveTo(447.9, 279.0, 439.9, 286.9, 433.3, 290.0);
  ctx.bezierCurveTo(441.1, 283.1, 446.6, 268.6, 449.3, 260.0);
  ctx.bezierCurveTo(446.4, 263.7, 443.4, 267.4, 438.3, 269.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(405.3, 300.0);
  ctx.bezierCurveTo(405.3, 301.5, 417.5, 296.4, 422.3, 298.0);
  ctx.bezierCurveTo(407.7, 301.6, 391.8, 311.6, 378.3, 310.0);
  ctx.bezierCurveTo(378.8, 308.5, 379.3, 308.4, 378.3, 307.0);
  ctx.bezierCurveTo(371.4, 297.3, 357.1, 288.3, 348.3, 279.0);
  ctx.bezierCurveTo(349.2, 284.1, 353.6, 285.7, 357.3, 288.0);
  ctx.bezierCurveTo(363.9, 298.0, 372.9, 305.7, 378.3, 317.0);
  ctx.bezierCurveTo(379.6, 319.4, 382.0, 315.9, 382.3, 318.0);
  ctx.bezierCurveTo(383.3, 319.9, 379.3, 321.3, 382.3, 322.0);
  ctx.bezierCurveTo(393.1, 314.5, 409.0, 312.0, 426.3, 311.0);
  ctx.bezierCurveTo(431.0, 302.6, 432.3, 293.7, 426.3, 286.0);
  ctx.bezierCurveTo(410.7, 287.7, 397.5, 299.1, 386.3, 299.0);
  ctx.bezierCurveTo(386.3, 297.7, 388.1, 298.1, 388.3, 297.0);
  ctx.bezierCurveTo(383.2, 293.1, 380.7, 286.6, 375.3, 283.0);
  ctx.bezierCurveTo(372.6, 284.6, 370.7, 287.0, 367.3, 288.0);
  ctx.bezierCurveTo(366.4, 285.0, 361.3, 286.0, 362.3, 281.0);
  ctx.bezierCurveTo(362.3, 277.3, 365.8, 277.2, 367.3, 275.0);
  ctx.bezierCurveTo(363.2, 273.1, 362.2, 268.1, 357.3, 267.0);
  ctx.bezierCurveTo(355.8, 271.4, 351.6, 273.3, 350.3, 278.0);
  ctx.bezierCurveTo(361.8, 285.2, 368.2, 297.4, 379.3, 305.0);
  ctx.bezierCurveTo(391.3, 300.6, 405.4, 293.1, 417.3, 292.0);
  ctx.bezierCurveTo(413.8, 293.7, 411.7, 297.6, 406.3, 298.0);
  ctx.bezierCurveTo(409.1, 300.4, 401.7, 296.3, 405.3, 300.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(331.3, 338.0);
  ctx.bezierCurveTo(322.4, 334.2, 314.3, 329.7, 309.3, 322.0);
  ctx.bezierCurveTo(309.2, 331.0, 316.7, 338.9, 311.3, 347.0);
  ctx.bezierCurveTo(314.5, 351.3, 316.6, 360.4, 314.3, 367.0);
  ctx.bezierCurveTo(320.2, 374.8, 323.9, 384.8, 328.3, 394.0);
  ctx.bezierCurveTo(340.9, 397.1, 358.9, 394.8, 372.3, 397.0);
  ctx.bezierCurveTo(359.0, 397.0, 344.6, 401.2, 331.3, 398.0);
  ctx.bezierCurveTo(333.1, 397.8, 336.3, 399.0, 335.3, 396.0);
  ctx.bezierCurveTo(331.5, 396.5, 330.4, 394.2, 326.3, 395.0);
  ctx.bezierCurveTo(320.6, 382.8, 310.7, 372.0, 312.3, 358.0);
  ctx.bezierCurveTo(311.1, 363.8, 309.5, 369.2, 307.3, 374.0);
  ctx.bezierCurveTo(308.3, 375.1, 311.0, 374.3, 310.3, 377.0);
  ctx.bezierCurveTo(310.6, 384.0, 308.7, 397.0, 312.3, 405.0);
  ctx.bezierCurveTo(313.1, 402.5, 316.4, 402.5, 318.3, 401.0);
  ctx.bezierCurveTo(315.5, 391.5, 313.6, 381.0, 310.3, 372.0);
  ctx.bezierCurveTo(317.8, 378.2, 315.6, 394.0, 323.3, 400.0);
  ctx.bezierCurveTo(319.1, 402.2, 325.4, 405.8, 325.3, 410.0);
  ctx.bezierCurveTo(328.6, 410.3, 333.3, 413.2, 334.3, 410.0);
  ctx.bezierCurveTo(333.9, 413.1, 336.5, 413.2, 339.3, 413.0);
  ctx.bezierCurveTo(338.2, 408.8, 338.2, 404.4, 340.3, 401.0);
  ctx.bezierCurveTo(340.3, 405.0, 340.3, 409.0, 340.3, 413.0);
  ctx.bezierCurveTo(347.0, 413.4, 363.1, 416.7, 362.3, 410.0);
  ctx.bezierCurveTo(364.4, 410.3, 364.3, 412.7, 365.3, 414.0);
  ctx.bezierCurveTo(364.1, 418.1, 349.6, 414.3, 350.3, 417.0);
  ctx.bezierCurveTo(352.1, 417.6, 356.2, 415.8, 356.3, 418.0);
  ctx.bezierCurveTo(348.2, 418.0, 346.3, 417.9, 340.3, 416.0);
  ctx.bezierCurveTo(339.8, 421.2, 339.9, 426.9, 338.3, 431.0);
  ctx.bezierCurveTo(337.9, 425.2, 338.7, 420.8, 339.3, 416.0);
  ctx.bezierCurveTo(336.9, 415.0, 337.2, 415.7, 333.3, 415.0);
  ctx.bezierCurveTo(332.8, 416.5, 334.5, 420.2, 332.3, 420.0);
  ctx.bezierCurveTo(332.3, 418.0, 332.3, 416.0, 332.3, 414.0);
  ctx.bezierCurveTo(326.1, 414.2, 323.2, 411.1, 320.3, 408.0);
  ctx.bezierCurveTo(319.9, 409.9, 317.5, 409.8, 318.3, 413.0);
  ctx.bezierCurveTo(318.6, 414.9, 320.0, 412.4, 320.3, 414.0);
  ctx.bezierCurveTo(321.0, 429.0, 326.7, 439.0, 330.3, 451.0);
  ctx.bezierCurveTo(332.6, 447.5, 328.7, 444.1, 332.3, 442.0);
  ctx.bezierCurveTo(332.7, 455.3, 331.3, 464.3, 340.3, 469.0);
  ctx.bezierCurveTo(337.9, 478.4, 355.1, 481.2, 364.3, 479.0);
  ctx.bezierCurveTo(367.1, 468.1, 376.1, 455.2, 376.3, 448.0);
  ctx.bezierCurveTo(378.7, 451.3, 382.2, 439.6, 380.3, 442.0);
  ctx.bezierCurveTo(379.1, 443.5, 379.1, 446.1, 377.3, 447.0);
  ctx.bezierCurveTo(378.2, 442.7, 381.3, 438.2, 383.3, 438.0);
  ctx.bezierCurveTo(385.6, 423.3, 398.1, 410.2, 406.3, 398.0);
  ctx.bezierCurveTo(405.2, 391.6, 407.4, 380.9, 406.3, 374.0);
  ctx.bezierCurveTo(401.6, 374.2, 399.4, 377.1, 395.3, 378.0);
  ctx.bezierCurveTo(396.1, 382.1, 393.8, 383.1, 394.3, 387.0);
  ctx.bezierCurveTo(379.0, 395.4, 377.5, 416.7, 362.3, 422.0);
  ctx.bezierCurveTo(367.8, 412.9, 377.5, 402.5, 380.3, 394.0);
  ctx.bezierCurveTo(380.3, 395.0, 378.6, 395.3, 378.3, 394.0);
  ctx.bezierCurveTo(383.3, 391.3, 390.4, 385.5, 389.3, 380.0);
  ctx.bezierCurveTo(386.7, 382.4, 382.6, 383.3, 378.3, 384.0);
  ctx.bezierCurveTo(375.3, 386.9, 375.2, 392.9, 370.3, 394.0);
  ctx.bezierCurveTo(367.7, 388.3, 371.1, 376.6, 368.3, 371.0);
  ctx.bezierCurveTo(360.7, 375.6, 350.5, 380.0, 339.3, 378.0);
  ctx.bezierCurveTo(340.0, 382.7, 343.4, 389.9, 341.3, 394.0);
  ctx.bezierCurveTo(340.8, 388.5, 337.2, 386.1, 338.3, 379.0);
  ctx.bezierCurveTo(334.7, 375.3, 325.7, 377.0, 322.3, 373.0);
  ctx.bezierCurveTo(337.3, 374.9, 355.2, 376.5, 369.3, 369.0);
  ctx.bezierCurveTo(370.5, 360.8, 370.9, 351.9, 373.3, 345.0);
  ctx.bezierCurveTo(370.1, 344.7, 365.3, 354.5, 366.3, 349.0);
  ctx.bezierCurveTo(358.5, 353.8, 342.0, 354.2, 333.3, 355.0);
  ctx.bezierCurveTo(334.1, 355.2, 335.3, 355.0, 335.3, 356.0);
  ctx.bezierCurveTo(331.8, 355.9, 330.9, 354.1, 329.3, 357.0);
  ctx.bezierCurveTo(326.9, 352.2, 327.9, 350.1, 324.3, 347.0);
  ctx.bezierCurveTo(330.0, 346.0, 320.9, 338.9, 325.3, 336.0);
  ctx.bezierCurveTo(324.1, 341.9, 329.6, 341.1, 331.3, 344.0);
  ctx.bezierCurveTo(329.4, 344.4, 327.0, 344.4, 327.3, 347.0);
  ctx.bezierCurveTo(327.6, 348.4, 328.7, 348.9, 328.3, 351.0);
  ctx.bezierCurveTo(341.5, 354.0, 357.0, 351.2, 366.3, 347.0);
  ctx.bezierCurveTo(366.3, 345.2, 367.2, 338.6, 367.3, 338.0);
  ctx.bezierCurveTo(367.2, 339.4, 363.4, 341.9, 363.3, 340.0);
  ctx.bezierCurveTo(363.1, 332.5, 390.0, 322.6, 374.3, 315.0);
  ctx.bezierCurveTo(373.4, 324.5, 361.0, 329.2, 354.3, 332.0);
  ctx.bezierCurveTo(359.6, 327.6, 367.8, 326.1, 370.3, 319.0);
  ctx.bezierCurveTo(359.1, 323.8, 352.2, 332.8, 336.3, 333.0);
  ctx.bezierCurveTo(338.4, 336.3, 323.7, 331.3, 326.3, 334.0);
  ctx.bezierCurveTo(330.4, 332.9, 328.9, 337.4, 331.3, 338.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(329.3, 343.0);
  ctx.bezierCurveTo(325.4, 339.4, 326.4, 346.8, 329.3, 343.0);
  ctx.lineTo(329.3, 343.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(374.3, 333.0);
  ctx.bezierCurveTo(372.9, 333.7, 368.0, 335.9, 370.3, 337.0);
  ctx.bezierCurveTo(375.5, 333.2, 376.2, 331.7, 376.3, 327.0);
  ctx.bezierCurveTo(375.6, 329.2, 371.6, 330.3, 374.3, 333.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(369.3, 340.0);
  ctx.bezierCurveTo(371.9, 339.9, 375.8, 335.9, 374.3, 335.0);
  ctx.bezierCurveTo(372.8, 336.8, 370.1, 337.5, 369.3, 340.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(369.3, 343.0);
  ctx.bezierCurveTo(371.6, 343.2, 375.1, 339.6, 373.3, 339.0);
  ctx.bezierCurveTo(372.4, 340.8, 369.6, 340.7, 369.3, 343.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(448.3, 269.0);
  ctx.bezierCurveTo(448.7, 268.4, 452.6, 263.8, 450.3, 264.0);
  ctx.bezierCurveTo(448.9, 266.9, 446.1, 272.3, 448.3, 269.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(431.3, 278.0);
  ctx.bezierCurveTo(431.3, 280.7, 431.3, 283.3, 431.3, 286.0);
  ctx.bezierCurveTo(435.5, 285.3, 437.6, 272.6, 435.3, 272.0);
  ctx.bezierCurveTo(435.1, 273.5, 435.7, 275.7, 434.3, 276.0);
  ctx.bezierCurveTo(434.0, 272.7, 433.3, 269.7, 431.3, 268.0);
  ctx.bezierCurveTo(428.8, 269.8, 436.5, 282.8, 431.3, 278.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(290.3, 289.0);
  ctx.bezierCurveTo(290.3, 289.7, 290.3, 290.3, 290.3, 291.0);
  ctx.bezierCurveTo(292.4, 294.3, 294.1, 287.1, 295.3, 290.0);
  ctx.bezierCurveTo(294.3, 291.4, 290.4, 295.0, 292.3, 296.0);
  ctx.bezierCurveTo(293.3, 294.7, 294.0, 293.0, 295.3, 292.0);
  ctx.bezierCurveTo(296.2, 294.3, 291.8, 296.3, 294.3, 297.0);
  ctx.bezierCurveTo(295.3, 295.7, 296.0, 294.0, 297.3, 293.0);
  ctx.bezierCurveTo(298.7, 295.3, 294.7, 296.8, 297.3, 297.0);
  ctx.bezierCurveTo(300.5, 295.3, 298.5, 291.1, 298.3, 287.0);
  ctx.bezierCurveTo(298.1, 282.3, 299.3, 273.9, 294.3, 274.0);
  ctx.bezierCurveTo(295.8, 277.2, 294.8, 282.8, 296.3, 286.0);
  ctx.bezierCurveTo(292.4, 285.4, 293.8, 290.1, 291.3, 291.0);
  ctx.bezierCurveTo(290.9, 289.3, 292.8, 288.4, 291.3, 288.0);
  ctx.bezierCurveTo(291.3, 288.6, 291.2, 289.2, 290.3, 289.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(365.3, 282.0);
  ctx.bezierCurveTo(366.4, 282.2, 366.9, 283.1, 367.3, 284.0);
  ctx.bezierCurveTo(370.7, 284.0, 372.6, 282.6, 374.3, 281.0);
  ctx.bezierCurveTo(372.5, 278.0, 365.5, 276.1, 365.3, 282.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(370.3, 315.0);
  ctx.bezierCurveTo(374.0, 316.0, 374.3, 310.1, 371.3, 310.0);
  ctx.bezierCurveTo(370.8, 312.1, 368.5, 313.2, 370.3, 315.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(427.3, 312.0);
  ctx.bezierCurveTo(419.6, 311.2, 406.6, 316.1, 396.3, 318.0);
  ctx.bezierCurveTo(389.6, 319.3, 381.4, 322.9, 379.3, 326.0);
  ctx.bezierCurveTo(378.0, 328.0, 375.4, 340.6, 378.3, 340.0);
  ctx.bezierCurveTo(378.1, 341.4, 376.7, 341.7, 376.3, 343.0);
  ctx.bezierCurveTo(381.5, 340.9, 387.3, 339.3, 390.3, 335.0);
  ctx.bezierCurveTo(387.4, 334.2, 390.9, 331.8, 390.3, 330.0);
  ctx.bezierCurveTo(399.0, 325.0, 407.5, 319.8, 416.3, 315.0);
  ctx.bezierCurveTo(418.5, 314.5, 422.8, 312.6, 423.3, 316.0);
  ctx.bezierCurveTo(422.6, 315.2, 417.4, 313.4, 418.3, 317.0);
  ctx.bezierCurveTo(424.2, 316.4, 422.8, 319.6, 426.3, 317.0);
  ctx.bezierCurveTo(423.8, 316.0, 429.8, 315.3, 429.3, 313.0);
  ctx.bezierCurveTo(427.0, 312.1, 425.0, 316.5, 424.3, 314.0);
  ctx.bezierCurveTo(424.3, 312.3, 427.1, 313.4, 427.3, 312.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(431.3, 314.0);
  ctx.bezierCurveTo(431.3, 312.3, 434.1, 313.4, 434.3, 312.0);
  ctx.bezierCurveTo(432.3, 311.1, 428.1, 312.9, 431.3, 314.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(431.3, 348.0);
  ctx.bezierCurveTo(433.3, 342.8, 435.6, 336.3, 438.3, 330.0);
  ctx.bezierCurveTo(440.4, 325.1, 447.2, 317.3, 441.3, 314.0);
  ctx.bezierCurveTo(438.0, 324.7, 430.2, 336.2, 431.3, 348.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(378.3, 352.0);
  ctx.bezierCurveTo(379.0, 355.7, 377.0, 362.0, 379.3, 364.0);
  ctx.bezierCurveTo(382.3, 361.7, 386.0, 360.0, 389.3, 358.0);
  ctx.bezierCurveTo(390.7, 348.0, 400.5, 346.5, 407.3, 342.0);
  ctx.bezierCurveTo(407.8, 336.2, 411.9, 333.9, 413.3, 329.0);
  ctx.bezierCurveTo(407.3, 331.0, 401.6, 333.3, 396.3, 336.0);
  ctx.bezierCurveTo(395.6, 339.1, 397.3, 339.6, 397.3, 342.0);
  ctx.bezierCurveTo(390.5, 344.8, 386.1, 350.1, 378.3, 352.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(395.3, 340.0);
  ctx.bezierCurveTo(396.9, 336.4, 391.9, 339.4, 392.3, 337.0);
  ctx.bezierCurveTo(398.3, 328.0, 416.9, 331.6, 417.3, 317.0);
  ctx.bezierCurveTo(407.7, 321.0, 399.6, 326.7, 391.3, 332.0);
  ctx.bezierCurveTo(391.3, 334.0, 391.3, 336.0, 391.3, 338.0);
  ctx.bezierCurveTo(388.3, 339.9, 386.9, 343.3, 383.3, 345.0);
  ctx.bezierCurveTo(382.1, 345.6, 378.6, 343.3, 379.3, 347.0);
  ctx.bezierCurveTo(383.1, 350.5, 392.9, 344.3, 395.3, 340.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(427.3, 323.0);
  ctx.bezierCurveTo(426.2, 322.8, 425.8, 321.9, 425.3, 321.0);
  ctx.bezierCurveTo(426.7, 321.0, 427.5, 321.5, 428.3, 322.0);
  ctx.bezierCurveTo(428.1, 320.5, 428.7, 318.3, 427.3, 318.0);
  ctx.bezierCurveTo(425.5, 320.2, 422.0, 320.6, 420.3, 323.0);
  ctx.bezierCurveTo(423.0, 319.9, 428.9, 325.5, 427.3, 323.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(434.3, 319.0);
  ctx.bezierCurveTo(427.2, 324.1, 436.4, 317.5, 434.3, 319.0);
  ctx.lineTo(434.3, 319.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(432.3, 328.0);
  ctx.bezierCurveTo(432.3, 326.2, 437.4, 324.6, 434.3, 323.0);
  ctx.bezierCurveTo(434.5, 325.0, 430.1, 327.3, 432.3, 328.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(414.3, 327.0);
  ctx.bezierCurveTo(415.3, 334.3, 409.9, 335.2, 409.3, 341.0);
  ctx.bezierCurveTo(411.9, 339.7, 415.2, 345.0, 415.3, 345.0);
  ctx.bezierCurveTo(418.3, 344.7, 418.1, 340.3, 418.3, 340.0);
  ctx.bezierCurveTo(418.5, 339.8, 421.3, 339.0, 421.3, 339.0);
  ctx.bezierCurveTo(422.4, 334.4, 420.0, 330.0, 418.3, 326.0);
  ctx.bezierCurveTo(418.9, 326.0, 419.5, 325.2, 418.3, 325.0);
  ctx.bezierCurveTo(417.7, 326.3, 416.2, 326.9, 414.3, 327.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(421.3, 343.0);
  ctx.bezierCurveTo(423.5, 338.4, 428.6, 343.7, 430.3, 342.0);
  ctx.bezierCurveTo(430.4, 335.6, 430.2, 329.5, 426.3, 327.0);
  ctx.bezierCurveTo(423.0, 330.7, 422.8, 335.2, 425.3, 339.0);
  ctx.bezierCurveTo(423.0, 338.8, 419.5, 342.4, 421.3, 343.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(431.3, 329.0);
  ctx.bezierCurveTo(431.9, 330.5, 430.1, 334.2, 432.3, 334.0);
  ctx.bezierCurveTo(431.9, 331.8, 435.4, 328.6, 433.3, 328.0);
  ctx.bezierCurveTo(433.1, 328.8, 432.5, 329.2, 431.3, 329.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(324.3, 330.0);
  ctx.bezierCurveTo(324.8, 330.0, 322.2, 329.2, 324.3, 330.0);
  ctx.lineTo(324.3, 330.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(412.3, 345.0);
  ctx.bezierCurveTo(406.9, 343.4, 397.6, 351.4, 396.3, 354.0);
  ctx.bezierCurveTo(399.3, 351.6, 402.7, 349.8, 406.3, 348.0);
  ctx.bezierCurveTo(406.6, 350.3, 403.4, 349.1, 403.3, 351.0);
  ctx.bezierCurveTo(407.9, 350.6, 411.6, 349.3, 412.3, 345.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(372.3, 368.0);
  ctx.bezierCurveTo(372.3, 370.0, 372.3, 372.0, 372.3, 374.0);
  ctx.bezierCurveTo(378.7, 374.0, 383.8, 367.5, 388.3, 369.0);
  ctx.bezierCurveTo(382.6, 370.9, 378.7, 374.7, 372.3, 376.0);
  ctx.bezierCurveTo(373.7, 381.4, 369.4, 386.4, 372.3, 390.0);
  ctx.bezierCurveTo(373.5, 386.2, 375.7, 383.4, 378.3, 381.0);
  ctx.bezierCurveTo(391.7, 379.0, 400.1, 372.1, 412.3, 369.0);
  ctx.bezierCurveTo(414.4, 363.3, 408.1, 360.6, 410.3, 358.0);
  ctx.bezierCurveTo(412.9, 359.8, 414.4, 362.6, 414.3, 367.0);
  ctx.bezierCurveTo(420.1, 366.8, 421.8, 362.5, 428.3, 363.0);
  ctx.bezierCurveTo(429.2, 359.8, 427.4, 359.2, 426.3, 358.0);
  ctx.bezierCurveTo(426.2, 356.2, 429.6, 345.5, 425.3, 343.0);
  ctx.bezierCurveTo(421.0, 345.4, 417.1, 348.1, 412.3, 350.0);
  ctx.bezierCurveTo(411.5, 353.5, 410.9, 357.3, 407.3, 358.0);
  ctx.bezierCurveTo(407.9, 355.9, 411.5, 351.6, 409.3, 350.0);
  ctx.bezierCurveTo(403.6, 352.3, 396.1, 358.0, 392.3, 359.0);
  ctx.bezierCurveTo(393.2, 358.4, 396.8, 354.9, 394.3, 357.0);
  ctx.bezierCurveTo(387.0, 361.9, 381.7, 367.5, 372.3, 368.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(429.3, 347.0);
  ctx.bezierCurveTo(429.6, 345.6, 428.7, 343.1, 428.3, 345.0);
  ctx.bezierCurveTo(428.0, 346.4, 428.9, 348.9, 429.3, 347.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(375.3, 365.0);
  ctx.bezierCurveTo(371.1, 362.7, 375.9, 352.6, 377.3, 347.0);
  ctx.bezierCurveTo(376.0, 346.9, 375.9, 345.7, 374.3, 346.0);
  ctx.bezierCurveTo(375.4, 351.0, 367.9, 363.5, 375.3, 365.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(377.3, 362.0);
  ctx.bezierCurveTo(377.5, 361.3, 377.0, 356.2, 376.3, 359.0);
  ctx.bezierCurveTo(375.4, 362.8, 376.9, 364.0, 377.3, 362.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(444.3, 387.0);
  ctx.bezierCurveTo(429.9, 381.1, 418.8, 392.6, 413.3, 402.0);
  ctx.bezierCurveTo(414.1, 405.6, 415.9, 408.1, 418.3, 410.0);
  ctx.bezierCurveTo(422.3, 404.3, 429.5, 401.8, 435.3, 398.0);
  ctx.bezierCurveTo(435.2, 401.5, 443.0, 397.5, 445.3, 397.0);
  ctx.bezierCurveTo(442.7, 396.0, 442.6, 389.2, 444.3, 387.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(444.3, 386.0);
  ctx.bezierCurveTo(441.6, 376.2, 440.4, 367.3, 435.3, 362.0);
  ctx.bezierCurveTo(433.0, 362.4, 434.0, 366.0, 432.3, 367.0);
  ctx.bezierCurveTo(425.8, 360.4, 414.7, 370.9, 407.3, 373.0);
  ctx.bezierCurveTo(411.2, 381.7, 403.1, 398.2, 412.3, 400.0);
  ctx.bezierCurveTo(416.5, 389.8, 427.4, 386.4, 437.3, 382.0);
  ctx.bezierCurveTo(439.8, 383.2, 440.7, 386.0, 444.3, 386.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(299.3, 433.0);
  ctx.bezierCurveTo(303.1, 423.4, 313.4, 420.4, 315.3, 409.0);
  ctx.bezierCurveTo(313.8, 406.6, 311.1, 408.0, 310.3, 407.0);
  ctx.bezierCurveTo(306.4, 404.3, 310.5, 393.5, 306.3, 391.0);
  ctx.bezierCurveTo(302.6, 398.0, 300.1, 411.5, 300.3, 419.0);
  ctx.bezierCurveTo(300.5, 418.2, 300.3, 417.0, 301.3, 417.0);
  ctx.bezierCurveTo(299.9, 421.0, 297.5, 429.2, 299.3, 433.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(447.3, 394.0);
  ctx.bezierCurveTo(447.6, 392.6, 446.7, 390.1, 446.3, 392.0);
  ctx.bezierCurveTo(446.0, 393.4, 446.9, 395.9, 447.3, 394.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(425.3, 433.0);
  ctx.bezierCurveTo(423.0, 432.7, 421.6, 433.2, 421.3, 435.0);
  ctx.bezierCurveTo(423.9, 434.9, 426.1, 434.4, 427.3, 433.0);
  ctx.bezierCurveTo(420.2, 430.1, 429.2, 429.4, 428.3, 431.0);
  ctx.bezierCurveTo(431.8, 425.0, 426.1, 412.5, 436.3, 409.0);
  ctx.bezierCurveTo(441.0, 407.4, 441.4, 410.7, 449.3, 409.0);
  ctx.bezierCurveTo(449.6, 403.7, 444.6, 403.7, 443.3, 400.0);
  ctx.bezierCurveTo(426.4, 401.1, 419.8, 412.5, 419.3, 430.0);
  ctx.bezierCurveTo(420.4, 431.9, 423.9, 431.4, 425.3, 433.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(417.3, 432.0);
  ctx.bezierCurveTo(412.2, 423.8, 420.9, 408.5, 411.3, 408.0);
  ctx.bezierCurveTo(409.9, 405.8, 410.6, 401.4, 407.3, 401.0);
  ctx.bezierCurveTo(407.7, 406.3, 403.3, 400.5, 404.3, 406.0);
  ctx.bezierCurveTo(401.4, 407.4, 400.3, 410.6, 397.3, 412.0);
  ctx.bezierCurveTo(393.5, 425.2, 383.3, 437.3, 381.3, 449.0);
  ctx.bezierCurveTo(382.6, 447.3, 383.4, 445.1, 386.3, 445.0);
  ctx.bezierCurveTo(383.9, 450.4, 377.1, 456.2, 378.3, 462.0);
  ctx.bezierCurveTo(376.9, 461.6, 376.6, 460.8, 375.3, 462.0);
  ctx.bezierCurveTo(377.5, 464.7, 369.4, 468.7, 372.3, 474.0);
  ctx.bezierCurveTo(374.0, 472.1, 374.5, 468.5, 376.3, 472.0);
  ctx.bezierCurveTo(384.6, 459.1, 383.4, 456.9, 394.3, 445.0);
  ctx.bezierCurveTo(395.3, 448.2, 402.7, 441.7, 405.3, 440.0);
  ctx.bezierCurveTo(399.2, 440.0, 394.4, 446.4, 389.3, 444.0);
  ctx.bezierCurveTo(398.5, 439.8, 409.3, 437.3, 417.3, 432.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(451.3, 415.0);
  ctx.bezierCurveTo(450.5, 413.9, 451.2, 411.3, 449.3, 411.0);
  ctx.bezierCurveTo(446.1, 414.4, 443.9, 409.7, 437.3, 411.0);
  ctx.bezierCurveTo(425.4, 423.9, 435.1, 448.6, 452.3, 450.0);
  ctx.bezierCurveTo(452.1, 445.9, 444.0, 441.0, 440.3, 437.0);
  ctx.bezierCurveTo(438.0, 430.4, 437.8, 420.7, 441.3, 415.0);
  ctx.bezierCurveTo(441.1, 419.2, 442.9, 415.0, 444.3, 415.0);
  ctx.bezierCurveTo(439.1, 430.4, 449.3, 449.4, 463.3, 449.0);
  ctx.bezierCurveTo(466.7, 446.7, 465.9, 438.3, 464.3, 433.0);
  ctx.bezierCurveTo(460.3, 450.9, 440.3, 425.4, 450.3, 419.0);
  ctx.bezierCurveTo(461.7, 421.1, 455.0, 419.9, 451.3, 415.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(316.3, 417.0);
  ctx.bezierCurveTo(313.7, 417.1, 309.8, 421.1, 311.3, 422.0);
  ctx.bezierCurveTo(312.0, 419.4, 315.9, 419.9, 316.3, 417.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(317.3, 420.0);
  ctx.bezierCurveTo(317.1, 419.2, 316.5, 418.8, 315.3, 419.0);
  ctx.bezierCurveTo(310.1, 423.8, 303.6, 427.3, 301.3, 435.0);
  ctx.bezierCurveTo(309.2, 435.8, 315.6, 438.1, 321.3, 441.0);
  ctx.bezierCurveTo(320.7, 433.3, 316.7, 429.0, 317.3, 420.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(460.3, 436.0);
  ctx.bezierCurveTo(463.5, 429.2, 458.6, 422.6, 453.3, 421.0);
  ctx.bezierCurveTo(449.1, 427.7, 454.1, 434.1, 460.3, 436.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(467.3, 443.0);
  ctx.bezierCurveTo(467.0, 440.6, 468.2, 431.6, 466.3, 434.0);
  ctx.bezierCurveTo(466.6, 436.4, 465.5, 445.4, 467.3, 443.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(413.3, 438.0);
  ctx.bezierCurveTo(414.6, 436.6, 418.2, 437.6, 418.3, 435.0);
  ctx.bezierCurveTo(416.5, 435.3, 411.3, 437.2, 413.3, 438.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(433.3, 440.0);
  ctx.bezierCurveTo(431.8, 438.4, 428.1, 436.5, 428.3, 441.0);
  ctx.bezierCurveTo(430.2, 441.2, 430.5, 439.9, 432.3, 440.0);
  ctx.bezierCurveTo(432.3, 440.6, 433.1, 441.1, 433.3, 440.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(299.3, 442.0);
  ctx.bezierCurveTo(292.2, 439.9, 291.9, 449.6, 291.3, 455.0);
  ctx.bezierCurveTo(296.8, 455.8, 296.8, 456.3, 300.3, 459.0);
  ctx.bezierCurveTo(307.8, 464.9, 321.0, 471.5, 326.3, 478.0);
  ctx.bezierCurveTo(328.5, 480.6, 328.5, 484.4, 330.3, 487.0);
  ctx.bezierCurveTo(332.3, 490.0, 340.5, 499.6, 342.3, 501.0);
  ctx.bezierCurveTo(351.2, 507.6, 358.8, 496.5, 365.3, 500.0);
  ctx.bezierCurveTo(368.0, 496.2, 366.2, 493.7, 366.3, 488.0);
  ctx.bezierCurveTo(360.9, 482.6, 350.8, 486.1, 344.3, 483.0);
  ctx.bezierCurveTo(338.5, 480.2, 336.7, 473.8, 334.3, 468.0);
  ctx.bezierCurveTo(321.4, 459.9, 312.1, 442.8, 297.3, 440.0);
  ctx.bezierCurveTo(298.4, 440.2, 298.9, 441.1, 299.3, 442.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(319.3, 443.0);
  ctx.bezierCurveTo(312.8, 444.1, 308.8, 437.5, 304.3, 440.0);
  ctx.bezierCurveTo(309.4, 443.9, 316.2, 446.1, 320.3, 451.0);
  ctx.bezierCurveTo(320.5, 450.2, 321.2, 449.8, 322.3, 450.0);
  ctx.bezierCurveTo(321.9, 453.0, 327.2, 463.6, 331.3, 462.0);
  ctx.bezierCurveTo(327.2, 457.5, 326.7, 444.0, 320.3, 445.0);
  ctx.bezierCurveTo(321.1, 445.1, 323.3, 448.3, 321.3, 448.0);
  ctx.bezierCurveTo(319.8, 447.2, 319.9, 444.8, 319.3, 443.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(456.3, 454.0);
  ctx.bezierCurveTo(451.4, 451.7, 444.6, 451.7, 441.3, 452.0);
  ctx.bezierCurveTo(444.4, 452.3, 445.8, 459.4, 448.3, 457.0);
  ctx.bezierCurveTo(447.5, 456.9, 445.3, 453.7, 447.3, 454.0);
  ctx.bezierCurveTo(449.1, 455.6, 452.3, 460.9, 454.3, 459.0);
  ctx.bezierCurveTo(453.7, 458.1, 450.2, 455.3, 452.3, 455.0);
  ctx.bezierCurveTo(451.9, 456.7, 456.0, 454.9, 456.3, 454.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(285.3, 471.0);
  ctx.bezierCurveTo(305.1, 475.9, 311.4, 494.3, 327.3, 503.0);
  ctx.bezierCurveTo(331.3, 502.4, 338.0, 504.3, 340.3, 502.0);
  ctx.bezierCurveTo(327.8, 482.9, 311.7, 467.3, 289.3, 458.0);
  ctx.bezierCurveTo(288.8, 459.2, 288.3, 460.3, 287.3, 461.0);
  ctx.bezierCurveTo(285.9, 460.4, 287.2, 457.2, 285.3, 457.0);
  ctx.bezierCurveTo(286.4, 459.6, 282.3, 461.8, 285.3, 463.0);
  ctx.bezierCurveTo(285.5, 461.8, 285.1, 460.2, 286.3, 460.0);
  ctx.bezierCurveTo(289.1, 463.5, 284.4, 466.2, 285.3, 471.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(453.3, 464.0);
  ctx.bezierCurveTo(453.6, 459.7, 448.7, 461.4, 448.3, 462.0);
  ctx.bezierCurveTo(450.2, 462.4, 450.1, 464.9, 453.3, 464.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(457.3, 462.0);
  ctx.bezierCurveTo(452.5, 459.2, 454.9, 465.3, 457.3, 462.0);
  ctx.lineTo(457.3, 462.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(279.3, 480.0);
  ctx.bezierCurveTo(279.3, 478.2, 282.0, 474.2, 279.3, 473.0);
  ctx.bezierCurveTo(280.1, 475.6, 276.3, 478.5, 279.3, 480.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(284.3, 495.0);
  ctx.bezierCurveTo(289.7, 495.9, 292.6, 499.4, 297.3, 501.0);
  ctx.bezierCurveTo(300.1, 500.1, 301.4, 497.8, 305.3, 498.0);
  ctx.bezierCurveTo(302.7, 488.1, 288.4, 482.9, 284.3, 495.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(293.3, 519.0);
  ctx.bezierCurveTo(289.2, 537.3, 270.6, 563.8, 290.3, 577.0);
  ctx.bezierCurveTo(294.1, 571.7, 294.7, 567.6, 296.3, 560.0);
  ctx.bezierCurveTo(298.1, 551.4, 301.6, 541.0, 303.3, 532.0);
  ctx.bezierCurveTo(305.1, 522.7, 304.6, 511.2, 308.3, 506.0);
  ctx.bezierCurveTo(308.0, 506.4, 308.8, 508.3, 309.3, 508.0);
  ctx.bezierCurveTo(310.1, 503.1, 311.9, 499.3, 313.3, 495.0);
  ctx.bezierCurveTo(303.5, 488.1, 298.8, 476.2, 285.3, 473.0);
  ctx.bezierCurveTo(284.4, 475.4, 283.0, 477.3, 283.3, 481.0);
  ctx.bezierCurveTo(286.6, 480.4, 288.0, 481.7, 290.3, 482.0);
  ctx.bezierCurveTo(290.2, 479.5, 290.8, 477.8, 292.3, 477.0);
  ctx.bezierCurveTo(292.3, 479.0, 292.3, 481.0, 292.3, 483.0);
  ctx.bezierCurveTo(295.9, 484.6, 292.9, 479.6, 295.3, 480.0);
  ctx.bezierCurveTo(295.3, 482.0, 295.3, 484.0, 295.3, 486.0);
  ctx.bezierCurveTo(302.5, 487.2, 303.2, 494.8, 308.3, 498.0);
  ctx.bezierCurveTo(306.5, 498.3, 300.7, 502.6, 303.3, 501.0);
  ctx.bezierCurveTo(306.4, 501.3, 307.2, 497.8, 309.3, 500.0);
  ctx.bezierCurveTo(303.5, 506.5, 293.4, 511.9, 294.3, 522.0);
  ctx.bezierCurveTo(294.2, 520.8, 294.5, 519.2, 293.3, 519.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(375.3, 484.0);
  ctx.bezierCurveTo(375.6, 482.6, 374.7, 480.1, 374.3, 482.0);
  ctx.bezierCurveTo(374.0, 483.4, 374.9, 485.9, 375.3, 484.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(284.3, 483.0);
  ctx.bezierCurveTo(284.1, 481.8, 283.2, 482.4, 282.3, 483.0);
  ctx.bezierCurveTo(282.0, 487.4, 295.1, 481.5, 284.3, 483.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(481.3, 482.0);
  ctx.bezierCurveTo(482.5, 488.1, 486.1, 484.5, 481.3, 482.0);
  ctx.lineTo(481.3, 482.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(279.3, 484.0);
  ctx.bezierCurveTo(276.6, 484.7, 284.6, 482.7, 279.3, 484.0);
  ctx.lineTo(279.3, 484.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(275.3, 487.0);
  ctx.bezierCurveTo(274.7, 486.9, 274.1, 486.9, 274.3, 486.0);
  ctx.bezierCurveTo(275.5, 485.8, 277.2, 486.2, 277.3, 485.0);
  ctx.bezierCurveTo(275.1, 482.9, 271.9, 485.5, 270.3, 487.0);
  ctx.bezierCurveTo(272.3, 488.7, 271.6, 486.9, 274.3, 487.0);
  ctx.bezierCurveTo(274.3, 487.6, 275.1, 488.1, 275.3, 487.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(281.3, 488.0);
  ctx.bezierCurveTo(283.8, 488.1, 286.2, 488.2, 286.3, 486.0);
  ctx.bezierCurveTo(283.8, 485.9, 281.5, 485.8, 281.3, 488.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(486.3, 501.0);
  ctx.bezierCurveTo(485.8, 500.1, 483.9, 494.1, 485.3, 499.0);
  ctx.bezierCurveTo(489.3, 512.7, 493.0, 526.7, 499.3, 538.0);
  ctx.bezierCurveTo(497.8, 525.5, 490.6, 508.5, 486.3, 501.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(281.3, 498.0);
  ctx.bezierCurveTo(281.9, 505.0, 279.9, 527.4, 277.3, 519.0);
  ctx.bezierCurveTo(278.9, 533.2, 268.5, 550.8, 278.3, 558.0);
  ctx.bezierCurveTo(285.7, 544.0, 287.0, 519.8, 295.3, 510.0);
  ctx.bezierCurveTo(292.3, 504.4, 290.9, 497.1, 281.3, 498.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(476.3, 506.0);
  ctx.bezierCurveTo(476.5, 504.8, 476.1, 503.2, 477.3, 503.0);
  ctx.bezierCurveTo(477.4, 504.7, 476.8, 512.1, 478.3, 509.0);
  ctx.bezierCurveTo(477.7, 506.0, 479.6, 500.4, 477.3, 499.0);
  ctx.bezierCurveTo(478.7, 502.5, 472.8, 503.7, 476.3, 506.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(488.3, 536.0);
  ctx.bezierCurveTo(488.1, 535.6, 489.3, 534.7, 489.3, 536.0);
  ctx.bezierCurveTo(490.5, 547.4, 495.1, 557.7, 498.3, 567.0);
  ctx.bezierCurveTo(498.7, 568.2, 496.6, 572.2, 500.3, 572.0);
  ctx.bezierCurveTo(499.3, 565.1, 497.3, 560.7, 497.3, 555.0);
  ctx.bezierCurveTo(497.1, 555.8, 497.3, 557.0, 496.3, 557.0);
  ctx.bezierCurveTo(497.7, 544.1, 488.2, 529.7, 485.3, 515.0);
  ctx.bezierCurveTo(483.9, 518.5, 488.1, 521.4, 485.3, 523.0);
  ctx.bezierCurveTo(483.2, 519.2, 486.1, 514.4, 484.3, 512.0);
  ctx.bezierCurveTo(482.6, 512.6, 484.4, 516.7, 482.3, 517.0);
  ctx.bezierCurveTo(482.4, 510.9, 482.9, 504.4, 479.3, 502.0);
  ctx.bezierCurveTo(481.7, 513.8, 482.8, 528.2, 488.3, 536.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(343.3, 507.0);
  ctx.bezierCurveTo(340.6, 529.8, 329.1, 548.5, 328.3, 570.0);
  ctx.bezierCurveTo(339.8, 568.5, 343.6, 554.8, 347.3, 544.0);
  ctx.bezierCurveTo(351.2, 532.8, 354.8, 517.4, 356.3, 507.0);
  ctx.bezierCurveTo(356.3, 506.4, 356.2, 505.8, 355.3, 506.0);
  ctx.bezierCurveTo(353.3, 508.3, 347.0, 506.4, 343.3, 507.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(405.3, 548.0);
  ctx.bezierCurveTo(414.2, 559.6, 421.0, 569.5, 431.3, 578.0);
  ctx.bezierCurveTo(428.5, 565.8, 418.9, 554.8, 412.3, 547.0);
  ctx.bezierCurveTo(404.7, 538.0, 401.9, 527.1, 391.3, 523.0);
  ctx.bezierCurveTo(394.7, 531.5, 403.4, 539.3, 405.3, 546.0);
  ctx.bezierCurveTo(405.3, 543.6, 410.8, 549.0, 408.3, 549.0);
  ctx.bezierCurveTo(408.6, 547.8, 405.4, 545.6, 405.3, 548.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(278.3, 572.0);
  ctx.bezierCurveTo(278.6, 570.6, 277.7, 568.1, 277.3, 570.0);
  ctx.bezierCurveTo(277.0, 571.4, 277.9, 573.9, 278.3, 572.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(281.3, 579.0);
  ctx.bezierCurveTo(280.4, 575.6, 284.4, 572.2, 281.3, 570.0);
  ctx.bezierCurveTo(280.9, 572.0, 278.8, 577.4, 281.3, 579.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(255.3, 325.0);
  ctx.bezierCurveTo(252.8, 324.8, 252.2, 326.5, 251.3, 328.0);
  ctx.bezierCurveTo(253.8, 328.2, 254.4, 326.5, 255.3, 325.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(178.3, 355.0);
  ctx.bezierCurveTo(178.8, 358.1, 175.2, 357.3, 176.3, 361.0);
  ctx.bezierCurveTo(183.0, 356.7, 182.1, 368.9, 188.3, 365.0);
  ctx.bezierCurveTo(185.7, 361.0, 181.9, 358.1, 178.3, 355.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(186.3, 370.0);
  ctx.bezierCurveTo(191.9, 368.6, 194.5, 373.8, 197.3, 372.0);
  ctx.bezierCurveTo(195.1, 368.9, 192.4, 366.3, 188.3, 365.0);
  ctx.bezierCurveTo(187.9, 366.9, 186.2, 367.5, 186.3, 370.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(191.3, 366.0);
  ctx.bezierCurveTo(194.9, 365.5, 193.8, 369.5, 197.3, 369.0);
  ctx.bezierCurveTo(196.8, 366.4, 192.4, 362.0, 191.3, 366.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(230.3, 346.0);
  ctx.bezierCurveTo(231.6, 344.7, 230.9, 343.0, 229.3, 342.0);
  ctx.bezierCurveTo(229.5, 343.5, 229.0, 345.7, 230.3, 346.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(183.3, 379.0);
  ctx.bezierCurveTo(182.6, 382.7, 181.6, 386.6, 183.3, 390.0);
  ctx.bezierCurveTo(191.0, 388.4, 191.4, 379.4, 194.3, 373.0);
  ctx.bezierCurveTo(189.5, 370.1, 184.5, 371.6, 184.3, 378.0);
  ctx.bezierCurveTo(186.7, 376.6, 192.8, 377.0, 190.3, 380.0);
  ctx.bezierCurveTo(189.0, 378.6, 186.0, 379.0, 183.3, 379.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(461.3, 215.0);
  ctx.bezierCurveTo(466.2, 214.9, 471.9, 215.5, 475.3, 214.0);
  ctx.bezierCurveTo(477.7, 214.0, 480.0, 214.0, 482.3, 214.0);
  ctx.bezierCurveTo(486.8, 211.4, 465.0, 214.7, 464.3, 212.0);
  ctx.bezierCurveTo(464.9, 212.0, 465.5, 211.2, 464.3, 211.0);
  ctx.bezierCurveTo(461.8, 212.9, 463.9, 213.1, 461.3, 215.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(493.3, 212.0);
  ctx.bezierCurveTo(491.2, 212.6, 486.7, 210.8, 486.3, 213.0);
  ctx.bezierCurveTo(488.4, 212.4, 492.9, 214.2, 493.3, 212.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(344.3, 239.0);
  ctx.bezierCurveTo(345.3, 240.9, 341.3, 242.3, 344.3, 243.0);
  ctx.bezierCurveTo(345.2, 241.2, 347.7, 239.9, 344.3, 239.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(346.3, 234.0);
  ctx.bezierCurveTo(347.5, 231.1, 346.2, 226.7, 344.3, 224.0);
  ctx.bezierCurveTo(344.8, 227.5, 344.8, 231.6, 346.3, 234.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(382.3, 309.0);
  ctx.bezierCurveTo(384.8, 305.3, 394.9, 303.6, 393.3, 304.0);
  ctx.bezierCurveTo(392.5, 303.8, 391.3, 304.0, 391.3, 303.0);
  ctx.bezierCurveTo(391.9, 303.0, 392.5, 302.2, 391.3, 302.0);
  ctx.bezierCurveTo(389.3, 304.7, 380.2, 305.5, 382.3, 309.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(142.3, 0.0);
  ctx.bezierCurveTo(292.3, 0.0, 442.3, 0.0, 592.3, 0.0);
  ctx.bezierCurveTo(592.3, 195.0, 592.3, 390.0, 592.3, 585.0);
  ctx.bezierCurveTo(442.0, 585.0, 291.7, 585.0, 141.3, 585.0);
  ctx.bezierCurveTo(141.3, 391.0, 141.3, 197.0, 141.3, 3.0);
  ctx.bezierCurveTo(141.2, 1.6, 141.2, 0.2, 142.3, 0.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(392.3, 68.0);
  ctx.bezierCurveTo(386.0, 70.6, 378.4, 72.0, 373.3, 76.0);
  ctx.bezierCurveTo(372.7, 74.6, 369.5, 75.8, 369.3, 74.0);
  ctx.bezierCurveTo(371.1, 70.4, 376.8, 65.5, 376.3, 63.0);
  ctx.bezierCurveTo(371.3, 65.7, 370.5, 72.5, 365.3, 75.0);
  ctx.bezierCurveTo(359.7, 74.3, 354.9, 73.3, 349.3, 76.0);
  ctx.bezierCurveTo(349.5, 74.1, 348.2, 73.8, 348.3, 72.0);
  ctx.bezierCurveTo(344.5, 71.8, 341.0, 72.1, 339.3, 74.0);
  ctx.bezierCurveTo(342.1, 76.7, 343.4, 72.2, 347.3, 73.0);
  ctx.bezierCurveTo(348.3, 80.4, 354.6, 90.8, 351.3, 96.0);
  ctx.bezierCurveTo(355.4, 97.6, 365.6, 93.8, 369.3, 98.0);
  ctx.bezierCurveTo(371.6, 88.7, 374.7, 80.0, 379.3, 73.0);
  ctx.bezierCurveTo(385.1, 76.3, 392.1, 76.6, 394.3, 84.0);
  ctx.bezierCurveTo(397.0, 92.8, 392.3, 105.7, 392.3, 115.0);
  ctx.bezierCurveTo(399.3, 123.4, 397.6, 134.4, 388.3, 140.0);
  ctx.bezierCurveTo(388.1, 139.2, 388.3, 138.0, 387.3, 138.0);
  ctx.bezierCurveTo(387.0, 146.7, 375.2, 149.2, 376.3, 156.0);
  ctx.bezierCurveTo(377.8, 153.3, 380.4, 148.0, 383.3, 150.0);
  ctx.bezierCurveTo(381.9, 153.3, 382.5, 158.5, 379.3, 160.0);
  ctx.bezierCurveTo(374.8, 156.5, 351.6, 153.7, 346.3, 161.0);
  ctx.bezierCurveTo(342.6, 153.6, 340.5, 139.9, 335.3, 131.0);
  ctx.bezierCurveTo(334.0, 128.7, 332.9, 129.6, 332.3, 127.0);
  ctx.bezierCurveTo(328.8, 110.3, 333.1, 80.5, 340.3, 75.0);
  ctx.bezierCurveTo(337.4, 73.8, 336.6, 79.8, 335.3, 77.0);
  ctx.bezierCurveTo(335.0, 74.7, 338.2, 75.9, 338.3, 74.0);
  ctx.bezierCurveTo(335.0, 74.0, 334.9, 77.3, 331.3, 77.0);
  ctx.bezierCurveTo(328.6, 92.4, 329.8, 117.5, 332.3, 132.0);
  ctx.bezierCurveTo(332.3, 131.8, 330.3, 131.3, 330.3, 131.0);
  ctx.bezierCurveTo(336.0, 142.3, 334.2, 161.2, 343.3, 169.0);
  ctx.bezierCurveTo(340.3, 170.4, 336.2, 175.8, 334.3, 175.0);
  ctx.bezierCurveTo(333.9, 169.4, 332.6, 164.8, 330.3, 161.0);
  ctx.bezierCurveTo(330.3, 162.0, 328.6, 162.3, 328.3, 161.0);
  ctx.bezierCurveTo(332.0, 161.4, 337.5, 155.6, 333.3, 157.0);
  ctx.bezierCurveTo(330.2, 160.5, 313.1, 164.1, 311.3, 169.0);
  ctx.bezierCurveTo(311.6, 168.1, 315.7, 166.3, 315.3, 168.0);
  ctx.bezierCurveTo(308.0, 175.6, 287.6, 170.3, 279.3, 177.0);
  ctx.bezierCurveTo(281.1, 180.4, 279.0, 180.7, 276.3, 182.0);
  ctx.bezierCurveTo(277.0, 186.3, 275.2, 188.2, 273.3, 190.0);
  ctx.bezierCurveTo(273.1, 189.2, 273.3, 188.0, 272.3, 188.0);
  ctx.bezierCurveTo(273.6, 191.4, 273.6, 196.1, 271.3, 191.0);
  ctx.bezierCurveTo(270.0, 206.3, 280.3, 210.1, 288.3, 216.0);
  ctx.bezierCurveTo(286.0, 214.6, 285.2, 206.5, 284.3, 207.0);
  ctx.bezierCurveTo(284.1, 208.5, 284.7, 210.7, 283.3, 211.0);
  ctx.bezierCurveTo(283.0, 208.9, 284.1, 200.3, 282.3, 203.0);
  ctx.bezierCurveTo(282.2, 209.7, 283.0, 210.3, 279.3, 208.0);
  ctx.bezierCurveTo(276.4, 206.2, 275.6, 204.1, 275.3, 201.0);
  ctx.bezierCurveTo(274.6, 193.6, 279.7, 184.5, 280.3, 182.0);
  ctx.bezierCurveTo(286.8, 179.1, 293.5, 176.5, 300.3, 174.0);
  ctx.bezierCurveTo(298.6, 179.3, 296.4, 184.1, 295.3, 190.0);
  ctx.bezierCurveTo(298.8, 193.2, 301.0, 198.4, 300.3, 203.0);
  ctx.bezierCurveTo(299.6, 207.9, 294.7, 206.2, 294.3, 209.0);
  ctx.bezierCurveTo(294.4, 205.3, 293.8, 204.3, 292.3, 202.0);
  ctx.bezierCurveTo(294.4, 205.1, 285.6, 199.5, 289.3, 195.0);
  ctx.bezierCurveTo(291.2, 194.8, 299.2, 195.7, 296.3, 194.0);
  ctx.bezierCurveTo(292.5, 194.8, 291.5, 192.8, 288.3, 193.0);
  ctx.bezierCurveTo(282.5, 201.0, 293.3, 208.4, 293.3, 218.0);
  ctx.bezierCurveTo(293.3, 223.6, 289.5, 227.6, 288.3, 234.0);
  ctx.bezierCurveTo(286.5, 233.9, 285.0, 233.3, 284.3, 232.0);
  ctx.bezierCurveTo(286.4, 228.7, 288.1, 225.1, 289.3, 221.0);
  ctx.bezierCurveTo(285.1, 218.6, 279.8, 217.2, 276.3, 214.0);
  ctx.bezierCurveTo(276.2, 210.4, 275.9, 207.1, 273.3, 206.0);
  ctx.bezierCurveTo(275.9, 214.6, 271.1, 219.1, 274.3, 227.0);
  ctx.bezierCurveTo(277.9, 227.1, 281.2, 227.5, 282.3, 230.0);
  ctx.bezierCurveTo(279.4, 231.2, 281.9, 233.8, 281.3, 236.0);
  ctx.bezierCurveTo(279.5, 243.1, 274.9, 251.5, 274.3, 260.0);
  ctx.bezierCurveTo(273.9, 266.4, 277.7, 273.5, 271.3, 277.0);
  ctx.bezierCurveTo(266.3, 277.0, 261.7, 277.4, 258.3, 279.0);
  ctx.bezierCurveTo(260.5, 279.7, 256.4, 282.3, 255.3, 283.0);
  ctx.bezierCurveTo(245.6, 288.0, 240.1, 297.2, 230.3, 302.0);
  ctx.bezierCurveTo(227.0, 310.0, 217.4, 311.7, 213.3, 319.0);
  ctx.bezierCurveTo(210.7, 318.7, 209.0, 319.4, 209.3, 322.0);
  ctx.bezierCurveTo(213.8, 323.7, 216.9, 317.4, 219.3, 316.0);
  ctx.bezierCurveTo(220.1, 315.6, 220.8, 317.3, 221.3, 317.0);
  ctx.bezierCurveTo(222.3, 316.4, 221.2, 314.9, 222.3, 314.0);
  ctx.bezierCurveTo(225.4, 311.6, 233.8, 311.0, 238.3, 305.0);
  ctx.bezierCurveTo(242.8, 304.7, 245.4, 300.6, 243.3, 299.0);
  ctx.bezierCurveTo(242.7, 301.0, 238.6, 299.7, 238.3, 302.0);
  ctx.bezierCurveTo(240.1, 302.6, 242.5, 299.1, 243.3, 302.0);
  ctx.bezierCurveTo(239.1, 301.1, 235.7, 306.3, 233.3, 304.0);
  ctx.bezierCurveTo(240.6, 300.2, 244.8, 294.5, 249.3, 295.0);
  ctx.bezierCurveTo(248.1, 294.5, 247.1, 293.9, 246.3, 293.0);
  ctx.bezierCurveTo(249.5, 291.8, 251.2, 288.6, 253.3, 289.0);
  ctx.bezierCurveTo(253.8, 284.1, 265.7, 278.8, 277.3, 279.0);
  ctx.bezierCurveTo(279.1, 285.2, 286.4, 285.9, 287.3, 293.0);
  ctx.bezierCurveTo(285.6, 293.2, 283.4, 287.3, 283.3, 292.0);
  ctx.bezierCurveTo(285.1, 293.1, 287.9, 295.5, 285.3, 298.0);
  ctx.bezierCurveTo(287.0, 298.4, 287.9, 296.5, 288.3, 298.0);
  ctx.bezierCurveTo(284.4, 303.4, 279.1, 307.5, 273.3, 311.0);
  ctx.bezierCurveTo(271.5, 314.3, 273.6, 311.9, 275.3, 311.0);
  ctx.bezierCurveTo(281.8, 307.9, 284.1, 301.0, 289.3, 300.0);
  ctx.bezierCurveTo(287.0, 300.5, 291.8, 303.1, 291.3, 299.0);
  ctx.bezierCurveTo(293.9, 300.9, 291.8, 301.1, 294.3, 303.0);
  ctx.bezierCurveTo(290.4, 307.2, 283.5, 312.1, 278.3, 315.0);
  ctx.bezierCurveTo(274.9, 316.9, 272.4, 315.5, 273.3, 315.0);
  ctx.bezierCurveTo(266.7, 318.5, 264.9, 325.8, 256.3, 329.0);
  ctx.bezierCurveTo(258.9, 324.9, 263.1, 322.5, 266.3, 319.0);
  ctx.bezierCurveTo(253.0, 321.8, 247.7, 328.9, 235.3, 334.0);
  ctx.bezierCurveTo(235.7, 337.0, 237.1, 338.9, 239.3, 340.0);
  ctx.bezierCurveTo(240.8, 336.2, 236.6, 338.1, 237.3, 335.0);
  ctx.bezierCurveTo(243.8, 332.7, 242.4, 332.0, 249.3, 328.0);
  ctx.bezierCurveTo(245.3, 334.3, 242.1, 341.4, 233.3, 343.0);
  ctx.bezierCurveTo(236.7, 334.5, 225.4, 326.1, 227.3, 322.0);
  ctx.bezierCurveTo(224.0, 325.6, 223.3, 318.1, 218.3, 320.0);
  ctx.bezierCurveTo(222.8, 328.5, 228.4, 329.2, 227.3, 335.0);
  ctx.bezierCurveTo(223.6, 332.7, 220.9, 324.1, 217.3, 325.0);
  ctx.bezierCurveTo(219.0, 327.3, 224.3, 331.3, 223.3, 333.0);
  ctx.bezierCurveTo(219.3, 331.3, 216.6, 323.1, 211.3, 326.0);
  ctx.bezierCurveTo(215.9, 327.1, 215.7, 332.9, 216.3, 338.0);
  ctx.bezierCurveTo(219.8, 338.4, 221.9, 337.6, 224.3, 337.0);
  ctx.bezierCurveTo(224.6, 340.7, 226.8, 342.5, 227.3, 346.0);
  ctx.bezierCurveTo(221.3, 353.9, 217.7, 364.4, 206.3, 367.0);
  ctx.bezierCurveTo(205.5, 364.5, 206.6, 360.1, 203.3, 360.0);
  ctx.bezierCurveTo(203.6, 362.3, 204.9, 363.8, 204.3, 367.0);
  ctx.bezierCurveTo(201.9, 367.6, 202.2, 370.9, 198.3, 370.0);
  ctx.bezierCurveTo(198.8, 366.9, 196.9, 366.1, 196.3, 364.0);
  ctx.bezierCurveTo(186.8, 363.9, 182.6, 358.4, 178.3, 353.0);
  ctx.bezierCurveTo(179.4, 346.9, 175.8, 340.2, 183.3, 337.0);
  ctx.bezierCurveTo(188.1, 341.3, 196.7, 336.1, 195.3, 328.0);
  ctx.bezierCurveTo(192.9, 327.2, 191.6, 328.5, 190.3, 325.0);
  ctx.bezierCurveTo(191.4, 329.8, 189.0, 331.1, 187.3, 333.0);
  ctx.bezierCurveTo(190.6, 333.9, 191.7, 327.4, 193.3, 330.0);
  ctx.bezierCurveTo(194.1, 335.2, 189.1, 338.5, 186.3, 337.0);
  ctx.bezierCurveTo(186.0, 335.0, 187.7, 335.0, 188.3, 334.0);
  ctx.bezierCurveTo(186.9, 333.5, 183.1, 335.2, 183.3, 333.0);
  ctx.bezierCurveTo(183.9, 330.6, 184.8, 328.4, 184.3, 325.0);
  ctx.bezierCurveTo(192.2, 325.4, 187.6, 323.2, 182.3, 324.0);
  ctx.bezierCurveTo(184.9, 329.4, 177.9, 333.8, 174.3, 330.0);
  ctx.bezierCurveTo(174.7, 326.4, 178.6, 326.3, 179.3, 323.0);
  ctx.bezierCurveTo(174.6, 323.0, 173.3, 326.3, 172.3, 330.0);
  ctx.bezierCurveTo(173.1, 333.3, 177.3, 333.0, 179.3, 335.0);
  ctx.bezierCurveTo(179.2, 337.9, 173.2, 340.8, 173.3, 347.0);
  ctx.bezierCurveTo(164.0, 351.2, 149.3, 354.8, 150.3, 366.0);
  ctx.bezierCurveTo(153.7, 369.2, 162.4, 365.1, 159.3, 362.0);
  ctx.bezierCurveTo(158.1, 364.1, 154.2, 366.6, 152.3, 365.0);
  ctx.bezierCurveTo(154.8, 354.5, 165.8, 352.5, 174.3, 348.0);
  ctx.bezierCurveTo(175.1, 349.9, 176.0, 351.7, 176.3, 354.0);
  ctx.bezierCurveTo(173.1, 355.1, 174.4, 353.8, 173.3, 356.0);
  ctx.bezierCurveTo(169.7, 357.0, 172.5, 351.5, 169.3, 352.0);
  ctx.bezierCurveTo(169.3, 354.0, 169.3, 356.0, 169.3, 358.0);
  ctx.bezierCurveTo(166.4, 357.7, 166.2, 360.3, 163.3, 360.0);
  ctx.bezierCurveTo(160.2, 360.5, 162.9, 355.0, 159.3, 356.0);
  ctx.bezierCurveTo(158.8, 359.5, 160.9, 360.4, 162.3, 362.0);
  ctx.bezierCurveTo(167.6, 361.6, 169.6, 357.9, 174.3, 357.0);
  ctx.bezierCurveTo(176.2, 370.2, 161.9, 367.2, 164.3, 381.0);
  ctx.bezierCurveTo(166.0, 380.9, 166.9, 381.8, 167.3, 383.0);
  ctx.bezierCurveTo(174.1, 381.6, 185.4, 371.7, 178.3, 366.0);
  ctx.bezierCurveTo(176.6, 366.1, 182.3, 372.3, 177.3, 373.0);
  ctx.bezierCurveTo(177.3, 369.5, 173.3, 369.7, 172.3, 372.0);
  ctx.bezierCurveTo(174.5, 371.8, 175.5, 372.8, 175.3, 375.0);
  ctx.bezierCurveTo(173.0, 377.3, 172.0, 381.1, 167.3, 381.0);
  ctx.bezierCurveTo(163.9, 371.8, 173.9, 367.7, 178.3, 363.0);
  ctx.bezierCurveTo(193.4, 366.9, 175.4, 381.6, 182.3, 391.0);
  ctx.bezierCurveTo(195.7, 392.0, 189.9, 373.9, 201.3, 373.0);
  ctx.bezierCurveTo(201.9, 379.9, 200.4, 389.1, 201.3, 393.0);
  ctx.bezierCurveTo(206.8, 394.4, 210.6, 389.0, 209.3, 387.0);
  ctx.bezierCurveTo(207.4, 389.1, 207.4, 393.1, 202.3, 392.0);
  ctx.bezierCurveTo(201.9, 387.0, 202.3, 382.7, 206.3, 382.0);
  ctx.bezierCurveTo(209.0, 382.0, 208.5, 385.2, 211.3, 385.0);
  ctx.bezierCurveTo(211.3, 381.4, 211.9, 377.1, 209.3, 376.0);
  ctx.bezierCurveTo(208.5, 378.8, 210.7, 378.6, 210.3, 381.0);
  ctx.bezierCurveTo(206.9, 380.6, 204.7, 381.4, 202.3, 382.0);
  ctx.bezierCurveTo(203.5, 380.8, 203.5, 378.5, 203.3, 376.0);
  ctx.bezierCurveTo(205.6, 378.4, 206.8, 375.2, 208.3, 374.0);
  ctx.bezierCurveTo(205.8, 372.7, 203.5, 376.2, 203.3, 374.0);
  ctx.bezierCurveTo(203.9, 372.5, 202.1, 368.8, 204.3, 369.0);
  ctx.bezierCurveTo(205.8, 369.2, 208.0, 368.6, 208.3, 370.0);
  ctx.bezierCurveTo(203.7, 370.0, 210.9, 371.8, 210.3, 374.0);
  ctx.bezierCurveTo(209.6, 370.2, 215.3, 370.1, 212.3, 367.0);
  ctx.bezierCurveTo(223.6, 360.6, 228.8, 342.8, 242.3, 342.0);
  ctx.bezierCurveTo(238.5, 344.8, 232.7, 345.7, 231.3, 351.0);
  ctx.bezierCurveTo(240.3, 344.3, 248.0, 336.3, 261.3, 334.0);
  ctx.bezierCurveTo(256.0, 334.6, 250.5, 335.2, 246.3, 337.0);
  ctx.bezierCurveTo(251.3, 332.6, 253.8, 325.8, 260.3, 323.0);
  ctx.bezierCurveTo(258.4, 326.3, 250.0, 333.0, 251.3, 333.0);
  ctx.bezierCurveTo(254.6, 330.7, 256.4, 327.7, 256.3, 332.0);
  ctx.bezierCurveTo(262.0, 327.9, 265.5, 320.4, 275.3, 318.0);
  ctx.bezierCurveTo(274.5, 321.2, 272.1, 322.8, 270.3, 325.0);
  ctx.bezierCurveTo(275.1, 325.1, 273.8, 319.2, 277.3, 318.0);
  ctx.bezierCurveTo(277.4, 319.1, 275.9, 319.6, 277.3, 320.0);
  ctx.bezierCurveTo(275.7, 317.1, 281.9, 316.8, 280.3, 318.0);
  ctx.bezierCurveTo(284.6, 314.6, 286.2, 309.5, 293.3, 307.0);
  ctx.bezierCurveTo(293.1, 309.4, 291.0, 311.8, 288.3, 314.0);
  ctx.bezierCurveTo(287.7, 314.5, 286.8, 312.8, 286.3, 313.0);
  ctx.bezierCurveTo(283.9, 314.2, 280.1, 320.4, 281.3, 320.0);
  ctx.bezierCurveTo(284.3, 319.0, 283.8, 313.9, 287.3, 315.0);
  ctx.bezierCurveTo(284.4, 315.7, 285.1, 319.2, 283.3, 321.0);
  ctx.bezierCurveTo(277.3, 327.1, 264.1, 327.7, 263.3, 335.0);
  ctx.bezierCurveTo(273.0, 329.4, 283.1, 324.1, 292.3, 318.0);
  ctx.bezierCurveTo(293.4, 310.4, 295.4, 303.7, 302.3, 302.0);
  ctx.bezierCurveTo(304.6, 308.4, 305.3, 316.3, 308.3, 322.0);
  ctx.bezierCurveTo(304.5, 328.7, 314.3, 337.6, 310.3, 348.0);
  ctx.bezierCurveTo(314.9, 356.5, 307.4, 366.0, 305.3, 374.0);
  ctx.bezierCurveTo(307.0, 377.0, 307.9, 380.8, 307.3, 386.0);
  ctx.bezierCurveTo(298.1, 391.2, 302.5, 409.9, 295.3, 417.0);
  ctx.bezierCurveTo(295.3, 422.7, 295.3, 428.3, 295.3, 434.0);
  ctx.bezierCurveTo(293.0, 434.3, 291.5, 433.8, 290.3, 433.0);
  ctx.bezierCurveTo(293.6, 437.1, 289.7, 441.2, 290.3, 448.0);
  ctx.bezierCurveTo(286.3, 447.0, 287.3, 451.0, 283.3, 450.0);
  ctx.bezierCurveTo(284.2, 464.9, 277.1, 471.7, 274.3, 483.0);
  ctx.bezierCurveTo(272.6, 482.9, 271.2, 483.2, 270.3, 484.0);
  ctx.bezierCurveTo(262.1, 499.0, 265.5, 525.6, 265.3, 546.0);
  ctx.bezierCurveTo(269.1, 534.0, 265.7, 506.2, 270.3, 492.0);
  ctx.bezierCurveTo(275.7, 493.7, 272.3, 497.6, 276.3, 496.0);
  ctx.bezierCurveTo(272.9, 513.6, 274.5, 536.2, 269.3, 552.0);
  ctx.bezierCurveTo(270.9, 555.7, 274.5, 557.4, 276.3, 561.0);
  ctx.bezierCurveTo(275.4, 566.8, 274.1, 572.1, 274.3, 574.0);

  ctx.bezierCurveTo(264.1, 569.0, 269.3, 554.7, 263.3, 546.0);
  ctx.bezierCurveTo(264.9, 553.9, 261.5, 560.9, 262.3, 567.0);
  ctx.bezierCurveTo(263.0, 572.1, 267.2, 575.8, 268.3, 581.0);
  ctx.bezierCurveTo(268.4, 581.3, 263.9, 584.6, 269.3, 584.0);
  ctx.bezierCurveTo(273.5, 585.5, 269.5, 578.8, 272.3, 579.0);
  ctx.bezierCurveTo(273.8, 580.2, 273.8, 582.8, 275.3, 584.0);
  ctx.bezierCurveTo(280.7, 584.0, 286.0, 584.0, 291.3, 584.0);
  ctx.bezierCurveTo(291.6, 579.7, 292.0, 574.5, 296.3, 577.0);
  ctx.bezierCurveTo(299.6, 552.9, 304.7, 530.7, 311.3, 510.0);
  ctx.bezierCurveTo(314.8, 510.7, 317.7, 515.7, 320.3, 514.0);
  ctx.bezierCurveTo(320.0, 511.9, 322.7, 506.2, 320.3, 503.0);
  ctx.bezierCurveTo(318.7, 505.0, 319.5, 509.6, 317.3, 511.0);
  ctx.bezierCurveTo(315.3, 509.7, 312.2, 509.4, 312.3, 506.0);
  ctx.bezierCurveTo(314.1, 503.4, 313.8, 498.8, 316.3, 497.0);
  ctx.bezierCurveTo(321.0, 504.1, 335.1, 505.7, 341.3, 508.0);
  ctx.bezierCurveTo(337.6, 529.9, 331.4, 549.4, 323.3, 567.0);
  ctx.bezierCurveTo(325.5, 567.8, 325.8, 570.5, 327.3, 572.0);
  ctx.bezierCurveTo(329.8, 573.3, 332.2, 569.8, 332.3, 572.0);
  ctx.bezierCurveTo(330.9, 576.3, 327.1, 578.2, 327.3, 584.0);
  ctx.bezierCurveTo(334.4, 584.4, 332.7, 576.0, 334.3, 571.0);
  ctx.bezierCurveTo(343.0, 570.3, 344.7, 556.8, 348.3, 544.0);
  ctx.bezierCurveTo(351.6, 532.3, 360.0, 508.9, 361.3, 503.0);
  ctx.bezierCurveTo(363.2, 504.0, 364.7, 500.0, 365.3, 503.0);
  ctx.bezierCurveTo(363.3, 506.5, 365.8, 502.9, 366.3, 505.0);
  ctx.bezierCurveTo(361.6, 521.4, 356.7, 535.8, 352.3, 550.0);
  ctx.bezierCurveTo(349.1, 560.5, 340.3, 567.3, 338.3, 578.0);
  ctx.bezierCurveTo(336.2, 578.8, 334.4, 582.1, 336.3, 584.0);
  ctx.bezierCurveTo(337.3, 584.0, 338.3, 584.0, 339.3, 584.0);
  ctx.bezierCurveTo(354.7, 559.4, 362.3, 526.9, 372.3, 497.0);
  ctx.bezierCurveTo(375.1, 499.2, 378.1, 501.2, 377.3, 507.0);
  ctx.bezierCurveTo(383.2, 516.5, 387.5, 527.5, 392.3, 538.0);
  ctx.bezierCurveTo(401.0, 544.9, 405.0, 552.7, 413.3, 564.0);
  ctx.bezierCurveTo(418.0, 570.3, 425.2, 582.8, 430.3, 584.0);
  ctx.bezierCurveTo(432.0, 584.4, 433.3, 584.1, 435.3, 583.0);
  ctx.bezierCurveTo(436.2, 577.1, 429.8, 573.2, 431.3, 570.0);
  ctx.bezierCurveTo(431.6, 571.1, 433.0, 572.4, 433.3, 571.0);
  ctx.bezierCurveTo(423.5, 556.3, 414.0, 536.5, 402.3, 527.0);
  ctx.bezierCurveTo(403.3, 527.0, 403.5, 527.8, 404.3, 528.0);
  ctx.bezierCurveTo(400.6, 522.0, 405.5, 515.2, 409.3, 511.0);
  ctx.bezierCurveTo(419.3, 528.7, 431.0, 544.6, 442.3, 561.0);
  ctx.bezierCurveTo(442.5, 564.2, 440.5, 565.2, 441.3, 569.0);
  ctx.bezierCurveTo(445.3, 570.6, 441.7, 564.7, 444.3, 565.0);
  ctx.bezierCurveTo(445.2, 571.3, 438.2, 582.1, 444.3, 584.0);
  ctx.bezierCurveTo(444.7, 579.5, 444.5, 569.0, 448.3, 565.0);
  ctx.bezierCurveTo(446.6, 562.9, 445.2, 564.1, 444.3, 563.0);
  ctx.bezierCurveTo(444.6, 559.7, 439.5, 555.0, 436.3, 550.0);
  ctx.bezierCurveTo(433.3, 545.3, 431.1, 539.5, 428.3, 537.0);
  ctx.bezierCurveTo(428.0, 536.8, 428.9, 536.9, 427.3, 534.0);
  ctx.bezierCurveTo(422.7, 525.5, 414.7, 518.4, 409.3, 509.0);
  ctx.bezierCurveTo(416.0, 500.3, 421.3, 490.3, 429.3, 483.0);
  ctx.bezierCurveTo(432.8, 486.2, 433.5, 487.7, 437.3, 489.0);
  ctx.bezierCurveTo(436.7, 484.3, 431.4, 484.3, 431.3, 479.0);
  ctx.bezierCurveTo(433.1, 476.4, 435.6, 474.6, 438.3, 473.0);
  ctx.bezierCurveTo(438.8, 474.2, 439.4, 475.3, 440.3, 476.0);
  ctx.bezierCurveTo(440.5, 474.1, 439.2, 473.8, 439.3, 472.0);
  ctx.bezierCurveTo(443.5, 475.3, 440.0, 472.1, 444.3, 471.0);
  ctx.bezierCurveTo(447.0, 476.7, 452.1, 485.2, 452.3, 490.0);
  ctx.bezierCurveTo(450.1, 489.2, 451.0, 485.3, 448.3, 485.0);
  ctx.bezierCurveTo(450.3, 489.3, 451.0, 495.0, 455.3, 497.0);
  ctx.bezierCurveTo(455.5, 495.8, 455.1, 494.2, 456.3, 494.0);
  ctx.bezierCurveTo(456.3, 495.7, 457.1, 496.6, 458.3, 497.0);
  ctx.bezierCurveTo(460.7, 492.0, 474.1, 492.9, 473.3, 500.0);
  ctx.bezierCurveTo(471.9, 500.0, 471.1, 500.5, 470.3, 501.0);
  ctx.bezierCurveTo(472.4, 497.6, 464.5, 497.2, 460.3, 497.0);
  ctx.bezierCurveTo(461.0, 501.8, 464.4, 498.7, 468.3, 499.0);
  ctx.bezierCurveTo(470.3, 502.3, 471.7, 506.3, 473.3, 510.0);
  ctx.bezierCurveTo(480.7, 517.3, 487.8, 537.3, 490.3, 554.0);
  ctx.bezierCurveTo(492.1, 555.6, 494.4, 561.8, 493.3, 563.0);
  ctx.bezierCurveTo(491.1, 560.6, 488.6, 558.4, 485.3, 557.0);
  ctx.bezierCurveTo(488.7, 561.7, 493.0, 564.4, 496.3, 570.0);
  ctx.bezierCurveTo(499.0, 574.6, 499.1, 583.5, 506.3, 584.0);
  ctx.bezierCurveTo(503.2, 569.8, 497.8, 552.5, 497.3, 539.0);
  ctx.bezierCurveTo(502.4, 555.5, 507.3, 568.0, 511.3, 584.0);
  ctx.bezierCurveTo(513.0, 584.0, 514.7, 584.0, 516.3, 584.0);
  ctx.bezierCurveTo(512.6, 568.0, 510.2, 550.8, 504.3, 537.0);
  ctx.bezierCurveTo(506.2, 548.4, 509.1, 560.9, 510.3, 571.0);
  ctx.bezierCurveTo(508.1, 564.6, 505.9, 558.1, 503.3, 552.0);
  ctx.bezierCurveTo(507.7, 548.9, 502.3, 539.4, 503.3, 534.0);
  ctx.bezierCurveTo(503.1, 534.8, 503.3, 536.0, 502.3, 536.0);
  ctx.bezierCurveTo(503.0, 527.5, 493.3, 509.1, 491.3, 498.0);
  ctx.bezierCurveTo(491.5, 498.8, 491.3, 500.0, 492.3, 500.0);
  ctx.bezierCurveTo(492.3, 494.7, 489.0, 492.7, 489.3, 487.0);
  ctx.bezierCurveTo(485.9, 483.9, 480.9, 480.5, 478.3, 476.0);
  ctx.bezierCurveTo(475.2, 470.7, 469.8, 454.8, 469.3, 450.0);
  ctx.bezierCurveTo(468.6, 442.0, 471.4, 437.4, 470.3, 432.0);
  ctx.bezierCurveTo(469.8, 429.3, 467.1, 425.8, 466.3, 425.0);
  ctx.bezierCurveTo(463.2, 421.4, 461.4, 419.5, 458.3, 416.0);
  ctx.bezierCurveTo(458.8, 416.5, 459.9, 416.5, 460.3, 417.0);
  ctx.bezierCurveTo(457.5, 414.0, 456.0, 411.2, 452.3, 410.0);
  ctx.bezierCurveTo(453.7, 403.6, 446.5, 400.5, 450.3, 395.0);
  ctx.bezierCurveTo(450.0, 397.3, 450.6, 398.8, 452.3, 399.0);
  ctx.bezierCurveTo(446.0, 385.7, 447.2, 364.8, 433.3, 359.0);
  ctx.bezierCurveTo(434.0, 355.3, 431.6, 354.7, 432.3, 351.0);
  ctx.bezierCurveTo(436.6, 352.2, 435.0, 347.7, 437.3, 347.0);
  ctx.bezierCurveTo(438.3, 330.8, 448.9, 314.4, 451.3, 296.0);
  ctx.bezierCurveTo(453.2, 282.0, 459.9, 272.0, 459.3, 260.0);
  ctx.bezierCurveTo(459.2, 261.2, 459.5, 262.8, 458.3, 263.0);
  ctx.bezierCurveTo(459.7, 255.0, 471.3, 257.4, 474.3, 251.0);
  ctx.bezierCurveTo(480.3, 249.5, 483.5, 241.5, 489.3, 243.0);
  ctx.bezierCurveTo(497.3, 226.9, 508.9, 214.6, 511.3, 193.0);
  ctx.bezierCurveTo(512.5, 191.2, 513.9, 189.6, 515.3, 188.0);
  ctx.bezierCurveTo(515.6, 186.0, 514.0, 186.0, 513.3, 185.0);
  ctx.bezierCurveTo(514.5, 184.2, 516.0, 183.7, 518.3, 184.0);
  ctx.bezierCurveTo(518.2, 182.5, 518.5, 181.6, 519.3, 181.0);
  ctx.bezierCurveTo(528.3, 173.6, 538.9, 168.9, 545.3, 159.0);
  ctx.bezierCurveTo(545.4, 157.6, 544.8, 156.8, 544.3, 156.0);
  ctx.bezierCurveTo(548.4, 158.5, 548.2, 149.6, 551.3, 148.0);
  ctx.bezierCurveTo(558.2, 147.4, 566.4, 144.4, 571.3, 145.0);
  ctx.bezierCurveTo(573.4, 142.9, 578.3, 136.5, 572.3, 135.0);
  ctx.bezierCurveTo(572.8, 138.8, 571.9, 141.2, 569.3, 142.0);
  ctx.bezierCurveTo(556.5, 142.0, 565.1, 131.4, 573.3, 133.0);
  ctx.bezierCurveTo(575.3, 134.0, 575.6, 136.7, 577.3, 138.0);
  ctx.bezierCurveTo(576.9, 128.3, 565.1, 131.2, 559.3, 134.0);
  ctx.bezierCurveTo(559.0, 131.7, 562.2, 132.9, 562.3, 131.0);
  ctx.bezierCurveTo(557.8, 131.5, 557.0, 135.7, 550.3, 134.0);
  ctx.bezierCurveTo(546.8, 119.1, 570.5, 117.9, 572.3, 102.0);
  ctx.bezierCurveTo(569.4, 103.1, 568.9, 99.4, 567.3, 99.0);
  ctx.bezierCurveTo(559.2, 97.1, 552.5, 106.7, 546.3, 109.0);
  ctx.bezierCurveTo(547.4, 105.3, 542.9, 107.0, 542.3, 105.0);
  ctx.bezierCurveTo(542.6, 102.9, 546.0, 104.1, 546.3, 102.0);
  ctx.bezierCurveTo(545.1, 101.9, 543.9, 101.7, 544.3, 100.0);
  ctx.bezierCurveTo(545.9, 93.7, 565.1, 80.3, 554.3, 72.0);
  ctx.bezierCurveTo(546.6, 74.6, 541.6, 80.0, 535.3, 84.0);
  ctx.bezierCurveTo(535.3, 86.3, 535.3, 88.7, 535.3, 91.0);
  ctx.bezierCurveTo(530.3, 92.7, 529.0, 98.0, 523.3, 99.0);
  ctx.bezierCurveTo(518.4, 87.3, 528.4, 75.6, 522.3, 64.0);
  ctx.bezierCurveTo(520.3, 64.0, 518.3, 64.0, 516.3, 64.0);
  ctx.bezierCurveTo(508.2, 71.7, 503.7, 87.9, 506.3, 103.0);
  ctx.bezierCurveTo(501.3, 110.0, 496.8, 117.5, 489.3, 122.0);
  ctx.bezierCurveTo(484.0, 118.6, 484.6, 109.4, 477.3, 108.0);
  ctx.bezierCurveTo(478.3, 111.7, 482.7, 111.9, 482.3, 117.0);
  ctx.bezierCurveTo(480.2, 121.5, 477.2, 125.2, 471.3, 126.0);
  ctx.bezierCurveTo(474.1, 123.2, 469.5, 122.8, 469.3, 120.0);
  ctx.bezierCurveTo(470.8, 115.5, 473.8, 112.5, 476.3, 109.0);
  ctx.bezierCurveTo(469.3, 110.0, 465.8, 114.5, 466.3, 123.0);
  ctx.bezierCurveTo(475.3, 130.2, 478.6, 142.2, 476.3, 157.0);
  ctx.bezierCurveTo(469.5, 156.5, 460.9, 152.5, 456.3, 153.0);
  ctx.bezierCurveTo(454.7, 156.8, 444.8, 148.6, 440.3, 147.0);
  ctx.bezierCurveTo(445.0, 146.3, 450.2, 150.4, 452.3, 149.0);
  ctx.bezierCurveTo(448.2, 145.0, 441.9, 147.1, 435.3, 146.0);
  ctx.bezierCurveTo(430.2, 145.1, 424.9, 141.8, 420.3, 142.0);
  ctx.bezierCurveTo(415.3, 142.2, 408.5, 146.5, 405.3, 146.0);
  ctx.bezierCurveTo(406.8, 146.2, 409.0, 145.6, 409.3, 147.0);
  ctx.bezierCurveTo(406.2, 146.8, 406.0, 149.7, 402.3, 149.0);
  ctx.bezierCurveTo(402.4, 144.6, 400.8, 144.4, 403.3, 142.0);
  ctx.bezierCurveTo(399.0, 141.3, 400.2, 131.6, 405.3, 132.0);
  ctx.bezierCurveTo(405.7, 111.3, 407.2, 85.7, 399.3, 72.0);
  ctx.bezierCurveTo(398.6, 70.8, 397.4, 72.0, 396.3, 71.0);
  ctx.bezierCurveTo(396.9, 71.5, 397.0, 69.7, 396.3, 69.0);
  ctx.bezierCurveTo(383.1, 55.4, 343.9, 57.6, 334.3, 73.0);
  ctx.bezierCurveTo(347.4, 63.3, 376.5, 55.4, 392.3, 68.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(260.3, 284.0);
  ctx.bezierCurveTo(254.1, 284.7, 258.0, 288.7, 260.3, 284.0);
  ctx.lineTo(260.3, 284.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(203.3, 360.0);
  ctx.bezierCurveTo(210.1, 359.4, 214.8, 353.5, 213.3, 347.0);
  ctx.bezierCurveTo(215.7, 347.3, 215.6, 350.1, 217.3, 351.0);
  ctx.bezierCurveTo(216.5, 344.5, 211.3, 342.4, 208.3, 338.0);
  ctx.bezierCurveTo(213.9, 335.2, 211.7, 327.6, 209.3, 323.0);
  ctx.bezierCurveTo(204.7, 321.6, 194.5, 320.9, 191.3, 324.0);
  ctx.bezierCurveTo(192.5, 324.1, 193.7, 324.3, 193.3, 326.0);
  ctx.bezierCurveTo(197.6, 324.6, 204.3, 325.6, 208.3, 324.0);
  ctx.bezierCurveTo(213.6, 341.5, 197.8, 336.7, 190.3, 344.0);
  ctx.bezierCurveTo(185.2, 344.4, 184.5, 340.5, 181.3, 339.0);
  ctx.bezierCurveTo(182.0, 344.7, 188.5, 344.5, 191.3, 348.0);
  ctx.bezierCurveTo(191.5, 352.0, 192.0, 355.7, 192.3, 357.0);
  ctx.bezierCurveTo(195.8, 355.8, 198.5, 360.4, 203.3, 360.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(310.3, 544.0);
  ctx.bezierCurveTo(309.6, 534.7, 318.1, 520.4, 316.3, 514.0);
  ctx.bezierCurveTo(313.3, 524.3, 300.4, 554.4, 316.3, 556.0);
  ctx.bezierCurveTo(313.7, 551.8, 310.7, 549.5, 310.3, 544.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(321.3, 561.0);
  ctx.bezierCurveTo(324.1, 544.3, 332.8, 526.8, 335.3, 507.0);
  ctx.bezierCurveTo(331.7, 506.1, 333.9, 510.9, 333.3, 513.0);
  ctx.bezierCurveTo(327.1, 525.4, 324.2, 541.2, 319.3, 555.0);
  ctx.bezierCurveTo(318.1, 554.8, 317.3, 553.4, 317.3, 556.0);
  ctx.bezierCurveTo(312.5, 563.2, 311.5, 574.2, 309.3, 584.0);
  ctx.bezierCurveTo(313.7, 582.5, 313.3, 576.2, 314.3, 572.0);
  ctx.bezierCurveTo(315.5, 567.4, 317.1, 562.6, 317.3, 558.0);
  ctx.bezierCurveTo(320.2, 557.9, 319.1, 553.7, 322.3, 554.0);
  ctx.bezierCurveTo(322.9, 556.7, 318.2, 559.1, 321.3, 561.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(438.3, 496.0);
  ctx.bezierCurveTo(427.8, 499.2, 419.1, 509.3, 419.3, 520.0);
  ctx.bezierCurveTo(423.3, 522.7, 429.6, 523.0, 430.3, 529.0);
  ctx.bezierCurveTo(429.2, 529.1, 428.8, 527.5, 428.3, 529.0);
  ctx.bezierCurveTo(433.6, 534.6, 437.2, 546.4, 442.3, 549.0);
  ctx.bezierCurveTo(439.3, 548.8, 443.5, 554.1, 443.3, 551.0);
  ctx.bezierCurveTo(442.8, 551.0, 442.2, 550.2, 443.3, 550.0);
  ctx.bezierCurveTo(443.3, 552.1, 445.7, 558.3, 445.3, 556.0);
  ctx.bezierCurveTo(445.7, 554.3, 443.8, 553.4, 445.3, 553.0);
  ctx.bezierCurveTo(451.9, 563.8, 462.4, 573.6, 466.3, 584.0);
  ctx.bezierCurveTo(468.0, 584.0, 469.7, 584.0, 471.3, 584.0);
  ctx.bezierCurveTo(473.5, 578.5, 471.8, 569.1, 472.3, 562.0);
  ctx.bezierCurveTo(476.2, 560.9, 478.2, 557.9, 483.3, 558.0);
  ctx.bezierCurveTo(476.1, 538.0, 464.9, 517.4, 457.3, 501.0);
  ctx.bezierCurveTo(457.2, 503.5, 455.9, 504.9, 453.3, 505.0);
  ctx.bezierCurveTo(446.8, 500.2, 445.0, 490.7, 439.3, 485.0);
  ctx.bezierCurveTo(440.2, 490.1, 446.9, 494.8, 445.3, 499.0);
  ctx.bezierCurveTo(440.1, 495.8, 440.0, 488.3, 434.3, 488.0);
  ctx.bezierCurveTo(434.6, 491.8, 438.1, 492.2, 438.3, 496.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(271.3, 207.0);
  ctx.bezierCurveTo(270.9, 204.3, 272.2, 194.8, 270.3, 197.0);
  ctx.bezierCurveTo(270.7, 199.7, 269.4, 209.2, 271.3, 207.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(271.3, 215.0);
  ctx.bezierCurveTo(271.3, 213.5, 271.7, 206.8, 270.3, 210.0);
  ctx.bezierCurveTo(270.3, 211.5, 269.9, 218.2, 271.3, 215.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(253.3, 292.0);
  ctx.bezierCurveTo(244.3, 295.4, 256.5, 291.8, 253.3, 292.0);
  ctx.lineTo(253.3, 292.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(266.3, 297.0);
  ctx.bezierCurveTo(263.2, 296.5, 263.5, 299.5, 262.3, 301.0);
  ctx.bezierCurveTo(263.4, 301.6, 269.6, 301.3, 270.3, 301.0);
  ctx.bezierCurveTo(268.6, 298.0, 265.8, 300.7, 264.3, 299.0);
  ctx.bezierCurveTo(265.5, 298.9, 266.7, 298.7, 266.3, 297.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(262.3, 303.0);
  ctx.bezierCurveTo(262.3, 303.6, 262.2, 304.2, 261.3, 304.0);
  ctx.bezierCurveTo(262.0, 300.9, 259.6, 301.1, 260.3, 298.0);
  ctx.bezierCurveTo(255.8, 302.9, 254.3, 299.6, 249.3, 305.0);
  ctx.bezierCurveTo(253.6, 304.9, 257.8, 299.3, 259.3, 305.0);
  ctx.bezierCurveTo(259.5, 303.8, 259.1, 302.2, 260.3, 302.0);
  ctx.bezierCurveTo(259.2, 306.2, 265.1, 304.4, 262.3, 303.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(258.3, 306.0);
  ctx.bezierCurveTo(256.4, 306.3, 256.3, 304.6, 255.3, 304.0);
  ctx.bezierCurveTo(254.4, 306.1, 257.9, 308.5, 258.3, 306.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(242.3, 309.0);
  ctx.bezierCurveTo(242.4, 307.3, 241.5, 306.4, 240.3, 306.0);
  ctx.bezierCurveTo(240.3, 307.7, 241.1, 308.6, 242.3, 309.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(236.3, 314.0);
  ctx.bezierCurveTo(234.0, 314.3, 235.2, 311.1, 233.3, 311.0);
  ctx.bezierCurveTo(232.0, 313.8, 236.2, 315.9, 236.3, 314.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(234.3, 320.0);
  ctx.bezierCurveTo(236.4, 317.4, 231.0, 315.9, 230.3, 313.0);
  ctx.bezierCurveTo(230.7, 316.3, 232.7, 318.0, 234.3, 320.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(231.3, 322.0);
  ctx.bezierCurveTo(230.7, 321.9, 230.1, 321.9, 230.3, 321.0);
  ctx.bezierCurveTo(235.2, 320.3, 227.7, 319.8, 228.3, 321.0);
  ctx.bezierCurveTo(229.8, 320.5, 230.8, 324.9, 231.3, 322.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(440.3, 482.0);
  ctx.bezierCurveTo(440.6, 480.6, 446.2, 477.3, 443.3, 479.0);
  ctx.bezierCurveTo(441.6, 478.7, 437.4, 480.9, 440.3, 482.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(482.3, 569.0);
  ctx.bezierCurveTo(481.8, 567.8, 481.3, 566.7, 480.3, 566.0);
  ctx.bezierCurveTo(480.2, 567.3, 481.9, 571.5, 482.3, 569.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(475.3, 580.0);
  ctx.bezierCurveTo(474.7, 578.2, 476.5, 574.1, 474.3, 574.0);
  ctx.bezierCurveTo(472.9, 575.3, 472.6, 580.0, 475.3, 580.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(345.3, 101.0);
  ctx.bezierCurveTo(345.0, 98.9, 346.1, 90.3, 344.3, 93.0);
  ctx.bezierCurveTo(344.6, 95.1, 343.5, 103.7, 345.3, 101.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(346.3, 107.0);
  ctx.bezierCurveTo(346.6, 105.6, 345.7, 103.1, 345.3, 105.0);
  ctx.bezierCurveTo(345.0, 106.4, 345.9, 108.9, 346.3, 107.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(361.3, 122.0);
  ctx.bezierCurveTo(351.0, 122.9, 345.2, 119.7, 337.3, 119.0);
  ctx.bezierCurveTo(337.0, 121.1, 334.6, 121.0, 333.3, 122.0);
  ctx.bezierCurveTo(333.4, 128.9, 344.2, 125.1, 347.3, 129.0);
  ctx.bezierCurveTo(350.1, 126.6, 353.8, 124.4, 352.3, 123.0);
  ctx.bezierCurveTo(367.7, 122.7, 385.6, 135.0, 393.3, 120.0);
  ctx.bezierCurveTo(384.2, 113.5, 373.6, 121.0, 361.3, 122.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(388.3, 136.0);
  ctx.bezierCurveTo(388.5, 134.7, 388.5, 128.8, 387.3, 132.0);
  ctx.bezierCurveTo(387.2, 133.3, 387.2, 139.2, 388.3, 136.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(242.3, 338.0);
  ctx.bezierCurveTo(240.9, 335.7, 244.9, 334.2, 242.3, 334.0);
  ctx.bezierCurveTo(242.0, 334.6, 239.8, 337.8, 242.3, 338.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(290.3, 211.0);
  ctx.bezierCurveTo(289.8, 209.8, 289.3, 208.7, 288.3, 208.0);
  ctx.bezierCurveTo(288.2, 209.3, 289.9, 213.5, 290.3, 211.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(279.3, 204.0);
  ctx.bezierCurveTo(279.5, 203.3, 279.0, 198.2, 278.3, 201.0);
  ctx.bezierCurveTo(277.4, 204.8, 278.9, 206.0, 279.3, 204.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(260.3, 284.0);
  ctx.bezierCurveTo(258.0, 288.7, 254.1, 284.7, 260.3, 284.0);
  ctx.lineTo(260.3, 284.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(322.3, 554.0);
  ctx.bezierCurveTo(319.1, 553.7, 320.2, 557.9, 317.3, 558.0);
  ctx.bezierCurveTo(317.1, 562.6, 315.5, 567.4, 314.3, 572.0);
  ctx.bezierCurveTo(313.3, 576.2, 313.7, 582.5, 309.3, 584.0);
  ctx.bezierCurveTo(311.5, 574.2, 312.5, 563.2, 317.3, 556.0);
  ctx.bezierCurveTo(317.3, 553.4, 318.1, 554.8, 319.3, 555.0);
  ctx.bezierCurveTo(324.2, 541.2, 327.1, 525.4, 333.3, 513.0);
  ctx.bezierCurveTo(333.9, 510.9, 331.7, 506.1, 335.3, 507.0);
  ctx.bezierCurveTo(332.8, 526.8, 324.1, 544.3, 321.3, 561.0);
  ctx.bezierCurveTo(318.2, 559.1, 322.9, 556.7, 322.3, 554.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(434.3, 488.0);
  ctx.bezierCurveTo(440.0, 488.3, 440.1, 495.8, 445.3, 499.0);
  ctx.bezierCurveTo(446.9, 494.8, 440.2, 490.1, 439.3, 485.0);
  ctx.bezierCurveTo(445.0, 490.7, 446.8, 500.2, 453.3, 505.0);
  ctx.bezierCurveTo(455.9, 504.9, 457.2, 503.5, 457.3, 501.0);
  ctx.bezierCurveTo(464.9, 517.4, 476.1, 538.0, 483.3, 558.0);
  ctx.bezierCurveTo(478.2, 557.9, 476.2, 560.9, 472.3, 562.0);
  ctx.bezierCurveTo(471.8, 569.1, 473.5, 578.5, 471.3, 584.0);
  ctx.bezierCurveTo(469.7, 584.0, 468.0, 584.0, 466.3, 584.0);
  ctx.bezierCurveTo(462.4, 573.6, 451.9, 563.8, 445.3, 553.0);
  ctx.bezierCurveTo(443.8, 553.4, 445.7, 554.3, 445.3, 556.0);
  ctx.bezierCurveTo(445.7, 558.3, 443.3, 552.1, 443.3, 550.0);
  ctx.bezierCurveTo(442.2, 550.2, 442.8, 551.0, 443.3, 551.0);
  ctx.bezierCurveTo(443.5, 554.1, 439.3, 548.8, 442.3, 549.0);
  ctx.bezierCurveTo(437.2, 546.4, 433.6, 534.6, 428.3, 529.0);
  ctx.bezierCurveTo(428.8, 527.5, 429.2, 529.1, 430.3, 529.0);
  ctx.bezierCurveTo(429.6, 523.0, 423.3, 522.7, 419.3, 520.0);
  ctx.bezierCurveTo(419.1, 509.3, 427.8, 499.2, 438.3, 496.0);
  ctx.bezierCurveTo(438.1, 492.2, 434.6, 491.8, 434.3, 488.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(456.3, 516.0);
  ctx.bezierCurveTo(453.8, 511.6, 450.7, 504.4, 446.3, 500.0);
  ctx.bezierCurveTo(443.6, 502.7, 447.5, 502.2, 447.3, 505.0);
  ctx.bezierCurveTo(441.9, 507.2, 444.1, 517.2, 440.3, 521.0);
  ctx.bezierCurveTo(440.3, 515.0, 441.7, 508.8, 444.3, 503.0);
  ctx.bezierCurveTo(438.1, 500.9, 436.1, 507.8, 431.3, 510.0);
  ctx.bezierCurveTo(432.7, 516.3, 430.5, 521.5, 431.3, 526.0);
  ctx.bezierCurveTo(431.3, 525.8, 432.4, 530.6, 434.3, 532.0);
  ctx.bezierCurveTo(435.8, 533.1, 439.6, 544.1, 441.3, 546.0);
  ctx.bezierCurveTo(442.4, 547.2, 443.7, 546.1, 444.3, 547.0);
  ctx.bezierCurveTo(445.1, 548.2, 444.6, 550.8, 445.3, 552.0);
  ctx.bezierCurveTo(450.9, 561.3, 459.7, 569.9, 467.3, 580.0);
  ctx.bezierCurveTo(467.8, 571.2, 469.8, 566.4, 472.3, 558.0);
  ctx.bezierCurveTo(472.4, 559.2, 472.6, 560.4, 474.3, 560.0);
  ctx.bezierCurveTo(473.2, 554.4, 472.1, 548.9, 468.3, 546.0);
  ctx.bezierCurveTo(466.9, 541.3, 464.5, 536.1, 462.3, 531.0);
  ctx.bezierCurveTo(460.4, 526.4, 455.8, 520.7, 459.3, 517.0);
  ctx.bezierCurveTo(464.1, 529.9, 469.0, 542.6, 475.3, 554.0);
  ctx.bezierCurveTo(475.5, 552.5, 477.7, 553.1, 479.3, 553.0);
  ctx.bezierCurveTo(472.9, 536.8, 466.4, 520.6, 457.3, 507.0);
  ctx.bezierCurveTo(457.3, 508.7, 454.5, 507.6, 454.3, 509.0);
  ctx.bezierCurveTo(458.5, 509.5, 453.2, 516.6, 457.3, 512.0);
  ctx.bezierCurveTo(457.8, 514.2, 459.6, 517.4, 456.3, 518.0);
  ctx.bezierCurveTo(459.1, 515.4, 454.6, 513.0, 456.3, 516.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(441.3, 498.0);
  ctx.bezierCurveTo(433.3, 498.1, 425.4, 506.6, 422.3, 515.0);
  ctx.bezierCurveTo(425.5, 515.9, 424.4, 512.4, 426.3, 512.0);
  ctx.bezierCurveTo(427.4, 515.7, 423.8, 514.9, 424.3, 518.0);
  ctx.bezierCurveTo(425.8, 518.5, 426.8, 519.5, 428.3, 520.0);
  ctx.bezierCurveTo(430.3, 514.1, 427.2, 509.1, 432.3, 506.0);
  ctx.bezierCurveTo(432.5, 506.8, 432.3, 508.0, 433.3, 508.0);
  ctx.bezierCurveTo(435.2, 503.9, 440.2, 502.9, 441.3, 498.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(421.3, 518.0);
  ctx.bezierCurveTo(422.0, 518.0, 422.7, 518.0, 423.3, 518.0);
  ctx.bezierCurveTo(423.3, 517.3, 423.3, 516.7, 423.3, 516.0);
  ctx.bezierCurveTo(422.7, 516.0, 422.0, 516.0, 421.3, 516.0);
  ctx.bezierCurveTo(421.3, 516.7, 421.3, 517.3, 421.3, 518.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(477.3, 557.0);
  ctx.bezierCurveTo(481.1, 559.8, 481.7, 553.3, 477.3, 557.0);
  ctx.lineTo(477.3, 557.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(566.3, 103.0);
  ctx.bezierCurveTo(562.2, 113.2, 554.5, 119.8, 548.3, 128.0);
  ctx.bezierCurveTo(545.2, 127.8, 544.4, 125.2, 542.3, 124.0);
  ctx.bezierCurveTo(540.5, 126.5, 549.1, 127.2, 546.3, 134.0);
  ctx.bezierCurveTo(540.1, 129.9, 542.0, 122.3, 535.3, 120.0);
  ctx.bezierCurveTo(539.0, 117.6, 540.4, 113.0, 545.3, 112.0);
  ctx.bezierCurveTo(543.3, 114.8, 544.2, 121.2, 547.3, 122.0);
  ctx.bezierCurveTo(546.1, 119.0, 546.7, 110.6, 551.3, 108.0);
  ctx.bezierCurveTo(552.9, 111.1, 552.9, 119.9, 557.3, 117.0);
  ctx.bezierCurveTo(554.1, 115.5, 554.0, 111.0, 554.3, 106.0);
  ctx.bezierCurveTo(558.1, 103.8, 560.7, 100.4, 567.3, 101.0);
  ctx.bezierCurveTo(567.2, 102.2, 567.5, 102.8, 568.3, 103.0);
  ctx.bezierCurveTo(569.1, 106.1, 565.6, 104.9, 566.3, 108.0);
  ctx.bezierCurveTo(563.4, 107.1, 567.6, 105.5, 566.3, 103.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(538.3, 123.0);
  ctx.bezierCurveTo(537.3, 126.2, 539.5, 127.9, 543.3, 132.0);
  ctx.bezierCurveTo(540.7, 134.4, 542.2, 140.9, 540.3, 144.0);
  ctx.bezierCurveTo(543.6, 144.9, 544.3, 149.0, 541.3, 153.0);
  ctx.bezierCurveTo(543.3, 150.8, 545.3, 148.6, 547.3, 149.0);
  ctx.bezierCurveTo(550.2, 150.3, 546.5, 153.4, 546.3, 155.0);
  ctx.bezierCurveTo(544.2, 154.7, 547.8, 152.3, 545.3, 151.0);
  ctx.bezierCurveTo(535.7, 161.1, 528.7, 173.7, 512.3, 177.0);
  ctx.bezierCurveTo(512.5, 178.2, 514.1, 177.8, 515.3, 178.0);
  ctx.bezierCurveTo(514.1, 184.0, 507.7, 178.7, 503.3, 179.0);
  ctx.bezierCurveTo(503.6, 177.6, 505.8, 178.2, 507.3, 178.0);
  ctx.bezierCurveTo(498.0, 174.4, 486.5, 172.8, 481.3, 165.0);
  ctx.bezierCurveTo(481.9, 154.8, 478.5, 151.4, 480.3, 142.0);
  ctx.bezierCurveTo(486.0, 140.7, 490.5, 138.2, 493.3, 134.0);
  ctx.bezierCurveTo(492.8, 133.2, 492.3, 132.4, 492.3, 131.0);
  ctx.bezierCurveTo(489.8, 134.5, 486.9, 137.6, 480.3, 137.0);
  ctx.bezierCurveTo(478.5, 134.5, 475.5, 133.1, 475.3, 129.0);
  ctx.bezierCurveTo(482.9, 132.7, 483.2, 124.7, 488.3, 123.0);
  ctx.bezierCurveTo(491.3, 125.4, 491.6, 130.4, 495.3, 132.0);
  ctx.bezierCurveTo(498.3, 129.9, 492.8, 127.9, 493.3, 125.0);
  ctx.bezierCurveTo(497.7, 122.3, 497.6, 118.5, 503.3, 119.0);
  ctx.bezierCurveTo(502.7, 116.0, 501.2, 120.0, 499.3, 119.0);
  ctx.bezierCurveTo(500.4, 115.4, 502.6, 113.0, 504.3, 110.0);
  ctx.bezierCurveTo(507.9, 113.4, 513.7, 114.7, 520.3, 115.0);
  ctx.bezierCurveTo(521.6, 122.4, 536.2, 116.5, 536.3, 125.0);
  ctx.bezierCurveTo(537.2, 124.6, 538.1, 124.1, 538.3, 123.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(497.3, 139.0);
  ctx.bezierCurveTo(499.3, 131.5, 508.1, 128.1, 507.3, 125.0);
  ctx.bezierCurveTo(510.4, 125.0, 511.6, 127.0, 514.3, 125.0);
  ctx.bezierCurveTo(511.9, 124.4, 509.8, 123.6, 506.3, 124.0);
  ctx.bezierCurveTo(494.8, 130.9, 489.2, 165.3, 510.3, 162.0);
  ctx.bezierCurveTo(498.1, 160.9, 494.1, 150.8, 497.3, 139.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(529.3, 130.0);
  ctx.bezierCurveTo(526.5, 127.2, 521.3, 121.4, 515.3, 125.0);
  ctx.bezierCurveTo(523.3, 122.7, 526.0, 130.9, 529.3, 130.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(534.3, 134.0);
  ctx.bezierCurveTo(532.3, 133.7, 532.4, 131.3, 530.3, 131.0);
  ctx.bezierCurveTo(537.8, 147.2, 529.5, 163.7, 512.3, 164.0);
  ctx.bezierCurveTo(514.2, 163.9, 514.4, 164.8, 513.3, 166.0);
  ctx.bezierCurveTo(521.4, 164.7, 532.0, 160.7, 533.3, 156.0);
  ctx.bezierCurveTo(533.0, 156.9, 530.6, 160.4, 530.3, 158.0);
  ctx.bezierCurveTo(533.0, 155.5, 538.8, 151.8, 537.3, 151.0);
  ctx.bezierCurveTo(536.0, 150.8, 535.3, 156.1, 534.3, 153.0);
  ctx.bezierCurveTo(534.8, 149.7, 538.3, 144.4, 535.3, 141.0);
  ctx.bezierCurveTo(535.2, 142.2, 535.5, 143.8, 534.3, 144.0);
  ctx.bezierCurveTo(534.0, 141.2, 531.7, 135.4, 533.3, 134.0);
  ctx.bezierCurveTo(533.3, 134.6, 534.1, 135.1, 534.3, 134.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(528.3, 161.0);
  ctx.bezierCurveTo(526.0, 166.0, 519.7, 167.0, 516.3, 171.0);
  ctx.bezierCurveTo(521.0, 169.0, 528.4, 164.5, 528.3, 161.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(504.3, 137.0);
  ctx.bezierCurveTo(504.2, 151.4, 515.1, 155.9, 526.3, 149.0);
  ctx.bezierCurveTo(533.6, 135.6, 514.2, 127.0, 506.3, 137.0);
  ctx.bezierCurveTo(505.9, 134.9, 511.8, 131.9, 507.3, 132.0);
  ctx.bezierCurveTo(506.1, 133.5, 506.1, 136.1, 504.3, 137.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(487.3, 154.0);
  ctx.bezierCurveTo(487.5, 153.3, 487.0, 148.2, 486.3, 151.0);
  ctx.bezierCurveTo(485.4, 154.8, 486.9, 156.0, 487.3, 154.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(494.3, 171.0);
  ctx.bezierCurveTo(495.3, 172.9, 499.6, 171.1, 495.3, 171.0);
  ctx.bezierCurveTo(498.0, 168.4, 501.2, 166.2, 502.3, 162.0);
  ctx.bezierCurveTo(498.4, 163.7, 497.4, 168.4, 494.3, 171.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(504.3, 175.0);
  ctx.bezierCurveTo(509.4, 176.7, 516.1, 170.7, 514.3, 172.0);
  ctx.bezierCurveTo(510.6, 172.6, 507.4, 173.8, 504.3, 175.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(492.3, 181.0);
  ctx.bezierCurveTo(490.1, 178.6, 494.5, 182.2, 494.3, 184.0);
  ctx.bezierCurveTo(496.5, 182.8, 491.8, 179.9, 492.3, 177.0);
  ctx.bezierCurveTo(497.6, 178.8, 497.3, 180.0, 503.3, 181.0);
  ctx.bezierCurveTo(502.4, 184.9, 502.1, 187.2, 504.3, 190.0);
  ctx.bezierCurveTo(506.7, 189.7, 508.6, 189.0, 509.3, 187.0);
  ctx.bezierCurveTo(510.3, 187.6, 510.4, 189.3, 512.3, 189.0);
  ctx.bezierCurveTo(505.9, 202.6, 504.9, 221.6, 491.3, 228.0);
  ctx.bezierCurveTo(493.2, 238.8, 480.7, 243.2, 471.3, 246.0);
  ctx.bezierCurveTo(479.6, 248.1, 468.5, 249.1, 463.3, 249.0);
  ctx.bezierCurveTo(463.1, 245.9, 460.5, 245.1, 459.3, 243.0);
  ctx.bezierCurveTo(457.2, 244.2, 461.8, 247.1, 461.3, 250.0);
  ctx.bezierCurveTo(453.7, 250.1, 448.4, 248.5, 446.3, 247.0);
  ctx.bezierCurveTo(441.0, 243.0, 441.4, 237.9, 438.3, 232.0);
  ctx.bezierCurveTo(437.8, 231.0, 436.8, 231.0, 435.3, 231.0);
  ctx.bezierCurveTo(434.6, 227.9, 437.0, 228.1, 436.3, 225.0);
  ctx.bezierCurveTo(430.7, 229.7, 437.4, 238.4, 438.3, 240.0);
  ctx.bezierCurveTo(438.9, 241.0, 438.6, 240.9, 438.3, 243.0);
  ctx.bezierCurveTo(441.9, 240.0, 440.2, 246.2, 439.3, 243.0);
  ctx.bezierCurveTo(440.0, 245.2, 444.5, 249.0, 443.3, 254.0);
  ctx.bezierCurveTo(437.7, 253.3, 437.8, 252.9, 434.3, 250.0);
  ctx.bezierCurveTo(436.4, 253.6, 440.8, 260.1, 442.3, 261.0);
  ctx.bezierCurveTo(442.7, 266.6, 431.6, 264.2, 426.3, 264.0);
  ctx.bezierCurveTo(421.0, 253.7, 419.5, 247.4, 420.3, 234.0);
  ctx.bezierCurveTo(424.0, 236.6, 421.6, 245.3, 422.3, 251.0);
  ctx.bezierCurveTo(425.6, 247.5, 422.3, 242.2, 423.3, 240.0);
  ctx.bezierCurveTo(423.5, 239.7, 425.3, 241.5, 425.3, 242.0);
  ctx.bezierCurveTo(425.1, 239.7, 423.7, 237.9, 421.3, 233.0);
  ctx.bezierCurveTo(419.8, 228.0, 424.2, 222.2, 420.3, 221.0);
  ctx.bezierCurveTo(422.2, 217.7, 429.8, 219.2, 430.3, 223.0);
  ctx.bezierCurveTo(429.7, 219.8, 435.4, 221.5, 437.3, 224.0);
  ctx.bezierCurveTo(437.4, 218.9, 425.4, 217.2, 417.3, 217.0);
  ctx.bezierCurveTo(416.1, 212.9, 412.3, 213.0, 414.3, 208.0);
  ctx.bezierCurveTo(420.5, 208.5, 423.9, 206.2, 430.3, 207.0);
  ctx.bezierCurveTo(430.1, 207.8, 429.3, 208.0, 429.3, 209.0);
  ctx.bezierCurveTo(437.0, 209.0, 438.5, 215.1, 440.3, 221.0);
  ctx.bezierCurveTo(441.3, 215.8, 445.0, 219.6, 446.3, 215.0);
  ctx.bezierCurveTo(447.9, 214.8, 448.3, 221.5, 445.3, 220.0);
  ctx.bezierCurveTo(449.4, 222.8, 456.2, 226.3, 452.3, 234.0);
  ctx.bezierCurveTo(445.8, 232.9, 443.8, 227.2, 441.3, 222.0);
  ctx.bezierCurveTo(440.8, 227.2, 444.4, 236.9, 453.3, 236.0);
  ctx.bezierCurveTo(454.9, 234.3, 456.3, 232.4, 456.3, 229.0);
  ctx.bezierCurveTo(456.3, 225.3, 453.5, 224.5, 452.3, 222.0);
  ctx.bezierCurveTo(454.5, 217.1, 458.0, 214.3, 464.3, 216.0);
  ctx.bezierCurveTo(463.3, 217.7, 460.1, 217.1, 458.3, 218.0);
  ctx.bezierCurveTo(461.8, 221.0, 458.4, 220.8, 456.3, 223.0);
  ctx.bezierCurveTo(456.4, 225.2, 460.6, 223.4, 462.3, 224.0);
  ctx.bezierCurveTo(461.5, 226.2, 457.6, 225.3, 457.3, 228.0);
  ctx.bezierCurveTo(466.3, 223.0, 478.9, 221.6, 491.3, 220.0);
  ctx.bezierCurveTo(483.2, 217.9, 473.0, 222.4, 463.3, 222.0);
  ctx.bezierCurveTo(463.3, 223.0, 464.5, 222.8, 465.3, 223.0);
  ctx.bezierCurveTo(463.9, 226.0, 461.4, 221.7, 458.3, 223.0);
  ctx.bezierCurveTo(466.4, 218.1, 480.4, 219.0, 491.3, 217.0);
  ctx.bezierCurveTo(483.1, 215.4, 471.1, 218.7, 461.3, 219.0);
  ctx.bezierCurveTo(468.3, 216.6, 482.6, 213.3, 491.3, 214.0);
  ctx.bezierCurveTo(493.0, 214.1, 493.2, 214.4, 493.3, 216.0);
  ctx.bezierCurveTo(495.6, 210.3, 502.7, 204.1, 502.3, 199.0);
  ctx.bezierCurveTo(504.3, 199.3, 505.6, 195.7, 509.3, 195.0);
  ctx.bezierCurveTo(508.5, 192.7, 504.6, 195.5, 504.3, 197.0);
  ctx.bezierCurveTo(501.6, 196.1, 506.6, 194.8, 506.3, 193.0);
  ctx.bezierCurveTo(499.5, 196.9, 498.2, 206.2, 492.3, 211.0);
  ctx.bezierCurveTo(492.5, 210.2, 493.3, 210.0, 493.3, 209.0);
  ctx.bezierCurveTo(485.0, 209.4, 476.7, 209.7, 469.3, 211.0);
  ctx.bezierCurveTo(470.7, 207.7, 472.5, 204.9, 477.3, 205.0);
  ctx.bezierCurveTo(476.5, 202.1, 474.1, 205.6, 472.3, 205.0);
  ctx.bezierCurveTo(473.4, 200.3, 479.6, 202.4, 475.3, 197.0);
  ctx.bezierCurveTo(479.0, 197.0, 482.7, 197.0, 486.3, 197.0);
  ctx.bezierCurveTo(484.6, 194.7, 478.7, 196.6, 475.3, 196.0);
  ctx.bezierCurveTo(477.1, 193.8, 476.3, 189.0, 479.3, 188.0);
  ctx.bezierCurveTo(474.0, 183.1, 471.0, 168.2, 477.3, 163.0);
  ctx.bezierCurveTo(483.9, 166.9, 478.8, 177.3, 484.3, 183.0);
  ctx.bezierCurveTo(488.1, 185.9, 493.3, 187.4, 498.3, 189.0);
  ctx.bezierCurveTo(495.6, 187.1, 492.3, 185.7, 492.3, 181.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(465.3, 226.0);
  ctx.bezierCurveTo(464.3, 226.1, 464.5, 227.3, 466.3, 227.0);
  ctx.bezierCurveTo(474.0, 224.6, 483.3, 224.0, 490.3, 221.0);
  ctx.bezierCurveTo(481.2, 221.9, 474.0, 224.7, 465.3, 226.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(472.3, 209.0);
  ctx.bezierCurveTo(476.3, 209.0, 480.3, 209.0, 484.3, 209.0);
  ctx.bezierCurveTo(483.8, 205.1, 473.1, 206.7, 472.3, 209.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(487.3, 194.0);
  ctx.bezierCurveTo(491.0, 194.7, 497.6, 199.4, 500.3, 196.0);
  ctx.bezierCurveTo(492.8, 193.8, 477.9, 192.1, 487.3, 194.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(483.3, 200.0);
  ctx.bezierCurveTo(481.9, 200.5, 478.1, 198.8, 478.3, 201.0);
  ctx.bezierCurveTo(479.8, 200.5, 483.5, 202.2, 483.3, 200.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(486.3, 207.0);
  ctx.bezierCurveTo(488.8, 206.2, 494.9, 208.9, 494.3, 205.0);
  ctx.bezierCurveTo(491.3, 205.3, 486.5, 203.9, 486.3, 207.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(476.3, 227.0);
  ctx.bezierCurveTo(476.2, 227.0, 476.4, 227.9, 476.3, 228.0);
  ctx.bezierCurveTo(470.8, 231.9, 483.4, 224.6, 476.3, 227.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(425.3, 249.0);
  ctx.bezierCurveTo(425.6, 247.6, 424.7, 245.1, 424.3, 247.0);
  ctx.bezierCurveTo(424.0, 248.4, 424.9, 250.9, 425.3, 249.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(433.3, 251.0);
  ctx.bezierCurveTo(433.3, 250.3, 433.3, 249.7, 433.3, 249.0);
  ctx.bezierCurveTo(433.3, 248.4, 433.2, 247.8, 432.3, 248.0);
  ctx.bezierCurveTo(432.0, 251.5, 429.6, 244.5, 429.3, 248.0);
  ctx.bezierCurveTo(431.9, 247.7, 430.1, 251.9, 433.3, 251.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(426.3, 254.0);
  ctx.bezierCurveTo(426.6, 252.6, 425.7, 250.1, 425.3, 252.0);
  ctx.bezierCurveTo(425.0, 253.4, 425.9, 255.9, 426.3, 254.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(447.3, 201.0);
  ctx.bezierCurveTo(453.5, 199.5, 457.2, 195.5, 463.3, 194.0);
  ctx.bezierCurveTo(464.6, 189.9, 468.5, 182.6, 473.3, 179.0);
  ctx.bezierCurveTo(470.6, 183.3, 478.1, 183.9, 478.3, 187.0);
  ctx.bezierCurveTo(478.5, 189.9, 476.2, 187.7, 474.3, 191.0);
  ctx.bezierCurveTo(472.3, 194.4, 475.3, 200.4, 468.3, 199.0);
  ctx.bezierCurveTo(468.6, 200.4, 470.8, 199.8, 472.3, 200.0);
  ctx.bezierCurveTo(471.3, 204.0, 469.0, 206.6, 468.3, 211.0);
  ctx.bezierCurveTo(459.4, 208.2, 457.1, 219.5, 448.3, 220.0);
  ctx.bezierCurveTo(448.3, 217.7, 448.3, 215.3, 448.3, 213.0);
  ctx.bezierCurveTo(445.6, 212.3, 446.4, 215.1, 445.3, 216.0);
  ctx.bezierCurveTo(443.4, 217.1, 446.9, 209.8, 444.3, 213.0);
  ctx.bezierCurveTo(443.9, 212.4, 449.8, 206.1, 447.3, 201.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(458.3, 496.0);
  ctx.bezierCurveTo(456.3, 487.5, 468.8, 487.8, 476.3, 490.0);
  ctx.bezierCurveTo(470.4, 482.0, 462.9, 487.4, 454.3, 489.0);
  ctx.bezierCurveTo(452.8, 482.1, 449.5, 477.2, 446.3, 472.0);
  ctx.bezierCurveTo(454.8, 469.6, 467.6, 471.3, 475.3, 473.0);
  ctx.bezierCurveTo(476.9, 476.8, 478.2, 480.8, 479.3, 485.0);
  ctx.bezierCurveTo(477.0, 484.7, 477.1, 481.9, 475.3, 481.0);
  ctx.bezierCurveTo(476.6, 489.0, 480.4, 494.6, 482.3, 502.0);
  ctx.bezierCurveTo(479.4, 499.6, 478.2, 495.5, 477.3, 491.0);
  ctx.bezierCurveTo(475.6, 491.9, 475.1, 494.1, 475.3, 497.0);
  ctx.bezierCurveTo(475.6, 487.4, 461.5, 490.2, 458.3, 496.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(457.3, 467.0);
  ctx.bezierCurveTo(455.5, 470.1, 445.5, 467.8, 443.3, 465.0);
  ctx.bezierCurveTo(445.1, 467.8, 438.0, 470.5, 439.3, 470.0);
  ctx.bezierCurveTo(434.9, 470.7, 432.4, 461.0, 426.3, 460.0);
  ctx.bezierCurveTo(430.8, 460.4, 436.9, 457.4, 443.3, 460.0);
  ctx.bezierCurveTo(446.8, 461.4, 447.9, 466.2, 451.3, 467.0);
  ctx.bezierCurveTo(458.0, 468.5, 461.4, 465.2, 466.3, 461.0);
  ctx.bezierCurveTo(465.5, 457.8, 463.4, 456.0, 463.3, 452.0);
  ctx.bezierCurveTo(466.7, 451.0, 464.9, 455.1, 465.3, 457.0);
  ctx.bezierCurveTo(466.3, 457.0, 466.1, 455.8, 466.3, 455.0);
  ctx.bezierCurveTo(469.9, 459.1, 470.5, 466.2, 474.3, 470.0);
  ctx.bezierCurveTo(471.4, 471.0, 459.1, 470.0, 457.3, 467.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(436.3, 470.0);
  ctx.bezierCurveTo(433.4, 477.7, 425.3, 480.4, 420.3, 486.0);
  ctx.bezierCurveTo(411.8, 495.7, 406.4, 507.8, 400.3, 520.0);
  ctx.bezierCurveTo(399.5, 519.5, 398.7, 519.0, 397.3, 519.0);
  ctx.bezierCurveTo(398.0, 520.0, 399.6, 520.0, 399.3, 522.0);
  ctx.bezierCurveTo(393.7, 521.6, 391.7, 517.7, 386.3, 517.0);
  ctx.bezierCurveTo(383.1, 506.2, 376.9, 498.4, 375.3, 486.0);
  ctx.bezierCurveTo(379.0, 490.7, 375.2, 483.2, 376.3, 479.0);
  ctx.bezierCurveTo(389.0, 467.2, 396.4, 445.3, 416.3, 444.0);
  ctx.bezierCurveTo(417.3, 447.2, 415.6, 449.2, 420.3, 450.0);
  ctx.bezierCurveTo(420.5, 448.6, 416.5, 442.8, 415.3, 442.0);
  ctx.bezierCurveTo(417.4, 439.9, 422.1, 443.8, 422.3, 447.0);
  ctx.bezierCurveTo(424.6, 446.2, 421.8, 442.3, 420.3, 442.0);
  ctx.bezierCurveTo(422.6, 436.9, 428.6, 443.2, 429.3, 442.0);
  ctx.bezierCurveTo(429.2, 443.9, 430.8, 448.0, 432.3, 451.0);
  ctx.bezierCurveTo(433.6, 450.8, 433.6, 448.0, 432.3, 448.0);
  ctx.bezierCurveTo(434.7, 447.6, 438.5, 454.4, 441.3, 457.0);
  ctx.bezierCurveTo(437.7, 459.6, 427.8, 453.5, 424.3, 458.0);
  ctx.bezierCurveTo(422.9, 457.6, 424.4, 457.1, 424.3, 456.0);
  ctx.bezierCurveTo(411.8, 465.6, 401.5, 478.4, 392.3, 493.0);
  ctx.bezierCurveTo(388.6, 498.9, 383.3, 504.8, 385.3, 512.0);
  ctx.bezierCurveTo(386.9, 510.5, 387.4, 508.1, 387.3, 505.0);
  ctx.bezierCurveTo(388.3, 505.0, 388.1, 506.2, 388.3, 507.0);
  ctx.bezierCurveTo(394.7, 494.0, 401.4, 481.5, 412.3, 473.0);
  ctx.bezierCurveTo(408.7, 471.6, 419.9, 462.9, 425.3, 461.0);
  ctx.bezierCurveTo(430.8, 462.2, 431.5, 468.2, 436.3, 470.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(429.3, 455.0);
  ctx.bezierCurveTo(428.3, 453.9, 427.3, 447.9, 425.3, 451.0);
  ctx.bezierCurveTo(427.0, 451.4, 428.2, 457.3, 429.3, 455.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(413.3, 500.0);
  ctx.bezierCurveTo(415.6, 498.1, 410.8, 504.2, 410.3, 506.0);
  ctx.bezierCurveTo(408.4, 505.0, 412.3, 501.4, 413.3, 500.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(403.3, 517.0);
  ctx.bezierCurveTo(404.7, 517.2, 402.8, 522.4, 400.3, 522.0);
  ctx.bezierCurveTo(400.9, 519.9, 402.4, 518.8, 403.3, 517.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(412.3, 543.0);
  ctx.bezierCurveTo(416.4, 542.9, 418.8, 553.1, 423.3, 556.0);
  ctx.bezierCurveTo(419.4, 555.9, 416.1, 546.5, 412.3, 543.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(318.3, 312.0);
  ctx.bezierCurveTo(319.6, 315.3, 321.2, 317.4, 321.3, 327.0);
  ctx.bezierCurveTo(320.5, 326.8, 320.3, 326.0, 319.3, 326.0);
  ctx.bezierCurveTo(318.6, 328.7, 321.4, 327.9, 322.3, 329.0);
  ctx.bezierCurveTo(316.5, 330.8, 311.8, 322.9, 310.3, 317.0);
  ctx.bezierCurveTo(309.5, 317.5, 308.7, 318.0, 307.3, 318.0);
  ctx.bezierCurveTo(305.7, 310.9, 308.2, 305.3, 305.3, 299.0);
  ctx.bezierCurveTo(309.8, 303.2, 312.5, 309.1, 320.3, 310.0);
  ctx.bezierCurveTo(318.9, 312.6, 314.2, 310.2, 312.3, 310.0);
  ctx.bezierCurveTo(313.4, 311.0, 317.2, 314.3, 318.3, 312.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(322.3, 320.0);
  ctx.bezierCurveTo(324.0, 318.4, 329.1, 321.8, 333.3, 321.0);
  ctx.bezierCurveTo(330.2, 318.8, 323.9, 319.8, 321.3, 317.0);
  ctx.bezierCurveTo(321.2, 312.5, 323.9, 317.9, 326.3, 317.0);
  ctx.bezierCurveTo(326.0, 314.6, 321.6, 316.4, 322.3, 313.0);
  ctx.bezierCurveTo(327.7, 314.1, 329.0, 311.0, 333.3, 311.0);
  ctx.bezierCurveTo(329.7, 307.7, 326.0, 313.0, 321.3, 312.0);
  ctx.bezierCurveTo(322.7, 308.4, 329.5, 310.2, 332.3, 308.0);
  ctx.bezierCurveTo(331.0, 306.4, 325.4, 309.0, 321.3, 308.0);
  ctx.bezierCurveTo(319.6, 305.0, 319.6, 296.7, 322.3, 295.0);
  ctx.bezierCurveTo(320.2, 295.6, 319.1, 297.1, 317.3, 298.0);
  ctx.bezierCurveTo(320.6, 299.1, 319.0, 305.0, 319.3, 309.0);
  ctx.bezierCurveTo(309.6, 305.7, 305.9, 296.9, 303.3, 289.0);
  ctx.bezierCurveTo(318.4, 288.1, 338.0, 287.3, 355.3, 291.0);
  ctx.bezierCurveTo(351.1, 295.1, 342.5, 302.6, 335.3, 307.0);
  ctx.bezierCurveTo(343.0, 303.0, 352.3, 300.6, 356.3, 293.0);
  ctx.bezierCurveTo(359.8, 293.0, 358.2, 298.4, 359.3, 296.0);
  ctx.bezierCurveTo(361.7, 298.4, 356.4, 301.7, 357.3, 306.0);
  ctx.bezierCurveTo(359.7, 304.4, 359.4, 300.1, 361.3, 298.0);
  ctx.bezierCurveTo(362.9, 301.8, 358.4, 306.3, 361.3, 311.0);
  ctx.bezierCurveTo(363.7, 309.4, 363.4, 305.1, 365.3, 303.0);
  ctx.bezierCurveTo(367.6, 305.3, 362.8, 309.1, 362.3, 312.0);
  ctx.bezierCurveTo(365.2, 314.2, 361.4, 316.9, 365.3, 318.0);
  ctx.bezierCurveTo(356.4, 326.2, 336.7, 335.4, 322.3, 326.0);
  ctx.bezierCurveTo(324.7, 322.2, 330.4, 329.9, 336.3, 329.0);
  ctx.bezierCurveTo(330.8, 326.3, 323.2, 324.6, 322.3, 320.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(354.3, 301.0);
  ctx.bezierCurveTo(353.8, 298.1, 359.3, 296.1, 356.3, 294.0);
  ctx.bezierCurveTo(356.1, 296.2, 351.8, 299.4, 354.3, 301.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(327.3, 324.0);
  ctx.bezierCurveTo(330.7, 324.8, 333.0, 322.5, 328.3, 323.0);
  ctx.bezierCurveTo(328.2, 321.7, 322.2, 321.7, 325.3, 323.0);
  ctx.bezierCurveTo(326.1, 323.2, 327.3, 323.0, 327.3, 324.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(305.3, 291.0);
  ctx.bezierCurveTo(310.9, 289.4, 314.4, 296.5, 316.3, 290.0);
  ctx.bezierCurveTo(313.3, 290.4, 303.4, 289.0, 305.3, 291.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(317.3, 294.0);
  ctx.bezierCurveTo(321.0, 296.1, 321.8, 288.9, 318.3, 290.0);
  ctx.bezierCurveTo(318.4, 291.7, 318.1, 293.1, 317.3, 294.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(336.3, 324.0);
  ctx.bezierCurveTo(329.9, 322.8, 334.1, 327.1, 336.3, 324.0);
  ctx.lineTo(336.3, 324.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(306.3, 307.0);
  ctx.bezierCurveTo(303.7, 304.6, 300.3, 294.4, 300.3, 286.0);
  ctx.bezierCurveTo(303.1, 292.2, 303.9, 300.4, 306.3, 307.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(539.3, 82.0);
  ctx.bezierCurveTo(541.6, 83.1, 536.4, 85.0, 537.3, 88.0);
  ctx.bezierCurveTo(534.0, 85.9, 539.0, 83.8, 539.3, 82.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(483.3, 118.0);
  ctx.bezierCurveTo(489.2, 121.6, 480.4, 128.0, 478.3, 127.0);
  ctx.bezierCurveTo(476.2, 124.1, 484.1, 122.8, 483.3, 118.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(510.3, 162.0);
  ctx.bezierCurveTo(489.2, 165.3, 494.8, 130.9, 506.3, 124.0);
  ctx.bezierCurveTo(509.8, 123.6, 511.9, 124.4, 514.3, 125.0);
  ctx.bezierCurveTo(511.6, 127.0, 510.4, 125.0, 507.3, 125.0);
  ctx.bezierCurveTo(508.1, 128.1, 499.3, 131.5, 497.3, 139.0);
  ctx.bezierCurveTo(494.1, 150.8, 498.1, 160.9, 510.3, 162.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(515.3, 125.0);
  ctx.bezierCurveTo(521.3, 121.4, 526.5, 127.2, 529.3, 130.0);
  ctx.bezierCurveTo(526.0, 130.9, 523.3, 122.7, 515.3, 125.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(533.3, 134.0);
  ctx.bezierCurveTo(531.7, 135.4, 534.0, 141.2, 534.3, 144.0);
  ctx.bezierCurveTo(535.5, 143.8, 535.2, 142.2, 535.3, 141.0);
  ctx.bezierCurveTo(538.3, 144.4, 534.8, 149.7, 534.3, 153.0);
  ctx.bezierCurveTo(535.3, 156.1, 536.0, 150.8, 537.3, 151.0);
  ctx.bezierCurveTo(538.8, 151.8, 533.0, 155.5, 530.3, 158.0);
  ctx.bezierCurveTo(530.6, 160.4, 533.0, 156.9, 533.3, 156.0);
  ctx.bezierCurveTo(532.0, 160.7, 521.4, 164.7, 513.3, 166.0);
  ctx.bezierCurveTo(514.4, 164.8, 514.2, 163.9, 512.3, 164.0);
  ctx.bezierCurveTo(529.5, 163.7, 537.8, 147.2, 530.3, 131.0);
  ctx.bezierCurveTo(532.4, 131.3, 532.3, 133.7, 534.3, 134.0);
  ctx.bezierCurveTo(534.1, 135.1, 533.3, 134.6, 533.3, 134.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(516.3, 171.0);
  ctx.bezierCurveTo(519.7, 167.0, 526.0, 166.0, 528.3, 161.0);
  ctx.bezierCurveTo(528.4, 164.5, 521.0, 169.0, 516.3, 171.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(507.3, 132.0);
  ctx.bezierCurveTo(511.8, 131.9, 505.9, 134.9, 506.3, 137.0);
  ctx.bezierCurveTo(514.2, 127.0, 533.6, 135.6, 526.3, 149.0);
  ctx.bezierCurveTo(515.1, 155.9, 504.2, 151.4, 504.3, 137.0);
  ctx.bezierCurveTo(506.1, 136.1, 506.1, 133.5, 507.3, 132.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(512.3, 137.0);
  ctx.bezierCurveTo(514.2, 136.6, 518.3, 138.4, 517.3, 135.0);
  ctx.bezierCurveTo(515.3, 135.0, 513.3, 135.0, 511.3, 135.0);
  ctx.bezierCurveTo(500.1, 149.5, 524.9, 155.1, 525.3, 142.0);
  ctx.bezierCurveTo(525.4, 138.7, 521.5, 132.3, 518.3, 137.0);
  ctx.bezierCurveTo(518.9, 138.7, 523.1, 136.9, 523.3, 139.0);
  ctx.bezierCurveTo(516.8, 138.5, 518.2, 139.8, 512.3, 137.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(398.3, 136.0);
  ctx.bezierCurveTo(398.9, 138.1, 397.1, 142.6, 399.3, 143.0);
  ctx.bezierCurveTo(393.6, 148.7, 388.8, 155.1, 383.3, 161.0);
  ctx.bezierCurveTo(388.7, 160.3, 391.5, 162.1, 395.3, 163.0);
  ctx.bezierCurveTo(395.0, 164.3, 393.6, 164.6, 393.3, 166.0);
  ctx.bezierCurveTo(394.8, 166.5, 398.7, 162.2, 402.3, 166.0);
  ctx.bezierCurveTo(403.1, 171.7, 400.5, 174.2, 399.3, 178.0);
  ctx.bezierCurveTo(399.7, 181.7, 402.7, 182.6, 405.3, 184.0);
  ctx.bezierCurveTo(404.4, 186.0, 403.3, 188.0, 402.3, 190.0);
  ctx.bezierCurveTo(397.2, 188.1, 393.6, 184.7, 387.3, 184.0);
  ctx.bezierCurveTo(387.2, 178.9, 389.8, 176.5, 391.3, 173.0);
  ctx.bezierCurveTo(390.6, 172.1, 389.5, 171.5, 388.3, 171.0);
  ctx.bezierCurveTo(383.5, 171.5, 383.6, 177.0, 381.3, 180.0);
  ctx.bezierCurveTo(378.1, 180.6, 376.7, 179.3, 374.3, 179.0);
  ctx.bezierCurveTo(376.9, 172.6, 380.8, 167.5, 384.3, 162.0);
  ctx.bezierCurveTo(377.6, 164.6, 376.4, 172.7, 372.3, 178.0);
  ctx.bezierCurveTo(365.1, 174.4, 354.4, 179.5, 350.3, 174.0);
  ctx.bezierCurveTo(352.2, 167.8, 368.3, 167.2, 372.3, 172.0);
  ctx.bezierCurveTo(373.7, 171.0, 375.3, 170.4, 376.3, 169.0);
  ctx.bezierCurveTo(376.2, 167.1, 372.6, 170.6, 371.3, 168.0);
  ctx.bezierCurveTo(372.4, 165.8, 373.0, 163.0, 374.3, 161.0);
  ctx.bezierCurveTo(375.5, 161.8, 377.0, 162.3, 379.3, 162.0);
  ctx.bezierCurveTo(388.2, 155.9, 390.4, 143.1, 398.3, 136.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(335.3, 138.0);
  ctx.bezierCurveTo(337.2, 139.8, 339.0, 141.7, 338.3, 146.0);
  ctx.bezierCurveTo(336.6, 144.1, 336.2, 140.8, 335.3, 138.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(475.3, 161.0);
  ctx.bezierCurveTo(474.4, 164.0, 473.3, 167.0, 472.3, 170.0);
  ctx.bezierCurveTo(463.9, 171.3, 459.8, 176.8, 455.3, 182.0);
  ctx.bezierCurveTo(455.0, 179.3, 454.6, 180.6, 453.3, 178.0);
  ctx.bezierCurveTo(443.7, 180.3, 437.5, 180.3, 429.3, 183.0);
  ctx.bezierCurveTo(428.8, 177.7, 435.2, 175.1, 439.3, 173.0);
  ctx.bezierCurveTo(446.5, 169.3, 454.5, 167.2, 463.3, 164.0);
  ctx.bezierCurveTo(449.4, 162.1, 438.9, 172.2, 428.3, 177.0);
  ctx.bezierCurveTo(423.8, 176.1, 418.0, 173.8, 414.3, 175.0);
  ctx.bezierCurveTo(416.1, 169.8, 421.7, 168.4, 424.3, 164.0);
  ctx.bezierCurveTo(419.1, 166.4, 408.5, 172.2, 407.3, 182.0);
  ctx.bezierCurveTo(404.2, 182.7, 405.4, 179.3, 402.3, 180.0);
  ctx.bezierCurveTo(403.0, 176.3, 403.4, 172.4, 404.3, 169.0);
  ctx.bezierCurveTo(409.9, 170.5, 406.3, 167.1, 406.3, 167.0);
  ctx.bezierCurveTo(407.6, 162.5, 423.1, 157.6, 429.3, 156.0);
  ctx.bezierCurveTo(428.2, 158.2, 424.4, 157.8, 423.3, 160.0);
  ctx.bezierCurveTo(424.4, 162.1, 427.3, 157.0, 428.3, 161.0);
  ctx.bezierCurveTo(435.7, 151.9, 455.7, 155.2, 466.3, 157.0);
  ctx.bezierCurveTo(466.7, 160.3, 470.6, 159.1, 475.3, 161.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(502.3, 162.0);
  ctx.bezierCurveTo(501.2, 166.2, 498.0, 168.4, 495.3, 171.0);
  ctx.bezierCurveTo(499.6, 171.1, 495.3, 172.9, 494.3, 171.0);
  ctx.bezierCurveTo(497.4, 168.4, 498.4, 163.7, 502.3, 162.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(490.3, 221.0);
  ctx.bezierCurveTo(483.3, 224.0, 474.0, 224.6, 466.3, 227.0);
  ctx.bezierCurveTo(464.5, 227.3, 464.3, 226.1, 465.3, 226.0);
  ctx.bezierCurveTo(474.0, 224.7, 481.2, 221.9, 490.3, 221.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(483.3, 171.0);
  ctx.bezierCurveTo(485.3, 168.8, 488.4, 173.9, 488.3, 177.0);
  ctx.bezierCurveTo(489.3, 177.0, 489.1, 175.8, 489.3, 175.0);
  ctx.bezierCurveTo(490.7, 175.7, 491.2, 177.1, 491.3, 179.0);
  ctx.bezierCurveTo(490.3, 179.0, 490.5, 177.8, 490.3, 177.0);
  ctx.bezierCurveTo(487.8, 177.2, 490.0, 180.4, 490.3, 181.0);
  ctx.bezierCurveTo(487.8, 181.8, 487.6, 171.7, 483.3, 171.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(514.3, 172.0);
  ctx.bezierCurveTo(516.1, 170.7, 509.4, 176.7, 504.3, 175.0);
  ctx.bezierCurveTo(507.4, 173.8, 510.6, 172.6, 514.3, 172.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(303.3, 175.0);
  ctx.bezierCurveTo(306.8, 174.4, 309.3, 173.0, 312.3, 172.0);
  ctx.bezierCurveTo(313.7, 176.3, 309.0, 180.7, 308.3, 185.0);
  ctx.bezierCurveTo(308.1, 186.5, 309.7, 187.0, 309.3, 188.0);
  ctx.bezierCurveTo(307.8, 192.3, 303.5, 195.5, 302.3, 200.0);
  ctx.bezierCurveTo(299.4, 186.7, 298.9, 186.4, 303.3, 175.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(345.3, 172.0);
  ctx.bezierCurveTo(341.2, 176.3, 335.2, 183.6, 325.3, 185.0);
  ctx.bezierCurveTo(333.9, 182.5, 337.1, 171.8, 345.3, 172.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(288.3, 208.0);
  ctx.bezierCurveTo(289.3, 208.7, 289.8, 209.8, 290.3, 211.0);
  ctx.bezierCurveTo(289.9, 213.5, 288.2, 209.3, 288.3, 208.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(464.3, 176.0);
  ctx.bezierCurveTo(466.6, 175.8, 458.0, 183.3, 464.3, 176.0);
  ctx.lineTo(464.3, 176.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(288.3, 176.0);
  ctx.bezierCurveTo(287.0, 178.0, 283.9, 178.2, 281.3, 179.0);
  ctx.bezierCurveTo(282.6, 177.0, 285.8, 176.8, 288.3, 176.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(337.3, 220.0);
  ctx.bezierCurveTo(334.7, 221.5, 329.6, 219.3, 326.3, 222.0);
  ctx.bezierCurveTo(328.7, 222.3, 338.2, 221.3, 341.3, 224.0);
  ctx.bezierCurveTo(344.9, 234.8, 339.7, 247.0, 333.3, 252.0);
  ctx.bezierCurveTo(331.6, 253.4, 323.5, 255.6, 330.3, 256.0);
  ctx.bezierCurveTo(311.0, 263.3, 305.6, 232.3, 317.3, 223.0);
  ctx.bezierCurveTo(314.6, 223.9, 313.1, 226.2, 312.3, 229.0);
  ctx.bezierCurveTo(309.0, 223.0, 317.5, 220.2, 319.3, 216.0);
  ctx.bezierCurveTo(316.0, 216.4, 315.0, 219.0, 313.3, 221.0);
  ctx.bezierCurveTo(312.0, 220.7, 312.5, 218.5, 312.3, 217.0);
  ctx.bezierCurveTo(308.8, 228.4, 304.7, 230.6, 306.3, 244.0);
  ctx.bezierCurveTo(303.0, 243.5, 304.0, 238.3, 303.3, 235.0);
  ctx.bezierCurveTo(302.5, 230.8, 300.1, 226.0, 302.3, 221.0);
  ctx.bezierCurveTo(301.1, 222.1, 300.3, 221.9, 300.3, 220.0);
  ctx.bezierCurveTo(298.6, 222.0, 299.2, 226.2, 298.3, 229.0);
  ctx.bezierCurveTo(301.5, 220.1, 303.3, 248.8, 306.3, 254.0);
  ctx.bezierCurveTo(301.4, 258.4, 298.4, 264.7, 297.3, 273.0);
  ctx.bezierCurveTo(293.9, 271.7, 293.7, 267.3, 293.3, 263.0);
  ctx.bezierCurveTo(290.3, 266.7, 293.9, 272.4, 293.3, 277.0);
  ctx.bezierCurveTo(288.4, 268.0, 287.3, 245.8, 292.3, 236.0);
  ctx.bezierCurveTo(293.7, 236.3, 293.1, 238.5, 293.3, 240.0);
  ctx.bezierCurveTo(297.1, 228.4, 298.3, 214.3, 304.3, 205.0);
  ctx.bezierCurveTo(299.8, 208.1, 294.4, 224.4, 294.3, 232.0);
  ctx.bezierCurveTo(292.3, 231.7, 293.5, 234.3, 290.3, 235.0);
  ctx.bezierCurveTo(294.9, 217.9, 301.2, 202.6, 310.3, 190.0);
  ctx.bezierCurveTo(312.7, 192.1, 308.2, 195.8, 307.3, 198.0);
  ctx.bezierCurveTo(313.7, 198.0, 316.5, 201.5, 323.3, 201.0);
  ctx.bezierCurveTo(321.9, 206.6, 321.6, 213.2, 321.3, 220.0);
  ctx.bezierCurveTo(326.9, 218.4, 332.1, 217.3, 337.3, 220.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(320.3, 210.0);
  ctx.bezierCurveTo(320.2, 208.3, 320.9, 200.9, 319.3, 204.0);
  ctx.bezierCurveTo(319.4, 205.7, 318.8, 213.1, 320.3, 210.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(313.3, 214.0);
  ctx.bezierCurveTo(313.6, 212.6, 312.7, 210.1, 312.3, 212.0);
  ctx.bezierCurveTo(312.0, 213.4, 312.9, 215.9, 313.3, 214.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(331.3, 251.0);
  ctx.bezierCurveTo(326.7, 251.6, 325.6, 248.8, 321.3, 249.0);
  ctx.bezierCurveTo(315.7, 241.5, 319.5, 227.7, 325.3, 223.0);
  ctx.bezierCurveTo(313.7, 228.7, 312.3, 255.9, 331.3, 251.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(295.3, 250.0);
  ctx.bezierCurveTo(292.6, 249.7, 294.2, 239.9, 292.3, 242.0);
  ctx.bezierCurveTo(292.3, 245.1, 292.9, 252.7, 295.3, 250.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(375.3, 182.0);
  ctx.bezierCurveTo(376.8, 183.2, 377.8, 184.9, 380.3, 185.0);
  ctx.bezierCurveTo(379.4, 186.8, 377.5, 187.5, 378.3, 191.0);
  ctx.bezierCurveTo(369.6, 191.9, 363.1, 195.1, 355.3, 197.0);
  ctx.bezierCurveTo(350.1, 203.8, 342.2, 207.8, 339.3, 217.0);
  ctx.bezierCurveTo(342.1, 217.2, 341.8, 214.2, 343.3, 213.0);
  ctx.bezierCurveTo(346.6, 215.6, 357.2, 215.4, 354.3, 221.0);
  ctx.bezierCurveTo(363.5, 218.9, 369.2, 213.2, 376.3, 209.0);
  ctx.bezierCurveTo(378.5, 209.1, 376.7, 213.2, 377.3, 215.0);
  ctx.bezierCurveTo(379.6, 209.9, 379.6, 214.6, 378.3, 218.0);
  ctx.bezierCurveTo(379.3, 217.4, 379.8, 215.2, 380.3, 217.0);
  ctx.bezierCurveTo(380.1, 217.9, 380.7, 217.9, 381.3, 218.0);
  ctx.bezierCurveTo(382.2, 220.9, 379.4, 218.7, 379.3, 219.0);
  ctx.bezierCurveTo(378.9, 220.0, 381.1, 221.6, 379.3, 224.0);
  ctx.bezierCurveTo(375.5, 229.2, 370.3, 236.3, 367.3, 245.0);
  ctx.bezierCurveTo(366.4, 247.8, 367.3, 250.6, 366.3, 253.0);
  ctx.bezierCurveTo(363.5, 260.0, 356.7, 261.9, 354.3, 267.0);
  ctx.bezierCurveTo(349.7, 263.5, 348.4, 250.9, 341.3, 256.0);
  ctx.bezierCurveTo(342.5, 259.0, 345.1, 254.5, 346.3, 257.0);
  ctx.bezierCurveTo(343.6, 262.4, 352.9, 263.5, 353.3, 269.0);
  ctx.bezierCurveTo(349.0, 270.3, 346.5, 277.7, 343.3, 283.0);
  ctx.bezierCurveTo(336.1, 280.6, 321.0, 284.0, 319.3, 279.0);
  ctx.bezierCurveTo(316.8, 284.1, 307.5, 282.5, 300.3, 283.0);
  ctx.bezierCurveTo(296.3, 270.4, 303.1, 259.9, 309.3, 252.0);
  ctx.bezierCurveTo(305.5, 249.9, 308.3, 251.6, 308.3, 249.0);
  ctx.bezierCurveTo(308.4, 246.8, 306.5, 247.8, 306.3, 247.0);
  ctx.bezierCurveTo(305.5, 242.6, 309.4, 233.0, 309.3, 229.0);
  ctx.bezierCurveTo(310.4, 235.9, 308.5, 248.5, 311.3, 253.0);
  ctx.bezierCurveTo(307.6, 256.6, 305.4, 261.8, 303.3, 267.0);
  ctx.bezierCurveTo(306.6, 267.0, 307.1, 264.2, 307.3, 261.0);
  ctx.bezierCurveTo(309.8, 264.8, 312.8, 268.1, 316.3, 271.0);
  ctx.bezierCurveTo(312.1, 267.1, 307.3, 258.0, 312.3, 251.0);
  ctx.bezierCurveTo(319.7, 262.0, 340.5, 257.6, 347.3, 249.0);
  ctx.bezierCurveTo(341.8, 251.2, 340.3, 251.3, 336.3, 255.0);
  ctx.bezierCurveTo(333.1, 252.8, 337.1, 253.0, 338.3, 252.0);
  ctx.bezierCurveTo(341.8, 249.1, 347.7, 242.6, 352.3, 238.0);
  ctx.bezierCurveTo(357.5, 232.8, 345.8, 244.7, 343.3, 245.0);
  ctx.bezierCurveTo(345.9, 241.9, 349.0, 239.3, 351.3, 236.0);
  ctx.bezierCurveTo(349.2, 236.6, 347.9, 237.9, 347.3, 240.0);
  ctx.bezierCurveTo(344.6, 237.9, 350.0, 237.1, 347.3, 234.0);
  ctx.bezierCurveTo(349.6, 237.9, 349.1, 233.3, 351.3, 232.0);
  ctx.bezierCurveTo(351.1, 230.9, 350.3, 231.4, 350.3, 232.0);
  ctx.bezierCurveTo(348.8, 225.5, 345.3, 221.0, 340.3, 218.0);
  ctx.bezierCurveTo(339.8, 221.5, 343.9, 220.5, 343.3, 224.0);
  ctx.bezierCurveTo(341.0, 222.0, 338.0, 220.7, 337.3, 217.0);
  ctx.bezierCurveTo(332.3, 216.7, 328.1, 217.2, 324.3, 218.0);
  ctx.bezierCurveTo(324.3, 212.3, 324.3, 206.7, 324.3, 201.0);
  ctx.bezierCurveTo(331.2, 196.9, 341.8, 196.5, 353.3, 197.0);
  ctx.bezierCurveTo(353.7, 194.7, 357.7, 196.0, 357.3, 193.0);
  ctx.bezierCurveTo(367.3, 193.3, 368.0, 184.4, 375.3, 182.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(342.3, 251.0);
  ctx.bezierCurveTo(343.0, 249.5, 349.1, 245.5, 346.3, 247.0);
  ctx.bezierCurveTo(344.9, 247.7, 340.0, 249.9, 342.3, 251.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(352.3, 234.0);
  ctx.bezierCurveTo(355.4, 234.5, 354.0, 228.5, 352.3, 232.0);
  ctx.bezierCurveTo(355.0, 231.7, 349.3, 236.7, 352.3, 234.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(355.3, 245.0);
  ctx.bezierCurveTo(356.1, 243.7, 360.4, 240.9, 358.3, 240.0);
  ctx.bezierCurveTo(358.3, 242.1, 352.9, 243.8, 355.3, 245.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(351.3, 243.0);
  ctx.bezierCurveTo(344.2, 248.1, 353.4, 241.5, 351.3, 243.0);
  ctx.lineTo(351.3, 243.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(349.3, 248.0);
  ctx.bezierCurveTo(351.2, 248.2, 348.8, 249.6, 350.3, 250.0);
  ctx.bezierCurveTo(350.1, 248.0, 354.6, 245.7, 352.3, 245.0);
  ctx.bezierCurveTo(352.6, 247.3, 349.4, 246.1, 349.3, 248.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(335.3, 280.0);
  ctx.bezierCurveTo(338.1, 278.9, 339.0, 274.2, 340.3, 271.0);
  ctx.bezierCurveTo(341.8, 267.5, 343.7, 264.2, 343.3, 262.0);
  ctx.bezierCurveTo(339.8, 267.1, 337.8, 273.8, 335.3, 280.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(306.3, 270.0);
  ctx.bezierCurveTo(309.1, 271.6, 309.1, 265.7, 307.3, 266.0);
  ctx.bezierCurveTo(307.4, 267.7, 307.1, 269.1, 306.3, 270.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(318.3, 277.0);
  ctx.bezierCurveTo(318.5, 275.7, 318.5, 269.8, 317.3, 273.0);
  ctx.bezierCurveTo(317.2, 274.3, 317.2, 280.2, 318.3, 277.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(464.3, 211.0);
  ctx.bezierCurveTo(465.5, 211.2, 464.9, 212.0, 464.3, 212.0);
  ctx.bezierCurveTo(465.0, 214.7, 486.8, 211.4, 482.3, 214.0);
  ctx.bezierCurveTo(480.0, 214.0, 477.7, 214.0, 475.3, 214.0);
  ctx.bezierCurveTo(471.9, 215.5, 466.2, 214.9, 461.3, 215.0);
  ctx.bezierCurveTo(463.9, 213.1, 461.8, 212.9, 464.3, 211.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(346.3, 247.0);
  ctx.bezierCurveTo(349.1, 245.5, 343.0, 249.5, 342.3, 251.0);
  ctx.bezierCurveTo(340.0, 249.9, 344.9, 247.7, 346.3, 247.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(325.3, 223.0);
  ctx.bezierCurveTo(319.5, 227.7, 315.7, 241.5, 321.3, 249.0);
  ctx.bezierCurveTo(325.6, 248.8, 326.7, 251.6, 331.3, 251.0);
  ctx.bezierCurveTo(312.3, 255.9, 313.7, 228.7, 325.3, 223.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(411.3, 228.0);
  ctx.bezierCurveTo(410.0, 225.5, 406.9, 229.5, 404.3, 229.0);
  ctx.bezierCurveTo(407.5, 226.8, 410.5, 224.5, 415.3, 224.0);
  ctx.bezierCurveTo(414.9, 232.4, 419.5, 235.8, 418.3, 245.0);
  ctx.bezierCurveTo(414.6, 239.8, 410.6, 234.7, 407.3, 229.0);
  ctx.bezierCurveTo(409.1, 229.1, 409.4, 227.8, 411.3, 228.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(476.3, 228.0);
  ctx.bezierCurveTo(476.4, 227.9, 476.2, 227.0, 476.3, 227.0);
  ctx.bezierCurveTo(483.4, 224.6, 470.8, 231.9, 476.3, 228.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(352.3, 232.0);
  ctx.bezierCurveTo(354.0, 228.5, 355.4, 234.5, 352.3, 234.0);
  ctx.bezierCurveTo(349.3, 236.7, 355.0, 231.7, 352.3, 232.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(430.3, 287.0);
  ctx.bezierCurveTo(421.3, 279.0, 410.5, 292.4, 399.3, 292.0);
  ctx.bezierCurveTo(395.9, 282.8, 390.3, 275.7, 384.3, 269.0);
  ctx.bezierCurveTo(387.7, 265.0, 393.9, 263.9, 398.3, 261.0);
  ctx.bezierCurveTo(393.4, 258.8, 387.6, 264.3, 383.3, 266.0);
  ctx.bezierCurveTo(378.7, 262.9, 375.9, 258.1, 371.3, 255.0);
  ctx.bezierCurveTo(369.6, 260.3, 380.5, 260.9, 380.3, 268.0);
  ctx.bezierCurveTo(376.3, 269.3, 372.9, 271.2, 370.3, 274.0);
  ctx.bezierCurveTo(367.5, 270.6, 359.6, 268.3, 359.3, 265.0);
  ctx.bezierCurveTo(358.9, 259.1, 379.8, 248.9, 384.3, 246.0);
  ctx.bezierCurveTo(384.0, 243.6, 380.6, 246.1, 380.3, 247.0);
  ctx.bezierCurveTo(383.2, 240.6, 395.1, 234.5, 404.3, 231.0);
  ctx.bezierCurveTo(418.5, 244.2, 425.8, 264.1, 430.3, 287.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(401.3, 258.0);
  ctx.bezierCurveTo(402.0, 254.3, 407.4, 250.1, 405.3, 247.0);
  ctx.bezierCurveTo(404.5, 250.5, 398.6, 254.2, 401.3, 258.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(358.3, 240.0);
  ctx.bezierCurveTo(360.4, 240.9, 356.1, 243.7, 355.3, 245.0);
  ctx.bezierCurveTo(352.9, 243.8, 358.3, 242.1, 358.3, 240.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(292.3, 242.0);
  ctx.bezierCurveTo(294.2, 239.9, 292.6, 249.7, 295.3, 250.0);
  ctx.bezierCurveTo(292.9, 252.7, 292.3, 245.1, 292.3, 242.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(351.3, 243.0);
  ctx.bezierCurveTo(353.4, 241.5, 344.2, 248.1, 351.3, 243.0);
  ctx.lineTo(351.3, 243.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(352.3, 245.0);
  ctx.bezierCurveTo(354.6, 245.7, 350.1, 248.0, 350.3, 250.0);
  ctx.bezierCurveTo(348.8, 249.6, 351.2, 248.2, 349.3, 248.0);
  ctx.bezierCurveTo(349.4, 246.1, 352.6, 247.3, 352.3, 245.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(405.3, 247.0);
  ctx.bezierCurveTo(407.4, 250.1, 402.0, 254.3, 401.3, 258.0);
  ctx.bezierCurveTo(398.6, 254.2, 404.5, 250.5, 405.3, 247.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(429.3, 248.0);
  ctx.bezierCurveTo(429.6, 244.5, 432.0, 251.5, 432.3, 248.0);
  ctx.bezierCurveTo(433.2, 247.8, 433.3, 248.4, 433.3, 249.0);
  ctx.bezierCurveTo(433.3, 249.7, 433.3, 250.3, 433.3, 251.0);
  ctx.bezierCurveTo(430.1, 251.9, 431.9, 247.7, 429.3, 248.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(449.3, 255.0);
  ctx.bezierCurveTo(451.7, 254.7, 449.2, 251.3, 448.3, 251.0);
  ctx.bezierCurveTo(449.5, 248.0, 452.3, 251.5, 452.3, 253.0);
  ctx.bezierCurveTo(454.1, 248.8, 467.5, 251.2, 464.3, 255.0);
  ctx.bezierCurveTo(462.2, 255.5, 462.4, 253.6, 462.3, 252.0);
  ctx.bezierCurveTo(461.0, 252.3, 461.5, 254.5, 461.3, 256.0);
  ctx.bezierCurveTo(456.4, 257.9, 450.9, 255.4, 448.3, 258.0);
  ctx.bezierCurveTo(448.2, 255.2, 446.5, 253.8, 446.3, 251.0);
  ctx.bezierCurveTo(443.2, 252.9, 447.9, 255.3, 447.3, 258.0);
  ctx.bezierCurveTo(443.8, 257.2, 444.3, 251.7, 445.3, 249.0);
  ctx.bezierCurveTo(447.6, 250.1, 449.0, 252.0, 449.3, 255.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(449.3, 260.0);
  ctx.bezierCurveTo(446.6, 268.6, 441.1, 283.1, 433.3, 290.0);
  ctx.bezierCurveTo(439.9, 286.9, 447.9, 279.0, 452.3, 270.0);
  ctx.bezierCurveTo(453.9, 266.7, 453.7, 261.9, 457.3, 260.0);
  ctx.bezierCurveTo(453.7, 274.1, 445.2, 283.2, 436.3, 292.0);
  ctx.bezierCurveTo(446.3, 286.4, 453.5, 277.8, 457.3, 266.0);
  ctx.bezierCurveTo(457.0, 264.2, 458.3, 263.9, 458.3, 265.0);
  ctx.bezierCurveTo(453.8, 278.8, 449.0, 292.3, 445.3, 307.0);
  ctx.bezierCurveTo(449.2, 302.4, 445.8, 310.4, 445.3, 313.0);
  ctx.bezierCurveTo(442.9, 308.8, 434.8, 310.2, 428.3, 310.0);
  ctx.bezierCurveTo(429.1, 305.5, 432.0, 303.0, 432.3, 298.0);
  ctx.bezierCurveTo(436.9, 298.9, 438.0, 296.3, 441.3, 296.0);
  ctx.bezierCurveTo(440.6, 300.0, 439.1, 303.2, 439.3, 308.0);
  ctx.bezierCurveTo(441.8, 304.2, 442.0, 298.0, 443.3, 293.0);
  ctx.bezierCurveTo(441.5, 291.2, 437.8, 296.1, 434.3, 296.0);
  ctx.bezierCurveTo(428.8, 286.6, 440.4, 281.2, 438.3, 269.0);
  ctx.bezierCurveTo(443.4, 267.4, 446.4, 263.7, 449.3, 260.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(326.3, 334.0);
  ctx.bezierCurveTo(323.7, 331.3, 338.4, 336.3, 336.3, 333.0);
  ctx.bezierCurveTo(352.2, 332.8, 359.1, 323.8, 370.3, 319.0);
  ctx.bezierCurveTo(367.8, 326.1, 359.6, 327.6, 354.3, 332.0);
  ctx.bezierCurveTo(361.0, 329.2, 373.4, 324.5, 374.3, 315.0);
  ctx.bezierCurveTo(390.0, 322.6, 363.1, 332.5, 363.3, 340.0);
  ctx.bezierCurveTo(363.4, 341.9, 367.2, 339.4, 367.3, 338.0);
  ctx.bezierCurveTo(367.2, 338.6, 366.3, 345.2, 366.3, 347.0);
  ctx.bezierCurveTo(357.0, 351.2, 341.5, 354.0, 328.3, 351.0);
  ctx.bezierCurveTo(328.7, 348.9, 327.6, 348.4, 327.3, 347.0);
  ctx.bezierCurveTo(327.0, 344.4, 329.4, 344.4, 331.3, 344.0);
  ctx.bezierCurveTo(329.6, 341.1, 324.1, 341.9, 325.3, 336.0);
  ctx.bezierCurveTo(320.9, 338.9, 330.0, 346.0, 324.3, 347.0);
  ctx.bezierCurveTo(327.9, 350.1, 326.9, 352.2, 329.3, 357.0);
  ctx.bezierCurveTo(330.9, 354.1, 331.8, 355.9, 335.3, 356.0);
  ctx.bezierCurveTo(335.3, 355.0, 334.1, 355.2, 333.3, 355.0);
  ctx.bezierCurveTo(342.0, 354.2, 358.5, 353.8, 366.3, 349.0);
  ctx.bezierCurveTo(365.3, 354.5, 370.1, 344.7, 373.3, 345.0);
  ctx.bezierCurveTo(370.9, 351.9, 370.5, 360.8, 369.3, 369.0);
  ctx.bezierCurveTo(355.2, 376.5, 337.3, 374.9, 322.3, 373.0);
  ctx.bezierCurveTo(325.7, 377.0, 334.7, 375.3, 338.3, 379.0);
  ctx.bezierCurveTo(337.2, 386.1, 340.8, 388.5, 341.3, 394.0);
  ctx.bezierCurveTo(343.4, 389.9, 340.0, 382.7, 339.3, 378.0);
  ctx.bezierCurveTo(350.5, 380.0, 360.7, 375.6, 368.3, 371.0);
  ctx.bezierCurveTo(371.1, 376.6, 367.7, 388.3, 370.3, 394.0);
  ctx.bezierCurveTo(375.2, 392.9, 375.3, 386.9, 378.3, 384.0);
  ctx.bezierCurveTo(382.6, 383.3, 386.7, 382.4, 389.3, 380.0);
  ctx.bezierCurveTo(390.4, 385.5, 383.3, 391.3, 378.3, 394.0);
  ctx.bezierCurveTo(378.6, 395.3, 380.3, 395.0, 380.3, 394.0);
  ctx.bezierCurveTo(377.5, 402.5, 367.8, 412.9, 362.3, 422.0);
  ctx.bezierCurveTo(377.5, 416.7, 379.0, 395.4, 394.3, 387.0);
  ctx.bezierCurveTo(393.8, 383.1, 396.1, 382.1, 395.3, 378.0);
  ctx.bezierCurveTo(399.4, 377.1, 401.6, 374.2, 406.3, 374.0);
  ctx.bezierCurveTo(407.4, 380.9, 405.2, 391.6, 406.3, 398.0);
  ctx.bezierCurveTo(398.1, 410.2, 385.6, 423.3, 383.3, 438.0);
  ctx.bezierCurveTo(381.3, 438.2, 378.2, 442.7, 377.3, 447.0);
  ctx.bezierCurveTo(379.1, 446.1, 379.1, 443.5, 380.3, 442.0);
  ctx.bezierCurveTo(382.2, 439.6, 378.7, 451.3, 376.3, 448.0);
  ctx.bezierCurveTo(376.1, 455.2, 367.1, 468.1, 364.3, 479.0);
  ctx.bezierCurveTo(355.1, 481.2, 337.9, 478.4, 340.3, 469.0);
  ctx.bezierCurveTo(331.3, 464.3, 332.7, 455.3, 332.3, 442.0);
  ctx.bezierCurveTo(328.7, 444.1, 332.6, 447.5, 330.3, 451.0);
  ctx.bezierCurveTo(326.7, 439.0, 321.0, 429.0, 320.3, 414.0);
  ctx.bezierCurveTo(320.0, 412.4, 318.6, 414.9, 318.3, 413.0);
  ctx.bezierCurveTo(317.5, 409.8, 319.9, 409.9, 320.3, 408.0);
  ctx.bezierCurveTo(323.2, 411.1, 326.1, 414.2, 332.3, 414.0);
  ctx.bezierCurveTo(332.3, 416.0, 332.3, 418.0, 332.3, 420.0);
  ctx.bezierCurveTo(334.5, 420.2, 332.8, 416.5, 333.3, 415.0);
  ctx.bezierCurveTo(337.2, 415.7, 336.9, 415.0, 339.3, 416.0);
  ctx.bezierCurveTo(338.7, 420.8, 337.9, 425.2, 338.3, 431.0);
  ctx.bezierCurveTo(339.9, 426.9, 339.8, 421.2, 340.3, 416.0);
  ctx.bezierCurveTo(346.3, 417.9, 348.2, 418.0, 356.3, 418.0);
  ctx.bezierCurveTo(356.2, 415.8, 352.1, 417.6, 350.3, 417.0);
  ctx.bezierCurveTo(349.6, 414.3, 364.1, 418.1, 365.3, 414.0);
  ctx.bezierCurveTo(364.3, 412.7, 364.4, 410.3, 362.3, 410.0);
  ctx.bezierCurveTo(363.1, 416.7, 347.0, 413.4, 340.3, 413.0);
  ctx.bezierCurveTo(340.3, 409.0, 340.3, 405.0, 340.3, 401.0);
  ctx.bezierCurveTo(338.2, 404.4, 338.2, 408.8, 339.3, 413.0);
  ctx.bezierCurveTo(336.5, 413.2, 333.9, 413.1, 334.3, 410.0);
  ctx.bezierCurveTo(333.3, 413.2, 328.6, 410.3, 325.3, 410.0);
  ctx.bezierCurveTo(325.4, 405.8, 319.1, 402.2, 323.3, 400.0);
  ctx.bezierCurveTo(315.6, 394.0, 317.8, 378.2, 310.3, 372.0);
  ctx.bezierCurveTo(313.6, 381.0, 315.5, 391.5, 318.3, 401.0);
  ctx.bezierCurveTo(316.4, 402.5, 313.1, 402.5, 312.3, 405.0);
  ctx.bezierCurveTo(308.7, 397.0, 310.6, 384.0, 310.3, 377.0);
  ctx.bezierCurveTo(311.0, 374.3, 308.3, 375.1, 307.3, 374.0);
  ctx.bezierCurveTo(309.5, 369.2, 311.1, 363.8, 312.3, 358.0);
  ctx.bezierCurveTo(310.7, 372.0, 320.6, 382.8, 326.3, 395.0);
  ctx.bezierCurveTo(330.4, 394.2, 331.5, 396.5, 335.3, 396.0);
  ctx.bezierCurveTo(336.3, 399.0, 333.1, 397.8, 331.3, 398.0);
  ctx.bezierCurveTo(344.6, 401.2, 359.0, 397.0, 372.3, 397.0);
  ctx.bezierCurveTo(358.9, 394.8, 340.9, 397.1, 328.3, 394.0);
  ctx.bezierCurveTo(323.9, 384.8, 320.2, 374.8, 314.3, 367.0);
  ctx.bezierCurveTo(316.6, 360.4, 314.5, 351.3, 311.3, 347.0);
  ctx.bezierCurveTo(316.7, 338.9, 309.2, 331.0, 309.3, 322.0);
  ctx.bezierCurveTo(314.3, 329.7, 322.4, 334.2, 331.3, 338.0);
  ctx.bezierCurveTo(328.9, 337.4, 330.4, 332.9, 326.3, 334.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(364.3, 331.0);
  ctx.bezierCurveTo(366.2, 329.6, 370.7, 325.0, 373.3, 325.0);
  ctx.bezierCurveTo(373.0, 325.0, 372.4, 327.7, 373.3, 327.0);
  ctx.bezierCurveTo(374.9, 325.8, 373.5, 324.2, 374.3, 323.0);
  ctx.bezierCurveTo(374.9, 322.1, 381.2, 320.5, 376.3, 319.0);
  ctx.bezierCurveTo(374.6, 321.6, 377.8, 322.1, 373.3, 321.0);
  ctx.bezierCurveTo(374.7, 324.4, 363.1, 325.9, 364.3, 331.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(369.3, 329.0);
  ctx.bezierCurveTo(363.9, 334.7, 375.0, 323.6, 369.3, 329.0);
  ctx.lineTo(369.3, 329.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(325.3, 351.0);
  ctx.bezierCurveTo(320.2, 350.5, 318.9, 346.1, 314.3, 345.0);
  ctx.bezierCurveTo(314.2, 356.5, 318.8, 363.2, 320.3, 373.0);
  ctx.bezierCurveTo(322.2, 365.8, 313.6, 355.1, 316.3, 347.0);
  ctx.bezierCurveTo(318.8, 348.3, 322.3, 353.6, 325.3, 351.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(326.3, 337.0);
  ctx.bezierCurveTo(326.6, 340.1, 329.9, 340.1, 332.3, 341.0);
  ctx.bezierCurveTo(330.8, 337.4, 335.7, 340.4, 335.3, 338.0);
  ctx.bezierCurveTo(331.4, 338.9, 329.1, 339.2, 326.3, 337.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(361.3, 332.0);
  ctx.bezierCurveTo(354.1, 335.5, 364.4, 330.5, 361.3, 332.0);
  ctx.lineTo(361.3, 332.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(332.3, 435.0);
  ctx.bezierCurveTo(331.9, 431.7, 333.3, 421.4, 331.3, 423.0);
  ctx.bezierCurveTo(331.8, 426.3, 330.3, 436.6, 332.3, 435.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(376.3, 327.0);
  ctx.bezierCurveTo(376.2, 331.7, 375.5, 333.2, 370.3, 337.0);
  ctx.bezierCurveTo(368.0, 335.9, 372.9, 333.7, 374.3, 333.0);
  ctx.bezierCurveTo(371.6, 330.3, 375.6, 329.2, 376.3, 327.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(373.3, 339.0);
  ctx.bezierCurveTo(375.1, 339.6, 371.6, 343.2, 369.3, 343.0);
  ctx.bezierCurveTo(369.6, 340.7, 372.4, 340.8, 373.3, 339.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 335.0);
  ctx.bezierCurveTo(375.8, 335.9, 371.9, 339.9, 369.3, 340.0);
  ctx.bezierCurveTo(370.1, 337.5, 372.8, 336.8, 374.3, 335.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(343.3, 262.0);
  ctx.bezierCurveTo(343.7, 264.2, 341.8, 267.5, 340.3, 271.0);
  ctx.bezierCurveTo(339.0, 274.2, 338.1, 278.9, 335.3, 280.0);
  ctx.bezierCurveTo(337.8, 273.8, 339.8, 267.1, 343.3, 262.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(450.3, 264.0);
  ctx.bezierCurveTo(452.6, 263.8, 448.7, 268.4, 448.3, 269.0);
  ctx.bezierCurveTo(446.1, 272.3, 448.9, 266.9, 450.3, 264.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(406.3, 298.0);
  ctx.bezierCurveTo(411.7, 297.6, 413.8, 293.7, 417.3, 292.0);
  ctx.bezierCurveTo(405.4, 293.1, 391.3, 300.6, 379.3, 305.0);
  ctx.bezierCurveTo(368.2, 297.4, 361.8, 285.2, 350.3, 278.0);
  ctx.bezierCurveTo(351.6, 273.3, 355.8, 271.4, 357.3, 267.0);
  ctx.bezierCurveTo(362.2, 268.1, 363.2, 273.1, 367.3, 275.0);
  ctx.bezierCurveTo(365.8, 277.2, 362.3, 277.3, 362.3, 281.0);
  ctx.bezierCurveTo(361.3, 286.0, 366.4, 285.0, 367.3, 288.0);
  ctx.bezierCurveTo(370.7, 287.0, 372.6, 284.6, 375.3, 283.0);
  ctx.bezierCurveTo(380.7, 286.6, 383.2, 293.1, 388.3, 297.0);
  ctx.bezierCurveTo(388.1, 298.1, 386.3, 297.7, 386.3, 299.0);
  ctx.bezierCurveTo(397.5, 299.1, 410.7, 287.7, 426.3, 286.0);
  ctx.bezierCurveTo(432.3, 293.7, 431.0, 302.6, 426.3, 311.0);
  ctx.bezierCurveTo(409.0, 312.0, 393.1, 314.5, 382.3, 322.0);
  ctx.bezierCurveTo(379.3, 321.3, 383.3, 319.9, 382.3, 318.0);
  ctx.bezierCurveTo(382.0, 315.9, 379.6, 319.4, 378.3, 317.0);
  ctx.bezierCurveTo(372.9, 305.7, 363.9, 298.0, 357.3, 288.0);
  ctx.bezierCurveTo(353.6, 285.7, 349.2, 284.1, 348.3, 279.0);
  ctx.bezierCurveTo(357.1, 288.3, 371.4, 297.3, 378.3, 307.0);
  ctx.bezierCurveTo(379.3, 308.4, 378.8, 308.5, 378.3, 310.0);
  ctx.bezierCurveTo(391.8, 311.6, 407.7, 301.6, 422.3, 298.0);
  ctx.bezierCurveTo(417.5, 296.4, 405.3, 301.5, 405.3, 300.0);
  ctx.bezierCurveTo(401.7, 296.3, 409.1, 300.4, 406.3, 298.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(416.3, 295.0);
  ctx.bezierCurveTo(421.0, 292.9, 411.7, 295.9, 411.3, 298.0);
  ctx.bezierCurveTo(406.7, 300.1, 415.9, 297.1, 416.3, 295.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(420.3, 307.0);
  ctx.bezierCurveTo(419.3, 309.5, 427.9, 295.1, 425.3, 296.0);
  ctx.bezierCurveTo(423.8, 299.8, 421.3, 302.6, 420.3, 307.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(411.3, 298.0);
  ctx.bezierCurveTo(411.7, 295.9, 421.0, 292.9, 416.3, 295.0);
  ctx.bezierCurveTo(415.9, 297.1, 406.7, 300.1, 411.3, 298.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(291.3, 288.0);
  ctx.bezierCurveTo(292.8, 288.4, 290.9, 289.3, 291.3, 291.0);
  ctx.bezierCurveTo(293.8, 290.1, 292.4, 285.4, 296.3, 286.0);
  ctx.bezierCurveTo(294.8, 282.8, 295.8, 277.2, 294.3, 274.0);
  ctx.bezierCurveTo(299.3, 273.9, 298.1, 282.3, 298.3, 287.0);
  ctx.bezierCurveTo(298.5, 291.1, 300.5, 295.3, 297.3, 297.0);
  ctx.bezierCurveTo(294.7, 296.8, 298.7, 295.3, 297.3, 293.0);
  ctx.bezierCurveTo(296.0, 294.0, 295.3, 295.7, 294.3, 297.0);
  ctx.bezierCurveTo(291.8, 296.3, 296.2, 294.3, 295.3, 292.0);
  ctx.bezierCurveTo(294.0, 293.0, 293.3, 294.7, 292.3, 296.0);
  ctx.bezierCurveTo(290.4, 295.0, 294.3, 291.4, 295.3, 290.0);
  ctx.bezierCurveTo(294.1, 287.1, 292.4, 294.3, 290.3, 291.0);
  ctx.bezierCurveTo(290.3, 290.3, 290.3, 289.7, 290.3, 289.0);
  ctx.bezierCurveTo(291.2, 289.2, 291.3, 288.6, 291.3, 288.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(356.3, 294.0);
  ctx.bezierCurveTo(359.3, 296.1, 353.8, 298.1, 354.3, 301.0);
  ctx.bezierCurveTo(351.8, 299.4, 356.1, 296.2, 356.3, 294.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(325.3, 323.0);
  ctx.bezierCurveTo(322.2, 321.7, 328.2, 321.7, 328.3, 323.0);
  ctx.bezierCurveTo(333.0, 322.5, 330.7, 324.8, 327.3, 324.0);
  ctx.bezierCurveTo(327.3, 323.0, 326.1, 323.2, 325.3, 323.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(253.3, 292.0);
  ctx.bezierCurveTo(256.5, 291.8, 244.3, 295.4, 253.3, 292.0);
  ctx.lineTo(253.3, 292.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(425.3, 296.0);
  ctx.bezierCurveTo(427.9, 295.1, 419.3, 309.5, 420.3, 307.0);
  ctx.bezierCurveTo(421.3, 302.6, 423.8, 299.8, 425.3, 296.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(264.3, 299.0);
  ctx.bezierCurveTo(265.8, 300.7, 268.6, 298.0, 270.3, 301.0);
  ctx.bezierCurveTo(269.6, 301.3, 263.4, 301.6, 262.3, 301.0);
  ctx.bezierCurveTo(263.5, 299.5, 263.2, 296.5, 266.3, 297.0);
  ctx.bezierCurveTo(266.7, 298.7, 265.5, 298.9, 264.3, 299.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(260.3, 302.0);
  ctx.bezierCurveTo(259.1, 302.2, 259.5, 303.8, 259.3, 305.0);
  ctx.bezierCurveTo(257.8, 299.3, 253.6, 304.9, 249.3, 305.0);
  ctx.bezierCurveTo(254.3, 299.6, 255.8, 302.9, 260.3, 298.0);
  ctx.bezierCurveTo(259.6, 301.1, 262.0, 300.9, 261.3, 304.0);
  ctx.bezierCurveTo(262.2, 304.2, 262.3, 303.6, 262.3, 303.0);
  ctx.bezierCurveTo(265.1, 304.4, 259.2, 306.2, 260.3, 302.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(391.3, 302.0);
  ctx.bezierCurveTo(392.5, 302.2, 391.9, 303.0, 391.3, 303.0);
  ctx.bezierCurveTo(391.3, 304.0, 392.5, 303.8, 393.3, 304.0);
  ctx.bezierCurveTo(394.9, 303.6, 384.8, 305.3, 382.3, 309.0);
  ctx.bezierCurveTo(380.2, 305.5, 389.3, 304.7, 391.3, 302.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(255.3, 304.0);
  ctx.bezierCurveTo(256.3, 304.6, 256.4, 306.3, 258.3, 306.0);
  ctx.bezierCurveTo(257.9, 308.5, 254.4, 306.1, 255.3, 304.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(371.3, 310.0);
  ctx.bezierCurveTo(374.3, 310.1, 374.0, 316.0, 370.3, 315.0);
  ctx.bezierCurveTo(368.5, 313.2, 370.8, 312.1, 371.3, 310.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(233.3, 311.0);
  ctx.bezierCurveTo(235.2, 311.1, 234.0, 314.3, 236.3, 314.0);
  ctx.bezierCurveTo(236.2, 315.9, 232.0, 313.8, 233.3, 311.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(424.3, 314.0);
  ctx.bezierCurveTo(425.0, 316.5, 427.0, 312.1, 429.3, 313.0);
  ctx.bezierCurveTo(429.8, 315.3, 423.8, 316.0, 426.3, 317.0);
  ctx.bezierCurveTo(422.8, 319.6, 424.2, 316.4, 418.3, 317.0);
  ctx.bezierCurveTo(417.4, 313.4, 422.6, 315.2, 423.3, 316.0);
  ctx.bezierCurveTo(422.8, 312.6, 418.5, 314.5, 416.3, 315.0);
  ctx.bezierCurveTo(407.5, 319.8, 399.0, 325.0, 390.3, 330.0);
  ctx.bezierCurveTo(390.9, 331.8, 387.4, 334.2, 390.3, 335.0);
  ctx.bezierCurveTo(387.3, 339.3, 381.5, 340.9, 376.3, 343.0);
  ctx.bezierCurveTo(376.7, 341.7, 378.1, 341.4, 378.3, 340.0);
  ctx.bezierCurveTo(375.4, 340.6, 378.0, 328.0, 379.3, 326.0);
  ctx.bezierCurveTo(381.4, 322.9, 389.6, 319.3, 396.3, 318.0);
  ctx.bezierCurveTo(406.6, 316.1, 419.6, 311.2, 427.3, 312.0);
  ctx.bezierCurveTo(427.1, 313.4, 424.3, 312.3, 424.3, 314.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(230.3, 313.0);
  ctx.bezierCurveTo(231.0, 315.9, 236.4, 317.4, 234.3, 320.0);
  ctx.bezierCurveTo(232.7, 318.0, 230.7, 316.3, 230.3, 313.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(441.3, 314.0);
  ctx.bezierCurveTo(447.2, 317.3, 440.4, 325.1, 438.3, 330.0);
  ctx.bezierCurveTo(435.6, 336.3, 433.3, 342.8, 431.3, 348.0);
  ctx.bezierCurveTo(430.2, 336.2, 438.0, 324.7, 441.3, 314.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(420.3, 323.0);
  ctx.bezierCurveTo(422.0, 320.6, 425.5, 320.2, 427.3, 318.0);
  ctx.bezierCurveTo(428.7, 318.3, 428.1, 320.5, 428.3, 322.0);
  ctx.bezierCurveTo(427.5, 321.5, 426.7, 321.0, 425.3, 321.0);
  ctx.bezierCurveTo(425.8, 321.9, 426.2, 322.8, 427.3, 323.0);
  ctx.bezierCurveTo(428.9, 325.5, 423.0, 319.9, 420.3, 323.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(434.3, 319.0);
  ctx.bezierCurveTo(436.4, 317.5, 427.2, 324.1, 434.3, 319.0);
  ctx.lineTo(434.3, 319.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(373.3, 321.0);
  ctx.bezierCurveTo(377.8, 322.1, 374.6, 321.6, 376.3, 319.0);
  ctx.bezierCurveTo(381.2, 320.5, 374.9, 322.1, 374.3, 323.0);
  ctx.bezierCurveTo(373.5, 324.2, 374.9, 325.8, 373.3, 327.0);
  ctx.bezierCurveTo(372.4, 327.7, 373.0, 325.0, 373.3, 325.0);
  ctx.bezierCurveTo(370.7, 325.0, 366.2, 329.6, 364.3, 331.0);
  ctx.bezierCurveTo(363.1, 325.9, 374.7, 324.4, 373.3, 321.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(369.3, 329.0);
  ctx.bezierCurveTo(375.0, 323.6, 363.9, 334.7, 369.3, 329.0);
  ctx.lineTo(369.3, 329.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(316.3, 347.0);
  ctx.bezierCurveTo(313.6, 355.1, 322.2, 365.8, 320.3, 373.0);
  ctx.bezierCurveTo(318.8, 363.2, 314.2, 356.5, 314.3, 345.0);
  ctx.bezierCurveTo(318.9, 346.1, 320.2, 350.5, 325.3, 351.0);
  ctx.bezierCurveTo(322.3, 353.6, 318.8, 348.3, 316.3, 347.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(335.3, 338.0);
  ctx.bezierCurveTo(335.7, 340.4, 330.8, 337.4, 332.3, 341.0);
  ctx.bezierCurveTo(329.9, 340.1, 326.6, 340.1, 326.3, 337.0);
  ctx.bezierCurveTo(329.1, 339.2, 331.4, 338.9, 335.3, 338.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(228.3, 321.0);
  ctx.bezierCurveTo(227.7, 319.8, 235.2, 320.3, 230.3, 321.0);
  ctx.bezierCurveTo(230.1, 321.9, 230.7, 321.9, 231.3, 322.0);
  ctx.bezierCurveTo(230.8, 324.9, 229.8, 320.5, 228.3, 321.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(192.3, 357.0);
  ctx.bezierCurveTo(192.0, 355.7, 191.5, 352.0, 191.3, 348.0);
  ctx.bezierCurveTo(188.5, 344.5, 182.0, 344.7, 181.3, 339.0);
  ctx.bezierCurveTo(184.5, 340.5, 185.2, 344.4, 190.3, 344.0);
  ctx.bezierCurveTo(197.8, 336.7, 213.6, 341.5, 208.3, 324.0);
  ctx.bezierCurveTo(204.3, 325.6, 197.6, 324.6, 193.3, 326.0);
  ctx.bezierCurveTo(193.7, 324.3, 192.5, 324.1, 191.3, 324.0);
  ctx.bezierCurveTo(194.5, 320.9, 204.7, 321.6, 209.3, 323.0);
  ctx.bezierCurveTo(211.7, 327.6, 213.9, 335.2, 208.3, 338.0);
  ctx.bezierCurveTo(211.3, 342.4, 216.5, 344.5, 217.3, 351.0);
  ctx.bezierCurveTo(215.6, 350.1, 215.7, 347.3, 213.3, 347.0);
  ctx.bezierCurveTo(214.8, 353.5, 210.1, 359.4, 203.3, 360.0);
  ctx.bezierCurveTo(198.5, 360.4, 195.8, 355.8, 192.3, 357.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(203.3, 323.0);
  ctx.bezierCurveTo(201.9, 323.5, 198.1, 321.8, 198.3, 324.0);
  ctx.bezierCurveTo(199.8, 323.5, 203.5, 325.2, 203.3, 323.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(195.3, 342.0);
  ctx.bezierCurveTo(194.5, 344.6, 193.8, 351.1, 195.3, 356.0);
  ctx.bezierCurveTo(204.2, 361.1, 216.4, 354.6, 211.3, 343.0);
  ctx.bezierCurveTo(205.8, 340.3, 201.9, 340.0, 195.3, 342.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(434.3, 323.0);
  ctx.bezierCurveTo(437.4, 324.6, 432.3, 326.2, 432.3, 328.0);
  ctx.bezierCurveTo(430.1, 327.3, 434.5, 325.0, 434.3, 323.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(418.3, 325.0);
  ctx.bezierCurveTo(419.5, 325.2, 418.9, 326.0, 418.3, 326.0);
  ctx.bezierCurveTo(420.0, 330.0, 422.4, 334.4, 421.3, 339.0);
  ctx.bezierCurveTo(421.3, 339.0, 418.5, 339.8, 418.3, 340.0);
  ctx.bezierCurveTo(418.1, 340.3, 418.3, 344.7, 415.3, 345.0);
  ctx.bezierCurveTo(415.2, 345.0, 411.9, 339.7, 409.3, 341.0);
  ctx.bezierCurveTo(409.9, 335.2, 415.3, 334.3, 414.3, 327.0);
  ctx.bezierCurveTo(416.2, 326.9, 417.7, 326.3, 418.3, 325.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(425.3, 339.0);
  ctx.bezierCurveTo(422.8, 335.2, 423.0, 330.7, 426.3, 327.0);
  ctx.bezierCurveTo(430.2, 329.5, 430.4, 335.6, 430.3, 342.0);
  ctx.bezierCurveTo(428.6, 343.7, 423.5, 338.4, 421.3, 343.0);
  ctx.bezierCurveTo(419.5, 342.4, 423.0, 338.8, 425.3, 339.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(242.3, 334.0);
  ctx.bezierCurveTo(244.9, 334.2, 240.9, 335.7, 242.3, 338.0);
  ctx.bezierCurveTo(239.8, 337.8, 242.0, 334.6, 242.3, 334.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(433.3, 328.0);
  ctx.bezierCurveTo(435.4, 328.6, 431.9, 331.8, 432.3, 334.0);
  ctx.bezierCurveTo(430.1, 334.2, 431.9, 330.5, 431.3, 329.0);
  ctx.bezierCurveTo(432.5, 329.2, 433.1, 328.8, 433.3, 328.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(324.3, 330.0);
  ctx.bezierCurveTo(322.2, 329.2, 324.8, 330.0, 324.3, 330.0);
  ctx.lineTo(324.3, 330.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(361.3, 332.0);
  ctx.bezierCurveTo(364.4, 330.5, 354.1, 335.5, 361.3, 332.0);
  ctx.lineTo(361.3, 332.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(403.3, 351.0);
  ctx.bezierCurveTo(403.4, 349.1, 406.6, 350.3, 406.3, 348.0);
  ctx.bezierCurveTo(402.7, 349.8, 399.3, 351.6, 396.3, 354.0);
  ctx.bezierCurveTo(397.6, 351.4, 406.9, 343.4, 412.3, 345.0);
  ctx.bezierCurveTo(411.6, 349.3, 407.9, 350.6, 403.3, 351.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(394.3, 357.0);
  ctx.bezierCurveTo(396.8, 354.9, 393.2, 358.4, 392.3, 359.0);
  ctx.bezierCurveTo(396.1, 358.0, 403.6, 352.3, 409.3, 350.0);
  ctx.bezierCurveTo(411.5, 351.6, 407.9, 355.9, 407.3, 358.0);
  ctx.bezierCurveTo(410.9, 357.3, 411.5, 353.5, 412.3, 350.0);
  ctx.bezierCurveTo(417.1, 348.1, 421.0, 345.4, 425.3, 343.0);
  ctx.bezierCurveTo(429.6, 345.5, 426.2, 356.2, 426.3, 358.0);
  ctx.bezierCurveTo(427.4, 359.2, 429.2, 359.8, 428.3, 363.0);
  ctx.bezierCurveTo(421.8, 362.5, 420.1, 366.8, 414.3, 367.0);
  ctx.bezierCurveTo(414.4, 362.6, 412.9, 359.8, 410.3, 358.0);
  ctx.bezierCurveTo(408.1, 360.6, 414.4, 363.3, 412.3, 369.0);
  ctx.bezierCurveTo(400.1, 372.1, 391.7, 379.0, 378.3, 381.0);
  ctx.bezierCurveTo(375.7, 383.4, 373.5, 386.2, 372.3, 390.0);
  ctx.bezierCurveTo(369.4, 386.4, 373.7, 381.4, 372.3, 376.0);
  ctx.bezierCurveTo(378.7, 374.7, 382.6, 370.9, 388.3, 369.0);
  ctx.bezierCurveTo(383.8, 367.5, 378.7, 374.0, 372.3, 374.0);
  ctx.bezierCurveTo(372.3, 372.0, 372.3, 370.0, 372.3, 368.0);
  ctx.bezierCurveTo(381.7, 367.5, 387.0, 361.9, 394.3, 357.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(389.3, 367.0);
  ctx.bezierCurveTo(396.8, 366.1, 406.6, 360.0, 405.3, 359.0);
  ctx.bezierCurveTo(399.6, 361.3, 393.8, 363.5, 389.3, 367.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(405.3, 359.0);
  ctx.bezierCurveTo(406.6, 360.0, 396.8, 366.1, 389.3, 367.0);
  ctx.bezierCurveTo(393.8, 363.5, 399.6, 361.3, 405.3, 359.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(190.3, 380.0);
  ctx.bezierCurveTo(192.8, 377.0, 186.7, 376.6, 184.3, 378.0);
  ctx.bezierCurveTo(184.5, 371.6, 189.5, 370.1, 194.3, 373.0);
  ctx.bezierCurveTo(191.4, 379.4, 191.0, 388.4, 183.3, 390.0);
  ctx.bezierCurveTo(181.6, 386.6, 182.6, 382.7, 183.3, 379.0);
  ctx.bezierCurveTo(186.0, 379.0, 189.0, 378.6, 190.3, 380.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(301.3, 417.0);
  ctx.bezierCurveTo(300.3, 417.0, 300.5, 418.2, 300.3, 419.0);
  ctx.bezierCurveTo(300.1, 411.5, 302.6, 398.0, 306.3, 391.0);
  ctx.bezierCurveTo(310.5, 393.5, 306.4, 404.3, 310.3, 407.0);
  ctx.bezierCurveTo(311.1, 408.0, 313.8, 406.6, 315.3, 409.0);
  ctx.bezierCurveTo(313.4, 420.4, 303.1, 423.4, 299.3, 433.0);
  ctx.bezierCurveTo(297.5, 429.2, 299.9, 421.0, 301.3, 417.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(302.3, 415.0);
  ctx.bezierCurveTo(303.0, 414.2, 305.5, 408.5, 303.3, 411.0);
  ctx.bezierCurveTo(302.6, 411.8, 300.2, 417.5, 302.3, 415.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(419.3, 430.0);
  ctx.bezierCurveTo(419.8, 412.5, 426.4, 401.1, 443.3, 400.0);
  ctx.bezierCurveTo(444.6, 403.7, 449.6, 403.7, 449.3, 409.0);
  ctx.bezierCurveTo(441.4, 410.7, 441.0, 407.4, 436.3, 409.0);
  ctx.bezierCurveTo(426.1, 412.5, 431.8, 425.0, 428.3, 431.0);
  ctx.bezierCurveTo(429.2, 429.4, 420.2, 430.1, 427.3, 433.0);
  ctx.bezierCurveTo(426.1, 434.4, 423.9, 434.9, 421.3, 435.0);
  ctx.bezierCurveTo(421.6, 433.2, 423.0, 432.7, 425.3, 433.0);
  ctx.bezierCurveTo(423.9, 431.4, 420.4, 431.9, 419.3, 430.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(389.3, 444.0);
  ctx.bezierCurveTo(394.4, 446.4, 399.2, 440.0, 405.3, 440.0);
  ctx.bezierCurveTo(402.7, 441.7, 395.3, 448.2, 394.3, 445.0);
  ctx.bezierCurveTo(383.4, 456.9, 384.6, 459.1, 376.3, 472.0);
  ctx.bezierCurveTo(374.5, 468.5, 374.0, 472.1, 372.3, 474.0);
  ctx.bezierCurveTo(369.4, 468.7, 377.5, 464.7, 375.3, 462.0);
  ctx.bezierCurveTo(376.6, 460.8, 376.9, 461.6, 378.3, 462.0);
  ctx.bezierCurveTo(377.1, 456.2, 383.9, 450.4, 386.3, 445.0);
  ctx.bezierCurveTo(383.4, 445.1, 382.6, 447.3, 381.3, 449.0);
  ctx.bezierCurveTo(383.3, 437.3, 393.5, 425.2, 397.3, 412.0);
  ctx.bezierCurveTo(400.3, 410.6, 401.4, 407.4, 404.3, 406.0);
  ctx.bezierCurveTo(403.3, 400.5, 407.7, 406.3, 407.3, 401.0);
  ctx.bezierCurveTo(410.6, 401.4, 409.9, 405.8, 411.3, 408.0);
  ctx.bezierCurveTo(420.9, 408.5, 412.2, 423.8, 417.3, 432.0);
  ctx.bezierCurveTo(409.3, 437.3, 398.5, 439.8, 389.3, 444.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(303.3, 411.0);
  ctx.bezierCurveTo(305.5, 408.5, 303.0, 414.2, 302.3, 415.0);
  ctx.bezierCurveTo(300.2, 417.5, 302.6, 411.8, 303.3, 411.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(450.3, 419.0);
  ctx.bezierCurveTo(440.3, 425.4, 460.3, 450.9, 464.3, 433.0);
  ctx.bezierCurveTo(465.9, 438.3, 466.7, 446.7, 463.3, 449.0);
  ctx.bezierCurveTo(449.3, 449.4, 439.1, 430.4, 444.3, 415.0);
  ctx.bezierCurveTo(442.9, 415.0, 441.1, 419.2, 441.3, 415.0);
  ctx.bezierCurveTo(437.8, 420.7, 438.0, 430.4, 440.3, 437.0);
  ctx.bezierCurveTo(444.0, 441.0, 452.1, 445.9, 452.3, 450.0);
  ctx.bezierCurveTo(435.1, 448.6, 425.4, 423.9, 437.3, 411.0);
  ctx.bezierCurveTo(443.9, 409.7, 446.1, 414.4, 449.3, 411.0);
  ctx.bezierCurveTo(451.2, 411.3, 450.5, 413.9, 451.3, 415.0);
  ctx.bezierCurveTo(455.0, 419.9, 461.7, 421.1, 450.3, 419.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(311.3, 422.0);
  ctx.bezierCurveTo(309.8, 421.1, 313.7, 417.1, 316.3, 417.0);
  ctx.bezierCurveTo(315.9, 419.9, 312.0, 419.4, 311.3, 422.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(418.3, 435.0);
  ctx.bezierCurveTo(418.2, 437.6, 414.6, 436.6, 413.3, 438.0);
  ctx.bezierCurveTo(411.3, 437.2, 416.5, 435.3, 418.3, 435.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(432.3, 440.0);
  ctx.bezierCurveTo(430.5, 439.9, 430.2, 441.2, 428.3, 441.0);
  ctx.bezierCurveTo(428.1, 436.5, 431.8, 438.4, 433.3, 440.0);
  ctx.bezierCurveTo(433.1, 441.1, 432.3, 440.6, 432.3, 440.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(297.3, 440.0);
  ctx.bezierCurveTo(312.1, 442.8, 321.4, 459.9, 334.3, 468.0);
  ctx.bezierCurveTo(336.7, 473.8, 338.5, 480.2, 344.3, 483.0);
  ctx.bezierCurveTo(350.8, 486.1, 360.9, 482.6, 366.3, 488.0);
  ctx.bezierCurveTo(366.2, 493.7, 368.0, 496.2, 365.3, 500.0);
  ctx.bezierCurveTo(358.8, 496.5, 351.2, 507.6, 342.3, 501.0);
  ctx.bezierCurveTo(340.5, 499.6, 332.3, 490.0, 330.3, 487.0);
  ctx.bezierCurveTo(328.5, 484.4, 328.5, 480.6, 326.3, 478.0);
  ctx.bezierCurveTo(321.0, 471.5, 307.8, 464.9, 300.3, 459.0);
  ctx.bezierCurveTo(296.8, 456.3, 296.8, 455.8, 291.3, 455.0);
  ctx.bezierCurveTo(291.9, 449.6, 292.2, 439.9, 299.3, 442.0);
  ctx.bezierCurveTo(298.9, 441.1, 298.4, 440.2, 297.3, 440.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(321.3, 448.0);
  ctx.bezierCurveTo(323.3, 448.3, 321.1, 445.1, 320.3, 445.0);
  ctx.bezierCurveTo(326.7, 444.0, 327.2, 457.5, 331.3, 462.0);
  ctx.bezierCurveTo(327.2, 463.6, 321.9, 453.0, 322.3, 450.0);
  ctx.bezierCurveTo(321.2, 449.8, 320.5, 450.2, 320.3, 451.0);
  ctx.bezierCurveTo(316.2, 446.1, 309.4, 443.9, 304.3, 440.0);
  ctx.bezierCurveTo(308.8, 437.5, 312.8, 444.1, 319.3, 443.0);
  ctx.bezierCurveTo(319.9, 444.8, 319.8, 447.2, 321.3, 448.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(425.3, 451.0);
  ctx.bezierCurveTo(427.3, 447.9, 428.3, 453.9, 429.3, 455.0);
  ctx.bezierCurveTo(428.2, 457.3, 427.0, 451.4, 425.3, 451.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(452.3, 455.0);
  ctx.bezierCurveTo(450.2, 455.3, 453.7, 458.1, 454.3, 459.0);
  ctx.bezierCurveTo(452.3, 460.9, 449.1, 455.6, 447.3, 454.0);
  ctx.bezierCurveTo(445.3, 453.7, 447.5, 456.9, 448.3, 457.0);
  ctx.bezierCurveTo(445.8, 459.4, 444.4, 452.3, 441.3, 452.0);
  ctx.bezierCurveTo(444.6, 451.7, 451.4, 451.7, 456.3, 454.0);
  ctx.bezierCurveTo(456.0, 454.9, 451.9, 456.7, 452.3, 455.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(286.3, 460.0);
  ctx.bezierCurveTo(285.1, 460.2, 285.5, 461.8, 285.3, 463.0);
  ctx.bezierCurveTo(282.3, 461.8, 286.4, 459.6, 285.3, 457.0);
  ctx.bezierCurveTo(287.2, 457.2, 285.9, 460.4, 287.3, 461.0);
  ctx.bezierCurveTo(288.3, 460.3, 288.8, 459.2, 289.3, 458.0);
  ctx.bezierCurveTo(311.7, 467.3, 327.8, 482.9, 340.3, 502.0);
  ctx.bezierCurveTo(338.0, 504.3, 331.3, 502.4, 327.3, 503.0);
  ctx.bezierCurveTo(311.4, 494.3, 305.1, 475.9, 285.3, 471.0);
  ctx.bezierCurveTo(284.4, 466.2, 289.1, 463.5, 286.3, 460.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(448.3, 462.0);
  ctx.bezierCurveTo(448.7, 461.4, 453.6, 459.7, 453.3, 464.0);
  ctx.bezierCurveTo(450.1, 464.9, 450.2, 462.4, 448.3, 462.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(294.3, 522.0);
  ctx.bezierCurveTo(293.4, 511.9, 303.5, 506.5, 309.3, 500.0);
  ctx.bezierCurveTo(307.2, 497.8, 306.4, 501.3, 303.3, 501.0);
  ctx.bezierCurveTo(300.7, 502.6, 306.5, 498.3, 308.3, 498.0);
  ctx.bezierCurveTo(303.2, 494.8, 302.5, 487.2, 295.3, 486.0);
  ctx.bezierCurveTo(295.3, 484.0, 295.3, 482.0, 295.3, 480.0);
  ctx.bezierCurveTo(292.9, 479.6, 295.9, 484.6, 292.3, 483.0);
  ctx.bezierCurveTo(292.3, 481.0, 292.3, 479.0, 292.3, 477.0);
  ctx.bezierCurveTo(290.8, 477.8, 290.2, 479.5, 290.3, 482.0);
  ctx.bezierCurveTo(288.0, 481.7, 286.6, 480.4, 283.3, 481.0);
  ctx.bezierCurveTo(283.0, 477.3, 284.4, 475.4, 285.3, 473.0);
  ctx.bezierCurveTo(298.8, 476.2, 303.5, 488.1, 313.3, 495.0);
  ctx.bezierCurveTo(311.9, 499.3, 310.1, 503.1, 309.3, 508.0);
  ctx.bezierCurveTo(308.8, 508.3, 308.0, 506.4, 308.3, 506.0);
  ctx.bezierCurveTo(304.6, 511.2, 305.1, 522.7, 303.3, 532.0);
  ctx.bezierCurveTo(301.6, 541.0, 298.1, 551.4, 296.3, 560.0);
  ctx.bezierCurveTo(294.7, 567.6, 294.1, 571.7, 290.3, 577.0);
  ctx.bezierCurveTo(270.6, 563.8, 289.2, 537.3, 293.3, 519.0);
  ctx.bezierCurveTo(294.5, 519.2, 294.2, 520.8, 294.3, 522.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(443.3, 479.0);
  ctx.bezierCurveTo(446.2, 477.3, 440.6, 480.6, 440.3, 482.0);
  ctx.bezierCurveTo(437.4, 480.9, 441.6, 478.7, 443.3, 479.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(481.3, 482.0);
  ctx.bezierCurveTo(486.1, 484.5, 482.5, 488.1, 481.3, 482.0);
  ctx.lineTo(481.3, 482.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(279.3, 484.0);
  ctx.bezierCurveTo(284.6, 482.7, 276.6, 484.7, 279.3, 484.0);
  ctx.lineTo(279.3, 484.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(274.3, 487.0);
  ctx.bezierCurveTo(271.6, 486.9, 272.3, 488.7, 270.3, 487.0);
  ctx.bezierCurveTo(271.9, 485.5, 275.1, 482.9, 277.3, 485.0);
  ctx.bezierCurveTo(277.2, 486.2, 275.5, 485.8, 274.3, 486.0);
  ctx.bezierCurveTo(274.1, 486.9, 274.7, 486.9, 275.3, 487.0);
  ctx.bezierCurveTo(275.1, 488.1, 274.3, 487.6, 274.3, 487.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(499.3, 538.0);
  ctx.bezierCurveTo(493.0, 526.7, 489.3, 512.7, 485.3, 499.0);
  ctx.bezierCurveTo(483.9, 494.1, 485.8, 500.1, 486.3, 501.0);
  ctx.bezierCurveTo(490.6, 508.5, 497.8, 525.5, 499.3, 538.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(477.3, 499.0);
  ctx.bezierCurveTo(479.6, 500.4, 477.7, 506.0, 478.3, 509.0);
  ctx.bezierCurveTo(476.8, 512.1, 477.4, 504.7, 477.3, 503.0);
  ctx.bezierCurveTo(476.1, 503.2, 476.5, 504.8, 476.3, 506.0);
  ctx.bezierCurveTo(472.8, 503.7, 478.7, 502.5, 477.3, 499.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(456.3, 518.0);
  ctx.bezierCurveTo(459.6, 517.4, 457.8, 514.2, 457.3, 512.0);
  ctx.bezierCurveTo(453.2, 516.6, 458.5, 509.5, 454.3, 509.0);
  ctx.bezierCurveTo(454.5, 507.6, 457.3, 508.7, 457.3, 507.0);
  ctx.bezierCurveTo(466.4, 520.6, 472.9, 536.8, 479.3, 553.0);
  ctx.bezierCurveTo(477.7, 553.1, 475.5, 552.5, 475.3, 554.0);
  ctx.bezierCurveTo(469.0, 542.6, 464.1, 529.9, 459.3, 517.0);
  ctx.bezierCurveTo(455.8, 520.7, 460.4, 526.4, 462.3, 531.0);
  ctx.bezierCurveTo(464.5, 536.1, 466.9, 541.3, 468.3, 546.0);
  ctx.bezierCurveTo(472.1, 548.9, 473.2, 554.4, 474.3, 560.0);
  ctx.bezierCurveTo(472.6, 560.4, 472.4, 559.2, 472.3, 558.0);
  ctx.bezierCurveTo(469.8, 566.4, 467.8, 571.2, 467.3, 580.0);
  ctx.bezierCurveTo(459.7, 569.9, 450.9, 561.3, 445.3, 552.0);
  ctx.bezierCurveTo(444.6, 550.8, 445.1, 548.2, 444.3, 547.0);
  ctx.bezierCurveTo(443.7, 546.1, 442.4, 547.2, 441.3, 546.0);
  ctx.bezierCurveTo(439.6, 544.1, 435.8, 533.1, 434.3, 532.0);
  ctx.bezierCurveTo(432.4, 530.6, 431.3, 525.8, 431.3, 526.0);
  ctx.bezierCurveTo(430.5, 521.5, 432.7, 516.3, 431.3, 510.0);
  ctx.bezierCurveTo(436.1, 507.8, 438.1, 500.9, 444.3, 503.0);
  ctx.bezierCurveTo(441.7, 508.8, 440.3, 515.0, 440.3, 521.0);
  ctx.bezierCurveTo(444.1, 517.2, 441.9, 507.2, 447.3, 505.0);
  ctx.bezierCurveTo(447.5, 502.2, 443.6, 502.7, 446.3, 500.0);
  ctx.bezierCurveTo(450.7, 504.4, 453.8, 511.6, 456.3, 516.0);
  ctx.bezierCurveTo(454.6, 513.0, 459.1, 515.4, 456.3, 518.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(445.3, 527.0);
  ctx.bezierCurveTo(445.3, 523.0, 445.2, 519.7, 444.3, 519.0);
  ctx.bezierCurveTo(443.4, 521.8, 442.7, 524.6, 445.3, 527.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(457.3, 545.0);
  ctx.bezierCurveTo(459.1, 546.5, 458.3, 553.7, 461.3, 551.0);
  ctx.bezierCurveTo(462.5, 548.1, 452.3, 538.4, 452.3, 532.0);
  ctx.bezierCurveTo(449.8, 532.5, 447.3, 524.7, 448.3, 528.0);
  ctx.bezierCurveTo(450.6, 534.4, 454.2, 539.4, 457.3, 545.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(454.3, 545.0);
  ctx.bezierCurveTo(454.6, 543.6, 453.7, 541.1, 453.3, 543.0);
  ctx.bezierCurveTo(453.0, 544.4, 453.9, 546.9, 454.3, 545.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(466.3, 557.0);
  ctx.bezierCurveTo(464.0, 557.3, 465.2, 554.1, 463.3, 554.0);
  ctx.bezierCurveTo(463.5, 555.5, 463.0, 557.7, 464.3, 558.0);
  ctx.bezierCurveTo(464.6, 556.1, 466.0, 558.6, 466.3, 557.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(479.3, 502.0);
  ctx.bezierCurveTo(482.9, 504.4, 482.4, 510.9, 482.3, 517.0);
  ctx.bezierCurveTo(484.4, 516.7, 482.6, 512.6, 484.3, 512.0);
  ctx.bezierCurveTo(486.1, 514.4, 483.2, 519.2, 485.3, 523.0);
  ctx.bezierCurveTo(488.1, 521.4, 483.9, 518.5, 485.3, 515.0);
  ctx.bezierCurveTo(488.2, 529.7, 497.7, 544.1, 496.3, 557.0);
  ctx.bezierCurveTo(497.3, 557.0, 497.1, 555.8, 497.3, 555.0);
  ctx.bezierCurveTo(497.3, 560.7, 499.3, 565.1, 500.3, 572.0);
  ctx.bezierCurveTo(496.6, 572.2, 498.7, 568.2, 498.3, 567.0);
  ctx.bezierCurveTo(495.1, 557.7, 490.5, 547.4, 489.3, 536.0);
  ctx.bezierCurveTo(489.3, 534.7, 488.1, 535.6, 488.3, 536.0);
  ctx.bezierCurveTo(482.8, 528.2, 481.7, 513.8, 479.3, 502.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(444.3, 519.0);
  ctx.bezierCurveTo(445.2, 519.7, 445.3, 523.0, 445.3, 527.0);
  ctx.bezierCurveTo(442.7, 524.6, 443.4, 521.8, 444.3, 519.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(408.3, 549.0);
  ctx.bezierCurveTo(410.8, 549.0, 405.3, 543.6, 405.3, 546.0);
  ctx.bezierCurveTo(403.4, 539.3, 394.7, 531.5, 391.3, 523.0);
  ctx.bezierCurveTo(401.9, 527.1, 404.7, 538.0, 412.3, 547.0);
  ctx.bezierCurveTo(418.9, 554.8, 428.5, 565.8, 431.3, 578.0);
  ctx.bezierCurveTo(421.0, 569.5, 414.2, 559.6, 405.3, 548.0);
  ctx.bezierCurveTo(405.4, 545.6, 408.6, 547.8, 408.3, 549.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(448.3, 528.0);
  ctx.bezierCurveTo(447.3, 524.7, 449.8, 532.5, 452.3, 532.0);
  ctx.bezierCurveTo(452.3, 538.4, 462.5, 548.1, 461.3, 551.0);
  ctx.bezierCurveTo(458.3, 553.7, 459.1, 546.5, 457.3, 545.0);
  ctx.bezierCurveTo(454.2, 539.4, 450.6, 534.4, 448.3, 528.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(464.3, 558.0);
  ctx.bezierCurveTo(463.0, 557.7, 463.5, 555.5, 463.3, 554.0);
  ctx.bezierCurveTo(465.2, 554.1, 464.0, 557.3, 466.3, 557.0);
  ctx.bezierCurveTo(466.0, 558.6, 464.6, 556.1, 464.3, 558.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(480.3, 566.0);
  ctx.bezierCurveTo(481.3, 566.7, 481.8, 567.8, 482.3, 569.0);
  ctx.bezierCurveTo(481.9, 571.5, 480.2, 567.3, 480.3, 566.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(517.3, 100.0);
  ctx.bezierCurveTo(517.6, 102.4, 520.0, 98.9, 520.3, 98.0);
  ctx.bezierCurveTo(522.6, 99.7, 520.7, 105.6, 521.3, 109.0);
  ctx.bezierCurveTo(519.7, 109.0, 518.0, 109.0, 516.3, 109.0);
  ctx.bezierCurveTo(518.2, 105.5, 510.3, 109.8, 508.3, 105.0);
  ctx.bezierCurveTo(508.7, 106.9, 510.5, 107.5, 510.3, 110.0);
  ctx.bezierCurveTo(524.6, 109.7, 508.0, 113.3, 506.3, 108.0);
  ctx.bezierCurveTo(507.9, 104.6, 508.7, 100.3, 508.3, 95.0);
  ctx.bezierCurveTo(511.5, 98.0, 514.2, 96.0, 519.3, 96.0);
  ctx.bezierCurveTo(519.2, 97.9, 518.7, 99.3, 517.3, 100.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(390.3, 123.0);
  ctx.bezierCurveTo(383.2, 124.1, 381.2, 127.4, 374.3, 126.0);
  ctx.bezierCurveTo(373.3, 125.8, 377.5, 124.6, 377.3, 125.0);
  ctx.bezierCurveTo(378.3, 122.6, 367.4, 125.8, 372.3, 122.0);
  ctx.bezierCurveTo(379.2, 122.4, 387.4, 115.0, 390.3, 123.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(523.3, 139.0);
  ctx.bezierCurveTo(523.1, 136.9, 518.9, 138.7, 518.3, 137.0);
  ctx.bezierCurveTo(521.5, 132.3, 525.4, 138.7, 525.3, 142.0);
  ctx.bezierCurveTo(524.9, 155.1, 500.1, 149.5, 511.3, 135.0);
  ctx.bezierCurveTo(513.3, 135.0, 515.3, 135.0, 517.3, 135.0);
  ctx.bezierCurveTo(518.3, 138.4, 514.2, 136.6, 512.3, 137.0);
  ctx.bezierCurveTo(518.2, 139.8, 516.8, 138.5, 523.3, 139.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Path
  ctx.restore();
  ctx.restore();
  ctx.beginPath();
  ctx.moveTo(1.0, 128.7);
  ctx.bezierCurveTo(1.0, 128.7, 1.8, 128.7, 1.8, 127.9);
  ctx.stroke();
  ctx.restore();
}


function init_drawIronManShadow() {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  // Store the current transformation matrix
  ctx.save();

  // Use the identity matrix while clearing the canvas
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Restore the transform
  ctx.restore();
  
  imageStatus = "shadow";
  
  drawIronManShadow(ctx);
}

function drawIronManShadow(ctx) {

  // ironMan/Group
  ctx.save();
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.75)";
  ctx.shadowOffsetX = 7.0;
  ctx.shadowOffsetY = 7.0;
  ctx.shadowBlur = 10.0;

  // ironMan/Group/Clipping Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(141.8, 8.1);
  ctx.lineTo(591.8, 8.1);
  ctx.lineTo(591.8, 592.1);
  ctx.lineTo(141.8, 592.1);
  ctx.lineTo(141.8, 8.1);
  ctx.closePath();
  ctx.clip();

  // ironMan/Group/Tracing

  // ironMan/Group/Tracing/Group

  // ironMan/Group/Tracing/Group/Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(522.3, 74.0);
  ctx.bezierCurveTo(524.5, 78.5, 521.3, 82.8, 522.3, 89.0);
  ctx.bezierCurveTo(520.1, 87.5, 518.2, 93.1, 512.3, 91.0);
  ctx.bezierCurveTo(511.3, 90.1, 512.0, 87.3, 509.3, 88.0);
  ctx.bezierCurveTo(513.5, 83.2, 513.0, 73.7, 522.3, 74.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(388.3, 82.0);
  ctx.bezierCurveTo(387.9, 78.6, 391.3, 79.0, 392.3, 77.0);
  ctx.bezierCurveTo(400.7, 82.9, 401.6, 96.4, 403.3, 109.0);
  ctx.bezierCurveTo(400.9, 107.7, 399.7, 113.6, 399.3, 116.0);
  ctx.bezierCurveTo(398.4, 122.0, 400.9, 130.2, 400.3, 136.0);
  ctx.bezierCurveTo(400.6, 137.8, 399.4, 138.1, 399.3, 137.0);
  ctx.bezierCurveTo(399.3, 135.7, 399.3, 134.3, 399.3, 133.0);
  ctx.bezierCurveTo(397.7, 129.6, 396.9, 125.4, 394.3, 123.0);
  ctx.bezierCurveTo(394.3, 116.6, 395.8, 106.8, 395.3, 97.0);
  ctx.bezierCurveTo(395.3, 94.4, 396.1, 95.8, 397.3, 96.0);
  ctx.bezierCurveTo(395.7, 89.9, 391.9, 86.1, 388.3, 82.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(554.3, 83.0);
  ctx.bezierCurveTo(557.6, 89.3, 551.3, 93.7, 550.3, 99.0);
  ctx.bezierCurveTo(544.5, 100.1, 543.0, 96.9, 539.3, 96.0);
  ctx.bezierCurveTo(542.5, 89.9, 546.2, 84.3, 554.3, 83.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 86.0);
  ctx.bezierCurveTo(372.6, 92.0, 368.9, 95.9, 368.3, 103.0);
  ctx.bezierCurveTo(364.0, 103.0, 359.7, 103.0, 355.3, 103.0);
  ctx.bezierCurveTo(352.7, 97.9, 351.1, 91.9, 350.3, 85.0);
  ctx.bezierCurveTo(356.4, 84.3, 367.2, 84.7, 374.3, 86.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(509.3, 90.0);
  ctx.bezierCurveTo(510.5, 95.6, 514.2, 92.6, 520.3, 93.0);
  ctx.bezierCurveTo(520.1, 96.1, 521.0, 100.3, 519.3, 102.0);
  ctx.bezierCurveTo(514.9, 102.8, 513.3, 100.7, 509.3, 101.0);
  ctx.bezierCurveTo(509.3, 97.3, 509.3, 93.7, 509.3, 90.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(535.3, 99.0);
  ctx.bezierCurveTo(539.9, 100.1, 542.3, 102.9, 547.3, 101.0);
  ctx.bezierCurveTo(545.2, 104.2, 543.2, 107.5, 541.3, 111.0);
  ctx.bezierCurveTo(538.4, 109.9, 534.6, 109.8, 534.3, 106.0);
  ctx.bezierCurveTo(531.5, 109.2, 537.0, 112.6, 540.3, 113.0);
  ctx.bezierCurveTo(539.2, 117.9, 533.3, 121.0, 535.3, 126.0);
  ctx.bezierCurveTo(528.9, 126.1, 525.1, 123.6, 522.3, 120.0);
  ctx.bezierCurveTo(525.1, 111.4, 532.0, 107.0, 535.3, 99.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(344.3, 101.0);
  ctx.bezierCurveTo(346.1, 98.3, 345.0, 106.9, 345.3, 109.0);
  ctx.bezierCurveTo(343.5, 111.7, 344.6, 103.1, 344.3, 101.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(526.3, 107.0);
  ctx.bezierCurveTo(525.4, 109.1, 523.3, 110.0, 523.3, 113.0);
  ctx.bezierCurveTo(520.6, 111.2, 523.3, 106.4, 526.3, 107.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(345.3, 113.0);
  ctx.bezierCurveTo(345.7, 111.1, 346.6, 113.6, 346.3, 115.0);
  ctx.bezierCurveTo(345.9, 116.9, 345.0, 114.4, 345.3, 113.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(541.3, 115.0);
  ctx.bezierCurveTo(544.0, 114.3, 543.3, 117.0, 545.3, 117.0);
  ctx.bezierCurveTo(545.0, 119.1, 541.6, 117.9, 541.3, 120.0);
  ctx.bezierCurveTo(539.0, 119.7, 540.7, 115.6, 541.3, 115.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(403.3, 118.0);
  ctx.bezierCurveTo(406.2, 121.6, 401.9, 126.6, 403.3, 132.0);
  ctx.bezierCurveTo(401.8, 136.4, 401.8, 120.1, 403.3, 118.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(519.3, 119.0);
  ctx.bezierCurveTo(521.4, 119.6, 521.4, 120.6, 520.3, 122.0);
  ctx.bezierCurveTo(519.7, 122.0, 519.0, 122.0, 518.3, 122.0);
  ctx.bezierCurveTo(518.0, 120.4, 519.3, 120.3, 519.3, 119.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(393.3, 128.0);
  ctx.bezierCurveTo(385.6, 143.0, 367.7, 130.7, 352.3, 131.0);
  ctx.bezierCurveTo(353.8, 132.4, 350.1, 134.6, 347.3, 137.0);
  ctx.bezierCurveTo(344.2, 133.1, 333.4, 136.9, 333.3, 130.0);
  ctx.bezierCurveTo(334.6, 129.0, 337.0, 129.1, 337.3, 127.0);
  ctx.bezierCurveTo(345.2, 127.7, 351.0, 130.9, 361.3, 130.0);
  ctx.bezierCurveTo(373.6, 129.0, 384.2, 121.5, 393.3, 128.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(372.3, 130.0);
  ctx.bezierCurveTo(367.4, 133.8, 378.3, 130.6, 377.3, 133.0);
  ctx.bezierCurveTo(377.5, 132.6, 373.3, 133.8, 374.3, 134.0);
  ctx.bezierCurveTo(381.2, 135.4, 383.2, 132.1, 390.3, 131.0);
  ctx.bezierCurveTo(387.4, 123.0, 379.2, 130.4, 372.3, 130.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(336.3, 132.0);
  ctx.bezierCurveTo(340.6, 132.5, 347.7, 136.4, 349.3, 131.0);
  ctx.bezierCurveTo(346.4, 130.2, 337.6, 128.2, 336.3, 132.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(349.3, 131.0);
  ctx.bezierCurveTo(347.7, 136.4, 340.6, 132.5, 336.3, 132.0);
  ctx.bezierCurveTo(337.6, 128.2, 346.4, 130.2, 349.3, 131.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(387.3, 140.0);
  ctx.bezierCurveTo(388.5, 136.8, 388.5, 142.7, 388.3, 144.0);
  ctx.bezierCurveTo(387.2, 147.2, 387.2, 141.3, 387.3, 140.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(553.3, 153.0);
  ctx.bezierCurveTo(554.1, 152.0, 552.2, 144.5, 556.3, 144.0);
  ctx.bezierCurveTo(559.8, 144.8, 560.1, 148.9, 561.3, 152.0);
  ctx.bezierCurveTo(557.2, 153.6, 552.3, 154.3, 546.3, 154.0);
  ctx.bezierCurveTo(545.0, 151.1, 545.0, 146.9, 546.3, 144.0);
  ctx.bezierCurveTo(548.7, 144.0, 551.0, 144.0, 553.3, 144.0);
  ctx.bezierCurveTo(552.6, 146.4, 551.3, 150.9, 553.3, 153.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(390.3, 168.0);
  ctx.bezierCurveTo(393.1, 164.6, 398.0, 162.2, 402.3, 160.0);
  ctx.bezierCurveTo(408.8, 156.7, 413.5, 153.7, 424.3, 154.0);
  ctx.bezierCurveTo(415.5, 159.1, 404.6, 162.3, 397.3, 169.0);
  ctx.bezierCurveTo(395.0, 168.7, 393.6, 167.4, 390.3, 168.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(445.3, 159.0);
  ctx.bezierCurveTo(439.8, 161.5, 435.1, 159.2, 430.3, 160.0);
  ctx.bezierCurveTo(425.7, 160.8, 416.5, 165.4, 411.3, 168.0);
  ctx.bezierCurveTo(407.6, 169.8, 403.8, 174.5, 400.3, 171.0);
  ctx.bezierCurveTo(401.4, 166.8, 407.1, 162.8, 410.3, 164.0);
  ctx.bezierCurveTo(413.4, 157.7, 422.3, 157.4, 428.3, 154.0);
  ctx.bezierCurveTo(434.0, 155.6, 439.5, 157.5, 445.3, 159.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(399.3, 155.0);
  ctx.bezierCurveTo(399.0, 156.3, 397.6, 156.6, 397.3, 158.0);
  ctx.bezierCurveTo(394.8, 157.6, 397.3, 154.1, 399.3, 155.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(340.3, 159.0);
  ctx.bezierCurveTo(342.0, 156.1, 341.1, 164.1, 341.3, 166.0);
  ctx.bezierCurveTo(339.6, 168.9, 340.5, 160.9, 340.3, 159.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(486.3, 159.0);
  ctx.bezierCurveTo(487.0, 156.2, 487.5, 161.3, 487.3, 162.0);
  ctx.bezierCurveTo(486.9, 164.0, 485.4, 162.8, 486.3, 159.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(370.3, 177.0);
  ctx.bezierCurveTo(363.0, 174.6, 352.3, 175.9, 348.3, 180.0);
  ctx.bezierCurveTo(347.1, 176.5, 342.3, 176.7, 343.3, 171.0);
  ctx.bezierCurveTo(346.1, 170.7, 349.3, 172.9, 351.3, 168.0);
  ctx.bezierCurveTo(358.5, 168.3, 369.2, 167.5, 373.3, 168.0);
  ctx.bezierCurveTo(372.8, 171.5, 370.6, 173.3, 370.3, 177.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(339.3, 168.0);
  ctx.bezierCurveTo(341.1, 168.2, 341.6, 169.7, 341.3, 172.0);
  ctx.bezierCurveTo(340.0, 171.3, 339.5, 169.9, 339.3, 168.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(326.3, 170.0);
  ctx.bezierCurveTo(332.0, 171.8, 332.3, 182.7, 330.3, 189.0);
  ctx.bezierCurveTo(326.7, 188.3, 326.5, 191.2, 323.3, 191.0);
  ctx.bezierCurveTo(323.3, 188.3, 323.3, 185.7, 323.3, 183.0);
  ctx.bezierCurveTo(315.3, 182.3, 315.0, 189.3, 313.3, 195.0);
  ctx.bezierCurveTo(308.1, 184.9, 318.7, 173.9, 326.3, 170.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(346.3, 181.0);
  ctx.bezierCurveTo(347.9, 184.7, 351.3, 186.6, 352.3, 191.0);
  ctx.bezierCurveTo(361.2, 191.5, 364.9, 191.8, 370.3, 188.0);
  ctx.bezierCurveTo(370.0, 196.1, 351.0, 204.1, 341.3, 197.0);
  ctx.bezierCurveTo(339.4, 188.1, 346.1, 187.8, 346.3, 181.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(389.3, 181.0);
  ctx.bezierCurveTo(387.8, 184.8, 385.3, 187.6, 384.3, 192.0);
  ctx.bezierCurveTo(382.2, 188.5, 385.6, 181.9, 389.3, 181.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(483.3, 181.0);
  ctx.bezierCurveTo(485.2, 183.8, 486.1, 187.6, 487.3, 191.0);
  ctx.bezierCurveTo(483.9, 189.7, 483.7, 185.3, 483.3, 181.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(470.3, 182.0);
  ctx.bezierCurveTo(470.2, 200.2, 444.0, 201.0, 439.3, 218.0);
  ctx.bezierCurveTo(433.5, 214.1, 424.7, 213.3, 414.3, 214.0);
  ctx.bezierCurveTo(420.8, 201.8, 433.4, 187.9, 448.3, 193.0);
  ctx.bezierCurveTo(448.9, 196.9, 446.5, 197.9, 447.3, 202.0);
  ctx.bezierCurveTo(449.3, 196.0, 455.6, 194.3, 458.3, 189.0);
  ctx.bezierCurveTo(462.5, 193.8, 466.1, 183.5, 470.3, 182.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(321.3, 185.0);
  ctx.bezierCurveTo(322.1, 187.5, 319.4, 193.6, 323.3, 193.0);
  ctx.bezierCurveTo(321.2, 194.6, 318.1, 195.1, 314.3, 195.0);
  ctx.bezierCurveTo(317.7, 193.8, 319.7, 190.1, 317.3, 186.0);
  ctx.bezierCurveTo(319.1, 186.1, 319.4, 184.8, 321.3, 185.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(427.3, 194.0);
  ctx.bezierCurveTo(422.2, 196.6, 417.6, 199.6, 415.3, 205.0);
  ctx.bezierCurveTo(410.3, 204.6, 411.6, 198.0, 404.3, 200.0);
  ctx.bezierCurveTo(406.0, 193.0, 410.8, 189.1, 415.3, 185.0);
  ctx.bezierCurveTo(420.3, 187.0, 426.5, 187.8, 427.3, 194.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(311.3, 205.0);
  ctx.bezierCurveTo(312.8, 198.8, 319.3, 197.6, 325.3, 196.0);
  ctx.bezierCurveTo(325.9, 198.1, 324.1, 202.6, 326.3, 203.0);
  ctx.bezierCurveTo(326.8, 194.5, 334.0, 192.7, 338.3, 188.0);
  ctx.bezierCurveTo(340.6, 189.7, 338.7, 195.6, 339.3, 199.0);
  ctx.bezierCurveTo(342.4, 201.6, 347.9, 201.7, 352.3, 203.0);
  ctx.bezierCurveTo(336.6, 202.3, 323.1, 210.4, 311.3, 205.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(354.3, 190.0);
  ctx.bezierCurveTo(354.7, 187.8, 359.2, 189.6, 361.3, 189.0);
  ctx.bezierCurveTo(360.9, 191.2, 356.4, 189.4, 354.3, 190.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(506.3, 196.0);
  ctx.bezierCurveTo(507.3, 194.7, 507.3, 192.3, 508.3, 191.0);
  ctx.bezierCurveTo(506.6, 191.0, 505.7, 191.7, 505.3, 193.0);
  ctx.bezierCurveTo(501.8, 187.5, 509.3, 190.6, 514.3, 190.0);
  ctx.bezierCurveTo(511.3, 191.6, 510.3, 195.3, 506.3, 196.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 249.0);
  ctx.bezierCurveTo(373.2, 249.2, 372.5, 248.8, 372.3, 248.0);
  ctx.bezierCurveTo(374.1, 238.0, 382.9, 231.7, 383.3, 226.0);
  ctx.bezierCurveTo(381.9, 225.5, 376.6, 216.7, 380.3, 214.0);
  ctx.bezierCurveTo(372.3, 217.3, 364.4, 220.7, 358.3, 226.0);
  ctx.bezierCurveTo(353.4, 224.3, 349.9, 221.1, 344.3, 220.0);
  ctx.bezierCurveTo(347.4, 215.4, 352.0, 212.4, 354.3, 207.0);
  ctx.bezierCurveTo(364.1, 206.3, 374.3, 201.2, 381.3, 201.0);
  ctx.bezierCurveTo(377.1, 205.1, 371.4, 207.7, 364.3, 209.0);
  ctx.bezierCurveTo(371.6, 212.4, 377.3, 204.5, 384.3, 202.0);
  ctx.bezierCurveTo(382.3, 201.1, 383.5, 196.8, 380.3, 197.0);
  ctx.bezierCurveTo(380.6, 195.0, 383.0, 195.0, 383.3, 193.0);
  ctx.bezierCurveTo(390.1, 195.2, 394.7, 199.7, 401.3, 202.0);
  ctx.bezierCurveTo(399.6, 207.3, 399.2, 219.3, 403.3, 222.0);
  ctx.bezierCurveTo(393.1, 230.5, 381.5, 237.5, 374.3, 249.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(500.3, 204.0);
  ctx.bezierCurveTo(497.6, 207.4, 491.0, 202.7, 487.3, 202.0);
  ctx.bezierCurveTo(477.9, 200.1, 492.8, 201.8, 500.3, 204.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(409.3, 219.0);
  ctx.bezierCurveTo(407.6, 219.0, 406.7, 219.7, 406.3, 221.0);
  ctx.bezierCurveTo(401.6, 218.4, 404.5, 208.1, 402.3, 203.0);
  ctx.bezierCurveTo(407.9, 200.8, 411.0, 204.2, 414.3, 207.0);
  ctx.bezierCurveTo(409.1, 214.0, 410.6, 222.7, 415.3, 229.0);
  ctx.bezierCurveTo(400.4, 234.6, 387.2, 244.5, 375.3, 254.0);
  ctx.bezierCurveTo(374.1, 253.8, 374.5, 252.2, 374.3, 251.0);
  ctx.bezierCurveTo(383.7, 238.1, 398.4, 230.4, 409.3, 219.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(270.3, 205.0);
  ctx.bezierCurveTo(272.2, 202.8, 270.9, 212.3, 271.3, 215.0);
  ctx.bezierCurveTo(269.4, 217.2, 270.7, 207.7, 270.3, 205.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(278.3, 209.0);
  ctx.bezierCurveTo(279.0, 206.2, 279.5, 211.3, 279.3, 212.0);
  ctx.bezierCurveTo(278.9, 214.0, 277.4, 212.8, 278.3, 209.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(478.3, 209.0);
  ctx.bezierCurveTo(478.1, 206.8, 481.9, 208.5, 483.3, 208.0);
  ctx.bezierCurveTo(483.5, 210.2, 479.8, 208.5, 478.3, 209.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(319.3, 212.0);
  ctx.bezierCurveTo(320.9, 208.9, 320.2, 216.3, 320.3, 218.0);
  ctx.bezierCurveTo(318.8, 221.1, 319.4, 213.7, 319.3, 212.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(494.3, 213.0);
  ctx.bezierCurveTo(494.9, 216.9, 488.8, 214.2, 486.3, 215.0);
  ctx.bezierCurveTo(486.5, 211.9, 491.3, 213.3, 494.3, 213.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(484.3, 217.0);
  ctx.bezierCurveTo(480.3, 217.0, 476.3, 217.0, 472.3, 217.0);
  ctx.bezierCurveTo(473.1, 214.7, 483.8, 213.1, 484.3, 217.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(270.3, 218.0);
  ctx.bezierCurveTo(271.7, 214.8, 271.3, 221.5, 271.3, 223.0);
  ctx.bezierCurveTo(269.9, 226.2, 270.3, 219.5, 270.3, 218.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(292.3, 218.0);
  ctx.bezierCurveTo(294.1, 218.2, 294.6, 219.7, 294.3, 222.0);
  ctx.bezierCurveTo(293.0, 221.3, 292.5, 219.9, 292.3, 218.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(312.3, 220.0);
  ctx.bezierCurveTo(312.7, 218.1, 313.6, 220.6, 313.3, 222.0);
  ctx.bezierCurveTo(312.9, 223.9, 312.0, 221.4, 312.3, 220.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(486.3, 221.0);
  ctx.bezierCurveTo(486.7, 218.8, 491.2, 220.6, 493.3, 220.0);
  ctx.bezierCurveTo(492.9, 222.2, 488.4, 220.4, 486.3, 221.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(276.3, 226.0);
  ctx.bezierCurveTo(280.5, 225.2, 281.0, 227.9, 284.3, 228.0);
  ctx.bezierCurveTo(285.0, 231.1, 283.3, 231.6, 283.3, 234.0);
  ctx.bezierCurveTo(276.9, 235.4, 277.3, 230.0, 276.3, 226.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(344.3, 232.0);
  ctx.bezierCurveTo(346.2, 234.7, 347.5, 239.1, 346.3, 242.0);
  ctx.bezierCurveTo(344.8, 239.6, 344.8, 235.5, 344.3, 232.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(419.3, 235.0);
  ctx.bezierCurveTo(419.7, 233.1, 420.6, 235.6, 420.3, 237.0);
  ctx.bezierCurveTo(419.9, 238.9, 419.0, 236.4, 419.3, 235.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(283.3, 243.0);
  ctx.bezierCurveTo(284.5, 243.8, 286.0, 244.3, 288.3, 244.0);
  ctx.bezierCurveTo(287.3, 258.8, 286.0, 276.1, 291.3, 287.0);
  ctx.bezierCurveTo(289.5, 289.4, 287.4, 287.6, 286.3, 292.0);
  ctx.bezierCurveTo(271.9, 284.1, 276.2, 255.3, 283.3, 243.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(344.3, 251.0);
  ctx.bezierCurveTo(341.3, 250.3, 345.3, 248.9, 344.3, 247.0);
  ctx.bezierCurveTo(347.7, 247.9, 345.2, 249.2, 344.3, 251.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(372.3, 250.0);
  ctx.bezierCurveTo(372.9, 255.3, 371.4, 258.4, 367.3, 259.0);
  ctx.bezierCurveTo(369.3, 256.4, 368.6, 251.0, 372.3, 250.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(424.3, 255.0);
  ctx.bezierCurveTo(424.7, 253.1, 425.6, 255.6, 425.3, 257.0);
  ctx.bezierCurveTo(424.9, 258.9, 424.0, 256.4, 424.3, 255.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(425.3, 260.0);
  ctx.bezierCurveTo(425.7, 258.1, 426.6, 260.6, 426.3, 262.0);
  ctx.bezierCurveTo(425.9, 263.9, 425.0, 261.4, 425.3, 260.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(464.3, 260.0);
  ctx.bezierCurveTo(469.4, 256.5, 469.8, 262.6, 464.3, 260.0);
  ctx.lineTo(464.3, 260.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(440.3, 263.0);
  ctx.bezierCurveTo(442.1, 263.2, 445.3, 262.0, 444.3, 265.0);
  ctx.bezierCurveTo(443.5, 265.2, 443.4, 264.6, 443.3, 264.0);
  ctx.bezierCurveTo(442.3, 264.0, 442.5, 265.2, 442.3, 266.0);
  ctx.bezierCurveTo(441.5, 265.8, 441.3, 265.0, 440.3, 265.0);
  ctx.bezierCurveTo(440.3, 264.3, 440.3, 263.7, 440.3, 263.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(426.3, 273.0);
  ctx.bezierCurveTo(429.9, 274.4, 429.3, 280.0, 430.3, 284.0);
  ctx.bezierCurveTo(428.0, 281.4, 427.0, 277.3, 426.3, 273.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(307.3, 274.0);
  ctx.bezierCurveTo(309.1, 273.7, 309.1, 279.6, 306.3, 278.0);
  ctx.bezierCurveTo(307.1, 277.1, 307.4, 275.7, 307.3, 274.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(431.3, 276.0);
  ctx.bezierCurveTo(433.3, 277.7, 434.0, 280.7, 434.3, 284.0);
  ctx.bezierCurveTo(435.7, 283.7, 435.1, 281.5, 435.3, 280.0);
  ctx.bezierCurveTo(437.6, 280.6, 435.5, 293.3, 431.3, 294.0);
  ctx.bezierCurveTo(431.3, 291.3, 431.3, 288.7, 431.3, 286.0);
  ctx.bezierCurveTo(436.5, 290.8, 428.8, 277.8, 431.3, 276.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(398.3, 301.0);
  ctx.bezierCurveTo(395.8, 302.4, 392.0, 302.7, 390.3, 305.0);
  ctx.bezierCurveTo(385.8, 300.2, 380.9, 295.7, 378.3, 289.0);
  ctx.bezierCurveTo(381.5, 288.2, 384.2, 286.9, 386.3, 285.0);
  ctx.bezierCurveTo(383.6, 283.0, 380.0, 288.7, 375.3, 288.0);
  ctx.bezierCurveTo(375.0, 285.6, 371.8, 286.1, 372.3, 283.0);
  ctx.bezierCurveTo(375.1, 280.4, 379.6, 279.6, 382.3, 277.0);
  ctx.bezierCurveTo(388.7, 283.9, 394.8, 291.2, 398.3, 301.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(317.3, 281.0);
  ctx.bezierCurveTo(318.5, 277.8, 318.5, 283.7, 318.3, 285.0);
  ctx.bezierCurveTo(317.2, 288.2, 317.2, 282.3, 317.3, 281.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 289.0);
  ctx.bezierCurveTo(372.6, 290.6, 370.7, 292.0, 367.3, 292.0);
  ctx.bezierCurveTo(366.9, 291.1, 366.4, 290.2, 365.3, 290.0);
  ctx.bezierCurveTo(365.5, 284.1, 372.5, 286.0, 374.3, 289.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(316.3, 298.0);
  ctx.bezierCurveTo(314.4, 304.5, 310.9, 297.4, 305.3, 299.0);
  ctx.bezierCurveTo(303.4, 297.0, 313.3, 298.4, 316.3, 298.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(318.3, 298.0);
  ctx.bezierCurveTo(321.8, 296.9, 321.0, 304.1, 317.3, 302.0);
  ctx.bezierCurveTo(318.1, 301.1, 318.4, 299.7, 318.3, 298.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(367.3, 312.0);
  ctx.bezierCurveTo(370.8, 312.7, 368.0, 315.0, 367.3, 317.0);
  ctx.bezierCurveTo(365.7, 315.4, 366.9, 313.8, 367.3, 312.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(240.3, 314.0);
  ctx.bezierCurveTo(241.5, 314.4, 242.4, 315.3, 242.3, 317.0);
  ctx.bezierCurveTo(241.1, 316.6, 240.3, 315.7, 240.3, 314.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(434.3, 320.0);
  ctx.bezierCurveTo(434.1, 321.4, 431.3, 320.3, 431.3, 322.0);
  ctx.bezierCurveTo(428.1, 320.9, 432.3, 319.1, 434.3, 320.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(290.3, 321.0);
  ctx.bezierCurveTo(293.0, 322.5, 288.7, 325.3, 288.3, 327.0);
  ctx.bezierCurveTo(283.8, 325.4, 289.8, 323.4, 290.3, 321.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(379.3, 355.0);
  ctx.bezierCurveTo(378.6, 351.3, 382.1, 353.6, 383.3, 353.0);
  ctx.bezierCurveTo(386.9, 351.3, 388.3, 347.9, 391.3, 346.0);
  ctx.bezierCurveTo(391.3, 344.0, 391.3, 342.0, 391.3, 340.0);
  ctx.bezierCurveTo(399.6, 334.7, 407.7, 329.0, 417.3, 325.0);
  ctx.bezierCurveTo(416.9, 339.6, 398.3, 336.0, 392.3, 345.0);
  ctx.bezierCurveTo(391.9, 347.4, 396.9, 344.4, 395.3, 348.0);
  ctx.bezierCurveTo(392.9, 352.3, 383.1, 358.5, 379.3, 355.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(198.3, 332.0);
  ctx.bezierCurveTo(198.1, 329.8, 201.9, 331.5, 203.3, 331.0);
  ctx.bezierCurveTo(203.5, 333.2, 199.8, 331.5, 198.3, 332.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(336.3, 332.0);
  ctx.bezierCurveTo(334.1, 335.1, 329.9, 330.8, 336.3, 332.0);
  ctx.lineTo(336.3, 332.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(251.3, 336.0);
  ctx.bezierCurveTo(252.2, 334.5, 252.8, 332.8, 255.3, 333.0);
  ctx.bezierCurveTo(254.4, 334.5, 253.8, 336.2, 251.3, 336.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(397.3, 350.0);
  ctx.bezierCurveTo(397.3, 347.6, 395.6, 347.1, 396.3, 344.0);
  ctx.bezierCurveTo(401.6, 341.3, 407.3, 339.0, 413.3, 337.0);
  ctx.bezierCurveTo(411.9, 341.9, 407.8, 344.2, 407.3, 350.0);
  ctx.bezierCurveTo(400.5, 354.5, 390.7, 356.0, 389.3, 366.0);
  ctx.bezierCurveTo(386.0, 368.0, 382.3, 369.7, 379.3, 372.0);
  ctx.bezierCurveTo(377.0, 370.0, 379.0, 363.7, 378.3, 360.0);
  ctx.bezierCurveTo(386.1, 358.1, 390.5, 352.8, 397.3, 350.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(211.3, 351.0);
  ctx.bezierCurveTo(216.4, 362.6, 204.2, 369.1, 195.3, 364.0);
  ctx.bezierCurveTo(193.8, 359.1, 194.5, 352.6, 195.3, 350.0);
  ctx.bezierCurveTo(201.9, 348.0, 205.8, 348.3, 211.3, 351.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(229.3, 350.0);
  ctx.bezierCurveTo(230.9, 351.0, 231.6, 352.7, 230.3, 354.0);
  ctx.bezierCurveTo(229.0, 353.7, 229.5, 351.5, 229.3, 350.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(329.3, 351.0);
  ctx.bezierCurveTo(326.4, 354.8, 325.4, 347.4, 329.3, 351.0);
  ctx.lineTo(329.3, 351.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(428.3, 353.0);
  ctx.bezierCurveTo(428.7, 351.1, 429.6, 353.6, 429.3, 355.0);
  ctx.bezierCurveTo(428.9, 356.9, 428.0, 354.4, 428.3, 353.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 354.0);
  ctx.bezierCurveTo(375.9, 353.7, 376.0, 354.9, 377.3, 355.0);
  ctx.bezierCurveTo(375.9, 360.6, 371.1, 370.7, 375.3, 373.0);
  ctx.bezierCurveTo(367.9, 371.5, 375.4, 359.0, 374.3, 354.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(188.3, 373.0);
  ctx.bezierCurveTo(182.1, 376.9, 183.0, 364.7, 176.3, 369.0);
  ctx.bezierCurveTo(175.2, 365.3, 178.8, 366.1, 178.3, 363.0);
  ctx.bezierCurveTo(181.9, 366.1, 185.7, 369.0, 188.3, 373.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(376.3, 367.0);
  ctx.bezierCurveTo(377.0, 364.2, 377.5, 369.3, 377.3, 370.0);
  ctx.bezierCurveTo(376.9, 372.0, 375.4, 370.8, 376.3, 367.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(437.3, 390.0);
  ctx.bezierCurveTo(427.4, 394.4, 416.5, 397.8, 412.3, 408.0);
  ctx.bezierCurveTo(403.1, 406.2, 411.2, 389.7, 407.3, 381.0);
  ctx.bezierCurveTo(414.7, 378.9, 425.8, 368.4, 432.3, 375.0);
  ctx.bezierCurveTo(434.0, 374.0, 433.0, 370.4, 435.3, 370.0);
  ctx.bezierCurveTo(440.4, 375.3, 441.6, 384.2, 444.3, 394.0);
  ctx.bezierCurveTo(440.7, 394.0, 439.8, 391.2, 437.3, 390.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(197.3, 377.0);
  ctx.bezierCurveTo(193.8, 377.5, 194.9, 373.5, 191.3, 374.0);
  ctx.bezierCurveTo(192.4, 370.0, 196.8, 374.4, 197.3, 377.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(188.3, 373.0);
  ctx.bezierCurveTo(192.4, 374.3, 195.1, 376.9, 197.3, 380.0);
  ctx.bezierCurveTo(194.5, 381.8, 191.9, 376.6, 186.3, 378.0);
  ctx.bezierCurveTo(186.2, 375.5, 187.9, 374.9, 188.3, 373.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(445.3, 405.0);
  ctx.bezierCurveTo(443.0, 405.5, 435.2, 409.5, 435.3, 406.0);
  ctx.bezierCurveTo(429.5, 409.8, 422.3, 412.3, 418.3, 418.0);
  ctx.bezierCurveTo(415.9, 416.1, 414.1, 413.6, 413.3, 410.0);
  ctx.bezierCurveTo(418.8, 400.6, 429.9, 389.1, 444.3, 395.0);
  ctx.bezierCurveTo(442.6, 397.2, 442.7, 404.0, 445.3, 405.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(446.3, 400.0);
  ctx.bezierCurveTo(446.7, 398.1, 447.6, 400.6, 447.3, 402.0);
  ctx.bezierCurveTo(446.9, 403.9, 446.0, 401.4, 446.3, 400.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(321.3, 449.0);
  ctx.bezierCurveTo(315.6, 446.1, 309.2, 443.8, 301.3, 443.0);
  ctx.bezierCurveTo(303.6, 435.3, 310.1, 431.8, 315.3, 427.0);
  ctx.bezierCurveTo(316.5, 426.8, 317.1, 427.2, 317.3, 428.0);
  ctx.bezierCurveTo(316.7, 437.0, 320.7, 441.3, 321.3, 449.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(453.3, 429.0);
  ctx.bezierCurveTo(458.6, 430.6, 463.5, 437.2, 460.3, 444.0);
  ctx.bezierCurveTo(454.1, 442.1, 449.1, 435.7, 453.3, 429.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(331.3, 431.0);
  ctx.bezierCurveTo(333.3, 429.4, 331.9, 439.7, 332.3, 443.0);
  ctx.bezierCurveTo(330.3, 444.6, 331.8, 434.3, 331.3, 431.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(466.3, 442.0);
  ctx.bezierCurveTo(468.2, 439.6, 467.0, 448.6, 467.3, 451.0);
  ctx.bezierCurveTo(465.5, 453.4, 466.6, 444.4, 466.3, 442.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(404.3, 454.0);
  ctx.bezierCurveTo(405.2, 451.6, 408.3, 451.4, 411.3, 451.0);
  ctx.bezierCurveTo(410.0, 453.0, 406.9, 453.2, 404.3, 454.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(457.3, 470.0);
  ctx.bezierCurveTo(454.9, 473.3, 452.5, 467.2, 457.3, 470.0);
  ctx.lineTo(457.3, 470.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(279.3, 481.0);
  ctx.bezierCurveTo(282.0, 482.2, 279.3, 486.2, 279.3, 488.0);
  ctx.bezierCurveTo(276.3, 486.5, 280.1, 483.6, 279.3, 481.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 490.0);
  ctx.bezierCurveTo(374.7, 488.1, 375.6, 490.6, 375.3, 492.0);
  ctx.bezierCurveTo(374.9, 493.9, 374.0, 491.4, 374.3, 490.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(282.3, 491.0);
  ctx.bezierCurveTo(283.2, 490.4, 284.1, 489.8, 284.3, 491.0);
  ctx.bezierCurveTo(295.1, 489.5, 282.0, 495.4, 282.3, 491.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(286.3, 494.0);
  ctx.bezierCurveTo(286.2, 496.2, 283.8, 496.1, 281.3, 496.0);
  ctx.bezierCurveTo(281.5, 493.8, 283.8, 493.9, 286.3, 494.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(305.3, 506.0);
  ctx.bezierCurveTo(301.4, 505.8, 300.1, 508.1, 297.3, 509.0);
  ctx.bezierCurveTo(292.6, 507.4, 289.7, 503.9, 284.3, 503.0);
  ctx.bezierCurveTo(288.4, 490.9, 302.7, 496.1, 305.3, 506.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(433.3, 516.0);
  ctx.bezierCurveTo(432.3, 516.0, 432.5, 514.8, 432.3, 514.0);
  ctx.bezierCurveTo(427.2, 517.1, 430.3, 522.1, 428.3, 528.0);
  ctx.bezierCurveTo(426.8, 527.5, 425.8, 526.5, 424.3, 526.0);
  ctx.bezierCurveTo(423.8, 522.9, 427.4, 523.7, 426.3, 520.0);
  ctx.bezierCurveTo(424.4, 520.4, 425.5, 523.9, 422.3, 523.0);
  ctx.bezierCurveTo(425.4, 514.6, 433.3, 506.1, 441.3, 506.0);
  ctx.bezierCurveTo(440.2, 510.9, 435.2, 511.9, 433.3, 516.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(295.3, 518.0);
  ctx.bezierCurveTo(287.0, 527.8, 285.7, 552.0, 278.3, 566.0);
  ctx.bezierCurveTo(268.5, 558.8, 278.9, 541.2, 277.3, 527.0);
  ctx.bezierCurveTo(279.9, 535.4, 281.9, 513.0, 281.3, 506.0);
  ctx.bezierCurveTo(290.9, 505.1, 292.3, 512.4, 295.3, 518.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(355.3, 514.0);
  ctx.bezierCurveTo(356.2, 513.8, 356.3, 514.4, 356.3, 515.0);
  ctx.bezierCurveTo(354.8, 525.4, 351.2, 540.8, 347.3, 552.0);
  ctx.bezierCurveTo(343.6, 562.8, 339.8, 576.5, 328.3, 578.0);
  ctx.bezierCurveTo(329.1, 556.5, 340.6, 537.8, 343.3, 515.0);
  ctx.bezierCurveTo(347.0, 514.4, 353.3, 516.3, 355.3, 514.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(316.3, 564.0);
  ctx.bezierCurveTo(300.4, 562.4, 313.3, 532.3, 316.3, 522.0);
  ctx.bezierCurveTo(318.1, 528.4, 309.6, 542.7, 310.3, 552.0);
  ctx.bezierCurveTo(310.7, 557.5, 313.7, 559.8, 316.3, 564.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(421.3, 524.0);
  ctx.bezierCurveTo(422.0, 524.0, 422.7, 524.0, 423.3, 524.0);
  ctx.bezierCurveTo(423.3, 524.7, 423.3, 525.3, 423.3, 526.0);
  ctx.bezierCurveTo(422.7, 526.0, 422.0, 526.0, 421.3, 526.0);
  ctx.bezierCurveTo(421.3, 525.3, 421.3, 524.7, 421.3, 524.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(453.3, 551.0);
  ctx.bezierCurveTo(453.7, 549.1, 454.6, 551.6, 454.3, 553.0);
  ctx.bezierCurveTo(453.9, 554.9, 453.0, 552.4, 453.3, 551.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(477.3, 565.0);
  ctx.bezierCurveTo(481.7, 561.3, 481.1, 567.8, 477.3, 565.0);
  ctx.lineTo(477.3, 565.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(277.3, 578.0);
  ctx.bezierCurveTo(277.7, 576.1, 278.6, 578.6, 278.3, 580.0);
  ctx.bezierCurveTo(277.9, 581.9, 277.0, 579.4, 277.3, 578.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(281.3, 578.0);
  ctx.bezierCurveTo(284.4, 580.2, 280.4, 583.6, 281.3, 587.0);
  ctx.bezierCurveTo(278.8, 585.4, 280.9, 580.0, 281.3, 578.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(474.3, 582.0);
  ctx.bezierCurveTo(476.5, 582.1, 474.7, 586.2, 475.3, 588.0);
  ctx.bezierCurveTo(472.6, 588.0, 472.9, 583.3, 474.3, 582.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(334.3, 81.0);
  ctx.bezierCurveTo(343.9, 65.6, 383.1, 63.4, 396.3, 77.0);
  ctx.bezierCurveTo(397.0, 77.7, 396.9, 79.5, 396.3, 79.0);
  ctx.bezierCurveTo(397.4, 80.0, 398.6, 78.8, 399.3, 80.0);
  ctx.bezierCurveTo(407.2, 93.7, 405.7, 119.3, 405.3, 140.0);
  ctx.bezierCurveTo(400.2, 139.6, 399.0, 149.3, 403.3, 150.0);
  ctx.bezierCurveTo(400.8, 152.4, 402.4, 152.6, 402.3, 157.0);
  ctx.bezierCurveTo(406.0, 157.7, 406.2, 154.8, 409.3, 155.0);
  ctx.bezierCurveTo(409.0, 153.6, 406.8, 154.2, 405.3, 154.0);
  ctx.bezierCurveTo(408.5, 154.5, 415.3, 150.2, 420.3, 150.0);
  ctx.bezierCurveTo(424.9, 149.8, 430.2, 153.1, 435.3, 154.0);
  ctx.bezierCurveTo(441.9, 155.1, 448.2, 153.0, 452.3, 157.0);
  ctx.bezierCurveTo(450.2, 158.4, 445.0, 154.3, 440.3, 155.0);
  ctx.bezierCurveTo(444.8, 156.6, 454.7, 164.8, 456.3, 161.0);
  ctx.bezierCurveTo(460.9, 160.5, 469.5, 164.5, 476.3, 165.0);
  ctx.bezierCurveTo(478.6, 150.2, 475.3, 138.2, 466.3, 131.0);
  ctx.bezierCurveTo(465.8, 122.5, 469.3, 118.0, 476.3, 117.0);
  ctx.bezierCurveTo(473.8, 120.5, 470.8, 123.5, 469.3, 128.0);
  ctx.bezierCurveTo(469.5, 130.8, 474.1, 131.2, 471.3, 134.0);
  ctx.bezierCurveTo(477.2, 133.2, 480.2, 129.5, 482.3, 125.0);
  ctx.bezierCurveTo(482.7, 119.9, 478.3, 119.7, 477.3, 116.0);
  ctx.bezierCurveTo(484.6, 117.4, 484.0, 126.6, 489.3, 130.0);
  ctx.bezierCurveTo(496.8, 125.5, 501.3, 118.0, 506.3, 111.0);
  ctx.bezierCurveTo(503.7, 95.9, 508.2, 79.7, 516.3, 72.0);
  ctx.bezierCurveTo(518.3, 72.0, 520.3, 72.0, 522.3, 72.0);
  ctx.bezierCurveTo(528.4, 83.6, 518.4, 95.3, 523.3, 107.0);
  ctx.bezierCurveTo(529.0, 106.0, 530.3, 100.7, 535.3, 99.0);
  ctx.bezierCurveTo(535.3, 96.7, 535.3, 94.3, 535.3, 92.0);
  ctx.bezierCurveTo(541.6, 88.0, 546.6, 82.6, 554.3, 80.0);
  ctx.bezierCurveTo(565.1, 88.3, 545.9, 101.7, 544.3, 108.0);
  ctx.bezierCurveTo(543.9, 109.7, 545.1, 109.9, 546.3, 110.0);
  ctx.bezierCurveTo(546.0, 112.1, 542.6, 110.9, 542.3, 113.0);
  ctx.bezierCurveTo(542.9, 115.0, 547.4, 113.3, 546.3, 117.0);
  ctx.bezierCurveTo(552.5, 114.7, 559.2, 105.1, 567.3, 107.0);
  ctx.bezierCurveTo(568.9, 107.4, 569.4, 111.1, 572.3, 110.0);
  ctx.bezierCurveTo(570.5, 125.9, 546.8, 127.1, 550.3, 142.0);
  ctx.bezierCurveTo(557.0, 143.7, 557.8, 139.5, 562.3, 139.0);
  ctx.bezierCurveTo(562.2, 140.9, 559.0, 139.7, 559.3, 142.0);
  ctx.bezierCurveTo(565.1, 139.2, 576.9, 136.3, 577.3, 146.0);
  ctx.bezierCurveTo(575.6, 144.7, 575.3, 142.0, 573.3, 141.0);
  ctx.bezierCurveTo(565.1, 139.4, 556.5, 150.0, 569.3, 150.0);
  ctx.bezierCurveTo(571.9, 149.2, 572.8, 146.8, 572.3, 143.0);
  ctx.bezierCurveTo(578.3, 144.5, 573.4, 150.9, 571.3, 153.0);
  ctx.bezierCurveTo(566.4, 152.4, 558.2, 155.4, 551.3, 156.0);
  ctx.bezierCurveTo(548.2, 157.6, 548.4, 166.5, 544.3, 164.0);
  ctx.bezierCurveTo(544.8, 164.8, 545.4, 165.6, 545.3, 167.0);
  ctx.bezierCurveTo(538.9, 176.9, 528.3, 181.6, 519.3, 189.0);
  ctx.bezierCurveTo(518.5, 189.6, 518.2, 190.5, 518.3, 192.0);
  ctx.bezierCurveTo(516.0, 191.7, 514.5, 192.2, 513.3, 193.0);
  ctx.bezierCurveTo(514.0, 194.0, 515.6, 194.0, 515.3, 196.0);
  ctx.bezierCurveTo(513.9, 197.6, 512.5, 199.2, 511.3, 201.0);
  ctx.bezierCurveTo(508.9, 222.6, 497.3, 234.9, 489.3, 251.0);
  ctx.bezierCurveTo(483.5, 249.5, 480.3, 257.5, 474.3, 259.0);
  ctx.bezierCurveTo(471.3, 265.4, 459.7, 263.0, 458.3, 271.0);
  ctx.bezierCurveTo(459.5, 270.8, 459.2, 269.2, 459.3, 268.0);
  ctx.bezierCurveTo(459.9, 280.0, 453.2, 290.0, 451.3, 304.0);
  ctx.bezierCurveTo(448.9, 322.4, 438.3, 338.8, 437.3, 355.0);
  ctx.bezierCurveTo(435.0, 355.7, 436.6, 360.2, 432.3, 359.0);
  ctx.bezierCurveTo(431.6, 362.7, 434.0, 363.3, 433.3, 367.0);
  ctx.bezierCurveTo(447.2, 372.8, 446.0, 393.7, 452.3, 407.0);
  ctx.bezierCurveTo(450.6, 406.8, 450.0, 405.3, 450.3, 403.0);
  ctx.bezierCurveTo(446.5, 408.5, 453.7, 411.6, 452.3, 418.0);
  ctx.bezierCurveTo(456.0, 419.2, 457.5, 422.0, 460.3, 425.0);
  ctx.bezierCurveTo(459.9, 424.5, 458.8, 424.5, 458.3, 424.0);
  ctx.bezierCurveTo(461.4, 427.5, 463.2, 429.4, 466.3, 433.0);
  ctx.bezierCurveTo(467.1, 433.8, 469.8, 437.3, 470.3, 440.0);
  ctx.bezierCurveTo(471.4, 445.4, 468.6, 450.0, 469.3, 458.0);
  ctx.bezierCurveTo(469.8, 462.8, 475.2, 478.7, 478.3, 484.0);
  ctx.bezierCurveTo(480.9, 488.5, 485.9, 491.9, 489.3, 495.0);
  ctx.bezierCurveTo(489.0, 500.7, 492.3, 502.7, 492.3, 508.0);
  ctx.bezierCurveTo(491.3, 508.0, 491.5, 506.8, 491.3, 506.0);
  ctx.bezierCurveTo(493.3, 517.1, 503.0, 535.5, 502.3, 544.0);
  ctx.bezierCurveTo(503.3, 544.0, 503.1, 542.8, 503.3, 542.0);
  ctx.bezierCurveTo(502.3, 547.4, 507.7, 556.9, 503.3, 560.0);
  ctx.bezierCurveTo(505.9, 566.1, 508.1, 572.6, 510.3, 579.0);
  ctx.bezierCurveTo(509.1, 568.9, 506.2, 556.4, 504.3, 545.0);
  ctx.bezierCurveTo(510.2, 558.8, 512.6, 576.0, 516.3, 592.0);
  ctx.bezierCurveTo(514.7, 592.0, 513.0, 592.0, 511.3, 592.0);
  ctx.bezierCurveTo(507.3, 576.0, 502.4, 563.5, 497.3, 547.0);
  ctx.bezierCurveTo(497.8, 560.5, 503.2, 577.8, 506.3, 592.0);
  ctx.bezierCurveTo(499.1, 591.5, 499.0, 582.6, 496.3, 578.0);
  ctx.bezierCurveTo(493.0, 572.4, 488.7, 569.7, 485.3, 565.0);
  ctx.bezierCurveTo(488.6, 566.4, 491.1, 568.6, 493.3, 571.0);
  ctx.bezierCurveTo(494.4, 569.8, 492.1, 563.6, 490.3, 562.0);
  ctx.bezierCurveTo(487.8, 545.3, 480.7, 525.3, 473.3, 518.0);
  ctx.bezierCurveTo(471.7, 514.3, 470.3, 510.3, 468.3, 507.0);
  ctx.bezierCurveTo(464.4, 506.7, 461.0, 509.8, 460.3, 505.0);
  ctx.bezierCurveTo(464.5, 505.2, 472.4, 505.6, 470.3, 509.0);
  ctx.bezierCurveTo(471.1, 508.5, 471.9, 508.0, 473.3, 508.0);
  ctx.bezierCurveTo(474.1, 500.9, 460.7, 500.0, 458.3, 505.0);
  ctx.bezierCurveTo(457.1, 504.6, 456.3, 503.7, 456.3, 502.0);
  ctx.bezierCurveTo(455.1, 502.2, 455.5, 503.8, 455.3, 505.0);
  ctx.bezierCurveTo(451.0, 503.0, 450.3, 497.3, 448.3, 493.0);
  ctx.bezierCurveTo(451.0, 493.3, 450.1, 497.2, 452.3, 498.0);
  ctx.bezierCurveTo(452.1, 493.2, 447.0, 484.7, 444.3, 479.0);
  ctx.bezierCurveTo(440.0, 480.1, 443.5, 483.3, 439.3, 480.0);
  ctx.bezierCurveTo(439.2, 481.8, 440.5, 482.1, 440.3, 484.0);
  ctx.bezierCurveTo(439.4, 483.3, 438.8, 482.2, 438.3, 481.0);
  ctx.bezierCurveTo(435.6, 482.6, 433.1, 484.4, 431.3, 487.0);
  ctx.bezierCurveTo(431.4, 492.3, 436.7, 492.3, 437.3, 497.0);
  ctx.bezierCurveTo(433.5, 495.7, 432.8, 494.2, 429.3, 491.0);
  ctx.bezierCurveTo(421.3, 498.3, 416.0, 508.3, 409.3, 517.0);
  ctx.bezierCurveTo(414.7, 526.4, 422.7, 533.5, 427.3, 542.0);
  ctx.bezierCurveTo(428.9, 544.9, 428.0, 544.8, 428.3, 545.0);
  ctx.bezierCurveTo(431.1, 547.5, 433.3, 553.3, 436.3, 558.0);
  ctx.bezierCurveTo(439.5, 563.0, 444.6, 567.7, 444.3, 571.0);
  ctx.bezierCurveTo(445.2, 572.1, 446.6, 570.9, 448.3, 573.0);
  ctx.bezierCurveTo(444.5, 577.0, 444.7, 587.5, 444.3, 592.0);
  ctx.bezierCurveTo(438.2, 590.1, 445.2, 579.3, 444.3, 573.0);
  ctx.bezierCurveTo(441.7, 572.7, 445.3, 578.6, 441.3, 577.0);
  ctx.bezierCurveTo(440.5, 573.2, 442.5, 572.2, 442.3, 569.0);
  ctx.bezierCurveTo(431.0, 552.6, 419.3, 536.7, 409.3, 519.0);
  ctx.bezierCurveTo(405.5, 523.2, 400.6, 530.0, 404.3, 536.0);
  ctx.bezierCurveTo(403.5, 535.8, 403.3, 535.0, 402.3, 535.0);
  ctx.bezierCurveTo(414.0, 544.5, 423.5, 564.3, 433.3, 579.0);
  ctx.bezierCurveTo(433.0, 580.4, 431.6, 579.1, 431.3, 578.0);
  ctx.bezierCurveTo(429.8, 581.2, 436.2, 585.1, 435.3, 591.0);
  ctx.bezierCurveTo(433.3, 592.1, 432.0, 592.4, 430.3, 592.0);
  ctx.bezierCurveTo(425.2, 590.8, 418.0, 578.3, 413.3, 572.0);
  ctx.bezierCurveTo(405.0, 560.7, 401.0, 552.9, 392.3, 546.0);
  ctx.bezierCurveTo(387.5, 535.5, 383.2, 524.5, 377.3, 515.0);
  ctx.bezierCurveTo(378.1, 509.2, 375.1, 507.2, 372.3, 505.0);
  ctx.bezierCurveTo(362.3, 534.9, 354.7, 567.4, 339.3, 592.0);
  ctx.bezierCurveTo(338.3, 592.0, 337.3, 592.0, 336.3, 592.0);
  ctx.bezierCurveTo(334.4, 590.1, 336.2, 586.8, 338.3, 586.0);
  ctx.bezierCurveTo(340.3, 575.3, 349.1, 568.5, 352.3, 558.0);
  ctx.bezierCurveTo(356.7, 543.8, 361.6, 529.4, 366.3, 513.0);
  ctx.bezierCurveTo(365.8, 510.9, 363.3, 514.5, 365.3, 511.0);
  ctx.bezierCurveTo(364.7, 508.0, 363.2, 512.0, 361.3, 511.0);
  ctx.bezierCurveTo(360.0, 516.9, 351.6, 540.3, 348.3, 552.0);
  ctx.bezierCurveTo(344.7, 564.8, 343.0, 578.3, 334.3, 579.0);
  ctx.bezierCurveTo(332.7, 584.0, 334.4, 592.4, 327.3, 592.0);
  ctx.bezierCurveTo(327.1, 586.2, 330.9, 584.3, 332.3, 580.0);
  ctx.bezierCurveTo(332.2, 577.8, 329.8, 581.3, 327.3, 580.0);
  ctx.bezierCurveTo(325.8, 578.5, 325.5, 575.8, 323.3, 575.0);
  ctx.bezierCurveTo(331.4, 557.4, 337.6, 537.9, 341.3, 516.0);
  ctx.bezierCurveTo(335.1, 513.7, 321.0, 512.1, 316.3, 505.0);
  ctx.bezierCurveTo(313.8, 506.8, 314.1, 511.4, 312.3, 514.0);
  ctx.bezierCurveTo(312.2, 517.4, 315.3, 517.7, 317.3, 519.0);
  ctx.bezierCurveTo(319.5, 517.6, 318.7, 513.0, 320.3, 511.0);
  ctx.bezierCurveTo(322.7, 514.2, 320.0, 519.9, 320.3, 522.0);
  ctx.bezierCurveTo(317.7, 523.7, 314.8, 518.7, 311.3, 518.0);
  ctx.bezierCurveTo(304.7, 538.7, 299.6, 560.9, 296.3, 585.0);
  ctx.bezierCurveTo(292.0, 582.5, 291.6, 587.7, 291.3, 592.0);
  ctx.bezierCurveTo(286.0, 592.0, 280.7, 592.0, 275.3, 592.0);
  ctx.bezierCurveTo(273.8, 590.8, 273.8, 588.2, 272.3, 587.0);
  ctx.bezierCurveTo(269.5, 586.8, 273.5, 593.5, 269.3, 592.0);
  ctx.bezierCurveTo(263.9, 592.6, 268.4, 589.3, 268.3, 589.0);
  ctx.bezierCurveTo(267.2, 583.8, 263.0, 580.1, 262.3, 575.0);
  ctx.bezierCurveTo(261.5, 568.9, 264.9, 561.9, 263.3, 554.0);
  ctx.bezierCurveTo(269.3, 562.7, 264.1, 577.0, 274.3, 582.0);
  ctx.bezierCurveTo(274.1, 580.1, 275.4, 574.8, 276.3, 569.0);
  ctx.bezierCurveTo(274.5, 565.4, 270.9, 563.7, 269.3, 560.0);
  ctx.bezierCurveTo(274.5, 544.2, 272.9, 521.6, 276.3, 504.0);
  ctx.bezierCurveTo(272.3, 505.6, 275.7, 501.7, 270.3, 500.0);
  ctx.bezierCurveTo(265.7, 514.2, 269.1, 542.0, 265.3, 554.0);
  ctx.bezierCurveTo(265.5, 533.6, 262.1, 507.0, 270.3, 492.0);
  ctx.bezierCurveTo(271.2, 491.2, 272.6, 490.9, 274.3, 491.0);
  ctx.bezierCurveTo(277.1, 479.7, 284.2, 472.9, 283.3, 458.0);
  ctx.bezierCurveTo(287.3, 459.0, 286.3, 455.0, 290.3, 456.0);
  ctx.bezierCurveTo(289.7, 449.2, 293.6, 445.1, 290.3, 441.0);
  ctx.bezierCurveTo(291.5, 441.8, 293.0, 442.3, 295.3, 442.0);
  ctx.bezierCurveTo(295.3, 436.3, 295.3, 430.7, 295.3, 425.0);
  ctx.bezierCurveTo(302.5, 417.9, 298.1, 399.2, 307.3, 394.0);
  ctx.bezierCurveTo(307.9, 388.8, 307.0, 385.0, 305.3, 382.0);
  ctx.bezierCurveTo(307.4, 374.0, 314.9, 364.5, 310.3, 356.0);
  ctx.bezierCurveTo(314.3, 345.6, 304.5, 336.7, 308.3, 330.0);
  ctx.bezierCurveTo(305.3, 324.3, 304.6, 316.4, 302.3, 310.0);
  ctx.bezierCurveTo(295.4, 311.7, 293.4, 318.4, 292.3, 326.0);
  ctx.bezierCurveTo(283.1, 332.1, 273.0, 337.4, 263.3, 343.0);
  ctx.bezierCurveTo(264.1, 335.7, 277.3, 335.1, 283.3, 329.0);
  ctx.bezierCurveTo(285.1, 327.2, 284.4, 323.7, 287.3, 323.0);
  ctx.bezierCurveTo(283.8, 321.9, 284.3, 327.0, 281.3, 328.0);
  ctx.bezierCurveTo(280.1, 328.4, 283.9, 322.2, 286.3, 321.0);
  ctx.bezierCurveTo(286.8, 320.8, 287.7, 322.5, 288.3, 322.0);
  ctx.bezierCurveTo(291.0, 319.8, 293.1, 317.4, 293.3, 315.0);
  ctx.bezierCurveTo(286.2, 317.5, 284.6, 322.6, 280.3, 326.0);
  ctx.bezierCurveTo(281.9, 324.8, 275.7, 325.1, 277.3, 328.0);
  ctx.bezierCurveTo(275.9, 327.6, 277.4, 327.1, 277.3, 326.0);
  ctx.bezierCurveTo(273.8, 327.2, 275.1, 333.1, 270.3, 333.0);
  ctx.bezierCurveTo(272.1, 330.8, 274.5, 329.2, 275.3, 326.0);
  ctx.bezierCurveTo(265.5, 328.4, 262.0, 335.9, 256.3, 340.0);
  ctx.bezierCurveTo(256.4, 335.7, 254.6, 338.7, 251.3, 341.0);
  ctx.bezierCurveTo(250.0, 341.0, 258.4, 334.3, 260.3, 331.0);
  ctx.bezierCurveTo(253.8, 333.8, 251.3, 340.6, 246.3, 345.0);
  ctx.bezierCurveTo(250.5, 343.2, 256.0, 342.6, 261.3, 342.0);
  ctx.bezierCurveTo(248.0, 344.3, 240.3, 352.3, 231.3, 359.0);
  ctx.bezierCurveTo(232.7, 353.7, 238.5, 352.8, 242.3, 350.0);
  ctx.bezierCurveTo(228.8, 350.8, 223.6, 368.6, 212.3, 375.0);
  ctx.bezierCurveTo(215.3, 378.1, 209.6, 378.2, 210.3, 382.0);
  ctx.bezierCurveTo(210.9, 379.8, 203.7, 378.0, 208.3, 378.0);
  ctx.bezierCurveTo(208.0, 376.6, 205.8, 377.2, 204.3, 377.0);
  ctx.bezierCurveTo(202.1, 376.8, 203.9, 380.5, 203.3, 382.0);
  ctx.bezierCurveTo(203.5, 384.2, 205.8, 380.7, 208.3, 382.0);
  ctx.bezierCurveTo(206.8, 383.2, 205.6, 386.4, 203.3, 384.0);
  ctx.bezierCurveTo(203.5, 386.5, 203.5, 388.8, 202.3, 390.0);
  ctx.bezierCurveTo(204.7, 389.4, 206.9, 388.6, 210.3, 389.0);
  ctx.bezierCurveTo(210.7, 386.6, 208.5, 386.8, 209.3, 384.0);
  ctx.bezierCurveTo(211.9, 385.1, 211.3, 389.4, 211.3, 393.0);
  ctx.bezierCurveTo(208.5, 393.2, 209.0, 390.0, 206.3, 390.0);
  ctx.bezierCurveTo(202.3, 390.7, 201.9, 395.0, 202.3, 400.0);
  ctx.bezierCurveTo(207.4, 401.1, 207.4, 397.1, 209.3, 395.0);
  ctx.bezierCurveTo(210.6, 397.0, 206.8, 402.4, 201.3, 401.0);
  ctx.bezierCurveTo(200.4, 397.1, 201.9, 387.9, 201.3, 381.0);
  ctx.bezierCurveTo(189.9, 381.9, 195.7, 400.0, 182.3, 399.0);
  ctx.bezierCurveTo(175.4, 389.6, 193.4, 374.9, 178.3, 371.0);
  ctx.bezierCurveTo(173.9, 375.7, 163.9, 379.8, 167.3, 389.0);
  ctx.bezierCurveTo(172.0, 389.1, 173.0, 385.3, 175.3, 383.0);
  ctx.bezierCurveTo(175.5, 380.8, 174.5, 379.8, 172.3, 380.0);
  ctx.bezierCurveTo(173.3, 377.7, 177.3, 377.5, 177.3, 381.0);
  ctx.bezierCurveTo(182.3, 380.3, 176.6, 374.1, 178.3, 374.0);
  ctx.bezierCurveTo(185.4, 379.7, 174.1, 389.6, 167.3, 391.0);
  ctx.bezierCurveTo(166.9, 389.8, 166.0, 388.9, 164.3, 389.0);
  ctx.bezierCurveTo(161.9, 375.2, 176.2, 378.2, 174.3, 365.0);
  ctx.bezierCurveTo(169.6, 365.9, 167.6, 369.6, 162.3, 370.0);
  ctx.bezierCurveTo(160.9, 368.4, 158.8, 367.5, 159.3, 364.0);
  ctx.bezierCurveTo(162.9, 363.0, 160.2, 368.5, 163.3, 368.0);
  ctx.bezierCurveTo(166.2, 368.3, 166.4, 365.7, 169.3, 366.0);
  ctx.bezierCurveTo(169.3, 364.0, 169.3, 362.0, 169.3, 360.0);
  ctx.bezierCurveTo(172.5, 359.5, 169.7, 365.0, 173.3, 364.0);
  ctx.bezierCurveTo(174.4, 361.8, 173.1, 363.1, 176.3, 362.0);
  ctx.bezierCurveTo(176.0, 359.7, 175.1, 357.9, 174.3, 356.0);
  ctx.bezierCurveTo(165.8, 360.5, 154.8, 362.5, 152.3, 373.0);
  ctx.bezierCurveTo(154.2, 374.6, 158.1, 372.1, 159.3, 370.0);
  ctx.bezierCurveTo(162.4, 373.1, 153.7, 377.2, 150.3, 374.0);
  ctx.bezierCurveTo(149.3, 362.8, 164.0, 359.2, 173.3, 355.0);
  ctx.bezierCurveTo(173.2, 348.8, 179.2, 345.9, 179.3, 343.0);
  ctx.bezierCurveTo(177.3, 341.0, 173.1, 341.3, 172.3, 338.0);
  ctx.bezierCurveTo(173.3, 334.3, 174.6, 331.0, 179.3, 331.0);
  ctx.bezierCurveTo(178.6, 334.3, 174.7, 334.4, 174.3, 338.0);
  ctx.bezierCurveTo(177.9, 341.8, 184.9, 337.4, 182.3, 332.0);
  ctx.bezierCurveTo(187.6, 331.2, 192.2, 333.4, 184.3, 333.0);
  ctx.bezierCurveTo(184.8, 336.4, 183.9, 338.6, 183.3, 341.0);
  ctx.bezierCurveTo(183.1, 343.2, 186.9, 341.5, 188.3, 342.0);
  ctx.bezierCurveTo(187.7, 343.0, 186.0, 343.0, 186.3, 345.0);
  ctx.bezierCurveTo(189.1, 346.5, 194.1, 343.2, 193.3, 338.0);
  ctx.bezierCurveTo(191.7, 335.4, 190.6, 341.9, 187.3, 341.0);
  ctx.bezierCurveTo(189.0, 339.1, 191.4, 337.8, 190.3, 333.0);
  ctx.bezierCurveTo(191.6, 336.5, 192.9, 335.2, 195.3, 336.0);
  ctx.bezierCurveTo(196.7, 344.1, 188.1, 349.3, 183.3, 345.0);
  ctx.bezierCurveTo(175.8, 348.2, 179.4, 354.9, 178.3, 361.0);
  ctx.bezierCurveTo(182.6, 366.4, 186.8, 371.9, 196.3, 372.0);
  ctx.bezierCurveTo(196.9, 374.1, 198.8, 374.9, 198.3, 378.0);
  ctx.bezierCurveTo(202.2, 378.9, 201.9, 375.6, 204.3, 375.0);
  ctx.bezierCurveTo(204.9, 371.8, 203.6, 370.3, 203.3, 368.0);
  ctx.bezierCurveTo(206.6, 368.1, 205.5, 372.5, 206.3, 375.0);
  ctx.bezierCurveTo(217.7, 372.4, 221.3, 361.9, 227.3, 354.0);
  ctx.bezierCurveTo(226.8, 350.5, 224.6, 348.7, 224.3, 345.0);
  ctx.bezierCurveTo(221.9, 345.6, 219.8, 346.4, 216.3, 346.0);
  ctx.bezierCurveTo(215.7, 340.9, 215.9, 335.1, 211.3, 334.0);
  ctx.bezierCurveTo(216.6, 331.1, 219.3, 339.3, 223.3, 341.0);
  ctx.bezierCurveTo(224.3, 339.3, 219.0, 335.3, 217.3, 333.0);
  ctx.bezierCurveTo(220.9, 332.1, 223.6, 340.7, 227.3, 343.0);
  ctx.bezierCurveTo(228.4, 337.2, 222.8, 336.5, 218.3, 328.0);
  ctx.bezierCurveTo(223.3, 326.1, 224.0, 333.6, 227.3, 330.0);
  ctx.bezierCurveTo(225.4, 334.1, 236.7, 342.5, 233.3, 351.0);
  ctx.bezierCurveTo(242.1, 349.4, 245.3, 342.3, 249.3, 336.0);
  ctx.bezierCurveTo(242.4, 340.0, 243.8, 340.7, 237.3, 343.0);
  ctx.bezierCurveTo(236.6, 346.1, 240.8, 344.2, 239.3, 348.0);
  ctx.bezierCurveTo(237.1, 346.9, 235.7, 345.0, 235.3, 342.0);
  ctx.bezierCurveTo(247.7, 336.9, 253.0, 329.8, 266.3, 327.0);
  ctx.bezierCurveTo(263.1, 330.5, 258.9, 332.9, 256.3, 337.0);
  ctx.bezierCurveTo(264.9, 333.8, 266.7, 326.5, 273.3, 323.0);
  ctx.bezierCurveTo(272.4, 323.5, 274.9, 324.9, 278.3, 323.0);
  ctx.bezierCurveTo(283.5, 320.1, 290.4, 315.2, 294.3, 311.0);
  ctx.bezierCurveTo(291.8, 309.1, 293.9, 308.9, 291.3, 307.0);
  ctx.bezierCurveTo(291.8, 311.1, 287.0, 308.5, 289.3, 308.0);
  ctx.bezierCurveTo(284.1, 309.0, 281.8, 315.9, 275.3, 319.0);
  ctx.bezierCurveTo(273.6, 319.9, 271.5, 322.3, 273.3, 319.0);
  ctx.bezierCurveTo(279.1, 315.5, 284.4, 311.4, 288.3, 306.0);
  ctx.bezierCurveTo(287.9, 304.5, 287.0, 306.4, 285.3, 306.0);
  ctx.bezierCurveTo(287.9, 303.5, 285.1, 301.1, 283.3, 300.0);
  ctx.bezierCurveTo(283.4, 295.3, 285.6, 301.2, 287.3, 301.0);
  ctx.bezierCurveTo(286.4, 293.9, 279.1, 293.2, 277.3, 287.0);
  ctx.bezierCurveTo(265.7, 286.8, 253.8, 292.1, 253.3, 297.0);
  ctx.bezierCurveTo(251.2, 296.6, 249.5, 299.8, 246.3, 301.0);
  ctx.bezierCurveTo(247.1, 301.9, 248.1, 302.5, 249.3, 303.0);
  ctx.bezierCurveTo(244.8, 302.5, 240.6, 308.2, 233.3, 312.0);
  ctx.bezierCurveTo(235.7, 314.3, 239.1, 309.1, 243.3, 310.0);
  ctx.bezierCurveTo(242.5, 307.1, 240.1, 310.6, 238.3, 310.0);
  ctx.bezierCurveTo(238.6, 307.7, 242.7, 309.0, 243.3, 307.0);
  ctx.bezierCurveTo(245.4, 308.6, 242.8, 312.7, 238.3, 313.0);
  ctx.bezierCurveTo(233.8, 319.0, 225.4, 319.6, 222.3, 322.0);
  ctx.bezierCurveTo(221.2, 322.9, 222.3, 324.4, 221.3, 325.0);
  ctx.bezierCurveTo(220.8, 325.3, 220.1, 323.6, 219.3, 324.0);
  ctx.bezierCurveTo(216.9, 325.4, 213.8, 331.7, 209.3, 330.0);
  ctx.bezierCurveTo(209.0, 327.4, 210.7, 326.7, 213.3, 327.0);
  ctx.bezierCurveTo(217.4, 319.7, 227.0, 318.0, 230.3, 310.0);
  ctx.bezierCurveTo(240.1, 305.2, 245.6, 296.0, 255.3, 291.0);
  ctx.bezierCurveTo(256.4, 290.3, 260.5, 287.7, 258.3, 287.0);
  ctx.bezierCurveTo(261.7, 285.4, 266.3, 285.0, 271.3, 285.0);
  ctx.bezierCurveTo(277.7, 281.5, 273.9, 274.4, 274.3, 268.0);
  ctx.bezierCurveTo(274.9, 259.5, 279.5, 251.1, 281.3, 244.0);
  ctx.bezierCurveTo(281.9, 241.8, 279.4, 239.2, 282.3, 238.0);
  ctx.bezierCurveTo(281.2, 235.5, 277.9, 235.1, 274.3, 235.0);
  ctx.bezierCurveTo(271.1, 227.1, 275.9, 222.6, 273.3, 214.0);
  ctx.bezierCurveTo(275.9, 215.1, 276.2, 218.4, 276.3, 222.0);
  ctx.bezierCurveTo(279.8, 225.2, 285.1, 226.6, 289.3, 229.0);
  ctx.bezierCurveTo(288.1, 233.1, 286.4, 236.7, 284.3, 240.0);
  ctx.bezierCurveTo(285.0, 241.3, 286.5, 241.9, 288.3, 242.0);
  ctx.bezierCurveTo(289.5, 235.6, 293.3, 231.6, 293.3, 226.0);
  ctx.bezierCurveTo(293.3, 216.4, 282.5, 209.0, 288.3, 201.0);
  ctx.bezierCurveTo(291.5, 200.8, 292.5, 202.8, 296.3, 202.0);
  ctx.bezierCurveTo(299.2, 203.7, 291.2, 202.8, 289.3, 203.0);
  ctx.bezierCurveTo(285.6, 207.5, 294.4, 213.1, 292.3, 210.0);
  ctx.bezierCurveTo(293.8, 212.3, 294.4, 213.3, 294.3, 217.0);
  ctx.bezierCurveTo(294.7, 214.2, 299.6, 215.9, 300.3, 211.0);
  ctx.bezierCurveTo(301.0, 206.4, 298.8, 201.2, 295.3, 198.0);
  ctx.bezierCurveTo(296.4, 192.1, 298.6, 187.3, 300.3, 182.0);
  ctx.bezierCurveTo(293.5, 184.5, 286.8, 187.1, 280.3, 190.0);
  ctx.bezierCurveTo(279.7, 192.5, 274.6, 201.6, 275.3, 209.0);
  ctx.bezierCurveTo(275.6, 212.1, 276.4, 214.2, 279.3, 216.0);
  ctx.bezierCurveTo(283.0, 218.3, 282.2, 217.7, 282.3, 211.0);
  ctx.bezierCurveTo(284.1, 208.3, 283.0, 216.9, 283.3, 219.0);
  ctx.bezierCurveTo(284.7, 218.7, 284.1, 216.5, 284.3, 215.0);
  ctx.bezierCurveTo(285.2, 214.5, 286.0, 222.6, 288.3, 224.0);
  ctx.bezierCurveTo(280.3, 218.1, 270.0, 214.3, 271.3, 199.0);
  ctx.bezierCurveTo(273.6, 204.1, 273.6, 199.4, 272.3, 196.0);
  ctx.bezierCurveTo(273.3, 196.0, 273.1, 197.2, 273.3, 198.0);
  ctx.bezierCurveTo(275.2, 196.2, 277.0, 194.3, 276.3, 190.0);
  ctx.bezierCurveTo(279.0, 188.7, 281.1, 188.4, 279.3, 185.0);
  ctx.bezierCurveTo(287.6, 178.3, 308.0, 183.6, 315.3, 176.0);
  ctx.bezierCurveTo(315.7, 174.3, 311.6, 176.1, 311.3, 177.0);
  ctx.bezierCurveTo(313.1, 172.1, 330.2, 168.5, 333.3, 165.0);
  ctx.bezierCurveTo(337.5, 163.6, 332.0, 169.4, 328.3, 169.0);
  ctx.bezierCurveTo(328.6, 170.3, 330.3, 170.0, 330.3, 169.0);
  ctx.bezierCurveTo(332.6, 172.8, 333.9, 177.4, 334.3, 183.0);
  ctx.bezierCurveTo(336.2, 183.8, 340.3, 178.4, 343.3, 177.0);
  ctx.bezierCurveTo(334.2, 169.2, 336.0, 150.3, 330.3, 139.0);
  ctx.bezierCurveTo(330.3, 139.3, 332.3, 139.8, 332.3, 140.0);
  ctx.bezierCurveTo(329.8, 125.5, 328.6, 100.4, 331.3, 85.0);
  ctx.bezierCurveTo(334.9, 85.3, 335.0, 82.0, 338.3, 82.0);
  ctx.bezierCurveTo(338.2, 83.9, 335.0, 82.7, 335.3, 85.0);
  ctx.bezierCurveTo(336.6, 87.8, 337.4, 81.8, 340.3, 83.0);
  ctx.bezierCurveTo(333.1, 88.5, 328.8, 118.3, 332.3, 135.0);
  ctx.bezierCurveTo(332.9, 137.6, 334.0, 136.7, 335.3, 139.0);
  ctx.bezierCurveTo(340.5, 147.9, 342.6, 161.6, 346.3, 169.0);
  ctx.bezierCurveTo(351.6, 161.7, 374.8, 164.5, 379.3, 168.0);
  ctx.bezierCurveTo(382.5, 166.5, 381.9, 161.3, 383.3, 158.0);
  ctx.bezierCurveTo(380.4, 156.0, 377.8, 161.3, 376.3, 164.0);
  ctx.bezierCurveTo(375.2, 157.2, 387.0, 154.7, 387.3, 146.0);
  ctx.bezierCurveTo(388.3, 146.0, 388.1, 147.2, 388.3, 148.0);
  ctx.bezierCurveTo(397.6, 142.4, 399.3, 131.4, 392.3, 123.0);
  ctx.bezierCurveTo(392.3, 113.7, 397.0, 100.8, 394.3, 92.0);
  ctx.bezierCurveTo(392.1, 84.6, 385.1, 84.3, 379.3, 81.0);
  ctx.bezierCurveTo(374.7, 88.0, 371.6, 96.7, 369.3, 106.0);
  ctx.bezierCurveTo(365.6, 101.8, 355.4, 105.6, 351.3, 104.0);
  ctx.bezierCurveTo(354.6, 98.8, 348.3, 88.4, 347.3, 81.0);
  ctx.bezierCurveTo(343.4, 80.2, 342.1, 84.7, 339.3, 82.0);
  ctx.bezierCurveTo(341.0, 80.1, 344.5, 79.8, 348.3, 80.0);
  ctx.bezierCurveTo(348.2, 81.8, 349.5, 82.1, 349.3, 84.0);
  ctx.bezierCurveTo(354.9, 81.3, 359.7, 82.3, 365.3, 83.0);
  ctx.bezierCurveTo(370.5, 80.5, 371.3, 73.7, 376.3, 71.0);
  ctx.bezierCurveTo(376.8, 73.5, 371.1, 78.4, 369.3, 82.0);
  ctx.bezierCurveTo(369.5, 83.8, 372.7, 82.6, 373.3, 84.0);
  ctx.bezierCurveTo(378.4, 80.0, 386.0, 78.6, 392.3, 76.0);
  ctx.bezierCurveTo(376.5, 63.4, 347.4, 71.3, 334.3, 81.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(523.3, 113.0);
  ctx.bezierCurveTo(523.3, 110.0, 525.4, 109.1, 526.3, 107.0);
  ctx.bezierCurveTo(523.3, 106.4, 520.6, 111.2, 523.3, 113.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(522.3, 120.0);
  ctx.bezierCurveTo(525.1, 123.6, 528.9, 126.1, 535.3, 126.0);
  ctx.bezierCurveTo(533.3, 121.0, 539.2, 117.9, 540.3, 113.0);
  ctx.bezierCurveTo(537.0, 112.6, 531.5, 109.2, 534.3, 106.0);
  ctx.bezierCurveTo(534.6, 109.8, 538.4, 109.9, 541.3, 111.0);
  ctx.bezierCurveTo(543.2, 107.5, 545.2, 104.2, 547.3, 101.0);
  ctx.bezierCurveTo(542.3, 102.9, 539.9, 100.1, 535.3, 99.0);
  ctx.bezierCurveTo(532.0, 107.0, 525.1, 111.4, 522.3, 120.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(536.3, 133.0);
  ctx.bezierCurveTo(536.2, 124.5, 521.6, 130.4, 520.3, 123.0);
  ctx.bezierCurveTo(513.7, 122.7, 507.9, 121.4, 504.3, 118.0);
  ctx.bezierCurveTo(502.6, 121.0, 500.4, 123.4, 499.3, 127.0);
  ctx.bezierCurveTo(501.2, 128.0, 502.7, 124.0, 503.3, 127.0);
  ctx.bezierCurveTo(497.6, 126.5, 497.7, 130.3, 493.3, 133.0);
  ctx.bezierCurveTo(492.8, 135.9, 498.3, 137.9, 495.3, 140.0);
  ctx.bezierCurveTo(491.6, 138.4, 491.3, 133.4, 488.3, 131.0);
  ctx.bezierCurveTo(483.2, 132.7, 482.9, 140.7, 475.3, 137.0);
  ctx.bezierCurveTo(475.5, 141.1, 478.5, 142.5, 480.3, 145.0);
  ctx.bezierCurveTo(486.9, 145.6, 489.8, 142.5, 492.3, 139.0);
  ctx.bezierCurveTo(492.3, 140.4, 492.8, 141.2, 493.3, 142.0);
  ctx.bezierCurveTo(490.5, 146.2, 486.0, 148.7, 480.3, 150.0);
  ctx.bezierCurveTo(478.5, 159.4, 481.9, 162.8, 481.3, 173.0);
  ctx.bezierCurveTo(486.5, 180.8, 498.0, 182.4, 507.3, 186.0);
  ctx.bezierCurveTo(505.8, 186.2, 503.6, 185.6, 503.3, 187.0);
  ctx.bezierCurveTo(507.7, 186.7, 514.1, 192.0, 515.3, 186.0);
  ctx.bezierCurveTo(514.1, 185.8, 512.5, 186.2, 512.3, 185.0);
  ctx.bezierCurveTo(528.7, 181.7, 535.7, 169.1, 545.3, 159.0);
  ctx.bezierCurveTo(547.8, 160.3, 544.2, 162.7, 546.3, 163.0);
  ctx.bezierCurveTo(546.5, 161.4, 550.2, 158.3, 547.3, 157.0);
  ctx.bezierCurveTo(545.3, 156.6, 543.3, 158.8, 541.3, 161.0);
  ctx.bezierCurveTo(544.3, 157.0, 543.6, 152.9, 540.3, 152.0);
  ctx.bezierCurveTo(542.2, 148.9, 540.7, 142.4, 543.3, 140.0);
  ctx.bezierCurveTo(539.5, 135.9, 537.3, 134.2, 538.3, 131.0);
  ctx.bezierCurveTo(538.1, 132.1, 537.2, 132.6, 536.3, 133.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(566.3, 116.0);
  ctx.bezierCurveTo(565.6, 112.9, 569.1, 114.1, 568.3, 111.0);
  ctx.bezierCurveTo(567.5, 110.8, 567.2, 110.2, 567.3, 109.0);
  ctx.bezierCurveTo(560.7, 108.4, 558.1, 111.8, 554.3, 114.0);
  ctx.bezierCurveTo(554.0, 119.0, 554.1, 123.5, 557.3, 125.0);
  ctx.bezierCurveTo(552.9, 127.9, 552.9, 119.1, 551.3, 116.0);
  ctx.bezierCurveTo(546.7, 118.6, 546.1, 127.0, 547.3, 130.0);
  ctx.bezierCurveTo(544.2, 129.2, 543.3, 122.8, 545.3, 120.0);
  ctx.bezierCurveTo(540.4, 121.0, 539.0, 125.6, 535.3, 128.0);
  ctx.bezierCurveTo(542.0, 130.3, 540.1, 137.9, 546.3, 142.0);
  ctx.bezierCurveTo(549.1, 135.2, 540.5, 134.5, 542.3, 132.0);
  ctx.bezierCurveTo(544.4, 133.2, 545.2, 135.8, 548.3, 136.0);
  ctx.bezierCurveTo(554.5, 127.8, 562.2, 121.2, 566.3, 111.0);
  ctx.bezierCurveTo(567.6, 113.5, 563.4, 115.1, 566.3, 116.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(498.3, 197.0);
  ctx.bezierCurveTo(493.3, 195.4, 488.1, 193.9, 484.3, 191.0);
  ctx.bezierCurveTo(478.8, 185.3, 483.9, 174.9, 477.3, 171.0);
  ctx.bezierCurveTo(471.0, 176.2, 474.0, 191.1, 479.3, 196.0);
  ctx.bezierCurveTo(476.3, 197.0, 477.1, 201.8, 475.3, 204.0);
  ctx.bezierCurveTo(478.7, 204.6, 484.6, 202.7, 486.3, 205.0);
  ctx.bezierCurveTo(482.7, 205.0, 479.0, 205.0, 475.3, 205.0);
  ctx.bezierCurveTo(479.6, 210.4, 473.4, 208.3, 472.3, 213.0);
  ctx.bezierCurveTo(474.1, 213.6, 476.5, 210.1, 477.3, 213.0);
  ctx.bezierCurveTo(472.5, 212.9, 470.7, 215.7, 469.3, 219.0);
  ctx.bezierCurveTo(476.7, 217.7, 485.0, 217.4, 493.3, 217.0);
  ctx.bezierCurveTo(493.3, 218.0, 492.5, 218.2, 492.3, 219.0);
  ctx.bezierCurveTo(498.2, 214.2, 499.5, 204.9, 506.3, 201.0);
  ctx.bezierCurveTo(506.6, 202.8, 501.6, 204.1, 504.3, 205.0);
  ctx.bezierCurveTo(504.6, 203.5, 508.5, 200.7, 509.3, 203.0);
  ctx.bezierCurveTo(505.6, 203.7, 504.3, 207.3, 502.3, 207.0);
  ctx.bezierCurveTo(502.7, 212.1, 495.6, 218.3, 493.3, 224.0);
  ctx.bezierCurveTo(493.2, 222.4, 493.0, 222.1, 491.3, 222.0);
  ctx.bezierCurveTo(482.6, 221.3, 468.3, 224.6, 461.3, 227.0);
  ctx.bezierCurveTo(471.1, 226.7, 483.1, 223.4, 491.3, 225.0);
  ctx.bezierCurveTo(480.4, 227.0, 466.4, 226.1, 458.3, 231.0);
  ctx.bezierCurveTo(461.4, 229.7, 463.9, 234.0, 465.3, 231.0);
  ctx.bezierCurveTo(464.5, 230.8, 463.3, 231.0, 463.3, 230.0);
  ctx.bezierCurveTo(473.0, 230.4, 483.2, 225.9, 491.3, 228.0);
  ctx.bezierCurveTo(478.9, 229.6, 466.3, 231.0, 457.3, 236.0);
  ctx.bezierCurveTo(457.6, 233.3, 461.5, 234.2, 462.3, 232.0);
  ctx.bezierCurveTo(460.6, 231.4, 456.4, 233.2, 456.3, 231.0);
  ctx.bezierCurveTo(458.4, 228.8, 461.8, 229.0, 458.3, 226.0);
  ctx.bezierCurveTo(460.1, 225.1, 463.3, 225.7, 464.3, 224.0);
  ctx.bezierCurveTo(458.0, 222.3, 454.5, 225.1, 452.3, 230.0);
  ctx.bezierCurveTo(453.5, 232.5, 456.3, 233.3, 456.3, 237.0);
  ctx.bezierCurveTo(456.3, 240.4, 454.9, 242.3, 453.3, 244.0);
  ctx.bezierCurveTo(444.4, 244.9, 440.8, 235.2, 441.3, 230.0);
  ctx.bezierCurveTo(443.8, 235.2, 445.8, 240.9, 452.3, 242.0);
  ctx.bezierCurveTo(456.2, 234.3, 449.4, 230.8, 445.3, 228.0);
  ctx.bezierCurveTo(448.3, 229.5, 447.9, 222.8, 446.3, 223.0);
  ctx.bezierCurveTo(445.0, 227.6, 441.3, 223.8, 440.3, 229.0);
  ctx.bezierCurveTo(438.5, 223.1, 437.0, 217.0, 429.3, 217.0);
  ctx.bezierCurveTo(429.3, 216.0, 430.1, 215.8, 430.3, 215.0);
  ctx.bezierCurveTo(423.9, 214.2, 420.5, 216.5, 414.3, 216.0);
  ctx.bezierCurveTo(412.3, 221.0, 416.1, 220.9, 417.3, 225.0);
  ctx.bezierCurveTo(425.4, 225.2, 437.4, 226.9, 437.3, 232.0);
  ctx.bezierCurveTo(435.4, 229.5, 429.7, 227.8, 430.3, 231.0);
  ctx.bezierCurveTo(429.8, 227.2, 422.2, 225.7, 420.3, 229.0);
  ctx.bezierCurveTo(424.2, 230.2, 419.8, 236.0, 421.3, 241.0);
  ctx.bezierCurveTo(423.7, 245.9, 425.1, 247.7, 425.3, 250.0);
  ctx.bezierCurveTo(425.3, 249.5, 423.5, 247.7, 423.3, 248.0);
  ctx.bezierCurveTo(422.3, 250.2, 425.6, 255.5, 422.3, 259.0);
  ctx.bezierCurveTo(421.6, 253.3, 424.0, 244.6, 420.3, 242.0);
  ctx.bezierCurveTo(419.5, 255.4, 421.0, 261.7, 426.3, 272.0);
  ctx.bezierCurveTo(431.6, 272.2, 442.7, 274.6, 442.3, 269.0);
  ctx.bezierCurveTo(440.8, 268.1, 436.4, 261.6, 434.3, 258.0);
  ctx.bezierCurveTo(437.8, 260.9, 437.7, 261.3, 443.3, 262.0);
  ctx.bezierCurveTo(444.5, 257.0, 440.0, 253.2, 439.3, 251.0);
  ctx.bezierCurveTo(440.2, 254.2, 441.9, 248.0, 438.3, 251.0);
  ctx.bezierCurveTo(438.6, 248.9, 438.9, 249.0, 438.3, 248.0);
  ctx.bezierCurveTo(437.4, 246.4, 430.7, 237.7, 436.3, 233.0);
  ctx.bezierCurveTo(437.0, 236.1, 434.6, 235.9, 435.3, 239.0);
  ctx.bezierCurveTo(436.8, 239.0, 437.8, 239.0, 438.3, 240.0);
  ctx.bezierCurveTo(441.4, 245.9, 441.0, 251.0, 446.3, 255.0);
  ctx.bezierCurveTo(448.4, 256.5, 453.7, 258.1, 461.3, 258.0);
  ctx.bezierCurveTo(461.8, 255.1, 457.2, 252.2, 459.3, 251.0);
  ctx.bezierCurveTo(460.5, 253.1, 463.1, 253.9, 463.3, 257.0);
  ctx.bezierCurveTo(468.5, 257.1, 479.6, 256.1, 471.3, 254.0);
  ctx.bezierCurveTo(480.7, 251.2, 493.2, 246.8, 491.3, 236.0);
  ctx.bezierCurveTo(504.9, 229.6, 505.9, 210.6, 512.3, 197.0);
  ctx.bezierCurveTo(510.4, 197.3, 510.3, 195.6, 509.3, 195.0);
  ctx.bezierCurveTo(508.6, 197.0, 506.7, 197.7, 504.3, 198.0);
  ctx.bezierCurveTo(502.1, 195.2, 502.4, 192.9, 503.3, 189.0);
  ctx.bezierCurveTo(497.3, 188.0, 497.6, 186.8, 492.3, 185.0);
  ctx.bezierCurveTo(491.8, 187.9, 496.5, 190.8, 494.3, 192.0);
  ctx.bezierCurveTo(494.5, 190.2, 490.1, 186.6, 492.3, 189.0);
  ctx.bezierCurveTo(492.3, 193.7, 495.6, 195.1, 498.3, 197.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(514.3, 190.0);
  ctx.bezierCurveTo(509.3, 190.6, 501.8, 187.5, 505.3, 193.0);
  ctx.bezierCurveTo(505.7, 191.7, 506.6, 191.0, 508.3, 191.0);
  ctx.bezierCurveTo(507.3, 192.3, 507.3, 194.7, 506.3, 196.0);
  ctx.bezierCurveTo(510.3, 195.3, 511.3, 191.6, 514.3, 190.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(444.3, 221.0);
  ctx.bezierCurveTo(446.9, 217.8, 443.4, 225.1, 445.3, 224.0);
  ctx.bezierCurveTo(446.4, 223.1, 445.6, 220.3, 448.3, 221.0);
  ctx.bezierCurveTo(448.3, 223.3, 448.3, 225.7, 448.3, 228.0);
  ctx.bezierCurveTo(457.1, 227.5, 459.4, 216.2, 468.3, 219.0);
  ctx.bezierCurveTo(469.0, 214.6, 471.3, 212.0, 472.3, 208.0);
  ctx.bezierCurveTo(470.8, 207.8, 468.6, 208.4, 468.3, 207.0);
  ctx.bezierCurveTo(475.3, 208.4, 472.3, 202.4, 474.3, 199.0);
  ctx.bezierCurveTo(476.2, 195.7, 478.5, 197.9, 478.3, 195.0);
  ctx.bezierCurveTo(478.1, 191.9, 470.6, 191.3, 473.3, 187.0);
  ctx.bezierCurveTo(468.5, 190.6, 464.6, 197.9, 463.3, 202.0);
  ctx.bezierCurveTo(457.2, 203.5, 453.5, 207.5, 447.3, 209.0);
  ctx.bezierCurveTo(449.8, 214.1, 443.9, 220.4, 444.3, 221.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(475.3, 505.0);
  ctx.bezierCurveTo(475.1, 502.1, 475.6, 499.9, 477.3, 499.0);
  ctx.bezierCurveTo(478.2, 503.5, 479.4, 507.6, 482.3, 510.0);
  ctx.bezierCurveTo(480.4, 502.6, 476.6, 497.0, 475.3, 489.0);
  ctx.bezierCurveTo(477.1, 489.9, 477.0, 492.7, 479.3, 493.0);
  ctx.bezierCurveTo(478.2, 488.8, 476.9, 484.8, 475.3, 481.0);
  ctx.bezierCurveTo(467.6, 479.3, 454.8, 477.6, 446.3, 480.0);
  ctx.bezierCurveTo(449.5, 485.2, 452.8, 490.1, 454.3, 497.0);
  ctx.bezierCurveTo(462.9, 495.4, 470.4, 490.0, 476.3, 498.0);
  ctx.bezierCurveTo(468.8, 495.8, 456.3, 495.5, 458.3, 504.0);
  ctx.bezierCurveTo(461.5, 498.2, 475.6, 495.4, 475.3, 505.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(425.3, 469.0);
  ctx.bezierCurveTo(419.9, 470.9, 408.7, 479.6, 412.3, 481.0);
  ctx.bezierCurveTo(401.4, 489.5, 394.7, 502.0, 388.3, 515.0);
  ctx.bezierCurveTo(388.1, 514.2, 388.3, 513.0, 387.3, 513.0);
  ctx.bezierCurveTo(387.4, 516.1, 386.9, 518.5, 385.3, 520.0);
  ctx.bezierCurveTo(383.3, 512.8, 388.6, 506.9, 392.3, 501.0);
  ctx.bezierCurveTo(401.5, 486.4, 411.8, 473.6, 424.3, 464.0);
  ctx.bezierCurveTo(424.4, 465.1, 422.9, 465.6, 424.3, 466.0);
  ctx.bezierCurveTo(427.8, 461.5, 437.7, 467.6, 441.3, 465.0);
  ctx.bezierCurveTo(438.5, 462.4, 434.7, 455.6, 432.3, 456.0);
  ctx.bezierCurveTo(433.6, 456.0, 433.6, 458.8, 432.3, 459.0);
  ctx.bezierCurveTo(430.8, 456.0, 429.2, 451.9, 429.3, 450.0);
  ctx.bezierCurveTo(428.6, 451.2, 422.6, 444.9, 420.3, 450.0);
  ctx.bezierCurveTo(421.8, 450.3, 424.6, 454.2, 422.3, 455.0);
  ctx.bezierCurveTo(422.1, 451.8, 417.4, 447.9, 415.3, 450.0);
  ctx.bezierCurveTo(416.5, 450.8, 420.5, 456.6, 420.3, 458.0);
  ctx.bezierCurveTo(415.6, 457.2, 417.3, 455.2, 416.3, 452.0);
  ctx.bezierCurveTo(396.4, 453.3, 389.0, 475.2, 376.3, 487.0);
  ctx.bezierCurveTo(375.2, 491.2, 379.0, 498.7, 375.3, 494.0);
  ctx.bezierCurveTo(376.9, 506.4, 383.1, 514.2, 386.3, 525.0);
  ctx.bezierCurveTo(391.7, 525.7, 393.7, 529.6, 399.3, 530.0);
  ctx.bezierCurveTo(399.6, 528.0, 398.0, 528.0, 397.3, 527.0);
  ctx.bezierCurveTo(398.7, 527.0, 399.5, 527.5, 400.3, 528.0);
  ctx.bezierCurveTo(406.4, 515.8, 411.8, 503.7, 420.3, 494.0);
  ctx.bezierCurveTo(425.3, 488.4, 433.4, 485.7, 436.3, 478.0);
  ctx.bezierCurveTo(431.5, 476.2, 430.8, 470.2, 425.3, 469.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(474.3, 478.0);
  ctx.bezierCurveTo(470.5, 474.2, 469.9, 467.1, 466.3, 463.0);
  ctx.bezierCurveTo(466.1, 463.8, 466.3, 465.0, 465.3, 465.0);
  ctx.bezierCurveTo(464.9, 463.1, 466.7, 459.0, 463.3, 460.0);
  ctx.bezierCurveTo(463.4, 464.0, 465.5, 465.8, 466.3, 469.0);
  ctx.bezierCurveTo(461.4, 473.2, 458.0, 476.5, 451.3, 475.0);
  ctx.bezierCurveTo(447.9, 474.2, 446.8, 469.4, 443.3, 468.0);
  ctx.bezierCurveTo(436.9, 465.4, 430.8, 468.4, 426.3, 468.0);
  ctx.bezierCurveTo(432.4, 469.0, 434.9, 478.7, 439.3, 478.0);
  ctx.bezierCurveTo(438.0, 478.5, 445.1, 475.8, 443.3, 473.0);
  ctx.bezierCurveTo(445.5, 475.8, 455.5, 478.1, 457.3, 475.0);
  ctx.bezierCurveTo(459.1, 478.0, 471.4, 479.0, 474.3, 478.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(411.3, 451.0);
  ctx.bezierCurveTo(408.3, 451.4, 405.2, 451.6, 404.3, 454.0);
  ctx.bezierCurveTo(406.9, 453.2, 410.0, 453.0, 411.3, 451.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(410.3, 514.0);
  ctx.bezierCurveTo(410.8, 512.2, 415.6, 506.1, 413.3, 508.0);
  ctx.bezierCurveTo(412.3, 509.4, 408.4, 513.0, 410.3, 514.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(400.3, 530.0);
  ctx.bezierCurveTo(402.8, 530.4, 404.7, 525.2, 403.3, 525.0);
  ctx.bezierCurveTo(402.4, 526.8, 400.9, 527.9, 400.3, 530.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(423.3, 564.0);
  ctx.bezierCurveTo(418.8, 561.1, 416.4, 550.9, 412.3, 551.0);
  ctx.bezierCurveTo(416.1, 554.5, 419.4, 563.9, 423.3, 564.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(312.3, 318.0);
  ctx.bezierCurveTo(314.2, 318.2, 318.9, 320.6, 320.3, 318.0);
  ctx.bezierCurveTo(312.5, 317.1, 309.8, 311.2, 305.3, 307.0);
  ctx.bezierCurveTo(308.2, 313.3, 305.7, 318.9, 307.3, 326.0);
  ctx.bezierCurveTo(308.7, 326.0, 309.5, 325.5, 310.3, 325.0);
  ctx.bezierCurveTo(311.8, 330.9, 316.5, 338.8, 322.3, 337.0);
  ctx.bezierCurveTo(321.4, 335.9, 318.6, 336.7, 319.3, 334.0);
  ctx.bezierCurveTo(320.3, 334.0, 320.5, 334.8, 321.3, 335.0);
  ctx.bezierCurveTo(321.2, 325.4, 319.6, 323.3, 318.3, 320.0);
  ctx.bezierCurveTo(317.2, 322.3, 313.4, 319.0, 312.3, 318.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(336.3, 337.0);
  ctx.bezierCurveTo(330.4, 337.9, 324.7, 330.2, 322.3, 334.0);
  ctx.bezierCurveTo(336.7, 343.4, 356.4, 334.2, 365.3, 326.0);
  ctx.bezierCurveTo(361.4, 324.9, 365.2, 322.2, 362.3, 320.0);
  ctx.bezierCurveTo(362.8, 317.1, 367.6, 313.3, 365.3, 311.0);
  ctx.bezierCurveTo(363.4, 313.1, 363.7, 317.4, 361.3, 319.0);
  ctx.bezierCurveTo(358.4, 314.3, 362.9, 309.8, 361.3, 306.0);
  ctx.bezierCurveTo(359.4, 308.1, 359.7, 312.4, 357.3, 314.0);
  ctx.bezierCurveTo(356.4, 309.7, 361.7, 306.4, 359.3, 304.0);
  ctx.bezierCurveTo(358.2, 306.4, 359.8, 301.0, 356.3, 301.0);
  ctx.bezierCurveTo(352.3, 308.6, 343.0, 311.0, 335.3, 315.0);
  ctx.bezierCurveTo(342.5, 310.6, 351.1, 303.1, 355.3, 299.0);
  ctx.bezierCurveTo(338.0, 295.3, 318.4, 296.1, 303.3, 297.0);
  ctx.bezierCurveTo(305.9, 304.9, 309.6, 313.7, 319.3, 317.0);
  ctx.bezierCurveTo(319.0, 313.0, 320.6, 307.1, 317.3, 306.0);
  ctx.bezierCurveTo(319.1, 305.1, 320.2, 303.6, 322.3, 303.0);
  ctx.bezierCurveTo(319.6, 304.7, 319.6, 313.0, 321.3, 316.0);
  ctx.bezierCurveTo(325.4, 317.0, 331.0, 314.4, 332.3, 316.0);
  ctx.bezierCurveTo(329.5, 318.2, 322.7, 316.4, 321.3, 320.0);
  ctx.bezierCurveTo(326.0, 321.0, 329.7, 315.7, 333.3, 319.0);
  ctx.bezierCurveTo(329.0, 319.0, 327.7, 322.1, 322.3, 321.0);
  ctx.bezierCurveTo(321.6, 324.4, 326.0, 322.6, 326.3, 325.0);
  ctx.bezierCurveTo(323.9, 325.9, 321.2, 320.5, 321.3, 325.0);
  ctx.bezierCurveTo(323.9, 327.8, 330.2, 326.8, 333.3, 329.0);
  ctx.bezierCurveTo(329.1, 329.8, 324.0, 326.4, 322.3, 328.0);
  ctx.bezierCurveTo(323.2, 332.6, 330.8, 334.3, 336.3, 337.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(367.3, 317.0);
  ctx.bezierCurveTo(368.0, 315.0, 370.8, 312.7, 367.3, 312.0);
  ctx.bezierCurveTo(366.9, 313.8, 365.7, 315.4, 367.3, 317.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(300.3, 294.0);
  ctx.bezierCurveTo(300.3, 302.4, 303.7, 312.6, 306.3, 315.0);
  ctx.bezierCurveTo(303.9, 308.4, 303.1, 300.2, 300.3, 294.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(288.3, 327.0);
  ctx.bezierCurveTo(288.7, 325.3, 293.0, 322.5, 290.3, 321.0);
  ctx.bezierCurveTo(289.8, 323.4, 283.8, 325.4, 288.3, 327.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(294.3, 222.0);
  ctx.bezierCurveTo(294.6, 219.7, 294.1, 218.2, 292.3, 218.0);
  ctx.bezierCurveTo(292.5, 219.9, 293.0, 221.3, 294.3, 222.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(397.3, 96.0);
  ctx.bezierCurveTo(396.1, 95.8, 395.3, 94.4, 395.3, 97.0);
  ctx.bezierCurveTo(395.8, 106.8, 394.3, 116.6, 394.3, 123.0);
  ctx.bezierCurveTo(396.9, 125.4, 397.7, 129.6, 399.3, 133.0);
  ctx.bezierCurveTo(399.3, 134.3, 399.3, 135.7, 399.3, 137.0);
  ctx.bezierCurveTo(399.4, 138.1, 400.6, 137.8, 400.3, 136.0);
  ctx.bezierCurveTo(400.9, 130.2, 398.4, 122.0, 399.3, 116.0);
  ctx.bezierCurveTo(399.7, 113.6, 400.9, 107.7, 403.3, 109.0);
  ctx.bezierCurveTo(401.6, 96.4, 400.7, 82.9, 392.3, 77.0);
  ctx.bezierCurveTo(391.3, 79.0, 387.9, 78.6, 388.3, 82.0);
  ctx.bezierCurveTo(391.9, 86.1, 395.7, 89.9, 397.3, 96.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(509.3, 88.0);
  ctx.bezierCurveTo(512.0, 87.3, 511.3, 90.1, 512.3, 91.0);
  ctx.bezierCurveTo(518.2, 93.1, 520.1, 87.5, 522.3, 89.0);
  ctx.bezierCurveTo(521.3, 82.8, 524.5, 78.5, 522.3, 74.0);
  ctx.bezierCurveTo(513.0, 73.7, 513.5, 83.2, 509.3, 88.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(539.3, 96.0);
  ctx.bezierCurveTo(543.0, 96.9, 544.5, 100.1, 550.3, 99.0);
  ctx.bezierCurveTo(551.3, 93.7, 557.6, 89.3, 554.3, 83.0);
  ctx.bezierCurveTo(546.2, 84.3, 542.5, 89.9, 539.3, 96.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(350.3, 85.0);
  ctx.bezierCurveTo(351.1, 91.9, 352.7, 97.9, 355.3, 103.0);
  ctx.bezierCurveTo(359.7, 103.0, 364.0, 103.0, 368.3, 103.0);
  ctx.bezierCurveTo(368.9, 95.9, 372.6, 92.0, 374.3, 86.0);
  ctx.bezierCurveTo(367.2, 84.7, 356.4, 84.3, 350.3, 85.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(509.3, 101.0);
  ctx.bezierCurveTo(513.3, 100.7, 514.9, 102.8, 519.3, 102.0);
  ctx.bezierCurveTo(521.0, 100.3, 520.1, 96.1, 520.3, 93.0);
  ctx.bezierCurveTo(514.2, 92.6, 510.5, 95.6, 509.3, 90.0);
  ctx.bezierCurveTo(509.3, 93.7, 509.3, 97.3, 509.3, 101.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(537.3, 96.0);
  ctx.bezierCurveTo(536.4, 93.0, 541.6, 91.1, 539.3, 90.0);
  ctx.bezierCurveTo(539.0, 91.8, 534.0, 93.9, 537.3, 96.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(519.3, 104.0);
  ctx.bezierCurveTo(514.2, 104.0, 511.5, 106.0, 508.3, 103.0);
  ctx.bezierCurveTo(508.7, 108.3, 507.9, 112.6, 506.3, 116.0);
  ctx.bezierCurveTo(508.0, 121.3, 524.6, 117.7, 510.3, 118.0);
  ctx.bezierCurveTo(510.5, 115.5, 508.7, 114.9, 508.3, 113.0);
  ctx.bezierCurveTo(510.3, 117.8, 518.2, 113.5, 516.3, 117.0);
  ctx.bezierCurveTo(518.0, 117.0, 519.7, 117.0, 521.3, 117.0);
  ctx.bezierCurveTo(520.7, 113.6, 522.6, 107.7, 520.3, 106.0);
  ctx.bezierCurveTo(520.0, 106.9, 517.6, 110.4, 517.3, 108.0);
  ctx.bezierCurveTo(518.7, 107.3, 519.2, 105.9, 519.3, 104.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(541.3, 120.0);
  ctx.bezierCurveTo(541.6, 117.9, 545.0, 119.1, 545.3, 117.0);
  ctx.bezierCurveTo(543.3, 117.0, 544.0, 114.3, 541.3, 115.0);
  ctx.bezierCurveTo(540.7, 115.6, 539.0, 119.7, 541.3, 120.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(403.3, 132.0);
  ctx.bezierCurveTo(401.9, 126.6, 406.2, 121.6, 403.3, 118.0);
  ctx.bezierCurveTo(401.8, 120.1, 401.8, 136.4, 403.3, 132.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(518.3, 122.0);
  ctx.bezierCurveTo(519.0, 122.0, 519.7, 122.0, 520.3, 122.0);
  ctx.bezierCurveTo(521.4, 120.6, 521.4, 119.6, 519.3, 119.0);
  ctx.bezierCurveTo(519.3, 120.3, 518.0, 120.4, 518.3, 122.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(478.3, 135.0);
  ctx.bezierCurveTo(480.4, 136.0, 489.2, 129.6, 483.3, 126.0);
  ctx.bezierCurveTo(484.1, 130.8, 476.2, 132.1, 478.3, 135.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(379.3, 170.0);
  ctx.bezierCurveTo(377.0, 170.3, 375.5, 169.8, 374.3, 169.0);
  ctx.bezierCurveTo(373.0, 171.0, 372.4, 173.8, 371.3, 176.0);
  ctx.bezierCurveTo(372.6, 178.6, 376.2, 175.1, 376.3, 177.0);
  ctx.bezierCurveTo(375.3, 178.4, 373.7, 179.0, 372.3, 180.0);
  ctx.bezierCurveTo(368.3, 175.2, 352.2, 175.8, 350.3, 182.0);
  ctx.bezierCurveTo(354.4, 187.5, 365.1, 182.4, 372.3, 186.0);
  ctx.bezierCurveTo(376.4, 180.7, 377.6, 172.6, 384.3, 170.0);
  ctx.bezierCurveTo(380.8, 175.5, 376.9, 180.6, 374.3, 187.0);
  ctx.bezierCurveTo(376.7, 187.3, 378.1, 188.6, 381.3, 188.0);
  ctx.bezierCurveTo(383.6, 185.0, 383.5, 179.5, 388.3, 179.0);
  ctx.bezierCurveTo(389.5, 179.5, 390.6, 180.1, 391.3, 181.0);
  ctx.bezierCurveTo(389.8, 184.5, 387.2, 186.9, 387.3, 192.0);
  ctx.bezierCurveTo(393.6, 192.7, 397.2, 196.1, 402.3, 198.0);
  ctx.bezierCurveTo(403.3, 196.0, 404.4, 194.0, 405.3, 192.0);
  ctx.bezierCurveTo(402.7, 190.6, 399.7, 189.7, 399.3, 186.0);
  ctx.bezierCurveTo(400.5, 182.2, 403.1, 179.7, 402.3, 174.0);
  ctx.bezierCurveTo(398.7, 170.2, 394.8, 174.5, 393.3, 174.0);
  ctx.bezierCurveTo(393.6, 172.6, 395.0, 172.3, 395.3, 171.0);
  ctx.bezierCurveTo(391.5, 170.1, 388.7, 168.3, 383.3, 169.0);
  ctx.bezierCurveTo(388.8, 163.1, 393.6, 156.7, 399.3, 151.0);
  ctx.bezierCurveTo(397.1, 150.6, 398.9, 146.1, 398.3, 144.0);
  ctx.bezierCurveTo(390.4, 151.1, 388.2, 163.9, 379.3, 170.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(373.3, 168.0);
  ctx.bezierCurveTo(369.2, 167.5, 358.5, 168.3, 351.3, 168.0);
  ctx.bezierCurveTo(349.3, 172.9, 346.1, 170.7, 343.3, 171.0);
  ctx.bezierCurveTo(342.3, 176.7, 347.1, 176.5, 348.3, 180.0);
  ctx.bezierCurveTo(352.3, 175.9, 363.0, 174.6, 370.3, 177.0);
  ctx.bezierCurveTo(370.6, 173.3, 372.8, 171.5, 373.3, 168.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(553.3, 144.0);
  ctx.bezierCurveTo(551.0, 144.0, 548.7, 144.0, 546.3, 144.0);
  ctx.bezierCurveTo(545.0, 146.9, 545.0, 151.1, 546.3, 154.0);
  ctx.bezierCurveTo(552.3, 154.3, 557.2, 153.6, 561.3, 152.0);
  ctx.bezierCurveTo(560.1, 148.9, 559.8, 144.8, 556.3, 144.0);
  ctx.bezierCurveTo(552.2, 144.5, 554.1, 152.0, 553.3, 153.0);
  ctx.bezierCurveTo(551.3, 150.9, 552.6, 146.4, 553.3, 144.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(338.3, 154.0);
  ctx.bezierCurveTo(339.0, 149.7, 337.2, 147.8, 335.3, 146.0);
  ctx.bezierCurveTo(336.2, 148.8, 336.6, 152.1, 338.3, 154.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(428.3, 154.0);
  ctx.bezierCurveTo(422.3, 157.4, 413.4, 157.7, 410.3, 164.0);
  ctx.bezierCurveTo(407.1, 162.8, 401.4, 166.8, 400.3, 171.0);
  ctx.bezierCurveTo(403.8, 174.5, 407.6, 169.8, 411.3, 168.0);
  ctx.bezierCurveTo(416.5, 165.4, 425.7, 160.8, 430.3, 160.0);
  ctx.bezierCurveTo(435.1, 159.2, 439.8, 161.5, 445.3, 159.0);
  ctx.bezierCurveTo(439.5, 157.5, 434.0, 155.6, 428.3, 154.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(397.3, 169.0);
  ctx.bezierCurveTo(404.6, 162.3, 415.5, 159.1, 424.3, 154.0);
  ctx.bezierCurveTo(413.5, 153.7, 408.8, 156.7, 402.3, 160.0);
  ctx.bezierCurveTo(398.0, 162.2, 393.1, 164.6, 390.3, 168.0);
  ctx.bezierCurveTo(393.6, 167.4, 395.0, 168.7, 397.3, 169.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(397.3, 158.0);
  ctx.bezierCurveTo(397.6, 156.6, 399.0, 156.3, 399.3, 155.0);
  ctx.bezierCurveTo(397.3, 154.1, 394.8, 157.6, 397.3, 158.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(341.3, 166.0);
  ctx.bezierCurveTo(341.1, 164.1, 342.0, 156.1, 340.3, 159.0);
  ctx.bezierCurveTo(340.5, 160.9, 339.6, 168.9, 341.3, 166.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(466.3, 165.0);
  ctx.bezierCurveTo(455.7, 163.2, 435.7, 159.9, 428.3, 169.0);
  ctx.bezierCurveTo(427.3, 165.0, 424.4, 170.1, 423.3, 168.0);
  ctx.bezierCurveTo(424.4, 165.8, 428.2, 166.2, 429.3, 164.0);
  ctx.bezierCurveTo(423.1, 165.6, 407.6, 170.5, 406.3, 175.0);
  ctx.bezierCurveTo(406.3, 175.1, 409.9, 178.5, 404.3, 177.0);
  ctx.bezierCurveTo(403.4, 180.4, 403.0, 184.3, 402.3, 188.0);
  ctx.bezierCurveTo(405.4, 187.3, 404.2, 190.7, 407.3, 190.0);
  ctx.bezierCurveTo(408.5, 180.2, 419.1, 174.4, 424.3, 172.0);
  ctx.bezierCurveTo(421.7, 176.4, 416.1, 177.8, 414.3, 183.0);
  ctx.bezierCurveTo(418.0, 181.8, 423.8, 184.1, 428.3, 185.0);
  ctx.bezierCurveTo(438.9, 180.2, 449.4, 170.1, 463.3, 172.0);
  ctx.bezierCurveTo(454.5, 175.2, 446.5, 177.3, 439.3, 181.0);
  ctx.bezierCurveTo(435.2, 183.1, 428.8, 185.7, 429.3, 191.0);
  ctx.bezierCurveTo(437.5, 188.3, 443.7, 188.3, 453.3, 186.0);
  ctx.bezierCurveTo(454.6, 188.6, 455.0, 187.3, 455.3, 190.0);
  ctx.bezierCurveTo(459.8, 184.8, 463.9, 179.3, 472.3, 178.0);
  ctx.bezierCurveTo(473.3, 175.0, 474.4, 172.0, 475.3, 169.0);
  ctx.bezierCurveTo(470.6, 167.1, 466.7, 168.3, 466.3, 165.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(341.3, 172.0);
  ctx.bezierCurveTo(341.6, 169.7, 341.1, 168.2, 339.3, 168.0);
  ctx.bezierCurveTo(339.5, 169.9, 340.0, 171.3, 341.3, 172.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(313.3, 195.0);
  ctx.bezierCurveTo(315.0, 189.3, 315.3, 182.3, 323.3, 183.0);
  ctx.bezierCurveTo(323.3, 185.7, 323.3, 188.3, 323.3, 191.0);
  ctx.bezierCurveTo(326.5, 191.2, 326.7, 188.3, 330.3, 189.0);
  ctx.bezierCurveTo(332.3, 182.7, 332.0, 171.8, 326.3, 170.0);
  ctx.bezierCurveTo(318.7, 173.9, 308.1, 184.9, 313.3, 195.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(490.3, 189.0);
  ctx.bezierCurveTo(490.0, 188.4, 487.8, 185.2, 490.3, 185.0);
  ctx.bezierCurveTo(490.5, 185.8, 490.3, 187.0, 491.3, 187.0);
  ctx.bezierCurveTo(491.2, 185.1, 490.7, 183.7, 489.3, 183.0);
  ctx.bezierCurveTo(489.1, 183.8, 489.3, 185.0, 488.3, 185.0);
  ctx.bezierCurveTo(488.4, 181.9, 485.3, 176.8, 483.3, 179.0);
  ctx.bezierCurveTo(487.6, 179.7, 487.8, 189.8, 490.3, 189.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(302.3, 208.0);
  ctx.bezierCurveTo(303.5, 203.5, 307.8, 200.3, 309.3, 196.0);
  ctx.bezierCurveTo(309.7, 195.0, 308.1, 194.5, 308.3, 193.0);
  ctx.bezierCurveTo(309.0, 188.7, 313.7, 184.3, 312.3, 180.0);
  ctx.bezierCurveTo(309.3, 181.0, 306.8, 182.4, 303.3, 183.0);
  ctx.bezierCurveTo(298.9, 194.4, 299.4, 194.7, 302.3, 208.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(325.3, 193.0);
  ctx.bezierCurveTo(335.2, 191.6, 341.2, 184.3, 345.3, 180.0);
  ctx.bezierCurveTo(337.1, 179.8, 333.9, 190.5, 325.3, 193.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(341.3, 197.0);
  ctx.bezierCurveTo(351.0, 204.1, 370.0, 196.1, 370.3, 188.0);
  ctx.bezierCurveTo(364.9, 191.8, 361.2, 191.5, 352.3, 191.0);
  ctx.bezierCurveTo(351.3, 186.6, 347.9, 184.7, 346.3, 181.0);
  ctx.bezierCurveTo(346.1, 187.8, 339.4, 188.1, 341.3, 197.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(384.3, 192.0);
  ctx.bezierCurveTo(385.3, 187.6, 387.8, 184.8, 389.3, 181.0);
  ctx.bezierCurveTo(385.6, 181.9, 382.2, 188.5, 384.3, 192.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(487.3, 191.0);
  ctx.bezierCurveTo(486.1, 187.6, 485.2, 183.8, 483.3, 181.0);
  ctx.bezierCurveTo(483.7, 185.3, 483.9, 189.7, 487.3, 191.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(458.3, 189.0);
  ctx.bezierCurveTo(455.6, 194.3, 449.3, 196.0, 447.3, 202.0);
  ctx.bezierCurveTo(446.5, 197.9, 448.9, 196.9, 448.3, 193.0);
  ctx.bezierCurveTo(433.4, 187.9, 420.8, 201.8, 414.3, 214.0);
  ctx.bezierCurveTo(424.7, 213.3, 433.5, 214.1, 439.3, 218.0);
  ctx.bezierCurveTo(444.0, 201.0, 470.2, 200.2, 470.3, 182.0);
  ctx.bezierCurveTo(466.1, 183.5, 462.5, 193.8, 458.3, 189.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(464.3, 184.0);
  ctx.bezierCurveTo(458.0, 191.3, 466.6, 183.8, 464.3, 184.0);
  ctx.lineTo(464.3, 184.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(281.3, 187.0);
  ctx.bezierCurveTo(283.9, 186.2, 287.0, 186.0, 288.3, 184.0);
  ctx.bezierCurveTo(285.8, 184.8, 282.6, 185.0, 281.3, 187.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(317.3, 186.0);
  ctx.bezierCurveTo(319.7, 190.1, 317.7, 193.8, 314.3, 195.0);
  ctx.bezierCurveTo(318.1, 195.1, 321.2, 194.6, 323.3, 193.0);
  ctx.bezierCurveTo(319.4, 193.6, 322.1, 187.5, 321.3, 185.0);
  ctx.bezierCurveTo(319.4, 184.8, 319.1, 186.1, 317.3, 186.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(415.3, 185.0);
  ctx.bezierCurveTo(410.8, 189.1, 406.0, 193.0, 404.3, 200.0);
  ctx.bezierCurveTo(411.6, 198.0, 410.3, 204.6, 415.3, 205.0);
  ctx.bezierCurveTo(417.6, 199.6, 422.2, 196.6, 427.3, 194.0);
  ctx.bezierCurveTo(426.5, 187.8, 420.3, 187.0, 415.3, 185.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(357.3, 201.0);
  ctx.bezierCurveTo(357.7, 204.0, 353.7, 202.7, 353.3, 205.0);
  ctx.bezierCurveTo(341.8, 204.5, 331.2, 204.9, 324.3, 209.0);
  ctx.bezierCurveTo(324.3, 214.7, 324.3, 220.3, 324.3, 226.0);
  ctx.bezierCurveTo(328.1, 225.2, 332.3, 224.7, 337.3, 225.0);
  ctx.bezierCurveTo(338.0, 228.7, 341.0, 230.0, 343.3, 232.0);
  ctx.bezierCurveTo(343.9, 228.5, 339.8, 229.5, 340.3, 226.0);
  ctx.bezierCurveTo(345.3, 229.0, 348.8, 233.5, 350.3, 240.0);
  ctx.bezierCurveTo(350.3, 239.4, 351.1, 238.9, 351.3, 240.0);
  ctx.bezierCurveTo(349.1, 241.3, 349.6, 245.9, 347.3, 242.0);
  ctx.bezierCurveTo(350.0, 245.1, 344.6, 245.9, 347.3, 248.0);
  ctx.bezierCurveTo(347.9, 245.9, 349.2, 244.6, 351.3, 244.0);
  ctx.bezierCurveTo(349.0, 247.3, 345.9, 249.9, 343.3, 253.0);
  ctx.bezierCurveTo(345.8, 252.7, 357.5, 240.8, 352.3, 246.0);
  ctx.bezierCurveTo(347.7, 250.6, 341.8, 257.1, 338.3, 260.0);
  ctx.bezierCurveTo(337.1, 261.0, 333.1, 260.8, 336.3, 263.0);
  ctx.bezierCurveTo(340.3, 259.3, 341.8, 259.2, 347.3, 257.0);
  ctx.bezierCurveTo(340.5, 265.6, 319.7, 270.0, 312.3, 259.0);
  ctx.bezierCurveTo(307.3, 266.0, 312.1, 275.1, 316.3, 279.0);
  ctx.bezierCurveTo(312.8, 276.1, 309.8, 272.8, 307.3, 269.0);
  ctx.bezierCurveTo(307.1, 272.2, 306.6, 275.0, 303.3, 275.0);
  ctx.bezierCurveTo(305.4, 269.8, 307.6, 264.6, 311.3, 261.0);
  ctx.bezierCurveTo(308.5, 256.5, 310.4, 243.9, 309.3, 237.0);
  ctx.bezierCurveTo(309.4, 241.0, 305.5, 250.6, 306.3, 255.0);
  ctx.bezierCurveTo(306.5, 255.8, 308.4, 254.8, 308.3, 257.0);
  ctx.bezierCurveTo(308.3, 259.6, 305.5, 257.9, 309.3, 260.0);
  ctx.bezierCurveTo(303.1, 267.9, 296.3, 278.4, 300.3, 291.0);
  ctx.bezierCurveTo(307.5, 290.5, 316.8, 292.1, 319.3, 287.0);
  ctx.bezierCurveTo(321.0, 292.0, 336.1, 288.6, 343.3, 291.0);
  ctx.bezierCurveTo(346.5, 285.7, 349.0, 278.3, 353.3, 277.0);
  ctx.bezierCurveTo(352.9, 271.5, 343.6, 270.4, 346.3, 265.0);
  ctx.bezierCurveTo(345.1, 262.5, 342.5, 267.0, 341.3, 264.0);
  ctx.bezierCurveTo(348.4, 258.9, 349.7, 271.5, 354.3, 275.0);
  ctx.bezierCurveTo(356.7, 269.9, 363.5, 268.0, 366.3, 261.0);
  ctx.bezierCurveTo(367.3, 258.6, 366.4, 255.8, 367.3, 253.0);
  ctx.bezierCurveTo(370.3, 244.3, 375.5, 237.2, 379.3, 232.0);
  ctx.bezierCurveTo(381.1, 229.6, 378.9, 228.0, 379.3, 227.0);
  ctx.bezierCurveTo(379.4, 226.7, 382.2, 228.9, 381.3, 226.0);
  ctx.bezierCurveTo(380.7, 225.9, 380.1, 225.9, 380.3, 225.0);
  ctx.bezierCurveTo(379.8, 223.2, 379.3, 225.4, 378.3, 226.0);
  ctx.bezierCurveTo(379.6, 222.6, 379.6, 217.9, 377.3, 223.0);
  ctx.bezierCurveTo(376.7, 221.2, 378.5, 217.1, 376.3, 217.0);
  ctx.bezierCurveTo(369.2, 221.2, 363.5, 226.9, 354.3, 229.0);
  ctx.bezierCurveTo(357.2, 223.4, 346.6, 223.6, 343.3, 221.0);
  ctx.bezierCurveTo(341.8, 222.2, 342.1, 225.2, 339.3, 225.0);
  ctx.bezierCurveTo(342.2, 215.8, 350.1, 211.8, 355.3, 205.0);
  ctx.bezierCurveTo(363.1, 203.1, 369.6, 199.9, 378.3, 199.0);
  ctx.bezierCurveTo(377.5, 195.5, 379.4, 194.8, 380.3, 193.0);
  ctx.bezierCurveTo(377.8, 192.9, 376.8, 191.2, 375.3, 190.0);
  ctx.bezierCurveTo(368.0, 192.4, 367.3, 201.3, 357.3, 201.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(321.3, 228.0);
  ctx.bezierCurveTo(321.6, 221.2, 321.9, 214.6, 323.3, 209.0);
  ctx.bezierCurveTo(316.5, 209.5, 313.7, 206.0, 307.3, 206.0);
  ctx.bezierCurveTo(308.2, 203.8, 312.7, 200.1, 310.3, 198.0);
  ctx.bezierCurveTo(301.2, 210.6, 294.9, 225.9, 290.3, 243.0);
  ctx.bezierCurveTo(293.5, 242.3, 292.3, 239.7, 294.3, 240.0);
  ctx.bezierCurveTo(294.4, 232.4, 299.8, 216.1, 304.3, 213.0);
  ctx.bezierCurveTo(298.3, 222.3, 297.1, 236.4, 293.3, 248.0);
  ctx.bezierCurveTo(293.1, 246.5, 293.7, 244.3, 292.3, 244.0);
  ctx.bezierCurveTo(287.3, 253.8, 288.4, 276.0, 293.3, 285.0);
  ctx.bezierCurveTo(293.9, 280.4, 290.3, 274.7, 293.3, 271.0);
  ctx.bezierCurveTo(293.7, 275.3, 293.9, 279.7, 297.3, 281.0);
  ctx.bezierCurveTo(298.4, 272.7, 301.4, 266.4, 306.3, 262.0);
  ctx.bezierCurveTo(303.3, 256.8, 301.5, 228.1, 298.3, 237.0);
  ctx.bezierCurveTo(299.2, 234.2, 298.6, 230.0, 300.3, 228.0);
  ctx.bezierCurveTo(300.3, 229.9, 301.1, 230.1, 302.3, 229.0);
  ctx.bezierCurveTo(300.1, 234.0, 302.5, 238.8, 303.3, 243.0);
  ctx.bezierCurveTo(304.0, 246.3, 303.0, 251.5, 306.3, 252.0);
  ctx.bezierCurveTo(304.7, 238.6, 308.8, 236.4, 312.3, 225.0);
  ctx.bezierCurveTo(312.5, 226.5, 312.0, 228.7, 313.3, 229.0);
  ctx.bezierCurveTo(315.0, 227.0, 316.0, 224.4, 319.3, 224.0);
  ctx.bezierCurveTo(317.5, 228.2, 309.0, 231.0, 312.3, 237.0);
  ctx.bezierCurveTo(313.1, 234.2, 314.6, 231.9, 317.3, 231.0);
  ctx.bezierCurveTo(305.6, 240.3, 311.0, 271.3, 330.3, 264.0);
  ctx.bezierCurveTo(323.5, 263.6, 331.6, 261.4, 333.3, 260.0);
  ctx.bezierCurveTo(339.7, 255.0, 344.9, 242.8, 341.3, 232.0);
  ctx.bezierCurveTo(338.2, 229.3, 328.7, 230.3, 326.3, 230.0);
  ctx.bezierCurveTo(329.6, 227.3, 334.7, 229.5, 337.3, 228.0);
  ctx.bezierCurveTo(332.1, 225.3, 326.9, 226.4, 321.3, 228.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(367.3, 259.0);
  ctx.bezierCurveTo(371.4, 258.4, 372.9, 255.3, 372.3, 250.0);
  ctx.bezierCurveTo(368.6, 251.0, 369.3, 256.4, 367.3, 259.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(403.3, 222.0);
  ctx.bezierCurveTo(399.2, 219.3, 399.6, 207.3, 401.3, 202.0);
  ctx.bezierCurveTo(394.7, 199.7, 390.1, 195.2, 383.3, 193.0);
  ctx.bezierCurveTo(383.0, 195.0, 380.6, 195.0, 380.3, 197.0);
  ctx.bezierCurveTo(383.5, 196.8, 382.3, 201.1, 384.3, 202.0);
  ctx.bezierCurveTo(377.3, 204.5, 371.6, 212.4, 364.3, 209.0);
  ctx.bezierCurveTo(371.4, 207.7, 377.1, 205.1, 381.3, 201.0);
  ctx.bezierCurveTo(374.3, 201.2, 364.1, 206.3, 354.3, 207.0);
  ctx.bezierCurveTo(352.0, 212.4, 347.4, 215.4, 344.3, 220.0);
  ctx.bezierCurveTo(349.9, 221.1, 353.4, 224.3, 358.3, 226.0);
  ctx.bezierCurveTo(364.4, 220.7, 372.3, 217.3, 380.3, 214.0);
  ctx.bezierCurveTo(376.6, 216.7, 381.9, 225.5, 383.3, 226.0);
  ctx.bezierCurveTo(382.9, 231.7, 374.1, 238.0, 372.3, 248.0);
  ctx.bezierCurveTo(372.5, 248.8, 373.2, 249.2, 374.3, 249.0);
  ctx.bezierCurveTo(381.5, 237.5, 393.1, 230.5, 403.3, 222.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(374.3, 251.0);
  ctx.bezierCurveTo(374.5, 252.2, 374.1, 253.8, 375.3, 254.0);
  ctx.bezierCurveTo(387.2, 244.5, 400.4, 234.6, 415.3, 229.0);
  ctx.bezierCurveTo(410.6, 222.7, 409.1, 214.0, 414.3, 207.0);
  ctx.bezierCurveTo(411.0, 204.2, 407.9, 200.8, 402.3, 203.0);
  ctx.bezierCurveTo(404.5, 208.1, 401.6, 218.4, 406.3, 221.0);
  ctx.bezierCurveTo(406.7, 219.7, 407.6, 219.0, 409.3, 219.0);
  ctx.bezierCurveTo(398.4, 230.4, 383.7, 238.1, 374.3, 251.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(352.3, 203.0);
  ctx.bezierCurveTo(347.9, 201.7, 342.4, 201.6, 339.3, 199.0);
  ctx.bezierCurveTo(338.7, 195.6, 340.6, 189.7, 338.3, 188.0);
  ctx.bezierCurveTo(334.0, 192.7, 326.8, 194.5, 326.3, 203.0);
  ctx.bezierCurveTo(324.1, 202.6, 325.9, 198.1, 325.3, 196.0);
  ctx.bezierCurveTo(319.3, 197.6, 312.8, 198.8, 311.3, 205.0);
  ctx.bezierCurveTo(323.1, 210.4, 336.6, 202.3, 352.3, 203.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(361.3, 189.0);
  ctx.bezierCurveTo(359.2, 189.6, 354.7, 187.8, 354.3, 190.0);
  ctx.bezierCurveTo(356.4, 189.4, 360.9, 191.2, 361.3, 189.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(283.3, 234.0);
  ctx.bezierCurveTo(283.3, 231.6, 285.0, 231.1, 284.3, 228.0);
  ctx.bezierCurveTo(281.0, 227.9, 280.5, 225.2, 276.3, 226.0);
  ctx.bezierCurveTo(277.3, 230.0, 276.9, 235.4, 283.3, 234.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(407.3, 237.0);
  ctx.bezierCurveTo(410.6, 242.7, 414.6, 247.8, 418.3, 253.0);
  ctx.bezierCurveTo(419.5, 243.8, 414.9, 240.4, 415.3, 232.0);
  ctx.bezierCurveTo(410.5, 232.5, 407.5, 234.8, 404.3, 237.0);
  ctx.bezierCurveTo(406.9, 237.5, 410.0, 233.5, 411.3, 236.0);
  ctx.bezierCurveTo(409.4, 235.8, 409.1, 237.1, 407.3, 237.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(420.3, 237.0);
  ctx.bezierCurveTo(420.6, 235.6, 419.7, 233.1, 419.3, 235.0);
  ctx.bezierCurveTo(419.0, 236.4, 419.9, 238.9, 420.3, 237.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(404.3, 239.0);
  ctx.bezierCurveTo(395.1, 242.5, 383.2, 248.6, 380.3, 255.0);
  ctx.bezierCurveTo(380.6, 254.1, 384.0, 251.6, 384.3, 254.0);
  ctx.bezierCurveTo(379.8, 256.9, 358.9, 267.1, 359.3, 273.0);
  ctx.bezierCurveTo(359.6, 276.3, 367.5, 278.6, 370.3, 282.0);
  ctx.bezierCurveTo(372.9, 279.2, 376.3, 277.3, 380.3, 276.0);
  ctx.bezierCurveTo(380.5, 268.9, 369.6, 268.3, 371.3, 263.0);
  ctx.bezierCurveTo(375.9, 266.1, 378.7, 270.9, 383.3, 274.0);
  ctx.bezierCurveTo(387.6, 272.3, 393.4, 266.8, 398.3, 269.0);
  ctx.bezierCurveTo(393.9, 271.9, 387.7, 273.0, 384.3, 277.0);
  ctx.bezierCurveTo(390.3, 283.7, 395.9, 290.8, 399.3, 300.0);
  ctx.bezierCurveTo(410.5, 300.4, 421.3, 287.0, 430.3, 295.0);
  ctx.bezierCurveTo(425.8, 272.1, 418.5, 252.2, 404.3, 239.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(382.3, 277.0);
  ctx.bezierCurveTo(379.6, 279.6, 375.1, 280.4, 372.3, 283.0);
  ctx.bezierCurveTo(371.8, 286.1, 375.0, 285.6, 375.3, 288.0);
  ctx.bezierCurveTo(380.0, 288.7, 383.6, 283.0, 386.3, 285.0);
  ctx.bezierCurveTo(384.2, 286.9, 381.5, 288.2, 378.3, 289.0);
  ctx.bezierCurveTo(380.9, 295.7, 385.8, 300.2, 390.3, 305.0);
  ctx.bezierCurveTo(392.0, 302.7, 395.8, 302.4, 398.3, 301.0);
  ctx.bezierCurveTo(394.8, 291.2, 388.7, 283.9, 382.3, 277.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(430.3, 284.0);
  ctx.bezierCurveTo(429.3, 280.0, 429.9, 274.4, 426.3, 273.0);
  ctx.bezierCurveTo(427.0, 277.3, 428.0, 281.4, 430.3, 284.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(286.3, 292.0);
  ctx.bezierCurveTo(287.4, 287.6, 289.5, 289.4, 291.3, 287.0);
  ctx.bezierCurveTo(286.0, 276.1, 287.3, 258.8, 288.3, 244.0);
  ctx.bezierCurveTo(286.0, 244.3, 284.5, 243.8, 283.3, 243.0);
  ctx.bezierCurveTo(276.2, 255.3, 271.9, 284.1, 286.3, 292.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(445.3, 257.0);
  ctx.bezierCurveTo(444.3, 259.7, 443.8, 265.2, 447.3, 266.0);
  ctx.bezierCurveTo(447.9, 263.3, 443.2, 260.9, 446.3, 259.0);
  ctx.bezierCurveTo(446.5, 261.8, 448.2, 263.2, 448.3, 266.0);
  ctx.bezierCurveTo(450.9, 263.4, 456.4, 265.9, 461.3, 264.0);
  ctx.bezierCurveTo(461.5, 262.5, 461.0, 260.3, 462.3, 260.0);
  ctx.bezierCurveTo(462.4, 261.6, 462.2, 263.5, 464.3, 263.0);
  ctx.bezierCurveTo(467.5, 259.2, 454.1, 256.8, 452.3, 261.0);
  ctx.bezierCurveTo(452.3, 259.5, 449.5, 256.0, 448.3, 259.0);
  ctx.bezierCurveTo(449.2, 259.3, 451.7, 262.7, 449.3, 263.0);
  ctx.bezierCurveTo(449.0, 260.0, 447.6, 258.1, 445.3, 257.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(464.3, 260.0);
  ctx.bezierCurveTo(469.8, 262.6, 469.4, 256.5, 464.3, 260.0);
  ctx.lineTo(464.3, 260.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(440.3, 265.0);
  ctx.bezierCurveTo(441.3, 265.0, 441.5, 265.8, 442.3, 266.0);
  ctx.bezierCurveTo(442.5, 265.2, 442.3, 264.0, 443.3, 264.0);
  ctx.bezierCurveTo(443.4, 264.6, 443.5, 265.2, 444.3, 265.0);
  ctx.bezierCurveTo(445.3, 262.0, 442.1, 263.2, 440.3, 263.0);
  ctx.bezierCurveTo(440.3, 263.7, 440.3, 264.3, 440.3, 265.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(438.3, 277.0);
  ctx.bezierCurveTo(440.4, 289.2, 428.8, 294.6, 434.3, 304.0);
  ctx.bezierCurveTo(437.8, 304.1, 441.5, 299.2, 443.3, 301.0);
  ctx.bezierCurveTo(442.0, 306.0, 441.8, 312.2, 439.3, 316.0);
  ctx.bezierCurveTo(439.1, 311.2, 440.6, 308.0, 441.3, 304.0);
  ctx.bezierCurveTo(438.0, 304.3, 436.9, 306.9, 432.3, 306.0);
  ctx.bezierCurveTo(432.0, 311.0, 429.1, 313.5, 428.3, 318.0);
  ctx.bezierCurveTo(434.8, 318.2, 442.9, 316.8, 445.3, 321.0);
  ctx.bezierCurveTo(445.8, 318.4, 449.2, 310.4, 445.3, 315.0);
  ctx.bezierCurveTo(449.0, 300.3, 453.8, 286.8, 458.3, 273.0);
  ctx.bezierCurveTo(458.3, 271.9, 457.0, 272.2, 457.3, 274.0);
  ctx.bezierCurveTo(453.5, 285.8, 446.3, 294.4, 436.3, 300.0);
  ctx.bezierCurveTo(445.2, 291.2, 453.7, 282.1, 457.3, 268.0);
  ctx.bezierCurveTo(453.7, 269.9, 453.9, 274.7, 452.3, 278.0);
  ctx.bezierCurveTo(447.9, 287.0, 439.9, 294.9, 433.3, 298.0);
  ctx.bezierCurveTo(441.1, 291.1, 446.6, 276.6, 449.3, 268.0);
  ctx.bezierCurveTo(446.4, 271.7, 443.4, 275.4, 438.3, 277.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(405.3, 308.0);
  ctx.bezierCurveTo(405.3, 309.5, 417.5, 304.4, 422.3, 306.0);
  ctx.bezierCurveTo(407.7, 309.6, 391.8, 319.6, 378.3, 318.0);
  ctx.bezierCurveTo(378.8, 316.5, 379.3, 316.4, 378.3, 315.0);
  ctx.bezierCurveTo(371.4, 305.3, 357.1, 296.3, 348.3, 287.0);
  ctx.bezierCurveTo(349.2, 292.1, 353.6, 293.7, 357.3, 296.0);
  ctx.bezierCurveTo(363.9, 306.0, 372.9, 313.7, 378.3, 325.0);
  ctx.bezierCurveTo(379.6, 327.4, 382.0, 323.9, 382.3, 326.0);
  ctx.bezierCurveTo(383.3, 327.9, 379.3, 329.3, 382.3, 330.0);
  ctx.bezierCurveTo(393.1, 322.5, 409.0, 320.0, 426.3, 319.0);
  ctx.bezierCurveTo(431.0, 310.6, 432.3, 301.7, 426.3, 294.0);
  ctx.bezierCurveTo(410.7, 295.7, 397.5, 307.1, 386.3, 307.0);
  ctx.bezierCurveTo(386.3, 305.7, 388.1, 306.1, 388.3, 305.0);
  ctx.bezierCurveTo(383.2, 301.1, 380.7, 294.6, 375.3, 291.0);
  ctx.bezierCurveTo(372.6, 292.6, 370.7, 295.0, 367.3, 296.0);
  ctx.bezierCurveTo(366.4, 293.0, 361.3, 294.0, 362.3, 289.0);
  ctx.bezierCurveTo(362.3, 285.3, 365.8, 285.2, 367.3, 283.0);
  ctx.bezierCurveTo(363.2, 281.1, 362.2, 276.1, 357.3, 275.0);
  ctx.bezierCurveTo(355.8, 279.4, 351.6, 281.3, 350.3, 286.0);
  ctx.bezierCurveTo(361.8, 293.2, 368.2, 305.4, 379.3, 313.0);
  ctx.bezierCurveTo(391.3, 308.6, 405.4, 301.1, 417.3, 300.0);
  ctx.bezierCurveTo(413.8, 301.7, 411.7, 305.6, 406.3, 306.0);
  ctx.bezierCurveTo(409.1, 308.4, 401.7, 304.3, 405.3, 308.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(331.3, 346.0);
  ctx.bezierCurveTo(322.4, 342.2, 314.3, 337.7, 309.3, 330.0);
  ctx.bezierCurveTo(309.2, 339.0, 316.7, 346.9, 311.3, 355.0);
  ctx.bezierCurveTo(314.5, 359.3, 316.6, 368.4, 314.3, 375.0);
  ctx.bezierCurveTo(320.2, 382.8, 323.9, 392.8, 328.3, 402.0);
  ctx.bezierCurveTo(340.9, 405.1, 358.9, 402.8, 372.3, 405.0);
  ctx.bezierCurveTo(359.0, 405.0, 344.6, 409.2, 331.3, 406.0);
  ctx.bezierCurveTo(333.1, 405.8, 336.3, 407.0, 335.3, 404.0);
  ctx.bezierCurveTo(331.5, 404.5, 330.4, 402.2, 326.3, 403.0);
  ctx.bezierCurveTo(320.6, 390.8, 310.7, 380.0, 312.3, 366.0);
  ctx.bezierCurveTo(311.1, 371.8, 309.5, 377.2, 307.3, 382.0);
  ctx.bezierCurveTo(308.3, 383.1, 311.0, 382.3, 310.3, 385.0);
  ctx.bezierCurveTo(310.6, 392.0, 308.7, 405.0, 312.3, 413.0);
  ctx.bezierCurveTo(313.1, 410.5, 316.4, 410.5, 318.3, 409.0);
  ctx.bezierCurveTo(315.5, 399.5, 313.6, 389.0, 310.3, 380.0);
  ctx.bezierCurveTo(317.8, 386.2, 315.6, 402.0, 323.3, 408.0);
  ctx.bezierCurveTo(319.1, 410.2, 325.4, 413.8, 325.3, 418.0);
  ctx.bezierCurveTo(328.6, 418.3, 333.3, 421.2, 334.3, 418.0);
  ctx.bezierCurveTo(333.9, 421.1, 336.5, 421.2, 339.3, 421.0);
  ctx.bezierCurveTo(338.2, 416.8, 338.2, 412.4, 340.3, 409.0);
  ctx.bezierCurveTo(340.3, 413.0, 340.3, 417.0, 340.3, 421.0);
  ctx.bezierCurveTo(347.0, 421.4, 363.1, 424.7, 362.3, 418.0);
  ctx.bezierCurveTo(364.4, 418.3, 364.3, 420.7, 365.3, 422.0);
  ctx.bezierCurveTo(364.1, 426.1, 349.6, 422.3, 350.3, 425.0);
  ctx.bezierCurveTo(352.1, 425.6, 356.2, 423.8, 356.3, 426.0);
  ctx.bezierCurveTo(348.2, 426.0, 346.3, 425.9, 340.3, 424.0);
  ctx.bezierCurveTo(339.8, 429.2, 339.9, 434.9, 338.3, 439.0);
  ctx.bezierCurveTo(337.9, 433.2, 338.7, 428.8, 339.3, 424.0);
  ctx.bezierCurveTo(336.9, 423.0, 337.2, 423.7, 333.3, 423.0);
  ctx.bezierCurveTo(332.8, 424.5, 334.5, 428.2, 332.3, 428.0);
  ctx.bezierCurveTo(332.3, 426.0, 332.3, 424.0, 332.3, 422.0);
  ctx.bezierCurveTo(326.1, 422.2, 323.2, 419.1, 320.3, 416.0);
  ctx.bezierCurveTo(319.9, 417.9, 317.5, 417.8, 318.3, 421.0);
  ctx.bezierCurveTo(318.6, 422.9, 320.0, 420.4, 320.3, 422.0);
  ctx.bezierCurveTo(321.0, 437.0, 326.7, 447.0, 330.3, 459.0);
  ctx.bezierCurveTo(332.6, 455.5, 328.7, 452.1, 332.3, 450.0);
  ctx.bezierCurveTo(332.7, 463.3, 331.3, 472.3, 340.3, 477.0);
  ctx.bezierCurveTo(337.9, 486.4, 355.1, 489.2, 364.3, 487.0);
  ctx.bezierCurveTo(367.1, 476.1, 376.1, 463.2, 376.3, 456.0);
  ctx.bezierCurveTo(378.7, 459.3, 382.2, 447.6, 380.3, 450.0);
  ctx.bezierCurveTo(379.1, 451.5, 379.1, 454.1, 377.3, 455.0);
  ctx.bezierCurveTo(378.2, 450.7, 381.3, 446.2, 383.3, 446.0);
  ctx.bezierCurveTo(385.6, 431.3, 398.1, 418.2, 406.3, 406.0);
  ctx.bezierCurveTo(405.2, 399.6, 407.4, 388.9, 406.3, 382.0);
  ctx.bezierCurveTo(401.6, 382.2, 399.4, 385.1, 395.3, 386.0);
  ctx.bezierCurveTo(396.1, 390.1, 393.8, 391.1, 394.3, 395.0);
  ctx.bezierCurveTo(379.0, 403.4, 377.5, 424.7, 362.3, 430.0);
  ctx.bezierCurveTo(367.8, 420.9, 377.5, 410.5, 380.3, 402.0);
  ctx.bezierCurveTo(380.3, 403.0, 378.6, 403.3, 378.3, 402.0);
  ctx.bezierCurveTo(383.3, 399.3, 390.4, 393.5, 389.3, 388.0);
  ctx.bezierCurveTo(386.7, 390.4, 382.6, 391.3, 378.3, 392.0);
  ctx.bezierCurveTo(375.3, 394.9, 375.2, 400.9, 370.3, 402.0);
  ctx.bezierCurveTo(367.7, 396.3, 371.1, 384.6, 368.3, 379.0);
  ctx.bezierCurveTo(360.7, 383.6, 350.5, 388.0, 339.3, 386.0);
  ctx.bezierCurveTo(340.0, 390.7, 343.4, 397.9, 341.3, 402.0);
  ctx.bezierCurveTo(340.8, 396.5, 337.2, 394.1, 338.3, 387.0);
  ctx.bezierCurveTo(334.7, 383.3, 325.7, 385.0, 322.3, 381.0);
  ctx.bezierCurveTo(337.3, 382.9, 355.2, 384.5, 369.3, 377.0);
  ctx.bezierCurveTo(370.5, 368.8, 370.9, 359.9, 373.3, 353.0);
  ctx.bezierCurveTo(370.1, 352.7, 365.3, 362.5, 366.3, 357.0);
  ctx.bezierCurveTo(358.5, 361.8, 342.0, 362.2, 333.3, 363.0);
  ctx.bezierCurveTo(334.1, 363.2, 335.3, 363.0, 335.3, 364.0);
  ctx.bezierCurveTo(331.8, 363.9, 330.9, 362.1, 329.3, 365.0);
  ctx.bezierCurveTo(326.9, 360.2, 327.9, 358.1, 324.3, 355.0);
  ctx.bezierCurveTo(330.0, 354.0, 320.9, 346.9, 325.3, 344.0);
  ctx.bezierCurveTo(324.1, 349.9, 329.6, 349.1, 331.3, 352.0);
  ctx.bezierCurveTo(329.4, 352.4, 327.0, 352.4, 327.3, 355.0);
  ctx.bezierCurveTo(327.6, 356.4, 328.7, 356.9, 328.3, 359.0);
  ctx.bezierCurveTo(341.5, 362.0, 357.0, 359.2, 366.3, 355.0);
  ctx.bezierCurveTo(366.3, 353.2, 367.2, 346.6, 367.3, 346.0);
  ctx.bezierCurveTo(367.2, 347.4, 363.4, 349.9, 363.3, 348.0);
  ctx.bezierCurveTo(363.1, 340.5, 390.0, 330.6, 374.3, 323.0);
  ctx.bezierCurveTo(373.4, 332.5, 361.0, 337.2, 354.3, 340.0);
  ctx.bezierCurveTo(359.6, 335.6, 367.8, 334.1, 370.3, 327.0);
  ctx.bezierCurveTo(359.1, 331.8, 352.2, 340.8, 336.3, 341.0);
  ctx.bezierCurveTo(338.4, 344.3, 323.7, 339.3, 326.3, 342.0);
  ctx.bezierCurveTo(330.4, 340.9, 328.9, 345.4, 331.3, 346.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(329.3, 351.0);
  ctx.bezierCurveTo(325.4, 347.4, 326.4, 354.8, 329.3, 351.0);
  ctx.lineTo(329.3, 351.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(374.3, 341.0);
  ctx.bezierCurveTo(372.9, 341.7, 368.0, 343.9, 370.3, 345.0);
  ctx.bezierCurveTo(375.5, 341.2, 376.2, 339.7, 376.3, 335.0);
  ctx.bezierCurveTo(375.6, 337.2, 371.6, 338.3, 374.3, 341.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(369.3, 348.0);
  ctx.bezierCurveTo(371.9, 347.9, 375.8, 343.9, 374.3, 343.0);
  ctx.bezierCurveTo(372.8, 344.8, 370.1, 345.5, 369.3, 348.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(369.3, 351.0);
  ctx.bezierCurveTo(371.6, 351.2, 375.1, 347.6, 373.3, 347.0);
  ctx.bezierCurveTo(372.4, 348.8, 369.6, 348.7, 369.3, 351.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(448.3, 277.0);
  ctx.bezierCurveTo(448.7, 276.4, 452.6, 271.8, 450.3, 272.0);
  ctx.bezierCurveTo(448.9, 274.9, 446.1, 280.3, 448.3, 277.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(431.3, 286.0);
  ctx.bezierCurveTo(431.3, 288.7, 431.3, 291.3, 431.3, 294.0);
  ctx.bezierCurveTo(435.5, 293.3, 437.6, 280.6, 435.3, 280.0);
  ctx.bezierCurveTo(435.1, 281.5, 435.7, 283.7, 434.3, 284.0);
  ctx.bezierCurveTo(434.0, 280.7, 433.3, 277.7, 431.3, 276.0);
  ctx.bezierCurveTo(428.8, 277.8, 436.5, 290.8, 431.3, 286.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(290.3, 297.0);
  ctx.bezierCurveTo(290.3, 297.7, 290.3, 298.3, 290.3, 299.0);
  ctx.bezierCurveTo(292.4, 302.3, 294.1, 295.1, 295.3, 298.0);
  ctx.bezierCurveTo(294.3, 299.4, 290.4, 303.0, 292.3, 304.0);
  ctx.bezierCurveTo(293.3, 302.7, 294.0, 301.0, 295.3, 300.0);
  ctx.bezierCurveTo(296.2, 302.3, 291.8, 304.3, 294.3, 305.0);
  ctx.bezierCurveTo(295.3, 303.7, 296.0, 302.0, 297.3, 301.0);
  ctx.bezierCurveTo(298.7, 303.3, 294.7, 304.8, 297.3, 305.0);
  ctx.bezierCurveTo(300.5, 303.3, 298.5, 299.1, 298.3, 295.0);
  ctx.bezierCurveTo(298.1, 290.3, 299.3, 281.9, 294.3, 282.0);
  ctx.bezierCurveTo(295.8, 285.2, 294.8, 290.8, 296.3, 294.0);
  ctx.bezierCurveTo(292.4, 293.4, 293.8, 298.1, 291.3, 299.0);
  ctx.bezierCurveTo(290.9, 297.3, 292.8, 296.4, 291.3, 296.0);
  ctx.bezierCurveTo(291.3, 296.6, 291.2, 297.2, 290.3, 297.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(365.3, 290.0);
  ctx.bezierCurveTo(366.4, 290.2, 366.9, 291.1, 367.3, 292.0);
  ctx.bezierCurveTo(370.7, 292.0, 372.6, 290.6, 374.3, 289.0);
  ctx.bezierCurveTo(372.5, 286.0, 365.5, 284.1, 365.3, 290.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(370.3, 323.0);
  ctx.bezierCurveTo(374.0, 324.0, 374.3, 318.1, 371.3, 318.0);
  ctx.bezierCurveTo(370.8, 320.1, 368.5, 321.2, 370.3, 323.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(427.3, 320.0);
  ctx.bezierCurveTo(419.6, 319.2, 406.6, 324.1, 396.3, 326.0);
  ctx.bezierCurveTo(389.6, 327.3, 381.4, 330.9, 379.3, 334.0);
  ctx.bezierCurveTo(378.0, 336.0, 375.4, 348.6, 378.3, 348.0);
  ctx.bezierCurveTo(378.1, 349.4, 376.7, 349.7, 376.3, 351.0);
  ctx.bezierCurveTo(381.5, 348.9, 387.3, 347.3, 390.3, 343.0);
  ctx.bezierCurveTo(387.4, 342.2, 390.9, 339.8, 390.3, 338.0);
  ctx.bezierCurveTo(399.0, 333.0, 407.5, 327.8, 416.3, 323.0);
  ctx.bezierCurveTo(418.5, 322.5, 422.8, 320.6, 423.3, 324.0);
  ctx.bezierCurveTo(422.6, 323.2, 417.4, 321.4, 418.3, 325.0);
  ctx.bezierCurveTo(424.2, 324.4, 422.8, 327.6, 426.3, 325.0);
  ctx.bezierCurveTo(423.8, 324.0, 429.8, 323.3, 429.3, 321.0);
  ctx.bezierCurveTo(427.0, 320.1, 425.0, 324.5, 424.3, 322.0);
  ctx.bezierCurveTo(424.3, 320.3, 427.1, 321.4, 427.3, 320.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(431.3, 322.0);
  ctx.bezierCurveTo(431.3, 320.3, 434.1, 321.4, 434.3, 320.0);
  ctx.bezierCurveTo(432.3, 319.1, 428.1, 320.9, 431.3, 322.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(431.3, 356.0);
  ctx.bezierCurveTo(433.3, 350.8, 435.6, 344.3, 438.3, 338.0);
  ctx.bezierCurveTo(440.4, 333.1, 447.2, 325.3, 441.3, 322.0);
  ctx.bezierCurveTo(438.0, 332.7, 430.2, 344.2, 431.3, 356.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(378.3, 360.0);
  ctx.bezierCurveTo(379.0, 363.7, 377.0, 370.0, 379.3, 372.0);
  ctx.bezierCurveTo(382.3, 369.7, 386.0, 368.0, 389.3, 366.0);
  ctx.bezierCurveTo(390.7, 356.0, 400.5, 354.5, 407.3, 350.0);
  ctx.bezierCurveTo(407.8, 344.2, 411.9, 341.9, 413.3, 337.0);
  ctx.bezierCurveTo(407.3, 339.0, 401.6, 341.3, 396.3, 344.0);
  ctx.bezierCurveTo(395.6, 347.1, 397.3, 347.6, 397.3, 350.0);
  ctx.bezierCurveTo(390.5, 352.8, 386.1, 358.1, 378.3, 360.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(395.3, 348.0);
  ctx.bezierCurveTo(396.9, 344.4, 391.9, 347.4, 392.3, 345.0);
  ctx.bezierCurveTo(398.3, 336.0, 416.9, 339.6, 417.3, 325.0);
  ctx.bezierCurveTo(407.7, 329.0, 399.6, 334.7, 391.3, 340.0);
  ctx.bezierCurveTo(391.3, 342.0, 391.3, 344.0, 391.3, 346.0);
  ctx.bezierCurveTo(388.3, 347.9, 386.9, 351.3, 383.3, 353.0);
  ctx.bezierCurveTo(382.1, 353.6, 378.6, 351.3, 379.3, 355.0);
  ctx.bezierCurveTo(383.1, 358.5, 392.9, 352.3, 395.3, 348.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(427.3, 331.0);
  ctx.bezierCurveTo(426.2, 330.8, 425.8, 329.9, 425.3, 329.0);
  ctx.bezierCurveTo(426.7, 329.0, 427.5, 329.5, 428.3, 330.0);
  ctx.bezierCurveTo(428.1, 328.5, 428.7, 326.3, 427.3, 326.0);
  ctx.bezierCurveTo(425.5, 328.2, 422.0, 328.6, 420.3, 331.0);
  ctx.bezierCurveTo(423.0, 327.9, 428.9, 333.5, 427.3, 331.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(434.3, 327.0);
  ctx.bezierCurveTo(427.2, 332.1, 436.4, 325.5, 434.3, 327.0);
  ctx.lineTo(434.3, 327.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(432.3, 336.0);
  ctx.bezierCurveTo(432.3, 334.2, 437.4, 332.6, 434.3, 331.0);
  ctx.bezierCurveTo(434.5, 333.0, 430.1, 335.3, 432.3, 336.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(414.3, 335.0);
  ctx.bezierCurveTo(415.3, 342.3, 409.9, 343.2, 409.3, 349.0);
  ctx.bezierCurveTo(411.9, 347.7, 415.2, 353.0, 415.3, 353.0);
  ctx.bezierCurveTo(418.3, 352.7, 418.1, 348.3, 418.3, 348.0);
  ctx.bezierCurveTo(418.5, 347.8, 421.3, 347.0, 421.3, 347.0);
  ctx.bezierCurveTo(422.4, 342.4, 420.0, 338.0, 418.3, 334.0);
  ctx.bezierCurveTo(418.9, 334.0, 419.5, 333.2, 418.3, 333.0);
  ctx.bezierCurveTo(417.7, 334.3, 416.2, 334.9, 414.3, 335.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(421.3, 351.0);
  ctx.bezierCurveTo(423.5, 346.4, 428.6, 351.7, 430.3, 350.0);
  ctx.bezierCurveTo(430.4, 343.6, 430.2, 337.5, 426.3, 335.0);
  ctx.bezierCurveTo(423.0, 338.7, 422.8, 343.2, 425.3, 347.0);
  ctx.bezierCurveTo(423.0, 346.8, 419.5, 350.4, 421.3, 351.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(431.3, 337.0);
  ctx.bezierCurveTo(431.9, 338.5, 430.1, 342.2, 432.3, 342.0);
  ctx.bezierCurveTo(431.9, 339.8, 435.4, 336.6, 433.3, 336.0);
  ctx.bezierCurveTo(433.1, 336.8, 432.5, 337.2, 431.3, 337.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(324.3, 338.0);
  ctx.bezierCurveTo(324.8, 338.0, 322.2, 337.2, 324.3, 338.0);
  ctx.lineTo(324.3, 338.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(412.3, 353.0);
  ctx.bezierCurveTo(406.9, 351.4, 397.6, 359.4, 396.3, 362.0);
  ctx.bezierCurveTo(399.3, 359.6, 402.7, 357.8, 406.3, 356.0);
  ctx.bezierCurveTo(406.6, 358.3, 403.4, 357.1, 403.3, 359.0);
  ctx.bezierCurveTo(407.9, 358.6, 411.6, 357.3, 412.3, 353.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(372.3, 376.0);
  ctx.bezierCurveTo(372.3, 378.0, 372.3, 380.0, 372.3, 382.0);
  ctx.bezierCurveTo(378.7, 382.0, 383.8, 375.5, 388.3, 377.0);
  ctx.bezierCurveTo(382.6, 378.9, 378.7, 382.7, 372.3, 384.0);
  ctx.bezierCurveTo(373.7, 389.4, 369.4, 394.4, 372.3, 398.0);
  ctx.bezierCurveTo(373.5, 394.2, 375.7, 391.4, 378.3, 389.0);
  ctx.bezierCurveTo(391.7, 387.0, 400.1, 380.1, 412.3, 377.0);
  ctx.bezierCurveTo(414.4, 371.3, 408.1, 368.6, 410.3, 366.0);
  ctx.bezierCurveTo(412.9, 367.8, 414.4, 370.6, 414.3, 375.0);
  ctx.bezierCurveTo(420.1, 374.8, 421.8, 370.5, 428.3, 371.0);
  ctx.bezierCurveTo(429.2, 367.8, 427.4, 367.2, 426.3, 366.0);
  ctx.bezierCurveTo(426.2, 364.2, 429.6, 353.5, 425.3, 351.0);
  ctx.bezierCurveTo(421.0, 353.4, 417.1, 356.1, 412.3, 358.0);
  ctx.bezierCurveTo(411.5, 361.5, 410.9, 365.3, 407.3, 366.0);
  ctx.bezierCurveTo(407.9, 363.9, 411.5, 359.6, 409.3, 358.0);
  ctx.bezierCurveTo(403.6, 360.3, 396.1, 366.0, 392.3, 367.0);
  ctx.bezierCurveTo(393.2, 366.4, 396.8, 362.9, 394.3, 365.0);
  ctx.bezierCurveTo(387.0, 369.9, 381.7, 375.5, 372.3, 376.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(429.3, 355.0);
  ctx.bezierCurveTo(429.6, 353.6, 428.7, 351.1, 428.3, 353.0);
  ctx.bezierCurveTo(428.0, 354.4, 428.9, 356.9, 429.3, 355.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(375.3, 373.0);
  ctx.bezierCurveTo(371.1, 370.7, 375.9, 360.6, 377.3, 355.0);
  ctx.bezierCurveTo(376.0, 354.9, 375.9, 353.7, 374.3, 354.0);
  ctx.bezierCurveTo(375.4, 359.0, 367.9, 371.5, 375.3, 373.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(377.3, 370.0);
  ctx.bezierCurveTo(377.5, 369.3, 377.0, 364.2, 376.3, 367.0);
  ctx.bezierCurveTo(375.4, 370.8, 376.9, 372.0, 377.3, 370.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(444.3, 395.0);
  ctx.bezierCurveTo(429.9, 389.1, 418.8, 400.6, 413.3, 410.0);
  ctx.bezierCurveTo(414.1, 413.6, 415.9, 416.1, 418.3, 418.0);
  ctx.bezierCurveTo(422.3, 412.3, 429.5, 409.8, 435.3, 406.0);
  ctx.bezierCurveTo(435.2, 409.5, 443.0, 405.5, 445.3, 405.0);
  ctx.bezierCurveTo(442.7, 404.0, 442.6, 397.2, 444.3, 395.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(444.3, 394.0);
  ctx.bezierCurveTo(441.6, 384.2, 440.4, 375.3, 435.3, 370.0);
  ctx.bezierCurveTo(433.0, 370.4, 434.0, 374.0, 432.3, 375.0);
  ctx.bezierCurveTo(425.8, 368.4, 414.7, 378.9, 407.3, 381.0);
  ctx.bezierCurveTo(411.2, 389.7, 403.1, 406.2, 412.3, 408.0);
  ctx.bezierCurveTo(416.5, 397.8, 427.4, 394.4, 437.3, 390.0);
  ctx.bezierCurveTo(439.8, 391.2, 440.7, 394.0, 444.3, 394.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(299.3, 441.0);
  ctx.bezierCurveTo(303.1, 431.4, 313.4, 428.4, 315.3, 417.0);
  ctx.bezierCurveTo(313.8, 414.6, 311.1, 416.0, 310.3, 415.0);
  ctx.bezierCurveTo(306.4, 412.3, 310.5, 401.5, 306.3, 399.0);
  ctx.bezierCurveTo(302.6, 406.0, 300.1, 419.5, 300.3, 427.0);
  ctx.bezierCurveTo(300.5, 426.2, 300.3, 425.0, 301.3, 425.0);
  ctx.bezierCurveTo(299.9, 429.0, 297.5, 437.2, 299.3, 441.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(447.3, 402.0);
  ctx.bezierCurveTo(447.6, 400.6, 446.7, 398.1, 446.3, 400.0);
  ctx.bezierCurveTo(446.0, 401.4, 446.9, 403.9, 447.3, 402.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(425.3, 441.0);
  ctx.bezierCurveTo(423.0, 440.7, 421.6, 441.2, 421.3, 443.0);
  ctx.bezierCurveTo(423.9, 442.9, 426.1, 442.4, 427.3, 441.0);
  ctx.bezierCurveTo(420.2, 438.1, 429.2, 437.4, 428.3, 439.0);
  ctx.bezierCurveTo(431.8, 433.0, 426.1, 420.5, 436.3, 417.0);
  ctx.bezierCurveTo(441.0, 415.4, 441.4, 418.7, 449.3, 417.0);
  ctx.bezierCurveTo(449.6, 411.7, 444.6, 411.7, 443.3, 408.0);
  ctx.bezierCurveTo(426.4, 409.1, 419.8, 420.5, 419.3, 438.0);
  ctx.bezierCurveTo(420.4, 439.9, 423.9, 439.4, 425.3, 441.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(417.3, 440.0);
  ctx.bezierCurveTo(412.2, 431.8, 420.9, 416.5, 411.3, 416.0);
  ctx.bezierCurveTo(409.9, 413.8, 410.6, 409.4, 407.3, 409.0);
  ctx.bezierCurveTo(407.7, 414.3, 403.3, 408.5, 404.3, 414.0);
  ctx.bezierCurveTo(401.4, 415.4, 400.3, 418.6, 397.3, 420.0);
  ctx.bezierCurveTo(393.5, 433.2, 383.3, 445.3, 381.3, 457.0);
  ctx.bezierCurveTo(382.6, 455.3, 383.4, 453.1, 386.3, 453.0);
  ctx.bezierCurveTo(383.9, 458.4, 377.1, 464.2, 378.3, 470.0);
  ctx.bezierCurveTo(376.9, 469.6, 376.6, 468.8, 375.3, 470.0);
  ctx.bezierCurveTo(377.5, 472.7, 369.4, 476.7, 372.3, 482.0);
  ctx.bezierCurveTo(374.0, 480.1, 374.5, 476.5, 376.3, 480.0);
  ctx.bezierCurveTo(384.6, 467.1, 383.4, 464.9, 394.3, 453.0);
  ctx.bezierCurveTo(395.3, 456.2, 402.7, 449.7, 405.3, 448.0);
  ctx.bezierCurveTo(399.2, 448.0, 394.4, 454.4, 389.3, 452.0);
  ctx.bezierCurveTo(398.5, 447.8, 409.3, 445.3, 417.3, 440.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(451.3, 423.0);
  ctx.bezierCurveTo(450.5, 421.9, 451.2, 419.3, 449.3, 419.0);
  ctx.bezierCurveTo(446.1, 422.4, 443.9, 417.7, 437.3, 419.0);
  ctx.bezierCurveTo(425.4, 431.9, 435.1, 456.6, 452.3, 458.0);
  ctx.bezierCurveTo(452.1, 453.9, 444.0, 449.0, 440.3, 445.0);
  ctx.bezierCurveTo(438.0, 438.4, 437.8, 428.7, 441.3, 423.0);
  ctx.bezierCurveTo(441.1, 427.2, 442.9, 423.0, 444.3, 423.0);
  ctx.bezierCurveTo(439.1, 438.4, 449.3, 457.4, 463.3, 457.0);
  ctx.bezierCurveTo(466.7, 454.7, 465.9, 446.3, 464.3, 441.0);
  ctx.bezierCurveTo(460.3, 458.9, 440.3, 433.4, 450.3, 427.0);
  ctx.bezierCurveTo(461.7, 429.1, 455.0, 427.9, 451.3, 423.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(316.3, 425.0);
  ctx.bezierCurveTo(313.7, 425.1, 309.8, 429.1, 311.3, 430.0);
  ctx.bezierCurveTo(312.0, 427.4, 315.9, 427.9, 316.3, 425.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(317.3, 428.0);
  ctx.bezierCurveTo(317.1, 427.2, 316.5, 426.8, 315.3, 427.0);
  ctx.bezierCurveTo(310.1, 431.8, 303.6, 435.3, 301.3, 443.0);
  ctx.bezierCurveTo(309.2, 443.8, 315.6, 446.1, 321.3, 449.0);
  ctx.bezierCurveTo(320.7, 441.3, 316.7, 437.0, 317.3, 428.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(460.3, 444.0);
  ctx.bezierCurveTo(463.5, 437.2, 458.6, 430.6, 453.3, 429.0);
  ctx.bezierCurveTo(449.1, 435.7, 454.1, 442.1, 460.3, 444.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(467.3, 451.0);
  ctx.bezierCurveTo(467.0, 448.6, 468.2, 439.6, 466.3, 442.0);
  ctx.bezierCurveTo(466.6, 444.4, 465.5, 453.4, 467.3, 451.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(413.3, 446.0);
  ctx.bezierCurveTo(414.6, 444.6, 418.2, 445.6, 418.3, 443.0);
  ctx.bezierCurveTo(416.5, 443.3, 411.3, 445.2, 413.3, 446.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(433.3, 448.0);
  ctx.bezierCurveTo(431.8, 446.4, 428.1, 444.5, 428.3, 449.0);
  ctx.bezierCurveTo(430.2, 449.2, 430.5, 447.9, 432.3, 448.0);
  ctx.bezierCurveTo(432.3, 448.6, 433.1, 449.1, 433.3, 448.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(299.3, 450.0);
  ctx.bezierCurveTo(292.2, 447.9, 291.9, 457.6, 291.3, 463.0);
  ctx.bezierCurveTo(296.8, 463.8, 296.8, 464.3, 300.3, 467.0);
  ctx.bezierCurveTo(307.8, 472.9, 321.0, 479.5, 326.3, 486.0);
  ctx.bezierCurveTo(328.5, 488.6, 328.5, 492.4, 330.3, 495.0);
  ctx.bezierCurveTo(332.3, 498.0, 340.5, 507.6, 342.3, 509.0);
  ctx.bezierCurveTo(351.2, 515.6, 358.8, 504.5, 365.3, 508.0);
  ctx.bezierCurveTo(368.0, 504.2, 366.2, 501.7, 366.3, 496.0);
  ctx.bezierCurveTo(360.9, 490.6, 350.8, 494.1, 344.3, 491.0);
  ctx.bezierCurveTo(338.5, 488.2, 336.7, 481.8, 334.3, 476.0);
  ctx.bezierCurveTo(321.4, 467.9, 312.1, 450.8, 297.3, 448.0);
  ctx.bezierCurveTo(298.4, 448.2, 298.9, 449.1, 299.3, 450.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(319.3, 451.0);
  ctx.bezierCurveTo(312.8, 452.1, 308.8, 445.5, 304.3, 448.0);
  ctx.bezierCurveTo(309.4, 451.9, 316.2, 454.1, 320.3, 459.0);
  ctx.bezierCurveTo(320.5, 458.2, 321.2, 457.8, 322.3, 458.0);
  ctx.bezierCurveTo(321.9, 461.0, 327.2, 471.6, 331.3, 470.0);
  ctx.bezierCurveTo(327.2, 465.5, 326.7, 452.0, 320.3, 453.0);
  ctx.bezierCurveTo(321.1, 453.1, 323.3, 456.3, 321.3, 456.0);
  ctx.bezierCurveTo(319.8, 455.2, 319.9, 452.8, 319.3, 451.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(456.3, 462.0);
  ctx.bezierCurveTo(451.4, 459.7, 444.6, 459.7, 441.3, 460.0);
  ctx.bezierCurveTo(444.4, 460.3, 445.8, 467.4, 448.3, 465.0);
  ctx.bezierCurveTo(447.5, 464.9, 445.3, 461.7, 447.3, 462.0);
  ctx.bezierCurveTo(449.1, 463.6, 452.3, 468.9, 454.3, 467.0);
  ctx.bezierCurveTo(453.7, 466.1, 450.2, 463.3, 452.3, 463.0);
  ctx.bezierCurveTo(451.9, 464.7, 456.0, 462.9, 456.3, 462.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(285.3, 479.0);
  ctx.bezierCurveTo(305.1, 483.9, 311.4, 502.3, 327.3, 511.0);
  ctx.bezierCurveTo(331.3, 510.4, 338.0, 512.3, 340.3, 510.0);
  ctx.bezierCurveTo(327.8, 490.9, 311.7, 475.3, 289.3, 466.0);
  ctx.bezierCurveTo(288.8, 467.2, 288.3, 468.3, 287.3, 469.0);
  ctx.bezierCurveTo(285.9, 468.4, 287.2, 465.2, 285.3, 465.0);
  ctx.bezierCurveTo(286.4, 467.6, 282.3, 469.8, 285.3, 471.0);
  ctx.bezierCurveTo(285.5, 469.8, 285.1, 468.2, 286.3, 468.0);
  ctx.bezierCurveTo(289.1, 471.5, 284.4, 474.2, 285.3, 479.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(453.3, 472.0);
  ctx.bezierCurveTo(453.6, 467.7, 448.7, 469.4, 448.3, 470.0);
  ctx.bezierCurveTo(450.2, 470.4, 450.1, 472.9, 453.3, 472.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(457.3, 470.0);
  ctx.bezierCurveTo(452.5, 467.2, 454.9, 473.3, 457.3, 470.0);
  ctx.lineTo(457.3, 470.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(279.3, 488.0);
  ctx.bezierCurveTo(279.3, 486.2, 282.0, 482.2, 279.3, 481.0);
  ctx.bezierCurveTo(280.1, 483.6, 276.3, 486.5, 279.3, 488.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(284.3, 503.0);
  ctx.bezierCurveTo(289.7, 503.9, 292.6, 507.4, 297.3, 509.0);
  ctx.bezierCurveTo(300.1, 508.1, 301.4, 505.8, 305.3, 506.0);
  ctx.bezierCurveTo(302.7, 496.1, 288.4, 490.9, 284.3, 503.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(293.3, 527.0);
  ctx.bezierCurveTo(289.2, 545.3, 270.6, 571.8, 290.3, 585.0);
  ctx.bezierCurveTo(294.1, 579.7, 294.7, 575.6, 296.3, 568.0);
  ctx.bezierCurveTo(298.1, 559.4, 301.6, 549.0, 303.3, 540.0);
  ctx.bezierCurveTo(305.1, 530.7, 304.6, 519.2, 308.3, 514.0);
  ctx.bezierCurveTo(308.0, 514.4, 308.8, 516.3, 309.3, 516.0);
  ctx.bezierCurveTo(310.1, 511.1, 311.9, 507.3, 313.3, 503.0);
  ctx.bezierCurveTo(303.5, 496.1, 298.8, 484.2, 285.3, 481.0);
  ctx.bezierCurveTo(284.4, 483.4, 283.0, 485.3, 283.3, 489.0);
  ctx.bezierCurveTo(286.6, 488.4, 288.0, 489.7, 290.3, 490.0);
  ctx.bezierCurveTo(290.2, 487.5, 290.8, 485.8, 292.3, 485.0);
  ctx.bezierCurveTo(292.3, 487.0, 292.3, 489.0, 292.3, 491.0);
  ctx.bezierCurveTo(295.9, 492.6, 292.9, 487.6, 295.3, 488.0);
  ctx.bezierCurveTo(295.3, 490.0, 295.3, 492.0, 295.3, 494.0);
  ctx.bezierCurveTo(302.5, 495.2, 303.2, 502.8, 308.3, 506.0);
  ctx.bezierCurveTo(306.5, 506.3, 300.7, 510.6, 303.3, 509.0);
  ctx.bezierCurveTo(306.4, 509.3, 307.2, 505.8, 309.3, 508.0);
  ctx.bezierCurveTo(303.5, 514.5, 293.4, 519.9, 294.3, 530.0);
  ctx.bezierCurveTo(294.2, 528.8, 294.5, 527.2, 293.3, 527.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(375.3, 492.0);
  ctx.bezierCurveTo(375.6, 490.6, 374.7, 488.1, 374.3, 490.0);
  ctx.bezierCurveTo(374.0, 491.4, 374.9, 493.9, 375.3, 492.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(284.3, 491.0);
  ctx.bezierCurveTo(284.1, 489.8, 283.2, 490.4, 282.3, 491.0);
  ctx.bezierCurveTo(282.0, 495.4, 295.1, 489.5, 284.3, 491.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(481.3, 490.0);
  ctx.bezierCurveTo(482.5, 496.1, 486.1, 492.5, 481.3, 490.0);
  ctx.lineTo(481.3, 490.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(279.3, 492.0);
  ctx.bezierCurveTo(276.6, 492.7, 284.6, 490.7, 279.3, 492.0);
  ctx.lineTo(279.3, 492.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(275.3, 495.0);
  ctx.bezierCurveTo(274.7, 494.9, 274.1, 494.9, 274.3, 494.0);
  ctx.bezierCurveTo(275.5, 493.8, 277.2, 494.2, 277.3, 493.0);
  ctx.bezierCurveTo(275.1, 490.9, 271.9, 493.5, 270.3, 495.0);
  ctx.bezierCurveTo(272.3, 496.7, 271.6, 494.9, 274.3, 495.0);
  ctx.bezierCurveTo(274.3, 495.6, 275.1, 496.1, 275.3, 495.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(281.3, 496.0);
  ctx.bezierCurveTo(283.8, 496.1, 286.2, 496.2, 286.3, 494.0);
  ctx.bezierCurveTo(283.8, 493.9, 281.5, 493.8, 281.3, 496.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(486.3, 509.0);
  ctx.bezierCurveTo(485.8, 508.1, 483.9, 502.1, 485.3, 507.0);
  ctx.bezierCurveTo(489.3, 520.7, 493.0, 534.7, 499.3, 546.0);
  ctx.bezierCurveTo(497.8, 533.5, 490.6, 516.5, 486.3, 509.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(281.3, 506.0);
  ctx.bezierCurveTo(281.9, 513.0, 279.9, 535.4, 277.3, 527.0);
  ctx.bezierCurveTo(278.9, 541.2, 268.5, 558.8, 278.3, 566.0);
  ctx.bezierCurveTo(285.7, 552.0, 287.0, 527.8, 295.3, 518.0);
  ctx.bezierCurveTo(292.3, 512.4, 290.9, 505.1, 281.3, 506.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(476.3, 514.0);
  ctx.bezierCurveTo(476.5, 512.8, 476.1, 511.2, 477.3, 511.0);
  ctx.bezierCurveTo(477.4, 512.7, 476.8, 520.1, 478.3, 517.0);
  ctx.bezierCurveTo(477.7, 514.0, 479.6, 508.4, 477.3, 507.0);
  ctx.bezierCurveTo(478.7, 510.5, 472.8, 511.7, 476.3, 514.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(488.3, 544.0);
  ctx.bezierCurveTo(488.1, 543.6, 489.3, 542.7, 489.3, 544.0);
  ctx.bezierCurveTo(490.5, 555.4, 495.1, 565.7, 498.3, 575.0);
  ctx.bezierCurveTo(498.7, 576.2, 496.6, 580.2, 500.3, 580.0);
  ctx.bezierCurveTo(499.3, 573.1, 497.3, 568.7, 497.3, 563.0);
  ctx.bezierCurveTo(497.1, 563.8, 497.3, 565.0, 496.3, 565.0);
  ctx.bezierCurveTo(497.7, 552.1, 488.2, 537.7, 485.3, 523.0);
  ctx.bezierCurveTo(483.9, 526.5, 488.1, 529.4, 485.3, 531.0);
  ctx.bezierCurveTo(483.2, 527.2, 486.1, 522.4, 484.3, 520.0);
  ctx.bezierCurveTo(482.6, 520.6, 484.4, 524.7, 482.3, 525.0);
  ctx.bezierCurveTo(482.4, 518.9, 482.9, 512.4, 479.3, 510.0);
  ctx.bezierCurveTo(481.7, 521.8, 482.8, 536.2, 488.3, 544.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(343.3, 515.0);
  ctx.bezierCurveTo(340.6, 537.8, 329.1, 556.5, 328.3, 578.0);
  ctx.bezierCurveTo(339.8, 576.5, 343.6, 562.8, 347.3, 552.0);
  ctx.bezierCurveTo(351.2, 540.8, 354.8, 525.4, 356.3, 515.0);
  ctx.bezierCurveTo(356.3, 514.4, 356.2, 513.8, 355.3, 514.0);
  ctx.bezierCurveTo(353.3, 516.3, 347.0, 514.4, 343.3, 515.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(405.3, 556.0);
  ctx.bezierCurveTo(414.2, 567.6, 421.0, 577.5, 431.3, 586.0);
  ctx.bezierCurveTo(428.5, 573.8, 418.9, 562.8, 412.3, 555.0);
  ctx.bezierCurveTo(404.7, 546.0, 401.9, 535.1, 391.3, 531.0);
  ctx.bezierCurveTo(394.7, 539.5, 403.4, 547.3, 405.3, 554.0);
  ctx.bezierCurveTo(405.3, 551.6, 410.8, 557.0, 408.3, 557.0);
  ctx.bezierCurveTo(408.6, 555.8, 405.4, 553.6, 405.3, 556.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(278.3, 580.0);
  ctx.bezierCurveTo(278.6, 578.6, 277.7, 576.1, 277.3, 578.0);
  ctx.bezierCurveTo(277.0, 579.4, 277.9, 581.9, 278.3, 580.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(281.3, 587.0);
  ctx.bezierCurveTo(280.4, 583.6, 284.4, 580.2, 281.3, 578.0);
  ctx.bezierCurveTo(280.9, 580.0, 278.8, 585.4, 281.3, 587.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(255.3, 333.0);
  ctx.bezierCurveTo(252.8, 332.8, 252.2, 334.5, 251.3, 336.0);
  ctx.bezierCurveTo(253.8, 336.2, 254.4, 334.5, 255.3, 333.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(178.3, 363.0);
  ctx.bezierCurveTo(178.8, 366.1, 175.2, 365.3, 176.3, 369.0);
  ctx.bezierCurveTo(183.0, 364.7, 182.1, 376.9, 188.3, 373.0);
  ctx.bezierCurveTo(185.7, 369.0, 181.9, 366.1, 178.3, 363.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(186.3, 378.0);
  ctx.bezierCurveTo(191.9, 376.6, 194.5, 381.8, 197.3, 380.0);
  ctx.bezierCurveTo(195.1, 376.9, 192.4, 374.3, 188.3, 373.0);
  ctx.bezierCurveTo(187.9, 374.9, 186.2, 375.5, 186.3, 378.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(191.3, 374.0);
  ctx.bezierCurveTo(194.9, 373.5, 193.8, 377.5, 197.3, 377.0);
  ctx.bezierCurveTo(196.8, 374.4, 192.4, 370.0, 191.3, 374.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(230.3, 354.0);
  ctx.bezierCurveTo(231.6, 352.7, 230.9, 351.0, 229.3, 350.0);
  ctx.bezierCurveTo(229.5, 351.5, 229.0, 353.7, 230.3, 354.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(183.3, 387.0);
  ctx.bezierCurveTo(182.6, 390.7, 181.6, 394.6, 183.3, 398.0);
  ctx.bezierCurveTo(191.0, 396.4, 191.4, 387.4, 194.3, 381.0);
  ctx.bezierCurveTo(189.5, 378.1, 184.5, 379.6, 184.3, 386.0);
  ctx.bezierCurveTo(186.7, 384.6, 192.8, 385.0, 190.3, 388.0);
  ctx.bezierCurveTo(189.0, 386.6, 186.0, 387.0, 183.3, 387.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(461.3, 223.0);
  ctx.bezierCurveTo(466.2, 222.9, 471.9, 223.5, 475.3, 222.0);
  ctx.bezierCurveTo(477.7, 222.0, 480.0, 222.0, 482.3, 222.0);
  ctx.bezierCurveTo(486.8, 219.4, 465.0, 222.7, 464.3, 220.0);
  ctx.bezierCurveTo(464.9, 220.0, 465.5, 219.2, 464.3, 219.0);
  ctx.bezierCurveTo(461.8, 220.9, 463.9, 221.1, 461.3, 223.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(493.3, 220.0);
  ctx.bezierCurveTo(491.2, 220.6, 486.7, 218.8, 486.3, 221.0);
  ctx.bezierCurveTo(488.4, 220.4, 492.9, 222.2, 493.3, 220.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(344.3, 247.0);
  ctx.bezierCurveTo(345.3, 248.9, 341.3, 250.3, 344.3, 251.0);
  ctx.bezierCurveTo(345.2, 249.2, 347.7, 247.9, 344.3, 247.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(346.3, 242.0);
  ctx.bezierCurveTo(347.5, 239.1, 346.2, 234.7, 344.3, 232.0);
  ctx.bezierCurveTo(344.8, 235.5, 344.8, 239.6, 346.3, 242.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(382.3, 317.0);
  ctx.bezierCurveTo(384.8, 313.3, 394.9, 311.6, 393.3, 312.0);
  ctx.bezierCurveTo(392.5, 311.8, 391.3, 312.0, 391.3, 311.0);
  ctx.bezierCurveTo(391.9, 311.0, 392.5, 310.2, 391.3, 310.0);
  ctx.bezierCurveTo(389.3, 312.7, 380.2, 313.5, 382.3, 317.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(142.3, 8.0);
  ctx.bezierCurveTo(292.3, 8.0, 442.3, 8.0, 592.3, 8.0);
  ctx.bezierCurveTo(592.3, 203.0, 592.3, 398.0, 592.3, 593.0);
  ctx.bezierCurveTo(442.0, 593.0, 291.7, 593.0, 141.3, 593.0);
  ctx.bezierCurveTo(141.3, 399.0, 141.3, 205.0, 141.3, 11.0);
  ctx.bezierCurveTo(141.2, 9.6, 141.2, 8.2, 142.3, 8.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(392.3, 76.0);
  ctx.bezierCurveTo(386.0, 78.6, 378.4, 80.0, 373.3, 84.0);
  ctx.bezierCurveTo(372.7, 82.6, 369.5, 83.8, 369.3, 82.0);
  ctx.bezierCurveTo(371.1, 78.4, 376.8, 73.5, 376.3, 71.0);
  ctx.bezierCurveTo(371.3, 73.7, 370.5, 80.5, 365.3, 83.0);
  ctx.bezierCurveTo(359.7, 82.3, 354.9, 81.3, 349.3, 84.0);
  ctx.bezierCurveTo(349.5, 82.1, 348.2, 81.8, 348.3, 80.0);
  ctx.bezierCurveTo(344.5, 79.8, 341.0, 80.1, 339.3, 82.0);
  ctx.bezierCurveTo(342.1, 84.7, 343.4, 80.2, 347.3, 81.0);
  ctx.bezierCurveTo(348.3, 88.4, 354.6, 98.8, 351.3, 104.0);
  ctx.bezierCurveTo(355.4, 105.6, 365.6, 101.8, 369.3, 106.0);
  ctx.bezierCurveTo(371.6, 96.7, 374.7, 88.0, 379.3, 81.0);
  ctx.bezierCurveTo(385.1, 84.3, 392.1, 84.6, 394.3, 92.0);
  ctx.bezierCurveTo(397.0, 100.8, 392.3, 113.7, 392.3, 123.0);
  ctx.bezierCurveTo(399.3, 131.4, 397.6, 142.4, 388.3, 148.0);
  ctx.bezierCurveTo(388.1, 147.2, 388.3, 146.0, 387.3, 146.0);
  ctx.bezierCurveTo(387.0, 154.7, 375.2, 157.2, 376.3, 164.0);
  ctx.bezierCurveTo(377.8, 161.3, 380.4, 156.0, 383.3, 158.0);
  ctx.bezierCurveTo(381.9, 161.3, 382.5, 166.5, 379.3, 168.0);
  ctx.bezierCurveTo(374.8, 164.5, 351.6, 161.7, 346.3, 169.0);
  ctx.bezierCurveTo(342.6, 161.6, 340.5, 147.9, 335.3, 139.0);
  ctx.bezierCurveTo(334.0, 136.7, 332.9, 137.6, 332.3, 135.0);
  ctx.bezierCurveTo(328.8, 118.3, 333.1, 88.5, 340.3, 83.0);
  ctx.bezierCurveTo(337.4, 81.8, 336.6, 87.8, 335.3, 85.0);
  ctx.bezierCurveTo(335.0, 82.7, 338.2, 83.9, 338.3, 82.0);
  ctx.bezierCurveTo(335.0, 82.0, 334.9, 85.3, 331.3, 85.0);
  ctx.bezierCurveTo(328.6, 100.4, 329.8, 125.5, 332.3, 140.0);
  ctx.bezierCurveTo(332.3, 139.8, 330.3, 139.3, 330.3, 139.0);
  ctx.bezierCurveTo(336.0, 150.3, 334.2, 169.2, 343.3, 177.0);
  ctx.bezierCurveTo(340.3, 178.4, 336.2, 183.8, 334.3, 183.0);
  ctx.bezierCurveTo(333.9, 177.4, 332.6, 172.8, 330.3, 169.0);
  ctx.bezierCurveTo(330.3, 170.0, 328.6, 170.3, 328.3, 169.0);
  ctx.bezierCurveTo(332.0, 169.4, 337.5, 163.6, 333.3, 165.0);
  ctx.bezierCurveTo(330.2, 168.5, 313.1, 172.1, 311.3, 177.0);
  ctx.bezierCurveTo(311.6, 176.1, 315.7, 174.3, 315.3, 176.0);
  ctx.bezierCurveTo(308.0, 183.6, 287.6, 178.3, 279.3, 185.0);
  ctx.bezierCurveTo(281.1, 188.4, 279.0, 188.7, 276.3, 190.0);
  ctx.bezierCurveTo(277.0, 194.3, 275.2, 196.2, 273.3, 198.0);
  ctx.bezierCurveTo(273.1, 197.2, 273.3, 196.0, 272.3, 196.0);
  ctx.bezierCurveTo(273.6, 199.4, 273.6, 204.1, 271.3, 199.0);
  ctx.bezierCurveTo(270.0, 214.3, 280.3, 218.1, 288.3, 224.0);
  ctx.bezierCurveTo(286.0, 222.6, 285.2, 214.5, 284.3, 215.0);
  ctx.bezierCurveTo(284.1, 216.5, 284.7, 218.7, 283.3, 219.0);
  ctx.bezierCurveTo(283.0, 216.9, 284.1, 208.3, 282.3, 211.0);
  ctx.bezierCurveTo(282.2, 217.7, 283.0, 218.3, 279.3, 216.0);
  ctx.bezierCurveTo(276.4, 214.2, 275.6, 212.1, 275.3, 209.0);
  ctx.bezierCurveTo(274.6, 201.6, 279.7, 192.5, 280.3, 190.0);
  ctx.bezierCurveTo(286.8, 187.1, 293.5, 184.5, 300.3, 182.0);
  ctx.bezierCurveTo(298.6, 187.3, 296.4, 192.1, 295.3, 198.0);
  ctx.bezierCurveTo(298.8, 201.2, 301.0, 206.4, 300.3, 211.0);
  ctx.bezierCurveTo(299.6, 215.9, 294.7, 214.2, 294.3, 217.0);
  ctx.bezierCurveTo(294.4, 213.3, 293.8, 212.3, 292.3, 210.0);
  ctx.bezierCurveTo(294.4, 213.1, 285.6, 207.5, 289.3, 203.0);
  ctx.bezierCurveTo(291.2, 202.8, 299.2, 203.7, 296.3, 202.0);
  ctx.bezierCurveTo(292.5, 202.8, 291.5, 200.8, 288.3, 201.0);
  ctx.bezierCurveTo(282.5, 209.0, 293.3, 216.4, 293.3, 226.0);
  ctx.bezierCurveTo(293.3, 231.6, 289.5, 235.6, 288.3, 242.0);
  ctx.bezierCurveTo(286.5, 241.9, 285.0, 241.3, 284.3, 240.0);
  ctx.bezierCurveTo(286.4, 236.7, 288.1, 233.1, 289.3, 229.0);
  ctx.bezierCurveTo(285.1, 226.6, 279.8, 225.2, 276.3, 222.0);
  ctx.bezierCurveTo(276.2, 218.4, 275.9, 215.1, 273.3, 214.0);
  ctx.bezierCurveTo(275.9, 222.6, 271.1, 227.1, 274.3, 235.0);
  ctx.bezierCurveTo(277.9, 235.1, 281.2, 235.5, 282.3, 238.0);
  ctx.bezierCurveTo(279.4, 239.2, 281.9, 241.8, 281.3, 244.0);
  ctx.bezierCurveTo(279.5, 251.1, 274.9, 259.5, 274.3, 268.0);
  ctx.bezierCurveTo(273.9, 274.4, 277.7, 281.5, 271.3, 285.0);
  ctx.bezierCurveTo(266.3, 285.0, 261.7, 285.4, 258.3, 287.0);
  ctx.bezierCurveTo(260.5, 287.7, 256.4, 290.3, 255.3, 291.0);
  ctx.bezierCurveTo(245.6, 296.0, 240.1, 305.2, 230.3, 310.0);
  ctx.bezierCurveTo(227.0, 318.0, 217.4, 319.7, 213.3, 327.0);
  ctx.bezierCurveTo(210.7, 326.7, 209.0, 327.4, 209.3, 330.0);
  ctx.bezierCurveTo(213.8, 331.7, 216.9, 325.4, 219.3, 324.0);
  ctx.bezierCurveTo(220.1, 323.6, 220.8, 325.3, 221.3, 325.0);
  ctx.bezierCurveTo(222.3, 324.4, 221.2, 322.9, 222.3, 322.0);
  ctx.bezierCurveTo(225.4, 319.6, 233.8, 319.0, 238.3, 313.0);
  ctx.bezierCurveTo(242.8, 312.7, 245.4, 308.6, 243.3, 307.0);
  ctx.bezierCurveTo(242.7, 309.0, 238.6, 307.7, 238.3, 310.0);
  ctx.bezierCurveTo(240.1, 310.6, 242.5, 307.1, 243.3, 310.0);
  ctx.bezierCurveTo(239.1, 309.1, 235.7, 314.3, 233.3, 312.0);
  ctx.bezierCurveTo(240.6, 308.2, 244.8, 302.5, 249.3, 303.0);
  ctx.bezierCurveTo(248.1, 302.5, 247.1, 301.9, 246.3, 301.0);
  ctx.bezierCurveTo(249.5, 299.8, 251.2, 296.6, 253.3, 297.0);
  ctx.bezierCurveTo(253.8, 292.1, 265.7, 286.8, 277.3, 287.0);
  ctx.bezierCurveTo(279.1, 293.2, 286.4, 293.9, 287.3, 301.0);
  ctx.bezierCurveTo(285.6, 301.2, 283.4, 295.3, 283.3, 300.0);
  ctx.bezierCurveTo(285.1, 301.1, 287.9, 303.5, 285.3, 306.0);
  ctx.bezierCurveTo(287.0, 306.4, 287.9, 304.5, 288.3, 306.0);
  ctx.bezierCurveTo(284.4, 311.4, 279.1, 315.5, 273.3, 319.0);
  ctx.bezierCurveTo(271.5, 322.3, 273.6, 319.9, 275.3, 319.0);
  ctx.bezierCurveTo(281.8, 315.9, 284.1, 309.0, 289.3, 308.0);
  ctx.bezierCurveTo(287.0, 308.5, 291.8, 311.1, 291.3, 307.0);
  ctx.bezierCurveTo(293.9, 308.9, 291.8, 309.1, 294.3, 311.0);
  ctx.bezierCurveTo(290.4, 315.2, 283.5, 320.1, 278.3, 323.0);
  ctx.bezierCurveTo(274.9, 324.9, 272.4, 323.5, 273.3, 323.0);
  ctx.bezierCurveTo(266.7, 326.5, 264.9, 333.8, 256.3, 337.0);
  ctx.bezierCurveTo(258.9, 332.9, 263.1, 330.5, 266.3, 327.0);
  ctx.bezierCurveTo(253.0, 329.8, 247.7, 336.9, 235.3, 342.0);
  ctx.bezierCurveTo(235.7, 345.0, 237.1, 346.9, 239.3, 348.0);
  ctx.bezierCurveTo(240.8, 344.2, 236.6, 346.1, 237.3, 343.0);
  ctx.bezierCurveTo(243.8, 340.7, 242.4, 340.0, 249.3, 336.0);
  ctx.bezierCurveTo(245.3, 342.3, 242.1, 349.4, 233.3, 351.0);
  ctx.bezierCurveTo(236.7, 342.5, 225.4, 334.1, 227.3, 330.0);
  ctx.bezierCurveTo(224.0, 333.6, 223.3, 326.1, 218.3, 328.0);
  ctx.bezierCurveTo(222.8, 336.5, 228.4, 337.2, 227.3, 343.0);
  ctx.bezierCurveTo(223.6, 340.7, 220.9, 332.1, 217.3, 333.0);
  ctx.bezierCurveTo(219.0, 335.3, 224.3, 339.3, 223.3, 341.0);
  ctx.bezierCurveTo(219.3, 339.3, 216.6, 331.1, 211.3, 334.0);
  ctx.bezierCurveTo(215.9, 335.1, 215.7, 340.9, 216.3, 346.0);
  ctx.bezierCurveTo(219.8, 346.4, 221.9, 345.6, 224.3, 345.0);
  ctx.bezierCurveTo(224.6, 348.7, 226.8, 350.5, 227.3, 354.0);
  ctx.bezierCurveTo(221.3, 361.9, 217.7, 372.4, 206.3, 375.0);
  ctx.bezierCurveTo(205.5, 372.5, 206.6, 368.1, 203.3, 368.0);
  ctx.bezierCurveTo(203.6, 370.3, 204.9, 371.8, 204.3, 375.0);
  ctx.bezierCurveTo(201.9, 375.6, 202.2, 378.9, 198.3, 378.0);
  ctx.bezierCurveTo(198.8, 374.9, 196.9, 374.1, 196.3, 372.0);
  ctx.bezierCurveTo(186.8, 371.9, 182.6, 366.4, 178.3, 361.0);
  ctx.bezierCurveTo(179.4, 354.9, 175.8, 348.2, 183.3, 345.0);
  ctx.bezierCurveTo(188.1, 349.3, 196.7, 344.1, 195.3, 336.0);
  ctx.bezierCurveTo(192.9, 335.2, 191.6, 336.5, 190.3, 333.0);
  ctx.bezierCurveTo(191.4, 337.8, 189.0, 339.1, 187.3, 341.0);
  ctx.bezierCurveTo(190.6, 341.9, 191.7, 335.4, 193.3, 338.0);
  ctx.bezierCurveTo(194.1, 343.2, 189.1, 346.5, 186.3, 345.0);
  ctx.bezierCurveTo(186.0, 343.0, 187.7, 343.0, 188.3, 342.0);
  ctx.bezierCurveTo(186.9, 341.5, 183.1, 343.2, 183.3, 341.0);
  ctx.bezierCurveTo(183.9, 338.6, 184.8, 336.4, 184.3, 333.0);
  ctx.bezierCurveTo(192.2, 333.4, 187.6, 331.2, 182.3, 332.0);
  ctx.bezierCurveTo(184.9, 337.4, 177.9, 341.8, 174.3, 338.0);
  ctx.bezierCurveTo(174.7, 334.4, 178.6, 334.3, 179.3, 331.0);
  ctx.bezierCurveTo(174.6, 331.0, 173.3, 334.3, 172.3, 338.0);
  ctx.bezierCurveTo(173.1, 341.3, 177.3, 341.0, 179.3, 343.0);
  ctx.bezierCurveTo(179.2, 345.9, 173.2, 348.8, 173.3, 355.0);
  ctx.bezierCurveTo(164.0, 359.2, 149.3, 362.8, 150.3, 374.0);
  ctx.bezierCurveTo(153.7, 377.2, 162.4, 373.1, 159.3, 370.0);
  ctx.bezierCurveTo(158.1, 372.1, 154.2, 374.6, 152.3, 373.0);
  ctx.bezierCurveTo(154.8, 362.5, 165.8, 360.5, 174.3, 356.0);
  ctx.bezierCurveTo(175.1, 357.9, 176.0, 359.7, 176.3, 362.0);
  ctx.bezierCurveTo(173.1, 363.1, 174.4, 361.8, 173.3, 364.0);
  ctx.bezierCurveTo(169.7, 365.0, 172.5, 359.5, 169.3, 360.0);
  ctx.bezierCurveTo(169.3, 362.0, 169.3, 364.0, 169.3, 366.0);
  ctx.bezierCurveTo(166.4, 365.7, 166.2, 368.3, 163.3, 368.0);
  ctx.bezierCurveTo(160.2, 368.5, 162.9, 363.0, 159.3, 364.0);
  ctx.bezierCurveTo(158.8, 367.5, 160.9, 368.4, 162.3, 370.0);
  ctx.bezierCurveTo(167.6, 369.6, 169.6, 365.9, 174.3, 365.0);
  ctx.bezierCurveTo(176.2, 378.2, 161.9, 375.2, 164.3, 389.0);
  ctx.bezierCurveTo(166.0, 388.9, 166.9, 389.8, 167.3, 391.0);
  ctx.bezierCurveTo(174.1, 389.6, 185.4, 379.7, 178.3, 374.0);
  ctx.bezierCurveTo(176.6, 374.1, 182.3, 380.3, 177.3, 381.0);
  ctx.bezierCurveTo(177.3, 377.5, 173.3, 377.7, 172.3, 380.0);
  ctx.bezierCurveTo(174.5, 379.8, 175.5, 380.8, 175.3, 383.0);
  ctx.bezierCurveTo(173.0, 385.3, 172.0, 389.1, 167.3, 389.0);
  ctx.bezierCurveTo(163.9, 379.8, 173.9, 375.7, 178.3, 371.0);
  ctx.bezierCurveTo(193.4, 374.9, 175.4, 389.6, 182.3, 399.0);
  ctx.bezierCurveTo(195.7, 400.0, 189.9, 381.9, 201.3, 381.0);
  ctx.bezierCurveTo(201.9, 387.9, 200.4, 397.1, 201.3, 401.0);
  ctx.bezierCurveTo(206.8, 402.4, 210.6, 397.0, 209.3, 395.0);
  ctx.bezierCurveTo(207.4, 397.1, 207.4, 401.1, 202.3, 400.0);
  ctx.bezierCurveTo(201.9, 395.0, 202.3, 390.7, 206.3, 390.0);
  ctx.bezierCurveTo(209.0, 390.0, 208.5, 393.2, 211.3, 393.0);
  ctx.bezierCurveTo(211.3, 389.4, 211.9, 385.1, 209.3, 384.0);
  ctx.bezierCurveTo(208.5, 386.8, 210.7, 386.6, 210.3, 389.0);
  ctx.bezierCurveTo(206.9, 388.6, 204.7, 389.4, 202.3, 390.0);
  ctx.bezierCurveTo(203.5, 388.8, 203.5, 386.5, 203.3, 384.0);
  ctx.bezierCurveTo(205.6, 386.4, 206.8, 383.2, 208.3, 382.0);
  ctx.bezierCurveTo(205.8, 380.7, 203.5, 384.2, 203.3, 382.0);
  ctx.bezierCurveTo(203.9, 380.5, 202.1, 376.8, 204.3, 377.0);
  ctx.bezierCurveTo(205.8, 377.2, 208.0, 376.6, 208.3, 378.0);
  ctx.bezierCurveTo(203.7, 378.0, 210.9, 379.8, 210.3, 382.0);
  ctx.bezierCurveTo(209.6, 378.2, 215.3, 378.1, 212.3, 375.0);
  ctx.bezierCurveTo(223.6, 368.6, 228.8, 350.8, 242.3, 350.0);
  ctx.bezierCurveTo(238.5, 352.8, 232.7, 353.7, 231.3, 359.0);
  ctx.bezierCurveTo(240.3, 352.3, 248.0, 344.3, 261.3, 342.0);
  ctx.bezierCurveTo(256.0, 342.6, 250.5, 343.2, 246.3, 345.0);
  ctx.bezierCurveTo(251.3, 340.6, 253.8, 333.8, 260.3, 331.0);
  ctx.bezierCurveTo(258.4, 334.3, 250.0, 341.0, 251.3, 341.0);
  ctx.bezierCurveTo(254.6, 338.7, 256.4, 335.7, 256.3, 340.0);
  ctx.bezierCurveTo(262.0, 335.9, 265.5, 328.4, 275.3, 326.0);
  ctx.bezierCurveTo(274.5, 329.2, 272.1, 330.8, 270.3, 333.0);
  ctx.bezierCurveTo(275.1, 333.1, 273.8, 327.2, 277.3, 326.0);
  ctx.bezierCurveTo(277.4, 327.1, 275.9, 327.6, 277.3, 328.0);
  ctx.bezierCurveTo(275.7, 325.1, 281.9, 324.8, 280.3, 326.0);
  ctx.bezierCurveTo(284.6, 322.6, 286.2, 317.5, 293.3, 315.0);
  ctx.bezierCurveTo(293.1, 317.4, 291.0, 319.8, 288.3, 322.0);
  ctx.bezierCurveTo(287.7, 322.5, 286.8, 320.8, 286.3, 321.0);
  ctx.bezierCurveTo(283.9, 322.2, 280.1, 328.4, 281.3, 328.0);
  ctx.bezierCurveTo(284.3, 327.0, 283.8, 321.9, 287.3, 323.0);
  ctx.bezierCurveTo(284.4, 323.7, 285.1, 327.2, 283.3, 329.0);
  ctx.bezierCurveTo(277.3, 335.1, 264.1, 335.7, 263.3, 343.0);
  ctx.bezierCurveTo(273.0, 337.4, 283.1, 332.1, 292.3, 326.0);
  ctx.bezierCurveTo(293.4, 318.4, 295.4, 311.7, 302.3, 310.0);
  ctx.bezierCurveTo(304.6, 316.4, 305.3, 324.3, 308.3, 330.0);
  ctx.bezierCurveTo(304.5, 336.7, 314.3, 345.6, 310.3, 356.0);
  ctx.bezierCurveTo(314.9, 364.5, 307.4, 374.0, 305.3, 382.0);
  ctx.bezierCurveTo(307.0, 385.0, 307.9, 388.8, 307.3, 394.0);
  ctx.bezierCurveTo(298.1, 399.2, 302.5, 417.9, 295.3, 425.0);
  ctx.bezierCurveTo(295.3, 430.7, 295.3, 436.3, 295.3, 442.0);
  ctx.bezierCurveTo(293.0, 442.3, 291.5, 441.8, 290.3, 441.0);
  ctx.bezierCurveTo(293.6, 445.1, 289.7, 449.2, 290.3, 456.0);
  ctx.bezierCurveTo(286.3, 455.0, 287.3, 459.0, 283.3, 458.0);
  ctx.bezierCurveTo(284.2, 472.9, 277.1, 479.7, 274.3, 491.0);
  ctx.bezierCurveTo(272.6, 490.9, 271.2, 491.2, 270.3, 492.0);
  ctx.bezierCurveTo(262.1, 507.0, 265.5, 533.6, 265.3, 554.0);
  ctx.bezierCurveTo(269.1, 542.0, 265.7, 514.2, 270.3, 500.0);
  ctx.bezierCurveTo(275.7, 501.7, 272.3, 505.6, 276.3, 504.0);
  ctx.bezierCurveTo(272.9, 521.6, 274.5, 544.2, 269.3, 560.0);
  ctx.bezierCurveTo(270.9, 563.7, 274.5, 565.4, 276.3, 569.0);
  ctx.bezierCurveTo(275.4, 574.8, 274.1, 580.1, 274.3, 582.0);
  ctx.bezierCurveTo(264.1, 577.0, 269.3, 562.7, 263.3, 554.0);
  ctx.bezierCurveTo(264.9, 561.9, 261.5, 568.9, 262.3, 575.0);
  ctx.bezierCurveTo(263.0, 580.1, 267.2, 583.8, 268.3, 589.0);
  ctx.bezierCurveTo(268.4, 589.3, 263.9, 592.6, 269.3, 592.0);
  ctx.bezierCurveTo(273.5, 593.5, 269.5, 586.8, 272.3, 587.0);
  ctx.bezierCurveTo(273.8, 588.2, 273.8, 590.8, 275.3, 592.0);
  ctx.bezierCurveTo(280.7, 592.0, 286.0, 592.0, 291.3, 592.0);
  ctx.bezierCurveTo(291.6, 587.7, 292.0, 582.5, 296.3, 585.0);
  ctx.bezierCurveTo(299.6, 560.9, 304.7, 538.7, 311.3, 518.0);
  ctx.bezierCurveTo(314.8, 518.7, 317.7, 523.7, 320.3, 522.0);
  ctx.bezierCurveTo(320.0, 519.9, 322.7, 514.2, 320.3, 511.0);
  ctx.bezierCurveTo(318.7, 513.0, 319.5, 517.6, 317.3, 519.0);
  ctx.bezierCurveTo(315.3, 517.7, 312.2, 517.4, 312.3, 514.0);
  ctx.bezierCurveTo(314.1, 511.4, 313.8, 506.8, 316.3, 505.0);
  ctx.bezierCurveTo(321.0, 512.1, 335.1, 513.7, 341.3, 516.0);
  ctx.bezierCurveTo(337.6, 537.9, 331.4, 557.4, 323.3, 575.0);
  ctx.bezierCurveTo(325.5, 575.8, 325.8, 578.5, 327.3, 580.0);
  ctx.bezierCurveTo(329.8, 581.3, 332.2, 577.8, 332.3, 580.0);
  ctx.bezierCurveTo(330.9, 584.3, 327.1, 586.2, 327.3, 592.0);
  ctx.bezierCurveTo(334.4, 592.4, 332.7, 584.0, 334.3, 579.0);
  ctx.bezierCurveTo(343.0, 578.3, 344.7, 564.8, 348.3, 552.0);
  ctx.bezierCurveTo(351.6, 540.3, 360.0, 516.9, 361.3, 511.0);
  ctx.bezierCurveTo(363.2, 512.0, 364.7, 508.0, 365.3, 511.0);
  ctx.bezierCurveTo(363.3, 514.5, 365.8, 510.9, 366.3, 513.0);
  ctx.bezierCurveTo(361.6, 529.4, 356.7, 543.8, 352.3, 558.0);
  ctx.bezierCurveTo(349.1, 568.5, 340.3, 575.3, 338.3, 586.0);
  ctx.bezierCurveTo(336.2, 586.8, 334.4, 590.1, 336.3, 592.0);
  ctx.bezierCurveTo(337.3, 592.0, 338.3, 592.0, 339.3, 592.0);
  ctx.bezierCurveTo(354.7, 567.4, 362.3, 534.9, 372.3, 505.0);
  ctx.bezierCurveTo(375.1, 507.2, 378.1, 509.2, 377.3, 515.0);
  ctx.bezierCurveTo(383.2, 524.5, 387.5, 535.5, 392.3, 546.0);
  ctx.bezierCurveTo(401.0, 552.9, 405.0, 560.7, 413.3, 572.0);
  ctx.bezierCurveTo(418.0, 578.3, 425.2, 590.8, 430.3, 592.0);
  ctx.bezierCurveTo(432.0, 592.4, 433.3, 592.1, 435.3, 591.0);
  ctx.bezierCurveTo(436.2, 585.1, 429.8, 581.2, 431.3, 578.0);
  ctx.bezierCurveTo(431.6, 579.1, 433.0, 580.4, 433.3, 579.0);
  ctx.bezierCurveTo(423.5, 564.3, 414.0, 544.5, 402.3, 535.0);
  ctx.bezierCurveTo(403.3, 535.0, 403.5, 535.8, 404.3, 536.0);
  ctx.bezierCurveTo(400.6, 530.0, 405.5, 523.2, 409.3, 519.0);
  ctx.bezierCurveTo(419.3, 536.7, 431.0, 552.6, 442.3, 569.0);
  ctx.bezierCurveTo(442.5, 572.2, 440.5, 573.2, 441.3, 577.0);
  ctx.bezierCurveTo(445.3, 578.6, 441.7, 572.7, 444.3, 573.0);
  ctx.bezierCurveTo(445.2, 579.3, 438.2, 590.1, 444.3, 592.0);
  ctx.bezierCurveTo(444.7, 587.5, 444.5, 577.0, 448.3, 573.0);
  ctx.bezierCurveTo(446.6, 570.9, 445.2, 572.1, 444.3, 571.0);
  ctx.bezierCurveTo(444.6, 567.7, 439.5, 563.0, 436.3, 558.0);
  ctx.bezierCurveTo(433.3, 553.3, 431.1, 547.5, 428.3, 545.0);
  ctx.bezierCurveTo(428.0, 544.8, 428.9, 544.9, 427.3, 542.0);
  ctx.bezierCurveTo(422.7, 533.5, 414.7, 526.4, 409.3, 517.0);
  ctx.bezierCurveTo(416.0, 508.3, 421.3, 498.3, 429.3, 491.0);
  ctx.bezierCurveTo(432.8, 494.2, 433.5, 495.7, 437.3, 497.0);
  ctx.bezierCurveTo(436.7, 492.3, 431.4, 492.3, 431.3, 487.0);
  ctx.bezierCurveTo(433.1, 484.4, 435.6, 482.6, 438.3, 481.0);
  ctx.bezierCurveTo(438.8, 482.2, 439.4, 483.3, 440.3, 484.0);
  ctx.bezierCurveTo(440.5, 482.1, 439.2, 481.8, 439.3, 480.0);
  ctx.bezierCurveTo(443.5, 483.3, 440.0, 480.1, 444.3, 479.0);
  ctx.bezierCurveTo(447.0, 484.7, 452.1, 493.2, 452.3, 498.0);
  ctx.bezierCurveTo(450.1, 497.2, 451.0, 493.3, 448.3, 493.0);
  ctx.bezierCurveTo(450.3, 497.3, 451.0, 503.0, 455.3, 505.0);
  ctx.bezierCurveTo(455.5, 503.8, 455.1, 502.2, 456.3, 502.0);
  ctx.bezierCurveTo(456.3, 503.7, 457.1, 504.6, 458.3, 505.0);
  ctx.bezierCurveTo(460.7, 500.0, 474.1, 500.9, 473.3, 508.0);
  ctx.bezierCurveTo(471.9, 508.0, 471.1, 508.5, 470.3, 509.0);
  ctx.bezierCurveTo(472.4, 505.6, 464.5, 505.2, 460.3, 505.0);
  ctx.bezierCurveTo(461.0, 509.8, 464.4, 506.7, 468.3, 507.0);
  ctx.bezierCurveTo(470.3, 510.3, 471.7, 514.3, 473.3, 518.0);
  ctx.bezierCurveTo(480.7, 525.3, 487.8, 545.3, 490.3, 562.0);
  ctx.bezierCurveTo(492.1, 563.6, 494.4, 569.8, 493.3, 571.0);
  ctx.bezierCurveTo(491.1, 568.6, 488.6, 566.4, 485.3, 565.0);
  ctx.bezierCurveTo(488.7, 569.7, 493.0, 572.4, 496.3, 578.0);
  ctx.bezierCurveTo(499.0, 582.6, 499.1, 591.5, 506.3, 592.0);
  ctx.bezierCurveTo(503.2, 577.8, 497.8, 560.5, 497.3, 547.0);
  ctx.bezierCurveTo(502.4, 563.5, 507.3, 576.0, 511.3, 592.0);
  ctx.bezierCurveTo(513.0, 592.0, 514.7, 592.0, 516.3, 592.0);
  ctx.bezierCurveTo(512.6, 576.0, 510.2, 558.8, 504.3, 545.0);
  ctx.bezierCurveTo(506.2, 556.4, 509.1, 568.9, 510.3, 579.0);
  ctx.bezierCurveTo(508.1, 572.6, 505.9, 566.1, 503.3, 560.0);
  ctx.bezierCurveTo(507.7, 556.9, 502.3, 547.4, 503.3, 542.0);
  ctx.bezierCurveTo(503.1, 542.8, 503.3, 544.0, 502.3, 544.0);
  ctx.bezierCurveTo(503.0, 535.5, 493.3, 517.1, 491.3, 506.0);
  ctx.bezierCurveTo(491.5, 506.8, 491.3, 508.0, 492.3, 508.0);
  ctx.bezierCurveTo(492.3, 502.7, 489.0, 500.7, 489.3, 495.0);
  ctx.bezierCurveTo(485.9, 491.9, 480.9, 488.5, 478.3, 484.0);
  ctx.bezierCurveTo(475.2, 478.7, 469.8, 462.8, 469.3, 458.0);
  ctx.bezierCurveTo(468.6, 450.0, 471.4, 445.4, 470.3, 440.0);
  ctx.bezierCurveTo(469.8, 437.3, 467.1, 433.8, 466.3, 433.0);
  ctx.bezierCurveTo(463.2, 429.4, 461.4, 427.5, 458.3, 424.0);
  ctx.bezierCurveTo(458.8, 424.5, 459.9, 424.5, 460.3, 425.0);
  ctx.bezierCurveTo(457.5, 422.0, 456.0, 419.2, 452.3, 418.0);
  ctx.bezierCurveTo(453.7, 411.6, 446.5, 408.5, 450.3, 403.0);
  ctx.bezierCurveTo(450.0, 405.3, 450.6, 406.8, 452.3, 407.0);
  ctx.bezierCurveTo(446.0, 393.7, 447.2, 372.8, 433.3, 367.0);
  ctx.bezierCurveTo(434.0, 363.3, 431.6, 362.7, 432.3, 359.0);
  ctx.bezierCurveTo(436.6, 360.2, 435.0, 355.7, 437.3, 355.0);
  ctx.bezierCurveTo(438.3, 338.8, 448.9, 322.4, 451.3, 304.0);
  ctx.bezierCurveTo(453.2, 290.0, 459.9, 280.0, 459.3, 268.0);
  ctx.bezierCurveTo(459.2, 269.2, 459.5, 270.8, 458.3, 271.0);
  ctx.bezierCurveTo(459.7, 263.0, 471.3, 265.4, 474.3, 259.0);
  ctx.bezierCurveTo(480.3, 257.5, 483.5, 249.5, 489.3, 251.0);
  ctx.bezierCurveTo(497.3, 234.9, 508.9, 222.6, 511.3, 201.0);
  ctx.bezierCurveTo(512.5, 199.2, 513.9, 197.6, 515.3, 196.0);
  ctx.bezierCurveTo(515.6, 194.0, 514.0, 194.0, 513.3, 193.0);
  ctx.bezierCurveTo(514.5, 192.2, 516.0, 191.7, 518.3, 192.0);
  ctx.bezierCurveTo(518.2, 190.5, 518.5, 189.6, 519.3, 189.0);
  ctx.bezierCurveTo(528.3, 181.6, 538.9, 176.9, 545.3, 167.0);
  ctx.bezierCurveTo(545.4, 165.6, 544.8, 164.8, 544.3, 164.0);
  ctx.bezierCurveTo(548.4, 166.5, 548.2, 157.6, 551.3, 156.0);
  ctx.bezierCurveTo(558.2, 155.4, 566.4, 152.4, 571.3, 153.0);
  ctx.bezierCurveTo(573.4, 150.9, 578.3, 144.5, 572.3, 143.0);
  ctx.bezierCurveTo(572.8, 146.8, 571.9, 149.2, 569.3, 150.0);
  ctx.bezierCurveTo(556.5, 150.0, 565.1, 139.4, 573.3, 141.0);
  ctx.bezierCurveTo(575.3, 142.0, 575.6, 144.7, 577.3, 146.0);
  ctx.bezierCurveTo(576.9, 136.3, 565.1, 139.2, 559.3, 142.0);
  ctx.bezierCurveTo(559.0, 139.7, 562.2, 140.9, 562.3, 139.0);
  ctx.bezierCurveTo(557.8, 139.5, 557.0, 143.7, 550.3, 142.0);
  ctx.bezierCurveTo(546.8, 127.1, 570.5, 125.9, 572.3, 110.0);
  ctx.bezierCurveTo(569.4, 111.1, 568.9, 107.4, 567.3, 107.0);
  ctx.bezierCurveTo(559.2, 105.1, 552.5, 114.7, 546.3, 117.0);
  ctx.bezierCurveTo(547.4, 113.3, 542.9, 115.0, 542.3, 113.0);
  ctx.bezierCurveTo(542.6, 110.9, 546.0, 112.1, 546.3, 110.0);
  ctx.bezierCurveTo(545.1, 109.9, 543.9, 109.7, 544.3, 108.0);
  ctx.bezierCurveTo(545.9, 101.7, 565.1, 88.3, 554.3, 80.0);
  ctx.bezierCurveTo(546.6, 82.6, 541.6, 88.0, 535.3, 92.0);
  ctx.bezierCurveTo(535.3, 94.3, 535.3, 96.7, 535.3, 99.0);
  ctx.bezierCurveTo(530.3, 100.7, 529.0, 106.0, 523.3, 107.0);
  ctx.bezierCurveTo(518.4, 95.3, 528.4, 83.6, 522.3, 72.0);
  ctx.bezierCurveTo(520.3, 72.0, 518.3, 72.0, 516.3, 72.0);
  ctx.bezierCurveTo(508.2, 79.7, 503.7, 95.9, 506.3, 111.0);
  ctx.bezierCurveTo(501.3, 118.0, 496.8, 125.5, 489.3, 130.0);
  ctx.bezierCurveTo(484.0, 126.6, 484.6, 117.4, 477.3, 116.0);
  ctx.bezierCurveTo(478.3, 119.7, 482.7, 119.9, 482.3, 125.0);
  ctx.bezierCurveTo(480.2, 129.5, 477.2, 133.2, 471.3, 134.0);
  ctx.bezierCurveTo(474.1, 131.2, 469.5, 130.8, 469.3, 128.0);
  ctx.bezierCurveTo(470.8, 123.5, 473.8, 120.5, 476.3, 117.0);
  ctx.bezierCurveTo(469.3, 118.0, 465.8, 122.5, 466.3, 131.0);
  ctx.bezierCurveTo(475.3, 138.2, 478.6, 150.2, 476.3, 165.0);
  ctx.bezierCurveTo(469.5, 164.5, 460.9, 160.5, 456.3, 161.0);
  ctx.bezierCurveTo(454.7, 164.8, 444.8, 156.6, 440.3, 155.0);
  ctx.bezierCurveTo(445.0, 154.3, 450.2, 158.4, 452.3, 157.0);
  ctx.bezierCurveTo(448.2, 153.0, 441.9, 155.1, 435.3, 154.0);
  ctx.bezierCurveTo(430.2, 153.1, 424.9, 149.8, 420.3, 150.0);
  ctx.bezierCurveTo(415.3, 150.2, 408.5, 154.5, 405.3, 154.0);
  ctx.bezierCurveTo(406.8, 154.2, 409.0, 153.6, 409.3, 155.0);
  ctx.bezierCurveTo(406.2, 154.8, 406.0, 157.7, 402.3, 157.0);
  ctx.bezierCurveTo(402.4, 152.6, 400.8, 152.4, 403.3, 150.0);
  ctx.bezierCurveTo(399.0, 149.3, 400.2, 139.6, 405.3, 140.0);
  ctx.bezierCurveTo(405.7, 119.3, 407.2, 93.7, 399.3, 80.0);
  ctx.bezierCurveTo(398.6, 78.8, 397.4, 80.0, 396.3, 79.0);
  ctx.bezierCurveTo(396.9, 79.5, 397.0, 77.7, 396.3, 77.0);
  ctx.bezierCurveTo(383.1, 63.4, 343.9, 65.6, 334.3, 81.0);
  ctx.bezierCurveTo(347.4, 71.3, 376.5, 63.4, 392.3, 76.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(260.3, 292.0);
  ctx.bezierCurveTo(254.1, 292.7, 258.0, 296.7, 260.3, 292.0);
  ctx.lineTo(260.3, 292.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(203.3, 368.0);
  ctx.bezierCurveTo(210.1, 367.4, 214.8, 361.5, 213.3, 355.0);
  ctx.bezierCurveTo(215.7, 355.3, 215.6, 358.1, 217.3, 359.0);
  ctx.bezierCurveTo(216.5, 352.5, 211.3, 350.4, 208.3, 346.0);
  ctx.bezierCurveTo(213.9, 343.2, 211.7, 335.6, 209.3, 331.0);
  ctx.bezierCurveTo(204.7, 329.6, 194.5, 328.9, 191.3, 332.0);
  ctx.bezierCurveTo(192.5, 332.1, 193.7, 332.3, 193.3, 334.0);
  ctx.bezierCurveTo(197.6, 332.6, 204.3, 333.6, 208.3, 332.0);
  ctx.bezierCurveTo(213.6, 349.5, 197.8, 344.7, 190.3, 352.0);
  ctx.bezierCurveTo(185.2, 352.4, 184.5, 348.5, 181.3, 347.0);
  ctx.bezierCurveTo(182.0, 352.7, 188.5, 352.5, 191.3, 356.0);
  ctx.bezierCurveTo(191.5, 360.0, 192.0, 363.7, 192.3, 365.0);
  ctx.bezierCurveTo(195.8, 363.8, 198.5, 368.4, 203.3, 368.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(310.3, 552.0);
  ctx.bezierCurveTo(309.6, 542.7, 318.1, 528.4, 316.3, 522.0);
  ctx.bezierCurveTo(313.3, 532.3, 300.4, 562.4, 316.3, 564.0);
  ctx.bezierCurveTo(313.7, 559.8, 310.7, 557.5, 310.3, 552.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(321.3, 569.0);
  ctx.bezierCurveTo(324.1, 552.3, 332.8, 534.8, 335.3, 515.0);
  ctx.bezierCurveTo(331.7, 514.1, 333.9, 518.9, 333.3, 521.0);
  ctx.bezierCurveTo(327.1, 533.4, 324.2, 549.2, 319.3, 563.0);
  ctx.bezierCurveTo(318.1, 562.8, 317.3, 561.4, 317.3, 564.0);
  ctx.bezierCurveTo(312.5, 571.2, 311.5, 582.2, 309.3, 592.0);
  ctx.bezierCurveTo(313.7, 590.5, 313.3, 584.2, 314.3, 580.0);
  ctx.bezierCurveTo(315.5, 575.4, 317.1, 570.6, 317.3, 566.0);
  ctx.bezierCurveTo(320.2, 565.9, 319.1, 561.7, 322.3, 562.0);
  ctx.bezierCurveTo(322.9, 564.7, 318.2, 567.1, 321.3, 569.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(438.3, 504.0);
  ctx.bezierCurveTo(427.8, 507.2, 419.1, 517.3, 419.3, 528.0);
  ctx.bezierCurveTo(423.3, 530.7, 429.6, 531.0, 430.3, 537.0);
  ctx.bezierCurveTo(429.2, 537.1, 428.8, 535.5, 428.3, 537.0);
  ctx.bezierCurveTo(433.6, 542.6, 437.2, 554.4, 442.3, 557.0);
  ctx.bezierCurveTo(439.3, 556.8, 443.5, 562.1, 443.3, 559.0);
  ctx.bezierCurveTo(442.8, 559.0, 442.2, 558.2, 443.3, 558.0);
  ctx.bezierCurveTo(443.3, 560.1, 445.7, 566.3, 445.3, 564.0);
  ctx.bezierCurveTo(445.7, 562.3, 443.8, 561.4, 445.3, 561.0);
  ctx.bezierCurveTo(451.9, 571.8, 462.4, 581.6, 466.3, 592.0);
  ctx.bezierCurveTo(468.0, 592.0, 469.7, 592.0, 471.3, 592.0);
  ctx.bezierCurveTo(473.5, 586.5, 471.8, 577.1, 472.3, 570.0);
  ctx.bezierCurveTo(476.2, 568.9, 478.2, 565.9, 483.3, 566.0);
  ctx.bezierCurveTo(476.1, 546.0, 464.9, 525.4, 457.3, 509.0);
  ctx.bezierCurveTo(457.2, 511.5, 455.9, 512.9, 453.3, 513.0);
  ctx.bezierCurveTo(446.8, 508.2, 445.0, 498.7, 439.3, 493.0);
  ctx.bezierCurveTo(440.2, 498.1, 446.9, 502.8, 445.3, 507.0);
  ctx.bezierCurveTo(440.1, 503.8, 440.0, 496.3, 434.3, 496.0);
  ctx.bezierCurveTo(434.6, 499.8, 438.1, 500.2, 438.3, 504.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(271.3, 215.0);
  ctx.bezierCurveTo(270.9, 212.3, 272.2, 202.8, 270.3, 205.0);
  ctx.bezierCurveTo(270.7, 207.7, 269.4, 217.2, 271.3, 215.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(271.3, 223.0);
  ctx.bezierCurveTo(271.3, 221.5, 271.7, 214.8, 270.3, 218.0);
  ctx.bezierCurveTo(270.3, 219.5, 269.9, 226.2, 271.3, 223.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(253.3, 300.0);
  ctx.bezierCurveTo(244.3, 303.4, 256.5, 299.8, 253.3, 300.0);
  ctx.lineTo(253.3, 300.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(266.3, 305.0);
  ctx.bezierCurveTo(263.2, 304.5, 263.5, 307.5, 262.3, 309.0);
  ctx.bezierCurveTo(263.4, 309.6, 269.6, 309.3, 270.3, 309.0);
  ctx.bezierCurveTo(268.6, 306.0, 265.8, 308.7, 264.3, 307.0);
  ctx.bezierCurveTo(265.5, 306.9, 266.7, 306.7, 266.3, 305.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(262.3, 311.0);
  ctx.bezierCurveTo(262.3, 311.6, 262.2, 312.2, 261.3, 312.0);
  ctx.bezierCurveTo(262.0, 308.9, 259.6, 309.1, 260.3, 306.0);
  ctx.bezierCurveTo(255.8, 310.9, 254.3, 307.6, 249.3, 313.0);
  ctx.bezierCurveTo(253.6, 312.9, 257.8, 307.3, 259.3, 313.0);
  ctx.bezierCurveTo(259.5, 311.8, 259.1, 310.2, 260.3, 310.0);
  ctx.bezierCurveTo(259.2, 314.2, 265.1, 312.4, 262.3, 311.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(258.3, 314.0);
  ctx.bezierCurveTo(256.4, 314.3, 256.3, 312.6, 255.3, 312.0);
  ctx.bezierCurveTo(254.4, 314.1, 257.9, 316.5, 258.3, 314.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(242.3, 317.0);
  ctx.bezierCurveTo(242.4, 315.3, 241.5, 314.4, 240.3, 314.0);
  ctx.bezierCurveTo(240.3, 315.7, 241.1, 316.6, 242.3, 317.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(236.3, 322.0);
  ctx.bezierCurveTo(234.0, 322.3, 235.2, 319.1, 233.3, 319.0);
  ctx.bezierCurveTo(232.0, 321.8, 236.2, 323.9, 236.3, 322.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(234.3, 328.0);
  ctx.bezierCurveTo(236.4, 325.4, 231.0, 323.9, 230.3, 321.0);
  ctx.bezierCurveTo(230.7, 324.3, 232.7, 326.0, 234.3, 328.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(231.3, 330.0);
  ctx.bezierCurveTo(230.7, 329.9, 230.1, 329.9, 230.3, 329.0);
  ctx.bezierCurveTo(235.2, 328.3, 227.7, 327.8, 228.3, 329.0);
  ctx.bezierCurveTo(229.8, 328.5, 230.8, 332.9, 231.3, 330.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(440.3, 490.0);
  ctx.bezierCurveTo(440.6, 488.6, 446.2, 485.3, 443.3, 487.0);
  ctx.bezierCurveTo(441.6, 486.7, 437.4, 488.9, 440.3, 490.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(482.3, 577.0);
  ctx.bezierCurveTo(481.8, 575.8, 481.3, 574.7, 480.3, 574.0);
  ctx.bezierCurveTo(480.2, 575.3, 481.9, 579.5, 482.3, 577.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(475.3, 588.0);
  ctx.bezierCurveTo(474.7, 586.2, 476.5, 582.1, 474.3, 582.0);
  ctx.bezierCurveTo(472.9, 583.3, 472.6, 588.0, 475.3, 588.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(345.3, 109.0);
  ctx.bezierCurveTo(345.0, 106.9, 346.1, 98.3, 344.3, 101.0);
  ctx.bezierCurveTo(344.6, 103.1, 343.5, 111.7, 345.3, 109.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(346.3, 115.0);
  ctx.bezierCurveTo(346.6, 113.6, 345.7, 111.1, 345.3, 113.0);
  ctx.bezierCurveTo(345.0, 114.4, 345.9, 116.9, 346.3, 115.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(361.3, 130.0);
  ctx.bezierCurveTo(351.0, 130.9, 345.2, 127.7, 337.3, 127.0);
  ctx.bezierCurveTo(337.0, 129.1, 334.6, 129.0, 333.3, 130.0);
  ctx.bezierCurveTo(333.4, 136.9, 344.2, 133.1, 347.3, 137.0);
  ctx.bezierCurveTo(350.1, 134.6, 353.8, 132.4, 352.3, 131.0);
  ctx.bezierCurveTo(367.7, 130.7, 385.6, 143.0, 393.3, 128.0);
  ctx.bezierCurveTo(384.2, 121.5, 373.6, 129.0, 361.3, 130.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(388.3, 144.0);
  ctx.bezierCurveTo(388.5, 142.7, 388.5, 136.8, 387.3, 140.0);
  ctx.bezierCurveTo(387.2, 141.3, 387.2, 147.2, 388.3, 144.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(242.3, 346.0);
  ctx.bezierCurveTo(240.9, 343.7, 244.9, 342.2, 242.3, 342.0);
  ctx.bezierCurveTo(242.0, 342.6, 239.8, 345.8, 242.3, 346.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(290.3, 219.0);
  ctx.bezierCurveTo(289.8, 217.8, 289.3, 216.7, 288.3, 216.0);
  ctx.bezierCurveTo(288.2, 217.3, 289.9, 221.5, 290.3, 219.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(279.3, 212.0);
  ctx.bezierCurveTo(279.5, 211.3, 279.0, 206.2, 278.3, 209.0);
  ctx.bezierCurveTo(277.4, 212.8, 278.9, 214.0, 279.3, 212.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(260.3, 292.0);
  ctx.bezierCurveTo(258.0, 296.7, 254.1, 292.7, 260.3, 292.0);
  ctx.lineTo(260.3, 292.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(322.3, 562.0);
  ctx.bezierCurveTo(319.1, 561.7, 320.2, 565.9, 317.3, 566.0);
  ctx.bezierCurveTo(317.1, 570.6, 315.5, 575.4, 314.3, 580.0);
  ctx.bezierCurveTo(313.3, 584.2, 313.7, 590.5, 309.3, 592.0);

  ctx.bezierCurveTo(311.5, 582.2, 312.5, 571.2, 317.3, 564.0);
  ctx.bezierCurveTo(317.3, 561.4, 318.1, 562.8, 319.3, 563.0);
  ctx.bezierCurveTo(324.2, 549.2, 327.1, 533.4, 333.3, 521.0);
  ctx.bezierCurveTo(333.9, 518.9, 331.7, 514.1, 335.3, 515.0);
  ctx.bezierCurveTo(332.8, 534.8, 324.1, 552.3, 321.3, 569.0);
  ctx.bezierCurveTo(318.2, 567.1, 322.9, 564.7, 322.3, 562.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(434.3, 496.0);
  ctx.bezierCurveTo(440.0, 496.3, 440.1, 503.8, 445.3, 507.0);
  ctx.bezierCurveTo(446.9, 502.8, 440.2, 498.1, 439.3, 493.0);
  ctx.bezierCurveTo(445.0, 498.7, 446.8, 508.2, 453.3, 513.0);
  ctx.bezierCurveTo(455.9, 512.9, 457.2, 511.5, 457.3, 509.0);
  ctx.bezierCurveTo(464.9, 525.4, 476.1, 546.0, 483.3, 566.0);
  ctx.bezierCurveTo(478.2, 565.9, 476.2, 568.9, 472.3, 570.0);
  ctx.bezierCurveTo(471.8, 577.1, 473.5, 586.5, 471.3, 592.0);
  ctx.bezierCurveTo(469.7, 592.0, 468.0, 592.0, 466.3, 592.0);
  ctx.bezierCurveTo(462.4, 581.6, 451.9, 571.8, 445.3, 561.0);
  ctx.bezierCurveTo(443.8, 561.4, 445.7, 562.3, 445.3, 564.0);
  ctx.bezierCurveTo(445.7, 566.3, 443.3, 560.1, 443.3, 558.0);
  ctx.bezierCurveTo(442.2, 558.2, 442.8, 559.0, 443.3, 559.0);
  ctx.bezierCurveTo(443.5, 562.1, 439.3, 556.8, 442.3, 557.0);
  ctx.bezierCurveTo(437.2, 554.4, 433.6, 542.6, 428.3, 537.0);
  ctx.bezierCurveTo(428.8, 535.5, 429.2, 537.1, 430.3, 537.0);
  ctx.bezierCurveTo(429.6, 531.0, 423.3, 530.7, 419.3, 528.0);
  ctx.bezierCurveTo(419.1, 517.3, 427.8, 507.2, 438.3, 504.0);
  ctx.bezierCurveTo(438.1, 500.2, 434.6, 499.8, 434.3, 496.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(456.3, 524.0);
  ctx.bezierCurveTo(453.8, 519.6, 450.7, 512.4, 446.3, 508.0);
  ctx.bezierCurveTo(443.6, 510.7, 447.5, 510.2, 447.3, 513.0);
  ctx.bezierCurveTo(441.9, 515.2, 444.1, 525.2, 440.3, 529.0);
  ctx.bezierCurveTo(440.3, 523.0, 441.7, 516.8, 444.3, 511.0);
  ctx.bezierCurveTo(438.1, 508.9, 436.1, 515.8, 431.3, 518.0);
  ctx.bezierCurveTo(432.7, 524.3, 430.5, 529.5, 431.3, 534.0);
  ctx.bezierCurveTo(431.3, 533.8, 432.4, 538.6, 434.3, 540.0);
  ctx.bezierCurveTo(435.8, 541.1, 439.6, 552.1, 441.3, 554.0);
  ctx.bezierCurveTo(442.4, 555.2, 443.7, 554.1, 444.3, 555.0);
  ctx.bezierCurveTo(445.1, 556.2, 444.6, 558.8, 445.3, 560.0);
  ctx.bezierCurveTo(450.9, 569.3, 459.7, 577.9, 467.3, 588.0);
  ctx.bezierCurveTo(467.8, 579.2, 469.8, 574.4, 472.3, 566.0);
  ctx.bezierCurveTo(472.4, 567.2, 472.6, 568.4, 474.3, 568.0);
  ctx.bezierCurveTo(473.2, 562.4, 472.1, 556.9, 468.3, 554.0);
  ctx.bezierCurveTo(466.9, 549.3, 464.5, 544.1, 462.3, 539.0);
  ctx.bezierCurveTo(460.4, 534.4, 455.8, 528.7, 459.3, 525.0);
  ctx.bezierCurveTo(464.1, 537.9, 469.0, 550.6, 475.3, 562.0);
  ctx.bezierCurveTo(475.5, 560.5, 477.7, 561.1, 479.3, 561.0);
  ctx.bezierCurveTo(472.9, 544.8, 466.4, 528.6, 457.3, 515.0);
  ctx.bezierCurveTo(457.3, 516.7, 454.5, 515.6, 454.3, 517.0);
  ctx.bezierCurveTo(458.5, 517.5, 453.2, 524.6, 457.3, 520.0);
  ctx.bezierCurveTo(457.8, 522.2, 459.6, 525.4, 456.3, 526.0);
  ctx.bezierCurveTo(459.1, 523.4, 454.6, 521.0, 456.3, 524.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(441.3, 506.0);
  ctx.bezierCurveTo(433.3, 506.1, 425.4, 514.6, 422.3, 523.0);
  ctx.bezierCurveTo(425.5, 523.9, 424.4, 520.4, 426.3, 520.0);
  ctx.bezierCurveTo(427.4, 523.7, 423.8, 522.9, 424.3, 526.0);
  ctx.bezierCurveTo(425.8, 526.5, 426.8, 527.5, 428.3, 528.0);
  ctx.bezierCurveTo(430.3, 522.1, 427.2, 517.1, 432.3, 514.0);
  ctx.bezierCurveTo(432.5, 514.8, 432.3, 516.0, 433.3, 516.0);
  ctx.bezierCurveTo(435.2, 511.9, 440.2, 510.9, 441.3, 506.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(421.3, 526.0);
  ctx.bezierCurveTo(422.0, 526.0, 422.7, 526.0, 423.3, 526.0);
  ctx.bezierCurveTo(423.3, 525.3, 423.3, 524.7, 423.3, 524.0);
  ctx.bezierCurveTo(422.7, 524.0, 422.0, 524.0, 421.3, 524.0);
  ctx.bezierCurveTo(421.3, 524.7, 421.3, 525.3, 421.3, 526.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(477.3, 565.0);
  ctx.bezierCurveTo(481.1, 567.8, 481.7, 561.3, 477.3, 565.0);
  ctx.lineTo(477.3, 565.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(566.3, 111.0);
  ctx.bezierCurveTo(562.2, 121.2, 554.5, 127.8, 548.3, 136.0);
  ctx.bezierCurveTo(545.2, 135.8, 544.4, 133.2, 542.3, 132.0);
  ctx.bezierCurveTo(540.5, 134.5, 549.1, 135.2, 546.3, 142.0);
  ctx.bezierCurveTo(540.1, 137.9, 542.0, 130.3, 535.3, 128.0);
  ctx.bezierCurveTo(539.0, 125.6, 540.4, 121.0, 545.3, 120.0);
  ctx.bezierCurveTo(543.3, 122.8, 544.2, 129.2, 547.3, 130.0);
  ctx.bezierCurveTo(546.1, 127.0, 546.7, 118.6, 551.3, 116.0);
  ctx.bezierCurveTo(552.9, 119.1, 552.9, 127.9, 557.3, 125.0);
  ctx.bezierCurveTo(554.1, 123.5, 554.0, 119.0, 554.3, 114.0);
  ctx.bezierCurveTo(558.1, 111.8, 560.7, 108.4, 567.3, 109.0);
  ctx.bezierCurveTo(567.2, 110.2, 567.5, 110.8, 568.3, 111.0);
  ctx.bezierCurveTo(569.1, 114.1, 565.6, 112.9, 566.3, 116.0);
  ctx.bezierCurveTo(563.4, 115.1, 567.6, 113.5, 566.3, 111.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(538.3, 131.0);
  ctx.bezierCurveTo(537.3, 134.2, 539.5, 135.9, 543.3, 140.0);
  ctx.bezierCurveTo(540.7, 142.4, 542.2, 148.9, 540.3, 152.0);
  ctx.bezierCurveTo(543.6, 152.9, 544.3, 157.0, 541.3, 161.0);
  ctx.bezierCurveTo(543.3, 158.8, 545.3, 156.6, 547.3, 157.0);
  ctx.bezierCurveTo(550.2, 158.3, 546.5, 161.4, 546.3, 163.0);
  ctx.bezierCurveTo(544.2, 162.7, 547.8, 160.3, 545.3, 159.0);
  ctx.bezierCurveTo(535.7, 169.1, 528.7, 181.7, 512.3, 185.0);
  ctx.bezierCurveTo(512.5, 186.2, 514.1, 185.8, 515.3, 186.0);
  ctx.bezierCurveTo(514.1, 192.0, 507.7, 186.7, 503.3, 187.0);
  ctx.bezierCurveTo(503.6, 185.6, 505.8, 186.2, 507.3, 186.0);
  ctx.bezierCurveTo(498.0, 182.4, 486.5, 180.8, 481.3, 173.0);
  ctx.bezierCurveTo(481.9, 162.8, 478.5, 159.4, 480.3, 150.0);
  ctx.bezierCurveTo(486.0, 148.7, 490.5, 146.2, 493.3, 142.0);
  ctx.bezierCurveTo(492.8, 141.2, 492.3, 140.4, 492.3, 139.0);
  ctx.bezierCurveTo(489.8, 142.5, 486.9, 145.6, 480.3, 145.0);
  ctx.bezierCurveTo(478.5, 142.5, 475.5, 141.1, 475.3, 137.0);
  ctx.bezierCurveTo(482.9, 140.7, 483.2, 132.7, 488.3, 131.0);
  ctx.bezierCurveTo(491.3, 133.4, 491.6, 138.4, 495.3, 140.0);
  ctx.bezierCurveTo(498.3, 137.9, 492.8, 135.9, 493.3, 133.0);
  ctx.bezierCurveTo(497.7, 130.3, 497.6, 126.5, 503.3, 127.0);
  ctx.bezierCurveTo(502.7, 124.0, 501.2, 128.0, 499.3, 127.0);
  ctx.bezierCurveTo(500.4, 123.4, 502.6, 121.0, 504.3, 118.0);
  ctx.bezierCurveTo(507.9, 121.4, 513.7, 122.7, 520.3, 123.0);
  ctx.bezierCurveTo(521.6, 130.4, 536.2, 124.5, 536.3, 133.0);
  ctx.bezierCurveTo(537.2, 132.6, 538.1, 132.1, 538.3, 131.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(497.3, 147.0);
  ctx.bezierCurveTo(499.3, 139.5, 508.1, 136.1, 507.3, 133.0);
  ctx.bezierCurveTo(510.4, 133.0, 511.6, 135.0, 514.3, 133.0);
  ctx.bezierCurveTo(511.9, 132.4, 509.8, 131.6, 506.3, 132.0);
  ctx.bezierCurveTo(494.8, 138.9, 489.2, 173.3, 510.3, 170.0);
  ctx.bezierCurveTo(498.1, 168.9, 494.1, 158.8, 497.3, 147.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(529.3, 138.0);
  ctx.bezierCurveTo(526.5, 135.2, 521.3, 129.4, 515.3, 133.0);
  ctx.bezierCurveTo(523.3, 130.7, 526.0, 138.9, 529.3, 138.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(534.3, 142.0);
  ctx.bezierCurveTo(532.3, 141.7, 532.4, 139.3, 530.3, 139.0);
  ctx.bezierCurveTo(537.8, 155.2, 529.5, 171.7, 512.3, 172.0);
  ctx.bezierCurveTo(514.2, 171.9, 514.4, 172.8, 513.3, 174.0);
  ctx.bezierCurveTo(521.4, 172.7, 532.0, 168.7, 533.3, 164.0);
  ctx.bezierCurveTo(533.0, 164.9, 530.6, 168.4, 530.3, 166.0);
  ctx.bezierCurveTo(533.0, 163.5, 538.8, 159.8, 537.3, 159.0);
  ctx.bezierCurveTo(536.0, 158.8, 535.3, 164.1, 534.3, 161.0);
  ctx.bezierCurveTo(534.8, 157.7, 538.3, 152.4, 535.3, 149.0);
  ctx.bezierCurveTo(535.2, 150.2, 535.5, 151.8, 534.3, 152.0);
  ctx.bezierCurveTo(534.0, 149.2, 531.7, 143.4, 533.3, 142.0);
  ctx.bezierCurveTo(533.3, 142.6, 534.1, 143.1, 534.3, 142.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(528.3, 169.0);
  ctx.bezierCurveTo(526.0, 174.0, 519.7, 175.0, 516.3, 179.0);
  ctx.bezierCurveTo(521.0, 177.0, 528.4, 172.5, 528.3, 169.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(504.3, 145.0);
  ctx.bezierCurveTo(504.2, 159.4, 515.1, 163.9, 526.3, 157.0);
  ctx.bezierCurveTo(533.6, 143.6, 514.2, 135.0, 506.3, 145.0);
  ctx.bezierCurveTo(505.9, 142.9, 511.8, 139.9, 507.3, 140.0);
  ctx.bezierCurveTo(506.1, 141.5, 506.1, 144.1, 504.3, 145.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(487.3, 162.0);
  ctx.bezierCurveTo(487.5, 161.3, 487.0, 156.2, 486.3, 159.0);
  ctx.bezierCurveTo(485.4, 162.8, 486.9, 164.0, 487.3, 162.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(494.3, 179.0);
  ctx.bezierCurveTo(495.3, 180.9, 499.6, 179.1, 495.3, 179.0);
  ctx.bezierCurveTo(498.0, 176.4, 501.2, 174.2, 502.3, 170.0);
  ctx.bezierCurveTo(498.4, 171.7, 497.4, 176.4, 494.3, 179.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(504.3, 183.0);
  ctx.bezierCurveTo(509.4, 184.7, 516.1, 178.7, 514.3, 180.0);
  ctx.bezierCurveTo(510.6, 180.6, 507.4, 181.8, 504.3, 183.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(492.3, 189.0);
  ctx.bezierCurveTo(490.1, 186.6, 494.5, 190.2, 494.3, 192.0);
  ctx.bezierCurveTo(496.5, 190.8, 491.8, 187.9, 492.3, 185.0);
  ctx.bezierCurveTo(497.6, 186.8, 497.3, 188.0, 503.3, 189.0);
  ctx.bezierCurveTo(502.4, 192.9, 502.1, 195.2, 504.3, 198.0);
  ctx.bezierCurveTo(506.7, 197.7, 508.6, 197.0, 509.3, 195.0);
  ctx.bezierCurveTo(510.3, 195.6, 510.4, 197.3, 512.3, 197.0);
  ctx.bezierCurveTo(505.9, 210.6, 504.9, 229.6, 491.3, 236.0);
  ctx.bezierCurveTo(493.2, 246.8, 480.7, 251.2, 471.3, 254.0);
  ctx.bezierCurveTo(479.6, 256.1, 468.5, 257.1, 463.3, 257.0);
  ctx.bezierCurveTo(463.1, 253.9, 460.5, 253.1, 459.3, 251.0);
  ctx.bezierCurveTo(457.2, 252.2, 461.8, 255.1, 461.3, 258.0);
  ctx.bezierCurveTo(453.7, 258.1, 448.4, 256.5, 446.3, 255.0);
  ctx.bezierCurveTo(441.0, 251.0, 441.4, 245.9, 438.3, 240.0);
  ctx.bezierCurveTo(437.8, 239.0, 436.8, 239.0, 435.3, 239.0);
  ctx.bezierCurveTo(434.6, 235.9, 437.0, 236.1, 436.3, 233.0);
  ctx.bezierCurveTo(430.7, 237.7, 437.4, 246.4, 438.3, 248.0);
  ctx.bezierCurveTo(438.9, 249.0, 438.6, 248.9, 438.3, 251.0);
  ctx.bezierCurveTo(441.9, 248.0, 440.2, 254.2, 439.3, 251.0);
  ctx.bezierCurveTo(440.0, 253.2, 444.5, 257.0, 443.3, 262.0);
  ctx.bezierCurveTo(437.7, 261.3, 437.8, 260.9, 434.3, 258.0);
  ctx.bezierCurveTo(436.4, 261.6, 440.8, 268.1, 442.3, 269.0);
  ctx.bezierCurveTo(442.7, 274.6, 431.6, 272.2, 426.3, 272.0);
  ctx.bezierCurveTo(421.0, 261.7, 419.5, 255.4, 420.3, 242.0);
  ctx.bezierCurveTo(424.0, 244.6, 421.6, 253.3, 422.3, 259.0);
  ctx.bezierCurveTo(425.6, 255.5, 422.3, 250.2, 423.3, 248.0);
  ctx.bezierCurveTo(423.5, 247.7, 425.3, 249.5, 425.3, 250.0);
  ctx.bezierCurveTo(425.1, 247.7, 423.7, 245.9, 421.3, 241.0);
  ctx.bezierCurveTo(419.8, 236.0, 424.2, 230.2, 420.3, 229.0);
  ctx.bezierCurveTo(422.2, 225.7, 429.8, 227.2, 430.3, 231.0);
  ctx.bezierCurveTo(429.7, 227.8, 435.4, 229.5, 437.3, 232.0);
  ctx.bezierCurveTo(437.4, 226.9, 425.4, 225.2, 417.3, 225.0);
  ctx.bezierCurveTo(416.1, 220.9, 412.3, 221.0, 414.3, 216.0);
  ctx.bezierCurveTo(420.5, 216.5, 423.9, 214.2, 430.3, 215.0);
  ctx.bezierCurveTo(430.1, 215.8, 429.3, 216.0, 429.3, 217.0);
  ctx.bezierCurveTo(437.0, 217.0, 438.5, 223.1, 440.3, 229.0);
  ctx.bezierCurveTo(441.3, 223.8, 445.0, 227.6, 446.3, 223.0);
  ctx.bezierCurveTo(447.9, 222.8, 448.3, 229.5, 445.3, 228.0);
  ctx.bezierCurveTo(449.4, 230.8, 456.2, 234.3, 452.3, 242.0);
  ctx.bezierCurveTo(445.8, 240.9, 443.8, 235.2, 441.3, 230.0);
  ctx.bezierCurveTo(440.8, 235.2, 444.4, 244.9, 453.3, 244.0);
  ctx.bezierCurveTo(454.9, 242.3, 456.3, 240.4, 456.3, 237.0);
  ctx.bezierCurveTo(456.3, 233.3, 453.5, 232.5, 452.3, 230.0);
  ctx.bezierCurveTo(454.5, 225.1, 458.0, 222.3, 464.3, 224.0);
  ctx.bezierCurveTo(463.3, 225.7, 460.1, 225.1, 458.3, 226.0);
  ctx.bezierCurveTo(461.8, 229.0, 458.4, 228.8, 456.3, 231.0);
  ctx.bezierCurveTo(456.4, 233.2, 460.6, 231.4, 462.3, 232.0);
  ctx.bezierCurveTo(461.5, 234.2, 457.6, 233.3, 457.3, 236.0);
  ctx.bezierCurveTo(466.3, 231.0, 478.9, 229.6, 491.3, 228.0);
  ctx.bezierCurveTo(483.2, 225.9, 473.0, 230.4, 463.3, 230.0);
  ctx.bezierCurveTo(463.3, 231.0, 464.5, 230.8, 465.3, 231.0);
  ctx.bezierCurveTo(463.9, 234.0, 461.4, 229.7, 458.3, 231.0);
  ctx.bezierCurveTo(466.4, 226.1, 480.4, 227.0, 491.3, 225.0);
  ctx.bezierCurveTo(483.1, 223.4, 471.1, 226.7, 461.3, 227.0);
  ctx.bezierCurveTo(468.3, 224.6, 482.6, 221.3, 491.3, 222.0);
  ctx.bezierCurveTo(493.0, 222.1, 493.2, 222.4, 493.3, 224.0);
  ctx.bezierCurveTo(495.6, 218.3, 502.7, 212.1, 502.3, 207.0);
  ctx.bezierCurveTo(504.3, 207.3, 505.6, 203.7, 509.3, 203.0);
  ctx.bezierCurveTo(508.5, 200.7, 504.6, 203.5, 504.3, 205.0);
  ctx.bezierCurveTo(501.6, 204.1, 506.6, 202.8, 506.3, 201.0);
  ctx.bezierCurveTo(499.5, 204.9, 498.2, 214.2, 492.3, 219.0);
  ctx.bezierCurveTo(492.5, 218.2, 493.3, 218.0, 493.3, 217.0);
  ctx.bezierCurveTo(485.0, 217.4, 476.7, 217.7, 469.3, 219.0);
  ctx.bezierCurveTo(470.7, 215.7, 472.5, 212.9, 477.3, 213.0);
  ctx.bezierCurveTo(476.5, 210.1, 474.1, 213.6, 472.3, 213.0);
  ctx.bezierCurveTo(473.4, 208.3, 479.6, 210.4, 475.3, 205.0);
  ctx.bezierCurveTo(479.0, 205.0, 482.7, 205.0, 486.3, 205.0);
  ctx.bezierCurveTo(484.6, 202.7, 478.7, 204.6, 475.3, 204.0);
  ctx.bezierCurveTo(477.1, 201.8, 476.3, 197.0, 479.3, 196.0);
  ctx.bezierCurveTo(474.0, 191.1, 471.0, 176.2, 477.3, 171.0);
  ctx.bezierCurveTo(483.9, 174.9, 478.8, 185.3, 484.3, 191.0);
  ctx.bezierCurveTo(488.1, 193.9, 493.3, 195.4, 498.3, 197.0);
  ctx.bezierCurveTo(495.6, 195.1, 492.3, 193.7, 492.3, 189.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(465.3, 234.0);
  ctx.bezierCurveTo(464.3, 234.1, 464.5, 235.3, 466.3, 235.0);
  ctx.bezierCurveTo(474.0, 232.6, 483.3, 232.0, 490.3, 229.0);
  ctx.bezierCurveTo(481.2, 229.9, 474.0, 232.7, 465.3, 234.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(472.3, 217.0);
  ctx.bezierCurveTo(476.3, 217.0, 480.3, 217.0, 484.3, 217.0);
  ctx.bezierCurveTo(483.8, 213.1, 473.1, 214.7, 472.3, 217.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(487.3, 202.0);
  ctx.bezierCurveTo(491.0, 202.7, 497.6, 207.4, 500.3, 204.0);
  ctx.bezierCurveTo(492.8, 201.8, 477.9, 200.1, 487.3, 202.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(483.3, 208.0);
  ctx.bezierCurveTo(481.9, 208.5, 478.1, 206.8, 478.3, 209.0);
  ctx.bezierCurveTo(479.8, 208.5, 483.5, 210.2, 483.3, 208.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(486.3, 215.0);
  ctx.bezierCurveTo(488.8, 214.2, 494.9, 216.9, 494.3, 213.0);
  ctx.bezierCurveTo(491.3, 213.3, 486.5, 211.9, 486.3, 215.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(476.3, 235.0);
  ctx.bezierCurveTo(476.2, 235.0, 476.4, 235.9, 476.3, 236.0);
  ctx.bezierCurveTo(470.8, 239.9, 483.4, 232.6, 476.3, 235.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(425.3, 257.0);
  ctx.bezierCurveTo(425.6, 255.6, 424.7, 253.1, 424.3, 255.0);
  ctx.bezierCurveTo(424.0, 256.4, 424.9, 258.9, 425.3, 257.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(433.3, 259.0);
  ctx.bezierCurveTo(433.3, 258.3, 433.3, 257.7, 433.3, 257.0);
  ctx.bezierCurveTo(433.3, 256.4, 433.2, 255.8, 432.3, 256.0);
  ctx.bezierCurveTo(432.0, 259.5, 429.6, 252.5, 429.3, 256.0);
  ctx.bezierCurveTo(431.9, 255.7, 430.1, 259.9, 433.3, 259.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(426.3, 262.0);
  ctx.bezierCurveTo(426.6, 260.6, 425.7, 258.1, 425.3, 260.0);
  ctx.bezierCurveTo(425.0, 261.4, 425.9, 263.9, 426.3, 262.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(447.3, 209.0);
  ctx.bezierCurveTo(453.5, 207.5, 457.2, 203.5, 463.3, 202.0);
  ctx.bezierCurveTo(464.6, 197.9, 468.5, 190.6, 473.3, 187.0);
  ctx.bezierCurveTo(470.6, 191.3, 478.1, 191.9, 478.3, 195.0);
  ctx.bezierCurveTo(478.5, 197.9, 476.2, 195.7, 474.3, 199.0);
  ctx.bezierCurveTo(472.3, 202.4, 475.3, 208.4, 468.3, 207.0);
  ctx.bezierCurveTo(468.6, 208.4, 470.8, 207.8, 472.3, 208.0);
  ctx.bezierCurveTo(471.3, 212.0, 469.0, 214.6, 468.3, 219.0);
  ctx.bezierCurveTo(459.4, 216.2, 457.1, 227.5, 448.3, 228.0);
  ctx.bezierCurveTo(448.3, 225.7, 448.3, 223.3, 448.3, 221.0);
  ctx.bezierCurveTo(445.6, 220.3, 446.4, 223.1, 445.3, 224.0);
  ctx.bezierCurveTo(443.4, 225.1, 446.9, 217.8, 444.3, 221.0);
  ctx.bezierCurveTo(443.9, 220.4, 449.8, 214.1, 447.3, 209.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(458.3, 504.0);
  ctx.bezierCurveTo(456.3, 495.5, 468.8, 495.8, 476.3, 498.0);
  ctx.bezierCurveTo(470.4, 490.0, 462.9, 495.4, 454.3, 497.0);
  ctx.bezierCurveTo(452.8, 490.1, 449.5, 485.2, 446.3, 480.0);
  ctx.bezierCurveTo(454.8, 477.6, 467.6, 479.3, 475.3, 481.0);
  ctx.bezierCurveTo(476.9, 484.8, 478.2, 488.8, 479.3, 493.0);
  ctx.bezierCurveTo(477.0, 492.7, 477.1, 489.9, 475.3, 489.0);
  ctx.bezierCurveTo(476.6, 497.0, 480.4, 502.6, 482.3, 510.0);
  ctx.bezierCurveTo(479.4, 507.6, 478.2, 503.5, 477.3, 499.0);
  ctx.bezierCurveTo(475.6, 499.9, 475.1, 502.1, 475.3, 505.0);
  ctx.bezierCurveTo(475.6, 495.4, 461.5, 498.2, 458.3, 504.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(457.3, 475.0);
  ctx.bezierCurveTo(455.5, 478.1, 445.5, 475.8, 443.3, 473.0);
  ctx.bezierCurveTo(445.1, 475.8, 438.0, 478.5, 439.3, 478.0);
  ctx.bezierCurveTo(434.9, 478.7, 432.4, 469.0, 426.3, 468.0);
  ctx.bezierCurveTo(430.8, 468.4, 436.9, 465.4, 443.3, 468.0);
  ctx.bezierCurveTo(446.8, 469.4, 447.9, 474.2, 451.3, 475.0);
  ctx.bezierCurveTo(458.0, 476.5, 461.4, 473.2, 466.3, 469.0);
  ctx.bezierCurveTo(465.5, 465.8, 463.4, 464.0, 463.3, 460.0);
  ctx.bezierCurveTo(466.7, 459.0, 464.9, 463.1, 465.3, 465.0);
  ctx.bezierCurveTo(466.3, 465.0, 466.1, 463.8, 466.3, 463.0);
  ctx.bezierCurveTo(469.9, 467.1, 470.5, 474.2, 474.3, 478.0);
  ctx.bezierCurveTo(471.4, 479.0, 459.1, 478.0, 457.3, 475.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(436.3, 478.0);
  ctx.bezierCurveTo(433.4, 485.7, 425.3, 488.4, 420.3, 494.0);
  ctx.bezierCurveTo(411.8, 503.7, 406.4, 515.8, 400.3, 528.0);
  ctx.bezierCurveTo(399.5, 527.5, 398.7, 527.0, 397.3, 527.0);
  ctx.bezierCurveTo(398.0, 528.0, 399.6, 528.0, 399.3, 530.0);
  ctx.bezierCurveTo(393.7, 529.6, 391.7, 525.7, 386.3, 525.0);
  ctx.bezierCurveTo(383.1, 514.2, 376.9, 506.4, 375.3, 494.0);
  ctx.bezierCurveTo(379.0, 498.7, 375.2, 491.2, 376.3, 487.0);
  ctx.bezierCurveTo(389.0, 475.2, 396.4, 453.3, 416.3, 452.0);
  ctx.bezierCurveTo(417.3, 455.2, 415.6, 457.2, 420.3, 458.0);
  ctx.bezierCurveTo(420.5, 456.6, 416.5, 450.8, 415.3, 450.0);
  ctx.bezierCurveTo(417.4, 447.9, 422.1, 451.8, 422.3, 455.0);
  ctx.bezierCurveTo(424.6, 454.2, 421.8, 450.3, 420.3, 450.0);
  ctx.bezierCurveTo(422.6, 444.9, 428.6, 451.2, 429.3, 450.0);
  ctx.bezierCurveTo(429.2, 451.9, 430.8, 456.0, 432.3, 459.0);
  ctx.bezierCurveTo(433.6, 458.8, 433.6, 456.0, 432.3, 456.0);
  ctx.bezierCurveTo(434.7, 455.6, 438.5, 462.4, 441.3, 465.0);
  ctx.bezierCurveTo(437.7, 467.6, 427.8, 461.5, 424.3, 466.0);
  ctx.bezierCurveTo(422.9, 465.6, 424.4, 465.1, 424.3, 464.0);
  ctx.bezierCurveTo(411.8, 473.6, 401.5, 486.4, 392.3, 501.0);
  ctx.bezierCurveTo(388.6, 506.9, 383.3, 512.8, 385.3, 520.0);
  ctx.bezierCurveTo(386.9, 518.5, 387.4, 516.1, 387.3, 513.0);
  ctx.bezierCurveTo(388.3, 513.0, 388.1, 514.2, 388.3, 515.0);
  ctx.bezierCurveTo(394.7, 502.0, 401.4, 489.5, 412.3, 481.0);
  ctx.bezierCurveTo(408.7, 479.6, 419.9, 470.9, 425.3, 469.0);
  ctx.bezierCurveTo(430.8, 470.2, 431.5, 476.2, 436.3, 478.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(429.3, 463.0);
  ctx.bezierCurveTo(428.3, 461.9, 427.3, 455.9, 425.3, 459.0);
  ctx.bezierCurveTo(427.0, 459.4, 428.2, 465.3, 429.3, 463.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(413.3, 508.0);
  ctx.bezierCurveTo(415.6, 506.1, 410.8, 512.2, 410.3, 514.0);
  ctx.bezierCurveTo(408.4, 513.0, 412.3, 509.4, 413.3, 508.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(403.3, 525.0);
  ctx.bezierCurveTo(404.7, 525.2, 402.8, 530.4, 400.3, 530.0);
  ctx.bezierCurveTo(400.9, 527.9, 402.4, 526.8, 403.3, 525.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(412.3, 551.0);
  ctx.bezierCurveTo(416.4, 550.9, 418.8, 561.1, 423.3, 564.0);
  ctx.bezierCurveTo(419.4, 563.9, 416.1, 554.5, 412.3, 551.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(318.3, 320.0);
  ctx.bezierCurveTo(319.6, 323.3, 321.2, 325.4, 321.3, 335.0);
  ctx.bezierCurveTo(320.5, 334.8, 320.3, 334.0, 319.3, 334.0);
  ctx.bezierCurveTo(318.6, 336.7, 321.4, 335.9, 322.3, 337.0);
  ctx.bezierCurveTo(316.5, 338.8, 311.8, 330.9, 310.3, 325.0);
  ctx.bezierCurveTo(309.5, 325.5, 308.7, 326.0, 307.3, 326.0);
  ctx.bezierCurveTo(305.7, 318.9, 308.2, 313.3, 305.3, 307.0);
  ctx.bezierCurveTo(309.8, 311.2, 312.5, 317.1, 320.3, 318.0);
  ctx.bezierCurveTo(318.9, 320.6, 314.2, 318.2, 312.3, 318.0);
  ctx.bezierCurveTo(313.4, 319.0, 317.2, 322.3, 318.3, 320.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(322.3, 328.0);
  ctx.bezierCurveTo(324.0, 326.4, 329.1, 329.8, 333.3, 329.0);
  ctx.bezierCurveTo(330.2, 326.8, 323.9, 327.8, 321.3, 325.0);
  ctx.bezierCurveTo(321.2, 320.5, 323.9, 325.9, 326.3, 325.0);
  ctx.bezierCurveTo(326.0, 322.6, 321.6, 324.4, 322.3, 321.0);
  ctx.bezierCurveTo(327.7, 322.1, 329.0, 319.0, 333.3, 319.0);
  ctx.bezierCurveTo(329.7, 315.7, 326.0, 321.0, 321.3, 320.0);
  ctx.bezierCurveTo(322.7, 316.4, 329.5, 318.2, 332.3, 316.0);
  ctx.bezierCurveTo(331.0, 314.4, 325.4, 317.0, 321.3, 316.0);
  ctx.bezierCurveTo(319.6, 313.0, 319.6, 304.7, 322.3, 303.0);
  ctx.bezierCurveTo(320.2, 303.6, 319.1, 305.1, 317.3, 306.0);
  ctx.bezierCurveTo(320.6, 307.1, 319.0, 313.0, 319.3, 317.0);
  ctx.bezierCurveTo(309.6, 313.7, 305.9, 304.9, 303.3, 297.0);
  ctx.bezierCurveTo(318.4, 296.1, 338.0, 295.3, 355.3, 299.0);
  ctx.bezierCurveTo(351.1, 303.1, 342.5, 310.6, 335.3, 315.0);
  ctx.bezierCurveTo(343.0, 311.0, 352.3, 308.6, 356.3, 301.0);
  ctx.bezierCurveTo(359.8, 301.0, 358.2, 306.4, 359.3, 304.0);
  ctx.bezierCurveTo(361.7, 306.4, 356.4, 309.7, 357.3, 314.0);
  ctx.bezierCurveTo(359.7, 312.4, 359.4, 308.1, 361.3, 306.0);
  ctx.bezierCurveTo(362.9, 309.8, 358.4, 314.3, 361.3, 319.0);
  ctx.bezierCurveTo(363.7, 317.4, 363.4, 313.1, 365.3, 311.0);
  ctx.bezierCurveTo(367.6, 313.3, 362.8, 317.1, 362.3, 320.0);
  ctx.bezierCurveTo(365.2, 322.2, 361.4, 324.9, 365.3, 326.0);
  ctx.bezierCurveTo(356.4, 334.2, 336.7, 343.4, 322.3, 334.0);
  ctx.bezierCurveTo(324.7, 330.2, 330.4, 337.9, 336.3, 337.0);
  ctx.bezierCurveTo(330.8, 334.3, 323.2, 332.6, 322.3, 328.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(354.3, 309.0);
  ctx.bezierCurveTo(353.8, 306.1, 359.3, 304.1, 356.3, 302.0);
  ctx.bezierCurveTo(356.1, 304.2, 351.8, 307.4, 354.3, 309.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(327.3, 332.0);
  ctx.bezierCurveTo(330.7, 332.8, 333.0, 330.5, 328.3, 331.0);
  ctx.bezierCurveTo(328.2, 329.7, 322.2, 329.7, 325.3, 331.0);
  ctx.bezierCurveTo(326.1, 331.2, 327.3, 331.0, 327.3, 332.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(305.3, 299.0);
  ctx.bezierCurveTo(310.9, 297.4, 314.4, 304.5, 316.3, 298.0);
  ctx.bezierCurveTo(313.3, 298.4, 303.4, 297.0, 305.3, 299.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(317.3, 302.0);
  ctx.bezierCurveTo(321.0, 304.1, 321.8, 296.9, 318.3, 298.0);
  ctx.bezierCurveTo(318.4, 299.7, 318.1, 301.1, 317.3, 302.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(336.3, 332.0);
  ctx.bezierCurveTo(329.9, 330.8, 334.1, 335.1, 336.3, 332.0);
  ctx.lineTo(336.3, 332.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(306.3, 315.0);
  ctx.bezierCurveTo(303.7, 312.6, 300.3, 302.4, 300.3, 294.0);
  ctx.bezierCurveTo(303.1, 300.2, 303.9, 308.4, 306.3, 315.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(539.3, 90.0);
  ctx.bezierCurveTo(541.6, 91.1, 536.4, 93.0, 537.3, 96.0);
  ctx.bezierCurveTo(534.0, 93.9, 539.0, 91.8, 539.3, 90.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(483.3, 126.0);
  ctx.bezierCurveTo(489.2, 129.6, 480.4, 136.0, 478.3, 135.0);
  ctx.bezierCurveTo(476.2, 132.1, 484.1, 130.8, 483.3, 126.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(510.3, 170.0);
  ctx.bezierCurveTo(489.2, 173.3, 494.8, 138.9, 506.3, 132.0);
  ctx.bezierCurveTo(509.8, 131.6, 511.9, 132.4, 514.3, 133.0);
  ctx.bezierCurveTo(511.6, 135.0, 510.4, 133.0, 507.3, 133.0);
  ctx.bezierCurveTo(508.1, 136.1, 499.3, 139.5, 497.3, 147.0);
  ctx.bezierCurveTo(494.1, 158.8, 498.1, 168.9, 510.3, 170.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(515.3, 133.0);
  ctx.bezierCurveTo(521.3, 129.4, 526.5, 135.2, 529.3, 138.0);
  ctx.bezierCurveTo(526.0, 138.9, 523.3, 130.7, 515.3, 133.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(533.3, 142.0);
  ctx.bezierCurveTo(531.7, 143.4, 534.0, 149.2, 534.3, 152.0);
  ctx.bezierCurveTo(535.5, 151.8, 535.2, 150.2, 535.3, 149.0);
  ctx.bezierCurveTo(538.3, 152.4, 534.8, 157.7, 534.3, 161.0);
  ctx.bezierCurveTo(535.3, 164.1, 536.0, 158.8, 537.3, 159.0);
  ctx.bezierCurveTo(538.8, 159.8, 533.0, 163.5, 530.3, 166.0);
  ctx.bezierCurveTo(530.6, 168.4, 533.0, 164.9, 533.3, 164.0);
  ctx.bezierCurveTo(532.0, 168.7, 521.4, 172.7, 513.3, 174.0);
  ctx.bezierCurveTo(514.4, 172.8, 514.2, 171.9, 512.3, 172.0);
  ctx.bezierCurveTo(529.5, 171.7, 537.8, 155.2, 530.3, 139.0);
  ctx.bezierCurveTo(532.4, 139.3, 532.3, 141.7, 534.3, 142.0);
  ctx.bezierCurveTo(534.1, 143.1, 533.3, 142.6, 533.3, 142.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(516.3, 179.0);
  ctx.bezierCurveTo(519.7, 175.0, 526.0, 174.0, 528.3, 169.0);
  ctx.bezierCurveTo(528.4, 172.5, 521.0, 177.0, 516.3, 179.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(507.3, 140.0);
  ctx.bezierCurveTo(511.8, 139.9, 505.9, 142.9, 506.3, 145.0);
  ctx.bezierCurveTo(514.2, 135.0, 533.6, 143.6, 526.3, 157.0);
  ctx.bezierCurveTo(515.1, 163.9, 504.2, 159.4, 504.3, 145.0);
  ctx.bezierCurveTo(506.1, 144.1, 506.1, 141.5, 507.3, 140.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(512.3, 145.0);
  ctx.bezierCurveTo(514.2, 144.6, 518.3, 146.4, 517.3, 143.0);
  ctx.bezierCurveTo(515.3, 143.0, 513.3, 143.0, 511.3, 143.0);
  ctx.bezierCurveTo(500.1, 157.5, 524.9, 163.1, 525.3, 150.0);
  ctx.bezierCurveTo(525.4, 146.7, 521.5, 140.3, 518.3, 145.0);
  ctx.bezierCurveTo(518.9, 146.7, 523.1, 144.9, 523.3, 147.0);
  ctx.bezierCurveTo(516.8, 146.5, 518.2, 147.8, 512.3, 145.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(398.3, 144.0);
  ctx.bezierCurveTo(398.9, 146.1, 397.1, 150.6, 399.3, 151.0);
  ctx.bezierCurveTo(393.6, 156.7, 388.8, 163.1, 383.3, 169.0);
  ctx.bezierCurveTo(388.7, 168.3, 391.5, 170.1, 395.3, 171.0);
  ctx.bezierCurveTo(395.0, 172.3, 393.6, 172.6, 393.3, 174.0);
  ctx.bezierCurveTo(394.8, 174.5, 398.7, 170.2, 402.3, 174.0);
  ctx.bezierCurveTo(403.1, 179.7, 400.5, 182.2, 399.3, 186.0);
  ctx.bezierCurveTo(399.7, 189.7, 402.7, 190.6, 405.3, 192.0);
  ctx.bezierCurveTo(404.4, 194.0, 403.3, 196.0, 402.3, 198.0);
  ctx.bezierCurveTo(397.2, 196.1, 393.6, 192.7, 387.3, 192.0);
  ctx.bezierCurveTo(387.2, 186.9, 389.8, 184.5, 391.3, 181.0);
  ctx.bezierCurveTo(390.6, 180.1, 389.5, 179.5, 388.3, 179.0);
  ctx.bezierCurveTo(383.5, 179.5, 383.6, 185.0, 381.3, 188.0);
  ctx.bezierCurveTo(378.1, 188.6, 376.7, 187.3, 374.3, 187.0);
  ctx.bezierCurveTo(376.9, 180.6, 380.8, 175.5, 384.3, 170.0);
  ctx.bezierCurveTo(377.6, 172.6, 376.4, 180.7, 372.3, 186.0);
  ctx.bezierCurveTo(365.1, 182.4, 354.4, 187.5, 350.3, 182.0);
  ctx.bezierCurveTo(352.2, 175.8, 368.3, 175.2, 372.3, 180.0);
  ctx.bezierCurveTo(373.7, 179.0, 375.3, 178.4, 376.3, 177.0);
  ctx.bezierCurveTo(376.2, 175.1, 372.6, 178.6, 371.3, 176.0);
  ctx.bezierCurveTo(372.4, 173.8, 373.0, 171.0, 374.3, 169.0);
  ctx.bezierCurveTo(375.5, 169.8, 377.0, 170.3, 379.3, 170.0);
  ctx.bezierCurveTo(388.2, 163.9, 390.4, 151.1, 398.3, 144.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(335.3, 146.0);
  ctx.bezierCurveTo(337.2, 147.8, 339.0, 149.7, 338.3, 154.0);
  ctx.bezierCurveTo(336.6, 152.1, 336.2, 148.8, 335.3, 146.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(475.3, 169.0);
  ctx.bezierCurveTo(474.4, 172.0, 473.3, 175.0, 472.3, 178.0);
  ctx.bezierCurveTo(463.9, 179.3, 459.8, 184.8, 455.3, 190.0);
  ctx.bezierCurveTo(455.0, 187.3, 454.6, 188.6, 453.3, 186.0);
  ctx.bezierCurveTo(443.7, 188.3, 437.5, 188.3, 429.3, 191.0);
  ctx.bezierCurveTo(428.8, 185.7, 435.2, 183.1, 439.3, 181.0);
  ctx.bezierCurveTo(446.5, 177.3, 454.5, 175.2, 463.3, 172.0);
  ctx.bezierCurveTo(449.4, 170.1, 438.9, 180.2, 428.3, 185.0);
  ctx.bezierCurveTo(423.8, 184.1, 418.0, 181.8, 414.3, 183.0);
  ctx.bezierCurveTo(416.1, 177.8, 421.7, 176.4, 424.3, 172.0);
  ctx.bezierCurveTo(419.1, 174.4, 408.5, 180.2, 407.3, 190.0);
  ctx.bezierCurveTo(404.2, 190.7, 405.4, 187.3, 402.3, 188.0);
  ctx.bezierCurveTo(403.0, 184.3, 403.4, 180.4, 404.3, 177.0);
  ctx.bezierCurveTo(409.9, 178.5, 406.3, 175.1, 406.3, 175.0);
  ctx.bezierCurveTo(407.6, 170.5, 423.1, 165.6, 429.3, 164.0);
  ctx.bezierCurveTo(428.2, 166.2, 424.4, 165.8, 423.3, 168.0);
  ctx.bezierCurveTo(424.4, 170.1, 427.3, 165.0, 428.3, 169.0);
  ctx.bezierCurveTo(435.7, 159.9, 455.7, 163.2, 466.3, 165.0);
  ctx.bezierCurveTo(466.7, 168.3, 470.6, 167.1, 475.3, 169.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(502.3, 170.0);
  ctx.bezierCurveTo(501.2, 174.2, 498.0, 176.4, 495.3, 179.0);
  ctx.bezierCurveTo(499.6, 179.1, 495.3, 180.9, 494.3, 179.0);
  ctx.bezierCurveTo(497.4, 176.4, 498.4, 171.7, 502.3, 170.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(490.3, 229.0);
  ctx.bezierCurveTo(483.3, 232.0, 474.0, 232.6, 466.3, 235.0);
  ctx.bezierCurveTo(464.5, 235.3, 464.3, 234.1, 465.3, 234.0);
  ctx.bezierCurveTo(474.0, 232.7, 481.2, 229.9, 490.3, 229.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(483.3, 179.0);
  ctx.bezierCurveTo(485.3, 176.8, 488.4, 181.9, 488.3, 185.0);
  ctx.bezierCurveTo(489.3, 185.0, 489.1, 183.8, 489.3, 183.0);
  ctx.bezierCurveTo(490.7, 183.7, 491.2, 185.1, 491.3, 187.0);
  ctx.bezierCurveTo(490.3, 187.0, 490.5, 185.8, 490.3, 185.0);
  ctx.bezierCurveTo(487.8, 185.2, 490.0, 188.4, 490.3, 189.0);
  ctx.bezierCurveTo(487.8, 189.8, 487.6, 179.7, 483.3, 179.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(514.3, 180.0);
  ctx.bezierCurveTo(516.1, 178.7, 509.4, 184.7, 504.3, 183.0);
  ctx.bezierCurveTo(507.4, 181.8, 510.6, 180.6, 514.3, 180.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(303.3, 183.0);
  ctx.bezierCurveTo(306.8, 182.4, 309.3, 181.0, 312.3, 180.0);
  ctx.bezierCurveTo(313.7, 184.3, 309.0, 188.7, 308.3, 193.0);
  ctx.bezierCurveTo(308.1, 194.5, 309.7, 195.0, 309.3, 196.0);
  ctx.bezierCurveTo(307.8, 200.3, 303.5, 203.5, 302.3, 208.0);
  ctx.bezierCurveTo(299.4, 194.7, 298.9, 194.4, 303.3, 183.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(345.3, 180.0);
  ctx.bezierCurveTo(341.2, 184.3, 335.2, 191.6, 325.3, 193.0);
  ctx.bezierCurveTo(333.9, 190.5, 337.1, 179.8, 345.3, 180.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(288.3, 216.0);
  ctx.bezierCurveTo(289.3, 216.7, 289.8, 217.8, 290.3, 219.0);
  ctx.bezierCurveTo(289.9, 221.5, 288.2, 217.3, 288.3, 216.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(464.3, 184.0);
  ctx.bezierCurveTo(466.6, 183.8, 458.0, 191.3, 464.3, 184.0);
  ctx.lineTo(464.3, 184.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(288.3, 184.0);
  ctx.bezierCurveTo(287.0, 186.0, 283.9, 186.2, 281.3, 187.0);
  ctx.bezierCurveTo(282.6, 185.0, 285.8, 184.8, 288.3, 184.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(337.3, 228.0);
  ctx.bezierCurveTo(334.7, 229.5, 329.6, 227.3, 326.3, 230.0);
  ctx.bezierCurveTo(328.7, 230.3, 338.2, 229.3, 341.3, 232.0);
  ctx.bezierCurveTo(344.9, 242.8, 339.7, 255.0, 333.3, 260.0);
  ctx.bezierCurveTo(331.6, 261.4, 323.5, 263.6, 330.3, 264.0);
  ctx.bezierCurveTo(311.0, 271.3, 305.6, 240.3, 317.3, 231.0);
  ctx.bezierCurveTo(314.6, 231.9, 313.1, 234.2, 312.3, 237.0);
  ctx.bezierCurveTo(309.0, 231.0, 317.5, 228.2, 319.3, 224.0);
  ctx.bezierCurveTo(316.0, 224.4, 315.0, 227.0, 313.3, 229.0);
  ctx.bezierCurveTo(312.0, 228.7, 312.5, 226.5, 312.3, 225.0);
  ctx.bezierCurveTo(308.8, 236.4, 304.7, 238.6, 306.3, 252.0);
  ctx.bezierCurveTo(303.0, 251.5, 304.0, 246.3, 303.3, 243.0);
  ctx.bezierCurveTo(302.5, 238.8, 300.1, 234.0, 302.3, 229.0);
  ctx.bezierCurveTo(301.1, 230.1, 300.3, 229.9, 300.3, 228.0);
  ctx.bezierCurveTo(298.6, 230.0, 299.2, 234.2, 298.3, 237.0);
  ctx.bezierCurveTo(301.5, 228.1, 303.3, 256.8, 306.3, 262.0);
  ctx.bezierCurveTo(301.4, 266.4, 298.4, 272.7, 297.3, 281.0);
  ctx.bezierCurveTo(293.9, 279.7, 293.7, 275.3, 293.3, 271.0);
  ctx.bezierCurveTo(290.3, 274.7, 293.9, 280.4, 293.3, 285.0);
  ctx.bezierCurveTo(288.4, 276.0, 287.3, 253.8, 292.3, 244.0);
  ctx.bezierCurveTo(293.7, 244.3, 293.1, 246.5, 293.3, 248.0);
  ctx.bezierCurveTo(297.1, 236.4, 298.3, 222.3, 304.3, 213.0);
  ctx.bezierCurveTo(299.8, 216.1, 294.4, 232.4, 294.3, 240.0);
  ctx.bezierCurveTo(292.3, 239.7, 293.5, 242.3, 290.3, 243.0);
  ctx.bezierCurveTo(294.9, 225.9, 301.2, 210.6, 310.3, 198.0);
  ctx.bezierCurveTo(312.7, 200.1, 308.2, 203.8, 307.3, 206.0);
  ctx.bezierCurveTo(313.7, 206.0, 316.5, 209.5, 323.3, 209.0);
  ctx.bezierCurveTo(321.9, 214.6, 321.6, 221.2, 321.3, 228.0);
  ctx.bezierCurveTo(326.9, 226.4, 332.1, 225.3, 337.3, 228.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(320.3, 218.0);
  ctx.bezierCurveTo(320.2, 216.3, 320.9, 208.9, 319.3, 212.0);
  ctx.bezierCurveTo(319.4, 213.7, 318.8, 221.1, 320.3, 218.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(313.3, 222.0);
  ctx.bezierCurveTo(313.6, 220.6, 312.7, 218.1, 312.3, 220.0);
  ctx.bezierCurveTo(312.0, 221.4, 312.9, 223.9, 313.3, 222.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(331.3, 259.0);
  ctx.bezierCurveTo(326.7, 259.6, 325.6, 256.8, 321.3, 257.0);
  ctx.bezierCurveTo(315.7, 249.5, 319.5, 235.7, 325.3, 231.0);
  ctx.bezierCurveTo(313.7, 236.7, 312.3, 263.9, 331.3, 259.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(295.3, 258.0);
  ctx.bezierCurveTo(292.6, 257.7, 294.2, 247.9, 292.3, 250.0);
  ctx.bezierCurveTo(292.3, 253.1, 292.9, 260.7, 295.3, 258.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(375.3, 190.0);
  ctx.bezierCurveTo(376.8, 191.2, 377.8, 192.9, 380.3, 193.0);
  ctx.bezierCurveTo(379.4, 194.8, 377.5, 195.5, 378.3, 199.0);
  ctx.bezierCurveTo(369.6, 199.9, 363.1, 203.1, 355.3, 205.0);
  ctx.bezierCurveTo(350.1, 211.8, 342.2, 215.8, 339.3, 225.0);
  ctx.bezierCurveTo(342.1, 225.2, 341.8, 222.2, 343.3, 221.0);
  ctx.bezierCurveTo(346.6, 223.6, 357.2, 223.4, 354.3, 229.0);
  ctx.bezierCurveTo(363.5, 226.9, 369.2, 221.2, 376.3, 217.0);
  ctx.bezierCurveTo(378.5, 217.1, 376.7, 221.2, 377.3, 223.0);
  ctx.bezierCurveTo(379.6, 217.9, 379.6, 222.6, 378.3, 226.0);
  ctx.bezierCurveTo(379.3, 225.4, 379.8, 223.2, 380.3, 225.0);
  ctx.bezierCurveTo(380.1, 225.9, 380.7, 225.9, 381.3, 226.0);
  ctx.bezierCurveTo(382.2, 228.9, 379.4, 226.7, 379.3, 227.0);
  ctx.bezierCurveTo(378.9, 228.0, 381.1, 229.6, 379.3, 232.0);
  ctx.bezierCurveTo(375.5, 237.2, 370.3, 244.3, 367.3, 253.0);
  ctx.bezierCurveTo(366.4, 255.8, 367.3, 258.6, 366.3, 261.0);
  ctx.bezierCurveTo(363.5, 268.0, 356.7, 269.9, 354.3, 275.0);
  ctx.bezierCurveTo(349.7, 271.5, 348.4, 258.9, 341.3, 264.0);
  ctx.bezierCurveTo(342.5, 267.0, 345.1, 262.5, 346.3, 265.0);
  ctx.bezierCurveTo(343.6, 270.4, 352.9, 271.5, 353.3, 277.0);
  ctx.bezierCurveTo(349.0, 278.3, 346.5, 285.7, 343.3, 291.0);
  ctx.bezierCurveTo(336.1, 288.6, 321.0, 292.0, 319.3, 287.0);
  ctx.bezierCurveTo(316.8, 292.1, 307.5, 290.5, 300.3, 291.0);
  ctx.bezierCurveTo(296.3, 278.4, 303.1, 267.9, 309.3, 260.0);
  ctx.bezierCurveTo(305.5, 257.9, 308.3, 259.6, 308.3, 257.0);
  ctx.bezierCurveTo(308.4, 254.8, 306.5, 255.8, 306.3, 255.0);
  ctx.bezierCurveTo(305.5, 250.6, 309.4, 241.0, 309.3, 237.0);
  ctx.bezierCurveTo(310.4, 243.9, 308.5, 256.5, 311.3, 261.0);
  ctx.bezierCurveTo(307.6, 264.6, 305.4, 269.8, 303.3, 275.0);
  ctx.bezierCurveTo(306.6, 275.0, 307.1, 272.2, 307.3, 269.0);
  ctx.bezierCurveTo(309.8, 272.8, 312.8, 276.1, 316.3, 279.0);
  ctx.bezierCurveTo(312.1, 275.1, 307.3, 266.0, 312.3, 259.0);
  ctx.bezierCurveTo(319.7, 270.0, 340.5, 265.6, 347.3, 257.0);
  ctx.bezierCurveTo(341.8, 259.2, 340.3, 259.3, 336.3, 263.0);
  ctx.bezierCurveTo(333.1, 260.8, 337.1, 261.0, 338.3, 260.0);
  ctx.bezierCurveTo(341.8, 257.1, 347.7, 250.6, 352.3, 246.0);
  ctx.bezierCurveTo(357.5, 240.8, 345.8, 252.7, 343.3, 253.0);
  ctx.bezierCurveTo(345.9, 249.9, 349.0, 247.3, 351.3, 244.0);
  ctx.bezierCurveTo(349.2, 244.6, 347.9, 245.9, 347.3, 248.0);
  ctx.bezierCurveTo(344.6, 245.9, 350.0, 245.1, 347.3, 242.0);
  ctx.bezierCurveTo(349.6, 245.9, 349.1, 241.3, 351.3, 240.0);
  ctx.bezierCurveTo(351.1, 238.9, 350.3, 239.4, 350.3, 240.0);
  ctx.bezierCurveTo(348.8, 233.5, 345.3, 229.0, 340.3, 226.0);
  ctx.bezierCurveTo(339.8, 229.5, 343.9, 228.5, 343.3, 232.0);
  ctx.bezierCurveTo(341.0, 230.0, 338.0, 228.7, 337.3, 225.0);
  ctx.bezierCurveTo(332.3, 224.7, 328.1, 225.2, 324.3, 226.0);
  ctx.bezierCurveTo(324.3, 220.3, 324.3, 214.7, 324.3, 209.0);
  ctx.bezierCurveTo(331.2, 204.9, 341.8, 204.5, 353.3, 205.0);
  ctx.bezierCurveTo(353.7, 202.7, 357.7, 204.0, 357.3, 201.0);
  ctx.bezierCurveTo(367.3, 201.3, 368.0, 192.4, 375.3, 190.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(342.3, 259.0);
  ctx.bezierCurveTo(343.0, 257.5, 349.1, 253.5, 346.3, 255.0);
  ctx.bezierCurveTo(344.9, 255.7, 340.0, 257.9, 342.3, 259.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(352.3, 242.0);
  ctx.bezierCurveTo(355.4, 242.5, 354.0, 236.5, 352.3, 240.0);
  ctx.bezierCurveTo(355.0, 239.7, 349.3, 244.7, 352.3, 242.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(355.3, 253.0);
  ctx.bezierCurveTo(356.1, 251.7, 360.4, 248.9, 358.3, 248.0);
  ctx.bezierCurveTo(358.3, 250.1, 352.9, 251.8, 355.3, 253.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(351.3, 251.0);
  ctx.bezierCurveTo(344.2, 256.1, 353.4, 249.5, 351.3, 251.0);
  ctx.lineTo(351.3, 251.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(349.3, 256.0);
  ctx.bezierCurveTo(351.2, 256.2, 348.8, 257.6, 350.3, 258.0);
  ctx.bezierCurveTo(350.1, 256.0, 354.6, 253.7, 352.3, 253.0);
  ctx.bezierCurveTo(352.6, 255.3, 349.4, 254.1, 349.3, 256.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(335.3, 288.0);
  ctx.bezierCurveTo(338.1, 286.9, 339.0, 282.2, 340.3, 279.0);
  ctx.bezierCurveTo(341.8, 275.5, 343.7, 272.2, 343.3, 270.0);
  ctx.bezierCurveTo(339.8, 275.1, 337.8, 281.8, 335.3, 288.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(306.3, 278.0);
  ctx.bezierCurveTo(309.1, 279.6, 309.1, 273.7, 307.3, 274.0);
  ctx.bezierCurveTo(307.4, 275.7, 307.1, 277.1, 306.3, 278.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(318.3, 285.0);
  ctx.bezierCurveTo(318.5, 283.7, 318.5, 277.8, 317.3, 281.0);
  ctx.bezierCurveTo(317.2, 282.3, 317.2, 288.2, 318.3, 285.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(464.3, 219.0);
  ctx.bezierCurveTo(465.5, 219.2, 464.9, 220.0, 464.3, 220.0);
  ctx.bezierCurveTo(465.0, 222.7, 486.8, 219.4, 482.3, 222.0);
  ctx.bezierCurveTo(480.0, 222.0, 477.7, 222.0, 475.3, 222.0);
  ctx.bezierCurveTo(471.9, 223.5, 466.2, 222.9, 461.3, 223.0);
  ctx.bezierCurveTo(463.9, 221.1, 461.8, 220.9, 464.3, 219.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(346.3, 255.0);
  ctx.bezierCurveTo(349.1, 253.5, 343.0, 257.5, 342.3, 259.0);
  ctx.bezierCurveTo(340.0, 257.9, 344.9, 255.7, 346.3, 255.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(325.3, 231.0);
  ctx.bezierCurveTo(319.5, 235.7, 315.7, 249.5, 321.3, 257.0);
  ctx.bezierCurveTo(325.6, 256.8, 326.7, 259.6, 331.3, 259.0);
  ctx.bezierCurveTo(312.3, 263.9, 313.7, 236.7, 325.3, 231.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(411.3, 236.0);
  ctx.bezierCurveTo(410.0, 233.5, 406.9, 237.5, 404.3, 237.0);
  ctx.bezierCurveTo(407.5, 234.8, 410.5, 232.5, 415.3, 232.0);
  ctx.bezierCurveTo(414.9, 240.4, 419.5, 243.8, 418.3, 253.0);
  ctx.bezierCurveTo(414.6, 247.8, 410.6, 242.7, 407.3, 237.0);
  ctx.bezierCurveTo(409.1, 237.1, 409.4, 235.8, 411.3, 236.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(476.3, 236.0);
  ctx.bezierCurveTo(476.4, 235.9, 476.2, 235.0, 476.3, 235.0);
  ctx.bezierCurveTo(483.4, 232.6, 470.8, 239.9, 476.3, 236.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(352.3, 240.0);
  ctx.bezierCurveTo(354.0, 236.5, 355.4, 242.5, 352.3, 242.0);
  ctx.bezierCurveTo(349.3, 244.7, 355.0, 239.7, 352.3, 240.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(430.3, 295.0);
  ctx.bezierCurveTo(421.3, 287.0, 410.5, 300.4, 399.3, 300.0);
  ctx.bezierCurveTo(395.9, 290.8, 390.3, 283.7, 384.3, 277.0);
  ctx.bezierCurveTo(387.7, 273.0, 393.9, 271.9, 398.3, 269.0);
  ctx.bezierCurveTo(393.4, 266.8, 387.6, 272.3, 383.3, 274.0);
  ctx.bezierCurveTo(378.7, 270.9, 375.9, 266.1, 371.3, 263.0);
  ctx.bezierCurveTo(369.6, 268.3, 380.5, 268.9, 380.3, 276.0);
  ctx.bezierCurveTo(376.3, 277.3, 372.9, 279.2, 370.3, 282.0);
  ctx.bezierCurveTo(367.5, 278.6, 359.6, 276.3, 359.3, 273.0);
  ctx.bezierCurveTo(358.9, 267.1, 379.8, 256.9, 384.3, 254.0);
  ctx.bezierCurveTo(384.0, 251.6, 380.6, 254.1, 380.3, 255.0);
  ctx.bezierCurveTo(383.2, 248.6, 395.1, 242.5, 404.3, 239.0);
  ctx.bezierCurveTo(418.5, 252.2, 425.8, 272.1, 430.3, 295.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(401.3, 266.0);
  ctx.bezierCurveTo(402.0, 262.3, 407.4, 258.1, 405.3, 255.0);
  ctx.bezierCurveTo(404.5, 258.5, 398.6, 262.2, 401.3, 266.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(358.3, 248.0);
  ctx.bezierCurveTo(360.4, 248.9, 356.1, 251.7, 355.3, 253.0);
  ctx.bezierCurveTo(352.9, 251.8, 358.3, 250.1, 358.3, 248.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(292.3, 250.0);
  ctx.bezierCurveTo(294.2, 247.9, 292.6, 257.7, 295.3, 258.0);
  ctx.bezierCurveTo(292.9, 260.7, 292.3, 253.1, 292.3, 250.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(351.3, 251.0);
  ctx.bezierCurveTo(353.4, 249.5, 344.2, 256.1, 351.3, 251.0);
  ctx.lineTo(351.3, 251.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(352.3, 253.0);
  ctx.bezierCurveTo(354.6, 253.7, 350.1, 256.0, 350.3, 258.0);
  ctx.bezierCurveTo(348.8, 257.6, 351.2, 256.2, 349.3, 256.0);
  ctx.bezierCurveTo(349.4, 254.1, 352.6, 255.3, 352.3, 253.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(405.3, 255.0);
  ctx.bezierCurveTo(407.4, 258.1, 402.0, 262.3, 401.3, 266.0);
  ctx.bezierCurveTo(398.6, 262.2, 404.5, 258.5, 405.3, 255.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(429.3, 256.0);
  ctx.bezierCurveTo(429.6, 252.5, 432.0, 259.5, 432.3, 256.0);
  ctx.bezierCurveTo(433.2, 255.8, 433.3, 256.4, 433.3, 257.0);
  ctx.bezierCurveTo(433.3, 257.7, 433.3, 258.3, 433.3, 259.0);
  ctx.bezierCurveTo(430.1, 259.9, 431.9, 255.7, 429.3, 256.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(449.3, 263.0);
  ctx.bezierCurveTo(451.7, 262.7, 449.2, 259.3, 448.3, 259.0);
  ctx.bezierCurveTo(449.5, 256.0, 452.3, 259.5, 452.3, 261.0);
  ctx.bezierCurveTo(454.1, 256.8, 467.5, 259.2, 464.3, 263.0);
  ctx.bezierCurveTo(462.2, 263.5, 462.4, 261.6, 462.3, 260.0);
  ctx.bezierCurveTo(461.0, 260.3, 461.5, 262.5, 461.3, 264.0);
  ctx.bezierCurveTo(456.4, 265.9, 450.9, 263.4, 448.3, 266.0);
  ctx.bezierCurveTo(448.2, 263.2, 446.5, 261.8, 446.3, 259.0);
  ctx.bezierCurveTo(443.2, 260.9, 447.9, 263.3, 447.3, 266.0);
  ctx.bezierCurveTo(443.8, 265.2, 444.3, 259.7, 445.3, 257.0);
  ctx.bezierCurveTo(447.6, 258.1, 449.0, 260.0, 449.3, 263.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(449.3, 268.0);
  ctx.bezierCurveTo(446.6, 276.6, 441.1, 291.1, 433.3, 298.0);
  ctx.bezierCurveTo(439.9, 294.9, 447.9, 287.0, 452.3, 278.0);
  ctx.bezierCurveTo(453.9, 274.7, 453.7, 269.9, 457.3, 268.0);
  ctx.bezierCurveTo(453.7, 282.1, 445.2, 291.2, 436.3, 300.0);
  ctx.bezierCurveTo(446.3, 294.4, 453.5, 285.8, 457.3, 274.0);
  ctx.bezierCurveTo(457.0, 272.2, 458.3, 271.9, 458.3, 273.0);
  ctx.bezierCurveTo(453.8, 286.8, 449.0, 300.3, 445.3, 315.0);
  ctx.bezierCurveTo(449.2, 310.4, 445.8, 318.4, 445.3, 321.0);
  ctx.bezierCurveTo(442.9, 316.8, 434.8, 318.2, 428.3, 318.0);
  ctx.bezierCurveTo(429.1, 313.5, 432.0, 311.0, 432.3, 306.0);
  ctx.bezierCurveTo(436.9, 306.9, 438.0, 304.3, 441.3, 304.0);
  ctx.bezierCurveTo(440.6, 308.0, 439.1, 311.2, 439.3, 316.0);
  ctx.bezierCurveTo(441.8, 312.2, 442.0, 306.0, 443.3, 301.0);
  ctx.bezierCurveTo(441.5, 299.2, 437.8, 304.1, 434.3, 304.0);
  ctx.bezierCurveTo(428.8, 294.6, 440.4, 289.2, 438.3, 277.0);
  ctx.bezierCurveTo(443.4, 275.4, 446.4, 271.7, 449.3, 268.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(326.3, 342.0);
  ctx.bezierCurveTo(323.7, 339.3, 338.4, 344.3, 336.3, 341.0);
  ctx.bezierCurveTo(352.2, 340.8, 359.1, 331.8, 370.3, 327.0);
  ctx.bezierCurveTo(367.8, 334.1, 359.6, 335.6, 354.3, 340.0);
  ctx.bezierCurveTo(361.0, 337.2, 373.4, 332.5, 374.3, 323.0);
  ctx.bezierCurveTo(390.0, 330.6, 363.1, 340.5, 363.3, 348.0);
  ctx.bezierCurveTo(363.4, 349.9, 367.2, 347.4, 367.3, 346.0);
  ctx.bezierCurveTo(367.2, 346.6, 366.3, 353.2, 366.3, 355.0);
  ctx.bezierCurveTo(357.0, 359.2, 341.5, 362.0, 328.3, 359.0);
  ctx.bezierCurveTo(328.7, 356.9, 327.6, 356.4, 327.3, 355.0);
  ctx.bezierCurveTo(327.0, 352.4, 329.4, 352.4, 331.3, 352.0);
  ctx.bezierCurveTo(329.6, 349.1, 324.1, 349.9, 325.3, 344.0);
  ctx.bezierCurveTo(320.9, 346.9, 330.0, 354.0, 324.3, 355.0);
  ctx.bezierCurveTo(327.9, 358.1, 326.9, 360.2, 329.3, 365.0);
  ctx.bezierCurveTo(330.9, 362.1, 331.8, 363.9, 335.3, 364.0);
  ctx.bezierCurveTo(335.3, 363.0, 334.1, 363.2, 333.3, 363.0);
  ctx.bezierCurveTo(342.0, 362.2, 358.5, 361.8, 366.3, 357.0);
  ctx.bezierCurveTo(365.3, 362.5, 370.1, 352.7, 373.3, 353.0);
  ctx.bezierCurveTo(370.9, 359.9, 370.5, 368.8, 369.3, 377.0);
  ctx.bezierCurveTo(355.2, 384.5, 337.3, 382.9, 322.3, 381.0);
  ctx.bezierCurveTo(325.7, 385.0, 334.7, 383.3, 338.3, 387.0);
  ctx.bezierCurveTo(337.2, 394.1, 340.8, 396.5, 341.3, 402.0);
  ctx.bezierCurveTo(343.4, 397.9, 340.0, 390.7, 339.3, 386.0);
  ctx.bezierCurveTo(350.5, 388.0, 360.7, 383.6, 368.3, 379.0);
  ctx.bezierCurveTo(371.1, 384.6, 367.7, 396.3, 370.3, 402.0);
  ctx.bezierCurveTo(375.2, 400.9, 375.3, 394.9, 378.3, 392.0);
  ctx.bezierCurveTo(382.6, 391.3, 386.7, 390.4, 389.3, 388.0);
  ctx.bezierCurveTo(390.4, 393.5, 383.3, 399.3, 378.3, 402.0);
  ctx.bezierCurveTo(378.6, 403.3, 380.3, 403.0, 380.3, 402.0);
  ctx.bezierCurveTo(377.5, 410.5, 367.8, 420.9, 362.3, 430.0);
  ctx.bezierCurveTo(377.5, 424.7, 379.0, 403.4, 394.3, 395.0);
  ctx.bezierCurveTo(393.8, 391.1, 396.1, 390.1, 395.3, 386.0);
  ctx.bezierCurveTo(399.4, 385.1, 401.6, 382.2, 406.3, 382.0);
  ctx.bezierCurveTo(407.4, 388.9, 405.2, 399.6, 406.3, 406.0);
  ctx.bezierCurveTo(398.1, 418.2, 385.6, 431.3, 383.3, 446.0);
  ctx.bezierCurveTo(381.3, 446.2, 378.2, 450.7, 377.3, 455.0);
  ctx.bezierCurveTo(379.1, 454.1, 379.1, 451.5, 380.3, 450.0);
  ctx.bezierCurveTo(382.2, 447.6, 378.7, 459.3, 376.3, 456.0);
  ctx.bezierCurveTo(376.1, 463.2, 367.1, 476.1, 364.3, 487.0);
  ctx.bezierCurveTo(355.1, 489.2, 337.9, 486.4, 340.3, 477.0);
  ctx.bezierCurveTo(331.3, 472.3, 332.7, 463.3, 332.3, 450.0);
  ctx.bezierCurveTo(328.7, 452.1, 332.6, 455.5, 330.3, 459.0);
  ctx.bezierCurveTo(326.7, 447.0, 321.0, 437.0, 320.3, 422.0);
  ctx.bezierCurveTo(320.0, 420.4, 318.6, 422.9, 318.3, 421.0);
  ctx.bezierCurveTo(317.5, 417.8, 319.9, 417.9, 320.3, 416.0);
  ctx.bezierCurveTo(323.2, 419.1, 326.1, 422.2, 332.3, 422.0);
  ctx.bezierCurveTo(332.3, 424.0, 332.3, 426.0, 332.3, 428.0);
  ctx.bezierCurveTo(334.5, 428.2, 332.8, 424.5, 333.3, 423.0);
  ctx.bezierCurveTo(337.2, 423.7, 336.9, 423.0, 339.3, 424.0);
  ctx.bezierCurveTo(338.7, 428.8, 337.9, 433.2, 338.3, 439.0);
  ctx.bezierCurveTo(339.9, 434.9, 339.8, 429.2, 340.3, 424.0);
  ctx.bezierCurveTo(346.3, 425.9, 348.2, 426.0, 356.3, 426.0);
  ctx.bezierCurveTo(356.2, 423.8, 352.1, 425.6, 350.3, 425.0);
  ctx.bezierCurveTo(349.6, 422.3, 364.1, 426.1, 365.3, 422.0);
  ctx.bezierCurveTo(364.3, 420.7, 364.4, 418.3, 362.3, 418.0);
  ctx.bezierCurveTo(363.1, 424.7, 347.0, 421.4, 340.3, 421.0);
  ctx.bezierCurveTo(340.3, 417.0, 340.3, 413.0, 340.3, 409.0);
  ctx.bezierCurveTo(338.2, 412.4, 338.2, 416.8, 339.3, 421.0);
  ctx.bezierCurveTo(336.5, 421.2, 333.9, 421.1, 334.3, 418.0);
  ctx.bezierCurveTo(333.3, 421.2, 328.6, 418.3, 325.3, 418.0);
  ctx.bezierCurveTo(325.4, 413.8, 319.1, 410.2, 323.3, 408.0);
  ctx.bezierCurveTo(315.6, 402.0, 317.8, 386.2, 310.3, 380.0);
  ctx.bezierCurveTo(313.6, 389.0, 315.5, 399.5, 318.3, 409.0);
  ctx.bezierCurveTo(316.4, 410.5, 313.1, 410.5, 312.3, 413.0);
  ctx.bezierCurveTo(308.7, 405.0, 310.6, 392.0, 310.3, 385.0);
  ctx.bezierCurveTo(311.0, 382.3, 308.3, 383.1, 307.3, 382.0);
  ctx.bezierCurveTo(309.5, 377.2, 311.1, 371.8, 312.3, 366.0);
  ctx.bezierCurveTo(310.7, 380.0, 320.6, 390.8, 326.3, 403.0);
  ctx.bezierCurveTo(330.4, 402.2, 331.5, 404.5, 335.3, 404.0);
  ctx.bezierCurveTo(336.3, 407.0, 333.1, 405.8, 331.3, 406.0);
  ctx.bezierCurveTo(344.6, 409.2, 359.0, 405.0, 372.3, 405.0);
  ctx.bezierCurveTo(358.9, 402.8, 340.9, 405.1, 328.3, 402.0);
  ctx.bezierCurveTo(323.9, 392.8, 320.2, 382.8, 314.3, 375.0);
  ctx.bezierCurveTo(316.6, 368.4, 314.5, 359.3, 311.3, 355.0);
  ctx.bezierCurveTo(316.7, 346.9, 309.2, 339.0, 309.3, 330.0);
  ctx.bezierCurveTo(314.3, 337.7, 322.4, 342.2, 331.3, 346.0);
  ctx.bezierCurveTo(328.9, 345.4, 330.4, 340.9, 326.3, 342.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(364.3, 339.0);
  ctx.bezierCurveTo(366.2, 337.6, 370.7, 333.0, 373.3, 333.0);
  ctx.bezierCurveTo(373.0, 333.0, 372.4, 335.7, 373.3, 335.0);
  ctx.bezierCurveTo(374.9, 333.8, 373.5, 332.2, 374.3, 331.0);
  ctx.bezierCurveTo(374.9, 330.1, 381.2, 328.5, 376.3, 327.0);
  ctx.bezierCurveTo(374.6, 329.6, 377.8, 330.1, 373.3, 329.0);
  ctx.bezierCurveTo(374.7, 332.4, 363.1, 333.9, 364.3, 339.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(369.3, 337.0);
  ctx.bezierCurveTo(363.9, 342.7, 375.0, 331.6, 369.3, 337.0);
  ctx.lineTo(369.3, 337.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(325.3, 359.0);
  ctx.bezierCurveTo(320.2, 358.5, 318.9, 354.1, 314.3, 353.0);
  ctx.bezierCurveTo(314.2, 364.5, 318.8, 371.2, 320.3, 381.0);
  ctx.bezierCurveTo(322.2, 373.8, 313.6, 363.1, 316.3, 355.0);
  ctx.bezierCurveTo(318.8, 356.3, 322.3, 361.6, 325.3, 359.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(326.3, 345.0);
  ctx.bezierCurveTo(326.6, 348.1, 329.9, 348.1, 332.3, 349.0);
  ctx.bezierCurveTo(330.8, 345.4, 335.7, 348.4, 335.3, 346.0);
  ctx.bezierCurveTo(331.4, 346.9, 329.1, 347.2, 326.3, 345.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(361.3, 340.0);
  ctx.bezierCurveTo(354.1, 343.5, 364.4, 338.5, 361.3, 340.0);
  ctx.lineTo(361.3, 340.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(332.3, 443.0);
  ctx.bezierCurveTo(331.9, 439.7, 333.3, 429.4, 331.3, 431.0);
  ctx.bezierCurveTo(331.8, 434.3, 330.3, 444.6, 332.3, 443.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(376.3, 335.0);
  ctx.bezierCurveTo(376.2, 339.7, 375.5, 341.2, 370.3, 345.0);
  ctx.bezierCurveTo(368.0, 343.9, 372.9, 341.7, 374.3, 341.0);
  ctx.bezierCurveTo(371.6, 338.3, 375.6, 337.2, 376.3, 335.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(373.3, 347.0);
  ctx.bezierCurveTo(375.1, 347.6, 371.6, 351.2, 369.3, 351.0);
  ctx.bezierCurveTo(369.6, 348.7, 372.4, 348.8, 373.3, 347.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(374.3, 343.0);
  ctx.bezierCurveTo(375.8, 343.9, 371.9, 347.9, 369.3, 348.0);
  ctx.bezierCurveTo(370.1, 345.5, 372.8, 344.8, 374.3, 343.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(343.3, 270.0);
  ctx.bezierCurveTo(343.7, 272.2, 341.8, 275.5, 340.3, 279.0);
  ctx.bezierCurveTo(339.0, 282.2, 338.1, 286.9, 335.3, 288.0);
  ctx.bezierCurveTo(337.8, 281.8, 339.8, 275.1, 343.3, 270.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(450.3, 272.0);
  ctx.bezierCurveTo(452.6, 271.8, 448.7, 276.4, 448.3, 277.0);
  ctx.bezierCurveTo(446.1, 280.3, 448.9, 274.9, 450.3, 272.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(406.3, 306.0);
  ctx.bezierCurveTo(411.7, 305.6, 413.8, 301.7, 417.3, 300.0);
  ctx.bezierCurveTo(405.4, 301.1, 391.3, 308.6, 379.3, 313.0);
  ctx.bezierCurveTo(368.2, 305.4, 361.8, 293.2, 350.3, 286.0);
  ctx.bezierCurveTo(351.6, 281.3, 355.8, 279.4, 357.3, 275.0);
  ctx.bezierCurveTo(362.2, 276.1, 363.2, 281.1, 367.3, 283.0);
  ctx.bezierCurveTo(365.8, 285.2, 362.3, 285.3, 362.3, 289.0);
  ctx.bezierCurveTo(361.3, 294.0, 366.4, 293.0, 367.3, 296.0);
  ctx.bezierCurveTo(370.7, 295.0, 372.6, 292.6, 375.3, 291.0);
  ctx.bezierCurveTo(380.7, 294.6, 383.2, 301.1, 388.3, 305.0);
  ctx.bezierCurveTo(388.1, 306.1, 386.3, 305.7, 386.3, 307.0);
  ctx.bezierCurveTo(397.5, 307.1, 410.7, 295.7, 426.3, 294.0);
  ctx.bezierCurveTo(432.3, 301.7, 431.0, 310.6, 426.3, 319.0);
  ctx.bezierCurveTo(409.0, 320.0, 393.1, 322.5, 382.3, 330.0);
  ctx.bezierCurveTo(379.3, 329.3, 383.3, 327.9, 382.3, 326.0);
  ctx.bezierCurveTo(382.0, 323.9, 379.6, 327.4, 378.3, 325.0);
  ctx.bezierCurveTo(372.9, 313.7, 363.9, 306.0, 357.3, 296.0);
  ctx.bezierCurveTo(353.6, 293.7, 349.2, 292.1, 348.3, 287.0);
  ctx.bezierCurveTo(357.1, 296.3, 371.4, 305.3, 378.3, 315.0);
  ctx.bezierCurveTo(379.3, 316.4, 378.8, 316.5, 378.3, 318.0);
  ctx.bezierCurveTo(391.8, 319.6, 407.7, 309.6, 422.3, 306.0);
  ctx.bezierCurveTo(417.5, 304.4, 405.3, 309.5, 405.3, 308.0);
  ctx.bezierCurveTo(401.7, 304.3, 409.1, 308.4, 406.3, 306.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(416.3, 303.0);
  ctx.bezierCurveTo(421.0, 300.9, 411.7, 303.9, 411.3, 306.0);
  ctx.bezierCurveTo(406.7, 308.1, 415.9, 305.1, 416.3, 303.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(420.3, 315.0);
  ctx.bezierCurveTo(419.3, 317.5, 427.9, 303.1, 425.3, 304.0);
  ctx.bezierCurveTo(423.8, 307.8, 421.3, 310.6, 420.3, 315.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(411.3, 306.0);
  ctx.bezierCurveTo(411.7, 303.9, 421.0, 300.9, 416.3, 303.0);
  ctx.bezierCurveTo(415.9, 305.1, 406.7, 308.1, 411.3, 306.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(291.3, 296.0);
  ctx.bezierCurveTo(292.8, 296.4, 290.9, 297.3, 291.3, 299.0);
  ctx.bezierCurveTo(293.8, 298.1, 292.4, 293.4, 296.3, 294.0);
  ctx.bezierCurveTo(294.8, 290.8, 295.8, 285.2, 294.3, 282.0);
  ctx.bezierCurveTo(299.3, 281.9, 298.1, 290.3, 298.3, 295.0);
  ctx.bezierCurveTo(298.5, 299.1, 300.5, 303.3, 297.3, 305.0);
  ctx.bezierCurveTo(294.7, 304.8, 298.7, 303.3, 297.3, 301.0);
  ctx.bezierCurveTo(296.0, 302.0, 295.3, 303.7, 294.3, 305.0);
  ctx.bezierCurveTo(291.8, 304.3, 296.2, 302.3, 295.3, 300.0);
  ctx.bezierCurveTo(294.0, 301.0, 293.3, 302.7, 292.3, 304.0);
  ctx.bezierCurveTo(290.4, 303.0, 294.3, 299.4, 295.3, 298.0);
  ctx.bezierCurveTo(294.1, 295.1, 292.4, 302.3, 290.3, 299.0);
  ctx.bezierCurveTo(290.3, 298.3, 290.3, 297.7, 290.3, 297.0);
  ctx.bezierCurveTo(291.2, 297.2, 291.3, 296.6, 291.3, 296.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(356.3, 302.0);
  ctx.bezierCurveTo(359.3, 304.1, 353.8, 306.1, 354.3, 309.0);
  ctx.bezierCurveTo(351.8, 307.4, 356.1, 304.2, 356.3, 302.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(325.3, 331.0);
  ctx.bezierCurveTo(322.2, 329.7, 328.2, 329.7, 328.3, 331.0);
  ctx.bezierCurveTo(333.0, 330.5, 330.7, 332.8, 327.3, 332.0);
  ctx.bezierCurveTo(327.3, 331.0, 326.1, 331.2, 325.3, 331.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(253.3, 300.0);
  ctx.bezierCurveTo(256.5, 299.8, 244.3, 303.4, 253.3, 300.0);
  ctx.lineTo(253.3, 300.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(425.3, 304.0);
  ctx.bezierCurveTo(427.9, 303.1, 419.3, 317.5, 420.3, 315.0);
  ctx.bezierCurveTo(421.3, 310.6, 423.8, 307.8, 425.3, 304.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(264.3, 307.0);
  ctx.bezierCurveTo(265.8, 308.7, 268.6, 306.0, 270.3, 309.0);
  ctx.bezierCurveTo(269.6, 309.3, 263.4, 309.6, 262.3, 309.0);
  ctx.bezierCurveTo(263.5, 307.5, 263.2, 304.5, 266.3, 305.0);
  ctx.bezierCurveTo(266.7, 306.7, 265.5, 306.9, 264.3, 307.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(260.3, 310.0);
  ctx.bezierCurveTo(259.1, 310.2, 259.5, 311.8, 259.3, 313.0);
  ctx.bezierCurveTo(257.8, 307.3, 253.6, 312.9, 249.3, 313.0);
  ctx.bezierCurveTo(254.3, 307.6, 255.8, 310.9, 260.3, 306.0);
  ctx.bezierCurveTo(259.6, 309.1, 262.0, 308.9, 261.3, 312.0);
  ctx.bezierCurveTo(262.2, 312.2, 262.3, 311.6, 262.3, 311.0);
  ctx.bezierCurveTo(265.1, 312.4, 259.2, 314.2, 260.3, 310.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(391.3, 310.0);
  ctx.bezierCurveTo(392.5, 310.2, 391.9, 311.0, 391.3, 311.0);
  ctx.bezierCurveTo(391.3, 312.0, 392.5, 311.8, 393.3, 312.0);
  ctx.bezierCurveTo(394.9, 311.6, 384.8, 313.3, 382.3, 317.0);
  ctx.bezierCurveTo(380.2, 313.5, 389.3, 312.7, 391.3, 310.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(255.3, 312.0);
  ctx.bezierCurveTo(256.3, 312.6, 256.4, 314.3, 258.3, 314.0);
  ctx.bezierCurveTo(257.9, 316.5, 254.4, 314.1, 255.3, 312.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(371.3, 318.0);
  ctx.bezierCurveTo(374.3, 318.1, 374.0, 324.0, 370.3, 323.0);
  ctx.bezierCurveTo(368.5, 321.2, 370.8, 320.1, 371.3, 318.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(233.3, 319.0);
  ctx.bezierCurveTo(235.2, 319.1, 234.0, 322.3, 236.3, 322.0);
  ctx.bezierCurveTo(236.2, 323.9, 232.0, 321.8, 233.3, 319.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(424.3, 322.0);
  ctx.bezierCurveTo(425.0, 324.5, 427.0, 320.1, 429.3, 321.0);
  ctx.bezierCurveTo(429.8, 323.3, 423.8, 324.0, 426.3, 325.0);
  ctx.bezierCurveTo(422.8, 327.6, 424.2, 324.4, 418.3, 325.0);
  ctx.bezierCurveTo(417.4, 321.4, 422.6, 323.2, 423.3, 324.0);
  ctx.bezierCurveTo(422.8, 320.6, 418.5, 322.5, 416.3, 323.0);
  ctx.bezierCurveTo(407.5, 327.8, 399.0, 333.0, 390.3, 338.0);
  ctx.bezierCurveTo(390.9, 339.8, 387.4, 342.2, 390.3, 343.0);
  ctx.bezierCurveTo(387.3, 347.3, 381.5, 348.9, 376.3, 351.0);
  ctx.bezierCurveTo(376.7, 349.7, 378.1, 349.4, 378.3, 348.0);
  ctx.bezierCurveTo(375.4, 348.6, 378.0, 336.0, 379.3, 334.0);
  ctx.bezierCurveTo(381.4, 330.9, 389.6, 327.3, 396.3, 326.0);
  ctx.bezierCurveTo(406.6, 324.1, 419.6, 319.2, 427.3, 320.0);
  ctx.bezierCurveTo(427.1, 321.4, 424.3, 320.3, 424.3, 322.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(230.3, 321.0);
  ctx.bezierCurveTo(231.0, 323.9, 236.4, 325.4, 234.3, 328.0);
  ctx.bezierCurveTo(232.7, 326.0, 230.7, 324.3, 230.3, 321.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(441.3, 322.0);
  ctx.bezierCurveTo(447.2, 325.3, 440.4, 333.1, 438.3, 338.0);
  ctx.bezierCurveTo(435.6, 344.3, 433.3, 350.8, 431.3, 356.0);
  ctx.bezierCurveTo(430.2, 344.2, 438.0, 332.7, 441.3, 322.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(420.3, 331.0);
  ctx.bezierCurveTo(422.0, 328.6, 425.5, 328.2, 427.3, 326.0);
  ctx.bezierCurveTo(428.7, 326.3, 428.1, 328.5, 428.3, 330.0);
  ctx.bezierCurveTo(427.5, 329.5, 426.7, 329.0, 425.3, 329.0);
  ctx.bezierCurveTo(425.8, 329.9, 426.2, 330.8, 427.3, 331.0);
  ctx.bezierCurveTo(428.9, 333.5, 423.0, 327.9, 420.3, 331.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(434.3, 327.0);
  ctx.bezierCurveTo(436.4, 325.5, 427.2, 332.1, 434.3, 327.0);
  ctx.lineTo(434.3, 327.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(373.3, 329.0);
  ctx.bezierCurveTo(377.8, 330.1, 374.6, 329.6, 376.3, 327.0);
  ctx.bezierCurveTo(381.2, 328.5, 374.9, 330.1, 374.3, 331.0);
  ctx.bezierCurveTo(373.5, 332.2, 374.9, 333.8, 373.3, 335.0);
  ctx.bezierCurveTo(372.4, 335.7, 373.0, 333.0, 373.3, 333.0);
  ctx.bezierCurveTo(370.7, 333.0, 366.2, 337.6, 364.3, 339.0);
  ctx.bezierCurveTo(363.1, 333.9, 374.7, 332.4, 373.3, 329.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(369.3, 337.0);
  ctx.bezierCurveTo(375.0, 331.6, 363.9, 342.7, 369.3, 337.0);
  ctx.lineTo(369.3, 337.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(316.3, 355.0);
  ctx.bezierCurveTo(313.6, 363.1, 322.2, 373.8, 320.3, 381.0);
  ctx.bezierCurveTo(318.8, 371.2, 314.2, 364.5, 314.3, 353.0);
  ctx.bezierCurveTo(318.9, 354.1, 320.2, 358.5, 325.3, 359.0);
  ctx.bezierCurveTo(322.3, 361.6, 318.8, 356.3, 316.3, 355.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(335.3, 346.0);
  ctx.bezierCurveTo(335.7, 348.4, 330.8, 345.4, 332.3, 349.0);
  ctx.bezierCurveTo(329.9, 348.1, 326.6, 348.1, 326.3, 345.0);
  ctx.bezierCurveTo(329.1, 347.2, 331.4, 346.9, 335.3, 346.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(228.3, 329.0);
  ctx.bezierCurveTo(227.7, 327.8, 235.2, 328.3, 230.3, 329.0);
  ctx.bezierCurveTo(230.1, 329.9, 230.7, 329.9, 231.3, 330.0);
  ctx.bezierCurveTo(230.8, 332.9, 229.8, 328.5, 228.3, 329.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(192.3, 365.0);
  ctx.bezierCurveTo(192.0, 363.7, 191.5, 360.0, 191.3, 356.0);
  ctx.bezierCurveTo(188.5, 352.5, 182.0, 352.7, 181.3, 347.0);
  ctx.bezierCurveTo(184.5, 348.5, 185.2, 352.4, 190.3, 352.0);
  ctx.bezierCurveTo(197.8, 344.7, 213.6, 349.5, 208.3, 332.0);
  ctx.bezierCurveTo(204.3, 333.6, 197.6, 332.6, 193.3, 334.0);
  ctx.bezierCurveTo(193.7, 332.3, 192.5, 332.1, 191.3, 332.0);
  ctx.bezierCurveTo(194.5, 328.9, 204.7, 329.6, 209.3, 331.0);
  ctx.bezierCurveTo(211.7, 335.6, 213.9, 343.2, 208.3, 346.0);
  ctx.bezierCurveTo(211.3, 350.4, 216.5, 352.5, 217.3, 359.0);
  ctx.bezierCurveTo(215.6, 358.1, 215.7, 355.3, 213.3, 355.0);
  ctx.bezierCurveTo(214.8, 361.5, 210.1, 367.4, 203.3, 368.0);
  ctx.bezierCurveTo(198.5, 368.4, 195.8, 363.8, 192.3, 365.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(203.3, 331.0);
  ctx.bezierCurveTo(201.9, 331.5, 198.1, 329.8, 198.3, 332.0);
  ctx.bezierCurveTo(199.8, 331.5, 203.5, 333.2, 203.3, 331.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(195.3, 350.0);
  ctx.bezierCurveTo(194.5, 352.6, 193.8, 359.1, 195.3, 364.0);
  ctx.bezierCurveTo(204.2, 369.1, 216.4, 362.6, 211.3, 351.0);
  ctx.bezierCurveTo(205.8, 348.3, 201.9, 348.0, 195.3, 350.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(434.3, 331.0);
  ctx.bezierCurveTo(437.4, 332.6, 432.3, 334.2, 432.3, 336.0);
  ctx.bezierCurveTo(430.1, 335.3, 434.5, 333.0, 434.3, 331.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(418.3, 333.0);
  ctx.bezierCurveTo(419.5, 333.2, 418.9, 334.0, 418.3, 334.0);
  ctx.bezierCurveTo(420.0, 338.0, 422.4, 342.4, 421.3, 347.0);
  ctx.bezierCurveTo(421.3, 347.0, 418.5, 347.8, 418.3, 348.0);
  ctx.bezierCurveTo(418.1, 348.3, 418.3, 352.7, 415.3, 353.0);
  ctx.bezierCurveTo(415.2, 353.0, 411.9, 347.7, 409.3, 349.0);
  ctx.bezierCurveTo(409.9, 343.2, 415.3, 342.3, 414.3, 335.0);
  ctx.bezierCurveTo(416.2, 334.9, 417.7, 334.3, 418.3, 333.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(425.3, 347.0);
  ctx.bezierCurveTo(422.8, 343.2, 423.0, 338.7, 426.3, 335.0);
  ctx.bezierCurveTo(430.2, 337.5, 430.4, 343.6, 430.3, 350.0);
  ctx.bezierCurveTo(428.6, 351.7, 423.5, 346.4, 421.3, 351.0);
  ctx.bezierCurveTo(419.5, 350.4, 423.0, 346.8, 425.3, 347.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(242.3, 342.0);
  ctx.bezierCurveTo(244.9, 342.2, 240.9, 343.7, 242.3, 346.0);
  ctx.bezierCurveTo(239.8, 345.8, 242.0, 342.6, 242.3, 342.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(433.3, 336.0);
  ctx.bezierCurveTo(435.4, 336.6, 431.9, 339.8, 432.3, 342.0);
  ctx.bezierCurveTo(430.1, 342.2, 431.9, 338.5, 431.3, 337.0);
  ctx.bezierCurveTo(432.5, 337.2, 433.1, 336.8, 433.3, 336.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(324.3, 338.0);
  ctx.bezierCurveTo(322.2, 337.2, 324.8, 338.0, 324.3, 338.0);
  ctx.lineTo(324.3, 338.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(361.3, 340.0);
  ctx.bezierCurveTo(364.4, 338.5, 354.1, 343.5, 361.3, 340.0);
  ctx.lineTo(361.3, 340.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(403.3, 359.0);
  ctx.bezierCurveTo(403.4, 357.1, 406.6, 358.3, 406.3, 356.0);
  ctx.bezierCurveTo(402.7, 357.8, 399.3, 359.6, 396.3, 362.0);
  ctx.bezierCurveTo(397.6, 359.4, 406.9, 351.4, 412.3, 353.0);
  ctx.bezierCurveTo(411.6, 357.3, 407.9, 358.6, 403.3, 359.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(394.3, 365.0);
  ctx.bezierCurveTo(396.8, 362.9, 393.2, 366.4, 392.3, 367.0);
  ctx.bezierCurveTo(396.1, 366.0, 403.6, 360.3, 409.3, 358.0);
  ctx.bezierCurveTo(411.5, 359.6, 407.9, 363.9, 407.3, 366.0);
  ctx.bezierCurveTo(410.9, 365.3, 411.5, 361.5, 412.3, 358.0);
  ctx.bezierCurveTo(417.1, 356.1, 421.0, 353.4, 425.3, 351.0);
  ctx.bezierCurveTo(429.6, 353.5, 426.2, 364.2, 426.3, 366.0);
  ctx.bezierCurveTo(427.4, 367.2, 429.2, 367.8, 428.3, 371.0);
  ctx.bezierCurveTo(421.8, 370.5, 420.1, 374.8, 414.3, 375.0);
  ctx.bezierCurveTo(414.4, 370.6, 412.9, 367.8, 410.3, 366.0);
  ctx.bezierCurveTo(408.1, 368.6, 414.4, 371.3, 412.3, 377.0);
  ctx.bezierCurveTo(400.1, 380.1, 391.7, 387.0, 378.3, 389.0);
  ctx.bezierCurveTo(375.7, 391.4, 373.5, 394.2, 372.3, 398.0);
  ctx.bezierCurveTo(369.4, 394.4, 373.7, 389.4, 372.3, 384.0);
  ctx.bezierCurveTo(378.7, 382.7, 382.6, 378.9, 388.3, 377.0);
  ctx.bezierCurveTo(383.8, 375.5, 378.7, 382.0, 372.3, 382.0);
  ctx.bezierCurveTo(372.3, 380.0, 372.3, 378.0, 372.3, 376.0);
  ctx.bezierCurveTo(381.7, 375.5, 387.0, 369.9, 394.3, 365.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(389.3, 375.0);
  ctx.bezierCurveTo(396.8, 374.1, 406.6, 368.0, 405.3, 367.0);
  ctx.bezierCurveTo(399.6, 369.3, 393.8, 371.5, 389.3, 375.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(405.3, 367.0);
  ctx.bezierCurveTo(406.6, 368.0, 396.8, 374.1, 389.3, 375.0);
  ctx.bezierCurveTo(393.8, 371.5, 399.6, 369.3, 405.3, 367.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(190.3, 388.0);
  ctx.bezierCurveTo(192.8, 385.0, 186.7, 384.6, 184.3, 386.0);
  ctx.bezierCurveTo(184.5, 379.6, 189.5, 378.1, 194.3, 381.0);
  ctx.bezierCurveTo(191.4, 387.4, 191.0, 396.4, 183.3, 398.0);
  ctx.bezierCurveTo(181.6, 394.6, 182.6, 390.7, 183.3, 387.0);
  ctx.bezierCurveTo(186.0, 387.0, 189.0, 386.6, 190.3, 388.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(301.3, 425.0);
  ctx.bezierCurveTo(300.3, 425.0, 300.5, 426.2, 300.3, 427.0);
  ctx.bezierCurveTo(300.1, 419.5, 302.6, 406.0, 306.3, 399.0);
  ctx.bezierCurveTo(310.5, 401.5, 306.4, 412.3, 310.3, 415.0);
  ctx.bezierCurveTo(311.1, 416.0, 313.8, 414.6, 315.3, 417.0);
  ctx.bezierCurveTo(313.4, 428.4, 303.1, 431.4, 299.3, 441.0);
  ctx.bezierCurveTo(297.5, 437.2, 299.9, 429.0, 301.3, 425.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(302.3, 423.0);
  ctx.bezierCurveTo(303.0, 422.2, 305.5, 416.5, 303.3, 419.0);
  ctx.bezierCurveTo(302.6, 419.8, 300.2, 425.5, 302.3, 423.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(419.3, 438.0);
  ctx.bezierCurveTo(419.8, 420.5, 426.4, 409.1, 443.3, 408.0);
  ctx.bezierCurveTo(444.6, 411.7, 449.6, 411.7, 449.3, 417.0);
  ctx.bezierCurveTo(441.4, 418.7, 441.0, 415.4, 436.3, 417.0);
  ctx.bezierCurveTo(426.1, 420.5, 431.8, 433.0, 428.3, 439.0);
  ctx.bezierCurveTo(429.2, 437.4, 420.2, 438.1, 427.3, 441.0);
  ctx.bezierCurveTo(426.1, 442.4, 423.9, 442.9, 421.3, 443.0);
  ctx.bezierCurveTo(421.6, 441.2, 423.0, 440.7, 425.3, 441.0);
  ctx.bezierCurveTo(423.9, 439.4, 420.4, 439.9, 419.3, 438.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(389.3, 452.0);
  ctx.bezierCurveTo(394.4, 454.4, 399.2, 448.0, 405.3, 448.0);
  ctx.bezierCurveTo(402.7, 449.7, 395.3, 456.2, 394.3, 453.0);
  ctx.bezierCurveTo(383.4, 464.9, 384.6, 467.1, 376.3, 480.0);
  ctx.bezierCurveTo(374.5, 476.5, 374.0, 480.1, 372.3, 482.0);
  ctx.bezierCurveTo(369.4, 476.7, 377.5, 472.7, 375.3, 470.0);
  ctx.bezierCurveTo(376.6, 468.8, 376.9, 469.6, 378.3, 470.0);
  ctx.bezierCurveTo(377.1, 464.2, 383.9, 458.4, 386.3, 453.0);
  ctx.bezierCurveTo(383.4, 453.1, 382.6, 455.3, 381.3, 457.0);
  ctx.bezierCurveTo(383.3, 445.3, 393.5, 433.2, 397.3, 420.0);
  ctx.bezierCurveTo(400.3, 418.6, 401.4, 415.4, 404.3, 414.0);
  ctx.bezierCurveTo(403.3, 408.5, 407.7, 414.3, 407.3, 409.0);
  ctx.bezierCurveTo(410.6, 409.4, 409.9, 413.8, 411.3, 416.0);
  ctx.bezierCurveTo(420.9, 416.5, 412.2, 431.8, 417.3, 440.0);
  ctx.bezierCurveTo(409.3, 445.3, 398.5, 447.8, 389.3, 452.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(303.3, 419.0);
  ctx.bezierCurveTo(305.5, 416.5, 303.0, 422.2, 302.3, 423.0);
  ctx.bezierCurveTo(300.2, 425.5, 302.6, 419.8, 303.3, 419.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(450.3, 427.0);
  ctx.bezierCurveTo(440.3, 433.4, 460.3, 458.9, 464.3, 441.0);
  ctx.bezierCurveTo(465.9, 446.3, 466.7, 454.7, 463.3, 457.0);
  ctx.bezierCurveTo(449.3, 457.4, 439.1, 438.4, 444.3, 423.0);
  ctx.bezierCurveTo(442.9, 423.0, 441.1, 427.2, 441.3, 423.0);
  ctx.bezierCurveTo(437.8, 428.7, 438.0, 438.4, 440.3, 445.0);
  ctx.bezierCurveTo(444.0, 449.0, 452.1, 453.9, 452.3, 458.0);
  ctx.bezierCurveTo(435.1, 456.6, 425.4, 431.9, 437.3, 419.0);
  ctx.bezierCurveTo(443.9, 417.7, 446.1, 422.4, 449.3, 419.0);
  ctx.bezierCurveTo(451.2, 419.3, 450.5, 421.9, 451.3, 423.0);
  ctx.bezierCurveTo(455.0, 427.9, 461.7, 429.1, 450.3, 427.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(311.3, 430.0);
  ctx.bezierCurveTo(309.8, 429.1, 313.7, 425.1, 316.3, 425.0);
  ctx.bezierCurveTo(315.9, 427.9, 312.0, 427.4, 311.3, 430.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(418.3, 443.0);
  ctx.bezierCurveTo(418.2, 445.6, 414.6, 444.6, 413.3, 446.0);
  ctx.bezierCurveTo(411.3, 445.2, 416.5, 443.3, 418.3, 443.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(432.3, 448.0);
  ctx.bezierCurveTo(430.5, 447.9, 430.2, 449.2, 428.3, 449.0);
  ctx.bezierCurveTo(428.1, 444.5, 431.8, 446.4, 433.3, 448.0);
  ctx.bezierCurveTo(433.1, 449.1, 432.3, 448.6, 432.3, 448.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(297.3, 448.0);
  ctx.bezierCurveTo(312.1, 450.8, 321.4, 467.9, 334.3, 476.0);
  ctx.bezierCurveTo(336.7, 481.8, 338.5, 488.2, 344.3, 491.0);
  ctx.bezierCurveTo(350.8, 494.1, 360.9, 490.6, 366.3, 496.0);
  ctx.bezierCurveTo(366.2, 501.7, 368.0, 504.2, 365.3, 508.0);
  ctx.bezierCurveTo(358.8, 504.5, 351.2, 515.6, 342.3, 509.0);
  ctx.bezierCurveTo(340.5, 507.6, 332.3, 498.0, 330.3, 495.0);
  ctx.bezierCurveTo(328.5, 492.4, 328.5, 488.6, 326.3, 486.0);
  ctx.bezierCurveTo(321.0, 479.5, 307.8, 472.9, 300.3, 467.0);
  ctx.bezierCurveTo(296.8, 464.3, 296.8, 463.8, 291.3, 463.0);
  ctx.bezierCurveTo(291.9, 457.6, 292.2, 447.9, 299.3, 450.0);
  ctx.bezierCurveTo(298.9, 449.1, 298.4, 448.2, 297.3, 448.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(321.3, 456.0);
  ctx.bezierCurveTo(323.3, 456.3, 321.1, 453.1, 320.3, 453.0);
  ctx.bezierCurveTo(326.7, 452.0, 327.2, 465.5, 331.3, 470.0);
  ctx.bezierCurveTo(327.2, 471.6, 321.9, 461.0, 322.3, 458.0);
  ctx.bezierCurveTo(321.2, 457.8, 320.5, 458.2, 320.3, 459.0);
  ctx.bezierCurveTo(316.2, 454.1, 309.4, 451.9, 304.3, 448.0);
  ctx.bezierCurveTo(308.8, 445.5, 312.8, 452.1, 319.3, 451.0);
  ctx.bezierCurveTo(319.9, 452.8, 319.8, 455.2, 321.3, 456.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(425.3, 459.0);
  ctx.bezierCurveTo(427.3, 455.9, 428.3, 461.9, 429.3, 463.0);
  ctx.bezierCurveTo(428.2, 465.3, 427.0, 459.4, 425.3, 459.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(452.3, 463.0);
  ctx.bezierCurveTo(450.2, 463.3, 453.7, 466.1, 454.3, 467.0);
  ctx.bezierCurveTo(452.3, 468.9, 449.1, 463.6, 447.3, 462.0);
  ctx.bezierCurveTo(445.3, 461.7, 447.5, 464.9, 448.3, 465.0);
  ctx.bezierCurveTo(445.8, 467.4, 444.4, 460.3, 441.3, 460.0);
  ctx.bezierCurveTo(444.6, 459.7, 451.4, 459.7, 456.3, 462.0);
  ctx.bezierCurveTo(456.0, 462.9, 451.9, 464.7, 452.3, 463.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(286.3, 468.0);
  ctx.bezierCurveTo(285.1, 468.2, 285.5, 469.8, 285.3, 471.0);
  ctx.bezierCurveTo(282.3, 469.8, 286.4, 467.6, 285.3, 465.0);
  ctx.bezierCurveTo(287.2, 465.2, 285.9, 468.4, 287.3, 469.0);
  ctx.bezierCurveTo(288.3, 468.3, 288.8, 467.2, 289.3, 466.0);
  ctx.bezierCurveTo(311.7, 475.3, 327.8, 490.9, 340.3, 510.0);
  ctx.bezierCurveTo(338.0, 512.3, 331.3, 510.4, 327.3, 511.0);
  ctx.bezierCurveTo(311.4, 502.3, 305.1, 483.9, 285.3, 479.0);
  ctx.bezierCurveTo(284.4, 474.2, 289.1, 471.5, 286.3, 468.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(448.3, 470.0);
  ctx.bezierCurveTo(448.7, 469.4, 453.6, 467.7, 453.3, 472.0);
  ctx.bezierCurveTo(450.1, 472.9, 450.2, 470.4, 448.3, 470.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(294.3, 530.0);
  ctx.bezierCurveTo(293.4, 519.9, 303.5, 514.5, 309.3, 508.0);
  ctx.bezierCurveTo(307.2, 505.8, 306.4, 509.3, 303.3, 509.0);
  ctx.bezierCurveTo(300.7, 510.6, 306.5, 506.3, 308.3, 506.0);
  ctx.bezierCurveTo(303.2, 502.8, 302.5, 495.2, 295.3, 494.0);
  ctx.bezierCurveTo(295.3, 492.0, 295.3, 490.0, 295.3, 488.0);
  ctx.bezierCurveTo(292.9, 487.6, 295.9, 492.6, 292.3, 491.0);
  ctx.bezierCurveTo(292.3, 489.0, 292.3, 487.0, 292.3, 485.0);
  ctx.bezierCurveTo(290.8, 485.8, 290.2, 487.5, 290.3, 490.0);
  ctx.bezierCurveTo(288.0, 489.7, 286.6, 488.4, 283.3, 489.0);
  ctx.bezierCurveTo(283.0, 485.3, 284.4, 483.4, 285.3, 481.0);
  ctx.bezierCurveTo(298.8, 484.2, 303.5, 496.1, 313.3, 503.0);
  ctx.bezierCurveTo(311.9, 507.3, 310.1, 511.1, 309.3, 516.0);
  ctx.bezierCurveTo(308.8, 516.3, 308.0, 514.4, 308.3, 514.0);
  ctx.bezierCurveTo(304.6, 519.2, 305.1, 530.7, 303.3, 540.0);
  ctx.bezierCurveTo(301.6, 549.0, 298.1, 559.4, 296.3, 568.0);
  ctx.bezierCurveTo(294.7, 575.6, 294.1, 579.7, 290.3, 585.0);
  ctx.bezierCurveTo(270.6, 571.8, 289.2, 545.3, 293.3, 527.0);
  ctx.bezierCurveTo(294.5, 527.2, 294.2, 528.8, 294.3, 530.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(443.3, 487.0);
  ctx.bezierCurveTo(446.2, 485.3, 440.6, 488.6, 440.3, 490.0);
  ctx.bezierCurveTo(437.4, 488.9, 441.6, 486.7, 443.3, 487.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(481.3, 490.0);
  ctx.bezierCurveTo(486.1, 492.5, 482.5, 496.1, 481.3, 490.0);
  ctx.lineTo(481.3, 490.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(279.3, 492.0);
  ctx.bezierCurveTo(284.6, 490.7, 276.6, 492.7, 279.3, 492.0);
  ctx.lineTo(279.3, 492.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(274.3, 495.0);
  ctx.bezierCurveTo(271.6, 494.9, 272.3, 496.7, 270.3, 495.0);
  ctx.bezierCurveTo(271.9, 493.5, 275.1, 490.9, 277.3, 493.0);
  ctx.bezierCurveTo(277.2, 494.2, 275.5, 493.8, 274.3, 494.0);
  ctx.bezierCurveTo(274.1, 494.9, 274.7, 494.9, 275.3, 495.0);
  ctx.bezierCurveTo(275.1, 496.1, 274.3, 495.6, 274.3, 495.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(499.3, 546.0);
  ctx.bezierCurveTo(493.0, 534.7, 489.3, 520.7, 485.3, 507.0);
  ctx.bezierCurveTo(483.9, 502.1, 485.8, 508.1, 486.3, 509.0);
  ctx.bezierCurveTo(490.6, 516.5, 497.8, 533.5, 499.3, 546.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(477.3, 507.0);
  ctx.bezierCurveTo(479.6, 508.4, 477.7, 514.0, 478.3, 517.0);
  ctx.bezierCurveTo(476.8, 520.1, 477.4, 512.7, 477.3, 511.0);
  ctx.bezierCurveTo(476.1, 511.2, 476.5, 512.8, 476.3, 514.0);
  ctx.bezierCurveTo(472.8, 511.7, 478.7, 510.5, 477.3, 507.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Compound Path
  ctx.beginPath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(456.3, 526.0);
  ctx.bezierCurveTo(459.6, 525.4, 457.8, 522.2, 457.3, 520.0);
  ctx.bezierCurveTo(453.2, 524.6, 458.5, 517.5, 454.3, 517.0);
  ctx.bezierCurveTo(454.5, 515.6, 457.3, 516.7, 457.3, 515.0);
  ctx.bezierCurveTo(466.4, 528.6, 472.9, 544.8, 479.3, 561.0);
  ctx.bezierCurveTo(477.7, 561.1, 475.5, 560.5, 475.3, 562.0);
  ctx.bezierCurveTo(469.0, 550.6, 464.1, 537.9, 459.3, 525.0);
  ctx.bezierCurveTo(455.8, 528.7, 460.4, 534.4, 462.3, 539.0);
  ctx.bezierCurveTo(464.5, 544.1, 466.9, 549.3, 468.3, 554.0);
  ctx.bezierCurveTo(472.1, 556.9, 473.2, 562.4, 474.3, 568.0);
  ctx.bezierCurveTo(472.6, 568.4, 472.4, 567.2, 472.3, 566.0);
  ctx.bezierCurveTo(469.8, 574.4, 467.8, 579.2, 467.3, 588.0);
  ctx.bezierCurveTo(459.7, 577.9, 450.9, 569.3, 445.3, 560.0);
  ctx.bezierCurveTo(444.6, 558.8, 445.1, 556.2, 444.3, 555.0);
  ctx.bezierCurveTo(443.7, 554.1, 442.4, 555.2, 441.3, 554.0);
  ctx.bezierCurveTo(439.6, 552.1, 435.8, 541.1, 434.3, 540.0);
  ctx.bezierCurveTo(432.4, 538.6, 431.3, 533.8, 431.3, 534.0);
  ctx.bezierCurveTo(430.5, 529.5, 432.7, 524.3, 431.3, 518.0);
  ctx.bezierCurveTo(436.1, 515.8, 438.1, 508.9, 444.3, 511.0);
  ctx.bezierCurveTo(441.7, 516.8, 440.3, 523.0, 440.3, 529.0);
  ctx.bezierCurveTo(444.1, 525.2, 441.9, 515.2, 447.3, 513.0);
  ctx.bezierCurveTo(447.5, 510.2, 443.6, 510.7, 446.3, 508.0);
  ctx.bezierCurveTo(450.7, 512.4, 453.8, 519.6, 456.3, 524.0);
  ctx.bezierCurveTo(454.6, 521.0, 459.1, 523.4, 456.3, 526.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(445.3, 535.0);
  ctx.bezierCurveTo(445.3, 531.0, 445.2, 527.7, 444.3, 527.0);
  ctx.bezierCurveTo(443.4, 529.8, 442.7, 532.6, 445.3, 535.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(457.3, 553.0);
  ctx.bezierCurveTo(459.1, 554.5, 458.3, 561.7, 461.3, 559.0);
  ctx.bezierCurveTo(462.5, 556.1, 452.3, 546.4, 452.3, 540.0);
  ctx.bezierCurveTo(449.8, 540.5, 447.3, 532.7, 448.3, 536.0);
  ctx.bezierCurveTo(450.6, 542.4, 454.2, 547.4, 457.3, 553.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(454.3, 553.0);
  ctx.bezierCurveTo(454.6, 551.6, 453.7, 549.1, 453.3, 551.0);
  ctx.bezierCurveTo(453.0, 552.4, 453.9, 554.9, 454.3, 553.0);
  ctx.closePath();

  // ironMan/Group/Tracing/Group/Compound Path/Path
  ctx.moveTo(466.3, 565.0);
  ctx.bezierCurveTo(464.0, 565.3, 465.2, 562.1, 463.3, 562.0);
  ctx.bezierCurveTo(463.5, 563.5, 463.0, 565.7, 464.3, 566.0);
  ctx.bezierCurveTo(464.6, 564.1, 466.0, 566.6, 466.3, 565.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(479.3, 510.0);
  ctx.bezierCurveTo(482.9, 512.4, 482.4, 518.9, 482.3, 525.0);
  ctx.bezierCurveTo(484.4, 524.7, 482.6, 520.6, 484.3, 520.0);
  ctx.bezierCurveTo(486.1, 522.4, 483.2, 527.2, 485.3, 531.0);
  ctx.bezierCurveTo(488.1, 529.4, 483.9, 526.5, 485.3, 523.0);
  ctx.bezierCurveTo(488.2, 537.7, 497.7, 552.1, 496.3, 565.0);
  ctx.bezierCurveTo(497.3, 565.0, 497.1, 563.8, 497.3, 563.0);
  ctx.bezierCurveTo(497.3, 568.7, 499.3, 573.1, 500.3, 580.0);
  ctx.bezierCurveTo(496.6, 580.2, 498.7, 576.2, 498.3, 575.0);
  ctx.bezierCurveTo(495.1, 565.7, 490.5, 555.4, 489.3, 544.0);
  ctx.bezierCurveTo(489.3, 542.7, 488.1, 543.6, 488.3, 544.0);
  ctx.bezierCurveTo(482.8, 536.2, 481.7, 521.8, 479.3, 510.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(444.3, 527.0);
  ctx.bezierCurveTo(445.2, 527.7, 445.3, 531.0, 445.3, 535.0);
  ctx.bezierCurveTo(442.7, 532.6, 443.4, 529.8, 444.3, 527.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(408.3, 557.0);
  ctx.bezierCurveTo(410.8, 557.0, 405.3, 551.6, 405.3, 554.0);
  ctx.bezierCurveTo(403.4, 547.3, 394.7, 539.5, 391.3, 531.0);
  ctx.bezierCurveTo(401.9, 535.1, 404.7, 546.0, 412.3, 555.0);
  ctx.bezierCurveTo(418.9, 562.8, 428.5, 573.8, 431.3, 586.0);
  ctx.bezierCurveTo(421.0, 577.5, 414.2, 567.6, 405.3, 556.0);
  ctx.bezierCurveTo(405.4, 553.6, 408.6, 555.8, 408.3, 557.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(448.3, 536.0);
  ctx.bezierCurveTo(447.3, 532.7, 449.8, 540.5, 452.3, 540.0);
  ctx.bezierCurveTo(452.3, 546.4, 462.5, 556.1, 461.3, 559.0);
  ctx.bezierCurveTo(458.3, 561.7, 459.1, 554.5, 457.3, 553.0);
  ctx.bezierCurveTo(454.2, 547.4, 450.6, 542.4, 448.3, 536.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(464.3, 566.0);
  ctx.bezierCurveTo(463.0, 565.7, 463.5, 563.5, 463.3, 562.0);
  ctx.bezierCurveTo(465.2, 562.1, 464.0, 565.3, 466.3, 565.0);
  ctx.bezierCurveTo(466.0, 566.6, 464.6, 564.1, 464.3, 566.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(480.3, 574.0);
  ctx.bezierCurveTo(481.3, 574.7, 481.8, 575.8, 482.3, 577.0);
  ctx.bezierCurveTo(481.9, 579.5, 480.2, 575.3, 480.3, 574.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(517.3, 108.0);
  ctx.bezierCurveTo(517.6, 110.4, 520.0, 106.9, 520.3, 106.0);
  ctx.bezierCurveTo(522.6, 107.7, 520.7, 113.6, 521.3, 117.0);
  ctx.bezierCurveTo(519.7, 117.0, 518.0, 117.0, 516.3, 117.0);
  ctx.bezierCurveTo(518.2, 113.5, 510.3, 117.8, 508.3, 113.0);
  ctx.bezierCurveTo(508.7, 114.9, 510.5, 115.5, 510.3, 118.0);
  ctx.bezierCurveTo(524.6, 117.7, 508.0, 121.3, 506.3, 116.0);
  ctx.bezierCurveTo(507.9, 112.6, 508.7, 108.3, 508.3, 103.0);
  ctx.bezierCurveTo(511.5, 106.0, 514.2, 104.0, 519.3, 104.0);
  ctx.bezierCurveTo(519.2, 105.9, 518.7, 107.3, 517.3, 108.0);
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(390.3, 131.0);
  ctx.bezierCurveTo(383.2, 132.1, 381.2, 135.4, 374.3, 134.0);
  ctx.bezierCurveTo(373.3, 133.8, 377.5, 132.6, 377.3, 133.0);
  ctx.bezierCurveTo(378.3, 130.6, 367.4, 133.8, 372.3, 130.0);
  ctx.bezierCurveTo(379.2, 130.4, 387.4, 123.0, 390.3, 131.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Group/Tracing/Group/Path
  ctx.beginPath();
  ctx.moveTo(523.3, 147.0);
  ctx.bezierCurveTo(523.1, 144.9, 518.9, 146.7, 518.3, 145.0);
  ctx.bezierCurveTo(521.5, 140.3, 525.4, 146.7, 525.3, 150.0);
  ctx.bezierCurveTo(524.9, 163.1, 500.1, 157.5, 511.3, 143.0);
  ctx.bezierCurveTo(513.3, 143.0, 515.3, 143.0, 517.3, 143.0);
  ctx.bezierCurveTo(518.3, 146.4, 514.2, 144.6, 512.3, 145.0);
  ctx.bezierCurveTo(518.2, 147.8, 516.8, 146.5, 523.3, 147.0);
  ctx.closePath();
  ctx.fill();

  // ironMan/Path
  ctx.restore();
  ctx.restore();
  ctx.restore();
  ctx.beginPath();
  ctx.moveTo(1.0, 136.7);
  ctx.bezierCurveTo(1.0, 136.7, 1.8, 136.7, 1.8, 135.9);
  ctx.stroke();
  ctx.restore();
}
