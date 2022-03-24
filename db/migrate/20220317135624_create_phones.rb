class CreatePhones < ActiveRecord::Migration[6.1]
  def change
    create_table :phones do |t|
      t.string :title
      t.string :display_title
      t.string :color
      t.string :image
      t.string :size
      t.integer :stock
      t.integer :storage
      t.integer :price


      t.timestamps
    end
  end
end
