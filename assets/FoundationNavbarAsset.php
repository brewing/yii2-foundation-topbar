<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace foundationTopbar\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class FoundationNavbarAsset extends AssetBundle
{

    public $basePath    = '@foundationTopbar/navbar/dist/';
    public $baseUrl     = '@foundationTopbar';

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
