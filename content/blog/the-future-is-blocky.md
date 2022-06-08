---
title: "The Future is Block-y"
description: "Full Site Editing is the future of WordPress, but we still live in the present. There's some specific gotchas and limitations left to overcome."
date: "2022-06-08"
image: "https://images.pexels.com/photos/1329318/pexels-photo-1329318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

---

Two weeks ago, [WordPress dropped 6.0](https://wordpress.org/support/wordpress-version/version-6-0/). It didn't contain the monumental changes that an "integer" release typically brings. Instead, major advances in full-site editing, the jewel of [Gutenberg's Phase 2](https://make.wordpress.org/core/2022/01/26/preliminary-roadmap-for-6-0/), largely came in in the 5.9 release.

Full Site Editing (or FSE), as I'm sure you'll hear of more and more in coming months, brings the familiar Gutenberg block editing experience to site globals, such as headers and footers. It's a convenient leap forward for the non-technical, but requires the touch of a developer to truly unlock the possibilities (but you won't need a dev if you're adventurous).

To leverage this leap forward, you'll need a [Block Theme that explicitly supports Full Site Editing](https://wordpress.org/themes/tags/full-site-editing/). The most prominent of this, no surprise, is [Twenty Twenty-Two by Automattic](https://pcm.wordpress.org/themes/twentytwentytwo/). As is often the case, the creators of WordPress update the built-in default theme to showcase the newest features, while external theme makers catch up to follow suit.

![The new-look Appearance Menu](images/full-site-editing-editor-appearance.jpg "The new-look Appearance Menu")

When activated, your Appearance menu will largely be cleared out. A singular **Editor** option replaces Customizer, Menus, Widgets, and other familiar favorites. In this menu, you'll be able to edit Templates (for posts, pages, and custom post types), Template Parts (header, and footer, of which you can have multiples), and Styles (such as selecting color pres-sets, typography options, and global layout options). As of this writing, some of the features feel immature, and we look forward to seeing how they develop in upcoming "point" releases, such as 6.1 and 6.2.

While we're cautiously optimistic about full-site editing, we're over-the-moon with how it pares down the number of files, and the length of the develoment process. Gone are the folders upon folders of PHP files, and the archaiac content and querying templates. You can still use these, if you'd like. But they're largely supplanted by Gutenberg, specifically FSE and the [Query Loop](https://wordpress.org/support/article/query-loop-block/) block. In some instances, however, extension is still required.

![Look ma! No PHP!](images/twenty-twenty-two-limited-php "Look ma! No PHP!")

There are dozens of plugin suites that provide dozens upon dozens of Gutenberg blocks, with countless customization options. These are great, but largely unnecessary if you're already working with a developer. While the meganavigation options are limited using default Gutenberg blocks, and lackluster or overdeveloped in plugin suites, they can be achieved with relative ease using ACF custom blocks.

A gigantic lapse we've noted in our experimentation is AJAX infinite load. Gutenberg's bandied-about Query Loop plugin defaults to page-based pagination, and offers no "lazy load" functionality. These implementations, pre-Gutenberg, still usually required a plugin, shortcode, or know-how. Even in that last option, jQuery was often required.

Much to our surprise, no Gutenberg option exists natively. While some plugins offer this, we strongly recommend against them. Often, these plugins are bloated, blatantly freemium, and offer too much configuration based on what is actually needed. Unfortunately, there's neither a native option, nor is there clamoring in the WordPress community to add it.

Our current initiative, absent a miracle alternative, is to reverse engineer the native Query Loop block to provide this via a custom ACF block. Keep an eye out for it on [our GitHub](https://github.com/petrin-dev), as our experience with the meganavigation came together in a day or so.

Full Site Editing is the way of the future. This is a step forward that should be championed by both the developers and the non-technical. While premium themes or capable developers will still be needed to truly unlock the potential to craft custom sites using less code, those who are unwilling to pay that price will be able to have a positive experience creating a starter site with their own two hands.

For Petdev, anything that reduces the amount of PHP that we need to write in 2022 is a welcomed change. It's not quite a revolutionary leap forward, but we believe it will be. As we approach Phase 3 of the Gutenberg project, its promise has certainly not been fully realized. But it's beginning to take shape, and is already changing the game.

We can't wait for what's next!