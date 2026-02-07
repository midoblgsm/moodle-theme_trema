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
 * Theme Lumiere - Settings.
 *
 * @package    theme_lumiere
 * @copyright  2024 Lumiere
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

if ($ADMIN->fulltree) {

    $settings = new theme_boost_admin_settingspage_tabs('themesettinglumiere', get_string('configtitle', 'theme_lumiere'));

    // -----------------------------------------------
    // General settings tab.
    // -----------------------------------------------
    $page = new admin_settingpage('theme_lumiere_general', get_string('generalsettings', 'theme_boost'));

    // Preset.
    $name = 'theme_lumiere/preset';
    $title = get_string('preset', 'theme_lumiere');
    $description = get_string('preset_desc', 'theme_lumiere');
    $default = 'default.scss';
    $choices = [];
    // Scan preset directory.
    $context = context_system::instance();
    $presetdir = $CFG->dirroot . '/theme/lumiere/scss/preset/';
    if (is_dir($presetdir)) {
        $presetfiles = glob($presetdir . '*.scss');
        foreach ($presetfiles as $presetfile) {
            $presetname = basename($presetfile);
            $choices[$presetname] = ucfirst(str_replace('.scss', '', $presetname));
        }
    }
    if (empty($choices)) {
        $choices['default.scss'] = 'Default';
    }
    $setting = new admin_setting_configselect($name, $title, $description, $default, $choices);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Preset files.
    $name = 'theme_lumiere/presetfiles';
    $title = get_string('presetfiles', 'theme_lumiere');
    $description = get_string('presetfiles_desc', 'theme_lumiere');
    $setting = new admin_setting_configstoredfile($name, $title, $description, 'preset', 0,
        ['maxfiles' => 20, 'accepted_types' => ['.scss']]);
    $page->add($setting);

    // Brand colour.
    $name = 'theme_lumiere/brandcolor';
    $title = get_string('brandcolor', 'theme_lumiere');
    $description = get_string('brandcolor_desc', 'theme_lumiere');
    $setting = new admin_setting_configcolourpicker($name, $title, $description, '#2563eb');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    $settings->add($page);

    // -----------------------------------------------
    // Login page tab.
    // -----------------------------------------------
    $page = new admin_settingpage('theme_lumiere_login', get_string('login', 'core'));

    // Custom login toggle.
    $name = 'theme_lumiere/customlogin';
    $title = get_string('customlogin', 'theme_lumiere');
    $description = get_string('customlogin_desc', 'theme_lumiere');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 1);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Login heading.
    $name = 'theme_lumiere/loginheading';
    $title = get_string('loginheading', 'theme_lumiere');
    $description = get_string('loginheading_desc', 'theme_lumiere');
    $default = get_string('loginheading_default', 'theme_lumiere');
    $setting = new admin_setting_configtext($name, $title, $description, $default);
    $page->add($setting);

    // Login subheading.
    $name = 'theme_lumiere/loginsubheading';
    $title = get_string('loginsubheading', 'theme_lumiere');
    $description = get_string('loginsubheading_desc', 'theme_lumiere');
    $default = get_string('loginsubheading_default', 'theme_lumiere');
    $setting = new admin_setting_configtextarea($name, $title, $description, $default);
    $page->add($setting);

    // Login background image.
    $name = 'theme_lumiere/loginbg';
    $title = get_string('loginbg', 'theme_lumiere');
    $description = get_string('loginbg_desc', 'theme_lumiere');
    $setting = new admin_setting_configstoredfile($name, $title, $description, 'loginbg');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    $settings->add($page);

    // -----------------------------------------------
    // Dashboard tab.
    // -----------------------------------------------
    $page = new admin_settingpage('theme_lumiere_dashboard', get_string('myhome'));

    // Show dashboard banner.
    $name = 'theme_lumiere/showdashboardbanner';
    $title = get_string('showdashboardbanner', 'theme_lumiere');
    $description = get_string('showdashboardbanner_desc', 'theme_lumiere');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 1);
    $page->add($setting);

    // Welcome message.
    $name = 'theme_lumiere/welcomemessage';
    $title = get_string('welcomemessage', 'theme_lumiere');
    $description = get_string('welcomemessage_desc', 'theme_lumiere');
    $default = get_string('welcomemessage_default', 'theme_lumiere');
    $setting = new admin_setting_configtext($name, $title, $description, $default);
    $page->add($setting);

    // Dashboard subtitle.
    $name = 'theme_lumiere/dashboardsubtitle';
    $title = get_string('dashboardsubtitle', 'theme_lumiere');
    $description = get_string('dashboardsubtitle_desc', 'theme_lumiere');
    $default = get_string('dashboardsubtitle_default', 'theme_lumiere');
    $setting = new admin_setting_configtextarea($name, $title, $description, $default);
    $page->add($setting);

    $settings->add($page);

    // -----------------------------------------------
    // Advanced settings tab.
    // -----------------------------------------------
    $page = new admin_settingpage('theme_lumiere_advanced', get_string('advancedsettings', 'theme_boost'));

    // Raw SCSS pre.
    $name = 'theme_lumiere/scsspre';
    $title = get_string('rawscsspre', 'theme_lumiere');
    $description = get_string('rawscsspre_desc', 'theme_lumiere');
    $setting = new admin_setting_scsscode($name, $title, $description, '', PARAM_RAW);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Raw SCSS.
    $name = 'theme_lumiere/scss';
    $title = get_string('rawscss', 'theme_lumiere');
    $description = get_string('rawscss_desc', 'theme_lumiere');
    $setting = new admin_setting_scsscode($name, $title, $description, '', PARAM_RAW);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Footnote.
    $name = 'theme_lumiere/footnote';
    $title = get_string('footnote', 'theme_lumiere');
    $description = get_string('footnote_desc', 'theme_lumiere');
    $setting = new admin_setting_confightmleditor($name, $title, $description, '');
    $page->add($setting);

    $settings->add($page);
}
