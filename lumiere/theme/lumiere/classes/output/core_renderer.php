<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Theme Lumiere - Core renderer overrides.
 *
 * @package    theme_lumiere
 * @copyright  2024 Lumiere
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace theme_lumiere\output;

defined('MOODLE_INTERNAL') || die();

/**
 * Lumiere core renderer.
 *
 * Extends Boost's core renderer to inject Lumiere-specific content
 * such as the dashboard welcome banner.
 */
class core_renderer extends \theme_boost\output\core_renderer {

    /**
     * Renders the header bar.
     *
     * @return string HTML for the header.
     */
    public function full_header() {
        global $PAGE;

        $header = parent::full_header();

        // Inject the dashboard welcome banner on the dashboard page.
        if ($PAGE->pagelayout === 'mydashboard') {
            $bannerhtml = $this->render_dashboard_banner();
            $header = $bannerhtml . $header;
        }

        return $header;
    }

    /**
     * Render the Lumiere dashboard welcome banner.
     *
     * @return string HTML for the welcome banner.
     */
    protected function render_dashboard_banner() {
        $data = \theme_lumiere_get_dashboard_data();

        if (empty($data['showbanner'])) {
            return '';
        }

        $data['mycourses_url'] = new \moodle_url('/my/courses.php');

        return $this->render_from_template('theme_lumiere/dashboard_banner', $data);
    }

    /**
     * Returns the site's compact logo URL or false.
     *
     * @param int $maxwidth Max width.
     * @param int $maxheight Max height.
     * @return string|false URL or false.
     */
    public function get_compact_logo_url($maxwidth = 300, $maxheight = 300) {
        return parent::get_compact_logo_url($maxwidth, $maxheight);
    }

    /**
     * Whether the compact logo should be displayed in the navbar.
     *
     * @return bool
     */
    public function should_display_navbar_logo() {
        $logo = $this->get_compact_logo_url();
        return !empty($logo);
    }

    /**
     * Render the footnote if set.
     *
     * @return string HTML for the footnote.
     */
    public function render_footnote() {
        global $PAGE;

        $footnote = '';
        $theme = $PAGE->theme;

        if (!empty($theme->settings->footnote)) {
            $footnote = '<div class="footnote text-center mt-3">'
                . format_text($theme->settings->footnote, FORMAT_HTML)
                . '</div>';
        }

        return $footnote;
    }
}
