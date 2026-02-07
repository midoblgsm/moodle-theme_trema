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
 * Theme Lumiere - Library functions.
 *
 * @package    theme_lumiere
 * @copyright  2024 Lumiere
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

/**
 * Returns the main SCSS content (the preset).
 *
 * @param theme_config $theme The theme config object.
 * @return string SCSS content.
 */
function theme_lumiere_get_main_scss_content($theme) {
    global $CFG;

    $scss = '';
    $preset = !empty($theme->settings->preset) ? $theme->settings->preset : 'default.scss';

    // Check for user-uploaded presets first.
    $fs = get_file_storage();
    $context = context_system::instance();
    $files = $fs->get_area_files($context->id, 'theme_lumiere', 'preset', 0, 'itemid, filepath, filename', false);
    foreach ($files as $file) {
        if ($file->get_filename() == $preset) {
            $scss .= $file->get_content();
            return $scss;
        }
    }

    // Fall back to theme preset file.
    $presetfile = $CFG->dirroot . '/theme/lumiere/scss/preset/' . $preset;
    if (file_exists($presetfile)) {
        $scss .= file_get_contents($presetfile);
    } else {
        // Fallback to Boost default.
        $scss .= file_get_contents($CFG->dirroot . '/theme/boost/scss/preset/default.scss');
    }

    return $scss;
}

/**
 * Get SCSS to prepend (variable overrides).
 *
 * @param theme_config $theme The theme config object.
 * @return string SCSS to prepend.
 */
function theme_lumiere_get_pre_scss($theme) {
    global $CFG;

    $scss = '';

    // Load the Lumiere variable overrides.
    $variablesfile = $CFG->dirroot . '/theme/lumiere/scss/_variables.scss';
    if (file_exists($variablesfile)) {
        $scss .= file_get_contents($variablesfile);
    }

    // Override brand color from settings.
    $configurable = [
        'brandcolor' => ['brand-primary'],
    ];

    foreach ($configurable as $configkey => $targets) {
        $value = isset($theme->settings->{$configkey}) ? $theme->settings->{$configkey} : null;
        if (empty($value)) {
            continue;
        }
        foreach ($targets as $target) {
            $scss .= '$' . $target . ': ' . $value . ";\n";
        }
    }

    // Prepend custom pre-SCSS from settings.
    if (!empty($theme->settings->scsspre)) {
        $scss .= $theme->settings->scsspre;
    }

    return $scss;
}

/**
 * Get extra SCSS (custom styles loaded after the preset).
 *
 * @param theme_config $theme The theme config object.
 * @return string Extra SCSS.
 */
function theme_lumiere_get_extra_scss($theme) {
    global $CFG;

    $scss = '';

    // Load all Lumiere custom partials.
    $partials = [
        '_typography.scss',
        '_navigation.scss',
        '_cards.scss',
        '_buttons.scss',
        '_dashboard.scss',
        '_login.scss',
        '_courses.scss',
        '_calendar.scss',
        '_footer.scss',
        '_utilities.scss',
    ];

    foreach ($partials as $partial) {
        $filepath = $CFG->dirroot . '/theme/lumiere/scss/' . $partial;
        if (file_exists($filepath)) {
            $scss .= file_get_contents($filepath);
        }
    }

    // Append post.scss.
    $postfile = $CFG->dirroot . '/theme/lumiere/scss/post.scss';
    if (file_exists($postfile)) {
        $scss .= file_get_contents($postfile);
    }

    // Append custom SCSS from settings.
    if (!empty($theme->settings->scss)) {
        $scss .= $theme->settings->scss;
    }

    return $scss;
}

/**
 * Get compiled CSS (fallback).
 *
 * @param theme_config $theme The theme config object.
 * @return string Compiled CSS.
 */
function theme_lumiere_get_precompiled_css($theme) {
    global $CFG;
    return file_get_contents($CFG->dirroot . '/theme/boost/style/moodle.css');
}

/**
 * Serves any files associated with the theme settings.
 *
 * @param stdClass $course Course object.
 * @param stdClass $cm Course module object.
 * @param context $context Context.
 * @param string $filearea File area.
 * @param array $args Extra arguments.
 * @param bool $forcedownload Force download.
 * @param array $options Additional options.
 * @return bool
 */
function theme_lumiere_pluginfile($course, $cm, $context, $filearea, $args, $forcedownload, array $options = []) {
    if ($context->contextlevel == CONTEXT_SYSTEM && ($filearea === 'preset' || $filearea === 'loginbg')) {
        $theme = theme_config::load('lumiere');
        if (!empty($googl)) {
            // This shouldn't happen normally.
            send_file_not_found();
        }
        return $theme->setting_file_serve($filearea, $args, $forcedownload, $options);
    }
    send_file_not_found();
}

/**
 * Get the dashboard welcome data for the current user.
 *
 * @return array Template context data.
 */
function theme_lumiere_get_dashboard_data() {
    global $USER, $PAGE;

    $theme = $PAGE->theme;
    $data = [];

    // Welcome message.
    $welcomemsg = !empty($theme->settings->welcomemessage)
        ? $theme->settings->welcomemessage
        : get_string('welcomemessage_default', 'theme_lumiere');
    $data['welcomemessage'] = str_replace('{firstname}', $USER->firstname, $welcomemsg);

    // Subtitle.
    $data['subtitle'] = !empty($theme->settings->dashboardsubtitle)
        ? $theme->settings->dashboardsubtitle
        : get_string('dashboardsubtitle_default', 'theme_lumiere');

    // Show banner?
    $data['showbanner'] = !isset($theme->settings->showdashboardbanner) || $theme->settings->showdashboardbanner;

    return $data;
}

/**
 * Get login page template data.
 *
 * @return array Template context data.
 */
function theme_lumiere_get_login_data() {
    global $PAGE, $CFG;

    $theme = $PAGE->theme;
    $data = [];

    $data['customlogin'] = !isset($theme->settings->customlogin) || $theme->settings->customlogin;

    $data['heading'] = !empty($theme->settings->loginheading)
        ? $theme->settings->loginheading
        : get_string('loginheading_default', 'theme_lumiere');

    $data['subheading'] = !empty($theme->settings->loginsubheading)
        ? $theme->settings->loginsubheading
        : get_string('loginsubheading_default', 'theme_lumiere');

    // Login background image.
    $data['loginbgurl'] = '';
    if (!empty($theme->settings->loginbg)) {
        $data['loginbgurl'] = $theme->setting_file_url('loginbg', 'loginbg');
    }

    return $data;
}
