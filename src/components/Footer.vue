<template>
  <!-- <footer>Powered by GeoSupply</footer> -->
  <footer class="footer-distributed">
			<div class="footer-left">
				<div class="footer_logo">
					<img src="../assets/img/footer_logo.png">
				</div>
				<p class="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">Project</a>
					·
					<a href="#">Product</a>
					·
					<a href="#">About Us</a>
					·
					<a href="#">Contact Us</a>
				</p>
				<p class="footer-company-name">GeoSupply &copy; 2019</p>
			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About GeoSupply</span>
					Provided domestic and international automated monitoring system engineering service
				</p>
				<!-- <div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div> -->
			</div>
			<div class="footer-center">
				<div class="logo_section">
					<i class="fa fa-map-marker"></i>
					<p><span>6F., No.28, Ln. 57, Jiancheng Rd., Xizhi Dist., New Taipei City 221, Taiwan (R.O.C.)</span> </p>
				</div>
				<div class="logo_section">
					<i class="fa fa-phone"></i>
					<p>+886918883451 +886‐2‐26481050</p>
				</div>
				<div class="logo_section_last">
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:geosupply.tw@gmail.com">geosupply.tw@gmail.com</a></p>
				</div>
			</div>
		</footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
@import "../assets/scss/footer.scss";
</style>
