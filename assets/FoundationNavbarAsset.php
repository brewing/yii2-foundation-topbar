<?php
namespace drmabuse\foundationTopbar\assets;

use yii\web\AssetBundle;

/**
 * 11 Oct 2013
 * @author Pascal Brewing <pascalbrewing@gmail.com>
 * Class FoundationNavbarAsset
 * @package drmabuse\foundationTopbar\assets
 */

class FoundationNavbarAsset extends AssetBundle
{

    public $sourcePath  = '@foundationTopbar/dist/';
    public $path        = '';
    public $css         = [
        'css/navbar.css'
    ];

    public $js          = [
        'js/modernizr.js',
        'js/foundation.min.js',
        'js/foundation.topbar.js',
        'js/app.js'
    ];

    public $depends     = [
        'yii\web\YiiAsset',
    ];
}
