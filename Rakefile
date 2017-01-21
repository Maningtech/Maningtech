require 'html/proofer'

# rake test
desc "build and test website"

task :test do 
    sh "bundle exec jekyll build"
    HTML::Proofer.new("./_site", {:href_ignore=> ['http://localhost:1234'], :verbose => true}).run
end