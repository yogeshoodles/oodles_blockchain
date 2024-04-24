<?php
/**
 * The template for displaying search results pages.
 *
 * @license GPL 2.0
 */
get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php if ( have_posts() ) { ?>

			<header class="page-header">
				<?php if ( siteorigin_page_setting( 'page_title' ) ) { ?>
					<h1 class="page-title"><?php printf( esc_html__( 'Search Results for: %s', 'siteorigin-north' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
				<?php } ?>
				<?php siteorigin_north_breadcrumbs(); ?>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) {
				the_post(); ?>

				<?php
				/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
				get_template_part( 'template-parts/content', 'search' );
				?>

			<?php } ?>

			<?php siteorigin_north_posts_pagination(); ?>

		<?php } else { ?>

			<?php get_template_part( 'template-parts/content', 'none' ); ?>

		<?php } ?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
