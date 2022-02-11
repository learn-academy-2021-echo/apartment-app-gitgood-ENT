# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# {
#     street: '',
#     city: '',
#     state: '',
#     manager: '',
#     email: '',
#     price: '',
#     bedrooms: ,
#     bathrooms: ,
#     pets: ''
# }

test_user = User.create(email: 'test_user@apartments.com', password: 'password123', password_confirmation: 'password123')

apartments = [
    {
        street: '1234 A Street',
        city: 'San Diego',
        state: 'CA',
        manager: 'Steve',
        email: 'Steve@management.com',
        price: '$2200',
        bedrooms: 1,
        bathrooms: 1,
        pets: 'No',
        user_id: 1
    },
    {
        street: '1234.5 A Street',
        city: 'San Diego',
        state: 'CA',
        manager: 'Steve',
        email: 'Steve@management.com',
        price: '$2200',
        bedrooms: 1,
        bathrooms: 1,
        pets: 'No',
        user_id: 1
    }
]

apartments.each do |value|
    Apartment.create value
end