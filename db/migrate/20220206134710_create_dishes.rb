class CreateDishes < ActiveRecord::Migration[6.1]
  def change
    create_table :dishes do |t|
      t.string :name, null: false
      t.string :image, null: false
      t.string :category, null: false
      t.string :label
      t.float :price, null: false
      t.boolean :featured
      t.text :description, null: false

      t.timestamps
    end
  end
end
