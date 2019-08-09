<template>
  <!-- <footer>Powered by GeoSupply</footer> -->
  <footer class="footer-distributed">
			<div class="footer-left">
				<h3>Geo<span>Supply</span></h3>
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
			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>汐止區</span> </p>
				</div>
				<div>
					<i class="fa fa-phone"></i>
					<p>02XXXXX</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>
			</div>
			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Provided domestic and international automated monitoring system engineering service
				</p>
				<!-- <div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div> -->
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
