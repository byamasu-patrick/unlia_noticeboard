class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :rating
      t.text :comment
      t.string :author
      t.references :dish, null: false, foreign_key: true

      t.timestamps
    end
  end
end
