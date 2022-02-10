# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dish.destroy_all
Dir.foreach(Rails.root.join( 'public', 'images').to_s) do |fileName|
    if (!fileName.eql? "..") && (!fileName.eql? ".")

        puts fileName

        Dish.create! ({
            name: Faker::Food.dish,
            image: "/images/#{ fileName }",
            category: Faker::Food.ethnic_category,
            label: 'Label',
            price: 29.76,
            featured: true,
            description: Faker::Food.description
        })
    end
end