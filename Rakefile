require 'rake'
require 'yaml'
require 'rbconfig'
require 'html-proofer'

# == Configuration =============================================================

# Set "rake watch" as default task
task :default => :watch

# Load the configuration file
CONFIG = YAML.load_file("_config.yml")


# rake build
desc "Build the site"
task :build do
  execute("bundle exec jekyll build")
end

# rake test html, urls, images, scripts
desc "build and test website"
task :html_proofer do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./_site", {
    :empty_alt_ignore => true,
    :url_ignore => [
      'http://localhost:1234'
    ],
    :cache => {
      :timeframe => '1d'
    },
    :typhoeus => {
      :followlocation => true,
      :ssl_verifypeer => false,
      :headers => { 'User-Agent' => 'html-proofer' }
    }
  }).run
end

desc "Run HTML Proofer and Lint Tasks"
task :test do
  Rake::Task["html_proofer"].invoke
end