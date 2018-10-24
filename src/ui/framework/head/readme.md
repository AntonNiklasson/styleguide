# Head
>Specifies document meta data and file references.

## Context description

### SEO

|Selector                          |Description |
|----------------------------------|------------|
|<strong>title</strong>            |Defines the title of the current page. [Read more ›](https://moz.com/learn/seo/title-tag) |
|<strong>meta.keywords</strong>    |Describes a page's content. Important for SEO ranking! [Read more ›](https://www.techwyse.com/blog/search-engine-optimization/5-ways-to-write-effective-keywords/) |
|<strong>meta.description</strong> |A user friendly summary of the page contents. [Read more ›](https://searchenginewatch.com/2016/05/26/how-to-write-meta-descriptions-for-seo-with-good-and-bad-examples/) |

### Progressive Web App

|Selector                                |Description |
|----------------------------------------|------------|
|<strong>application.name</strong>       |Specifies the name of the Web application that the page represents. |
|<strong>application.themeColor</strong> |Can change the color of the UI in some devices/browsers for a more customised experience. |

### Social data
We have focused on a broad selection of social options to enable content-rich share possibilities. Here are some key points to follow when configuring this section.

|Selector                               |Description |
|---------------------------------------|------------|
|<strong>share.title</strong>           |Can choose a separate title for sharing. Page title will be used if share title is empty. |
|<strong>share.image</strong>           |Recommended size is <strong>1200 x 630px.</strong> If an image is not available in this size, we should at least use <strong>600 x 315px</strong>. Images must not exceed 8 MB. [Read more ›](https://support.wix.com/en/article/recommended-facebook-share-image-size) |
|<strong>share.domain</strong>          |Describes the root url of the current page. |
|<strong>share.description</strong>     |Can choose a separate description for sharing. Meta description will be used if share description is empty. |
|<strong>share.image</strong>           |Provides an option to select a custom image per page when sharing, but should have a default (site-wide) fallback. |
|<strong>share.url</strong>             |The current page url |
|<strong>share.type</strong>            |Used for facebook og-tags. No other type than 'website' should be needed at this point. |
|<strong>share.twitterCardType</strong> |Used to customise the appearance of the twitter card when sharing this page. * <strong>summary:</strong> Simple card  * <strong>summary_large_image:</strong> Card with large image * <strong>player:</strong> Enables a media player. Requires `share.video` data.|
|<strong>share.video.width</strong>     |Defines the width of the video. This data should be retrieved programmatically.|
|<strong>share.video.height</strong>    |Defines the height of the video. This data should be retrieved programmatically.|
|<strong>share.video.src</strong>       |The url to the video. |
|<strong>share.video.type</strong>      |The mime-type of the video. |
