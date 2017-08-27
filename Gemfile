source "https://rubygems.org"
ruby RUBY_VERSION

gem 'jekyll'
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

group :jekyll_plugins do 
    gem 'jekyll-paginate'
    gem 'jekyll-feed'
    gem 'jekyll-seo-tag'
    gem 'jekyll-sitemap'
    gem 'hawkins'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]