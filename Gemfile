# frozen_string_literal: true
source "https://rubygems.org"

gem 'jekyll'
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

group :jekyll_plugins do
    gem 'jekyll-email-protect'
    gem 'autolink'
    gem 'jekyll-sitemap'
    gem 'jekyll-seo-tag'
    gem 'jekyll-paginate'
    gem 'jekyll-feed'
end

# Test the build
group :test do
  gem 'rake'
  gem 'html-proofer'
end