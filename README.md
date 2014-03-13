yii2-foundation-topbar
======================

deeper Menu widget for yii2 from [http://foundation.zurb.com/docs/components/topbar.html](http://foundation.zurb.com/docs/components/topbar.html "http://foundation.zurb.com/docs/components/topbar.html")
##Requirements

yii2 php 5.4 >internet Explorer 8

##Usage

~~~

    use drmabuse\foundationTopbar\FoundationNavbar;
    use drmabuse\foundationTopbar\FoundationNav;


    FoundationNavbar::begin([
        'title' => [
            'name'      => Yii::$app->name,
            'nameUrl'   => Yii::$app->homeUrl,
        ],
        'options' => [
            'navOptions' => [
                'class' => 'special',
                'data-options' => 'is_hover:false'
            ],
            'titleAreaOptions' => [
                'class' => 'special1'
            ],
            'sectionOptions' => [
                'class' => 'special2'
            ]
        ],
        'contain' => [
            'class' => 'fixed'
        ]
    ]);

    $menuItems = [
        ['label' => 'Home', 'url' => [Yii::$app->homeUrl]],
        [
            'label' => 'Menü',
            'items' =>[
                ['label' => 'Home', 'url' => ['/site/index']],
                ['label' => 'About', 'url' => ['/site/about']],
                ['label' => 'Submenu2','items' => [
                    [
                        'label' => 'Verwaltung',
                        'url' => ['/mediating/mediatingimage/index']
                    ],
                    [
                        'label' => 'Neu +',
                        'url' => ['/mediating/mediatingimage/create'],
                    ]
                ]]
            ],
        ],
    ];

    if (Yii::$app->user->isGuest) {
        $menuItems[] = ['label' => 'Signup', 'url' => ['/site/signup']];
        $menuItems[] = ['label' => 'Login', 'url' => ['/site/login']];
    } else {
        $menuItems[] = ['label' => 'Logout (' . Yii::$app->user->identity->username . ')', 'url' => ['/site/logout']];
    }

    echo FoundationNav::widget([
        'options' => ['class' => 'right'],
        'items' => $menuItems,
        'encodeLabels' => false
    ]);

    FoundationNavbar::end();?>
~~~

Maybe you wanna overwrite or depends the Files

~~~

    'assetManager' => [
        'bundles' => [
            'drmabuse\foundationTopbar\assets\FoundationTopbarAssets' => [
                'depends' => [
                    'yii\web\YiiAsset',
                    'backend\assets\AppAsset'
                ],
            ]
        ],
    ],

~~~


##Resources

 * [Github page](https://github.com/brewing/yii2-foundation-topbar)
