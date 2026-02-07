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
 * Theme Lumiere - Language strings.
 *
 * @package    theme_lumiere
 * @copyright  2024 Lumiere
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['pluginname'] = 'Lumiere';
$string['choosereadme'] = 'Lumiere is a modern, ergonomic theme for Moodle built on top of Boost. It features a clean indigo-blue design with soft typography (Inter + Outfit), rounded cards, and an accessible color palette designed to reduce eye strain during extended learning sessions.';

// General settings.
$string['configtitle'] = 'Lumiere Settings';

// Brand colors.
$string['brandcolor'] = 'Brand colour';
$string['brandcolor_desc'] = 'The main brand colour used for links, buttons, and active states. Default is Lumiere Indigo (#2563eb).';

// Preset.
$string['preset'] = 'Theme preset';
$string['preset_desc'] = 'Pick a preset to broadly change the look of the theme.';

// Preset files.
$string['presetfiles'] = 'Additional theme preset files';
$string['presetfiles_desc'] = 'Preset files can be used to dramatically alter the appearance of the theme. See <a href="https://docs.moodle.org/dev/Boost_Presets">Boost presets</a> for information on creating and sharing your own preset files.';

// Login page.
$string['loginbg'] = 'Login background image';
$string['loginbg_desc'] = 'Upload a background image for the login page. The image is displayed on the left panel.';
$string['loginheading'] = 'Login heading';
$string['loginheading_desc'] = 'The heading shown on the login page hero panel.';
$string['loginheading_default'] = 'Learn without limits.';
$string['loginsubheading'] = 'Login subheading';
$string['loginsubheading_desc'] = 'The text shown below the heading on the login page hero panel.';
$string['loginsubheading_default'] = 'Join thousands of students to master new skills, advance your career, and explore your passions through our ergonomic learning platform.';

// Dashboard.
$string['welcomemessage'] = 'Welcome message';
$string['welcomemessage_desc'] = 'Custom welcome message shown on the dashboard banner. Use {firstname} as a placeholder for the user\'s first name.';
$string['welcomemessage_default'] = 'Welcome back, {firstname}!';
$string['dashboardsubtitle'] = 'Dashboard subtitle';
$string['dashboardsubtitle_desc'] = 'Subtitle text shown below the welcome message on the dashboard.';
$string['dashboardsubtitle_default'] = 'Keep up the momentum with your learning journey!';

// Appearance.
$string['showdashboardbanner'] = 'Show dashboard banner';
$string['showdashboardbanner_desc'] = 'Display the welcome banner at the top of the dashboard page.';
$string['customlogin'] = 'Custom login page';
$string['customlogin_desc'] = 'Enable the Lumiere custom split-screen login page design.';

// Footer.
$string['footnote'] = 'Footnote';
$string['footnote_desc'] = 'A text area to display a footnote in the site footer.';

// Advanced settings.
$string['rawscss'] = 'Raw SCSS';
$string['rawscss_desc'] = 'Use this field to provide SCSS code which will be injected at the end of the style sheet.';
$string['rawscsspre'] = 'Raw initial SCSS';
$string['rawscsspre_desc'] = 'Use this field to provide SCSS code which will be injected before everything else. Most of the time you will use this setting to define variables.';

// Regions.
$string['region-side-pre'] = 'Right';

// Login template strings.
$string['welcomeback'] = 'Welcome back';
$string['entercredientials'] = 'Enter your credentials to access your account.';
$string['forgotpassword'] = 'Forgot password?';
$string['donthaveanaccount'] = 'Don\'t have an account?';
$string['orcontinuewith'] = 'Or continue with';
$string['login_with'] = 'Log in with {$a}';

// Dashboard template strings.
$string['continuelearning'] = 'Continue Learning';
