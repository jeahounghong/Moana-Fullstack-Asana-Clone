json.array! @sections do |section|
    json.partial! 'api/sections/section', section: section
end