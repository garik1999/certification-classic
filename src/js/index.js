// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

// global
import jQuery from 'js#/lib/jquery';
// styles
import 'sass#/style.scss';
// scripts
// import { demo } from 'js#/modules/demo-module';
import { filter } from 'js#/modules/filter-module';
import { year } from 'js#/modules/create-year';
import { resize } from 'js#/modules/window-resize';

// -----------------------------------------------------------------------------
// Initialize
// -----------------------------------------------------------------------------

jQuery(function ($) {
	filter();
	year();
	resize();
});
