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
 * Theme Lumiere - Login layout.
 *
 * Custom split-screen login page.
 *
 * @package    theme_lumiere
 * @copyright  2024 Lumiere
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$bodyattributes = $OUTPUT->body_attributes([]);

// Get Lumiere login data.
$logindata = theme_lumiere_get_login_data();

$templatecontext = [
    'sitename'        => format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID)]),
    'output'          => $OUTPUT,
    'bodyattributes'  => $bodyattributes,
    'customlogin'     => $logindata['customlogin'],
    'loginheading'    => $logindata['heading'],
    'loginsubheading' => $logindata['subheading'],
    'loginbgurl'      => $logindata['loginbgurl'],
];

echo $OUTPUT->doctype();
?>
<html <?php echo $OUTPUT->htmlattributes(); ?>>
<head>
    <title><?php echo $OUTPUT->page_title(); ?></title>
    <link rel="shortcut icon" href="<?php echo $OUTPUT->favicon(); ?>" />
    <?php echo $OUTPUT->standard_head_html(); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body <?php echo $OUTPUT->body_attributes('lumiere-login-page'); ?>>
<?php echo $OUTPUT->standard_top_of_body_html(); ?>

<?php
// If custom login is enabled, use our template. Otherwise, use Boost's.
if ($logindata['customlogin']) {
    echo $OUTPUT->render_from_template('theme_lumiere/login', $templatecontext);
} else {
    // Fall back to Boost's login layout.
    require_once($CFG->dirroot . '/theme/boost/layout/login.php');
}
?>

<?php echo $OUTPUT->standard_end_of_body_html(); ?>
</body>
</html>
